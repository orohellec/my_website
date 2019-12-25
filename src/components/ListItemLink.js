import React from 'react'
import { ListItem } from '@material-ui/core'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  button: {
    padding: 0
  }
})

const ListItemLink = (props) => {
  const classes = useStyles()
  return <ListItem className={classes.button} button component="a" {...props} />;
}

export default ListItemLink