import React from 'react';

import { Grid, Typography } from '@material-ui/core'

const MainTitle = (props) => {
  return (
    <Grid container justify="center" style={{marginBottom: "30px"}}>
      <Typography variant="h1" align="center" >{props.title}</Typography>
    </Grid>
  )
}

export default MainTitle;