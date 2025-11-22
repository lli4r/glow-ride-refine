import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contato = () => {
  return (
    <div className="min-h-screen py-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Estamos aqui para ajudar. Envie sua mensagem e responderemos em breve
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Formulário */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome</label>
                  <Input placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">E-mail</label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telefone</label>
                  <Input type="tel" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <Textarea 
                    placeholder="Como podemos ajudar você?" 
                    rows={6}
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-primary-glow">
                  Enviar Mensagem
                </Button>
              </form>
            </Card>

            {/* Informações de Contato */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">E-mail</h3>
                    <p className="text-muted-foreground">contato@acessa.com.br</p>
                    <p className="text-muted-foreground">suporte@acessa.com.br</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Telefone</h3>
                    <p className="text-muted-foreground">0800 123 4567</p>
                    <p className="text-muted-foreground">(47) 98765-4321</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Endereço</h3>
                    <p className="text-muted-foreground">
                      Rua XV de Novembro, 1000<br />
                      Blumenau - SC<br />
                      CEP: 89010-001
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5">
                <h3 className="font-bold mb-3">Horário de Atendimento</h3>
                <p className="text-muted-foreground mb-2">
                  <strong>Segunda a Sexta:</strong> 8h às 20h
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>Sábados:</strong> 9h às 18h
                </p>
                <p className="text-muted-foreground">
                  <strong>Domingos e Feriados:</strong> 10h às 16h
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
