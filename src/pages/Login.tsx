import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/AuthContext";
import { toast } from "sonner";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://remix-of-hackathon-mvp-builder.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        toast.error("Identifiants invalides");
        return;
      }

      const data = await res.json();
      login(data.token, data.user);
      toast.success("Connexion réussie");
      navigate("/dashboard");
    } catch (err) {
      toast.error("Erreur de connexion serveur");
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft size={14} /> Retour
          </Link>

          <h2 className="font-heading text-2xl font-bold mb-2">Connexion</h2>
          <p className="text-muted-foreground mb-6">Connectez-vous pour accéder à votre espace Talent Tech.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label>Email</Label>
              <Input type="email" placeholder="email@exemple.com" className="mt-1" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <Label>Mot de passe</Label>
              <Input type="password" placeholder="••••••••" className="mt-1" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            
            <Button type="submit" className="w-full bg-hero-gradient text-primary-foreground hover:opacity-90 gap-2 mt-4">
              Se connecter <LogIn size={16} />
            </Button>
          </form>
          
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Pas encore de compte ? <Link to="/signup" className="text-primary hover:underline">Inscrivez-vous</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
