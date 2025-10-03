import { Card } from "@/components/ui/card";
import { Download, MapPin, Car, CheckCircle } from "lucide-react";

const ComoFunciona = () => {
  const steps = [
    {
      icon: Download,
      title: "1. Baixe o Aplicativo",
      description: "Disponível gratuitamente na App Store e Google Play. Faça o download e crie sua conta em poucos minutos."
    },
    {
      icon: MapPin,
      title: "2. Informe Seu Destino",
      description: "Digite seu endereço de destino e veja o valor estimado da viagem antes de confirmar."
    },
    {
      icon: Car,
      title: "3. Solicite um Veículo",
      description: "Confirme a solicitação e acompanhe em tempo real a chegada do motorista até você."
    },
    {
      icon: CheckCircle,
      title: "4. Viaje com Segurança",
      description: "Aproveite sua viagem com conforto, acessibilidade e atendimento humanizado."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Como Funciona
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Solicitar um veículo acessível nunca foi tão fácil
          </p>
        </div>
      </section>

      {/* Passos */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-elegant transition-shadow">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recursos Adicionais */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Recursos Adicionais
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Pagamento Fácil</h3>
              <p className="text-muted-foreground">
                Aceite cartões de crédito, débito e dinheiro. Escolha a forma de pagamento mais conveniente para você.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Suporte 24/7</h3>
              <p className="text-muted-foreground">
                Nossa equipe está sempre disponível para ajudar você com qualquer dúvida ou problema.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Histórico de Viagens</h3>
              <p className="text-muted-foreground">
                Acesse facilmente todas as suas viagens anteriores, com detalhes completos e recibos.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Avaliações</h3>
              <p className="text-muted-foreground">
                Avalie sua experiência e ajude-nos a manter a qualidade do serviço sempre alta.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Para Motoristas */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Quer Ser um Motorista Acessa?
          </h2>
          <Card className="p-8">
            <p className="text-muted-foreground mb-6 text-center">
              Motoristas do Acessa precisam ter veículos adaptados e passar por treinamento específico para atendimento humanizado. Valorizamos profissionais comprometidos com a inclusão e o respeito.
            </p>
            <div className="text-center">
              <a href="#" className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-primary-glow text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Cadastre-se como Motorista
              </a>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ComoFunciona;
