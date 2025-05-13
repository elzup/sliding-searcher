import React, { useState } from 'react'

interface Props {
  query: string
  start: string
  end: string
  mode: string
}

export const UrlGenerator: React.FC<Props> = ({ query, start, end, mode }) => {
  const [url, setUrl] = useState('')

  const generate = () => {
    const q = encodeURIComponent(query)
    const startDate = new Date(start)
    const endDate = new Date(end)
    const startStr = `${
      startDate.getMonth() + 1
    }/${startDate.getDate()}/${startDate.getFullYear()}`
    const endStr = `${
      endDate.getMonth() + 1
    }/${endDate.getDate()}/${endDate.getFullYear()}`
    const link = `https://www.google.com/search?q=${q}&tbs=cdr:1,cd_min:${startStr},cd_max:${endStr}&tbm=${mode}`
    setUrl(link)
  }

  return (
    <div className="w-full">
      <div className="flex items-center">
        <button
          onClick={generate}
          className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded-l"
        >
          Generate URL
        </button>
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
