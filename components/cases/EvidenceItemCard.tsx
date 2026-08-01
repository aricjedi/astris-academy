"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Attachment = {
  id: string;
  file_name: string;
  storage_path: string;
  content_type: string | null;
  size_bytes: number | null;
};

export function EvidenceItemCard({
  caseId,
  companyId,
  item,
  attachments,
}: {
  caseId: string;
  companyId: string;
  item: {
    id: string;
    description: string;
    source: string | null;
    custodian: string | null;
    chain_of_custody_notes: string | null;
    tags: string[];
    collected_at: string;
  };
  attachments: Attachment[];
}) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);

    const supabase = createClient();
    const storagePath = `${companyId}/${caseId}/${item.id}/${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage.from("case-evidence").upload(storagePath, file);
    if (uploadError) {
      setError(uploadError.message);
      setUploading(false);
      return;
    }

    const res = await fetch(`/api/cases/${caseId}/evidence/${item.id}/attachments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        storagePath,
        fileName: file.name,
        contentType: file.type,
        sizeBytes: file.size,
      }),
    });
    const data = await res.json();
    setUploading(false);

    if (!res.ok) {
      setError(data.error ?? "Something went wrong recording the file");
      return;
    }

    if (fileInputRef.current) fileInputRef.current.value = "";
    router.refresh();
  }

  async function handleDownload(path: string) {
    const supabase = createClient();
    const { data, error: signError } = await supabase.storage
      .from("case-evidence")
      .createSignedUrl(path, 60);
    if (signError || !data) {
      setError(signError?.message ?? "Could not generate a download link");
      return;
    }
    window.open(data.signedUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="fact-box" style={{ marginBottom: 16 }}>
      <p style={{ marginBottom: 8 }}>{item.description}</p>
      <div style={{ fontSize: 13.5, color: "var(--slate)", marginBottom: 8 }}>
        {item.source && <span>Source: {item.source} &middot; </span>}
        {item.custodian && <span>Custodian: {item.custodian} &middot; </span>}
        Collected {new Date(item.collected_at).toLocaleDateString()}
      </div>
      {item.chain_of_custody_notes && (
        <p style={{ fontSize: 13.5, color: "var(--slate)", marginBottom: 8 }}>
          Chain of custody: {item.chain_of_custody_notes}
        </p>
      )}
      {item.tags.length > 0 && (
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
          {item.tags.map((t) => (
            <span key={t} className="pill">
              {t}
            </span>
          ))}
        </div>
      )}

      {attachments.length > 0 && (
        <ul style={{ listStyle: "none", marginBottom: 8 }}>
          {attachments.map((a) => (
            <li key={a.id} style={{ fontSize: 14, padding: "4px 0" }}>
              <button
                type="button"
                onClick={() => handleDownload(a.storage_path)}
                style={{ background: "none", border: "none", color: "var(--navy)", textDecoration: "underline", cursor: "pointer", padding: 0, font: "inherit" }}
              >
                {a.file_name}
              </button>
              {a.size_bytes && (
                <span style={{ color: "var(--slate)" }}> &middot; {Math.round(a.size_bytes / 1024)} KB</span>
              )}
            </li>
          ))}
        </ul>
      )}

      <label className="btn secondary" style={{ display: "inline-block", cursor: "pointer", fontSize: 14 }}>
        {uploading ? "Uploading…" : "+ Attach file"}
        <input ref={fileInputRef} type="file" onChange={handleUpload} disabled={uploading} style={{ display: "none" }} />
      </label>
      {error && <p style={{ color: "#B3261E", fontSize: 14, marginTop: 8 }}>{error}</p>}
    </div>
  );
}
