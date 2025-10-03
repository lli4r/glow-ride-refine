import { Card } from "@/components/ui/card";
import { Target, Lightbulb, TrendingUp, Users } from "lucide-react";

const ValuesGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos Pilares
          </h2>
          <p className="text-lg text-muted-foreground">
            Os valores que guiam nossa missão de mobilidade acessível
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Valores */}
          <Card className="p-8 hover:shadow-elegant transition-all hover:-translate-y-1">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Valores</h3>
              <p className="text-muted-foreground">
                Respeito, inclusão e dignidade são a base de tudo que fazemos. 
                Acreditamos que toda pessoa merece mobilidade com qualidade e segurança.
              </p>
            </div>
          </Card>

          {/* Missão */}
          <Card className="p-8 hover:shadow-elegant transition-all hover:-translate-y-1">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Missão</h3>
              <p className="text-muted-foreground">
                Proporcionar transporte acessível e humanizado para pessoas com 
                necessidades especiais, garantindo autonomia e conforto em cada viagem.
              </p>
            </div>
          </Card>

          {/* Inovação */}
          <Card className="p-8 hover:shadow-elegant transition-all hover:-translate-y-1">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Inovação</h3>
              <p className="text-muted-foreground">
                Utilizamos tecnologia de ponta para conectar passageiros e motoristas, 
                tornando o transporte acessível simples, rápido e eficiente.
              </p>
            </div>
          </Card>

          {/* Crescimento */}
          <Card className="p-8 hover:shadow-elegant transition-all hover:-translate-y-1">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Crescimento</h3>
              <p className="text-muted-foreground">
                Nossa visão é expandir para todas as cidades do Brasil, levando 
                mobilidade acessível para milhões de pessoas que precisam.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuesGrid;
