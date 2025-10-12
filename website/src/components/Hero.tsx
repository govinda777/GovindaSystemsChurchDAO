'use client';

import { usePrivy } from '@privy-io/react-auth';
import styles from './Hero.module.css';

const Hero = () => {
  const { login } = usePrivy();

  const showNotification = (message: string, type: string) => {
    // This is a placeholder. We will implement a global notification system later.
    alert(`${type}: ${message}`);
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBackground}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Govinda Systems Church DAO</h1>
          <p className={styles.heroSubtitle}>
            Uma organização religiosa descentralizada que acredita no espírito
            de comunidade e fraternidade, mantendo suas finanças abertas e
            transparentes através da tecnologia blockchain.
          </p>
          <div className={styles.heroActions}>
            <button className={`btn btn--primary btn--lg`} onClick={login}>
              <i className="fas fa-users"></i>
              Participar Agora
            </button>
            <button
              className={`btn btn--outline btn--lg`}
              onClick={() =>
                showNotification(
                  'Funcionalidade em desenvolvimento. Entre em contato conosco!',
                  'info'
                )
              }
            >
              <i className="fas fa-plus"></i>
              Criar Sua Igreja
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;