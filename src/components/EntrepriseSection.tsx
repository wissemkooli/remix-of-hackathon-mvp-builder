import { motion } from "framer-motion";
import { Building2, Search, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const EntrepriseSection = () => {
  return (
    <section id="entreprises" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Espace Entreprises</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-3 mb-6">
              Recrutez les <span className="text-gradient">meilleurs talents</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Publiez des projets, accédez à un vivier de candidats qualifiés et laissez notre IA vous proposer les profils les plus pertinents.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Building2, text: "Publiez des projets réels ou des offres d'emploi" },
                { icon: Search, text: "Accédez aux profils détaillés et portfolios" },
                { icon: BarChart3, text: "Taux de correspondance IA pour chaque candidat" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <Link to="/signup">
              <Button className="bg-hero-gradient text-primary-foreground hover:opacity-90 gap-2 shadow-soft">
                Inscrire mon entreprise <ArrowRight size={16} />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border"
          >
            <h3 className="font-heading text-lg font-semibold mb-6">Modèles tarifaires</h3>
            {[
              { name: "Freemium", desc: "Publiez votre premier projet gratuitement", tag: "Lancement" },
              { name: "Pay per Hire", desc: "Commission uniquement en cas de recrutement réussi", tag: "Populaire" },
              { name: "Abonnement Pro", desc: "Accès illimité aux profils et fonctionnalités avancées", tag: "Bientôt" },
            ].map((plan) => (
              <div key={plan.name} className="flex items-start justify-between py-4 border-b border-border last:border-0">
                <div>
                  <p className="font-heading font-semibold">{plan.name}</p>
                  <p className="text-sm text-muted-foreground">{plan.desc}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium flex-shrink-0">
                  {plan.tag}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EntrepriseSection;
