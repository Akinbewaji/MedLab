import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Trash2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface Parameter {
  id: string;
  name: string;
  unit: string;
  range: string;
}

const NewService = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [parameters, setParameters] = useState<Parameter[]>([
    { id: "1", name: "", unit: "", range: "" }
  ]);

  const addParameter = () => {
    setParameters([...parameters, { id: Math.random().toString(36).substr(2, 9), name: "", unit: "", range: "" }]);
  };

  const removeParameter = (id: string) => {
    if (parameters.length === 1) return;
    setParameters(parameters.filter(p => p.id !== id));
  };

  const handleParamChange = (id: string, field: keyof Parameter, value: string) => {
    setParameters(parameters.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Service created successfully");
      navigate("/services");
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate("/services")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Initiate New Service</h1>
          <p className="text-sm text-muted-foreground">Define a new medical laboratory service and its parameters</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Service Details</CardTitle>
            <CardDescription>Basic information about the medical service</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="service-name">Service Name</Label>
              <Input id="service-name" placeholder="e.g. Malaria Parasite (MP)" required className="bg-card" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Price (NGN)</Label>
              <Input id="price" type="number" placeholder="4000" required className="bg-card" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category/Department</Label>
              <Select>
                <SelectTrigger id="category" className="bg-card">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hematology">Hematology</SelectItem>
                  <SelectItem value="microbiology">Microbiology</SelectItem>
                  <SelectItem value="biochemistry">Biochemistry</SelectItem>
                  <SelectItem value="serology">Serology</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="turnaround">Estimated Turnaround Time</Label>
              <Input id="turnaround" placeholder="e.g. 2 hours" className="bg-card" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle>Result Parameters</CardTitle>
              <CardDescription>Define the attributes for the test result</CardDescription>
            </div>
            <Button type="button" variant="outline" size="sm" onClick={addParameter} className="gap-2">
              <Plus className="h-4 w-4" />
              Add Field
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {parameters.map((param, index) => (
              <div key={param.id} className="grid grid-cols-12 gap-3 items-end p-3 rounded-lg bg-accent/30 group">
                <div className="col-span-4 space-y-2">
                  <Label className="text-[10px] uppercase tracking-wider text-muted-foreground">Parameter Name</Label>
                  <Input 
                    value={param.name} 
                    onChange={(e) => handleParamChange(param.id, "name", e.target.value)}
                    placeholder="e.g. PCV" 
                    className="bg-card h-9" 
                  />
                </div>
                <div className="col-span-3 space-y-2">
                  <Label className="text-[10px] uppercase tracking-wider text-muted-foreground">Unit</Label>
                  <Input 
                    value={param.unit} 
                    onChange={(e) => handleParamChange(param.id, "unit", e.target.value)}
                    placeholder="e.g. %" 
                    className="bg-card h-9" 
                  />
                </div>
                <div className="col-span-4 space-y-2">
                  <Label className="text-[10px] uppercase tracking-wider text-muted-foreground">Reference Range</Label>
                  <Input 
                    value={param.range} 
                    onChange={(e) => handleParamChange(param.id, "range", e.target.value)}
                    placeholder="e.g. 35 - 50" 
                    className="bg-card h-9" 
                  />
                </div>
                <div className="col-span-1 pb-1 flex justify-end">
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => removeParameter(param.id)}
                    className="text-muted-foreground hover:text-destructive h-8 w-8"
                    disabled={parameters.length === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex justify-end gap-3 pt-4">
          <Button type="button" variant="outline" onClick={() => navigate("/services")} disabled={loading}>
            Cancel
          </Button>
          <Button type="submit" className="gap-2 px-8" disabled={loading}>
            <Save className="h-4 w-4" />
            {loading ? "Creating..." : "Save Service"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewService;
