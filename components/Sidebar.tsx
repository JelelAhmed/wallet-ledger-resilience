export default function Sidebar() {
  const menu = ["Dashboard", "Transactions", "Reports", "Settings"];

  return (
    <aside className="w-full lg:w-60 flex lg:flex-col gap-2">
      {menu.map((item, idx) => (
        <div
          key={idx}
          className={`px-4 py-2 rounded-xl text-[15px] font-medium cursor-pointer ${
            idx === 0
              ? "bg-[rgba(56,103,118,0.16)] text-[#3A6C7B]"
              : "hover:bg-[rgba(56,103,118,0.08)] hover:text-[#3A6C7B]"
          }`}
        >
          {item}
        </div>
      ))}
    </aside>
  );
}
