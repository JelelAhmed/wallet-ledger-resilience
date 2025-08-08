interface TabsProps {
  tabs: string[];
  activeTab: string;
}

export default function Tabs({ tabs, activeTab }: TabsProps) {
  return (
    <div className="flex border-b border-[rgba(73,101,110,0.2)] mt-7 overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`px-7 py-3 text-[15px] font-medium cursor-pointer ${
            activeTab === tab
              ? "border-b-2 border-[#4B8B9F] text-[#437D8E]"
              : "hover:text-[#3A6C7B]"
          }`}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}
