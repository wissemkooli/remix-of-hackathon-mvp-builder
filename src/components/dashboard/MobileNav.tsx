import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, BookOpen, Briefcase, Calendar, User } from "lucide-react";

const items = [
  { icon: LayoutDashboard, label: "Accueil", path: "/dashboard" },
  { icon: BookOpen, label: "Formations", path: "/dashboard/formations" },
  { icon: Briefcase, label: "Projets", path: "/dashboard/projects" },
  { icon: Calendar, label: "Planning", path: "/dashboard/planning" },
  { icon: User, label: "Profil", path: "/dashboard/profile" },
];

const MobileNav = () => {
  const location = useLocation();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 px-2 pb-safe">
      <div className="flex justify-around py-2">
        {items.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg text-[10px] transition-colors
                ${isActive ? "text-secondary" : "text-muted-foreground"}`}
            >
              <item.icon size={20} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
