import React from 'react'

import { Typography } from '@material-ui/core'

const SecondaryTitle = ({children}) => {
  return (
    <Typography 
      variant="h2" 
      align="center"
      style={{
        backgroundColor: "#296365", 
        color: 'white', 
        borderRadius: "5px"
      }}
    >
      {children}
    </Typography>
  )
}

export default SecondaryTitle;

