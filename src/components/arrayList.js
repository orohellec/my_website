import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  li: {
    padding: 0
  }
})

const ArrayList = ({arr}) => {
  const classes = useStyles()
  const list = arr.map(e => {
    return (
    <ListItem className={classes.li}>
      <ListItemText align="center">{e}</ListItemText>
    </ListItem>
    )}
  )
  return (
    <List>
      {list}
    </List>
  )
}

export default ArrayList