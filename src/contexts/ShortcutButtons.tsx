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
  const q = useQuery()
  const { addMonthsToEnd, addMonthsToStart, addYears, slideMonth, step } = q
  return (
    <div className="grid gap-2">
      <div className="flex justify-between w-full">
        <div className="flex justify-start space-x-1">
          <IconButton
            text="-3M"
            onClick={() => addMonthsToStart(-3)}
            className="text-xs"
          />
          <IconButton
            // icon={Ri}
            text="Today"
            onClick={() => {
              q.setStartToday()
            }}
            className="text-xs"
          />
        </div>

        <div className="flex justify-end space-x-1">
          <IconButton
            icon={RiExpandRightLine}
            text="-1M"
            onClick={() => addMonthsToEnd(-1)}
            className="text-xs"
          />
          <IconButton
            icon={RiExpandRightLine}
            text="+1M"
            onClick={() => addMonthsToEnd(1)}
            className="text-xs"
          />
          <IconButton
            // icon={Ri}
            text="Today"
            onClick={() => {
              q.setEndToday()
            }}
            className="text-xs"
          />
        </div>
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
