import Link from "next/link";
import Image from "next/image";

export function SiteHeader({ variant }: { variant: "home" | "course" }) {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link className="brand" href="/">
          <Image src="/assets/astris-logo.png" alt="Astris Integrity Consulting" width={1036} height={1036} />
          <span className="brand-academy">Academy</span>
        </Link>
        <nav className="site-nav">
          {variant === "home" ? (
            <a href="https://astris-integrity.com">astris-integrity.com&nbsp;&rarr;</a>
          ) : (
            <Link href="/">All courses</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
