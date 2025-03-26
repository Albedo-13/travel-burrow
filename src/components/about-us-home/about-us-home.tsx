import image from '@assets/images/about-woman.png';

import styles from './about-us-home.module.scss';

export const AboutUsHome = () => {
  return (
    <section className={styles.aboutUs}>
      <div className="container">
        <div className={styles.aboutUsWrapper}>
          <img className={styles.image} src={image} alt="woman traveling" />
          <div className={styles.contentWrapper}>
            <p className={styles.subtitle}>WELCOME TO OUR SITE!</p>
            <h2 className={styles.title}>
              We are the best company for your visit
            </h2>
            <p className={styles.text}>
              After decades of experience, and a whole life in Lucca, we offer
              you the most complete tourism service in the city. In addition to
              having bikes and rickshaws to have as much fun as you want, you
              have the choice of tour guides with whom to tour and drivers for
              your every need! We offer packages in the way that you get the
              most at the lowest price. Book with us and we will always be
              available for you!
            </p>
            <div className={styles.stats}>
              <div>
                20+ <p className={styles.statsText}>Years Experience</p>
              </div>
              <div>
                100+ <p className={styles.statsText}>Happy Customer</p>
              </div>
              <div>
                15+ <p className={styles.statsText}>Choise of Services</p>
              </div>
              <div>
                10+ <p className={styles.statsText}>Professional Guides</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
