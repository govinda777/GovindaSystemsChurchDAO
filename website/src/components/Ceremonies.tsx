'use client';
import { useState } from 'react';
import styles from './Ceremonies.module.css';

const Ceremonies = ({
  openScheduleModal,
}: {
  openScheduleModal: () => void;
}) => {
  const [activeTab, setActiveTab] = useState('ceremonies');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section id="cerimonias" className={styles.ceremonies}>
      <div className="container">
        <h2 className="section-title">Cerimônias e Eventos</h2>
        <div className={styles.ceremonyTabs}>
          <button
            className={`${styles.tabBtn} ${
              activeTab === 'ceremonies' ? styles.active : ''
            }`}
            onClick={() => handleTabClick('ceremonies')}
          >
            Cerimônias
          </button>
          <button
            className={`${styles.tabBtn} ${
              activeTab === 'regular' ? styles.active : ''
            }`}
            onClick={() => handleTabClick('regular')}
          >
            Eventos Regulares
          </button>
        </div>

        <div
          id="ceremonies-content"
          className={`${styles.tabContent} ${
            activeTab === 'ceremonies' ? styles.active : ''
          }`}
        >
          <div className={styles.ceremoniesGrid}>
            <div className={styles.ceremonyCard}>
              <h4>Missa</h4>
              <p>Cultos tradicionais de louvor e reflexão</p>
              <span className={styles.frequency}>Frequência: Semanal</span>
              <button
                className={`btn btn--secondary btn--sm`}
                onClick={openScheduleModal}
              >
                Agendar
              </button>
            </div>
            <div className={styles.ceremonyCard}>
              <h4>Chamanico com Ayahuasca</h4>
              <p>Cerimônia de consagração e retrospectiva</p>
              <span className={styles.frequency}>
                Frequência: Última sexta-feira do mês
              </span>
              <button
                className={`btn btn--secondary btn--sm`}
                onClick={openScheduleModal}
              >
                Agendar
              </button>
            </div>
            <div className={styles.ceremonyCard}>
              <h4>Jamaicana</h4>
              <p>Cerimônia com elementos da tradição jamaicana</p>
              <span className={styles.frequency}>Frequência: Mensal</span>
              <button
                className={`btn btn--secondary btn--sm`}
                onClick={openScheduleModal}
              >
                Agendar
              </button>
            </div>
            <div className={styles.ceremonyCard}>
              <h4>Chamanico Mexicana</h4>
              <p>Tradição mexicana de cura e conexão espiritual</p>
              <span className={styles.frequency}>Frequência: Mensal</span>
              <button
                className={`btn btn--secondary btn--sm`}
                onClick={openScheduleModal}
              >
                Agendar
              </button>
            </div>
            <div className={styles.ceremonyCard}>
              <h4>Ripe</h4>
              <p>Cerimônia de purificação e renovação</p>
              <span className={styles.frequency}>Frequência: Quinzenal</span>
              <button
                className={`btn btn--secondary btn--sm`}
                onClick={openScheduleModal}
              >
                Agendar
              </button>
            </div>
          </div>
        </div>

        <div
          id="regular-content"
          className={`${styles.tabContent} ${
            activeTab === 'regular' ? styles.active : ''
          }`}
        >
          <div className={styles.regularEvents}>
            <div className={styles.eventCard}>
              <h4>Aconselhamento</h4>
              <p>
                <strong>Terças-feiras</strong> das 08:40 às 09:40
              </p>
              <p>Apoio emocional e espiritual individualizado</p>
              <button
                className={`btn btn--secondary btn--sm`}
                onClick={openScheduleModal}
              >
                Agendar
              </button>
            </div>
            <div className={styles.eventCard}>
              <h4>Cursos e Oficinas</h4>
              <p>
                <strong>Quintas-feiras</strong> das 08:40 às 09:40
              </p>
              <p>Desenvolvimento espiritual e pessoal</p>
              <button
                className={`btn btn--secondary btn--sm`}
                onClick={openScheduleModal}
              >
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ceremonies;