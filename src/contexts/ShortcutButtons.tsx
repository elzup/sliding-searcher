import { RiExpandRightLine } from 'react-icons/ri'
import {
  TiMediaFastForward,
  TiMediaPlay,
  TiMediaPlayReverse,
  TiMediaRewind,
} from 'react-icons/ti'
import { IconButton } from '../components/IconButton'
import { useQuery } from '../hooks/useQueryContext'

export const ShortcutButtons = () => {
  const { addMonthsToEnd, addYears, slideMonth, step } = useQuery()
  return (
    <div>
      <div className="flex justify-end space-x-2">
        <IconButton
          icon={RiExpandRightLine}
          text="-1 Month"
          onClick={() => addMonthsToEnd(-1)}
          className="text-xs"
          iconPosition="right"
        />
        <IconButton
          icon={RiExpandRightLine}
          text="+1 Month"
          onClick={() => addMonthsToEnd(1)}
          className="text-sm"
          iconPosition="right"
        />
      </div>
      <div className="flex justify-center space-x-2">
        <IconButton
          icon={TiMediaRewind}
          text="Prev Year"
          onClick={() => addYears(-1)}
          className="text-xs"
        />
        <IconButton
          icon={TiMediaPlayReverse}
          text="Step"
          onClick={() => slideMonth(-1)}
        />
        <IconButton
          icon={TiMediaPlay}
          text="Step"
          onClick={step}
          iconPosition="right"
        />
        <IconButton
          icon={TiMediaFastForward}
          text="Next Year"
          onClick={() => addYears(-1)}
          iconPosition="right"
          className="text-xs"
        />
      </div>
    </div>
  )
}
