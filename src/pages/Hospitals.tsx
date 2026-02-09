const mockHospitals = [
  { id: 1, name: "Life Pillar", accountNumber: "", bankName: "", referrals: 1 },
  { id: 2, name: "City Hospital", accountNumber: "0123456789", bankName: "First Bank", referrals: 5 },
  { id: 3, name: "Grace Clinic", accountNumber: "9876543210", bankName: "GTBank", referrals: 3 },
];

const Hospitals = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-display font-bold text-foreground">Hospitals</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage referral hospitals and their details</p>
      </div>

      <div className="rounded-lg border border-border overflow-hidden bg-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-table-header">
              {["S/n", "Referral Name", "Account Number", "Bank Name", "No of Referrals"].map((h) => (
                <th key={h} className="px-4 py-3 text-left font-semibold text-foreground">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mockHospitals.map((h, i) => (
              <tr key={h.id} className="border-t border-border hover:bg-table-row-hover transition-colors">
                <td className="px-4 py-3">{i + 1}</td>
                <td className="px-4 py-3">{h.name}</td>
                <td className="px-4 py-3 font-mono text-xs">{h.accountNumber || "—"}</td>
                <td className="px-4 py-3">{h.bankName || "—"}</td>
                <td className="px-4 py-3 text-center">{h.referrals}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hospitals;
