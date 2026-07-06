import Link from "next/link";

export function SiteFooter({ variant }: { variant: "home" | "course" }) {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>&copy; 2026 Astris Integrity Consulting. All rights reserved.</span>
        <span>
          {variant === "course" && (
            <>
              <Link href="/">Astris Academy</Link>
              {" "}&middot;{" "}
            </>
          )}
          <a href="https://astris-integrity.com">astris-integrity.com</a>
        </span>
      </div>
    </footer>
  );
}
