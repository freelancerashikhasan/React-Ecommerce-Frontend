import React from 'react'

function Banner() {
    return (
        <div className="banner banner-4">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="swiper bannerSlider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <a href="product-details.html" className="product-box product-box-large">
                                        <div className="contents">
                                            <span className="pretitle">Weekend Discount</span>
                                            <h1 className="product-title">Big screens in <br />
                                                incredibly slim <br />
                                                <span>designs...</span>
                                            </h1>
                                            <span className="product-price">
                                                <span>Starts From</span>
                                                $499.99
                                            </span>
                                        </div>
                                        <div className="product-thumb"><img src="../src/assets/images/products/home4/laptop.webp"
                                                alt="product-thumb" /></div>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <div className="product-box product-box-large">
                                        <div className="contents">
                                            <span className="pretitle">Weekend Discount</span>
                                            <h1 className="product-title">Big screens in <br />
                                                incredibly slim <br />
                                                <span>designs...</span></h1>
                                                <span className="product-price">
                                                    <span>Starts From</span>
                                                    $499.99
                                                </span>
                                        </div>
                                        <div className="product-thumb"><img src="../src/assets/images/products/home4/laptop.webp"
                                                alt="product-thumb" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-navigation">
                                <div className="swiper-button-prev slider-btn prev"><i className="fal fa-long-arrow-up"></i></div>
                                <div className="swiper-button-next slider-btn next"><i className="fal fa-long-arrow-down"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="row">
                            <div className="col-xl-12">
                                <a href="product-details.html" className="product-box product-box-medium">
                                    <div className="contents">
                                        <span className="pretitle">-45% Offer</span>
                                        <h1 className="product-title">New
                                            <span>Smartphone</span></h1>
                                        <p> Do miss the last opportunity</p>
                                    </div>
                                    <div className="product-thumb"><img src="../src/assets/images/products/home4/iphone-13.webp"
                                            alt="product-thumb" /></div>
                                </a>
                            </div>
                            <div className="col-xl-12">
                                <a href="product-details.html" className="product-box product-box-medium product-box-medium2">
                                    <div className="contents">
                                        <span className="pretitle">Great Stores</span>
                                        <h1 className="product-title">Call for up to 30% off</h1>
                                        <div className="view-collections go-btn">View Collections <i
                                                className="fal fa-long-arrow-right"></i></div>
                                    </div>
                                    <div className="product-thumb"><img src="../src/assets/images/products/home4/headphone.webp"
                                            alt="product-thumb" /></div>
                                </a>
                            </div>
                            <div className="col-xl-12">
                                <a href="product-details.html"
                                    className="product-box product-box-medium product-box-medium3 product-box-bg">
                                    <div className="contents">
                                        <span className="pretitle">SUPER DISCOUNT</span>
                                        <h1 className="product-title">Home Speaker</h1>
                                        <div className="view-collections go-btn">Shop Now <i
                                                className="fal fa-long-arrow-right"></i></div>
                                    </div>
                                    <div className="product-thumb"><img src="../src/assets/images/products/home4/speaker.webp"
                                            alt="product-thumb" /></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
