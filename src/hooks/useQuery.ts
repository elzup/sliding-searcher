import { formatDate } from '../utils/dateUtils'
import { useDateRange } from './useDateRange'
import { useLocalStorage } from './useLocalStorage'

// デフォルト過去1年
const initialStart = formatDate(
  new Date(new Date().setFullYear(new Date().getFullYear() - 1))
)
const initialEnd = formatDate(new Date())

export const useQueryInternal = () => {
  const [query, setQuery] = useLocalStorage('query', '')
  const [mode, setMode] = useLocalStorage('mode', '') // '' | 'vid' | 'isch'

  const dateRange = useDateRange(initialStart, initialEnd)
  return {
    ...dateRange,
    query,
    setQuery,
    mode,
    setMode,
  }
}
