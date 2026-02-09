import { Wallet, TrendingUp, TrendingDown } from "lucide-react";

const Accounts = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-display font-bold text-foreground">Accounts</h1>
        <p className="text-sm text-muted-foreground mt-1">Financial overview and transaction history</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-card rounded-xl border border-border p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-accent rounded-lg p-2">
              <Wallet className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Total Revenue</span>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">₦124,500</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-accent rounded-lg p-2">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Cash Received</span>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">₦78,000</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-accent rounded-lg p-2">
              <TrendingDown className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Outstanding</span>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">₦46,500</p>
        </div>
      </div>

      {/* Recent transactions */}
      <div className="rounded-lg border border-border overflow-hidden bg-card">
        <div className="px-4 py-3 bg-table-header">
          <h3 className="font-semibold text-foreground">Recent Transactions</h3>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              {["Date", "Patient", "Service", "Amount", "Method"].map((h) => (
                <th key={h} className="px-4 py-3 text-left font-semibold text-foreground">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { date: "02/08/2026", patient: "O. Agboola", service: "Malaria", amount: 4000, method: "Cash" },
              { date: "02/07/2026", patient: "A. Okonkwo", service: "Full Blood Count", amount: 6500, method: "Transfer" },
              { date: "02/06/2026", patient: "C. Eze", service: "Urinalysis", amount: 3000, method: "POS" },
            ].map((t, i) => (
              <tr key={i} className="border-t border-border hover:bg-table-row-hover transition-colors">
                <td className="px-4 py-3">{t.date}</td>
                <td className="px-4 py-3">{t.patient}</td>
                <td className="px-4 py-3">{t.service}</td>
                <td className="px-4 py-3 font-mono">₦{t.amount.toLocaleString()}</td>
                <td className="px-4 py-3">{t.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Accounts;
