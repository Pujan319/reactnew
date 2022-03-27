import React from 'react'
import './product.css'

const Products = () => {
    return (
        <>
        <div className='container-fluid'>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 my-3 g-4">
                <div className="col">
                    <div className="card shadow-lg">
                        <div className='img-div'>
                            <img src="./image/100ml-1.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>

                            <button className='btn btn-success'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-lg">
                        <div className='img-div'>
                            <img src="./image/100ml-2.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>

                            <button className='btn btn-success'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-lg">
                        <div className='img-div'>
                            <img src="./image/100ml-3.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>

                            <button className='btn btn-success'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-lg">
                        <div className='img-div'>
                            <img src="./image/100ml-4.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>

                            <button className='btn btn-success'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-lg">
                        <div className='img-div'>
                            <img src="./image/100ml-1.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>

                            <button className='btn btn-success'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-lg">
                        <div className='img-div'>
                            <img src="./image/100ml-1.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>

                            <button className='btn btn-success'>View Details</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Products