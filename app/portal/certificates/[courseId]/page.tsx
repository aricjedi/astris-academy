import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PrintButton } from "@/components/portal/PrintButton";

export default async function CertificatePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: certificate } = await supabase
    .from("certificates")
    .select("certificate_number, issued_at")
    .eq("user_id", user!.id)
    .eq("course_id", courseId)
    .single();

  if (!certificate) notFound();

  const { data: course } = await supabase.from("courses").select("title").eq("id", courseId).single();
  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, email")
    .eq("id", user!.id)
    .single();

  const issuedDate = new Date(certificate.issued_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
        background: "var(--paper)",
      }}
    >
      <div
        style={{
          maxWidth: 720,
          width: "100%",
          background: "var(--white)",
          border: "1px solid var(--line)",
          borderTop: "6px solid var(--navy)",
          borderRadius: "var(--radius)",
          padding: "56px 64px",
          textAlign: "center",
        }}
      >
        <Image
          src="/assets/astris-logo.png"
          alt="Astris Integrity Consulting"
          width={1036}
          height={1036}
          style={{ height: 56, width: 56, margin: "0 auto 24px" }}
        />
        <span className="eyebrow">Astris Integrity Consulting</span>
        <h1 style={{ fontSize: 28, margin: "12px 0 4px" }}>Certificate of Completion</h1>
        <p style={{ color: "var(--slate)", marginBottom: 32 }}>
          Based on <em>The Agile Investigator</em> methodology
        </p>
        <p style={{ fontSize: 15, color: "var(--slate)" }}>This certifies that</p>
        <p style={{ fontSize: 24, fontWeight: 700, margin: "8px 0 24px" }}>
          {profile?.full_name || profile?.email}
        </p>
        <p style={{ fontSize: 15, color: "var(--slate)" }}>has completed</p>
        <p style={{ fontSize: 20, fontWeight: 700, margin: "8px 0 32px" }}>{course?.title}</p>
        <p style={{ fontSize: 14, color: "var(--slate)" }}>
          Issued {issuedDate} &middot; Certificate No. {certificate.certificate_number}
        </p>
        <p className="no-print" style={{ marginTop: 32 }}>
          <PrintButton />
        </p>
      </div>
    </section>
  );
}
