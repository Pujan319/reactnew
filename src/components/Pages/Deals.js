import React from 'react'
import Nav from '../layout/Nav'
import { Link } from 'react-router-dom'
import Footer from '../layout/Footer'
import Products from '../Products'

const Deals = () => {
    return (
        <>
            <Nav />
            <h3>
                Deals page
            </h3>
            <div className='row m-0'>
                <div className='col-md-3 p-3'>
                    <h4>Categories</h4>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Frozen
                            </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Electronic
                            </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Garments
                            </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Liquor
                            </label>
                    </div>



                </div>

            
            <div className='col-md-9 '>
                <Products />
            </div>
            </div>

            <Footer />
        </>
    )
}

export default Deals