import type { SearchParam } from '../types'
import { useQueue } from './useQueue'

export const useHistoryQueue = () => {
  const q = useQueue<SearchParam>([], {
    limit: 10,
  })
  return {
    items: q.items,
    push: q.addItem,
    remove: q.removeItem,
  }
}
