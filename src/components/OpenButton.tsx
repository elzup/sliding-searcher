import Button from '@mui/material/Button'

interface Props {
  url: string
}

const OpenButton = ({ url }: Props) => {
  const handleOpen = () => {
    window.open(url, '_blank')
  }

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleOpen}
      className="px-4 py-2 rounded"
    >
      開く
    </Button>
  )
}

export default OpenButton
