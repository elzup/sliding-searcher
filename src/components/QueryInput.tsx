import React from 'react'

interface QueryInputProps {
  query: string
  setQuery: (query: string) => void
}

export const QueryInput: React.FC<QueryInputProps> = ({ query, setQuery }) => {
  return (
    <label className="block">
      Query:
      <input
        className="shadow-lg appearance-none border rounded-xl w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500 text-xl"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </label>
  )
}
