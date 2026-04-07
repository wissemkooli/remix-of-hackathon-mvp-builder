import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="TalentTech" className="h-8 w-auto brightness-0 invert" />
              <span className="font-heading text-lg font-bold">Talent Tech</span>
            </div>
            <p className="text-sm opacity-60">Learning by doing. La plateforme algéro-tunisienne qui connecte formation pratique et emploi.</p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Plateforme</h4>
            <div className="space-y-2 text-sm opacity-60">
              <p>Formations</p><p>Project Hub</p><p>Job Board</p>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Profils</h4>
            <div className="space-y-2 text-sm opacity-60">
              <p>Étudiants</p><p>Formateurs</p><p>Entreprises</p>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm opacity-60">
              <p>contact@talenttech.com</p><p>Algérie & Tunisie</p>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center text-sm opacity-40">
          © 2026 Talent Tech. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
