import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoAcessa from "@/assets/logo-acessa.jpg";
import { User, LogIn, UserPlus, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate("/");
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`p-2 rounded-full transition-colors hover:bg-primary/10 ${
                    isActive("/area-cliente") || isActive("/auth") ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  <User className="h-5 w-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {user ? (
                  <>
                    <DropdownMenuItem className="text-sm text-muted-foreground" disabled>
                      Olá, {user.nome.split(" ")[0]}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate("/area-cliente")} className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      Área do Cliente
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive">
                      <LogOut className="mr-2 h-4 w-4" />
                      Sair
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem onClick={() => navigate("/auth?mode=login")} className="cursor-pointer">
                      <LogIn className="mr-2 h-4 w-4" />
                      Entrar
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/auth?mode=register")} className="cursor-pointer">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Criar Conta
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
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
