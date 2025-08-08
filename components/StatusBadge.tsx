interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <div className="flex items-center gap-2 bg-[rgba(52,97,111,0.09)] px-3 py-1 rounded-full text-[15px] font-medium">
      <span className="w-1.5 h-1.5 bg-[#087A2E] rounded-full"></span>
      {status}
    </div>
  );
}
