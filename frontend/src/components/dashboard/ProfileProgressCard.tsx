import { Progress } from "@/components/ui/progress";
import { TrendingUp, Target, Award, Clock } from "lucide-react";

const stats = [
  { icon: Target, label: "Objectif", value: "Développeur Web", color: "text-secondary" },
  { icon: Award, label: "Niveau", value: "Intermédiaire", color: "text-accent" },
  { icon: Clock, label: "Heures de formation", value: "24h / 120h", color: "text-secondary" },
  { icon: TrendingUp, label: "Progression", value: "20%", color: "text-accent" },
];

const skills = [
  { name: "HTML/CSS", progress: 75 },
  { name: "JavaScript", progress: 45 },
  { name: "React", progress: 20 },
  { name: "UI/UX Design", progress: 60 },
];

const ProfileProgressCard = () => (
  <div className="space-y-6">
    {/* Welcome */}
    <div className="rounded-xl bg-hero-gradient p-6 text-primary-foreground">
      <h2 className="font-heading text-xl font-bold mb-1">Bienvenue, Ahmed 👋</h2>
      <p className="text-sm opacity-80">Continuez votre parcours vers le développement web. Vous êtes sur la bonne voie !</p>
      <div className="mt-4 flex items-center gap-3">
        <Progress value={20} className="flex-1 h-2 bg-primary-foreground/20" />
        <span className="text-sm font-semibold">20%</span>
      </div>
    </div>

    {/* Stats grid */}
    <div className="grid grid-cols-2 gap-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-xl border border-border bg-card p-4 shadow-card">
          <div className="flex items-center gap-2 mb-2">
            <stat.icon size={16} className={stat.color} />
            <span className="text-xs text-muted-foreground">{stat.label}</span>
          </div>
          <p className="font-heading font-semibold text-sm">{stat.value}</p>
        </div>
      ))}
    </div>

    {/* Skills */}
    <div className="rounded-xl border border-border bg-card p-5 shadow-card">
      <h3 className="font-heading font-semibold mb-4">Compétences en cours</h3>
      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between text-sm mb-1">
              <span>{skill.name}</span>
              <span className="text-muted-foreground">{skill.progress}%</span>
            </div>
            <Progress value={skill.progress} className="h-2" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProfileProgressCard;
