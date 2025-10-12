import styles from './Notification.module.css';

const Notification = ({
  notification,
  setNotification,
}: {
  notification: { message: string; type: string } | null;
  setNotification: (notification: null) => void;
}) => {
  if (!notification) {
    return null;
  }

  return (
    <div
      className={`${styles.notification} ${
        styles[`notification--${notification.type}`]
      }`}
    >
      <div className={styles.notificationContent}>
        <i
          className={`fas fa-${
            notification.type === 'success'
              ? 'check-circle'
              : 'exclamation-circle'
          }`}
        ></i>
        <span>{notification.message}</span>
        <button
          className={styles.notificationClose}
          onClick={() => setNotification(null)}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Notification;