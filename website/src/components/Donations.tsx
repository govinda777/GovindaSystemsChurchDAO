'use client';
import { usePrivy } from '@privy-io/react-auth';
import styles from './Donations.module.css';

const Donations = ({
  totalDonations,
  handleDonate,
  showNotification,
}: {
  totalDonations: number;
  handleDonate: (event: React.FormEvent<HTMLFormElement>) => void;
  showNotification: (message: string, type: string) => void;
}) => {
  const { ready, login, authenticated } = usePrivy();

  const onDonate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!authenticated) {
      showNotification('Por favor, conecte sua carteira primeiro', 'error');
      login();
      return;
    }
    handleDonate(e);
  };

  return (
    <section id="doacoes" className={styles.donations}>
      <div className="container">
        <h2 className="section-title">Doações</h2>
        <p>A Govinda Systems Church segue um protocolo rigido de controle de segurança , ante fraude e corrupcao, para isso implementamos todas as boas praticas de auditoria e transparencia no nosso protocolo. Sobrevivemos apenas das Receitas feitas por doacoes voluntárias feitas pelo :</p>
        <ul>
          <li>Github payment</li>
          <li>Smart Wallets (ETH / BTC / WBTC / USDT)</li>
          <li>PIX</li>
        </ul>
        <p>Atualmente, o formulário abaixo aceita apenas doações em ETH. Para doar BTC, WBTC, USDT, ou via Github e PIX, por favor, entre em contato conosco.</p>
        <div className={styles.donationsContent}>
          <div className={styles.donationInfo}>
            <h3>Transparência Total</h3>
            <p>
              Todas as doações e gastos são registrados na blockchain Base,
              garantindo transparência completa.
            </p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>
                  {totalDonations.toFixed(1)} ETH
                </span>
                <span className={styles.statLabel}>Total Arrecadado</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>147</span>
                <span className={styles.statLabel}>Membros Ativos</span>
              </div>
            </div>
          </div>
          <div className={styles.donationForm}>
            <h3>Fazer Doação (ETH)</h3>
            <form onSubmit={onDonate}>
              <div className="form-group">
                <label className="form-label">Valor (ETH)</label>
                <input
                  name="amount"
                  type="number"
                  className="form-control"
                  step="0.01"
                  min="0.001"
                  placeholder="0.01"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Mensagem (opcional)</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows={3}
                  placeholder="Sua mensagem de fé..."
                ></textarea>
              </div>
              <button
                type="submit"
                className={`btn btn--primary btn--full-width`}
                disabled={!ready}
              >
                <i className="fas fa-heart"></i>
                Doar com Base
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;
