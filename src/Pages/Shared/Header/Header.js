import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    const [toggleBar, setToggleBar] = useState(false);
    return (
        <div className=''>
            <div className="top-header">
                <p className='py-1'>Namaskarom! Welcome to Sanskriti Bazar. India Own Marketplace to sell and to buy Online</p>
            </div>
            <div className='header-bg'>
                <nav className="navBar container ">
                    <a className='ms-3 ms-md-1 text-decoration-none' href="/">
                        <img className='logoImg' src={logo} alt="" />
                    </a>

                    <ul className={toggleBar ? "navLinksToggle" : "navLinks"}
                        onClick={() => { setToggleBar(false) }}>
                        <Link to="/" className="link"><li className="lists">Home</li></Link>
                        <Link to="/allProducts" className="link"><li className="lists">Products</li></Link>
                        <Link to="/blog" className="link"><li className="lists">Blog</li></Link>
                        <Link to="/about" className="link"><li className="lists">About Us</li></Link>
                        <Link to="/contact" className="link"><li className="lists">Conatact Us</li></Link>
                        <Link to="/help" className="link"><li className="lists">Help</li></Link>
                    </ul>
                    <div className='header-btn'>
                        <button className="btn vendor-btn text-white rounded d-md-block d-none">
                            BECOME A VENDOR</button>
                    </div>

                    <button className='toggler-icon'
                        onClick={() => setToggleBar(!toggleBar)}>
                        {toggleBar ? (<i className="fa fa-times"></i>)
                            :
                            (<i className="fa fa-bars"></i>)}
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default Header;