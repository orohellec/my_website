import React from 'react'

import { Grid, Box } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

import List from '@material-ui/core/List'

import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import ListItemLink from './ListItemLink'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  gridItem: {
    marginTop: 'auto',
    marginBottom: 'auto'
  }
})

const Footer = () => {
  const classes = useStyles()
  return(
    <Grid 
      container
      direction="row"
      component="footer" 
      justify="center"
      style={{
        backgroundColor: 'black', 
        position: 'absolute', 
        bottom: '0px', 
        width: '100%',
        height: '120px',
        color: 'white'
      }}
    >
      <Grid item className={classes.gridItem}>
        <List disablePadding>
          <ListItemLink href="https://github.com/orohellec">
            <ListItemIcon><GitHubIcon color="secondary"/></ListItemIcon>
            <ListItemText>GitHub</ListItemText>
          </ListItemLink>
          <ListItemLink href="https://www.linkedin.com/in/olivierrohellec/">
            <ListItemIcon><LinkedInIcon color="secondary"/></ListItemIcon>
            <ListItemText>LinkedIn</ListItemText>
          </ListItemLink>
        </List>
      </Grid>
    </Grid>
  )
}

export default Footer