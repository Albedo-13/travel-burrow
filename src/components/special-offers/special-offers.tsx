import image from '@assets/images/offers-woman.png';

import styles from './special-offers.module.scss';

export const SpecialOffers = () => {
  return (
    <section className={styles.specialOffers}>
      <div className="container">
        <div className={styles.underlay}>
          <h2 className={styles.title}>Get Special Offers for Organizations</h2>
          <p className={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="buttonPrimary">Contact Us</button>
        </div>
        <img
          className={styles.image}
          src={image}
          alt="woman points the finger to the button"
        />
      </div>
    </section>
  );
};
