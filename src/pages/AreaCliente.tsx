import { useAuth } from "@/hooks/useAuth";
import { useViagens } from "@/hooks/useViagens";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  User, 
  Phone, 
  Mail, 
  Car, 
  MapPin, 
  Clock, 
  Calendar,
  Star,
  LogOut,
  TrendingUp,
  DollarSign
} from "lucide-react";
import { useEffect } from "react";

const AreaCliente = () => {
  const { user, loading: authLoading, logout } = useAuth();
  const { viagens, loading: viagensLoading } = useViagens(user?.id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-muted via-background to-muted p-4 md:p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <Skeleton className="h-12 w-64" />
          <div className="grid md:grid-cols-3 gap-6">
            <Skeleton className="h-48" />
            <Skeleton className="h-48" />
            <Skeleton className="h-48" />
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const viagensConcluidas = viagens.filter(v => v.status === "concluida").length;
  const valorTotal = viagens
    .filter(v => v.status === "concluida")
    .reduce((sum, v) => sum + v.valor, 0);
  const mediaAvaliacao = viagens
    .filter(v => v.motorista)
    .reduce((sum, v) => sum + (v.motorista?.avaliacao || 0), 0) / viagensConcluidas || 0;

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      concluida: { label: "Concluída", variant: "default" as const },
      em_andamento: { label: "Em andamento", variant: "secondary" as const },
      agendada: { label: "Agendada", variant: "outline" as const },
      cancelada: { label: "Cancelada", variant: "destructive" as const },
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-muted p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Área do Cliente</h1>
            <p className="text-muted-foreground">Bem-vindo de volta, {user.nome}</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </div>

        {/* Profile Card */}
        <Card>
          <CardHeader>
            <CardTitle>Perfil</CardTitle>
            <CardDescription>Informações da sua conta</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Nome</p>
                  <p className="font-medium">{user.nome}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="font-medium">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <p className="font-medium">{user.telefone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Tipo</p>
                  <p className="font-medium capitalize">{user.tipo}</p>
                </div>
              </div>
              {user.placa && (
                <div className="flex items-center gap-3">
                  <Car className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Placa do Veículo</p>
                    <p className="font-medium">{user.placa}</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Viagens Concluídas</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{viagensConcluidas}</div>
              <p className="text-xs text-muted-foreground">Total de viagens realizadas</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Valor Total</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {valorTotal.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">Em viagens concluídas</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avaliação Média</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mediaAvaliacao.toFixed(1)}</div>
              <p className="text-xs text-muted-foreground">De 5.0 estrelas</p>
            </CardContent>
          </Card>
        </div>

        {/* Viagens */}
        <Card>
          <CardHeader>
            <CardTitle>Histórico de Viagens</CardTitle>
            <CardDescription>Suas últimas viagens no Acessa</CardDescription>
          </CardHeader>
          <CardContent>
            {viagensLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
              </div>
            ) : viagens.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                Você ainda não possui viagens registradas.
              </p>
            ) : (
              <div className="space-y-4">
                {viagens.map((viagem) => (
                  <Card key={viagem.id} className="border-2">
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <div className="space-y-1 flex-1">
                            <div className="flex items-start gap-2">
                              <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                              <div>
                                <p className="text-sm font-medium">{viagem.origem}</p>
                                <p className="text-sm text-muted-foreground">{viagem.destino}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            {getStatusBadge(viagem.status)}
                            <p className="text-lg font-bold">R$ {viagem.valor.toFixed(2)}</p>
                          </div>
                        </div>

                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(viagem.data).toLocaleDateString("pt-BR")}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {viagem.horario}
                          </div>
                        </div>

                        {viagem.motorista && (
                          <div className="flex items-center justify-between pt-2 border-t">
                            <div className="flex items-center gap-2">
                              <Car className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">
                                {viagem.motorista.nome} • {viagem.motorista.placa}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-accent text-accent" />
                              <span className="text-sm font-medium">{viagem.motorista.avaliacao}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AreaCliente;
