import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Loader2, User, Car } from "lucide-react";

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Cadastro Passageiro state
  const [passageiroEmail, setPassageiroEmail] = useState("");
  const [passageiroPassword, setPassageiroPassword] = useState("");
  const [passageiroNome, setPassageiroNome] = useState("");
  const [passageiroTelefone, setPassageiroTelefone] = useState("");

  // Cadastro Motorista state
  const [motoristaEmail, setMotoristaEmail] = useState("");
  const [motoristaPassword, setMotoristaPassword] = useState("");
  const [motoristaNome, setMotoristaNome] = useState("");
  const [motoristaTelefone, setMotoristaTelefone] = useState("");
  const [motoristaPlaca, setMotoristaPlaca] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loginEmail || !loginPassword) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    setLoading(true);
    
    // Simulação de login (sem backend)
    setTimeout(() => {
      toast.success("Login realizado com sucesso!");
      setLoading(false);
    }, 1000);
  };

  const handleCadastroPassageiro = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!passageiroEmail || !passageiroPassword || !passageiroNome || !passageiroTelefone) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    setLoading(true);
    
    // Simulação de cadastro (sem backend)
    setTimeout(() => {
      toast.success("Cadastro realizado com sucesso!");
      setLoading(false);
    }, 1000);
  };

  const handleCadastroMotorista = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!motoristaEmail || !motoristaPassword || !motoristaNome || !motoristaTelefone || !motoristaPlaca) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    setLoading(true);
    
    // Simulação de cadastro (sem backend)
    setTimeout(() => {
      toast.success("Cadastro realizado com sucesso!");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-glow to-secondary p-4">
      <Card className="w-full max-w-4xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Bem-vindo ao Acessa</h1>
          <p className="text-muted-foreground">
            {isLogin ? "Entre na sua conta" : "Crie sua conta"}
          </p>
        </div>

        <Tabs value={isLogin ? "login" : "cadastro"} onValueChange={(v) => setIsLogin(v === "login")}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="cadastro">Cadastro</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-login">E-mail</Label>
                <Input
                  id="email-login"
                  type="email"
                  placeholder="seu@email.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password-login">Senha</Label>
                <Input
                  id="password-login"
                  type="password"
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Entrando...
                  </>
                ) : (
                  "Entrar"
                )}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="cadastro">
            <Tabs defaultValue="passageiro" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="passageiro" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Passageiro
                </TabsTrigger>
                <TabsTrigger value="motorista" className="flex items-center gap-2">
                  <Car className="h-4 w-4" />
                  Motorista
                </TabsTrigger>
              </TabsList>

              <TabsContent value="passageiro">
                <form onSubmit={handleCadastroPassageiro} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="passageiro-nome">Nome Completo</Label>
                    <Input
                      id="passageiro-nome"
                      type="text"
                      placeholder="Seu nome completo"
                      value={passageiroNome}
                      onChange={(e) => setPassageiroNome(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="passageiro-email">E-mail</Label>
                    <Input
                      id="passageiro-email"
                      type="email"
                      placeholder="seu@email.com"
                      value={passageiroEmail}
                      onChange={(e) => setPassageiroEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="passageiro-telefone">Telefone</Label>
                    <Input
                      id="passageiro-telefone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={passageiroTelefone}
                      onChange={(e) => setPassageiroTelefone(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="passageiro-password">Senha</Label>
                    <Input
                      id="passageiro-password"
                      type="password"
                      placeholder="••••••••"
                      value={passageiroPassword}
                      onChange={(e) => setPassageiroPassword(e.target.value)}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Cadastrando...
                      </>
                    ) : (
                      "Cadastrar"
                    )}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="motorista">
                <form onSubmit={handleCadastroMotorista} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="motorista-nome">Nome Completo</Label>
                    <Input
                      id="motorista-nome"
                      type="text"
                      placeholder="Seu nome completo"
                      value={motoristaNome}
                      onChange={(e) => setMotoristaNome(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motorista-email">E-mail</Label>
                    <Input
                      id="motorista-email"
                      type="email"
                      placeholder="seu@email.com"
                      value={motoristaEmail}
                      onChange={(e) => setMotoristaEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motorista-telefone">Telefone</Label>
                    <Input
                      id="motorista-telefone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={motoristaTelefone}
                      onChange={(e) => setMotoristaTelefone(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motorista-placa">Placa do Veículo</Label>
                    <Input
                      id="motorista-placa"
                      type="text"
                      placeholder="ABC-1234"
                      value={motoristaPlaca}
                      onChange={(e) => setMotoristaPlaca(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motorista-password">Senha</Label>
                    <Input
                      id="motorista-password"
                      type="password"
                      placeholder="••••••••"
                      value={motoristaPassword}
                      onChange={(e) => setMotoristaPassword(e.target.value)}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Cadastrando...
                      </>
                    ) : (
                      "Cadastrar"
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default Auth;
