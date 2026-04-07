import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import MobileNav from "@/components/dashboard/MobileNav";
import ProfileProgressCard from "@/components/dashboard/ProfileProgressCard";
import RecommendedFormations from "@/components/dashboard/RecommendedFormations";
import ProjectsMissions from "@/components/dashboard/ProjectsMissions";
import CalendarPlanning from "@/components/dashboard/CalendarPlanning";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Dashboard = () => (
  <div className="flex min-h-screen bg-background">
    <DashboardSidebar />

    <main className="flex-1 pb-20 lg:pb-0">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border px-4 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="lg:hidden">
            <img src="/src/assets/logo.png" alt="Talent Tech" className="h-7" />
          </div>
          <div className="hidden lg:flex items-center gap-2 flex-1 max-w-md">
            <Search size={16} className="text-muted-foreground" />
            <Input placeholder="Rechercher formations, projets..." className="border-0 bg-muted/50 h-9" />
          </div>
          <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
            <Bell size={18} className="text-muted-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-secondary" />
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 lg:px-8 py-6 space-y-6">
        <div className="grid lg:grid-cols-2 gap-6">
          <ProfileProgressCard />
          <div className="space-y-6">
            <RecommendedFormations />
            <ProjectsMissions />
          </div>
        </div>
        <CalendarPlanning />
      </div>
    </main>

    <MobileNav />
  </div>
);

export default Dashboard;
