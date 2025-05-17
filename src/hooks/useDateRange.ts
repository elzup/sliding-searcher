import { formatDate } from '../utils/dateUtils'
import { useLocalStorage } from './useLocalStorage'

export function useDateRange(initialStart: string, initialEnd: string) {
  // YYYY-MM-DD
  const [start, setStart] = useLocalStorage('start', initialStart)
  const [end, setEnd] = useLocalStorage('end', initialEnd)
  const setStartDate = (date: Date) => setStart(formatDate(date))
  const setEndDate = (date: Date) => setEnd(formatDate(date))

  const slideMonth = (delta: number) => {
    const s = new Date(start)
    const e = new Date(end)
    s.setMonth(s.getMonth() + delta)
    e.setMonth(e.getMonth() + delta)
    setStartDate(s)
    setEndDate(e)
  }

  const step = () => {
    const s = new Date(start)
    const e = new Date(end)
    const diff = e.getTime() - s.getTime()
    const newStart = new Date(e)
    const newEnd = new Date(e.getTime() + diff)
    setStartDate(newStart)
    setEndDate(newEnd)
  }

  const addMonthsToEnd = (delta: number) => {
    const e = new Date(end)
    e.setMonth(e.getMonth() + delta)
    setEndDate(e)
  }

  const addMonthsToStart = (delta: number) => {
    const s = new Date(start)
    s.setMonth(s.getMonth() + delta)
    setStartDate(s)
  }

  const addYears = (delta: number) => {
    const s = new Date(start)
    const e = new Date(end)
    s.setFullYear(s.getFullYear() + delta)
    e.setFullYear(e.getFullYear() + delta)
    setStartDate(s)
    setEndDate(e)
  }

  return {
    start,
    end,
    setStart,
    setEnd,
    slideMonth,
    step,
    addMonthsToEnd,
    addMonthsToStart,
    addYears,
    setEndToday: () => {
      setEndDate(new Date())
    },
    setStartToday: () => {
      setStartDate(new Date())
    },
  }
}
