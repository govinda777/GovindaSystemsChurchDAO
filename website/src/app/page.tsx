'use client';

import { useState, useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';

export default function Home() {
  const { ready, authenticated, login } = usePrivy();
  const [activeTab, setActiveTab] = useState('ceremonies');
  const [isScheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: string } | null>(null);
  const [totalDonations, setTotalDonations] = useState(12.5);

  const showNotification = (message: string, type: string) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const openScheduleModal = () => setScheduleModalOpen(true);
  const closeScheduleModal = () => setScheduleModalOpen(false);

  const handleDonate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!authenticated) {
      showNotification('Por favor, conecte sua carteira primeiro', 'error');
      login();
      return;
    }
    const form = event.currentTarget;
    const amountInput = form.elements.namedItem('amount') as HTMLInputElement;
    const amount = parseFloat(amountInput.value);

    if (!amount || amount <= 0) {
        showNotification('Por favor, insira um valor válido', 'error');
        return;
    }

    showNotification(`Doação de ${amount} ETH realizada com sucesso!`, 'success');
    setTotalDonations(prev => prev + amount);
    form.reset();
  };

  const handleSchedule = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const ceremonyInput = form.elements.namedItem('ceremony') as HTMLSelectElement;

    const name = nameInput.value;
    const email = emailInput.value;
    const ceremony = ceremonyInput.value;

    if (!name || !email || !ceremony) {
        showNotification('Por favor, preencha todos os campos', 'error');
        return;
    }

    showNotification(`Agendamento para ${ceremony} confirmado!`, 'success');
    closeScheduleModal();
    form.reset();
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeScheduleModal();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <>
      {notification && (
        <div className={`notification notification--${notification.type}`}>
            <div className="notification-content">
                <i className={`fas fa-${notification.type === 'success' ? 'check-circle' : 'exclamation-circle'}`}></i>
                <span>{notification.message}</span>
                <button className="notification-close" onClick={() => setNotification(null)}>&times;</button>
            </div>
        </div>
      )}
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Govinda Systems Church DAO</h1>
            <p className="hero-subtitle">
              Uma organização religiosa descentralizada que acredita no espírito
              de comunidade e fraternidade, mantendo suas finanças abertas e
              transparentes através da tecnologia blockchain.
            </p>
            <div className="hero-actions">
              <button className={`btn btn--primary btn--lg`} onClick={login}>
                <i className="fas fa-users"></i>
                Participar Agora
              </button>
              <button className={`btn btn--outline btn--lg`} onClick={() => showNotification('Funcionalidade em desenvolvimento. Entre em contato conosco!', 'info')}>
                <i className="fas fa-plus"></i>
                Criar Sua Igreja
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section id="valores" className="values">
        <div className="container">
          <h2 className="section-title">Nossos Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Comunidade e fraternidade</h3>
              <p>
                Acreditamos no espírito de comunidade e fraternidade, condições
                humanas únicas que nos unem em nossa fé compartilhada.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Finanças abertas</h3>
              <p>
                Saiba quanto a Igreja arrecada e como o dinheiro é gasto.
                Acreditamos em transparência total.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Apoio emocional</h3>
              <p>
                Oferecemos ferramentas para ajudá-lo a lidar com ansiedade,
                tristeza, vícios e ausências.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3>Neutralidade política</h3>
              <p>
                A Igreja é politicamente neutra. Acreditamos apenas no governo
                de Deus.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3>Canal de comunicação</h3>
              <p>
                Mantemos linhas de comunicação abertas com nossos fiéis para
                garantir que suas vozes sejam ouvidas.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <h3>Rede Social</h3>
              <p>
                Temos nossa própria rede social para fomentar a conexão entre
                nossa comunidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cerimônias e Eventos */}
      <section id="cerimonias" className="ceremonies">
        <div className="container">
          <h2 className="section-title">Cerimônias e Eventos</h2>
          <div className="ceremony-tabs">
            <button
              className={`tab-btn ${activeTab === 'ceremonies' ? 'active' : ''}`}
              onClick={() => handleTabClick('ceremonies')}
            >
              Cerimônias
            </button>
            <button
              className={`tab-btn ${activeTab === 'regular' ? 'active' : ''}`}
              onClick={() => handleTabClick('regular')}
            >
              Eventos Regulares
            </button>
          </div>

          <div
            id="ceremonies"
            className={`tab-content ${activeTab === 'ceremonies' ? 'active' : ''}`}
          >
            <div className="ceremonies-grid">
              <div className="ceremony-card">
                <h4>Missa</h4>
                <p>Cultos tradicionais de louvor e reflexão</p>
                <span className="frequency">Frequência: Semanal</span>
                <button className={`btn btn--secondary btn--sm`} onClick={openScheduleModal}>Agendar</button>
              </div>
              <div className="ceremony-card">
                <h4>Chamanico com Ayahuasca</h4>
                <p>Cerimônia de consagração e retrospectiva</p>
                <span className="frequency">
                  Frequência: Última sexta-feira do mês
                </span>
                <button className={`btn btn--secondary btn--sm`} onClick={openScheduleModal}>Agendar</button>
              </div>
              <div className="ceremony-card">
                <h4>Jamaicana</h4>
                <p>Cerimônia com elementos da tradição jamaicana</p>
                <span className="frequency">Frequência: Mensal</span>
                <button className={`btn btn--secondary btn--sm`} onClick={openScheduleModal}>Agendar</button>
              </div>
              <div className="ceremony-card">
                <h4>Chamanico Mexicana</h4>
                <p>Tradição mexicana de cura e conexão espiritual</p>
                <span className="frequency">Frequência: Mensal</span>
                <button className={`btn btn--secondary btn--sm`} onClick={openScheduleModal}>Agendar</button>
              </div>
              <div className="ceremony-card">
                <h4>Ripe</h4>
                <p>Cerimônia de purificação e renovação</p>
                <span className="frequency">Frequência: Quinzenal</span>
                <button className={`btn btn--secondary btn--sm`} onClick={openScheduleModal}>Agendar</button>
              </div>
            </div>
          </div>

          <div
            id="regular"
            className={`tab-content ${activeTab === 'regular' ? 'active' : ''}`}
          >
            <div className="regular-events">
              <div className="event-card">
                <h4>Aconselhamento</h4>
                <p>
                  <strong>Terças-feiras</strong> das 08:40 às 09:40
                </p>
                <p>Apoio emocional e espiritual individualizado</p>
                <button className={`btn btn--secondary btn--sm`} onClick={openScheduleModal}>Agendar</button>
              </div>
              <div className="event-card">
                <h4>Cursos e Oficinas</h4>
                <p>
                  <strong>Quintas-feiras</strong> das 08:40 às 09:40
                </p>
                <p>Desenvolvimento espiritual e pessoal</p>
                <button className={`btn btn--secondary btn--sm`} onClick={openScheduleModal}>
                  Inscrever-se
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doações e Dízimos */}
      <section id="doacoes" className="donations">
        <div className="container">
          <h2 className="section-title">Doações e Dízimos</h2>
          <div className="donations-content">
            <div className="donation-info">
              <h3>Transparência Total</h3>
              <p>
                Todas as doações e gastos são registrados na blockchain Base,
                garantindo transparência completa.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <span className="stat-value">
                    {totalDonations.toFixed(1)} ETH
                  </span>
                  <span className="stat-label">Total Arrecadado</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">147</span>
                  <span className="stat-label">Membros Ativos</span>
                </div>
              </div>
            </div>
            <div className="donation-form">
              <h3>Fazer Doação</h3>
              <form onSubmit={handleDonate}>
                <div className="form-group">
                  <label className="form-label">Valor (ETH)</label>
                  <input
                    name="amount"
                    type="number"
                    className="form-control"
                    step="0.01"
                    min="0.001"
                    placeholder="0.01"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Mensagem (opcional)</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows={3}
                    placeholder="Sua mensagem de fé..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`btn btn--primary btn--full-width`}
                  disabled={!ready}
                >
                  <i className="fas fa-heart"></i>
                  Doar com Base
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Crie sua Igreja */}
      <section className="create-church">
        <div className="container">
          <h2 className="section-title">Crie Sua Própria Igreja DAO</h2>
          <p className="section-subtitle">
            Oferecemos ferramentas completas para você criar sua própria igreja
            descentralizada
          </p>
          <div className="tools-grid">
            <div className="tool-item">
              <i className="fas fa-file-contract"></i>
              <h4>Smart Contract Base</h4>
              <p>Template completo de smart contract na rede Base</p>
            </div>
            <div className="tool-item">
              <i className="fab fa-github"></i>
              <h4>Site Personalizado</h4>
              <p>Site customizado via GitHub Pages</p>
            </div>
            <div className="tool-item">
              <i className="fas fa-vote-yea"></i>
              <h4>Governança DAO</h4>
              <p>Sistema completo de votação descentralizada</p>
            </div>
            <div className="tool-item">
              <i className="fas fa-chart-line"></i>
              <h4>Transparência Financeira</h4>
              <p>Ferramentas de transparência e auditoria</p>
            </div>
            <div className="tool-item">
              <i className="fas fa-users"></i>
              <h4>Comunidade e Suporte</h4>
              <p>Suporte técnico e comunidade ativa</p>
            </div>
          </div>
          <button className={`btn btn--primary btn--lg`} onClick={() => showNotification('Funcionalidade em desenvolvimento. Entre em contato conosco!', 'info')}>
            <i className="fas fa-rocket"></i>
            Começar Agora
          </button>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="about">
        <div className="container">
          <h2 className="section-title">Nossa Filosofia</h2>
          <div className="about-content">
            <div className="philosophy">
              <h3>Princípios Fundamentais</h3>
              <ul className="principles-list">
                <li>
                  <i className="fas fa-dove"></i> Ser pacífico
                </li>
                <li>
                  <i className="fas fa-heart"></i> Exercitar a capacidade de
                  empatia
                </li>
                <li>
                  <i className="fas fa-user"></i> Reconhecer a singularidade de
                  cada indivíduo
                </li>
                <li>
                  <i className="fas fa-seedling"></i> Admitir erros e buscar o
                  crescimento
                </li>
              </ul>
            </div>
            <div className="bitcoin-philosophy">
              <h3>Filosofia Bitcoin e Descentralização</h3>
              <p>
                Acreditamos na filosofia Bitcoin como uma forma de libertação e
                descentralização, seguindo os ensinamentos de &quot;A Pedra que
                Derruba Estátuas&quot;. A tecnologia blockchain nos permite criar uma
                igreja verdadeiramente transparente e democrática.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Govinda Systems Church DAO</h4>
              <p>
                Uma igreja descentralizada baseada em comunidade, transparência e
                fé compartilhada.
              </p>
            </div>
            <div className="footer-section">
              <h4>Links Rápidos</h4>
              <ul>
                <li>
                  <a href="#valores">Nossos Valores</a>
                </li>
                <li>
                  <a href="#cerimonias">Cerimônias</a>
                </li>
                <li>
                  <a href="#doacoes">Doações</a>
                </li>
                <li>
                  <a href="#sobre">Sobre</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Comunidade</h4>
              <ul>
                <li>
                  <a href="#" target="_blank">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contato</h4>
              <p>
                <i className="fas fa-envelope"></i> contato@govindachurch.dao
              </p>
              <p>
                <i className="fas fa-globe"></i> Base Network
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; 2025 Govinda Systems Church DAO. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Schedule Modal */}
      {isScheduleModalOpen && (
        <div className={`modal ${!isScheduleModalOpen && 'hidden'}`} onClick={closeScheduleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Agendar Cerimônia</h3>
              <button className="modal-close" onClick={closeScheduleModal}>&times;</button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSchedule}>
                <div className="form-group">
                  <label className="form-label">Nome Completo</label>
                  <input name="name" type="text" className="form-control" required />
                </div>
                <div className="form-group">
                  <label className="form-label">E-mail</label>
                  <input name="email" type="email" className="form-control" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Cerimônia</label>
                  <select name="ceremony" className="form-control" required>
                    <option value="">Selecione uma cerimônia</option>
                    <option value="missa">Missa</option>
                    <option value="ayahuasca">Chamanico com Ayahuasca</option>
                    <option value="jamaicana">Jamaicana</option>
                    <option value="mexicana">Chamanico Mexicana</option>
                    <option value="ripe">Ripe</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className={`btn btn--primary btn--full-width`}
                >
                  Confirmar Agendamento
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}