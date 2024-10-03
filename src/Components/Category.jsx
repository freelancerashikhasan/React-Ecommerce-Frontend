import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Category() {
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);

    const [categories, setCategory] = useState([]);

    useEffect(() => {
        axios.get('http://ecommerce-backend.test.com/api/product/category')
        .then(response => {
            setCategory(response.data);

        })
        .catch(error => {
            console.error('Login failed:', error);
            throw error;
        });
    },[]);
    return (
        <div>
            <div className="rts-best-catagory-section section-gap">
                <div className="container">
                    <div className="section-header section-header4">
                        <span className="section-title section-title-2 mb--5
                        ">Best Category</span>
                        <a href="shop-main.html" className="go-btn">Other Category <i className="fal fa-long-arrow-right"></i></a>
                    </div>
                    <div className="row justify-content-center">
                    {categories.length > 0 ? (
                        categories.map((cat, index) => (
                            <div className="col-xl-3 col-lg-4 col-sm-6" key={index}>
                                <div className="catagory-card">
                                    <div className="contents">
                                        <h3 className="catagory-title">{cat.category_name}</h3>
                                        <ul className="catagory-lists">
                                            {cat.subcategory.map((subcategory, index) =>(
                                                <li key={index}><Link to="shop">{subcategory.subcategory ? subcategory.subcategory : ''} <i className="fal fa-angle-right"></i></Link></li>
                                                
                                            ))}
                                        </ul>
                                        <Link to="shop" className="all-btn">All {cat.category_name || ''} <i className="fal fa-long-arrow-right ml--5"></i></Link>
                                    </div>
                                    <div className="category-thumb mb-2"><img src={`${cat.imageUrl}`}
                                        alt="category-thumb" /></div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading categories...</p>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
