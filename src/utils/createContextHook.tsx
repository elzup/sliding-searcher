import { createContext, useContext, type PropsWithChildren } from 'react'

export function createContextHook<P extends object, R>(
  useHook: (props: P) => R
) {
  const Context = createContext<R | undefined>(undefined)

  type ProviderProps = PropsWithChildren<P>
  function Provider({ children, ...props }: ProviderProps) {
    const value = useHook(props as P)
    return <Context.Provider value={value}>{children}</Context.Provider>
  }

  function useContextHook() {
    const context = useContext(Context)
    if (context === undefined) {
      throw new Error('useContextHook must be used within its Provider')
    }
    return context
  }

  return [Provider, useContextHook] as const
}
