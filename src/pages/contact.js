import React from 'react'

import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextareaAutosize,
  Grid,
  Container,
  Box
} from '@material-ui/core'

import Layout from "../components/layout"
import MainTitle from "../components/mainTitle"

const ContactPage = () => {
  return (
    <Layout>
      
        <Container maxWidth="lg">
          
        <MainTitle title="Me contacter"/>
        <Box mx="auto" maxWidth="600px">
        <form name="contact" method="POST" data-netlify="true">
          <Grid container direction="column" spacing={3} alignItems="stretch" >
            <Grid item>
              <FormControl fullWidth={true}>
                <InputLabel htmlFor="my-input">Votre email</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl fullWidth={true}>
                <TextareaAutosize rowsMin={6} placeholder="votre message" />
              </FormControl>
            </Grid>
            <Grid item justify="center">
              <Button type="submit" fullWidth={true}>Envoyer</Button>
            </Grid>
          </Grid>
        </form>
        </Box>
        </Container>
     
    </Layout>
  )
}

export default ContactPage;