"use client";

import React, { useState, useMemo } from "react";
import { Transaction } from "@/types";

interface TransactionTableProps {
  transactions: Transaction[] | null;
  loading?: boolean;
}

type SortColumn = "date" | "remark" | "amount" | "currency" | "type";
type SortDirection = "asc" | "desc";

export default function TransactionTable({
  transactions,
  loading = false,
}: TransactionTableProps) {
  const [sortColumn, setSortColumn] = useState<SortColumn>("date");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  // Sort toggle handler
  function handleSort(column: SortColumn) {
    if (column === sortColumn) {
      // toggle direction
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // switch column, reset to ascending
      setSortColumn(column);
      setSortDirection("asc");
    }
  }

  // Safe sort helper with fallbacks
  const sortedTransactions = useMemo(() => {
    if (!transactions) return [];
    const sortable = [...transactions];

    sortable.sort((a, b) => {
      let aVal: string | number = "";
      let bVal: string | number = "";

      switch (sortColumn) {
        case "date":
          aVal = a.date || "";
          bVal = b.date || "";
          break;
        case "remark":
          aVal = a.remark?.toLowerCase() || "";
          bVal = b.remark?.toLowerCase() || "";
          break;
        case "amount":
          aVal = Number.isFinite(a.amount) ? a.amount : 0;
          bVal = Number.isFinite(b.amount) ? b.amount : 0;
          break;
        case "currency":
          aVal = a.currency?.toLowerCase() || "";
          bVal = b.currency?.toLowerCase() || "";
          break;
        case "type":
          aVal = a.type?.toLowerCase() || "";
          bVal = b.type?.toLowerCase() || "";
          break;
      }

      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
      } else {
        if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
        if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
        return 0;
      }
    });

    return sortable;
  }, [transactions, sortColumn, sortDirection]);

  // Format amount safely
  function formatAmount(amount: number | null | undefined): string {
    if (typeof amount !== "number" || !Number.isFinite(amount)) return "N/A";
    return amount < 0
      ? `-$${Math.abs(amount).toLocaleString()}`
      : `$${amount.toLocaleString()}`;
  }

  const activeHeaderColor = "text-[#0C7C59]";
  const inactiveHeaderColor = "text-[rgba(21,39,45,0.62)]";

  function renderLoadingRows(count: number) {
    return Array.from({ length: count }).map((_, i) => (
      <tr key={`loading-${i}`}>
        {[...Array(5)].map((_, idx) => (
          <td
            key={idx}
            className="py-[18px] px-6 border-b border-[rgba(73,101,110,0.2)]"
          >
            <div className="h-4 bg-gray-300 rounded animate-pulse w-full max-w-[100px]" />
          </td>
        ))}
      </tr>
    ));
  }

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
          <tr className="text-left text-[13px] font-medium">
            <th
              className={`py-2 pl-0 pr-6 border-b-[1.5px] border-[rgba(73,101,110,0.2)] cursor-pointer select-none ${
                sortColumn === "date" ? activeHeaderColor : inactiveHeaderColor
              }`}
              onClick={() => handleSort("date")}
            >
              <div className="flex items-center gap-1">
                <span>Date</span>
                <span>
                  {sortColumn === "date"
                    ? sortDirection === "asc"
                      ? "▲"
                      : "▼"
                    : "▾"}
                </span>
              </div>
            </th>

            <th
              className={`py-2 px-6 border-b-[1.5px] border-[rgba(73,101,110,0.2)] cursor-pointer select-none ${
                sortColumn === "remark"
                  ? activeHeaderColor
                  : inactiveHeaderColor
              }`}
              onClick={() => handleSort("remark")}
            >
              <div className="flex items-center gap-1">
                <span>Remark</span>
                <span>
                  {sortColumn === "remark"
                    ? sortDirection === "asc"
                      ? "▲"
                      : "▼"
                    : "▾"}
                </span>
              </div>
            </th>

            <th
              className={`py-2 px-6 border-b-[1.5px] border-[rgba(73,101,110,0.2)] text-right cursor-pointer select-none ${
                sortColumn === "amount"
                  ? activeHeaderColor
                  : inactiveHeaderColor
              }`}
              onClick={() => handleSort("amount")}
            >
              <div className="flex items-center gap-1 justify-end">
                <span>Amount</span>
                <span>
                  {sortColumn === "amount"
                    ? sortDirection === "asc"
                      ? "▲"
                      : "▼"
                    : "▾"}
                </span>
              </div>
            </th>

            <th
              className={`py-2 px-6 border-b-[1.5px] border-[rgba(73,101,110,0.2)] cursor-pointer select-none ${
                sortColumn === "currency"
                  ? activeHeaderColor
                  : inactiveHeaderColor
              }`}
              onClick={() => handleSort("currency")}
            >
              <div className="flex items-center gap-1">
                <span>Currency</span>
                <span>
                  {sortColumn === "currency"
                    ? sortDirection === "asc"
                      ? "▲"
                      : "▼"
                    : "▾"}
                </span>
              </div>
            </th>

            <th
              className={`py-2 pl-6 pr-0 border-b-[1.5px] border-[rgba(73,101,110,0.2)] cursor-pointer select-none ${
                sortColumn === "type" ? activeHeaderColor : inactiveHeaderColor
              }`}
              onClick={() => handleSort("type")}
            >
              <div className="flex items-center gap-1 justify-end">
                <span>Type</span>
                <span>
                  {sortColumn === "type"
                    ? sortDirection === "asc"
                      ? "▲"
                      : "▼"
                    : "▾"}
                </span>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            renderLoadingRows(6)
          ) : sortedTransactions.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="text-center py-10 text-[15px] text-[rgba(21,39,45,0.5)] font-medium"
              >
                No transactions found.
              </td>
            </tr>
          ) : (
            sortedTransactions.map((t, index) => {
              const formattedAmount = formatAmount(t.amount);
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
                    {t.date || "N/A"}
                  </td>

                  <td
                    className={`py-[18px] px-6 text-[15px] text-[#1B2528] ${
                      !isLastRow ? "border-b border-[rgba(73,101,110,0.2)]" : ""
                    }`}
                  >
                    {t.remark || "N/A"}
                  </td>

                  <td
                    className={`py-[18px] px-6 text-[15px] text-[#1B2528] font-medium text-right ${
                      !isLastRow ? "border-b border-[rgba(73,101,110,0.2)]" : ""
                    }`}
                  >
                    {formattedAmount}
                  </td>

                  <td
                    className={`py-[18px] px-6 text-[15px] text-[#1B2528] ${
                      !isLastRow ? "border-b border-[rgba(73,101,110,0.2)]" : ""
                    }`}
                  >
                    {t.currency || "N/A"}
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
                            t.type === "Credit"
                              ? "bg-[#087A2E]"
                              : "bg-[#C6381B]"
                          }`}
                        />
                        <span className="text-[15px] font-medium text-[#1B2528]">
                          {t.type || "N/A"}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {/* Mobile Table */}
      <div className="sm:hidden flex items-center gap-2 mb-4 px-4">
        <label
          htmlFor="sortColumn"
          className="font-medium text-[rgba(21,39,45,0.62)]"
        >
          Sort by:
        </label>
        <select
          id="sortColumn"
          value={sortColumn}
          onChange={(e) => setSortColumn(e.target.value as SortColumn)}
          className="border rounded px-2 py-1"
        >
          <option value="date">Date</option>
          <option value="remark">Remark</option>
          <option value="amount">Amount</option>
          <option value="currency">Currency</option>
          <option value="type">Type</option>
        </select>
        <button
          onClick={() =>
            setSortDirection(sortDirection === "asc" ? "desc" : "asc")
          }
          className="px-2 py-1 border rounded select-none"
          aria-label="Toggle sort direction"
          type="button"
        >
          {sortDirection === "asc" ? "▲" : "▼"}
        </button>
      </div>

      {/* Mobile Table */}
      <div className="sm:hidden space-y-4 mt-4">
        {loading ? (
          // Mobile loading skeleton cards
          Array.from({ length: 4 }).map((_, i) => (
            <div
              key={`mobile-loading-${i}`}
              className="p-4 border-b border-[rgba(73,101,110,0.2)] rounded-sm"
            >
              {[...Array(5)].map((__, idx) => (
                <div key={idx} className="flex justify-between mb-2 last:mb-0">
                  <div className="h-4 bg-gray-300 rounded animate-pulse w-[40%]" />
                  <div className="h-4 bg-gray-300 rounded animate-pulse w-[40%]" />
                </div>
              ))}
            </div>
          ))
        ) : sortedTransactions.length === 0 ? (
          <div className="text-center py-10 text-[15px] text-[rgba(21,39,45,0.5)] font-medium">
            No transactions found.
          </div>
        ) : (
          sortedTransactions.map((t) => (
            <div
              key={t.id}
              className="p-4 border-b border-[rgba(73,101,110,0.2)] rounded-sm"
            >
              <div className="flex justify-between">
                <span className="font-medium text-[rgba(21,39,45,0.62)]">
                  Date
                </span>
                <span className="text-[15px] text-[#1B2528]">
                  {t.date || "N/A"}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-[rgba(21,39,45,0.62)]">
                  Remark
                </span>
                <span className="text-[15px] text-[#1B2528]">
                  {t.remark || "N/A"}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-[rgba(21,39,45,0.62)]">
                  Amount
                </span>
                <span className="text-[15px] text-[#1B2528]">
                  {formatAmount(t.amount)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-[rgba(21,39,45,0.62)]">
                  Currency
                </span>
                <span className="text-[15px] text-[#1B2528]">
                  {t.currency || "N/A"}
                </span>
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
                  <span className="text-[15px] text-[#1B2528]">
                    {t.type || "N/A"}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
