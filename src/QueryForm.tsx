import React from 'react'
import { QueryInput } from './components/QueryInput'

interface QueryFormProps {
  query: string
  setQuery: (query: string) => void
  mode: string
  setMode: (mode: string) => void
  start: string
  setStart: (start: string) => void
  end: string
  setEnd: (end: string) => void
  slideMonth: (amount: number) => void
  step: () => void
  addMonthsToEnd: (amount: number) => void
  addYears: (amount: number) => void
}

export const QueryForm: React.FC<QueryFormProps> = ({
  query,
  setQuery,
  mode,
  setMode,
  start,
  setStart,
  end,
  setEnd,
  slideMonth,
  step,
  addMonthsToEnd,
  addYears,
}) => {
  return (
    <div className="space-y-2">
      <QueryInput query={query} setQuery={setQuery} />
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
      <div className="flex">
        <label className="block">
          Start:{' '}
          <input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <label className="block">
          End:{' '}
          <input
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          onClick={() => addMonthsToEnd(-1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm"
        >
          -1 Month
        </button>
        <button
          onClick={() => addMonthsToEnd(1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm"
        >
          +1 Month
        </button>
      </div>
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
          Next Month →
        </button>
      </div>
      <button
        onClick={() => addYears(-1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        ←← Prev Year
      </button>
      <button
        onClick={() => addYears(-1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Next Year →→
      </button>
    </div>
  )
}
