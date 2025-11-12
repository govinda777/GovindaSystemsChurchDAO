import styles from './Values.module.css';

const Values = () => {
  return (
    <section id="valores" className={styles.values}>
      <div className="container">
        <h2 className="section-title">Nossos Valores</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <i className="fas fa-heart"></i>
            </div>
            <h3>Comunidade e fraternidade</h3>
            <p>
              Acreditamos no espírito de comunidade e fraternidade, condições
              humanas únicas que nos unem em nossa fé compartilhada.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <i className="fas fa-eye"></i>
            </div>
            <h3>Finanças abertas</h3>
            <p>
              Saiba quanto a Igreja arrecada e como o dinheiro é gasto.
              Acreditamos em transparência total.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <i className="fas fa-hands-helping"></i>
            </div>
            <h3>Apoio emocional</h3>
            <p>
              Oferecemos ferramentas para ajudá-lo a lidar com ansiedade,
              tristeza, vícios e ausências.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <i className="fas fa-balance-scale"></i>
            </div>
            <h3>Neutralidade política</h3>
            <p>
              A Igreja é politicamente neutra. Acreditamos apenas no governo de
              Deus.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <i className="fas fa-comments"></i>
            </div>
            <h3>Canal de comunicação</h3>
            <p>
              Mantemos linhas de comunicação abertas com nossos fiéis para
              garantir que suas vozes sejam ouvidas.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
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
  );
};

export default Values;