import MapComponent from "@/components/MapComponent";

const ChamarVeiculo = () => {
  return (
    <div className="min-h-screen py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Chamar um Veículo
          </h1>
          <p className="text-lg text-muted-foreground">
            Solicite seu veículo acessível e acompanhe em tempo real
          </p>
        </div>

        <MapComponent />
      </div>
    </div>
  );
};

export default ChamarVeiculo;
