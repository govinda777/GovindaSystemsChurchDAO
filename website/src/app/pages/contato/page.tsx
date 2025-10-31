'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Notification from '../../../components/Notification';

const AgendarVisitaPage = () => {
  const [notification, setNotification] = useState<{
    message: string;
    type: string;
  } | null>(null);

  const showNotification = (message: string, type: string) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleSchedule = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const ceremonyInput = form.elements.namedItem(
      'ceremony'
    ) as HTMLSelectElement;

    const name = nameInput.value;
    const email = emailInput.value;
    const ceremony = ceremonyInput.value;

    if (!name || !email || !ceremony) {
      showNotification('Por favor, preencha todos os campos', 'error');
      return;
    }

    showNotification(
      `Agendamento para ${ceremony} confirmado!`,
      'success'
    );
    form.reset();
  };

  return (
    <>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
      <div className={styles.pageContainer}>
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h3>Agendar Cerimônia</h3>
          </div>
          <div className={styles.formBody}>
            <form onSubmit={handleSchedule}>
              <div className="form-group">
                <label className="form-label">Nome Completo</label>
                <input name="name" type="text" className="form-control" required />
              </div>
              <div className="form-group">
                <label className="form-label">E-mail</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Cerimônia</label>
                <select name="ceremony" className="form-control" required>
                  <option value="">Selecione uma cerimônia</option>
                  <option value="missa">Missa</option>
                  <option value="ayahuasca">Chamanico com Ayahuasca</option>
                  <option value="jamaicana">Jamaicana</option>
                  <option value="mexicana">Chamanico Mexicana</option>
                  <option value="ripe">Ripe</option>
                </select>
              </div>
              <button
                type="submit"
                className={`btn btn--primary btn--full-width`}
              >
                Confirmar Agendamento
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgendarVisitaPage;
