import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Astris Academy",
  icons: {
    icon: "/assets/astris-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- this rule targets the Pages Router; the App Router root layout is the documented place for font links */}
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;600;700;800&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
