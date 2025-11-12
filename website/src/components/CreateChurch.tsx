import styles from './CreateChurch.module.css';

const CreateChurch = () => {
  const showNotification = (message: string, type: string) => {
    // This is a placeholder. We will implement a global notification system later.
    alert(`${type}: ${message}`);
  };

  return (
    <section className={styles.createChurch}>
      <div className="container">
        <h2 className={`section-title ${styles.sectionTitle}`}>
          Crie Sua Própria Igreja DAO
        </h2>
        <p className={`section-subtitle ${styles.sectionSubtitle}`}>
          Oferecemos ferramentas completas para você criar sua própria igreja
          descentralizada
        </p>
        <div className={styles.toolsGrid}>
          <div className={styles.toolItem}>
            <i className="fas fa-file-contract"></i>
            <h4>Smart Contract Base</h4>
            <p>Template completo de smart contract na rede Base</p>
          </div>
          <div className={styles.toolItem}>
            <i className="fab fa-github"></i>
            <h4>Site Personalizado</h4>
            <p>Site customizado via GitHub Pages</p>
          </div>
          <div className={styles.toolItem}>
            <i className="fas fa-vote-yea"></i>
            <h4>Governança DAO</h4>
            <p>Sistema completo de votação descentralizada</p>
          </div>
          <div className={styles.toolItem}>
            <i className="fas fa-chart-line"></i>
            <h4>Transparência Financeira</h4>
            <p>Ferramentas de transparência e auditoria</p>
          </div>
          <div className={styles.toolItem}>
            <i className="fas fa-users"></i>
            <h4>Comunidade e Suporte</h4>
            <p>Suporte técnico e comunidade ativa</p>
          </div>
        </div>
        <button
          className={`btn btn--primary btn--lg`}
          onClick={() =>
            showNotification(
              'Funcionalidade em desenvolvimento. Entre em contato conosco!',
              'info'
            )
          }
        >
          <i className="fas fa-rocket"></i>
          Começar Agora
        </button>
      </div>
    </section>
  );
};

export default CreateChurch;