import React, { useState } from 'react'
import { useDateRange } from './hooks/useDateRange'
import { UrlGenerator } from './components/UrlGenerator'
import { QueryForm } from './QueryForm'

const App: React.FC = () => {
  const [query, setQuery] = useState('hello')
  const [mode, setMode] = useState('')
  const {
    start,
    end,
    setStart,
    setEnd,
    slideMonth,
    step,
    addMonthsToEnd,
    addYears,
  } = useDateRange('2024-12-01', '2024-12-31')

  return (
    <div className="p-4 max-w-md mx-auto font-sans bg-light-primary text-dark-primary">
      <h2 className="text-2xl font-bold mb-4 text-dark-secondary">
        SlideSearcher
      </h2>
      <QueryForm
        query={query}
        setQuery={setQuery}
        mode={mode}
        setMode={setMode}
        start={start}
        setStart={setStart}
        end={end}
        setEnd={setEnd}
        slideMonth={slideMonth}
        step={step}
        addMonthsToEnd={addMonthsToEnd}
        addYears={addYears}
      />
      <UrlGenerator query={query} start={start} end={end} mode={mode} />
    </div>
  )
}

export default App
