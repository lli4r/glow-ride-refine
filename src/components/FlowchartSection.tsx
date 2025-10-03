import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserCircle2, Car as CarIcon } from "lucide-react";

const FlowchartSection = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Seção de criação de conta */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Crie Sua Conta
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Escolha o tipo de conta que melhor se adequa a você
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-elegant transition-shadow">
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <UserCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Passageiro</h3>
                <p className="text-muted-foreground text-center">
                  Solicite viagens com facilidade e segurança
                </p>
                <Button className="w-full bg-gradient-to-r from-primary to-primary-glow">
                  Criar Conta de Passageiro
                </Button>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-elegant transition-shadow">
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <CarIcon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Motorista</h3>
                <p className="text-muted-foreground text-center">
                  Ganhe dinheiro dirigindo com flexibilidade
                </p>
                <Button className="w-full" variant="outline">
                  Criar Conta de Motorista
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Fluxograma */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como Funciona o Processo
          </h2>
          <p className="text-lg text-muted-foreground">
            Entenda o passo a passo de forma simples e visual
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Início */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground text-4xl">
              ●
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Início</h3>
              <p className="text-muted-foreground">Bem-vindo ao Acessa</p>
            </div>

            {/* Linha vertical */}
            <div className="h-16 w-1 bg-border"></div>

            {/* Escolha */}
            <div className="flex h-20 w-20 items-center justify-center text-primary text-6xl">
              ▼
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Escolha</h3>
              <p className="text-muted-foreground">Passageiro ou Motorista?</p>
            </div>

            {/* Linha vertical */}
            <div className="h-16 w-1 bg-border"></div>

            {/* Cadastro */}
            <Card className="w-full max-w-md p-6">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Cadastro</h3>
                <p className="text-muted-foreground">
                  Preencha seus dados pessoais e informações necessárias
                </p>
              </div>
            </Card>

            {/* Linha vertical */}
            <div className="h-16 w-1 bg-border"></div>

            {/* Verificação */}
            <Card className="w-full max-w-md p-6 bg-muted">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Verificação</h3>
                <p className="text-muted-foreground">
                  Validamos seus documentos para garantir segurança
                </p>
              </div>
            </Card>

            {/* Linha vertical */}
            <div className="h-16 w-1 bg-border"></div>

            {/* Aprovação */}
            <Card className="w-full max-w-md p-6">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Aprovação</h3>
                <p className="text-muted-foreground">
                  Receba a confirmação por e-mail ou SMS
                </p>
              </div>
            </Card>

            {/* Linha vertical */}
            <div className="h-16 w-1 bg-border"></div>

            {/* Conclusão */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-white text-4xl">
              ✓
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Pronto!</h3>
              <p className="text-muted-foreground">
                Comece a usar o Acessa agora mesmo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowchartSection;
