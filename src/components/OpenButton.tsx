import React from 'react'
import Button from '@mui/material/Button'

interface OpenButtonProps {
  url: string
}

const OpenButton: React.FC<OpenButtonProps> = ({ url }) => {
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
