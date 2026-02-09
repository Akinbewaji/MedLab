import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CornerDownLeft } from "lucide-react";

interface RegisterPatientFormProps {
  onClose: () => void;
}

export function RegisterPatientForm({ onClose }: RegisterPatientFormProps) {
  const [serviceName, setServiceName] = useState("");

  return (
    <div className="bg-card rounded-xl border border-border p-6 lg:p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-display font-bold text-foreground">Register Patient</h2>
        <Button variant="destructive" size="sm" className="text-xs">
          PATIENT DETAIL
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
        <div className="md:col-span-2">
          <Label className="text-muted-foreground text-xs mb-1.5 block">Lab Number*</Label>
          <Input placeholder="LAB/25/004" className="border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 px-0" />
        </div>
        <div>
          <Label className="text-muted-foreground text-xs mb-1.5 block">First Name*</Label>
          <Input placeholder="Enter first name" className="border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 px-0" />
        </div>
        <div>
          <Label className="text-muted-foreground text-xs mb-1.5 block">Last Name*</Label>
          <Input placeholder="Enter last name" className="border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 px-0" />
        </div>
        <div>
          <Label className="text-muted-foreground text-xs mb-1.5 block">Phone Number*</Label>
          <Input placeholder="Enter phone number" className="border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 px-0" />
        </div>
        <div>
          <Label className="text-muted-foreground text-xs mb-1.5 block">Email</Label>
          <Input placeholder="Enter email" type="email" className="border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 px-0" />
        </div>
        <div>
          <Label className="text-muted-foreground text-xs mb-1.5 block">Age</Label>
          <Input placeholder="0" type="number" className="border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 px-0" />
        </div>
        <div>
          <Label className="text-muted-foreground text-xs mb-1.5 block">Gender</Label>
          <Select>
            <SelectTrigger className="border-0 border-b border-border rounded-none bg-transparent focus:ring-0 px-0">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="text-muted-foreground text-xs mb-1.5 block">Cash Amount Paid</Label>
          <Input placeholder="0" type="number" className="border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 px-0" />
        </div>
        <div>
          <Label className="text-muted-foreground text-xs mb-1.5 block">Transfer Amount Paid</Label>
          <Input placeholder="0" type="number" className="border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 px-0" />
        </div>
        <div>
          <Label className="text-muted-foreground text-xs mb-1.5 block">POS Amount Paid</Label>
          <Input placeholder="0" type="number" className="border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 px-0" />
        </div>
        <div>
          <Label className="text-muted-foreground text-xs mb-1.5 block">Referral</Label>
          <Input placeholder="Enter referral" className="border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 px-0" />
        </div>
      </div>

      {/* Total & Service */}
      <div className="mt-6">
        <p className="font-semibold text-foreground">Total: #0</p>
        <div className="mt-3">
          <Label className="text-muted-foreground text-xs mb-1.5 block">Enter Service Name</Label>
          <Input
            placeholder="e.g. Malaria Test"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            className="border-0 border-b border-primary rounded-none bg-transparent focus-visible:ring-0 px-0 max-w-md"
          />
        </div>
        <Textarea placeholder="Additional notes..." className="mt-4 bg-muted/50" rows={3} />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-center gap-8 mt-8">
        <Button variant="secondary" size="lg" onClick={onClose} className="gap-2">
          <CornerDownLeft className="h-4 w-4" />
        </Button>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
          SUBMIT
        </Button>
      </div>
    </div>
  );
}
