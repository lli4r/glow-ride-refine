import { Card } from "@/components/ui/card";

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Política de Privacidade
        </h1>

        <Card className="p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Informações que Coletamos</h2>
            <p className="text-muted-foreground">
              Coletamos informações que você nos fornece diretamente, como nome, e-mail, telefone e localização quando você usa nosso aplicativo. Também coletamos informações automaticamente sobre seu dispositivo e como você usa nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Como Usamos Suas Informações</h2>
            <p className="text-muted-foreground mb-4">
              Usamos as informações coletadas para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Fornecer, manter e melhorar nossos serviços</li>
              <li>Processar suas solicitações de viagem</li>
              <li>Conectar você com motoristas disponíveis</li>
              <li>Enviar notificações sobre suas viagens</li>
              <li>Garantir a segurança e proteção de todos os usuários</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Compartilhamento de Informações</h2>
            <p className="text-muted-foreground">
              Compartilhamos suas informações apenas quando necessário para fornecer nossos serviços, como com motoristas para completar suas viagens, ou quando exigido por lei. Não vendemos suas informações pessoais para terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Segurança dos Dados</h2>
            <p className="text-muted-foreground">
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Seus Direitos</h2>
            <p className="text-muted-foreground mb-4">
              Você tem o direito de:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir informações incorretas</li>
              <li>Solicitar a exclusão de suas informações</li>
              <li>Optar por não receber comunicações de marketing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Retenção de Dados</h2>
            <p className="text-muted-foreground">
              Mantemos suas informações pessoais pelo tempo necessário para fornecer nossos serviços e cumprir nossas obrigações legais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Alterações nesta Política</h2>
            <p className="text-muted-foreground">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova política nesta página e atualizando a data de "última atualização".
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contato</h2>
            <p className="text-muted-foreground">
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através do e-mail: privacidade@acessa.com.br
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

export default PoliticaPrivacidade;
