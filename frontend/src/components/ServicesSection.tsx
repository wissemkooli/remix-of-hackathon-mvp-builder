import { motion } from "framer-motion";
import { BookOpen, Briefcase, Brain, Users } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Formations Pratiques",
    description: "Des parcours axés sur la pratique avec des projets réels, deadlines et suivi personnalisé par des formateurs experts.",
  },
  {
    icon: Briefcase,
    title: "Project Hub",
    description: "Accédez à des projets pédagogiques et des missions réelles d'entreprises. Chaque projet enrichit votre portfolio.",
  },
  {
    icon: Brain,
    title: "IA Matching",
    description: "Notre IA analyse vos compétences, propose un parcours adapté et vous recommande les meilleures opportunités.",
  },
  {
    icon: Users,
    title: "Job Board",
    description: "Les entreprises publient leurs offres, l'IA classe les candidats et affiche un taux de correspondance.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Nos Services</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-3">
            Tout ce qu'il faut pour <span className="text-gradient">réussir</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-hero-gradient group-hover:text-primary-foreground transition-all">
                <service.icon size={24} className="text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
