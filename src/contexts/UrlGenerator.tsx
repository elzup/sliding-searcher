import { useQuery } from '../hooks/useQueryContext'
import { generateSearchUrl } from '../utils/urlUtils'

export const UrlGenerator = () => {
  const { query, start, end, mode } = useQuery()
  const params = { query, start, end, mode }

  const url = generateSearchUrl(params)

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
