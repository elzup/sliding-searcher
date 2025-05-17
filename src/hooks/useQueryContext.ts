import { createContextHook } from '../utils/createContextHook'
import { useQueryInternal } from './useQuery'

export const [QueryProvider, useQuery] = createContextHook(useQueryInternal)
