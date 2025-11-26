import React from 'react';

const ProtocolPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Aplicativo do Protocolo para Igrejas</h1>
          <p className="text-xl mb-8">Organize as finanças, cultos, cerimônias e segurança da sua Igreja em uma ferramenta única, simples e transparente.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-200">
            Comece Agora
          </button>
        </div>
      </section>

      {/* Administração e Finanças */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Administração e Finanças</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">Gestão Financeira</h3>
              <p>Administre as finanças, gerencie a tesouraria e acesse relatórios de auditoria de forma clara e organizada.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">Tesouraria Segura</h3>
              <p>Gerencie permissões de acesso e aprove transações com segurança.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">Relatórios de Auditoria</h3>
              <p>Gere relatórios completos e transparentes para auditoria e prestação de contas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultos */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Cultos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">Agenda do Culto</h3>
              <p>Crie e organize a agenda completa do culto, com tema, horário de início e fim.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">Gestão de Discursos</h3>
              <p>Cadastre discursos, palestrantes e horários de forma integrada.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">Gestão de Mídia</h3>
              <p>Associe imagens, textos e cânticos aos momentos do culto.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">Transmissão Online</h3>
              <p>Crie e compartilhe links do Zoom para cultos online diretamente pelo aplicativo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cerimônias e Utensílios */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Cerimônias e Utensílios</h2>
          <p className="max-w-3xl mx-auto mb-10">Organize eventos especiais, como casamentos e batismos, controlando todos os detalhes, da agenda aos utensílios necessários.</p>
          <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-lg shadow">
                <h3 className="text-2xl font-bold mb-4">Gestão de Cerimônias</h3>
                <p>Planeje e execute cerimônias com agendamento completo e checklists.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow">
                <h3 className="text-2xl font-bold mb-4">Controle de Utensílios</h3>
                <p>Monitore o uso e a disponibilidade de objetos sagrados e outros itens.</p>
              </div>
          </div>
        </div>
      </section>

      {/* Monitoramento e Câmeras */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Monitoramento e Câmeras</h2>
          <p className="max-w-3xl mx-auto mb-10">Garanta a segurança do espaço físico com um sistema de monitoramento integrado e de fácil acesso.</p>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">Integração de Câmeras</h3>
              <p>Conecte o aplicativo ao sistema de câmeras de segurança existente.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">Acesso em Tempo Real</h3>
              <p>Monitore as imagens ao vivo de qualquer lugar, a qualquer hora.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">Registro e Auditoria</h3>
              <p>Mantenha um registro seguro de acessos e eventos para fins de auditoria.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Termos de Aceite e Preço */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Termos de Aceite e Preço</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">Termos de Aceite</h3>
              <p className="mb-4">Ao utilizar o Aplicativo do Protocolo, você concorda com nossos termos de serviço e políticas de privacidade. Nosso compromisso é com a transparência e a segurança dos seus dados.</p>
              <a href="#" className="text-blue-600 hover:underline">Leia os termos completos</a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">Preço</h3>
              <p className="mb-4">Nossos planos são flexíveis e se adaptam à realidade da sua igreja. Entre em contato para uma proposta personalizada.</p>
              <p className="font-bold">Status: Sob consulta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 text-white text-center py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Pronto para organizar sua Igreja com mais eficiência?</h2>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-200">
            Quero experimentar o Protocolo
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProtocolPage;
