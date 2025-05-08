import { useState } from 'react'

export function useDateRange(initialStart: string, initialEnd: string) {
  const [start, setStart] = useState(initialStart)
  const [end, setEnd] = useState(initialEnd)

  const slideMonth = (delta: number) => {
    const s = new Date(start)
    const e = new Date(end)
    s.setMonth(s.getMonth() + delta)
    e.setMonth(e.getMonth() + delta)
    setStart(s.toISOString().split('T')[0])
    setEnd(e.toISOString().split('T')[0])
  }

  const step = () => {
    const s = new Date(start)
    const e = new Date(end)
    const diff = e.getTime() - s.getTime()
    const newStart = new Date(e)
    const newEnd = new Date(e.getTime() + diff)
    setStart(newStart.toISOString().split('T')[0])
    setEnd(newEnd.toISOString().split('T')[0])
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
    setStart(s.toISOString().split('T')[0])
    setEnd(e.toISOString().split('T')[0])
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
