import { useQuery } from '../hooks/useQueryContext'
import { FiSearch, FiVideo, FiImage } from 'react-icons/fi'

export const ModeSelector = () => {
  const { mode, setMode } = useQuery()

  const options = [
    { label: 'Normal', value: '', Icon: FiSearch },
    { label: 'Video', value: 'vid', Icon: FiVideo },
    { label: 'Image', value: 'isch', Icon: FiImage },
  ]

  return (
    <div className="inline-flex rounded-lg bg-gray-200 p-1">
      {options.map(({ label, value, Icon }) => (
        <button
          key={value}
          onClick={() => setMode(value)}
          className={`
            relative flex-1 flex items-center justify-center space-x-1
            px-4 py-2 text-sm font-medium
            rounded-lg transition
            ${
              mode === value
                ? 'bg-white shadow text-gray-900'
                : 'text-gray-600 hover:bg-gray-300'
            }
          `}
        >
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  )
}
