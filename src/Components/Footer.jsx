import React from 'react'

function Footer() {
    return (
        <div className="footer footer-3 footer-4">
        <div className="container">
            <div className="footer-inner">
                <div className="row">
                    <div className="col-xl-3 col-md-6 col-sm-6 box-widget-col">
                        <div className="footer-widget footer-box-widget">
                            <div className="footer-logo"><img src="/src/assets/images/logo2.png" alt="footer-logo" /></div>
                            <p>Solid is the information & experience
                                directed at an end-user</p>
                            <div className="quick-contact">
                                <div className="phone contact-item">
                                    <div className="icon"><img src="/src/assets/images/icons/24clock2.png" alt="chat-icon" />
                                    </div>
                                    <div className="contact-info">
                                        <a href="tel:0020500" className="service-time info">0020 500 - CALL - 000</a>
                                        <span className="title">Mon - Fri: 9:00-20:00</span>
                                    </div>
                                </div>
                                <div className="email contact-item">
                                    <div className="icon"><img src="/src/assets/images/icons/mail2.png" alt="phone-icon" />
                                    </div>
                                    <div className="contact-info">
                                        <a href="mailto:info@webmail.com"
                                            className="email-address info">info@webmail.com</a>
                                        <span className="title">Get Support</span>
                                    </div>
                                </div>
                            </div>
                            <ul className="social-links-footer2">
                                <li><a className="platform fb" target="_blank" href="http://facebook.com/"><i
                                            className="fab fa-facebook"></i></a>
                                </li>
                                <li><a className="platform yt" target="_blank" href="http://youtube.com/"><i
                                            className="fab fa-youtube"></i></a>
                                </li>
                                <li><a className="platform ttr" target="_blank" href="http://twitter.com/"><i
                                            className="fab fa-twitter"></i></a>
                                </li>
                                <li><a className="platform lkd" target="_blank" href="http://linkedin.com/"><i
                                            className="fab fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6">
                        <div className="footer-widget">
                            <h3 className="footer-widget-title">About Us</h3>
                            <p className="widget-text">Elegant pink origami design three type
                                of dimensional view and decoration co
                                Great for adding a decorative touch to
                                any room’s decor.</p>
                            <a href="#0" className="getin-touch">Get In Touch <i className="fal fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-13 col-md-6 col-sm-6">
                        <div className="footer-widget">
                            <h3 className="footer-widget-title">Information</h3>
                            <ul className="widget-items cata-widget">
                                <li className="widget-list-item"><a href="#0">Custom Service</a></li>
                                <li className="widget-list-item"><a href="#0">FAQs</a></li>
                                <li className="widget-list-item"><a href="#0">Ordering Tracking</a></li>
                                <li className="widget-list-item"><a href="#0">Contacts</a></li>
                                <li className="widget-list-item"><a href="#0">Events</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-13 col-md-6 col-sm-6">
                        <h3 className="footer-widget-title">My Account</h3>
                        <ul className="footer-widget">
                            <li className="widget-list-item"><a href="#0">Delivery Infomation</a></li>
                            <li className="widget-list-item"><a href="#0">Privacy Policy</a></li>
                            <li className="widget-list-item"><a href="#0">Discount</a></li>
                            <li className="widget-list-item"><a href="#0">Custom Service</a></li>
                            <li className="widget-list-item"><a href="#0">Terms & Condition</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-25 col-md-6 col-sm-6">
                        <h3 className="footer-widget-title">Get Newsletter</h3>
                        <div className="footer-widget newsletter-widget">
                            <p className="widget-text">Get 10% off your first order! Hurry up</p>
                            <div className="input-div">
                                <input type="email" placeholder="Enter email address" />
                            </div>
                            <a href="#0" className="subscribe-btn">Subscribe Now <i className="fal fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottombar">
                    <div className="app-download">
                        <span className="download-text">Order faster with our App!</span>
                        <a href="http://appstore.com/" target="_blank" className="download-store"><img
                                src="/src/assets/images/items/appstore.jpg" alt="" /></a>
                        <a href="https://play.google.com/store/apps" target="_blank" className="download-store"><img
                                src="/src/assets/images/items/playstore.jpg" alt="" /></a>
                    </div>
                    <div className="payment-methods"><img src="/src/assets/images/footer/payment2.svg" alt="payment-methods" />
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom-area">
            <div className="container">
                <div className="footer-bottom-inner">
                    <span className="copyright">Copyright & Design By <a href="http://reacthemes.com/" className="brand"
                            target="_blank">Reacthemes</a> -2022</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer
