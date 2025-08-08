import { DashboardSummary } from "@/types";
import { MoreHorizontal } from "lucide-react";

interface SummaryCardsProps {
  data: DashboardSummary;
}

export default function SummaryCards({ data }: SummaryCardsProps) {
  const cards = [
    {
      label: "Total Balance",
      value: data.totalBalance,
      change: data.balanceChange,
      isCurrency: true,
    },
    {
      label: "Total Credits",
      value: data.totalCredits,
      change: data.creditsChange,
      isCurrency: true,
    },
    {
      label: "Total Debits",
      value: data.totalDebits,
      change: data.debitsChange,
      isCurrency: true,
    },
    {
      label: "Transactions",
      value: data.transactionCount,
      change: data.transactionChange,
      isCurrency: false,
    },
  ];

  return (
    <section className="mt-7">
      <h2 className="text-[20px] font-bold tracking-tight text-[#1B2528]">
        Summary
      </h2>
      <div className="flex flex-wrap gap-7 mt-[18px]">
        {cards.map((card) => (
          <div
            key={card.label}
            className="flex flex-col bg-[rgba(52,97,111,0.09)] rounded-[20px] p-7 gap-[18px] min-w-[223px] flex-1 hover:-translate-y-1 hover:shadow-md transition-transform cursor-pointer"
          >
            {/* Title row */}
            <div className="flex justify-between items-center">
              <span className="text-[17px] font-bold text-[#1B2528]">
                {card.label}
              </span>
              <MoreHorizontal className="w-5 h-5 text-[#1B2528]" />
            </div>

            {/* Value + Change */}
            <div className="flex flex-col gap-1">
              <div className="text-[34px] font-bold text-[#1B2528] leading-[40px]">
                {card.isCurrency
                  ? `$${card.value.toLocaleString()}`
                  : card.value.toLocaleString()}
              </div>
              <div className="text-[13px] font-medium text-[#3E7383]">
                {card.change > 0 ? `+${card.change}%` : `${card.change}%`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
