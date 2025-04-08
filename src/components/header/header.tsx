import '@styles/_buttons.scss';

import logo from '@assets/icons/logo.webp';
import clsx from 'clsx';
import { NavLink, NavLinkRenderProps } from 'react-router';

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
        <NavLink to="/">
          <img src={logo} className={styles.logo} alt="logo" />
        </NavLink>

        <nav>
          <ul className={styles.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }: NavLinkRenderProps) =>
                  clsx(styles.item, isActive && styles.itemActive)
                }
              >
                Home
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to="/about-us"
                className={({ isActive }: NavLinkRenderProps) =>
                  clsx(styles.item, isActive && styles.itemActive)
                }
              >
                About Us
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to="/tour-packages"
                className={({ isActive }: NavLinkRenderProps) =>
                  clsx(styles.item, isActive && styles.itemActive)
                }
              >
                Tour Packages
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to="/contact-us"
                className={({ isActive }: NavLinkRenderProps) =>
                  clsx(styles.item, isActive && styles.itemActive)
                }
              >
                Contact Us
              </NavLink>
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
