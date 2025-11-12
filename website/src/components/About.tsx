import styles from './About.module.css';

const About = () => {
  return (
    <section id="sobre" className={styles.about}>
      <div className="container">
        <h2 className="section-title">Nossa Filosofia</h2>
        <div className={styles.aboutContent}>
          <div className={styles.philosophy}>
            <h3>Princípios Fundamentais</h3>
            <ul className={styles.principlesList}>
              <li>
                <i className="fas fa-dove"></i> Ser pacífico
              </li>
              <li>
                <i className="fas fa-heart"></i> Exercitar a capacidade de empatia
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
          <div className={styles.bitcoinPhilosophy}>
            <h3>Filosofia Bitcoin e Descentralização</h3>
            <p>
              Acreditamos na filosofia Bitcoin como uma forma de libertação e
              descentralização, seguindo os ensinamentos de &quot;A Pedra que
              Derruba Estátuas&quot;. A tecnologia blockchain nos permite criar
              uma igreja verdadeiramente transparente e democrática.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;