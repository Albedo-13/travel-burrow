import '@styles/index.scss';

import { RootStoreContext } from '@hooks/use-stores';
import { rootStore } from '@stores/root-store';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/components/app/app';

async function enableMocking() {
  // TODO: удалить?
  // if (process.env.NODE_ENV !== 'development') {
  //   return;
  // }
  const { worker } = await import('./mocks/setup');
  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RootStoreContext.Provider value={rootStore}>
        <App />
      </RootStoreContext.Provider>
    </StrictMode>
  );
});
