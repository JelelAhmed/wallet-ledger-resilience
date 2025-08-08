import { DashboardSummary } from "@/types";

interface SummaryCardsProps {
  data: DashboardSummary;
}

export default function SummaryCards({ data }: SummaryCardsProps) {
  const cards = [
    {
      label: "Total Balance",
      value: data.totalBalance,
      change: data.balanceChange,
    },
    {
      label: "Total Credits",
      value: data.totalCredits,
      change: data.creditsChange,
    },
    {
      label: "Total Debits",
      value: data.totalDebits,
      change: data.debitsChange,
    },
    {
      label: "Transactions",
      value: data.transactionCount,
      change: data.transactionChange,
    },
  ];

  return (
    <section className="mt-7">
      <h2 className="text-lg font-semibold">Summary</h2>
      <div className="flex flex-wrap gap-7 mt-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className="flex-1 min-w-[200px] bg-[rgba(52,97,111,0.09)] rounded-2xl p-7 transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer"
          >
            <div className="text-[17px] font-bold">{card.label}</div>
            <div className="text-[34px] font-bold my-1">
              ${card.value.toLocaleString()}
            </div>
            <div className="text-[13px] font-medium text-[#3E7383]">
              {card.change > 0 ? `+${card.change}%` : `${card.change}%`}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
