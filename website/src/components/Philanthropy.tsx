import styles from './Philanthropy.module.css';

const Philanthropy = () => {
  return (
    <section id="filantropia" className={styles.philanthropy}>
      <div className="container">
        <h2 className="section-title">Filantropia</h2>
        <div className={styles.philanthropyContent}>
          <h3>ONGs Certificadas</h3>
          <ul>
            <li>Lista de ONGs certificadas pela Church</li>
            <li>Processo de certificação</li>
            <li>Auditoria das ONGs</li>
          </ul>
          <p>
            Atenção: Não podemos de forma alguma emitir um certificado para uma ONG que recebe dinheiro de forma ilicita, por exemplo: lavagem de dinheiro, financiamento a terrorismo, black list [Pessoas ou entidades banidas do sistema financeiro].
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philanthropy;
