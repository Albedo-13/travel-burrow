import { Header } from '@components/header/header';
import { WelcomeHome } from '@components/welcome-home/welcome-home';
import { observer } from 'mobx-react-lite';

import { getHotelsList } from '@/api/get-hotels-list';
// import { useStores } from '@/hooks/use-stores';

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

export const App = observer(() => {
  // const {
  //   counterStore: { count, increase, reset },
  // } = useStores();

  return (
    <>
      <Header isFullWidth={true} />
      <WelcomeHome />

      <button
        style={{
          marginRight: '8px',
          border: '1px solid white',
          fontSize: '72px',
          color: 'white',
        }}
        onClick={getHotelsList}
      >
        fetch
      </button>
    </>
  );
});
