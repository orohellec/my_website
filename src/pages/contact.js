import React, { useState } from 'react'

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

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const [email, setEmail]  = useState("")
  const [message, setMessage]  = useState("")

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", email, message})
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
    e.preventDefault();
  };

  return (
    <Layout>
      <Box mx="auto" maxWidth="600px">
        <MainTitle title="Contact"/>
        <form onSubmit={handleSubmit}>
        {/* <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field"> */}
          {/* <input type="hidden" name="form-name" value="contact" /> */}
          <Grid container direction="column" spacing={3} alignItems="stretch" >
            <Grid item>
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="email">Votre email</InputLabel>
              <Input id="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </FormControl>
            </Grid>
            <Grid item>
            <FormControl fullWidth={true}>
              <TextareaAutosize 
                rowsMin={6} 
                id="message" 
                name="message" 
                placeholder="votre message" 
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </FormControl>
            </Grid>
            <Grid item justify="center">
              <Button type="submit" fullWidth={true}>Envoyer</Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Layout>
    
  )
}


export default ContactPage;