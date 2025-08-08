"use client";

import { MoreHorizontal } from "lucide-react";
import StatusBadge from "@/components/StatusBadge";

export default function WalletLedgerHeader() {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4 mb-6 w-full">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <h1 className="text-[34px] font-bold tracking-tight text-[#1B2528]">
              Wallet Ledger
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#1B2528"
              className="sm:translate-y-[3px]"
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
            <div className="self-center sm:translate-y-[5px]">
              <StatusBadge status="Active" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-[18px] py-2 bg-[#4B8B9F] rounded-[16px] text-[15px] font-medium text-[#020303] hover:opacity-90 transition">
          Share
        </button>

        <button className="flex items-center justify-center p-2 w-9 h-9 bg-[#FCFDFD] border border-[rgba(73,101,110,0.2)] rounded-[16px] hover:bg-gray-50 transition">
          <MoreHorizontal className="w-5 h-5 text-[#1B2528]" />
        </button>
      </div>
    </div>
  );
}
