import React from 'react'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'
import {Container , Grid , Typography } from '@mui/material'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <Nav />
      <Typography variant='h4' align='center' sx={{ mt: '10px' }}>
        About Us
      </Typography>
      <Container maxWidth='md'>
        <Typography variant='body1' align='justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates asperiores! Sequi, laborum? At facere modi omnis hic minima accusantium ducimus, quae tenetur et corporis voluptatem libero. Voluptatum, mollitia necessitatibus?
        </Typography>
      </Container>
      <Grid container justifyContent='space-evenly' p={3} boxShadow={3} mt={3}>
        <Grid item xs='3' boxShadow='3' p='3'>
          <img src='./image/pp.jpg' style={{height:"300px",width:"100%"}}/>
          <Typography variant='h6' align='center'>Mr. Pujan Thapa</Typography>
          <Typography variant='body1' align='center'>Mananging director</Typography>
          <Box display='flex' justifyContent='space-between'>
          <Typography variant='body2'>pujanthapa319@gmail.com</Typography>
          <Typography variant='body2'>+9779840054277</Typography>
          </Box>
          <Link to="#" variant='button'>More</Link>
        </Grid>
        <Grid item xs='3' sx={{backgroundColor:"blue"}}>
          first
        </Grid>
        <Grid item xs='3' sx={{backgroundColor:"red"}}>
          first
        </Grid>

      </Grid>

      <Footer />
    </>
  )
}

export default About