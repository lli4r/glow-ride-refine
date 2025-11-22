import { Card } from "@/components/ui/card";
import { Users, Target, Heart } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen py-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre o Acessa
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Conectando pessoas através de mobilidade acessível, segura e humanizada
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Nossa História</h2>
          <Card className="p-8">
            <p className="text-muted-foreground mb-4">
              O Acessa nasceu de uma necessidade real: oferecer transporte digno e acessível para pessoas com mobilidade reduzida. Fundada em 2025, nossa missão é tornar a locomoção urbana mais inclusiva e humana.
            </p>
            <p className="text-muted-foreground mb-4">
              A ideia surgiu quando uma jovem percebeu, no dia a dia, as dificuldades que muitas pessoas enfrentavam para se deslocar pela cidade. Ela queria mudar essa realidade — e, junto com um amigo que acreditava no mesmo propósito, transformou essa vontade em projeto.
            </p>
            <p className="text-muted-foreground">
              Assim nasceu o Acessa: um serviço que conecta passageiros a motoristas preparados, com veículos adaptados e atendimento acolhedor. Mais do que um aplicativo, somos uma iniciativa dedicada a garantir respeito, segurança e autonomia em cada viagem.
            </p>
          </Card>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Inclusão</h3>
              <p className="text-muted-foreground">
                Acreditamos que mobilidade é um direito de todos, independente de suas necessidades especiais.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Excelência</h3>
              <p className="text-muted-foreground">
                Buscamos constantemente melhorar nossos serviços para oferecer a melhor experiência possível.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Humanização</h3>
              <p className="text-muted-foreground">
                Cada viagem é uma oportunidade de demonstrar cuidado, respeito e dignidade.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Nossa Equipe</h2>
          <Card className="p-8">
            <p className="text-muted-foreground text-center">
              Contamos com uma equipe dedicada de profissionais comprometidos com a missão de tornar o transporte acessível uma realidade. Desde nossos motoristas treinados até nossa equipe de suporte, todos trabalham para garantir que cada viagem seja segura e confortável.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
