import React from 'react'

function ServicesSection() {
    return (
        <div className="rts-services-section section-gap">
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="service-item">
                        <div className="service-icon"><img src="../src/assets/images/icons/shipment.svg" alt="service-icon" /></div>
                        <div className="contents">
                            <h3 className="service-title">International Shipment</h3>
                            <p>Orders are shipped seamlessly
                                between countries</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="service-item">
                        <div className="service-icon"><img src="../src/assets/images/icons/support.svg" alt="service-icon" />
                        </div>
                        <div className="contents">
                            <h3 className="service-title">Online Support 24/7</h3>
                            <p>Orders are shipped seamlessly
                                between countries</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="service-item">
                        <div className="service-icon"><img src="../src/assets/images/icons/return.svg" alt="service-icon" />
                        </div>
                        <div className="contents">
                            <h3 className="service-title">Money Return</h3>
                            <p>Orders are shipped seamlessly
                                between countries</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="service-item">
                        <div className="service-icon"><img src="../src/assets/images/icons/discount.svg" alt="service-icon" /></div>
                        <div className="contents">
                            <h3 className="service-title">Member Discount</h3>
                            <p>Orders are shipped seamlessly
                                between countries</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ServicesSection
