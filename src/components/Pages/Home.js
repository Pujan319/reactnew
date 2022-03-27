import React from 'react'
import Component from '../layout/Component'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'
import Products from '../Products'
import './home.css'

const Home = () => {
  return (
    <>
    <Nav/>
    <Component/>
    <Products/>
    <Footer/>
    </>
  )
}

export default Home