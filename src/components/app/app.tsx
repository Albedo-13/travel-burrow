import clsx from 'clsx';
import { useState } from 'react';

import viteLogo from '/vite.svg';

import reactLogo from '../../assets/react.svg';
import styles from './app.module.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className={clsx(styles.logo)} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={clsx(styles.logo, styles.react)} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={clsx(styles.card)}>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={clsx(styles.readTheDocs)}>Click on the Vite and React logos to learn more</p>
    </>
  );
};
