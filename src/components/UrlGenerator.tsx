import React from 'react'
import type { SearchParam } from '../types'

const generateSearchUrl = ({ query, start, end, mode }: SearchParam) => {
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

interface Props {
  param: SearchParam
}

export const UrlGenerator: React.FC<Props> = ({ param }) => {
  const url = generateSearchUrl(param)

  return (
    <div className="w-full">
      <div className="flex items-center">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-r shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="Generated URL"
          value={url}
          readOnly
        />
      </div>
    </div>
  )
}
