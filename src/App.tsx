import React from 'react'
import { UrlGenerator } from './components/UrlGenerator'
import { QueryProvider } from './hooks/useQueryContext'
import { QueryForm } from './QueryForm'

const Main = () => {
  return (
    <div className="p-4 max-w-lg mx-auto font-sans bg-light-primary text-dark-primary">
      <h2 className="text-2xl font-bold mb-4 text-dark-secondary">
        SlideSearcher
      </h2>
      <QueryForm />
      <UrlGenerator />
    </div>
  )
}
const App = () => {
  return (
    <React.StrictMode>
      <QueryProvider>
        <Main />
      </QueryProvider>
    </React.StrictMode>
  )
}

export default App
