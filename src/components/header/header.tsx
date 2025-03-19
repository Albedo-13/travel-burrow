import '@styles/_buttons.scss';

import logo from '@assets/icons/logo.png';
import clsx from 'clsx';

import styles from './header.module.scss';

type HeaderProps = {
  isFullWidth: boolean;
};

export const Header = ({ isFullWidth }: HeaderProps) => {
  return (
    <header
      className={clsx(isFullWidth ? styles.headerFullWidth : styles.header)}
    >
      <div
        className={clsx(
          isFullWidth ? styles.headerWrapperFullWidth : styles.headerWrapper,
          'container'
        )}
      >
        <a href="/">
          <img src={logo} className={styles.logo} alt="logo" />
        </a>

        <nav>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="">Home</a>
            </li>
            <li className={styles.item}>
              <a href="">About Us</a>
            </li>
            <li className={styles.item}>
              <a href="">Tour Packages</a>
            </li>
            <li className={styles.item}>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </nav>

        <div className={styles.buttons}>
          <button className="buttonBase">Login</button>
          <button className="buttonPrimary">Sign Up</button>
        </div>
      </div>
    </header>
  );
};
