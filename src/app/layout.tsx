import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minglang Packaging",
  description: "Premium flexible packaging manufacturer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
