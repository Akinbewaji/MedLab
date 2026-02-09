import { useState } from "react";
import { Input } from "@/components/ui/input";

const mockPatients = [
  {
    id: 1,
    firstName: "Olorunfemi",
    lastName: "Agboola",
    phone: "09083253424",
    email: "oagboola.2200518@stu.cu.edu.ng",
    dob: "",
    visits: 1,
  },
  {
    id: 2,
    firstName: "Adebayo",
    lastName: "Okonkwo",
    phone: "08012345678",
    email: "adebayo@email.com",
    dob: "1990-05-14",
    visits: 3,
  },
];

const Patients = () => {
  const [searchFirst, setSearchFirst] = useState("");
  const [searchLast, setSearchLast] = useState("");

  const filtered = mockPatients.filter(
    (p) =>
      p.firstName.toLowerCase().includes(searchFirst.toLowerCase()) &&
      p.lastName.toLowerCase().includes(searchLast.toLowerCase())
  );

  return (
    <div>
      {/* Search */}
      <div className="flex flex-wrap gap-3 mb-6">
        <Input placeholder="firstName" value={searchFirst} onChange={(e) => setSearchFirst(e.target.value)} className="w-40 bg-card" />
        <Input placeholder="lastName" value={searchLast} onChange={(e) => setSearchLast(e.target.value)} className="w-40 bg-card" />
        <Input placeholder="phoneNumber" className="w-40 bg-card" />
        <Input placeholder="patientMail" className="w-40 bg-card" />
      </div>

      {/* Overview */}
      <div className="bg-card rounded-xl border border-border p-6 mb-6">
        <h2 className="text-xl font-display font-bold text-foreground mb-4">Patient Overview</h2>
        <div className="flex gap-4">
          <div className="border border-border rounded-lg p-4 min-w-[120px]">
            <p className="text-3xl font-display font-bold text-foreground">{filtered.length}</p>
            <p className="text-xs text-muted-foreground mt-1">No of Patients</p>
          </div>
          <div className="border border-border rounded-lg p-4 min-w-[120px]">
            <p className="text-3xl font-display font-bold text-foreground">
              {filtered.reduce((a, p) => a + p.visits, 0)}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Total Visits</p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-border overflow-hidden bg-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-table-header">
                {["S/n", "FirstName", "LastName", "Phone Number", "Email", "Date of Birth", "No of Visits"].map(
                  (h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold text-foreground">{h}</th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {filtered.map((p, i) => (
                <tr key={p.id} className="border-t border-border hover:bg-table-row-hover transition-colors">
                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3">{p.firstName}</td>
                  <td className="px-4 py-3">{p.lastName}</td>
                  <td className="px-4 py-3 font-mono text-xs">{p.phone}</td>
                  <td className="px-4 py-3 text-xs">{p.email}</td>
                  <td className="px-4 py-3">{p.dob || "—"}</td>
                  <td className="px-4 py-3 text-center">{p.visits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Patients;
