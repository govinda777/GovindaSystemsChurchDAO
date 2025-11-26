'use client';

import Link from 'next/link';
import styles from './ProtocolApp.module.css';

const ProtocolApp = () => {
  return (
    <section id="protocol-app" className={styles.protocolApp}>
      <div className="container">
        <h2 className="section-title">O App do Protocolo</h2>
        <p className={styles.subtitle}>
          Uma ferramenta única e otimizada para gerenciar as finanças, cultos, cerimônias e a segurança da sua Igreja com total transparência.
        </p>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h4>Administração e Finanças</h4>
            <p>Gerencie as finanças, a tesouraria e as auditorias da sua igreja.</p>
          </div>
          <div className={styles.featureCard}>
            <h4>Cultos e Agenda</h4>
            <p>Crie e gerencie a agenda de cultos, discursos e mídias.</p>
          </div>
          <div className={styles.featureCard}>
            <h4>Monitoramento e Câmeras</h4>
            <p>Monitore a segurança do seu templo com integração de câmeras.</p>
          </div>
          <div className={styles.featureCard}>
            <h4>Cerimônias e Termos</h4>
            <p>Organize cerimônias especiais e gerencie os termos de aceite.</p>
          </div>
        </div>
        <div className={styles.ctaContainer}>
          <Link href="/pages/app" legacyBehavior>
            <a className="btn btn--primary">Saiba Mais</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProtocolApp;
