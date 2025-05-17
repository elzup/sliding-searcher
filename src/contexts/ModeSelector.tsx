import { useQuery } from '../hooks/useQueryContext'

export const ModeSelector = () => {
  const { mode, setMode } = useQuery()

  return (
    <label className="block">
      Mode:
      <div className="flex">
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            value=""
            checked={mode === ''}
            onChange={(e) => setMode(e.target.value)}
            className="mr-2"
          />
          <span>Normal</span>
        </label>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            value="vid"
            checked={mode === 'vid'}
            onChange={(e) => setMode(e.target.value)}
            className="mr-2"
          />
          <span>Video</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="isch"
            checked={mode === 'isch'}
            onChange={(e) => setMode(e.target.value)}
            className="mr-2"
          />
          <span>Image</span>
        </label>
      </div>
    </label>
  )
}
