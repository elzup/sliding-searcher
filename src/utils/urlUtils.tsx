import type { SearchParam } from '../types'

export const generateSearchUrl = ({ query, start, end, mode }: SearchParam) => {
  const q = encodeURIComponent(query)
  const startDate = new Date(start)
  const endDate = new Date(end)
  const startStr = `${
    startDate.getMonth() + 1
  }/${startDate.getDate()}/${startDate.getFullYear()}`
  const endStr = `${
    endDate.getMonth() + 1
  }/${endDate.getDate()}/${endDate.getFullYear()}`
  return `https://www.google.com/search?q=${q}&tbs=cdr:1,cd_min:${startStr},cd_max:${endStr}&tbm=${mode}`
}
