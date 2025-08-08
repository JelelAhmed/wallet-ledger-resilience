export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 via-sky-300 to-sky-500">
      <h1 className="text-4xl font-bold text-white drop-shadow-lg">
        Tailwind v3 is Alive! 🚀
      </h1>
      <p className="mt-4 text-lg text-white/90">
        If you can see this gradient and big text, everything is working.
      </p>
      <button className="mt-6 px-6 py-2 rounded-lg bg-sky-700 text-white hover:bg-sky-800 transition-colors">
        Test Button
      </button>
    </div>
  );
}
