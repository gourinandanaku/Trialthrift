import { Button, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <Typography variant="h4" color="primary" align="center" sx={{ mt: 4 }}>
          Add Your Product
        </Typography>
        <Button variant="contained" color="secondary" sx={{ mt: 2, display: 'block', mx: 'auto' }}>
          Add
        </Button>
    </div>
  )
}

export default Add;