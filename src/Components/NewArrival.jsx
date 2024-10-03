import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';

function NewArrival() {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        const swiper = new Swiper('.rts-fiveSlide', {
            slidesPerView: 5,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pag',
                clickable: true,
            },
        });
    }, []);

    useEffect(() => {
        axios.get('http://ecommerce-backend.test.com/api/product/new_arrival')
        .then(response => {
            setProduct(response.data);
        })
        .catch(error => {
            console.error('Fetch failed:', error);
            throw error;
        });
    },[]);

    return (
<div className="rts-featured_products-section section-5 section-gap">
        <div className="container">
            <div className="section-header section-header4">
                <span className="section-title section-title-2 mb--5
                ">New Arrival </span>
                <a href="shop-main.html" className="go-btn">New Arrival <i className="fal fa-long-arrow-right"></i></a>
            </div>
            <div className="products-area">
                <div className="swiper rts-fiveSlide">
                    <div className="swiper-wrapper">
                    {products.map((product, index) => (
                        <div className="swiper-slide" key={index}>
                            <div className="product-item product-item4">
                                <Link to={`product?id=${product.id}`}  className="product-image">
                                    <img src={product.imageUrl} alt={product.name} />
                                </Link>
                                <div className="bottom-content">
                                    <span className="product-catagory">{product.category.category_name || "Electronics"}</span>
                                    <Link to={`product?id=${product.id}`} className="product-name">{product.title || "Unnamed Product"}</Link>
                                    <div className="flex-wrap">
                                        <div className="action-wrap">
                                            <span className="product-price me-2 text-danger"><del>${(product.offer_price ? product.price : '') || "0.00"}</del></span>
                                            <span className="product-price">${(product.offer_price ? product.offer_price : product.price) || "0.00"}</span>
                                            <a href="cart.html" className="addto-cart"><i className="fal fa-shopping-cart"></i> Add To Cart</a>
                                        </div>
                                        <button className="wishlist-btn"><i className="rt-heart"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                      
                    </div>
                    <div className="pagination-area">
                        <div className="swiper-pag"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default NewArrival
