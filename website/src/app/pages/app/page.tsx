import React from 'react';
import styles from './App.module.css';

const AppPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>App do Protocolo</h1>
      <p className={styles.description}>
        Uma ferramenta completa para administrar, organizar e fortalecer a sua comunidade religiosa.
      </p>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Administração</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            {/* Ícone */}
            <h3>Administrar as finanças</h3>
            <p>Controle total sobre as finanças da organização.</p>
          </div>
          <div className={styles.featureCard}>
            {/* Ícone */}
            <h3>Gerenciar a tesouraria</h3>
            <p>Gestão eficiente dos recursos e da tesouraria.</p>
          </div>
          <div className={styles.featureCard}>
            {/* Ícone */}
            <h3>Relatórios de auditoria</h3>
            <p>Transparência com relatórios de auditoria detalhados.</p>
          </div>
          <div className={styles.featureCard}>
            {/* Ícone */}
            <h3>Monitoramento & Câmeras</h3>
            <p>Segurança e monitoramento dos espaços físicos.</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Cultos</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            {/* Ícone */}
            <h3>Agenda do culto</h3>
            <p>Crie e gerencie a agenda dos cultos, incluindo discursos e mídias.</p>
          </div>
          <div className={styles.featureCard}>
            {/* Ícone */}
            <h3>Sala online</h3>
            <p>Crie links do Zoom para cultos e eventos online.</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Cerimônias</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            {/* Ícone */}
            <h3>Gestão de utensílios</h3>
            <p>Organize e controle os utensílios necessários para cada cerimônia.</p>
          </div>
          <div className={styles.featureCard}>
            {/* Ícone */}
            <h3>Agenda da cerimônia</h3>
            <p>Planeje o cronograma das cerimônias, desde o início até o fim.</p>
          </div>
          <div className={styles.featureCard}>
            {/* Ícone */}
            <h3>Termo de aceite</h3>
            <p>Gerencie os termos de aceite dos participantes.</p>
          </div>
          <div className={styles.featureCard}>
            {/* Ícone */}
            <h3>Preços e contraindicações</h3>
            <p>Defina os preços e informe sobre as contraindicações das cerimônias.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPage;
