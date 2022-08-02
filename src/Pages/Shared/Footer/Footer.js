import React from 'react';
import logo from '../../../images/logoN.png';
import card1 from '../../../images/card1.png'
import card2 from '../../../images/card2.png'
import card3 from '../../../images/card3.png'
import card4 from '../../../images/card4.png'
import card5 from '../../../images/card5.png'
import card6 from '../../../images/card6.png'
import './Footer.css'

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'whiteSmoke' }}>
            <div className="container py-3 pb-0">
                <div className="row g-2 g-md-2 footer-area mt-0">
                    <div className="col-md-4">
                        <a className='text-decoration-none' href="/">
                            <img className='logoImg logo-footer' src={logo} alt="" />
                        </a>
                        <div className='m-2 d-flex'><i className="fas fa-map-marker-alt me-3 mt-1"></i><small >116, Sector-03 Rukamani Vihar,
                            Vrindavan, Mathura - 281121 (U.P), India</small></div>
                        <p className='ms-2'> <span><i className="fas fa-phone-alt me-3"></i></span>(+91) 7272878700</p>
                        <p className='ms-2'> <span><i className="fa fa-envelope me-3"></i></span> info@sanskritibazaar.com</p>
                    </div>
                    <div className="col-md-2 col-6 ">
                        <h4 className="fw-bold pt-2">Categories</h4>
                        <p>Healthcare</p>
                        <p>Beauty Products</p>
                        <p>Food &amp; Beverages</p>
                        <p>Yoga Products</p>
                        <p>Devotional &amp; Bhakti</p>

                    </div>
                    <div className="col-md-2 col-6 px-2">
                        <h4 className="fw-bold pt-2">Account</h4>
                        <p>My profile</p>
                        <p>Track An order</p>
                        <p>My Orders</p>
                        <p>Delivery &amp; Returns</p>
                    </div>
                    <div className="col-md-4">
                        <h4 className=" fw-bold pt-md-2 pt-0">Sign Up For Newsletter</h4>
                        <p className='px-1 my-0'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <form className=" p-1 mt-0">
                            <input type="text" className="p-md-2 p-1 border-0" placeholder="Your Email" />
                            <button className="btn btn-warning subscribe-btn" type="button"
                            >SubCribe</button>
                        </form>
                    </div>
                </div>

                <div className="py-2 row">
                    <div className="col-md-6 social-area">
                        <h5>Show Us Some love On Social Media</h5>
                        <div className="social-links d-flex">
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
                        <img src={card4} alt="" />
                        <img src={card5} alt="" />
                        <img src={card6} alt="" />
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