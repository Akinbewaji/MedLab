import { useState } from "react";
import { Search, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RegisterPatientForm } from "@/components/RegisterPatientForm";

type StatusFilter = "all" | "completed" | "uncompleted";

const mockPatients = [
  {
    id: 1,
    labNumber: "LAB/25/001",
    firstName: "Olorunfemi",
    lastName: "Agboola",
    status: "uncompleted" as const,
    referral: "Life Pillar",
    age: 15,
    gender: "Male",
  },
  {
    id: 2,
    labNumber: "LAB/25/002",
    firstName: "Adebayo",
    lastName: "Okonkwo",
    status: "completed" as const,
    referral: "City Hospital",
    age: 34,
    gender: "Female",
  },
  {
    id: 3,
    labNumber: "LAB/25/003",
    firstName: "Chidinma",
    lastName: "Eze",
    status: "completed" as const,
    referral: "Grace Clinic",
    age: 28,
    gender: "Female",
  },
];

const Register = () => {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [showForm, setShowForm] = useState(false);
  const [searchFirst, setSearchFirst] = useState("");
  const [searchLast, setSearchLast] = useState("");

  const filtered = mockPatients.filter((p) => {
    const matchesStatus = statusFilter === "all" || p.status === statusFilter;
    const matchesFirst = p.firstName.toLowerCase().includes(searchFirst.toLowerCase());
    const matchesLast = p.lastName.toLowerCase().includes(searchLast.toLowerCase());
    return matchesStatus && matchesFirst && matchesLast;
  });

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">
            G.G Able Medical Laboratory
          </h1>
          <p className="text-sm text-muted-foreground mt-1">Patient registration & management</p>
        </div>
        <Button
          onClick={() => setShowForm(!showForm)}
          variant="outline"
          className="border-primary text-primary hover:bg-accent gap-2"
        >
          <Plus className="h-4 w-4" />
          Register
        </Button>
      </div>

      {/* Search filters */}
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="firstName"
            value={searchFirst}
            onChange={(e) => setSearchFirst(e.target.value)}
            className="pl-9 w-44 bg-card"
          />
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="lastName"
            value={searchLast}
            onChange={(e) => setSearchLast(e.target.value)}
            className="pl-9 w-44 bg-card"
          />
        </div>
        <Input type="date" className="w-40 bg-card" />
        <Input type="date" className="w-40 bg-card" />
        <Input placeholder="labNumber" className="w-36 bg-card" />
      </div>

      {/* Status filter chips */}
      <div className="flex gap-2 mb-6">
        {(["completed", "uncompleted", "all"] as StatusFilter[]).map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              statusFilter === status
                ? status === "completed"
                  ? "bg-success text-success-foreground"
                  : status === "uncompleted"
                  ? "bg-warning text-warning-foreground"
                  : "bg-accent text-accent-foreground"
                : "bg-muted text-muted-foreground hover:bg-accent"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="rounded-lg border border-border overflow-hidden bg-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-table-header">
                {["S/N", "Lab Number", "First Name", "Last Name", "Status", "Referral", "Age", "Gender"].map(
                  (h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold text-foreground">
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {filtered.map((p, i) => (
                <tr key={p.id} className="border-t border-border hover:bg-table-row-hover transition-colors">
                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3 font-mono text-xs">{p.labNumber}</td>
                  <td className="px-4 py-3">{p.firstName}</td>
                  <td className="px-4 py-3">{p.lastName}</td>
                  <td className="px-4 py-3">
                    <Badge
                      className={
                        p.status === "completed"
                          ? "bg-success text-success-foreground hover:bg-success"
                          : "bg-warning text-warning-foreground hover:bg-warning"
                      }
                    >
                      {p.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">{p.referral}</td>
                  <td className="px-4 py-3">{p.age}</td>
                  <td className="px-4 py-3">{p.gender}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-muted-foreground">
                    No patients found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Registration Form */}
      {showForm && (
        <div className="mt-8">
          <RegisterPatientForm onClose={() => setShowForm(false)} />
        </div>
      )}
    </div>
  );
};

export default Register;
