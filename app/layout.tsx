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
      <body className="min-h-screen flex bg-gray-50">
        {/* Sidebar placeholder */}
        <aside className="w-60 bg-white border-r border-gray-200">
          <div className="p-4 font-bold text-xl text-sky-700">FinTrack</div>
        </aside>

        <main className="flex-1 flex flex-col">
          {/* Header placeholder */}
          <header className="h-16 border-b border-gray-200 bg-white flex items-center px-4">
            Header
          </header>

          <div className="p-6">{children}</div>
        </main>
      </body>
    </html>
  );
}
