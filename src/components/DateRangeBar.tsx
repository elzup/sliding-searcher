import { format, differenceInDays, parseISO } from 'date-fns'

type DateRangeBarProps = {
  start: string // YYYY-MM-DD
  end: string // YYYY-MM-DD
}

export const DateRangeBar = ({ start, end }: DateRangeBarProps) => {
  const startDate = parseISO(start)
  const endDate = parseISO(end)
  const duration = differenceInDays(endDate, startDate)

  return (
    <div className="p-4 border rounded shadow w-full max-w-lg">
      <div className="flex justify-between mb-2 text-sm text-gray-600">
        <span>{format(startDate, 'yyyy/MM/dd')}</span>
        <span>{format(endDate, 'yyyy/MM/dd')}</span>
      </div>
      <div className="relative h-4 bg-gray-200 rounded overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-blue-500 transition-all"
          style={{ width: '100%' }}
        />
      </div>
      <div className="text-right text-xs text-gray-500 mt-1">
        {duration}日間
      </div>
    </div>
  )
}
