import React from 'react';
import logo from '../../../images/logoN.png';
import card1 from '../../../images/mc.png'
import card2 from '../../../images/pp.png'
import card3 from '../../../images/vi.png'
import './Footer.css'

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'whiteSmoke' }}>
            <div className="container py-3 pb-0">
                <div className="row g-2 g-md-2 footer-area mt-0">
                    <div className="col-md-4">
                        <a className='text-decoration-none' href="/">
                            <img className='logoImg' src={logo} alt="" />
                        </a>
                        <p className='ms-2'><i className="fas fa-map-marker-alt me-3"></i>116, Sector-03 Rukamani Vihar,
                            Vrindavan, <br /> Mathura - 281121 (U.P), India</p>
                        <p className='ms-2'> <span><i className="fas fa-phone-alt me-3"></i></span>(+91) 7272878700</p>
                        <p className='ms-2'> <span><i className="fa fa-envelope me-3"></i></span> info@sanskritibazaar.com</p>
                    </div>
                    <div className="col-md-2">
                        <h4 className="fw-bold pt-2">Categories</h4>
                        <p>Healthcare</p>
                        <p>Beauty Products</p>
                        <p>Food &amp; Beverages</p>
                        <p>Yoga Products</p>
                        <p>Devotional &amp; Bhakti</p>

                    </div>
                    <div className="col-md-2">
                        <h4 className="fw-bold pt-2">Account</h4>
                        <p>My profile</p>
                        <p>Track An order</p>
                        <p>My Orders</p>
                        <p>Delivery &amp; Returns</p>
                    </div>
                    <div className="col-md-4">
                        <h4 className=" fw-bold pt-2">Sign Up For Newsletter</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <form className="row g-3 pt-1">
                            <div className="col">
                                <input type="text" className="p-2 border-0" placeholder="Your Email" />
                                <button className="btn btn-warning" type="button"
                                >SubCribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="py-1 row">
                    <div className="col-md-6">
                        <h5>Show Us Some love On Social Media</h5>
                        <div className="social-links d-flex ">
                            <a href className="linkedin"><i className="fab fa-linkedin"></i></a>
                            <a href className="twitter"><i className="fab fa-twitter"></i></a>
                            <a href className="facebook"><i className="fab fa-facebook"></i></a>
                            <a href className="instagram"><i className="fab fa-instagram"></i></a>
                        </div>

                    </div>
                    <div className="col-md-6 card-section">
                        <img src={card1} alt="" />
                        <img src={card2} alt="" />
                        <img src={card3} alt="" />
                    </div>
                    <div className='text-center'>
                        <p><small><span className="text-secondary fw-bold">© 2021 Sanskriti Bazaar Pvt. Ltd.</span></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;