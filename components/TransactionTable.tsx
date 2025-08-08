import { Transaction } from "@/types";

interface TransactionTableProps {
  transactions: Transaction[];
}

export default function TransactionTable({
  transactions,
}: TransactionTableProps) {
  return (
    <div className="mt-7 overflow-x-auto">
      {/* Desktop Table */}
      <table className="w-full border-collapse hidden sm:table">
        <thead>
          <tr className="text-left text-[13px] font-medium text-[rgba(21,39,45,0.62)]">
            <th className="py-4">Date</th>
            <th className="py-4">Remark</th>
            <th className="py-4">Amount</th>
            <th className="py-4">Currency</th>
            <th className="py-4">Type</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr
              key={t.id}
              className="hover:bg-[rgba(56,103,118,0.05)] cursor-pointer"
            >
              <td className="py-4">{t.date}</td>
              <td>{t.remark}</td>
              <td>
                {t.amount < 0 ? `-${Math.abs(t.amount)}` : `$${t.amount}`}
              </td>
              <td>{t.currency}</td>
              <td>
                <span
                  className={`inline-block w-2 h-2 rounded-full mr-2 ${
                    t.type === "Credit" ? "bg-green-600" : "bg-red-600"
                  }`}
                ></span>
                {t.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Table */}
      <div className="sm:hidden space-y-4 mt-4">
        {transactions.map((t) => (
          <div
            key={t.id}
            className="p-4 border-b border-[rgba(73,101,110,0.2)]"
          >
            <div className="flex justify-between">
              <span className="font-medium text-[rgba(21,39,45,0.62)]">
                Date
              </span>
              {t.date}
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-[rgba(21,39,45,0.62)]">
                Remark
              </span>
              {t.remark}
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-[rgba(21,39,45,0.62)]">
                Amount
              </span>
              {t.amount}
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-[rgba(21,39,45,0.62)]">
                Currency
              </span>
              {t.currency}
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-[rgba(21,39,45,0.62)]">
                Type
              </span>
              <span
                className={`inline-block w-2 h-2 rounded-full mr-1 ${
                  t.type === "Credit" ? "bg-green-600" : "bg-red-600"
                }`}
              ></span>
              {t.type}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
