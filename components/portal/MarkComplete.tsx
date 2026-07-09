"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function MarkComplete({ lessonId, alreadyDone }: { lessonId: string; alreadyDone: boolean }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(alreadyDone);

  async function handleClick() {
    setSubmitting(true);
    const res = await fetch("/api/quiz/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lessonId, answers: {} }),
    });
    if (res.ok) {
      setDone(true);
      router.refresh();
    }
    setSubmitting(false);
  }

  if (done) {
    return <p style={{ marginTop: 24, color: "#1E7A3E" }}>✓ Marked complete</p>;
  }

  return (
    <button type="button" className="btn" onClick={handleClick} disabled={submitting} style={{ marginTop: 24 }}>
      {submitting ? "Saving…" : "Mark as complete"}
    </button>
  );
}
