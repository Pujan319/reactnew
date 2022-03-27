import React from 'react'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'
import { Link } from 'react-router-dom'

const cart = () => {
    return (
        <>
            <Nav />
            <div className="container my-4">
                <h3 className="text-center text-muted mb-4">Your Cart :<b>2</b> Items</h3>
                <div className="row d-flex justify-content-evenly">
                    <div className="col-md-8">
                        <div className="d-flex shadow-lg p-2 align-items-center">
                            <div className="col-3"><img src="./image/100ml-1.jpg" width="100" alt="ice cream" />
                            </div>
                            <div className="col-3">
                                <p className="text-muted">Bennivies Cotton Candy 100ml</p>
                            </div>
                            <div className="col-2">
                                <p className="text-warning">Rs.120</p>
                            </div>
                            <div className="col-3">
                                <div className="d-flex justify-content-evenly">
                                    <button className="btn btn-primary">+</button>&nbsp;
                                    <input type="number" value="1" readonly className="form-control" />&nbsp;
                                    <button className="btn btn-danger">-</button>
                                </div>
                            </div>
                            <div className="col-1 mx-1">
                                <button className="btn btn-danger">
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                        <div className="d-flex shadow-lg p-2 align-items-center">
                            <div className="col-3"><img src="./image/100ml-2.jpg" width="100" alt="ice cream" />
                            </div>
                            <div className="col-3">
                                <p className="text-muted">Bennivies midnight cookies 100ml</p>
                            </div>
                            <div className="col-2">
                                <p className="text-warning">Rs.120</p>
                            </div>
                            <div className="col-3">
                                <div className="d-flex justify-content-evenly">
                                    <button className="btn btn-primary">+</button>&nbsp;
                                    <input type="number" value="1" readonly className="form-control" />&nbsp;
                                    <button className="btn btn-danger">-</button>
                                </div>
                            </div>
                            <div className="col-1 mx-1">
                                <button className="btn btn-danger">
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 my-5">
                        <div className="shadow p-3">
                            <h3 className="text-center text-muted">Cart summary</h3>
                            <p>Subtotal:<b>2</b>(items)</p>
                            <p>Total:<b>Rs.500</b></p>
                            <button className="btn btn-warning">Check Out</button>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />

        </>
    )
}

export default cart