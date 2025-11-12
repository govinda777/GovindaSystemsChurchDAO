'use client';
import { useEffect } from 'react';
import styles from './ScheduleModal.module.css';

const ScheduleModal = ({
  isScheduleModalOpen,
  closeScheduleModal,
  handleSchedule,
}: {
  isScheduleModalOpen: boolean;
  closeScheduleModal: () => void;
  handleSchedule: (event: React.FormEvent<HTMLFormElement>) => void;
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeScheduleModal();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [closeScheduleModal]);

  if (!isScheduleModalOpen) {
    return null;
  }

  return (
    <div
      className={`${styles.modal} ${!isScheduleModalOpen && styles.hidden}`}
      onClick={closeScheduleModal}
    >
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <h3>Agendar Cerimônia</h3>
          <button className={styles.modalClose} onClick={closeScheduleModal}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>
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
  );
};

export default ScheduleModal;