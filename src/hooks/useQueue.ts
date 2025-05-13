import { useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage'

interface UseQueueOptions {
  limit?: number
}

interface QueueItem<T> {
  id: string // Or a more specific type if needed
  data: T
}

interface UseQueueResult<T> {
  items: QueueItem<T>[]
  addItem: (itemData: T) => void
  removeItem: (itemId: string) => void
  updateItem: (itemId: string, newData: Partial<T>) => void
  getItem: (itemId: string) => QueueItem<T> | undefined
  clearQueue: () => void
  isFull: () => boolean
  isEmpty: () => boolean
  size: () => number
}

export function useQueue<T>(
  initialItems: T[] = [],
  options: UseQueueOptions = {}
): UseQueueResult<T> {
  const [items, setItems] = useLocalStorage<QueueItem<T>[]>(
    'queue-items',
    initialItems.map((data, index) => ({
      id: `item-${Date.now()}-${index}`,
      data,
    }))
  )
  const { limit } = options

  const isFull = useCallback(() => {
    return limit !== undefined && items.length >= limit
  }, [items.length, limit])

  const isEmpty = useCallback(() => {
    return items.length === 0
  }, [items.length])

  const size = useCallback(() => {
    return items.length
  }, [items.length])

  const addItem = useCallback(
    (itemData: T) => {
      if (isFull()) {
        console.warn('Queue is full. Cannot add new item.')
        return
      }
      const newItem: QueueItem<T> = {
        id: `item-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`, // More robust ID generation
        data: itemData,
      }
      setItems((prevItems) => [...prevItems, newItem])
    },
    [isFull, setItems]
  )

  const removeItem = useCallback(
    (itemId: string) => {
      setItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
    },
    [setItems]
  )

  const updateItem = useCallback(
    (itemId: string, newData: Partial<T>) => {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId
            ? { ...item, data: { ...item.data, ...newData } }
            : item
        )
      )
    },
    [setItems]
  )

  const getItem = useCallback(
    (itemId: string): QueueItem<T> | undefined => {
      return items.find((item) => item.id === itemId)
    },
    [items]
  )

  const clearQueue = useCallback(() => {
    setItems([])
  }, [setItems])

  return {
    items,
    addItem,
    removeItem,
    updateItem,
    getItem,
    clearQueue,
    isFull,
    isEmpty,
    size,
  }
}
