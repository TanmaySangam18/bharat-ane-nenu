import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/lib/lang";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Bharat Ane Nenu — Andhra Pradesh accountability ledger",
  description:
    "Every promise has a clock. Every outcome is done or not done. A bilingual (English/Telugu) public ledger of Andhra Pradesh manifesto promises, tracked by government term with sources.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LangProvider>
          <Header />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
