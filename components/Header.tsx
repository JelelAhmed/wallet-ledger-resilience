export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 md:p-4 lg:px-12 border-b border-[rgba(73,101,110,0.2)] flex-wrap">
      <div className="flex items-center gap-1">
        <div className="w-8 h-8 border-[2.5px] border-[#437D8E] rounded-full"></div>
        <span className="text-2xl tracking-tight text-[#437D8E] font-bold">
          FinTrack
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-6 h-6 border border-[#1B2528] rounded"></div>
        <div className="w-6 h-6 border border-[#1B2528] rounded"></div>
        <img
          src="https://via.placeholder.com/40"
          className="w-10 h-10 rounded-full object-cover"
          alt="User"
        />
      </div>
    </header>
  );
}
