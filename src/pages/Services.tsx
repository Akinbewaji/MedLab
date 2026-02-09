import { useState } from "react";
import { Search, Plus, MoreVertical, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const mockServices = [
  { id: 1, name: "Malaria", price: 4000, updatedAt: "12/19/2025" },
  { id: 2, name: "Full Blood Count", price: 6500, updatedAt: "01/05/2026" },
  { id: 3, name: "Urinalysis", price: 3000, updatedAt: "01/12/2026" },
];

const Services = () => {
  const [search, setSearch] = useState("");
  const filtered = mockServices.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-display font-bold text-foreground">Service Management</h1>
        <p className="text-sm text-muted-foreground mt-1">Track and monitor services and their parameters</p>
      </div>

      <div className="flex flex-wrap gap-3 items-center mb-6">
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 bg-card"
          />
        </div>
        <Button className="bg-destructive/80 text-destructive-foreground hover:bg-destructive gap-2">
          <Plus className="h-4 w-4" />
          New service
        </Button>
      </div>

      <div className="rounded-lg border border-border overflow-hidden bg-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-table-header">
              {["S/N", "Name", "Price", "Updated At", "Actions"].map((h) => (
                <th key={h} className="px-4 py-3 text-left font-semibold text-foreground">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((s, i) => (
              <tr key={s.id} className="border-t border-border hover:bg-table-row-hover transition-colors">
                <td className="px-4 py-3">{i + 1}</td>
                <td className="px-4 py-3">{s.name}</td>
                <td className="px-4 py-3 font-mono">{s.price.toLocaleString()}</td>
                <td className="px-4 py-3">{s.updatedAt}</td>
                <td className="px-4 py-3 flex gap-3">
                  <button className="text-muted-foreground hover:text-foreground">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                  <button className="text-destructive hover:text-destructive/80">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;
