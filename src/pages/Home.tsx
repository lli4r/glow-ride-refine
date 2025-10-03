import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Shield, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import ValuesGrid from "@/components/ValuesGrid";
import FlowchartSection from "@/components/FlowchartSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-glow opacity-95"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZ2LTZoNnYtNmgtNnYtNmgtNnY2aC02djZoNnY2aC02djZoNnY2aDZ2LTZoNnYtNmg2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-8 inline-block">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=200&h=200" 
                  alt="Logo Acessa" 
                  className="w-24 h-24 rounded-xl mx-auto"
                />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mobilidade para Todos
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Transporte acessível, seguro e digno para todos que precisam de mobilidade com respeito e conforto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Baixar o App
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Saiba Mais
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Gratuito para download</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Disponível 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Totalmente acessível</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por Que Escolher o Acessa */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por Que Escolher o Acessa?
            </h2>
            <p className="text-lg text-muted-foreground">
              Mais do que um app de transporte, somos um compromisso com a inclusão
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-elegant transition-shadow">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">100% Acessível</h3>
                <p className="text-muted-foreground">
                  Carros adaptados e motoristas treinados para atender todas as necessidades.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-elegant transition-shadow">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Seguro e Confiável</h3>
                <p className="text-muted-foreground">
                  Todos os motoristas são verificados e os veículos inspecionados regularmente.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-elegant transition-shadow">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Atendimento Humanizado</h3>
                <p className="text-muted-foreground">
                  Respeito, dignidade e cuidado em cada viagem.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Valores, Missão, Inovação, Crescimento */}
      <ValuesGrid />

      {/* Fluxograma e Criação de Conta */}
      <FlowchartSection />

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-glow">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para começar?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Baixe o app agora e faça parte da mobilidade inclusiva
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Baixar na App Store
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Baixar no Google Play
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
