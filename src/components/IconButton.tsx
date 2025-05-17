import type { IconType } from 'react-icons'

type Props = {
  icon: IconType
  text: string
  onClick: () => void
  className?: string
  iconPosition?: `left` | `right`
}

export const IconButton = ({
  icon: Icon,
  text,
  onClick,
  className,
  iconPosition = `left`,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center ${
        iconPosition === 'left' ? 'space-x-2' : 'space-x-reverse space-x-2'
      } bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
        className || ''
      }`}
    >
      {iconPosition === 'left' ? (
        <>
          <Icon />
          <span>{text}</span>
        </>
      ) : (
        <>
          <span>{text}</span>
          <Icon />
        </>
      )}
    </button>
  )
}
