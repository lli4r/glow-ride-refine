import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoAcessa from "@/assets/logo-acessa.jpg";
import { User } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const location = useLocation();
  const { user } = useAuth();
  const isActive = (path: string) => location.pathname === path;

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
            <Link
              to="/contato"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contato") ? "text-primary" : "text-foreground/80"
              }`}
            >
              Contato
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to={user ? "/area-cliente" : "/auth"}
              className={`p-2 rounded-full transition-colors hover:bg-primary/10 ${
                isActive("/area-cliente") || isActive("/auth") ? "text-primary" : "text-foreground/80"
              }`}
              title={user ? "Área do Cliente" : "Login/Cadastro"}
            >
              <User className="h-5 w-5" />
            </Link>
            <Button size="sm" className="bg-gradient-to-r from-primary to-primary-glow">
              Baixar App
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
