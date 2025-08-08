import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FinTrack Wallet Ledger",
  description: "Collaborative wallet tracking app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#FCFDFD] text-[#1B2528] min-h-screen">
        {children}
      </body>
    </html>
  );
}
