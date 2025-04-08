import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router';

import styles from './welcome-about-us.module.scss';

export const WelcomeAboutUs = observer(() => {
  const navigate = useNavigate();

  const handleRedirect = () => navigate('/tour-packages');

  return (
    <section className={styles.welcome}>
      <div className="container">
        <h1 className={styles.title}>Our team cares about your full relax</h1>
        <p className={styles.subtitle}>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness.
        </p>
        <button className="buttonOutlineBase" onClick={handleRedirect}>
          View our Tour Packages
        </button>
      </div>
    </section>
  );
});
