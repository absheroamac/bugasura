import type { Metadata } from "next";
import "./globals.css";
import { Inter, Caveat } from "next/font/google";
import { ScrollProvider } from "@/components/layout/ScrollProvider";

const inter  = Inter({ subsets: ["latin"], variable: "--font-inter" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Bugasura — Agentic QA for the AI Era",
  description: "The operating system for building quality. Bug tracker, test management, AI agents — free forever, unlimited users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${caveat.variable}`}>
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
