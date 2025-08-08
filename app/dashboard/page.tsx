import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Tabs from "@/components/Tabs";
import SummaryCards from "@/components/SummaryCards";
import StatusBadge from "@/components/Statusbadge";
import TransactionTable from "@/components/TransactionTable";
import { summaryData, transactions } from "@/data/mockData";

export default function DashboardPage() {
  return (
    <div className="bg-[#FCFDFD] text-[#1B2528] min-h-screen">
      <Header />
      <div className="flex gap-12 p-5 md:p-7 lg:px-12 flex-col lg:flex-row">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <div className="flex flex-wrap justify-between items-center gap-3">
            <div className="flex items-center gap-4">
              <h1 className="text-[34px] font-bold tracking-tight">
                Wallet Ledger
              </h1>
              <StatusBadge status="Active" />
            </div>
          </div>
          <Tabs tabs={["Overview", "Transactions"]} activeTab="Overview" />
          <SummaryCards data={summaryData} />
          <TransactionTable transactions={transactions} />
        </main>
      </div>
    </div>
  );
}
