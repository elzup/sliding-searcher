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
      <div className="">
        <pre
          className="w-full border border-gray-300 rounded-r shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200 text-xs p-2 bg-gray-100"
          style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
        >
          {url}
        </pre>
        {/* open button */}
        <div className="flex justify-end mt-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white rounded px-4 py-2 text-sm hover:bg-blue-600 transition duration-200"
          >
            Open
          </a>
        </div>
      </div>
    </div>
  )
}
