import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Govinda Systems Church DAO</h4>
            <p>
              Uma igreja descentralizada baseada em comunidade, transparência e
              fé compartilhada.
            </p>
          </div>
          <div className={styles.footerSection}>
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
          <div className={styles.footerSection}>
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
          <div className={styles.footerSection}>
            <h4>Contato</h4>
            <p>
              <i className="fas fa-envelope"></i> contato@govindachurch.dao
            </p>
            <p>
              <i className="fas fa-globe"></i> Base Network
            </p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>
            &copy; 2025 Govinda Systems Church DAO. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;