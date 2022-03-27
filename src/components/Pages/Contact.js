import React from 'react'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'
import { Button, Container, Typography } from '@mui/material'
import { Box, TextField } from '@mui/material'

const Contact = () => {
    return (
        <>
            <Nav />
            <Typography variant='h4' align='center' sx={{ mt: '10px' }}>
                Contact
            </Typography>
            <Container>
            <Box className='contact_container' display='flex'>
                <Box className='contact-address' width='40%'>
                    <Typography variant='h4' fontWeight={'bold'}>NilkanthaStore</Typography>
                    <Typography variant='h6'>Kathmandu,nepal</Typography>
                    <Typography variant='h6'>Phone : +977 9840054277</Typography>
                    <Typography variant='h6'>Email : info@nilkanthastore.com</Typography>
                    <Typography variant='h6'>Website : www.nilkanthastore.com</Typography>
                </Box>
                <Box className='contact-form' width='60%'>
                    <TextField label='Email' variant='outlined' sx={{mb:'10px'}} fullWidth='true'></TextField><br/>
                    <TextField label='Subject' variant='outlined' sx={{mb:'10px'}} fullWidth='true'></TextField><br/>
                    <TextField label='Message' variant='outlined' sx={{mb:'10px'}} fullWidth='true'></TextField><br/>
                    <Button variant='contained' fullWidth='true'>SUBMIT</Button>
                </Box>
            </Box>
            </Container>
            <Container className='map-container' mx='3'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.0312155580405!2d85.36018031438633!3d27.77801232899125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1c226224709b%3A0x45a65134a18bfef1!2sBudhanilkantha%20Temple!5e0!3m2!1sen!2snp!4v1648174358951!5m2!1sen!2snp" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width='100%' height={'450px'}></iframe>
            </Container>

            <Footer />

        </>
    )
}

export default Contact