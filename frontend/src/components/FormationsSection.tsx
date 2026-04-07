import { motion } from "framer-motion";
import { Code, Paintbrush, TrendingUp, Megaphone, ShoppingCart, BrainCircuit } from "lucide-react";

const formations = [
  { icon: BrainCircuit, title: "Intelligence Artificielle", level: "Débutant → Avancé", duration: "12 semaines", color: "from-blue-500 to-cyan-500" },
  { icon: Code, title: "Développement Web", level: "Débutant → Avancé", duration: "16 semaines", color: "from-emerald-500 to-teal-500" },
  { icon: Paintbrush, title: "UI/UX Design", level: "Débutant → Intermédiaire", duration: "10 semaines", color: "from-purple-500 to-pink-500" },
  { icon: Megaphone, title: "Marketing Digital", level: "Débutant → Avancé", duration: "8 semaines", color: "from-orange-500 to-amber-500" },
  { icon: ShoppingCart, title: "E-Commerce", level: "Débutant → Intermédiaire", duration: "10 semaines", color: "from-rose-500 to-red-500" },
  { icon: TrendingUp, title: "Community Management", level: "Débutant → Avancé", duration: "6 semaines", color: "from-indigo-500 to-blue-500" },
];

const FormationsSection = () => {
  return (
    <section id="formations" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Nos Formations</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-3">
            Des parcours qui mènent à <span className="text-gradient">l'emploi</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {formations.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all border border-border"
            >
              <div className={`h-2 bg-gradient-to-r ${f.color}`} />
              <div className="p-6">
                <f.icon size={28} className="text-primary mb-3" />
                <h3 className="font-heading text-lg font-semibold mb-2">{f.title}</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{f.level}</span>
                  <span className="font-medium">{f.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormationsSection;
