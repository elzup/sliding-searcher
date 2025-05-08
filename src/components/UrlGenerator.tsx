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
    <div>
      <button onClick={generate}>Generate URL</button>
      <textarea rows={3} style={{ width: '100%' }} value={url} readOnly />
    </div>
  )
}
