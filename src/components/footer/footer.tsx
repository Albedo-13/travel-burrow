import facebook from '@assets/icons/footer/facebook.webp';
import instagram from '@assets/icons/footer/instagram.webp';
import location from '@assets/icons/footer/location.webp';
import mail from '@assets/icons/footer/mail.webp';
import phone from '@assets/icons/footer/phone.webp';
import twitter from '@assets/icons/footer/twitter.webp';
import clsx from 'clsx';

import styles from './footer.module.scss';

const footer = [
  {
    id: 'services',
    title: 'Services',
    links: [
      {
        id: 'bike-rental',
        title: 'Bike and Rickshaw rental',
        href: '#',
      },
      {
        id: 'lucca-tours',
        title: 'Guided Tours of Lucca',
        href: '#',
      },
      {
        id: 'bike-tour',
        title: 'Guided Bike Tour of Lucca',
        href: '#',
      },
      {
        id: 'tuscan-hills',
        title: 'Trip In The Tuscan Hills',
        href: '#',
      },
      {
        id: 'luxury-cars',
        title: 'Transportation With Luxury Cars',
        href: '#',
      },
      {
        id: 'wine-tours',
        title: 'Wine Tours By Bus With Guide',
        href: '#',
      },
    ],
  },
  {
    id: 'home',
    title: 'Home',
    links: [
      {
        id: 'home-link',
        title: 'Home',
        href: '#',
      },
      {
        id: 'about',
        title: 'About Us',
        href: '#',
      },
      {
        id: 'packages',
        title: 'Tour Packages',
        href: '#',
      },
    ],
  },
  {
    id: 'help',
    title: 'Help',
    links: [
      {
        id: 'terms',
        title: 'Terms of Use',
        href: '#',
      },
      {
        id: 'privacy',
        title: 'Privacy Policy',
        href: '#',
      },
    ],
  },
  {
    id: 'contacts',
    title: 'Contacts',
    links: [
      {
        id: 'address',
        title: 'Piazza Napoleone, Lucca, Tuscany',
        href: '#',
        icon: location,
      },
      {
        id: 'phone',
        title: '+39 346 368 5708',
        href: '#',
        icon: phone,
      },
      {
        id: 'email',
        title: 'italiainlimo@gmail.com',
        href: '#',
        icon: mail,
      },
    ],
  },
  {
    id: 'social',
    title: 'Social media',
    links: [
      {
        id: 'twitter',
        title: '',
        href: '#',
        icon: twitter,
      },
      {
        id: 'facebook',
        title: '',
        href: '#',
        icon: facebook,
      },
      {
        id: 'instagram',
        title: '',
        href: '#',
        icon: instagram,
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <hr className={styles.separator} />
        <div className={styles.wrapper}>
          {footer.map((item) => (
            <div key={item.id}>
              <h4 className={styles.title}>{item.title}</h4>
              <ul
                className={clsx(
                  item.title === 'Social media'
                    ? styles.listRow
                    : styles.listCol
                )}
              >
                {item.links.map((link) => (
                  <li key={link.id}>
                    <a className={styles.link} href={link.href}>
                      {'icon' in link && (
                        <img
                          className={styles.icon}
                          src={link.icon}
                          alt={link.title}
                        />
                      )}
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className={styles.separator} />
        <p className={styles.copyright}>
          Copyright © 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
