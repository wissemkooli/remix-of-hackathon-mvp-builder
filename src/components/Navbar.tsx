import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="TalentTech" className="h-9 w-auto" />
          <span className="font-heading text-xl font-bold text-foreground">
            Talent<span className="text-secondary">Tech</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Comment ça marche</a>
          <a href="#formations" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Formations</a>
          <a href="#entreprises" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Entreprises</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm">Se connecter</Button>
          </Link>
          <Link to="/signup">
            <Button size="sm" className="bg-hero-gradient text-primary-foreground hover:opacity-90">S'inscrire</Button>
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          <a href="#services" className="block text-sm text-muted-foreground">Services</a>
          <a href="#how-it-works" className="block text-sm text-muted-foreground">Comment ça marche</a>
          <a href="#formations" className="block text-sm text-muted-foreground">Formations</a>
          <a href="#entreprises" className="block text-sm text-muted-foreground">Entreprises</a>
          <div className="flex gap-2 pt-2">
            <Link to="/login"><Button variant="ghost" size="sm">Se connecter</Button></Link>
            <Link to="/signup"><Button size="sm" className="bg-hero-gradient text-primary-foreground">S'inscrire</Button></Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
