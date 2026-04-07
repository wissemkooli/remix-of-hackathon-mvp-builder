import { BookOpen, Clock, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const formations = [
  { title: "React.js - Les fondamentaux", trainer: "Karim M.", duration: "40h", level: "Débutant", rating: 4.8, tag: "Recommandé par l'IA", match: 95 },
  { title: "UI/UX Design avec Figma", trainer: "Sara L.", duration: "30h", level: "Intermédiaire", rating: 4.6, tag: "Populaire", match: 88 },
  { title: "JavaScript Avancé", trainer: "Yacine D.", duration: "35h", level: "Intermédiaire", rating: 4.7, tag: "Nouveau", match: 82 },
];

const RecommendedFormations = () => (
  <div className="rounded-xl border border-border bg-card p-5 shadow-card">
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-heading font-semibold">Formations recommandées</h3>
      <Button variant="ghost" size="sm" className="text-secondary gap-1">
        Voir tout <ArrowRight size={14} />
      </Button>
    </div>
    <div className="space-y-3">
      {formations.map((f) => (
        <div key={f.title} className="flex items-start gap-4 p-3 rounded-lg border border-border hover:border-secondary/30 hover:shadow-sm transition-all cursor-pointer">
          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
            <BookOpen size={18} className="text-secondary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <p className="font-medium text-sm truncate">{f.title}</p>
              <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4 flex-shrink-0">{f.match}% match</Badge>
            </div>
            <p className="text-xs text-muted-foreground">{f.trainer}</p>
            <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Clock size={12} /> {f.duration}</span>
              <span className="flex items-center gap-1"><Star size={12} className="text-accent" /> {f.rating}</span>
              <span>{f.level}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RecommendedFormations;
