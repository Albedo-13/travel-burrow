import { Skeleton } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { lazy, Suspense } from 'react';

import styles from './welcome-home.module.scss';

const SearchForm = lazy(() =>
  import('./search-form/search-form').then((module) => ({
    default: module.SearchForm,
  }))
);

export const WelcomeHome = observer(() => {
  return (
    <section className={styles.welcome}>
      <div className="container">
        <h1 className={styles.title}>Enjoy in the best way!</h1>
        <p className={styles.subtitle}>
          Enjoy our services for your trip anytime
        </p>
        <div className={styles.underlay}>
          <Suspense
            fallback={
              <Skeleton variant="rectangular" width="100%" height={163} />
            }
          >
            <SearchForm />
            {/* <Skeleton variant="rectangular" width="100%" height={163} /> */}
          </Suspense>
        </div>
      </div>
    </section>
  );
});
