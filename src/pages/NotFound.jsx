import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="error-area">
        <div className="content-area">
            <div className="container">
                <div className="error-404">
                    <div className="section-inner">
                        <div className="error-img">
                            <img src="../src/assets/images/error/404-1.png" alt="error-img" />
                        </div>
                        <div className="title">
                            <h2 className="sub-title">Page not found</h2>
                            <h3 className="sect-title">Sorry, we could not find the page you where looking for. We suggest <br /> that you return to homepage.</h3>
                        </div>
                        <div className="section-button">
                            <Link to="/"><i className="fal fa-long-arrow-left"></i> Go To Homepage</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default NotFound
