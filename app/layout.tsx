import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Radhika Foundation Nepal",
  description:
    "Official Website of Radhika Foundation Nepal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}