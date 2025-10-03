import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navigation, MapPin } from "lucide-react";

const MapComponent = () => {
  // Coordenadas centrais do Brasil
  const [vehiclePosition, setVehiclePosition] = useState<[number, number]>([-14.235, -51.9253]);
  const [isTracking, setIsTracking] = useState(false);
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");

  useEffect(() => {
    if (!isTracking) return;

    const interval = setInterval(() => {
      setVehiclePosition((prev) => [
        prev[0] + (Math.random() - 0.5) * 0.001,
        prev[1] + (Math.random() - 0.5) * 0.001,
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, [isTracking]);

  const handleRequestVehicle = () => {
    setIsTracking(true);
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
            <MapPin className="h-5 w-5 text-primary" />
            Localização em Tempo Real
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Acompanhe o veículo se aproximando da sua localização
          </p>
          
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="text"
                placeholder="Origem (rua, cidade, estado...)"
                value={origem}
                onChange={(e) => setOrigem(e.target.value)}
                className="flex-1"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="text"
                placeholder="Destino (rua, cidade, estado...)"
                value={destino}
                onChange={(e) => setDestino(e.target.value)}
                className="flex-1"
              />
              <Button
                onClick={handleRequestVehicle}
                disabled={isTracking}
                className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity sm:w-auto"
              >
                <Navigation className="h-4 w-4 mr-2" />
                {isTracking ? "Veículo a Caminho" : "Solicitar Veículo"}
              </Button>
            </div>
          </div>
        </div>

        {isTracking && (
          <div className="mb-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-sm font-medium text-primary">
              ✓ Veículo solicitado com sucesso! Acompanhe a movimentação no mapa.
            </p>
          </div>
        )}
      </Card>

      <div className="h-[600px] rounded-lg overflow-hidden shadow-elegant border bg-muted relative">
        <iframe
          src={`https://www.openstreetmap.org/export/embed.html?bbox=-73.9872,-33.7506,-34.7936,5.2718&layer=mapnik&marker=${vehiclePosition[0]},${vehiclePosition[1]}`}
          className="w-full h-full"
          style={{ border: 0 }}
          title="Mapa de localização do Brasil"
        />
        
        {isTracking && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-6 py-3 flex items-center gap-3">
            <div className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </div>
            <div className="text-sm">
              <p className="font-semibold">Veículo em Movimento</p>
              <p className="text-xs text-muted-foreground">
                Lat: {vehiclePosition[0].toFixed(4)}, Lng: {vehiclePosition[1].toFixed(4)}
              </p>
            </div>
          </div>
        )}
      </div>

      <Card className="p-6 bg-primary/5">
        <h3 className="font-bold mb-3">Como Funciona o Rastreamento</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>Clique em "Solicitar Veículo" para iniciar o rastreamento</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>O mapa será atualizado automaticamente mostrando a posição do veículo</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>Você receberá notificações quando o motorista estiver próximo</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>Tempo estimado de chegada: 5-10 minutos</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default MapComponent;
