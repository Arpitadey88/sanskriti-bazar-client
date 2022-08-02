import React from 'react';
import Carousel from '../Carousel/Carousel';
import CarouselHeader from '../CarouselHeader/CarouselHeader';
import './Banner.css'

const Banner = () => {
    return (
        <div className='container my-md-5 my-2'>
            <div className='row g-md-5 g-3'>
                <div className="col-md-3">
                    <div className="category">
                        <div className="d-flex justify-content-between align-items-center py-2 px-3 text-white" style={{ backgroundColor: '#7DCE13' }}>
                            <i className="fa fa-bars fs-6"></i>
                            <span>All Products</span>
                            <i className="fa fa-angle-down fs-5 "></i>
                        </div>
                        <div className="category-items">
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
                            <p className="category-list border-0"><span >Books &amp; Scripts</span></p>
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