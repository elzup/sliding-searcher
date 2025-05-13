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
    <div className="p-4 max-w-md mx-auto font-sans bg-light-primary text-dark-primary">
      <h2 className="text-2xl font-bold mb-4 text-dark-secondary">
        SlideSearcher
      </h2>
      <div className="space-y-2">
        <label className="block">
          Query:{' '}
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <br />
        <label className="block">
          Mode:
          <div className="flex">
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                value=""
                checked={mode === ''}
                onChange={(e) => setMode(e.target.value)}
                className="mr-2"
              />
              <span>Normal</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                value="vid"
                checked={mode === 'vid'}
                onChange={(e) => setMode(e.target.value)}
                className="mr-2"
              />
              <span>Video</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="isch"
                checked={mode === 'isch'}
                onChange={(e) => setMode(e.target.value)}
                className="mr-2"
              />
              <span>Image</span>
            </label>
          </div>
        </label>
        <br />
        <label className="block">
          Start:{' '}
          <input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <br />
        <label className="block">
          End:{' '}
          <input
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <br />
        <div className="flex space-x-2">
          <button
            onClick={() => slideMonth(-1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            ← Prev Month
          </button>
          <button
            onClick={step}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            → Step
          </button>
          <button
            onClick={() => slideMonth(1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Next Month →
          </button>
        </div>
        <br />
        <div className="flex space-x-2">
          <button
            onClick={() => addMonthsToEnd(1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            +1 Month
          </button>
          <button
            onClick={() => addMonthsToEnd(-1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            -1 Month
          </button>
        </div>
        <br />
        <button
          onClick={() => addYears(-1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          ← 1 Year
        </button>
        <br />
        <UrlGenerator query={query} start={start} end={end} mode={mode} />
      </div>
    </div>
  )
}

export default App
