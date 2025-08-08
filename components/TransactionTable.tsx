"use client";

import { useState, useMemo } from "react";
import { Transaction } from "@/types";

interface TransactionTableProps {
  transactions: Transaction[];
}

export default function TransactionTable({
  transactions,
}: TransactionTableProps) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Transaction;
    direction: "asc" | "desc";
  } | null>(null);

  const handleSort = (key: keyof Transaction) => {
    setSortConfig((prev) => {
      if (prev?.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "asc" };
    });
  };

  const sortedTransactions = useMemo(() => {
    const sortable: Transaction[] = [...transactions];
    if (sortConfig) {
      sortable.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        if (typeof aValue === "number" && typeof bValue === "number") {
          return sortConfig.direction === "asc"
            ? aValue - bValue
            : bValue - aValue;
        }
        return sortConfig.direction === "asc"
          ? String(aValue).localeCompare(String(bValue))
          : String(bValue).localeCompare(String(aValue));
      });
    }
    return sortable;
  }, [transactions, sortConfig]);

  const getHeaderClass = (key: keyof Transaction) =>
    sortConfig?.key === key ? "text-blue-600" : "";

  return (
    <div className="mt-6 overflow-x-auto">
      {/* Mobile sort control */}
      <div className="sm:hidden mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Sort by:
        </label>
        <select
          value={sortConfig?.key || ""}
          onChange={(e) => handleSort(e.target.value as keyof Transaction)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm"
        >
          <option value="">Default</option>
          <option value="date">Date</option>
          <option value="remark">Remark</option>
          <option value="amount">Amount</option>
          <option value="currency">Currency</option>
          <option value="type">Type</option>
        </select>
      </div>

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
            <th
              className={`py-2 pl-0 pr-6 border-b-[1.5px] cursor-pointer ${getHeaderClass(
                "date"
              )}`}
              onClick={() => handleSort("date")}
            >
              <div className="flex items-center gap-1">
                <span>Date</span>
                <span>
                  {sortConfig?.key === "date" && sortConfig.direction === "asc"
                    ? "▲"
                    : "▼"}
                </span>
              </div>
            </th>
            {/* Remark */}
            <th
              className={`py-2 px-6 border-b-[1.5px] cursor-pointer ${getHeaderClass(
                "remark"
              )}`}
              onClick={() => handleSort("remark")}
            >
              <div className="flex items-center gap-1">
                <span>Remark</span>
                <span>
                  {sortConfig?.key === "remark" &&
                  sortConfig.direction === "asc"
                    ? "▲"
                    : "▼"}
                </span>
              </div>
            </th>
            {/* Amount */}
            <th
              className={`py-2 px-6 border-b-[1.5px] text-right cursor-pointer ${getHeaderClass(
                "amount"
              )}`}
              onClick={() => handleSort("amount")}
            >
              <div className="flex items-center gap-1 justify-end">
                <span>Amount</span>
                <span>
                  {sortConfig?.key === "amount" &&
                  sortConfig.direction === "asc"
                    ? "▲"
                    : "▼"}
                </span>
              </div>
            </th>
            {/* Currency */}
            <th
              className={`py-2 px-6 border-b-[1.5px] cursor-pointer ${getHeaderClass(
                "currency"
              )}`}
              onClick={() => handleSort("currency")}
            >
              <div className="flex items-center gap-1">
                <span>Currency</span>
                <span>
                  {sortConfig?.key === "currency" &&
                  sortConfig.direction === "asc"
                    ? "▲"
                    : "▼"}
                </span>
              </div>
            </th>
            {/* Type */}
            <th
              className={`py-2 pl-6 pr-0 border-b-[1.5px] cursor-pointer ${getHeaderClass(
                "type"
              )}`}
              onClick={() => handleSort("type")}
            >
              <div className="flex items-center gap-1 justify-end">
                <span>Type</span>
                <span>
                  {sortConfig?.key === "type" && sortConfig.direction === "asc"
                    ? "▲"
                    : "▼"}
                </span>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedTransactions.map((t, index) => {
            const formattedAmount =
              t.amount < 0
                ? `-$${Math.abs(t.amount).toLocaleString()}`
                : `$${t.amount.toLocaleString()}`;

            const isLastRow = index === sortedTransactions.length - 1;

            return (
              <tr
                key={t.id}
                className="hover:bg-[rgba(56,103,118,0.05)] cursor-pointer"
              >
                <td
                  className={`py-[18px] pl-0 pr-6 text-[15px] text-[#1B2528] ${
                    !isLastRow ? "border-b border-[rgba(73,101,110,0.2)]" : ""
                  }`}
                >
                  {t.date}
                </td>

                <td
                  className={`py-[18px] px-6 text-[15px] text-[#1B2528] ${
                    !isLastRow ? "border-b border-[rgba(73,101,110,0.2)]" : ""
                  }`}
                >
                  {t.remark}
                </td>

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
        {sortedTransactions.map((t) => (
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
