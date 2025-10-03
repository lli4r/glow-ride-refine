import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-glow">
              <Car className="h-6 w-6 text-primary-foreground" />
            </div>
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

          <Button size="sm" className="bg-gradient-to-r from-primary to-primary-glow">
            Baixar App
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
