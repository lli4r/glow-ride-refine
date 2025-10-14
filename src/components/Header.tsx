import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoAcessa from "@/assets/logo-acessa.jpg";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { LogOut } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Erro ao sair");
    } else {
      toast.success("Logout realizado com sucesso!");
      navigate("/");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logoAcessa} 
              alt="Logo Acessa - Mobilidade com dignidade" 
              className="h-12 w-12 rounded-lg object-contain"
            />
            <span className="text-xl font-bold text-primary">Acessa</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground/80"
              }`}
            >
              Home
            </Link>
            <Link
              to="/sobre"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/sobre") ? "text-primary" : "text-foreground/80"
              }`}
            >
              Sobre a Empresa
            </Link>
            <Link
              to="/como-funciona"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/como-funciona") ? "text-primary" : "text-foreground/80"
              }`}
            >
              Como Funciona
            </Link>
            <Link
              to="/chamar-veiculo"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/chamar-veiculo") ? "text-primary" : "text-foreground/80"
              }`}
            >
              Chamar um Veículo
            </Link>
            {!isLoggedIn ? (
              <Link
                to="/auth"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/auth") ? "text-primary" : "text-foreground/80"
                }`}
              >
                Login/Cadastro
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="text-sm font-medium transition-colors hover:text-primary text-foreground/80 flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Sair
              </button>
            )}
            <Link
              to="/contato"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contato") ? "text-primary" : "text-foreground/80"
              }`}
            >
              Contato
            </Link>
          </nav>

          <Button size="sm" className="bg-gradient-to-r from-primary to-primary-glow">
            Baixar App
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
