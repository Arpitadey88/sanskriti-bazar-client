import React from 'react';
import banner1 from '../../../images/banner1.jpg'
import banner2 from '../../../images/banner2.jpg'
import banner3 from '../../../images/banner3.jpg'
import banner4 from '../../../images/banner4.jpg'
import banner5 from '../../../images/banner5.jpg'

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <img src={banner1} className="d-block carousel-img" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="text-white caption-text">Get The Glow</h1>
                            <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                            <button className="btn btn-light mb-5 fw-bold"><span><i className="fa fa-shopping-bag ctg-icon"></i></span> Shop Now </button>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={banner2} className="d-block carousel-img" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="text-white caption-text">Get The Glow</h1>
                            <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                            <button className="btn btn-light mb-5 fw-bold"><span><i className="fa fa-shopping-bag ctg-icon"></i></span> Shop Now </button>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={banner3} className="d-block carousel-img" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="text-white caption-text">Get The Glow</h1>
                            <p cclassName="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                            <button className="btn btn-light mb-5 fw-bold"><span><i className="fa fa-shopping-bag ctg-icon"></i></span> Shop Now </button>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={banner4} className="d-block carousel-img" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="text-white caption-text">Get The Glow</h1>
                            <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                            <button className="btn btn-light mb-5 fw-bold"><span><i className="fa fa-shopping-bag ctg-icon"></i></span> Shop Now </button>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={banner5} className="d-block carousel-img" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="text-white caption-text">Get The Glow</h1>
                            <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                            <button className="btn btn-light mb-5 fw-bold"><span><i className="fa fa-shopping-bag ctg-icon"></i></span> Shop Now </button>
                        </div>
                    </div>
                </div>

                <div className='control-btn'>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon carousel-control-btn"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon carousel-control-btn" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;