import React from 'react';
import Carousel from '../Carousel/Carousel';
import CarouselHeader from '../CarouselHeader/CarouselHeader';
import './Banner.css'

const Banner = () => {
    return (
        <div className='container my-5'>
            <div className='row'>
                <div className="col-md-3">
                    <div className="category">
                        <p className="category-list text-white py-2" style={{ backgroundColor: '#7DCE13' }}> <i className="fa fa-bars fs-6"></i> <span className='ps-5'>All Products</span> <i className="fa fa-angle-down fs-5 ps-5"></i></p>
                        <div className="">
                            <p className="category-list"><span >Ayurvedic</span></p>
                            <p className="category-list"><span >Beauty Products</span></p>
                            <p className="category-list"><span >Food &amp; Beverages </span></p>
                            <p className="category-list"><span >Live Plants</span></p>
                            <p className="category-list"><span >Healthcare</span></p>
                            <p className="category-list"><span >Home &amp; Decor</span></p>
                            <p className="category-list"><span >Yoga Products</span></p>
                            <p className="category-list"><span >Paintings</span></p>
                            <p className="category-list"><span >Handicrafts</span></p>
                            <p className="category-list"><span >Clothing</span></p>
                            <p className="category-list"><span >Devotional &amp; Bhakti</span></p>
                            <p className="category-list"><span >Books &amp; Scripts</span></p>
                        </div>
                    </div>
                </div>

                <div className='col-md-9 carousel-banner'>
                    <CarouselHeader></CarouselHeader>
                    <Carousel></Carousel>
                </div>
            </div>
        </div>
    );
};

export default Banner;