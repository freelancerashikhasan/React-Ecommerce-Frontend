import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate, Link, useLocation } from 'react-router-dom';

 const useAuth = () => {
    const token = localStorage.getItem('authToken');
    return !!token;
  };

function Header() {
    const { authToken, userEmail, logout, companyInfomation } = useContext(AuthContext);
    const isAuthenticated = useAuth();
    const location = useLocation();
  
    if (isAuthenticated && location.pathname == '/login') {
      return <Navigate to="/" />;
    }
    if (companyInfomation) {
        console.log(companyInfomation);
      } else {
        console.log('Company information or logo is not available.');
      }
    return (
        <>
            <header id="rtsHeader">
                <div className="header-topbar header-topbar3 header-topbar4">
                    <div className="container header-container">
                        <div className="header-top-inner">
                            <h3 className="welcome-text"><i className="rt-truck"></i> Free shipping for all orders of <span
                                    className="value">150$</span></h3>
                            <div className="topbar-action">
                                <a href="#" className="action-item mr--40"><i className="rt-store"></i> Store Location<span
                                        className="separator"></span></a>
                                <a href="#" className="action-item"><i className="rt-location-dot"></i> Track Order</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-wrapper">
                    <div className="navbar-part navbar-part3 navbar-part4">
                        <div className="container">
                            <div className="navbar-inner navbar-inner5">
                                <div className="navbar-search-area">
                                    <div className="search-input-inner">
                                        <select className="custom-select">
                                            <option value="hide">All Catagory</option>
                                            <option value="all">All</option>
                                            <option value="men">Men</option>
                                            <option value="women">Women</option>
                                            <option value="shoes">Shoes</option>
                                            <option value="shoes">Glasses</option>
                                            <option value="shoes">Bags</option>
                                            <option value="shoes">Assesories</option>
                                        </select>
                                        <div className="input-div">
                                            <div className="search-input-icon"><i className="rt-search mr--10"></i>Search</div>
                                            <input className="search-input input5" type="text" placeholder="Keyword here..." />
                                        </div>
                                    </div>
                                </div>
                                <Link to={'/'} className="logo"><img src={`${companyInfomation.website_logo}`} alt="weiboo-logo" style={{ maxHeight: '60px' }} /></Link>
                                <div className="navbar-select-area">
                                    <select className="topbar-select custom-select">
                                        <option value="eng">Eng</option>
                                        <option value="esp">esp</option>
                                        <option value="ban">Ban</option>
                                    </select>
                                    <select className="topbar-select custom-select last-child">
                                        <option value="usd">USD</option>
                                        <option value="eur">Euro</option>
                                        <option value="tk">Taka</option>
                                    </select>
                                </div>
                                <div className="header-action-items header-action-items1">
                                    <div className="search-part">
                                        <div className="search-icon action-item icon"><i className="rt-search"></i></div>
                                        <div className="search-input-area">
                                            <div className="container">
                                                <div className="search-input-inner inner-2">
                                                    <div className="input-div">
                                                        <input className="search-input input4" type="text"
                                                            placeholder="Search by keyword or #" />
                                                    </div>
                                                    <div className="search-close-icon"><i className="rt-xmark"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart action-item">
                                        <div className="cart-nav">
                                            <div className="cart-icon icon"><i className="rt-cart"></i><span
                                                    className="wishlist-dot icon-dot">3</span></div>
                                        </div>
                                    </div>
                                    <div className="wishlist action-item">
                                        <div className="favourite-icon icon"><a href="wishlist.html"><i className="rt-heart"></i></a>
                                        </div>
                                    </div>
                                    {/* {authToken ? (
                                        <Link to={'/'} className="account"><i className="rt-user-2"></i></Link>
                                        ) : (
                                        <Link to={'/login'} className="account"><i className="rt-user-2"></i></Link>
                                    )} */}
                                    
                                    <div className="dropdown">
                                        <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="rt-user-2"></i>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                          
                                            {authToken ? (
                                                <li><button onClick={logout} className='text-center w-100'>Logout</button></li>
                                                ) : (
                                                <li><Link to={'/login'} className="account"><i className="rt-user-2"></i> Login</Link></li>
                                            )}
                                        </ul>
                                       
                                    </div>
                                    </div>
                                <div className="hamburger"><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-sticky lower-navbar-sticky lower-navbar-sticky4">
                    <div className="navbar-part navbar-part2 lower-navbar lower-navbar4">
                        <div className="container">
                            <div className="navbar-inner">
                                <Link to={'/'} className="logo"><img src="/src/assets/images/logo4.svg" alt="umart-logo" /></Link>
                                <div className="navbar-coupon-code">
                                    <div className="icon"><img src="/src/assets/images/icons/percent-tag.png" alt="tag-icon" /></div>
                                    <div className="content">
                                        <span className="title">COUPON CODE</span>
                                        <span className="code">WEIBOO45%</span>
                                    </div>
                                </div>
                                <div className="rts-menu">
                                    <nav className="menus menu-toggle">
                                        <ul className="nav__menu">
                                            <li className="has-dropdown"><a className="menu-item active1" href="#">Home <i
                                                        className="rt-plus"></i></a>
                                                <ul className="dropdown-ul">
                                                    <li className="dropdown-li"><a className="dropdown-link" href="index.html">Main
                                                        Home</a>
                                                    </li>
                                                    <li className="dropdown-li"><a className="dropdown-link"
                                                            href="index-two.html">Fashion
                                                            Home</a>
                                                    </li>
                                                    <li className="dropdown-li"><a className="dropdown-link"
                                                            href="index-nine.html">Fashion
                                                            Home Two</a>
                                                    </li>
                                                    <li className="dropdown-li"><a className="dropdown-link"
                                                            href="index-three.html">Furniture
                                                            Home</a>
                                                    </li>
                                                    <li className="dropdown-li"><a className="dropdown-link"
                                                            href="index-four.html">Decor
                                                            Home</a>
                                                    </li>
                                                    <li className="dropdown-li"><a className="dropdown-link active"
                                                            href="index-five.html">Electronics
                                                            Home</a>
                                                    </li>
                                                    <li className="dropdown-li"><a className="dropdown-link"
                                                            href="index-six.html">Grocery
                                                            Home</a>
                                                    </li>
                                                    <li className="dropdown-li"><a className="dropdown-link"
                                                            href="index-seven.html">Footwear
                                                            Home</a>
                                                    </li>
                                                    <li className="dropdown-li"><a className="dropdown-link"
                                                        href="index-eight.html">Gaming
                                                        Home</a>
                                                    </li>
                                                    <li className="dropdown-li"><a className="dropdown-link"
                                                        href="index-ten.html">Sunglass
                                                        Home</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown"><a className="menu-item" href="#">Shop <i
                                                        className="rt-plus"></i></a>
                                                <ul className="dropdown-ul mega-dropdown">
                                                    <li className="mega-dropdown-li">
                                                        <ul className="mega-dropdown-ul">
                                                            <li className="dropdown-li"><a className="dropdown-link"
                                                                    href="shop.html">Shop</a>
                                                            </li>
                                                            <li className="dropdown-li"><a className="dropdown-link"
                                                                    href="slidebar-left.html">Left Sidebar Shop</a>
                                                            </li>
                                                            <li className="dropdown-li"><a className="dropdown-link"
                                                                    href="slidebar-right.html">Right Sidebar Shop</a>
                                                            </li>
                                                            <li className="dropdown-li"><a className="dropdown-link"
                                                                    href="full-width-shop.html">Full Width Shop</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-dropdown-li">
                                                        <ul className="mega-dropdown-ul">
                                                            <li className="dropdown-li"><a className="dropdown-link"
                                                                    href="product-details.html">Single Product Layout
                                                                    One</a>
                                                            </li>
                                                            <li className="dropdown-li"><a className="dropdown-link"
                                                                    href="product-details2.html">Single Product Layout
                                                                    Two</a>
                                                            </li>
                                                            <li className="dropdown-li"><a className="dropdown-link"
                                                                    href="variable-products.html">Variable Product</a>
                                                            </li>
                                                            <li className="dropdown-li"><a className="dropdown-link"
                                                                    href="grouped-products.html">Grouped Product</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-dropdown-li last-child">
                                                        <ul className="mega-dropdown-ul">
                                                            <li className="dropdown-li"><a className="dropdown-link"
                                                                    href="cart.html">Cart</a>
                                                            </li>
                                                            <li className="dropdown-li"><a className="dropdown-link"
                                                                    href="checkout.html">Checkout</a>
                                                            </li>
                                                            <li className="dropdown-li"><a className="dropdown-link"
                                                                    href="account.html">My Account</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown"><a className="menu-item" href="#">Pages <i
                                                        className="rt-plus"></i></a>
                                                <ul className="dropdown-ul">
                                                    <li className="dropdown-li"><a className="dropdown-link" href="about.html">About</a>
                                                    </li>
                                                    <li className="dropdown-li"><a className="dropdown-link" href="faq.html">F A Q</a>
                                                    </li>
                                                    <li className="dropdown-li"><a className="dropdown-link" href="error.html">Error
                                                            404</a></li>

                                                </ul>
                                            </li>

                                            <li className="has-dropdown"><a className="menu-item" href="#">Blog <i
                                                        className="rt-plus"></i></a>
                                                <ul className="dropdown-ul">
                                                    <li className="dropdown-li"><a className="dropdown-link" href="news.html">Blog</a>
                                                    </li>
                                                    <li className="dropdown-li"><a className="dropdown-link" href="news-grid.html">Blog
                                                            Grid</a></li>
                                                    <li className="dropdown-li"><a className="dropdown-link"
                                                            href="news-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a className="menu-item" href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="contact-info ml-auto">
                                    <span className="title">Get Support</span>
                                    <a href="mailto:info@webmail.com" className="email-address info">info@webexample.com</a>
                                </div>
                                <div className="hamburger"><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-bar">
                    <div className="cart-header">
                        <h3 className="cart-heading">MY CART (3 ITEMS)</h3>
                        <div className="close-cart"><i className="fal fa-times"></i></div>
                    </div>
                    <div className="product-area">
                        <div className="product-item">
                            <div className="product-detail">
                                <div className="product-thumb"><img src="/src/assets/images/slider/image1.jpg" alt="product-thumb" /></div>
                                <div className="item-wrapper">
                                    <span className="product-name">Parachute Jacket</span>
                                    <div className="item-wrapper">
                                        <span className="product-variation"><span className="color">Green /</span>
                                            <span className="size">XL</span></span>
                                    </div>
                                    <div className="item-wrapper">
                                        <span className="product-qnty">3 ×</span>
                                        <span className="product-price">$198.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-edit">
                                <div className="quantity-edit">
                                    <button className="button"><i className="fal fa-minus minus"></i></button>
                                    <input type="text" className="input" value="3" />
                                    <button className="button plus">+<i className="fal fa-plus plus"></i></button>
                                </div>
                                <div className="item-wrapper d-flex mr--5 align-items-center">
                                    <a href="#" className="product-edit"><i className="fal fa-edit"></i></a>
                                    <a href="#" className="delete-cart"><i className="fal fa-times"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="product-detail">
                                <div className="product-thumb"><img src="/src/assets/images/slider/image2.jpg" alt="product-thumb" /></div>
                                <div className="item-wrapper">
                                    <span className="product-name">Narrow Trouser</span>
                                    <div className="item-wrapper">
                                        <span className="product-variation"><span className="color">Green /</span>
                                            <span className="size">XL</span></span>
                                    </div>
                                    <div className="item-wrapper">
                                        <span className="product-qnty">2 ×</span>
                                        <span className="product-price">$88.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-edit">
                                <div className="quantity-edit">
                                    <button className="button"><i className="fal fa-minus minus"></i></button>
                                    <input type="text" className="input" value="2" />
                                    <button className="button plus">+<i className="fal fa-plus plus"></i></button>
                                </div>
                                <div className="item-wrapper d-flex mr--5 align-items-center">
                                    <a href="#" className="product-edit"><i className="fal fa-edit"></i></a>
                                    <a href="#" className="delete-cart"><i className="fal fa-times"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="product-item last-child">
                            <div className="product-detail">
                                <div className="product-thumb"><img src="/src/assets/images/slider/image5.jpg" alt="product-thumb" /></div>
                                <div className="item-wrapper">
                                    <span className="product-name">Bellyless Hoodie</span>
                                    <div className="item-wrapper">
                                        <span className="product-variation"><span className="color">Green /</span>
                                            <span className="size">XL</span></span>
                                    </div>
                                    <div className="item-wrapper">
                                        <span className="product-qnty">1 ×</span>
                                        <span className="product-price">$289.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-edit">
                                <div className="quantity-edit">
                                    <button className="button"><i className="fal fa-minus minus"></i></button>
                                    <input type="text" className="input" value="2" />
                                    <button className="button plus">+<i className="fal fa-plus plus"></i></button>
                                </div>
                                <div className="item-wrapper d-flex mr--5 align-items-center">
                                    <a href="#" className="product-edit"><i className="fal fa-edit"></i></a>
                                    <a href="#" className="delete-cart"><i className="fal fa-times"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-bottom-area">
                        <span className="spend-shipping"><i className="fal fa-truck"></i> SPENT <span className="amount">$199.00</span> MORE
                            FOR FREE SHIPPING</span>
                        <span className="total-price">TOTAL: <span className="price">$556</span></span>
                        <a href="checkout.html" className="checkout-btn cart-btn">PROCEED TO CHECKOUT</a>
                        <a href="cart.html" className="view-btn cart-btn">VIEW CART</a>
                    </div>
                </div>
                <aside className="slide-bar">
                    <div className="offset-sidebar">
                        <a className="hamburger-1 mobile-hamburger-1 mobile-hamburger-2 ml--30" href="#"><span><i className="rt-xmark"></i></span></a>
                    </div>
                    <div className="offset-sidebar-main">
                        <div className="offset-widget mb-40">
                            <div className="info-widget">
                                <img src="/src/assets/images/logo1.svg" alt="" />
                                <p className="mb-30">
                                    We must explain to you how all seds this mistakens idea denouncing pleasures and praising
                                    account.
                                </p>
                            </div>
                            <div className="info-widget info-widget2">
                                <h4 className="offset-title mb-20">Get In Touch </h4>
                                <ul>
                                    <li className="info phone"><a href="tel:78090790890208806803">780 907 908 90, 208 806 803</a>
                                    </li>
                                    <li className="info email"><a href="email:info@webmail.com">info@webmail.com</a></li>
                                    <li className="info web"><a href="www.webexample.html">www.webexample.com</a></li>
                                    <li className="info location">13/A, New Pro State, NYC</li>
                                </ul>
                                <div className="offset-social-link">
                                    <h4 className="offset-title mb-20">Follow Us </h4>
                                    <ul className="social-icon">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="side-mobile-menu side-mobile-menu1 side-mobile-menu2">
                        <ul id="mobile-menu-active">
                            <li className="has-dropdown firstlvl">
                                <a className="mm-link" href="index.html">Home <i className="rt-angle-down"></i></a>
                                <ul className="sub-menu">
                                    <li><a href="index.html">Main Home</a></li>
                                    <li><a href="index-two.html">Fashion Home</a></li>
                                    <li><a href="index-nine.html">Fashion Home Two</a></li>
                                    <li><a href="index-three.html">Furniture Home</a></li>
                                    <li><a href="index-four.html">Decor Home</a></li>
                                    <li><a href="index-five.html">Electronics Home</a></li>
                                    <li><a href="index-six.html">Grocery Home</a></li>
                                    <li><a href="index-seven.html">Footwear Home</a></li>
                                    <li><a href="index-eight.html">Gaming Home</a></li>
                                    <li><a href="index-ten.html">Sunglass Home</a></li>
                                </ul>
                            </li>
                            <li className="has-dropdown firstlvl">
                                <a className="mm-link" href="shop.html">Shop <i className="rt-angle-down"></i></a>
                                <ul className="sub-menu mega-dropdown-mobile">
                                    <li className="mega-dropdown-li">
                                        <ul className="mega-dropdown-ul mm-show">
                                            <li className="dropdown-li"><a className="dropdown-link" href="shop.html">Shop</a>
                                            </li>
                                            <li className="dropdown-li"><a className="dropdown-link" href="slidebar-left.html">Left
                                                    Sidebar
                                                    Shop</a>
                                            </li>
                                            <li className="dropdown-li"><a className="dropdown-link" href="slidebar-right.html">Right
                                                    Sidebar
                                                    Shop</a>
                                            </li>
                                            <li className="dropdown-li"><a className="dropdown-link" href="full-width-shop.html">Full
                                                    Width Shop</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="mega-dropdown-li">
                                        <ul className="mega-dropdown-ul mm-show">
                                            <li className="dropdown-li"><a className="dropdown-link" href="product-details.html">Single
                                                    Product
                                                    Layout
                                                    One</a>
                                            </li>
                                            <li className="dropdown-li"><a className="dropdown-link" href="product-details2.html">Single
                                                    Product Layout
                                                    Two</a>
                                            </li>
                                            <li className="dropdown-li"><a className="dropdown-link"
                                                    href="variable-products.html">Variable Product</a>
                                            </li>
                                            <li className="dropdown-li"><a className="dropdown-link"
                                                    href="grouped-products.html">Grouped Product</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="mega-dropdown-li">
                                        <ul className="mega-dropdown-ul mm-show">
                                            <li className="dropdown-li"><a className="dropdown-link" href="cart.html">Cart
                                                </a>
                                            </li>
                                            <li className="dropdown-li"><a className="dropdown-link" href="checkout.html">Checkout</a>
                                            </li>
                                            <li className="dropdown-li"><a className="dropdown-link" href="account.html">My
                                                    Account</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-dropdown firstlvl">
                                <a className="mm-link" href="index.html">Pages <i className="rt-angle-down"></i></a>
                                <ul className="sub-menu">
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="faq.html">F A Qs</a></li>
                                    <li><a href="error.html">Error 404</a></li>
                                </ul>
                            </li>
                            <li className="has-dropdown firstlvl">
                                <a className="mm-link" href="news.html">Blog <i className="rt-angle-down"></i></a>
                                <ul className="sub-menu">
                                    <li><a href="news.html">Blog</a></li>
                                    <li><a href="news-grid.html">Blog Grid</a></li>
                                    <li><a href="news-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a className="mm-link" href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="header-action-items header-action-items1 header-action-items-side">
                        <div className="search-part">
                            <div className="search-icon action-item icon"><i className="rt-search"></i></div>
                            <div className="search-input-area">
                                <div className="container">
                                    <div className="search-input-inner">
                                        <select id="custom-select">
                                            <option value="hide">All Catagory</option>
                                            <option value="all">All</option>
                                            <option value="men">Men</option>
                                            <option value="women">Women</option>
                                            <option value="shoes">Shoes</option>
                                            <option value="shoes">Glasses</option>
                                            <option value="shoes">Bags</option>
                                            <option value="shoes">Assesories</option>
                                        </select>
                                        <div className="input-div">
                                            <div className="search-input-icon"><i className="rt-search mr--10"></i></div>
                                            <input className="search-input" type="text" placeholder="Search by keyword or #" />
                                        </div>
                                        <div className="search-close-icon"><i className="rt-xmark"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cart action-item">
                            <div className="cart-nav">
                                <div className="cart-icon icon"><i className="rt-cart"></i><span className="wishlist-dot icon-dot">3</span>
                                </div>
                            </div>
                        </div>
                        <div className="wishlist action-item">
                            <div className="favourite-icon icon"><i className="rt-heart"></i><span className="cart-dot icon-dot">0</span>
                            </div>
                        </div>
                        {authToken ? (
                            <Link to={'/'} className="account"><i className="rt-user-2"></i></Link>
                            ) : (
                            <Link to={'/login'} className="account"><i className="rt-user-2"></i></Link>
                        )}
                    </div>
                </aside>
            </header>
        </>
    )
}

export default Header
