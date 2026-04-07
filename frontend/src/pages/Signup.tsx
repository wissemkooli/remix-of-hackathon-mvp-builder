import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Building2, ArrowRight, ArrowLeft, BookOpen, Briefcase, Heart, Monitor, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/lib/AuthContext";
import { toast } from "sonner";

type ProfileType = "student" | "trainer" | "enterprise" | null;

const profiles = [
  { type: "student" as const, icon: GraduationCap, title: "Étudiant / Bénéficiaire", desc: "Jeune, demandeur d'emploi ou en reconversion" },
  { type: "trainer" as const, icon: Users, title: "Formateur", desc: "Proposez des formations spécialisées" },
  { type: "enterprise" as const, icon: Building2, title: "Entreprise", desc: "Proposez des projets ou recrutez des talents" },
];

const domains = ["Intelligence Artificielle", "Développement Web", "UI/UX Design", "Marketing Digital", "Community Management", "E-Commerce", "Ressources Humaines", "Design Graphique"];
const situations = ["Étudiant universitaire", "Diplômé sans emploi", "Salarié en reconversion", "Freelance débutant", "En recherche de stage", "Auto-entrepreneur"];
const objectives = ["Se former dans un nouveau domaine", "Trouver un emploi rapidement", "Travailler en freelance", "Évoluer dans mon poste actuel", "Créer mon propre projet", "Obtenir une certification"];
const niveaux = ["Débutant complet", "Notions de base", "Intermédiaire", "Avancé"];
const disponibilites = ["Temps plein (5j/semaine)", "Mi-temps (2-3j/semaine)", "Weekends uniquement", "Soirs après le travail", "Quelques heures par semaine"];
const apprentissages = ["Vidéos et cours en ligne", "Projets pratiques réels", "Mentorat individuel", "Travail en groupe", "Ateliers en présentiel"];
const softSkills = ["Communication", "Travail d'équipe", "Gestion du temps", "Résolution de problèmes", "Leadership", "Créativité", "Adaptabilité", "Esprit critique"];

const SignupPage = () => {
  const [profileType, setProfileType] = useState<ProfileType>(null);
  const [step, setStep] = useState(0);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { login } = useAuth();
  
  const handleFinalize = async (nextStep: number) => {
    try {
      const res = await fetch("https://remix-of-hackathon-mvp-builder.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name, profileType }),
      });
      if (res.ok) {
        const data = await res.json();
        login(data.token, data.user);
        setStep(nextStep);
      } else {
        toast.error("Erreur lors de l'inscription");
      }
    } catch(err) {
      toast.error("Erreur de connexion");
    }
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  // Determine total steps and next step based on profile
  const getNextStep = (current: number) => {
    if (profileType === "enterprise") return current === 1 ? 5 : current + 1;
    if (profileType === "trainer") return current === 1 ? 5 : current + 1;
    // student: 0 → 1 → 2 → 3 → 4 → 5
    return current + 1;
  };

  const totalSteps = profileType === "student" ? 5 : 2;

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-2/5 bg-hero-gradient items-center justify-center p-12">
        <div className="text-primary-foreground">
          <h1 className="font-heading text-4xl font-bold mb-4">Rejoignez Talent Tech</h1>
          <p className="text-lg opacity-80">Commencez votre parcours vers la réussite professionnelle.</p>
          <div className="mt-12 space-y-4 text-sm opacity-70">
            <p>✓ Formation pratique avec projets réels</p>
            <p>✓ Profiling IA personnalisé</p>
            <p>✓ Accès direct aux opportunités d'emploi</p>
            <p>✓ Portfolio automatique</p>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6 overflow-y-auto">
        <div className="w-full max-w-lg">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft size={14} /> Retour
          </Link>

          <AnimatePresence mode="wait">
            {/* Step 0: Profile selection */}
            {step === 0 && (
              <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="font-heading text-2xl font-bold mb-2">Choisissez votre profil</h2>
                <p className="text-muted-foreground mb-8">Sélectionnez le type de compte qui vous correspond.</p>
                <div className="space-y-3">
                  {profiles.map((p) => (
                    <button
                      key={p.type}
                      onClick={() => { setProfileType(p.type); setStep(1); }}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-left
                        ${profileType === p.type ? "border-primary bg-primary/5 shadow-soft" : "border-border hover:border-primary/30 hover:shadow-card"}`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <p.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-heading font-semibold">{p.title}</p>
                        <p className="text-sm text-muted-foreground">{p.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 1: Personal info (student / trainer) */}
            {step === 1 && profileType !== "enterprise" && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="font-heading text-2xl font-bold mb-2">Informations personnelles</h2>
                <p className="text-muted-foreground mb-6">Créez votre compte {profileType === "student" ? "bénéficiaire" : "formateur"}.</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div><Label>Nom</Label><Input placeholder="Votre nom" className="mt-1" /></div>
                    <div><Label>Prénom</Label><Input placeholder="Votre prénom" className="mt-1" value={name} onChange={(e) => setName(e.target.value)} /></div>
                  </div>
                  <div><Label>Email</Label><Input type="email" placeholder="email@exemple.com" className="mt-1" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                  <div><Label>Mot de passe</Label><Input type="password" placeholder="••••••••" className="mt-1" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
                  <div><Label>Pays</Label>
                    <Select>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="Choisir" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="algerie">Algérie</SelectItem>
                        <SelectItem value="tunisie">Tunisie</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" onClick={() => setStep(0)}>Retour</Button>
                    <Button onClick={() => profileType === "student" ? setStep(getNextStep(1)) : handleFinalize(5)} className="flex-1 bg-hero-gradient text-primary-foreground hover:opacity-90 gap-2">
                      {profileType === "student" ? "Continuer" : "Finaliser l'inscription"} <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 1: Enterprise info */}
            {step === 1 && profileType === "enterprise" && (
              <motion.div key="step1-ent" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="font-heading text-2xl font-bold mb-2">Informations entreprise</h2>
                <p className="text-muted-foreground mb-6">Enregistrez votre entreprise sur la plateforme.</p>
                <div className="space-y-4">
                  <div><Label>Nom de l'entreprise</Label><Input placeholder="Nom de l'entreprise" className="mt-1" value={name} onChange={(e) => setName(e.target.value)} /></div>
                  <div className="grid grid-cols-2 gap-3">
                    <div><Label>Registre de commerce</Label><Input placeholder="N° RC" className="mt-1" /></div>
                    <div><Label>NIF</Label><Input placeholder="Numéro NIF" className="mt-1" /></div>
                  </div>
                  <div><Label>Responsable RH</Label><Input placeholder="Nom complet" className="mt-1" /></div>
                  <div><Label>Email professionnel</Label><Input type="email" placeholder="rh@entreprise.com" className="mt-1" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                  <div><Label>Mot de passe</Label><Input type="password" placeholder="••••••••" className="mt-1" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" onClick={() => setStep(0)}>Retour</Button>
                    <Button onClick={() => handleFinalize(5)} className="flex-1 bg-hero-gradient text-primary-foreground hover:opacity-90 gap-2">
                      Finaliser l'inscription <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Profiling - Situation & Objectifs (STUDENT ONLY) */}
            {step === 2 && profileType === "student" && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="flex items-center gap-2 mb-1">
                  <BookOpen size={20} className="text-secondary" />
                  <h2 className="font-heading text-2xl font-bold">Votre situation</h2>
                </div>
                <p className="text-muted-foreground mb-6">Aidez-nous à comprendre votre profil actuel.</p>
                <div className="space-y-4">
                  <div>
                    <Label>Date de naissance</Label>
                    <Input type="date" className="mt-1" />
                  </div>
                  <div>
                    <Label>Situation actuelle</Label>
                    <Select>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="Choisir votre situation" /></SelectTrigger>
                      <SelectContent>
                        {situations.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Niveau d'études</Label>
                    <Select>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="Choisir" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bac">Baccalauréat</SelectItem>
                        <SelectItem value="licence">Licence / Bac+3</SelectItem>
                        <SelectItem value="master">Master / Bac+5</SelectItem>
                        <SelectItem value="doctorat">Doctorat</SelectItem>
                        <SelectItem value="formation_pro">Formation professionnelle</SelectItem>
                        <SelectItem value="autodidacte">Autodidacte</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Objectif principal</Label>
                    <Select>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="Pourquoi rejoignez-vous Talent Tech ?" /></SelectTrigger>
                      <SelectContent>
                        {objectives.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" onClick={() => setStep(1)}>Retour</Button>
                    <Button onClick={() => setStep(3)} className="flex-1 bg-hero-gradient text-primary-foreground hover:opacity-90 gap-2">
                      Continuer <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Domaines & Compétences (STUDENT ONLY) */}
            {step === 3 && profileType === "student" && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="flex items-center gap-2 mb-1">
                  <Monitor size={20} className="text-secondary" />
                  <h2 className="font-heading text-2xl font-bold">Domaines & Compétences</h2>
                </div>
                <p className="text-muted-foreground mb-6">Quels domaines vous intéressent ?</p>
                <div className="space-y-4">
                  <div>
                    <Label>Domaine souhaité</Label>
                    <Select>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="Choisir un domaine" /></SelectTrigger>
                      <SelectContent>
                        {domains.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Niveau dans ce domaine</Label>
                    <Select>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="Évaluez votre niveau" /></SelectTrigger>
                      <SelectContent>
                        {niveaux.map(n => <SelectItem key={n} value={n}>{n}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Avez-vous déjà une expérience professionnelle ?</Label>
                    <Select>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="Choisir" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="aucune">Aucune expérience</SelectItem>
                        <SelectItem value="stage">Stage / PFE</SelectItem>
                        <SelectItem value="1-2">1-2 ans</SelectItem>
                        <SelectItem value="3+">3 ans et plus</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="mb-2 block">Soft skills à développer</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {softSkills.map(skill => (
                        <label key={skill} className="flex items-center gap-2 text-sm cursor-pointer p-2 rounded-lg border border-border hover:border-primary/30 transition-all">
                          <Checkbox
                            checked={selectedSkills.includes(skill)}
                            onCheckedChange={() => toggleSkill(skill)}
                          />
                          {skill}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" onClick={() => setStep(2)}>Retour</Button>
                    <Button onClick={() => setStep(4)} className="flex-1 bg-hero-gradient text-primary-foreground hover:opacity-90 gap-2">
                      Continuer <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Disponibilité & Préférences (STUDENT ONLY) */}
            {step === 4 && profileType === "student" && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="flex items-center gap-2 mb-1">
                  <MessageSquare size={20} className="text-secondary" />
                  <h2 className="font-heading text-2xl font-bold">Préférences d'apprentissage</h2>
                </div>
                <p className="text-muted-foreground mb-6">Comment souhaitez-vous apprendre ?</p>
                <div className="space-y-4">
                  <div>
                    <Label>Disponibilité</Label>
                    <Select>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="Votre disponibilité" /></SelectTrigger>
                      <SelectContent>
                        {disponibilites.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Mode d'apprentissage préféré</Label>
                    <Select>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="Comment apprenez-vous le mieux ?" /></SelectTrigger>
                      <SelectContent>
                        {apprentissages.map(a => <SelectItem key={a} value={a}>{a}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Langue préférée pour les cours</Label>
                    <Select>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="Choisir" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="francais">Français</SelectItem>
                        <SelectItem value="arabe">Arabe</SelectItem>
                        <SelectItem value="anglais">Anglais</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Qu'attendez-vous de Talent Tech ?</Label>
                    <textarea
                      placeholder="Décrivez en quelques mots vos attentes et besoins..."
                      className="mt-1 flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[80px] resize-none"
                    />
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" onClick={() => setStep(3)}>Retour</Button>
                    <Button onClick={() => handleFinalize(5)} className="flex-1 bg-hero-gradient text-primary-foreground hover:opacity-90 gap-2">
                      Finaliser le profiling <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 5: Success */}
            {step === 5 && (
              <motion.div key="step5" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                    <GraduationCap size={32} className="text-secondary" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold mb-2">Inscription réussie ! 🎉</h2>
                  <p className="text-muted-foreground mb-8">
                    {profileType === "enterprise"
                      ? "Votre entreprise a été enregistrée. Vous recevrez un email de confirmation."
                      : profileType === "student"
                      ? "Votre profil a été analysé. L'IA va vous proposer un parcours personnalisé adapté à vos besoins."
                      : "Votre compte formateur a été créé. Vous pouvez commencer à proposer vos formations."}
                  </p>
                  <Link to={profileType === "student" ? "/dashboard" : "/"}>
                    <Button className="bg-hero-gradient text-primary-foreground hover:opacity-90 gap-2">
                      {profileType === "student" ? "Accéder au dashboard" : "Accéder à la plateforme"} <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress dots - only for student profiling steps */}
          {profileType === "student" && step > 0 && step < 5 && (
            <div className="flex gap-1.5 justify-center mt-8">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className={`h-1.5 rounded-full transition-all ${s <= step ? "w-8 bg-primary" : "w-4 bg-border"}`} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
