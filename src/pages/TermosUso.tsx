import { Card } from "@/components/ui/card";

const TermosUso = () => {
  return (
    <div className="min-h-screen py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Termos de Uso
        </h1>

        <Card className="p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground">
              Ao acessar e usar o aplicativo Acessa, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não utilize nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Descrição do Serviço</h2>
            <p className="text-muted-foreground">
              O Acessa é uma plataforma que conecta passageiros a motoristas para serviços de transporte acessível. Não somos uma empresa de transporte, mas uma plataforma tecnológica que facilita essas conexões.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Cadastro e Conta</h2>
            <p className="text-muted-foreground mb-4">
              Para usar nossos serviços, você deve:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Ter pelo menos 18 anos de idade</li>
              <li>Fornecer informações verdadeiras e completas</li>
              <li>Manter suas credenciais de acesso seguras</li>
              <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Conduta do Usuário</h2>
            <p className="text-muted-foreground mb-4">
              Você concorda em:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Usar os serviços apenas para fins legítimos</li>
              <li>Não violar nenhuma lei ou regulamento aplicável</li>
              <li>Tratar motoristas e outros usuários com respeito</li>
              <li>Não usar o serviço para fins fraudulentos ou prejudiciais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Pagamentos e Tarifas</h2>
            <p className="text-muted-foreground">
              As tarifas são calculadas com base na distância, tempo e outros fatores. Você concorda em pagar todas as tarifas incorridas através de sua conta. Reservamo-nos o direito de alterar nossas tarifas a qualquer momento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Cancelamentos e Reembolsos</h2>
            <p className="text-muted-foreground">
              Você pode cancelar uma viagem de acordo com nossa política de cancelamento. Cancelamentos tardios podem resultar em taxas. Reembolsos são processados conforme nossa política de reembolso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground">
              O Acessa não será responsável por quaisquer danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou da incapacidade de usar nossos serviços. Não garantimos que o serviço estará sempre disponível ou livre de erros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Propriedade Intelectual</h2>
            <p className="text-muted-foreground">
              Todo o conteúdo, marcas registradas e dados no aplicativo Acessa são propriedade da empresa ou de seus licenciadores. Você não pode usar, copiar ou distribuir qualquer conteúdo sem autorização prévia por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Modificações dos Termos</h2>
            <p className="text-muted-foreground">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. Continuando a usar nossos serviços após as alterações, você concorda com os termos revisados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Lei Aplicável</h2>
            <p className="text-muted-foreground">
              Estes termos serão regidos e interpretados de acordo com as leis do Brasil. Quaisquer disputas serão resolvidas nos tribunais competentes do Brasil.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Contato</h2>
            <p className="text-muted-foreground">
              Para dúvidas sobre estes Termos de Uso, entre em contato através do e-mail: suporte@acessa.com.br
            </p>
          </section>

          <div className="pt-6 border-t">
            <p className="text-sm text-muted-foreground text-center">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TermosUso;
