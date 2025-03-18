import axios from 'axios';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';

import viteLogo from '/vite.svg';
import { useStores } from '@/hooks/use-stores';

import reactLogo from '../../assets/react.svg';
// import { server } from '../../mocks/setup';
import styles from './app.module.scss';

// server.listen()

// const options = {
//   method: 'GET',
//   url: 'https://hotels4.p.rapidapi.com/properties/list',
//   params: {
//     destinationId: '1506246',
//     pageNumber: '1',
//     pageSize: '25',
//     adults1: '1',
//     sortOrder: 'PRICE',
//     locale: 'en_US',
//     currency: 'USD',
//   },
//   headers: {
//     'x-rapidapi-key': '9a9097fdaemsha871f397ab9ba2fp14e8fajsn8a1420f2cce0',
//     'x-rapidapi-host': 'hotels4.p.rapidapi.com',
//   },
// };

export async function getCurrencyData() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  return axios
    .get('https://hotels4.p.rapidapi.com/properties/list')
    .then((res) => {
      console.log(res.data);
    })
    .then((res) => {
      return res;
    });
}

export const App = observer(() => {
  const {
    counterStore: { count, increase, reset },
  } = useStores();

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
        <button style={{ marginRight: '8px' }} onClick={() => increase()}>
          count is {count}
        </button>{' '}
        <button style={{ marginRight: '8px' }} onClick={getCurrencyData}>
          fetch
        </button>
        <button onClick={() => reset()}>reset</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={clsx(styles.readTheDocs)}>Click on the Vite and React logos to learn more</p>
    </>
  );
});
