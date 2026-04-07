import { Briefcase, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  { title: "Refonte site e-commerce", company: "DigiStore DZ", type: "Projet réel", status: "En cours", progress: 35 },
  { title: "App mobile de livraison", company: "FastDeliver", type: "Stage", status: "À postuler", progress: 0 },
  { title: "Dashboard analytics", company: "DataViz TN", type: "Freelance", status: "Disponible", progress: 0 },
];

const statusColors: Record<string, string> = {
  "En cours": "bg-secondary/10 text-secondary",
  "À postuler": "bg-accent/10 text-accent-foreground",
  "Disponible": "bg-muted text-muted-foreground",
};

const ProjectsMissions = () => (
  <div className="rounded-xl border border-border bg-card p-5 shadow-card">
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-heading font-semibold">Projets & Missions</h3>
      <span className="text-xs text-muted-foreground">3 opportunités</span>
    </div>
    <div className="space-y-3">
      {projects.map((p) => (
        <div key={p.title} className="flex items-start gap-4 p-3 rounded-lg border border-border hover:border-secondary/30 hover:shadow-sm transition-all cursor-pointer">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Briefcase size={18} className="text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <p className="font-medium text-sm truncate">{p.title}</p>
              <ExternalLink size={12} className="text-muted-foreground flex-shrink-0" />
            </div>
            <p className="text-xs text-muted-foreground">{p.company}</p>
            <div className="flex items-center gap-2 mt-1.5">
              <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-4">{p.type}</Badge>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${statusColors[p.status]}`}>{p.status}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProjectsMissions;
