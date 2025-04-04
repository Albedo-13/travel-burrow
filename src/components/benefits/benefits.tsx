import benefit1 from '@assets/images/benefit-1.webp';
import benefit2 from '@assets/images/benefit-2.webp';
import benefit3 from '@assets/images/benefit-3.webp';
import benefit4 from '@assets/images/benefit-4.webp';

import styles from './benefits.module.scss';

const benefits = [
  {
    image: benefit1,
    title: 'Bike and rickshaw rental',
    subtitle: 'Book your quality vehicle quickly for an hour or all day!',
  },
  {
    image: benefit2,
    title: 'Guided tour of the countryside',
    subtitle:
      'Live the real Lucchese experience by visiting the suburbs by bike!',
  },
  {
    image: benefit3,
    title: 'Taxi and NCC service',
    subtitle:
      'Do you need not only a bike but also a driver? Then you have found the right place!',
  },
  {
    image: benefit4,
    title: 'Bus Package',
    subtitle:
      'Do you need not only a bike but also a driver? Then you have found the right place!',
  },
];

export const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <div className="container">
        <div className={styles.wrapper}>
          {benefits.map(({ image, title, subtitle }) => (
            <div className={styles.item} key={title}>
              <img className={styles.image} src={image} alt={title} />
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.subtitle}>{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
