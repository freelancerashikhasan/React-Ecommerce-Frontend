import React, { useEffect } from 'react'
import Swiper from 'swiper';

function Deals() {
    useEffect(() => {
        const swiper = new Swiper('.oneSlide', {
            slidesPerView: 1,
            spaceBetween: 5,
            pagination: {
                el: '.swiper-pag',
                clickable: true,
            },
        });
    }, []);
    return (
        <div>
             <div className="rts-deal-section section-gap">
                <div className="container position-relative">
                    <div className="section-header section-header4">
                        <div className="flex-wrapper">
                            <span className="section-title section-title-2 mb--5
                        ">Super Deals Of The Week</span>
                            <div className="countdown" id="countdown">
                                <ul>
                                    <li><span id="days"></span>D</li>
                                    <li><span id="hours"></span>H</li>
                                    <li><span id="minutes"></span>M</li>
                                    <li><span id="seconds"></span>S</li>
                                </ul>
                            </div>
                        </div>
                        <a href="shop-main.html" className="go-btn">All Products <i className="fal fa-long-arrow-right"></i></a>
                    </div>
                    <div className="swiper oneSlide">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="deal-box">
                                    <div className="deal-box-inner">
                                        <div className="deal-product">
                                            <div className="filter-buttons">
                                                <div className="filter-btn" data-show=".one"><img
                                                        src="../src/assets/images/products/home4/deal/1.png" alt="filter-image" /></div>
                                                <div className="filter-btn" data-show=".two" /><img
                                                        src="../src/assets/images/products/home4/deal/2.png" alt="filter-image" /></div>
                                                <div className="filter-btn" data-show=".three"><img
                                                        src="../src/assets/images/products/home4/deal/3.png" alt="filter-image" /></div>
                                                <div className="filter-btn last-child" data-show=".four"><img
                                                        src="../src/assets/images/products/home4/deal/4.png" alt="filter-image" /></div>
                                            </div>
                                            <div className="product-area">
                                                <div className="product detail-product one filterd-items">
                                                    <div className="product-thumb"><img
                                                            src="../src/assets/images/products/home4/deal/product.png"
                                                            alt="product-thumb" /></div>
                                                    <div className="contents">
                                                        <div className="rating-area">
                                                            <div className="rating-stars-group">
                                                                <div className="rating-star"><i className="fas fa-star"></i></div>
                                                                <div className="rating-star"><i className="fas fa-star"></i></div>
                                                                <div className="rating-star"><i className="fas fa-star"></i></div>
                                                                <div className="rating-star"><i className="fas fa-star"></i></div>
                                                                <div className="rating-star"><i className="fas fa-star"></i></div>
                                                                <span className="rating-qnty">(120 Reviews)</span>
                                                            </div>
                                                        </div>
                                                        <h2 className="product-title">Dragon Touch Max10 Tablet
                                                            Android 10.0 OS</h2>
                                                        <span className="product-price">$129.99 <span
                                                                className="old-price">$349.99</span></span>
                                                        <div className="product-buttons">
                                                            <button className="select-option-btn"><i
                                                                    className="fal fa-shopping-cart mr--5"></i> Select
                                                                Option</button>
                                                            <button className="wishlist-btn"><i className="rt-heart"></i></button>
                                                            <button className="exchange-btn"><i
                                                                    className="fal fa-exchange"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product detail-product two filterd-items hide">
                                                    <div className="product-thumb"><img
                                                            src="../src/assets/images/products/home4/deal/product.png"
                                                            alt="product-thumb" /></div>
                                                    <div className="contents">
                                                        <div className="rating-area">
                                                            <div className="rating-stars-group">
                                                                <div className="rating-star"><i className="fas fa-star"></i></div>
                                                                <div className="rating-star"><i className="fas fa-star"></i></div>
                                                                <div className="rating-star"><i className="fas fa-star"></i></div>
                                                                <div className="rating-star"><i className="fas fa-star"></i></div>
                                                                <div className="rating-star"><i className="fas fa-star"></i></div>
                                                                <span className="rating-qnty">(120 Reviews)</span>
                                                            </div>
                                                        </div>
                                                        <h2 className="product-title">Dragon Touch Max10 Tablet
                                                            Android 10.0 OS</h2>
                                                        <span className="product-price">$129.99 <span
                                                                className="old-price">$349.99</span></span>
                                                        <div className="product-buttons">
                                                            <button className="select-option-btn"><i
                                                                    className="fal fa-shopping-cart mr--5"></i> Select
                                                                Option</button>
                                                            <button className="wishlist-btn"><i className="rt-heart"></i></button>
                                                            <button className="exchange-btn"><i
                                                                    className="fal fa-exchange"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product detail-product three filterd-items hide">
                                                    <div className="product-thumb"><img
                                                            src="../src/assets/images/products/home4/deal/product.png"
                                                            alt="product-thumb" /></div>
                                                    <div className="contents">
                                                        <div className="rating-area">
                                                            <div className="rating-stars-group">
                                                                <div className="rating-star"><i className="fas fa-star"></i></div>
                                                                <div className="rating-star"><i className="fas fa-star"></i></div>
                                                                <div className="rating-star"><i className="fas fa-star"></i></div>
                                                                <div className="rating-star"><i className="fas fa-star"></i></div>
                                                                <div className="rating-star"><i className="fas fa-star"></i></div>
                                                                <span className="rating-qnty">(120 Reviews)</span>
                                                            </div>
                                                        </div>
                                                        <h2 className="product-title">Dragon Touch Max10 Tablet
                                                            Android 10.0 OS</h2>
                                                        <span className="product-price">$129.99 <span
                                                                className="old-price">$349.99</span></span>
                                                        <div className="product-buttons">
                                                            <button className="select-option-btn"><i
                                                                    className="fal fa-shopping-cart mr--5"></i> Select
                                                                Option</button>
                                                            <button className="wishlist-btn"><i className="rt-heart"></i></button>
                                                            <button className="exchange-btn"><i
                                                                    className="fal fa-exchange"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product detail-product four filterd-items hide">
                                                    <div className="product-thumb"><img
                                                            src="../src/assets/images/products/home4/deal/product.png"
                                                            alt="product-thumb" /></div>
                                                    <div className="contents">
                                                        <div className="rating-area">
                                                            <div className="rating-stars-group">
                                                                <div className="rating-star"><i className="fas fa-star"></i></div>
                                                                <div className="rating-star"><i className="fas fa-star"></i></div>
                                                                <div className="rating-star"><i className="fas fa-star"></i></div>
                                                                <div className="rating-star"><i className="fas fa-star"></i></div>
                                                                <div className="rating-star"><i className="fas fa-star"></i></div>
                                                                <span className="rating-qnty">(120 Reviews)</span>
                                                            </div>
                                                        </div>
                                                        <h2 className="product-title">Dragon Touch Max10 Tablet
                                                            Android 10.0 OS</h2>
                                                        <span className="product-price">$129.99 <span
                                                                className="old-price">$349.99</span></span>
                                                        <div className="product-buttons">
                                                            <button className="select-option-btn"><i
                                                                    className="fal fa-shopping-cart mr--5"></i> Select
                                                                Option</button>
                                                            <button className="wishlist-btn"><i className="rt-heart"></i></button>
                                                            <button className="exchange-btn"><i
                                                                    className="fal fa-exchange"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-navigation">
                    <div className="swiper-button-prev slider-btn prev"><i className="fal fa-long-arrow-left"></i></div>
                    <div className="swiper-button-next slider-btn next"><i className="fal fa-long-arrow-right"></i></div>
                </div>
            </div>
        </div>
    )
}

export default Deals
