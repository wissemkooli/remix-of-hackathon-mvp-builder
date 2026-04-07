import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, BookOpen, Briefcase, Calendar, User, Settings, LogOut } from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Tableau de bord", path: "/dashboard" },
  { icon: BookOpen, label: "Formations", path: "/dashboard/formations" },
  { icon: Briefcase, label: "Projets & Missions", path: "/dashboard/projects" },
  { icon: Calendar, label: "Planning", path: "/dashboard/planning" },
  { icon: User, label: "Mon profil", path: "/dashboard/profile" },
  { icon: Settings, label: "Paramètres", path: "/dashboard/settings" },
];

const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-border bg-card h-screen sticky top-0">
      <div className="p-6 border-b border-border">
        <Link to="/" className="flex items-center gap-2">
          <img src="/src/assets/logo.png" alt="Talent Tech" className="h-8" />
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path === "/dashboard" && location.pathname === "/dashboard");
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                ${isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
            <User size={16} className="text-secondary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Ahmed B.</p>
            <p className="text-xs text-muted-foreground">Bénéficiaire</p>
          </div>
          <button className="text-muted-foreground hover:text-foreground">
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
