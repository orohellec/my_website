import React from 'react'

import { Typography } from '@material-ui/core'

const SecondaryTitle = ({children}) => {
  return (
    <Typography 
      variant="h2" 
      align="center"
      style={{
        // backgroundColor: "#296365", 
        color: '#296365', 
        borderRadius: "5px",
        paddingBottom:"10px",
        borderBottom: "solid"
      }}
    >
      {children}
    </Typography>
  )
}

export default SecondaryTitle;

