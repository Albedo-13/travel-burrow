import { createContext, useContext } from 'react';

import { rootStore } from '@/stores/root-store';

export const RootStoreContext = createContext<typeof rootStore | null>(null);

export const useStores = () => {
  const context = useContext(RootStoreContext);

  if (context === null) {
    throw new Error('useStores must be used within a RootStoreContext.Provider');
  }

  return context;
};
