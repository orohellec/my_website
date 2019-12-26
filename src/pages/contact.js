import React from 'react'

import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextareaAutosize,
  Grid,
  Box
} from '@material-ui/core'

import Layout from "../components/layout"
import MainTitle from "../components/mainTitle"

const ContactPage = () => {
  return (
    
    <Layout>
      <Box mx="auto" maxWidth="600px">
      <MainTitle title="Contact"/>
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
      </form>
      </Box>
    </Layout>
    
  )
}


export default ContactPage;