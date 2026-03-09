import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  ClipboardList, 
  Activity, 
  TrendingUp,
  UserPlus,
  PlusCircle,
  FileText,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total Patients",
      value: "1,284",
      description: "+12% from last month",
      icon: Users,
      color: "text-blue-500",
    },
    {
      title: "Pending Tests",
      value: "23",
      description: "5 urgent cases",
      icon: Clock,
      color: "text-orange-500",
    },
    {
      title: "Completed Today",
      value: "45",
      description: "Target: 50",
      icon: ClipboardList,
      color: "text-green-500",
    },
    {
      title: "Daily Revenue",
      value: "₦142,500",
      description: "+5.4% vs yesterday",
      icon: TrendingUp,
      color: "text-purple-500",
    },
  ];

  const quickTools = [
    {
      title: "Register Patient",
      icon: UserPlus,
      action: () => navigate("/"),
      description: "Add a new patient to the system",
    },
    {
      title: "New Service",
      icon: PlusCircle,
      action: () => navigate("/services/new"),
      description: "Initiate a new medical service",
    },
    {
      title: "View Insights",
      icon: Activity,
      action: () => navigate("/insights"),
      description: "Check daily and weekly activity",
    },
    {
      title: "Generate Report",
      icon: FileText,
      action: () => navigate("/insights"),
      description: "Export activity reports",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-display font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Quick Tools */}
        <Card className="col-span-1 lg:col-span-4 border-border/50">
          <CardHeader>
            <CardTitle>Quick Tools</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            {quickTools.map((tool) => (
              <Button
                key={tool.title}
                variant="outline"
                className="h-auto flex flex-col items-start gap-2 p-4 text-left hover:border-primary/50 hover:bg-accent/50"
                onClick={tool.action}
              >
                <div className="flex items-center gap-2">
                  <tool.icon className="h-5 w-5 text-primary" />
                  <span className="font-semibold">{tool.title}</span>
                </div>
                <span className="text-xs text-muted-foreground font-normal">
                  {tool.description}
                </span>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity Mini-Placeholder */}
        <Card className="col-span-1 lg:col-span-3 border-border/50">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      New patient registered: John Doe
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {i * 10} minutes ago
                    </p>
                  </div>
                </div>
              ))}
              <Button variant="link" className="px-0 text-primary" onClick={() => navigate("/insights")}>
                View all activity
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
