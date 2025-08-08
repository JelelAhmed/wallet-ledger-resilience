import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-emerald-900 via-purple-900 to-emerald-700 px-6 text-center">
      <h1 className="text-4xl font-extrabold text-emerald-300 drop-shadow-md mb-6">
        Welcome to Your Dashboard! 🎉
      </h1>

      <p className="max-w-md mx-auto text-lg text-emerald-200/90 mb-10">
        This is your central hub. Everything you need is just a click away.
        Ready to get started?
      </p>

      <Link
        className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 via-emerald-500 to-purple-700
                     text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl
                     transition-transform duration-300"
        aria-label="Go to Dashboard"
        href="/dashboard"
      >
        Go to Wallet Ledger Dashboard
      </Link>
    </div>
  );
}
