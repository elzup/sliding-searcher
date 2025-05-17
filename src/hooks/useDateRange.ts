import { formatDate } from '../utils/dateUtils'
import { useLocalStorage } from './useLocalStorage'

export function useDateRange(initialStart: string, initialEnd: string) {
  // YYYY-MM-DD
  const [start, setStart] = useLocalStorage('start', initialStart)
  const [end, setEnd] = useLocalStorage('end', initialEnd)

  const slideMonth = (delta: number) => {
    const s = new Date(start)
    const e = new Date(end)
    s.setMonth(s.getMonth() + delta)
    e.setMonth(e.getMonth() + delta)
    setStart(formatDate(s))
    setEnd(formatDate(e))
  }

  const step = () => {
    const s = new Date(start)
    const e = new Date(end)
    const diff = e.getTime() - s.getTime()
    const newStart = new Date(e)
    const newEnd = new Date(e.getTime() + diff)
    setStart(formatDate(newStart))
    setEnd(formatDate(newEnd))
  }

  const addMonthsToEnd = (delta: number) => {
    const e = new Date(end)
    e.setMonth(e.getMonth() + delta)
    setEnd(e.toISOString().split('T')[0])
  }

  const addYears = (delta: number) => {
    const s = new Date(start)
    const e = new Date(end)
    s.setFullYear(s.getFullYear() + delta)
    e.setFullYear(e.getFullYear() + delta)
    setStart(formatDate(s))
    setEnd(formatDate(e))
  }

  return {
    start,
    end,
    setStart,
    setEnd,
    slideMonth,
    step,
    addMonthsToEnd,
    addYears,
  }
}
