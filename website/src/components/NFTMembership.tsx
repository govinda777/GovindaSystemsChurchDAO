import styles from './NFTMembership.module.css';

const NFTMembership = () => {
  return (
    <section id="nft-membership" className={styles.nftSection}>
      <div className="container">
        <h2 className="section-title">Sistema de Membresia NFT</h2>
        
        <div className={styles.introSection}>
          <p className={styles.introText}>
            Na Govinda Systems Church DAO, sua jornada espiritual é registrada de forma 
            permanente e imutável no blockchain através de NFTs (Non-Fungible Tokens). 
            Cada NFT representa não apenas sua identidade na comunidade, mas também seu 
            compromisso, suas responsabilidades e sua evolução espiritual.
          </p>
        </div>

        {/* NFT Genesis - Documento Fundacional */}
        <div className={styles.genesisSection}>
          <div className={styles.genesisHeader}>
            <i className="fas fa-scroll"></i>
            <h3>Govinda Genesis NFT - O Documento Sagrado</h3>
          </div>
          <div className={styles.genesisContent}>
            <p>
              O <strong>Govinda Genesis NFT</strong> é o documento fundacional imutável da 
              igreja. Nele estão gravados os princípios fundamentais, a profecia da 
              descentralização e os valores que guiam nossa comunidade. Este NFT único 
              garante que a base da nossa fé nunca possa ser alterada por voto majoritário 
              ou autoridade central.
            </p>
            <div className={styles.genesisFeatures}>
              <div className={styles.feature}>
                <i className="fas fa-lock"></i>
                <span>Imutável e Permanente</span>
              </div>
              <div className={styles.feature}>
                <i className="fas fa-book"></i>
                <span>Contém os Textos Sagrados</span>
              </div>
              <div className={styles.feature}>
                <i className="fas fa-certificate"></i>
                <span>NFT Único e Original</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sistema de NFTs de Membresia */}
        <div className={styles.membershipSystem}>
          <h3>Jornada de Membresia através de NFTs</h3>
          
          <div className={styles.nftTiers}>
            {/* Tier 1: Visitante */}
            <div className={styles.nftTier}>
              <div className={styles.tierBadge} style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                <i className="fas fa-user"></i>
              </div>
              <h4>Visitante</h4>
              <p className={styles.tierDescription}>
                Qualquer pessoa pode participar dos cultos e eventos como visitante. 
                Não requer NFT, mas também não possui direitos de voto.
              </p>
              <ul className={styles.tierBenefits}>
                <li><i className="fas fa-check"></i> Acesso aos cultos públicos</li>
                <li><i className="fas fa-check"></i> Participação em eventos abertos</li>
                <li><i className="fas fa-check"></i> Acesso à rede social da igreja</li>
              </ul>
            </div>

            {/* Tier 2: Membro - Profissão de Fé */}
            <div className={styles.nftTier}>
              <div className={styles.tierBadge} style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>
                <i className="fas fa-praying-hands"></i>
              </div>
              <h4>Membro - Govinda Soul NFT</h4>
              <p className={styles.tierDescription}>
                Ao fazer sua profissão de fé, você recebe o <strong>Govinda Soul NFT</strong>. 
                Este é seu certificado digital de batismo e membresia na igreja.
              </p>
              <div className={styles.professionProcess}>
                <h5>Como Obter:</h5>
                <ol>
                  <li>Participar de pelo menos 3 cultos como visitante</li>
                  <li>Completar o curso de introdução aos valores da igreja</li>
                  <li>Fazer sua profissão de fé pública durante um culto</li>
                  <li>Receber seu Govinda Soul NFT via carteira Web3</li>
                </ol>
              </div>
              <ul className={styles.tierBenefits}>
                <li><i className="fas fa-check"></i> Direito a voto nas decisões da DAO</li>
                <li><i className="fas fa-check"></i> Acesso a todos os eventos</li>
                <li><i className="fas fa-check"></i> Participação em grupos privados</li>
                <li><i className="fas fa-check"></i> Certificado digital de membresia</li>
              </ul>
            </div>

            {/* Tier 3: Diácono */}
            <div className={styles.nftTier}>
              <div className={styles.tierBadge} style={{background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'}}>
                <i className="fas fa-hands-helping"></i>
              </div>
              <h4>Diácono - Govinda Servant NFT</h4>
              <p className={styles.tierDescription}>
                Membros que se destacam no serviço à comunidade podem ser eleitos como 
                diáconos, recebendo o <strong>Govinda Servant NFT</strong>.
              </p>
              <div className={styles.professionProcess}>
                <h5>Como Obter:</h5>
                <ol>
                  <li>Ser membro ativo por pelo menos 6 meses</li>
                  <li>Completar curso de liderança servidora</li>
                  <li>Ser indicado por 3 membros da comunidade</li>
                  <li>Aprovação por votação da DAO (60% de aprovação)</li>
                </ol>
              </div>
              <ul className={styles.tierBenefits}>
                <li><i className="fas fa-check"></i> Todos os benefícios de membro</li>
                <li><i className="fas fa-check"></i> Poder de voto ponderado (2x)</li>
                <li><i className="fas fa-check"></i> Autoridade para moderar comunidade</li>
                <li><i className="fas fa-check"></i> Conduzir sessões de aconselhamento</li>
                <li><i className="fas fa-check"></i> Organizar eventos e oficinas</li>
              </ul>
            </div>

            {/* Tier 4: Presbítero */}
            <div className={styles.nftTier}>
              <div className={styles.tierBadge} style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}>
                <i className="fas fa-crown"></i>
              </div>
              <h4>Presbítero - Govinda Elder NFT</h4>
              <p className={styles.tierDescription}>
                Líderes espirituais experientes que guiam a comunidade, portadores do 
                <strong> Govinda Elder NFT</strong>.
              </p>
              <div className={styles.professionProcess}>
                <h5>Como Obter:</h5>
                <ol>
                  <li>Ser diácono ativo por pelo menos 1 ano</li>
                  <li>Demonstrar profundo conhecimento dos princípios da igreja</li>
                  <li>Completar formação em teologia descentralizada</li>
                  <li>Aprovação por votação da DAO (70% de aprovação)</li>
                </ol>
              </div>
              <ul className={styles.tierBenefits}>
                <li><i className="fas fa-check"></i> Todos os benefícios de diácono</li>
                <li><i className="fas fa-check"></i> Poder de voto ponderado (3x)</li>
                <li><i className="fas fa-check"></i> Conduzir cultos e cerimônias</li>
                <li><i className="fas fa-check"></i> Ministrar cursos e formações</li>
                <li><i className="fas fa-check"></i> Participar do conselho de anciãos</li>
                <li><i className="fas fa-check"></i> Propor alterações no protocolo</li>
              </ul>
            </div>
          </div>
        </div>

        {/* A Mandala Dinâmica */}
        <div className={styles.mandalaSection}>
          <div className={styles.mandalaContent}>
            <div className={styles.mandalaText}>
              <h3>A Mandala Mestra - Representação Visual da Comunidade</h3>
              <p>
                A cada novo membro que recebe seu Govinda Soul NFT, um algoritmo de arte 
                generativa atualiza a <strong>Mandala Mestra da Igreja</strong>. Esta mandala 
                é uma representação visual dinâmica do crescimento e da evolução espiritual 
                da nossa comunidade.
              </p>
              <ul className={styles.mandalaFeatures}>
                <li>
                  <i className="fas fa-palette"></i>
                  <strong>Arte Generativa:</strong> Cada novo membro adiciona padrões únicos
                </li>
                <li>
                  <i className="fas fa-chart-line"></i>
                  <strong>Crescimento Visível:</strong> A complexidade aumenta com a comunidade
                </li>
                <li>
                  <i className="fas fa-infinity"></i>
                  <strong>Evolução Contínua:</strong> A mandala nunca para de evoluir
                </li>
                <li>
                  <i className="fas fa-link"></i>
                  <strong>Conectada ao Blockchain:</strong> Atualização automática on-chain
                </li>
              </ul>
            </div>
            <div className={styles.mandalaVisual}>
              <div className={styles.mandalaPlaceholder}>
                <i className="fas fa-dharmachakra"></i>
                <p>Mandala Mestra</p>
                <span>Membros: 127</span>
              </div>
            </div>
          </div>
        </div>

        {/* Governança através de NFTs */}
        <div className={styles.governanceSection}>
          <h3>Governança Descentralizada através de NFTs</h3>
          <p className={styles.governanceIntro}>
            Seu NFT não é apenas um certificado - é sua chave para participar ativamente 
            das decisões da igreja. Cada NFT carrega consigo poder de voto e responsabilidades.
          </p>
          
          <div className={styles.governanceGrid}>
            <div className={styles.governanceCard}>
              <i className="fas fa-balance-scale"></i>
              <h4>Votação Ponderada</h4>
              <p>
                Membros: 1 voto<br/>
                Diáconos: 2 votos<br/>
                Presbíteros: 3 votos
              </p>
            </div>
            <div className={styles.governanceCard}>
              <i className="fas fa-file-signature"></i>
              <h4>Propostas</h4>
              <p>
                Qualquer membro pode criar propostas. Diáconos e presbíteros podem 
                propor alterações no protocolo.
              </p>
            </div>
            <div className={styles.governanceCard}>
              <i className="fas fa-coins"></i>
              <h4>Gestão Financeira</h4>
              <p>
                Todas as decisões sobre uso de fundos são votadas pela comunidade 
                de forma transparente.
              </p>
            </div>
            <div className={styles.governanceCard}>
              <i className="fas fa-shield-alt"></i>
              <h4>Smart Contracts</h4>
              <p>
                As regras são executadas automaticamente, sem possibilidade de 
                manipulação ou corrupção.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <h3>Pronto para Iniciar Sua Jornada?</h3>
          <p>
            Comece como visitante, participe dos nossos cultos e eventos, e quando se 
            sentir pronto, faça sua profissão de fé e receba seu Govinda Soul NFT.
          </p>
          <div className={styles.ctaButtons}>
            <a href="#ceremonies" className={styles.primaryButton}>
              <i className="fas fa-calendar-alt"></i>
              Agendar Visita
            </a>
            <a href="#sobre" className={styles.secondaryButton}>
              <i className="fas fa-info-circle"></i>
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTMembership;
