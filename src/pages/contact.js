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

  const [name, setName] = useState("")
  const [email, setEmail]  = useState("")
  const [message, setMessage]  = useState("")

  const resetFields = () => {
    setEmail("")
    setName("")
    setMessage("")
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message})
    })
      .then(() => {
        resetFields()
        alert("Votre email à bien été envoyé !")
      })
      .catch(error => alert(error));
    e.preventDefault();
  };

  return (
    <Layout>
      <Box mx="auto" maxWidth="600px">
        <MainTitle title="Contact"/>
        <form onSubmit={handleSubmit}>
          <Grid container direction="column" spacing={3} alignItems="stretch">
            <Grid item>
              <FormControl fullWidth={true}>
                <InputLabel>Votre nom</InputLabel>
                <Input name="name" value={name} onChange={e => setName(e.target.value)}/>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl fullWidth={true}>
                <InputLabel>Votre email</InputLabel>
                <Input name="email" value={email} onChange={e => setEmail(e.target.value)}/>
              </FormControl>
            </Grid>
            <Grid item>
            <FormControl fullWidth={true}>
              <TextareaAutosize 
                rowsMin={6} 
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