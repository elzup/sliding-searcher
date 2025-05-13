import React, { useState } from 'react'
import OpenButton from './OpenButton'

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
    <div>
      <button
        onClick={generate}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Generate URL
      </button>
      {url && <OpenButton url={url} />}
      <textarea
        rows={3}
        className="w-full border border-gray-300 rounded"
        value={url}
        readOnly
      />
    </div>
  )
}
