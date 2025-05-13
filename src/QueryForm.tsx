import React from 'react'
import { RiExpandRightLine } from 'react-icons/ri'
import {
  TiMediaFastForward,
  TiMediaPlay,
  TiMediaPlayReverse,
  TiMediaRewind,
} from 'react-icons/ti'
import { IconButton } from './components/IconButton'
import { QueryInput } from './components/QueryInput'
import { DateRangeBar } from './components/DateRangeBar'

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
      <DateRangeBar start={start} end={end} />
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
        <IconButton
          icon={RiExpandRightLine}
          text="-1 Month"
          onClick={() => addMonthsToEnd(-1)}
          className="text-xs"
          iconPosition="right"
        />
        <IconButton
          icon={RiExpandRightLine}
          text="+1 Month"
          onClick={() => addMonthsToEnd(1)}
          className="text-sm"
          iconPosition="right"
        />
      </div>
      <div className="flex justify-center space-x-2">
        <IconButton
          icon={TiMediaRewind}
          text="Prev Year"
          onClick={() => addYears(-1)}
          className="text-xs"
        />
        <IconButton
          icon={TiMediaPlayReverse}
          text="Step"
          onClick={() => slideMonth(-1)}
        />
        <IconButton
          icon={TiMediaPlay}
          text="Step"
          onClick={step}
          iconPosition="right"
        />
        <IconButton
          icon={TiMediaFastForward}
          text="Next Year"
          onClick={() => addYears(-1)}
          iconPosition="right"
          className="text-xs"
        />
      </div>
    </div>
  )
}
