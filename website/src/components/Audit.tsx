import styles from './Audit.module.css';

const Audit = () => {
  return (
    <section id="auditoria" className={styles.audit}>
      <div className="container">
        <h2 className="section-title">Auditoria</h2>
        <div className={styles.auditContent}>
          <div className={styles.auditCategory}>
            <h3>Despesas</h3>
            <ul>
              <li>Salários</li>
              <li>Marketing</li>
              <li>Infraestrutura</li>
              <li>Eventos</li>
            </ul>
          </div>
          <div className={styles.auditCategory}>
            <h3>Receitas</h3>
            <ul>
              <li>Doações</li>
              <li>Dízimos</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audit;
