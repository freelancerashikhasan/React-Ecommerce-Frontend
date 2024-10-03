import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
function ProductDetails() {

    const [details, setDetails] = useState([]);

    const query = useQuery();
    const id = query.get('id');

  

    useEffect(() => {
        axios.get('http://ecommerce-backend.test.com/api/product/product-details/'+id)
        .then(response => {
            setDetails(response.data);
        })
        .catch(error => {
            console.error('Login failed:', error);
            throw error;
        });
    },[id]);
    return (
        <>
            <div className="rts-product-details-section rts-product-details-section2 section-gap">
            <div className="container">
                <div className="row product-row">
                    <div className="col-xl-12">
                        <div className="product-area details-product-area mb--70">
                            <div className="product-thumb-area">
                                <div className="cursor"></div>
                                <div className="thumb-wrapper one filterd-items figure">
                                    <div className="product-thumb zoom" onMouseMove="zoom(event)"
                                        style={{ backgroundImage: `url(${details.thumbnail})` }}><img
                                            src={details.thumbnail} alt="product-thumb" />
                                    </div>
                                </div>
                                <div className="thumb-wrapper two filterd-items hide">
                                    <div className="product-thumb zoom" onMouseMove="zoom(event)"
                                        style={{ backgroundImage: 'url(assets/images/hand-picked/woman-shirt-338x450.png)' }}><img
                                            src="../src/assets/images/hand-picked/woman-shirt-338x450.png" alt="product-thumb" />
                                    </div>
                                </div>
                                <div className="thumb-wrapper three filterd-items hide">
                                    <div className="product-thumb zoom" onMouseMove="zoom(event)"
                                        style={{ backgroundImage: 'url(assets/images/hand-picked/slider-img12-3.webp)' }}><img
                                            src="../src/assets/images/hand-picked/slider-img12-3.webp" alt="product-thumb" />
                                    </div>
                                </div>
                                <div className="product-thumb-filter-group">
                                {details.featured_images ? details.featured_images.map((value, index) => (
                                    <div className={`thumb-filter filter-btn ${index === 0 ? 'active' : ''}`} data-show={`.${index + 1}`} key={index}>
                                        <img src={value.image} alt={`product-thumb-filter-${index}`} />
                                    </div>
                                )) : null}
                                </div>
                            </div>
                            <div className="contents">
                                <div className="product-status">
                                    <span className="product-catagory">{details.category ? details.category.category_name : ''}</span>
                                    <div className="rating-stars-group">
                                        <div className="rating-star"><i className="fas fa-star"></i></div>
                                        <div className="rating-star"><i className="fas fa-star"></i></div>
                                        <div className="rating-star"><i className="fas fa-star-half-alt"></i></div>
                                        <span>10 Reviews</span>
                                    </div>
                                </div>
                                <h2 className="product-title">{details.title ? details.title : ''} <span className="stock">In Stock</span></h2>
                                <span className="product-price"><span className="old-price">{details.offer_price ? details.price : ''}৳</span> {details.offer_price ? details.offer_price : details.price}৳</span>
                                <p>
                                    {details.sub_title ? details.sub_title : ''}
                                </p>
                                <div className="product-bottom-action">
                                    <div className="cart-edit">
                                        <div className="quantity-edit action-item">
                                            <button className="button"><i className="fal fa-minus minus"></i></button>
                                            <input type="text" className="input" value="01" />
                                            <button className="button plus">+<i className="fal fa-plus plus"></i></button>
                                        </div>
                                    </div>
                                    <a href="cart.html" className="addto-cart-btn action-item"><i
                                            className="rt-basket-shopping"></i> Add To
                                        Cart</a>
                                    <a href="wishlist.html" className="wishlist-btn action-item"><i className="rt-heart"></i></a>
                                </div>
                                <div className="product-uniques">
                                    <span className="sku product-unipue"><span>SKU: </span> BO1D0MX8SJ</span>
                                    <span className="catagorys product-unipue"><span>Categories: </span> T-Shirts, Tops,
                                        Mens</span>
                                    <span className="tags product-unipue"><span>Tags: </span> fashion, t-shirts, Men</span>
                                </div>
                                <div className="share-social">
                                    <span>Share:</span>
                                    <a className="platform" href="http://facebook.com/" target="_blank"><i
                                            className="fab fa-facebook-f"></i></a>
                                    <a className="platform" href="http://twitter.com/" target="_blank"><i
                                            className="fab fa-twitter"></i></a>
                                    <a className="platform" href="http://behance.com/" target="_blank"><i
                                            className="fab fa-behance"></i></a>
                                    <a className="platform" href="http://youtube.com/" target="_blank"><i
                                            className="fab fa-youtube"></i></a>
                                    <a className="platform" href="http://linkedin.com/" target="_blank"><i
                                            className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-full-details-area product-full-details-area2">
                    <div className="details-filter-bar">
                        <button className="details-filter filter-btn active" data-show=".dls-one">Description</button>
                        <button className="details-filter filter-btn" data-show=".dls-two">Additional information</button>
                        <button className="details-filter filter-btn" data-show=".dls-three">Reviews (0)</button>
                        <button className="details-filter filter-btn" data-show=".dls-four">Size Chart</button>
                    </div>
                    <div className="full-details dls-one filterd-items">
                        <div className="full-details-inner">
                        {details.description ? (
                            (() => {
                                const tempElement = document.createElement('div');
                                tempElement.innerHTML = details.description;
                                return tempElement.textContent || tempElement.innerText || '';
                            })()
                        ) : ''}
                        </div>
                    </div>
                    <div className="full-details dls-two filterd-items hide">
                        <div className="full-details-inner">
                            <p className="mb--30">In marketing a product is an object or system made available for consumer use
                                it is anything that can be offered to a market to satisfy the desire or need of a customer.
                                In retailing, products are
                                merchandise, and in manufacturing, products are bought as raw materials and then sold as
                                finished goods. A service is also regarded to as a type of product. Commodities are usually
                                raw material
                                and agricultural products, but a commodity can also be anything widely available in the open
                                market. In project management, products are the formal definition of the project
                                deliverables that
                                to delivering the objectives of the project.</p>
                            <p>A product can be classNameified as tangible or intangible. A tangible product is a physical
                                object that can be perceived by touch such as a building, vehicle, gadget, or clothing. An
                                intangible product is
                                can only be perceived indirectly such as an insurance policy. Services can be broadly
                                classNameified under intangible products which can be durable or non durable. A product line is
                                a group of
                                closely related, either because they function in a similar manner.</p>
                        </div>
                    </div>
                    <div className="full-details dls-three filterd-items hide">
                        <div className="full-details-inner">
                            <p>There are no reveiws yet.</p>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 mr-10">
                                    <div className="reveiw-form">
                                        <h2 className="section-title">
                                            Be the first to reveiw <strong> <a href="product-details.html">Wide Cotton
                                                    Tunic Dress</a></strong></h2>
                                        <h4 className="sect-title">Your email address will not be published. Required fields are
                                            marked* </h4>
                                        <div className="reveiw-form-main mb-10">
                                            <div className="contact-form">
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-12">
                                                        <div className="input-box text-input mb-20">
                                                            <textarea name="Message" id="validationDefault01" cols="30"
                                                                rows="10" placeholder="Your Review*" required></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-sm-12">
                                                        <div className="col-lg-12">
                                                            <div className="input-box mb-20">
                                                                <input type="text" id="validationDefault02"
                                                                    placeholder="Name*" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="input-box mail-input mb-20">
                                                                <input type="text" id="validationDefault03"
                                                                    placeholder="E-mail*" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="rating">
                                                                <p>Your Rating :</p>
                                                                <div className="rating-icon">
                                                                    <span className="one"><a href="#"> <i
                                                                                className="fal fa-star"></i></a></span>
                                                                    <span className="two"><a href="#"> <i
                                                                                className="fal fa-star"></i></a></span>
                                                                    <span className="three"><a href="#"> <i
                                                                                className="fal fa-star"></i></a></span>
                                                                    <span className="four"><a href="#"> <i
                                                                                className="fal fa-star"></i></a></span>
                                                                    <span className="five"><a href="#"> <i
                                                                                className="fal fa-star"></i></a></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 mb-15">
                                                            <button className="form-btn form-btn4">
                                                                Submit <i className="fal fa-long-arrow-right"></i>
                                                            </button>
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
                    <div className="full-details dls-four filterd-items hide">
                        <div className="full-details-inner">
                            <p className="mb--30">In marketing a product is an object or system made available for consumer use
                                it is anything that can be offered to a market to satisfy the desire or need of a customer.
                                In retailing, products are
                                merchandise in project management, products are the formal definition of the project
                                deliverables that
                                to delivering the objectives of the project.</p>
                            <p>A product can be classNameified as tangible or intangible. A tangible product is a physical
                                object that can be perceived by touch such as a building, vehicle, gadget, or clothing. An
                                intangible product is
                                can only be perceived indirectly such as an insurance policy. Services can be broadly
                                classNameified under intangible products which can be durable or non durable. A product line is
                                a group of
                                closely related, either because they function in a similar manner, are sold to the same
                                customer groups, are marketed through the same types of outlets, or fall within given price
                                ranges .Many
                                range of product lines which may be unique to a single organisation or may be common across
                                the businesss industry. In 2002 the US Census compiled revenue figures for the finance and
                                various product lines such as accident, health and medical insurance premiums and income
                                from secured consumer loans.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="rts-featured-product-section1 related-product">
            <div className="container">
                <div className="rts-featured-product-section-inner">
                    <div className="section-header section-header3 section-header6">
                        <div className="wrapper">
                            <h2 className="title">RELATED PRODUCT</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className="product-item element-item1">
                                <a href="product-details.html" className="product-image image-hover-variations">
                                    <div className="image-vari1 image-vari"><img
                                            src="../src/assets/images/hand-picked/slider-img13-1.webp" alt="product-image" />
                                    </div>
                                    <div className="image-vari2 image-vari"><img
                                            src="../src/assets/images/hand-picked/slider-img13.webp" alt="product-image" />
                                    </div>
                                </a>
                                <div className="bottom-content">
                                    <div className="star-rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <a href="product-details.html" className="product-name">Girls Sport Bra</a>
                                    <div className="action-wrap">
                                        <span className="price">$31.00</span>
                                    </div>
                                </div>
                                <div className="quick-action-button">
                                    <div className="cta-single cta-plus">
                                        <a href="#"><i className="rt-plus"></i></a>
                                    </div>
                                    <div className="cta-single cta-quickview">
                                        <a href="#"><i className="far fa-eye"></i></a>
                                    </div>
                                    <div className="cta-single cta-wishlist">
                                        <a href="#"><i className="far fa-heart"></i></a>
                                    </div>
                                    <div className="cta-single cta-addtocart">
                                        <a href="#"><i className="rt-basket-shopping"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className="product-item element-item1">
                                <a href="product-details.html" className="product-image image-hover-variations">
                                    <div className="image-vari1 image-vari"><img
                                            src="../src/assets/images/hand-picked/slider-img14.webp" alt="product-image" />
                                    </div>
                                    <div className="image-vari2 image-vari"><img
                                            src="../src/assets/images/hand-picked/slider-img14-1.webp" alt="product-image" />
                                    </div>
                                </a>
                                <div className="bottom-content">
                                    <div className="star-rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <a href="product-details.html" className="product-name">Girls Sport Bra</a>
                                    <div className="action-wrap">
                                        <span className="price">$31.00</span>
                                    </div>
                                </div>
                                <div className="quick-action-button">
                                    <div className="cta-single cta-plus">
                                        <a href="#"><i className="rt-plus"></i></a>
                                    </div>
                                    <div className="cta-single cta-quickview">
                                        <a href="#"><i className="far fa-eye"></i></a>
                                    </div>
                                    <div className="cta-single cta-wishlist">
                                        <a href="#"><i className="far fa-heart"></i></a>
                                    </div>
                                    <div className="cta-single cta-addtocart">
                                        <a href="#"><i className="rt-basket-shopping"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className="product-item element-item2">
                                <a href="product-details.html" className="product-image image-slider-variations">
                                    <div className="swiper productSlide">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="image-vari1 image-vari"><img
                                                        src="../src/assets/images/hand-picked/slider-img12-1.webp"
                                                        alt="product-image" />
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="image-vari2 image-vari"><img
                                                        src="../src/assets/images/hand-picked/slider-img11_1.webp"
                                                        alt="product-image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-buttons">
                                        <div className="button-prev slider-btn"><i className="rt-arrow-left-long"></i></div>
                                        <div className="button-next slider-btn"><i className="rt-arrow-right-long"></i></div>
                                    </div>
                                </a>
                                <div className="bottom-content">
                                    <div className="star-rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <a href="product-details.html" className="product-name">Maidenform Bra</a>
                                    <div className="action-wrap">
                                        <span className="price">$31.00</span>
                                    </div>
                                </div>
                                <div className="quick-action-button">
                                    <div className="cta-single cta-plus">
                                        <a href="#"><i className="rt-plus"></i></a>
                                    </div>
                                    <div className="cta-single cta-quickview">
                                        <a href="#"><i className="far fa-eye"></i></a>
                                    </div>
                                    <div className="cta-single cta-wishlist">
                                        <a href="#"><i className="far fa-heart"></i></a>
                                    </div>
                                    <div className="cta-single cta-addtocart">
                                        <a href="#"><i className="rt-basket-shopping"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className="product-item element-item1">
                                <a href="product-details.html" className="product-image image-hover-variations">
                                    <div className="image-vari1 image-vari"><img
                                            src="../src/assets/images/hand-picked/slider-img12.webp" alt="product-image" />
                                    </div>
                                    <div className="image-vari2 image-vari"><img
                                            src="../src/assets/images/hand-picked/slider-img12-3.webp" alt="product-image" />
                                    </div>
                                </a>
                                <div className="bottom-content">
                                    <div className="star-rating">
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <a href="product-details.html" className="product-name">Hanes Women s Bra</a>
                                    <div className="action-wrap">
                                        <span className="price">$31.00</span>
                                    </div>
                                </div>
                                <div className="quick-action-button">
                                    <div className="cta-single cta-plus">
                                        <a href="#"><i className="rt-plus"></i></a>
                                    </div>
                                    <div className="cta-single cta-quickview">
                                        <a href="#"><i className="far fa-eye"></i></a>
                                    </div>
                                    <div className="cta-single cta-wishlist">
                                        <a href="#"><i className="far fa-heart"></i></a>
                                    </div>
                                    <div className="cta-single cta-addtocart">
                                        <a href="#"><i className="rt-basket-shopping"></i></a>
                                    </div>
                                </div>
                                <div className="product-features">
                                    <div className="discount-tag product-tag">-38%</div>
                                    <div className="new-tag product-tag">HOT</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetails
