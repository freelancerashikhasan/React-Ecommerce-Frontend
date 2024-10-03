import React from 'react'

function Poster() {
    return (
        <div>
            <div className="rts-posters-section section-5 section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3">
                            <a href="product-details.html" className="product-box product-box-medium product-box-medium2">
                                <div className="contents">
                                    <span className="pretitle">Great Stores</span>
                                    <h1 className="product-title">Last Call for up <br /> to 30% off</h1>
                                    <div className="view-collections go-btn">View Collections <i
                                            className="fal fa-long-arrow-right"></i></div>
                                </div>
                                <div className="product-thumb"><img src="../src/assets/images/products/home4/pot.png" alt="product-thumb" />
                                </div>
                            </a>
                        </div>
                        <div className="col-xl-6">
                            <a href="product-details.html" className="product-box product-box-medium mid">
                                <div className="contents">
                                    <span className="pretitle">-45% Offer</span>
                                    <h1 className="product-title">New
                                        <span>Smartphone</span></h1>
                                    <p>Don't miss the last opportunity</p>
                                </div>
                                <div className="product-thumb"><img src="../src/assets/images/products/home4/phones.png"
                                        alt="product-thumb" /></div>
                            </a>
                        </div>
                        <div className="col-xl-3">
                            <a href="product-details.html" className="product-box product-box-medium product-box-medium3">
                                <div className="contents">
                                    <span className="pretitle">ELECTRONICS</span>
                                    <h1 className="product-title">Home Speaker</h1>
                                    <div className="view-collections go-btn">Shop Now <i className="fal fa-long-arrow-right"></i></div>
                                </div>
                                <div className="product-thumb"><img src="../src/assets/images/products/home4/machine.png"
                                        alt="product-thumb" /></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poster
