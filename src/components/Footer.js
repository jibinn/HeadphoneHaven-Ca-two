// Footer.js

import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="wrapper">
            <main>
                {/* Your main content goes here */}
            </main>
            <footer className="text-center py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Contact Us</h5>
                            <p>Email: cosmicgrab.com</p>
                            <p>Phone: +123 456 7890</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="/">Home</a></li>
                                <li><a href="/products">Products</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Follow Us</h5>
                            <div className="social-icons">
                                <a href="#" className="me-2"><i className="fab fa-facebook"></i></a>
                                <a href="#" className="me-2"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="me-2"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <p>&copy; 2023 Cosmic Grab. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
