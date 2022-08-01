import React from 'react';
import '../Banner/Banner.css'

const CarouselHeader = () => {
    return (
        <div className='row d-flex align-items-center justify-content-center'>
            <div className="col-md-6">
                <div className="input-group ">
                    <ul className="nav nav-tabs bg-light border">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-secondary py-1" data-bs-toggle="dropdown" href="/"
                                role="button" aria-expanded="false">All Categories</a>
                            <ul className="dropdown-menu">
                                <li>Products</li>
                                <li>Products</li>
                                <li>Products</li>
                                <li>Products</li>
                            </ul>
                        </li>
                    </ul>

                    <input type="text" className="form-control bg-light " placeholder="Search products" />
                    <button style={{ backgroundColor: '#7DCE13' }} className="btn my-0 py-0" type="button"
                    ><i className="fas fa-search text-white fs-6"></i></button>
                </div>
            </div>
            <div className="col-md-6 carousel-header">
                <ul>
                    <li >INR <i className="fa fa-angle-down fs-6"></i></li>
                    <li ><i className="fa fa-user"></i></li>
                    <li ><i className="fa fa-heart cart-icon"></i>
                    <span className="cart-text"><small>0</small></span> </li>

                    <li><i className="fa fa-shopping-cart cart-icon"></i>
                        <span className="cart-text"><small>0</small></span> </li>
                    <li >RS <small>- 0.00</small></li>
                </ul>
            </div>
        </div>
    );
};

export default CarouselHeader;