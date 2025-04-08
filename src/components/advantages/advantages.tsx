import bestPrice from '@assets/icons/advantages/best-price.webp';
import experience from '@assets/icons/advantages/experience.webp';
import guide from '@assets/icons/advantages/guide.webp';
import map from '@assets/icons/advantages/map.webp';

import styles from './advantages.module.scss';

const advantages = [
  {
    id: 1,
    image: map,
    text: 'Complete Packages For All Your Wishes',
  },
  {
    id: 2,
    image: experience,
    text: 'Over 30 Years Of Experience',
  },
  {
    id: 3,
    image: guide,
    text: 'Expert Guides For You',
  },
  {
    id: 4,
    image: bestPrice,
    text: 'Guaranteed fun at the best price!',
  },
];

export const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <div className="container">
        <div className={styles.wrapper}>
          {advantages.map(({ image, text, id }) => (
            <div className={styles.item} key={id}>
              <img className={styles.image} src={image} alt={text} />
              <p className={styles.text}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
