import React from 'react'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'
import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/material'

const Blogs = () => {
  return (
    <>
      <Nav />
      <Typography variant='h4' align='center' sx={{ mt: '10px' }}>
        Blogs
      </Typography>
      <Container maxWidth='md'>
        <Typography variant='body1' align='justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates asperiores! Sequi, laborum? At facere modi omnis hic minima accusantium ducimus, quae tenetur et corporis voluptatem libero. Voluptatum, mollitia necessitatibus?
        </Typography>
      </Container>
      <Box className="blogs_container" mt={5} backgroundColor='skyblue' p={'30px'}>
        <Box className="blog" display={'flex'} backgroundColor='white' p={'20px'} borderRadius='20px'>
          <Box className="blog_content" width={'80%'}>
            <Box className='blog_title'>
              <Typography variant='h5' fontWeight={'bold'} gutterBottom='true' sx={{textDecoration:"underline"}}>Blog title
              </Typography>
              </Box>
            <Box className='blog_text' px={'20px'}>
              <Typography variant='body1' align='justify'>This is blog test.Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates asperiores! Sequi, laborum? At facere modi omnis hic minima accusantium ducimus, quae tenetur et corporis voluptatem libero. Voluptatum, mollitia necessitatibus? This is blog test.Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates asperiores! Sequi, laborum? At facere modi omnis hic minima accusantium ducimus, quae tenetur et corporis voluptatem libero. Voluptatum, mollitia necessitatibus?</Typography>
            </Box>
          </Box>
          <Box className='blog_author'>
            <Box className='blogger_img' width={'200px'} boxShadow='3' borderRadius='50%' overflow='hidden'><img src='./image/pp.jpg' width={'100%'} /></Box>
            <Box className='blogger_name'>
              <Typography variant='h6' fontWeight={'bold'} align={'center'}>Mr.xyz
              </Typography>
              </Box>

          </Box>
        </Box>
        <Box className="blog" display={'flex'} backgroundColor='white' p={'20px'} borderRadius='20px' mt={3}>
          <Box className="blog_content" width={'40%'}>
            <Box className='blog_title'>
              <Typography variant='h5' fontWeight={'bold'} gutterBottom='true' sx={{textDecoration:"underline"}}>Blog title
              </Typography>
              </Box>
            <Box className='blog_text' px={'20px'}>
              <Typography variant='body1' align='justify'>This is blog test.Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates asperiores! Sequi, laborum? At facere modi omnis hic minima accusantium ducimus, quae tenetur et corporis voluptatem libero. Voluptatum, mollitia necessitatibus? This is blog test.Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates asperiores! Sequi, laborum? At facere modi omnis hic minima accusantium ducimus, quae tenetur et corporis voluptatem libero. Voluptatum, mollitia necessitatibus?</Typography>
            </Box>
          </Box>
          <Box className='blog_author' width={'20%'}>
            <Box className='blogger_img' width={'200px'} boxShadow='3' borderRadius='50%' overflow='hidden'><img src='./image/pp.jpg' width={'100%'} /></Box>
            <Box className='blogger_name'>
              <Typography variant='h6' fontWeight={'bold'} align={'center'}>Mr.xyz
              </Typography>
              </Box>

          </Box>
          <Box className="blog_content" width={'40%'}>
            
            <Box className='blog_text' px={'20px'}>
              <Typography variant='body1' align='justify'>This is blog test.Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates asperiores! Sequi, laborum? At facere modi omnis hic minima accusantium ducimus, quae tenetur et corporis voluptatem libero. Voluptatum, mollitia necessitatibus? This is blog test.Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates asperiores! Sequi, laborum? At facere modi omnis hic minima accusantium ducimus, quae tenetur et corporis voluptatem libero. Voluptatum, mollitia necessitatibus?</Typography>
            </Box>
          </Box>
        </Box>
        

      </Box>

      <Footer />
    </>
  )
}

export default Blogs