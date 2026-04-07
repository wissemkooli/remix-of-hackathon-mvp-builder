import { motion } from "framer-motion";
import { UserPlus, ClipboardCheck, Rocket, Trophy } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Inscrivez-vous", desc: "Choisissez votre profil : étudiant, formateur ou entreprise." },
  { icon: ClipboardCheck, title: "Test & Profiling IA", desc: "Passez un test de niveau et recevez un parcours personnalisé." },
  { icon: Rocket, title: "Formez-vous", desc: "Suivez vos modules, réalisez des projets réels avec suivi." },
  { icon: Trophy, title: "Décrochez un emploi", desc: "Votre portfolio attire les recruteurs, l'IA fait le matching." },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Comment ça marche</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-3">
            4 étapes vers <span className="text-gradient">votre réussite</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-start gap-6 mb-12 last:mb-0"
            >
              <div className="flex-shrink-0 relative">
                <div className="w-14 h-14 rounded-full bg-hero-gradient flex items-center justify-center text-primary-foreground font-heading font-bold text-lg shadow-soft">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-border" />
                )}
              </div>
              <div className="pt-2">
                <h3 className="font-heading text-xl font-semibold mb-1">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
