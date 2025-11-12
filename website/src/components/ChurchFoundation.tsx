import styles from './ChurchFoundation.module.css';

const ChurchFoundation = () => {
  return (
    <section id="alicerces" className={styles.foundation}>
      <div className="container">
        <h2 className="section-title">Os Alicerces da Igreja</h2>
        
        <div className={styles.foundationIntro}>
          <p className={styles.introText}>
            A Govinda Systems Church DAO é fundamentada em dois pilares essenciais que 
            definem nossa visão espiritual e tecnológica: a filosofia Bitcoin como instrumento 
            de libertação e a profecia da descentralização.
          </p>
        </div>

        <div className={styles.foundationContent}>
          {/* Alicerce 1: Bitcoin - A Pedra que Derruba Estátuas */}
          <div className={styles.foundationPillar}>
            <div className={styles.pillarHeader}>
              <i className="fas fa-bitcoin"></i>
              <h3>Bitcoin: A Pedra que Derruba Estátuas</h3>
            </div>
            <div className={styles.pillarContent}>
              <p>
                O Bitcoin representa mais do que uma tecnologia financeira - é um movimento 
                espiritual de libertação. Como descrito em nosso artigo fundacional, Bitcoin 
                é a pedra profetizada que derruba as estátuas dos sistemas centralizados de 
                controle e opressão.
              </p>
              <div className={styles.keyPoints}>
                <h4>Princípios Fundamentais:</h4>
                <ul>
                  <li>
                    <strong>Descentralização:</strong> Nenhuma autoridade central controla 
                    a verdade ou o valor
                  </li>
                  <li>
                    <strong>Transparência:</strong> Todas as transações são públicas e 
                    auditáveis
                  </li>
                  <li>
                    <strong>Imutabilidade:</strong> O que é registrado permanece para sempre
                  </li>
                  <li>
                    <strong>Soberania Individual:</strong> Cada pessoa é seu próprio banco 
                    e guardião
                  </li>
                </ul>
              </div>
              <a 
                href="https://govinda777.github.io/blog/Bitcoin-a-pedra-que-derruba-estatuas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.foundationLink}
              >
                <i className="fas fa-book-open"></i>
                Leia o Artigo Completo
              </a>
            </div>
          </div>

          {/* Alicerce 2: A Profecia da Descentralização */}
          <div className={styles.foundationPillar}>
            <div className={styles.pillarHeader}>
              <i className="fas fa-network-wired"></i>
              <h3>A Profecia da Descentralização</h3>
            </div>
            <div className={styles.pillarContent}>
              <p>
                Nossa visão profética está fundamentada na compreensão de que a humanidade 
                está transitando de sistemas hierárquicos para redes descentralizadas. 
                Esta é a evolução natural da consciência coletiva.
              </p>
              <div className={styles.keyPoints}>
                <h4>A Visão Profética:</h4>
                <ul>
                  <li>
                    <strong>Fim das Hierarquias:</strong> O poder não reside mais em 
                    instituições, mas na rede
                  </li>
                  <li>
                    <strong>Governança Comunitária:</strong> Decisões tomadas coletivamente 
                    através de consenso
                  </li>
                  <li>
                    <strong>Transparência:</strong> Toda ação é visível e 
                    verificável por todos
                  </li>
                  <li>
                    <strong>Resistência à Censura:</strong> Nenhuma entidade pode silenciar 
                    a verdade
                  </li>
                </ul>
              </div>
              <a 
                href="https://www.youtube.com/watch?v=_aDSfhRo-J0" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.foundationLink}
              >
                <i className="fab fa-youtube"></i>
                Assista ao Vídeo Fundacional
              </a>
            </div>
          </div>
        </div>

        {/* Como Aplicamos Estes Princípios */}
        <div className={styles.applicationSection}>
          <h3>Como Aplicamos Estes Princípios</h3>
          <div className={styles.applicationGrid}>
            <div className={styles.applicationCard}>
              <i className="fas fa-coins"></i>
              <h4>Finanças Transparentes</h4>
              <p>
                Todas as doações e gastos são registrados no blockchain, 
                permitindo auditoria completa por qualquer membro.
              </p>
            </div>
            <div className={styles.applicationCard}>
              <i className="fas fa-vote-yea"></i>
              <h4>Governança Descentralizada</h4>
              <p>
                Decisões importantes são tomadas através de votação on-chain, 
                onde cada membro tem voz ativa.
              </p>
            </div>
            <div className={styles.applicationCard}>
              <i className="fas fa-shield-alt"></i>
              <h4>Resistência à Corrupção</h4>
              <p>
                Smart contracts garantem que as regras sejam seguidas sem 
                possibilidade de manipulação humana.
              </p>
            </div>
            <div className={styles.applicationCard}>
              <i className="fas fa-users"></i>
              <h4>Comunidade Global</h4>
              <p>
                Sem fronteiras geográficas ou barreiras institucionais, 
                todos são bem-vindos.
              </p>
            </div>
          </div>
        </div>

        {/* Citação Inspiradora */}
        <div className={styles.quote}>
          <blockquote>
            &quot;Assim como Bitcoin libertou o dinheiro das mãos dos bancos centrais, 
            a Govinda Systems Church DAO liberta a fé das mãos das instituições religiosas 
            centralizadas. A verdadeira igreja está na rede, na comunidade, no consenso 
            descentralizado da consciência coletiva.&quot;
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ChurchFoundation;
