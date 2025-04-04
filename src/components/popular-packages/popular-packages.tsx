import bestPrice from '@assets/icons/best-price.png';
import bottleOfWater from '@assets/icons/bottle-of-water.png';
import cityApp from '@assets/icons/city-app.png';
import companion from '@assets/icons/companion.png';
import discountOnRickshaw from '@assets/icons/discount-on-rickshaw.png';
import guaranteedSupport from '@assets/icons/guaranteed-support.png';
import guideForYou from '@assets/icons/guide-for-you.png';
import mountainBikeIncluded from '@assets/icons/mountain-bike-included.png';
import parkTicket from '@assets/icons/park-ticket.png';
import personalDriver from '@assets/icons/personal-driver.png';
import returnBus from '@assets/icons/return-bus.png';
import whereverYouWant from '@assets/icons/wherever-you-want.png';
import yourBikeforADay from '@assets/icons/your-bike-for-a-day.png';
import package1 from '@assets/images/package-1.webp';
import package2 from '@assets/images/package-2.webp';
import package3 from '@assets/images/package-3.webp';
import package4 from '@assets/images/package-4.webp';
import clsx from 'clsx';

import { useStores } from '@/hooks/use-stores';

import styles from './popular-packages.module.scss';

const popularPackages = [
  {
    id: 1,
    image: package1,
    name: 'Bike / Rickshaw',
    price: 10,
    benefits: [
      {
        icon: yourBikeforADay,
        label: 'You bike for a day',
      },
      {
        icon: cityApp,
        label: 'City App',
      },
      {
        icon: discountOnRickshaw,
        label: 'Discount in Rickshaw',
      },
      {
        icon: guaranteedSupport,
        label: 'Guaranteed Support',
      },
    ],
  },
  {
    id: 2,
    image: package2,
    name: 'Bike Tours',
    price: 30,
    benefits: [
      {
        icon: mountainBikeIncluded,
        label: 'A Mountain Bike Included',
      },
      {
        icon: guideForYou,
        label: 'A Guide For You',
      },
      {
        icon: bottleOfWater,
        label: 'Bottle of water',
      },
      {
        icon: guaranteedSupport,
        label: 'Guaranteed Support',
      },
    ],
  },
  {
    id: 3,
    image: package3,
    name: 'Bus Trips',
    price: 45,
    benefits: [
      {
        icon: parkTicket,
        label: 'Park ticket',
      },
      {
        icon: returnBus,
        label: 'Return bus',
      },
      {
        icon: companion,
        label: 'Companion',
      },
      {
        icon: guaranteedSupport,
        label: 'Guaranteed Support',
      },
    ],
  },
  {
    id: 4,
    image: package4,
    name: 'Transfer',
    price: 10,
    benefits: [
      {
        icon: personalDriver,
        label: 'Personal Driver',
      },
      {
        icon: whereverYouWant,
        label: 'Wherever You Want',
      },
      {
        icon: bestPrice,
        label: 'At the best price',
      },
      {
        icon: guaranteedSupport,
        label: 'Guaranteed Support',
      },
    ],
  },
];

export const PopularPackages = () => {
  const {
    hotelsStore: { currency },
  } = useStores();

  return (
    <section className={styles.popularPackages}>
      <div className="container">
        <h2 className={styles.title}>The Most Popular Packages</h2>
        <div className={styles.wrapper}>
          {popularPackages.map(({ id, image, name, price, benefits }) => (
            <div className={styles.item} key={id}>
              <img className={styles.image} src={image} alt={name} />
              <div className={styles.content}>
                <h3 className={styles.name}>{name}</h3>
                <div className={styles.price}>
                  <div className={styles.symbol}>{currency.symbol}</div>
                  <span>{price}</span>/day
                </div>
                <ul className={styles.benefits}>
                  {benefits.map((benefit) => (
                    <li className={styles.benefit}>
                      <img src={benefit.icon} alt={benefit.label} />
                      <span>{benefit.label}</span>
                    </li>
                  ))}
                </ul>
                <button className={clsx(styles.button, "buttonOutlineAccent")}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
