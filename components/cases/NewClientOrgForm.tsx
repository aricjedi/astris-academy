"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function NewClientOrgForm({ companies }: { companies: { id: string; name: string }[] }) {
  const router = useRouter();
  const [companyId, setCompanyId] = useState("");
  const [newCompanyName, setNewCompanyName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminFullName, setAdminFullName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    const res = await fetch("/api/case-admin/create-company", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        companyId: companyId || undefined,
        newCompanyName: companyId ? undefined : newCompanyName,
        adminEmail,
        adminFullName,
      }),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.error ?? "Something went wrong");
      setSubmitting(false);
      return;
    }

    setSuccess(`Org admin invited for ${data.company?.name ?? "the client org"}.`);
    setCompanyId("");
    setNewCompanyName("");
    setAdminEmail("");
    setAdminFullName("");
    setSubmitting(false);
    router.refresh();
  }

  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 480 }}>
        <span className="eyebrow">Super Admin</span>
        <h1 style={{ fontSize: 28, margin: "10px 0 24px" }}>Add client org</h1>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="eyebrow" style={{ color: "var(--slate)" }}>
              Existing company (optional)
            </span>
            <select
              value={companyId}
              onChange={(e) => setCompanyId(e.target.value)}
              style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16 }}
            >
              <option value="">— Create a new company —</option>
              {companies.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>
          {!companyId && (
            <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span className="eyebrow" style={{ color: "var(--slate)" }}>
                New company name
              </span>
              <input
                type="text"
                required={!companyId}
                value={newCompanyName}
                onChange={(e) => setNewCompanyName(e.target.value)}
                style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16 }}
              />
            </label>
          )}
          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="eyebrow" style={{ color: "var(--slate)" }}>
              Org admin&rsquo;s email
            </span>
            <input
              type="email"
              required
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16 }}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="eyebrow" style={{ color: "var(--slate)" }}>
              Org admin&rsquo;s full name (optional)
            </span>
            <input
              type="text"
              value={adminFullName}
              onChange={(e) => setAdminFullName(e.target.value)}
              style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16 }}
            />
          </label>
          {error && <p style={{ color: "#B3261E", fontSize: 14.5 }}>{error}</p>}
          {success && <p style={{ color: "#1E7A3E", fontSize: 14.5 }}>{success}</p>}
          <button type="submit" className="btn" disabled={submitting}>
            {submitting ? "Sending…" : "Send invite"}
          </button>
        </form>
        <p style={{ marginTop: 24, fontSize: 14 }}>
          <Link href="/cases/super-admin">&larr; Back to client orgs</Link>
        </p>
      </div>
    </section>
  );
}
