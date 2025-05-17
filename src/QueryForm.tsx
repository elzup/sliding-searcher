import { DateRangeBar } from './components/DateRangeBar'
import { ModeSelector } from './contexts/ModeSelector'
import { QueryInput } from './contexts/QueryInput'
import { ShortcutButtons } from './contexts/ShortcutButtons'
import { useQuery } from './hooks/useQueryContext'

export const QueryForm = () => {
  const { start, end, setStart, setEnd } = useQuery()
  return (
    <div className="space-y-2">
      <QueryInput />
      <DateRangeBar start={start} end={end} />
      <ModeSelector />
      {/* half left and right */}
      <div className="flex justify-between w-full">
        <label className="block">
          Start:
          <input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <label className="block">
          End:
          <input
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
      </div>
      <ShortcutButtons />
    </div>
  )
}
