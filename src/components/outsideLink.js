// import PropTypes from "prop-types"
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  outsideLink: {
    borderRadius: 5,
    color: 'black',
    display: 'block',
    textDecoration: 'none',
    fontSize: '1.3rem',
    maxWidth: '300px',
    '&:hover': {
      backgroundColor: '#1f3a41',
      color: 'white'
    }
  }
})

const OutsideLink = ({href, children}) => {
  const classes = useStyles()
  return (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className={classes.outsideLink}
    >
      {children}
    </a>
  )
}

export default OutsideLink;