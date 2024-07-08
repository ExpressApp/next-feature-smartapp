import React from 'react'
import { useLocalObservable } from 'mobx-react-lite'
import { RootStore } from './rootStore'

export const StoreContext = React.createContext<RootStore | null>(null)

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useLocalObservable(() => new RootStore())
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
