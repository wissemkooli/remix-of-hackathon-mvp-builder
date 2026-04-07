import { Calendar, Clock } from "lucide-react";

const events = [
  { time: "09:00", title: "React.js - Module 3", type: "Formation", duration: "2h" },
  { time: "14:00", title: "Atelier UI/UX en groupe", type: "Atelier", duration: "1h30" },
  { time: "16:30", title: "Mentorat avec Karim M.", type: "Mentorat", duration: "45min" },
];

const upcoming = [
  { date: "Lun 7 Avr", title: "Deadline - Projet e-commerce", tag: "Projet" },
  { date: "Mar 8 Avr", title: "Test JavaScript Avancé", tag: "Évaluation" },
  { date: "Jeu 10 Avr", title: "Workshop Design Thinking", tag: "Atelier" },
];

const typeColors: Record<string, string> = {
  Formation: "bg-secondary/10 text-secondary",
  Atelier: "bg-accent/10 text-accent-foreground",
  Mentorat: "bg-primary/10 text-primary",
};

const CalendarPlanning = () => (
  <div className="space-y-4">
    {/* Today */}
    <div className="rounded-xl border border-border bg-card p-5 shadow-card">
      <div className="flex items-center gap-2 mb-4">
        <Calendar size={16} className="text-secondary" />
        <h3 className="font-heading font-semibold">Aujourd'hui — 4 Avril</h3>
      </div>
      <div className="space-y-2">
        {events.map((e) => (
          <div key={e.title} className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/50">
            <span className="text-xs font-mono text-muted-foreground w-12">{e.time}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{e.title}</p>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock size={10} /> {e.duration}
              </span>
            </div>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${typeColors[e.type]}`}>{e.type}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Upcoming */}
    <div className="rounded-xl border border-border bg-card p-5 shadow-card">
      <h3 className="font-heading font-semibold mb-3">À venir</h3>
      <div className="space-y-2">
        {upcoming.map((u) => (
          <div key={u.title} className="flex items-center justify-between p-2 text-sm">
            <div>
              <p className="font-medium">{u.title}</p>
              <p className="text-xs text-muted-foreground">{u.date}</p>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{u.tag}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CalendarPlanning;
