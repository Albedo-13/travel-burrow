import { HomePage } from '@/pages/home-page';
// import { getHotelsList } from '@/api/get-hotels-list';
// import { useStores } from '@/hooks/use-stores';

export const App = () => {
  // const {
  //   counterStore: { count, increase, reset },
  // } = useStores();

  return (
    <>
      <HomePage />

      <div style={{ height: 200, backgroundColor: 'antiquewhite' }}></div>
    </>
  );
};
