import { Transaction } from "@/types";

interface TransactionTableProps {
  transactions: Transaction[];
}

export default function TransactionTable({
  transactions,
}: TransactionTableProps) {
  return (
    <div className="mt-6 overflow-x-auto">
      {/* Desktop Table */}
      <table className="w-full hidden sm:table table-fixed border-separate border-spacing-x-4 border-spacing-y-0">
        <colgroup>
          <col style={{ width: "555px" }} />
          <col style={{ width: "122px" }} />
          <col style={{ width: "73px" }} />
          <col style={{ width: "80px" }} />
          <col style={{ width: "74px" }} />
        </colgroup>

        <thead>
          <tr className="text-left text-[13px] font-medium text-[rgba(21,39,45,0.62)]">
            {/* Date */}
            <th className="py-2 pl-0 pr-6 border-b-[1.5px] border-[rgba(73,101,110,0.2)]">
              <div className="flex items-center gap-1">
                <span>Date</span>
                <span>▾</span>
              </div>
            </th>
            {/* Remark */}
            <th className="py-2 px-6 border-b-[1.5px] border-[rgba(73,101,110,0.2)]">
              <div className="flex items-center gap-1">
                <span>Remark</span>
                <span>▾</span>
              </div>
            </th>
            {/* Amount */}
            <th className="py-2 px-6 border-b-[1.5px] border-[rgba(73,101,110,0.2)] text-right">
              <div className="flex items-center gap-1">
                <span>Amount</span>
                <span>▾</span>
              </div>
            </th>
            {/* Currency */}
            <th className="py-2 px-6 border-b-[1.5px] border-[rgba(73,101,110,0.2)]">
              <div className="flex items-center gap-1">
                <span>Currency</span>
                <span>▾</span>
              </div>
            </th>
            {/* Type */}
            <th className="py-2 pl-6 pr-0 border-b-[1.5px] border-[rgba(73,101,110,0.2)]">
              <div className="flex items-center gap-1 justify-end">
                <span>Type</span>
                <span>▾</span>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t, index) => {
            const formattedAmount =
              t.amount < 0
                ? `-$${Math.abs(t.amount).toLocaleString()}`
                : `$${t.amount.toLocaleString()}`;

            const isLastRow = index === transactions.length - 1;

            return (
              <tr
                key={t.id}
                className="hover:bg-[rgba(56,103,118,0.05)] cursor-pointer"
              >
                {/* Date */}
                <td
                  className={`py-[18px] pl-0 pr-6 text-[15px] text-[#1B2528] ${
                    !isLastRow ? "border-b border-[rgba(73,101,110,0.2)]" : ""
                  }`}
                >
                  {t.date}
                </td>

                {/* Remark */}
                <td
                  className={`py-[18px] px-6 text-[15px] text-[#1B2528] ${
                    !isLastRow ? "border-b border-[rgba(73,101,110,0.2)]" : ""
                  }`}
                >
                  {t.remark}
                </td>

                {/* Amount */}
                <td
                  className={`py-[18px] px-6 text-[15px] text-[#1B2528] font-medium text-right ${
                    !isLastRow ? "border-b border-[rgba(73,101,110,0.2)]" : ""
                  }`}
                >
                  {formattedAmount}
                </td>

                {/* Currency */}
                <td
                  className={`py-[18px] px-6 text-[15px] text-[#1B2528] ${
                    !isLastRow ? "border-b border-[rgba(73,101,110,0.2)]" : ""
                  }`}
                >
                  {t.currency}
                </td>

                {/* Type */}
                <td
                  className={`py-[18px] pl-6 pr-0 ${
                    !isLastRow ? "border-b border-[rgba(73,101,110,0.2)]" : ""
                  }`}
                >
                  <div className="flex justify-end">
                    <div className="inline-flex items-center h-[28px] px-3 gap-2 rounded-[16px] bg-[rgba(52,97,111,0.09)]">
                      <span
                        className={`w-[6px] h-[6px] rounded-full block ${
                          t.type === "Credit" ? "bg-[#087A2E]" : "bg-[#C6381B]"
                        }`}
                      />
                      <span className="text-[15px] font-medium text-[#1B2528]">
                        {t.type}
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Mobile Table */}
      <div className="sm:hidden space-y-4 mt-4">
        {transactions.map((t) => (
          <div
            key={t.id}
            className="p-4 border-b border-[rgba(73,101,110,0.2)] rounded-sm"
          >
            <div className="flex justify-between">
              <span className="font-medium text-[rgba(21,39,45,0.62)]">
                Date
              </span>
              <span className="text-[15px] text-[#1B2528]">{t.date}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-[rgba(21,39,45,0.62)]">
                Remark
              </span>
              <span className="text-[15px] text-[#1B2528]">{t.remark}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-[rgba(21,39,45,0.62)]">
                Amount
              </span>
              <span className="text-[15px] text-[#1B2528]">
                {t.amount < 0
                  ? `-$${Math.abs(t.amount).toLocaleString()}`
                  : `$${t.amount.toLocaleString()}`}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-[rgba(21,39,45,0.62)]">
                Currency
              </span>
              <span className="text-[15px] text-[#1B2528]">{t.currency}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-medium text-[rgba(21,39,45,0.62)]">
                Type
              </span>
              <div className="flex items-center">
                <span
                  className={`w-[6px] h-[6px] rounded-full mr-2 ${
                    t.type === "Credit" ? "bg-[#087A2E]" : "bg-[#C6381B]"
                  }`}
                />
                <span className="text-[15px] text-[#1B2528]">{t.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
