import statisticsCity from '@assets/images/statistics-city.webp';
import statisticsWoman from '@assets/images/statistics-woman.webp';

import styles from './statistics.module.scss';

const statistics = {
  home: {
    image: statisticsWoman,
    title: 'We are the best company for your visit',
    text: 'After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!',
  },
  about: {
    image: statisticsCity,
    title: 'We Are The Center Of Lucca To Offer You The Best',
    text: 'We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!',
  },
};

type StatisticsProps = {
  variant: 'home' | 'about';
};

export const Statistics = ({ variant = 'home' }: StatisticsProps) => {
  return (
    <section className={styles.statistics}>
      <div className="container">
        <div className={styles.statisticsWrapper}>
          <img
            className={styles.image}
            src={statistics[variant].image}
            alt="woman traveling"
          />
          <div className={styles.contentWrapper}>
            <p className={styles.subtitle}>WELCOME TO OUR SITE!</p>
            <h2 className={styles.title}>{statistics[variant].title}</h2>
            <p className={styles.text}>{statistics[variant].text}</p>
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
