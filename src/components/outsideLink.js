// import PropTypes from "prop-types"
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  outsideLink: {
    color: 'white',
    display: 'inline-block',
    textDecoration: 'none',
    padding: '0.5rem 0.5rem',
    fontSize: '1.3rem',
    '&:hover': {
      backgroundColor: '#21dafb'
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