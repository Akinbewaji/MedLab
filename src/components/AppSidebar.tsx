import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Users,
  ClipboardList,
  UserPlus,
  Building2,
  Wallet,
  LogOut,
  Menu,
  X,
  Microscope,
} from "lucide-react";

const navItems = [
  { title: "Register", path: "/", icon: UserPlus },
  { title: "Services", path: "/services", icon: ClipboardList },
  { title: "Patients", path: "/patients", icon: Users },
  { title: "Hospitals", path: "/hospitals", icon: Building2 },
  { title: "Accounts", path: "/accounts", icon: Wallet },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={`flex flex-col bg-sidebar border-r border-sidebar-border transition-all duration-300 ${
        collapsed ? "w-16" : "w-60"
      } min-h-screen`}
    >
      {/* Logo area */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-sidebar-border">
        <Microscope className="h-7 w-7 text-primary shrink-0" />
        {!collapsed && (
          <span className="font-display font-bold text-lg text-sidebar-foreground truncate">
            MedLab
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto text-muted-foreground hover:text-foreground transition-colors"
        >
          {collapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 space-y-1 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <item.icon className={`h-5 w-5 shrink-0 ${isActive ? "text-primary" : ""}`} />
              {!collapsed && <span>{item.title}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* Log out */}
      <div className="px-2 pb-4">
        <button className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-primary hover:bg-accent transition-colors w-full">
          <LogOut className="h-5 w-5 shrink-0" />
          {!collapsed && <span>Log out</span>}
        </button>
      </div>
    </aside>
  );
}
