import React, { useState } from 'react'
import { useDateRange } from './hooks/useDateRange'
import { UrlGenerator } from './components/UrlGenerator'

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
    <div
      style={{
        padding: 20,
        maxWidth: 600,
        margin: 'auto',
        fontFamily: 'sans-serif',
      }}
    >
      <h2>SlideSearcher</h2>
      <div>
        <label>
          Query:{' '}
          <input value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
        <br />
        <label>
          Mode:
          <label>
            <input
              type="radio"
              value=""
              checked={mode === ''}
              onChange={(e) => setMode(e.target.value)}
            />{' '}
            Normal
          </label>
          <label>
            <input
              type="radio"
              value="vid"
              checked={mode === 'vid'}
              onChange={(e) => setMode(e.target.value)}
            />{' '}
            Video
          </label>
          <label>
            <input
              type="radio"
              value="isch"
              checked={mode === 'isch'}
              onChange={(e) => setMode(e.target.value)}
            />{' '}
            Image
          </label>
        </label>
        <br />
        <label>
          Start:{' '}
          <input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </label>
        <br />
        <label>
          End:{' '}
          <input
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </label>
        <br />
        <button onClick={() => slideMonth(-1)}>← Prev Month</button>
        <button onClick={step}>→ Step</button>
        <button onClick={() => slideMonth(1)}>Next Month →</button>
        <br />
        <button onClick={() => addMonthsToEnd(1)}>+1 Month</button>
        <button onClick={() => addMonthsToEnd(-1)}>-1 Month</button>
        <br />
        <button onClick={() => addYears(-1)}>← 1 Year</button>
        <br />
        <br />
        <UrlGenerator query={query} start={start} end={end} mode={mode} />
      </div>
    </div>
  )
}

export default App
