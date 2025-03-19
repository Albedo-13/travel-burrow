import styles from './welcome-home.module.scss';

export const WelcomeHome = () => {
  return (
    <section className={styles.welcome}>
      <h1 className={styles.title}>Enjoy in the best way!</h1>
      <p className={styles.subtitle}>
        Enjoy our services for your trip anytime
      </p>
      <div className={styles.underlay}>
        <h1>ФОРМА</h1>
      </div>
    </section>
  );
};
