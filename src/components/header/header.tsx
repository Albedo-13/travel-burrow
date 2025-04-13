import '@styles/_buttons.scss';

import logo from '@assets/icons/logo.webp';
import { Button, Menu, MenuItem } from '@mui/material';
import clsx from 'clsx';
import { MouseEvent, useState } from 'react';
import { Link, NavLink, NavLinkRenderProps } from 'react-router';

import styles from './header.module.scss';

type HeaderProps = {
  variant: 'home' | 'about' | 'tours';
};

const header = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about-us',
    name: 'About Us',
  },
  {
    path: '/tour-packages',
    name: 'Tour Packages',
  },
  {
    path: '#',
    name: 'Contact Us',
  },
];

export const Header = ({ variant }: HeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header
      className={clsx(
        {
          home: styles.headerHome,
          about: styles.headerAbout,
          tours: styles.headerTours,
        }[variant]
      )}
    >
      <div
        className={clsx(
          {
            home: styles.headerWrapperHome,
            about: styles.headerWrapperAbout,
            tours: styles.headerWrapperTours,
          }[variant],
          'container'
        )}
      >
        {variant !== 'tours' && (
          <NavLink to="/">
            <img src={logo} className={styles.logo} alt="logo" />
          </NavLink>
        )}

        <div className={styles.menu}>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleMenuClick}
          >
            menu
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {header.map((item) => (
              <MenuItem
                className={styles.menuItem}
                key={item.path}
                onClick={handleClose}
              >
                {item.path === '#' ? (
                  <Link to={item.path} className={styles.item}>
                    {item.name}
                  </Link>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }: NavLinkRenderProps) =>
                      clsx(styles.item, isActive && styles.itemActive)
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </MenuItem>
            ))}
          </Menu>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.list}>
            {header.map((item) => (
              <li key={item.path} className={styles.item}>
                {item.path === '#' ? (
                  <Link to={item.path} className={styles.item}>
                    {item.name}
                  </Link>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }: NavLinkRenderProps) =>
                      clsx(styles.item, isActive && styles.itemActive)
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.buttons}>
          <button
            className={clsx(
              'buttonBase',
              variant === 'tours' && styles.loginButton
            )}
          >
            Login
          </button>
          <button className="buttonPrimary">Sign Up</button>
        </div>
      </div>
      {variant === 'tours' && (
        <div className="container">
          <hr className={styles.separator} />
        </div>
      )}
    </header>
  );
};
