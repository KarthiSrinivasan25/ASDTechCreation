import './Footer.css';
function Footer() {
    return (
        <footer className="advanced-footer">
            {/*  Animated gradient top border */}
            <div className="footer-top-border"></div>

            <div className="footer-content">
                <div className="container">
                    <div className="row g-4 g-lg-5 ">

                        {/*  Column 1: Brand & Description  */}
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-brand">
                                ASD Tech Creation
                            </div>
                            <p className="mt-3 mb-4" style={{lineHeight: "1.6", color: "#94a3b8"}}>
                                Crafting exceptional digital experiences with cutting-edge technology. We help brands scale through innovative web solutions.
                            </p>
                            {/*  Social Icons - Glass morph  */}
                            <div className="social-icons">
                                <a href="#" className="social-icon" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="social-icon" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#" className="social-icon" aria-label="GitHub"><i className="fab fa-github"></i></a>
                                <a href="#" className="social-icon" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="social-icon" aria-label="Dribbble"><i className="fab fa-dribbble"></i></a>
                            </div>
                        </div>

                        {/*  Column 2: Quick Links  */}
                        <div className="col-lg-2 col-md-6">
                            <h5 className="footer-heading">Explore</h5>
                            <ul className="footer-links">
                                <li><a href="#"><i className="fas fa-chevron-right"></i> Home</a></li>
                                <li><a href="#"><i className="fas fa-chevron-right"></i> About Us</a></li>
                                <li><a href="#"><i className="fas fa-chevron-right"></i> Services</a></li>
                                <li><a href="#"><i className="fas fa-chevron-right"></i> Portfolio</a></li>
                                <li><a href="#"><i className="fas fa-chevron-right"></i> Career</a></li>
                            </ul>
                        </div>

                        {/*  Column 3: Resources  */}
                        <div className="col-lg-2 col-md-6">
                            <h5 className="footer-heading">Resources</h5>
                            <ul className="footer-links">
                                <li><a href="#"><i className="fas fa-chevron-right"></i> Blog</a></li>
                                <li><a href="#"><i className="fas fa-chevron-right"></i> Case Studies</a></li>
                                <li><a href="#"><i className="fas fa-chevron-right"></i> Help Center</a></li>
                                <li><a href="#"><i className="fas fa-chevron-right"></i> Privacy Policy</a></li>
                                <li><a href="#"><i className="fas fa-chevron-right"></i> Terms of Service</a></li>
                            </ul>
                        </div>

                        {/* Column 4: Contact & Newsletter */}
                        <div className="col-lg-4 col-md-6">
                            <h5 className="footer-heading">Connect</h5>
                            <div className="contact-info-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>123 Innovation Hub, Silicon Valley, CA 94025</span>
                            </div>
                            <div className="contact-info-item">
                                <i className="fas fa-envelope"></i>
                                <a href="mailto:asdtechcreation@gmail.com" style={{color:"#cbd5e1", textDecoration:"none"}}>asdtechcreation@gmail.com</a>
                            </div>
                            <div className="contact-info-item">
                                <i className="fas fa-phone-alt"></i>
                                <span>+91 12345 67890</span>
                            </div>

                            {/* Newsletter Subscription  */}
                            {/* <div className="mt-4">
                                <h5 className="footer-heading" style={{marginBottom: "1rem"}}>Stay Updated</h5>
                                <div className="newsletter-form">
                                    <input type="email" className="newsletter-input" placeholder="Your email address" id="newsletterEmail" />
                                    <button className="btn-subscribe" id="subscribeBtn">
                                        <i className="fas fa-paper-plane me-1"></i> Subscribe
                                    </button>
                                </div>
                                <small
                                    className="text-muted mt-2 d-block"
                                    style={{ fontSize: "0.7rem" }}
                                >
                                    Get latest insights & exclusive offers.
                                </small>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>


            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-md-start text-center mb-2 mb-md-0">
                            © 2025 <strong className="text-white">ASD Tech Creation</strong>. All rights reserved. | Designed with <i className="fas fa-heart" style={{color:"#f72585;"}}></i> for innovation
                        </div>
                        <div className="col-md-6 text-md-end text-center">
                            <a href="#" className="me-3">Privacy</a>
                            <a href="#" className="me-3">Cookies</a>
                            <a href="#">Accessibility</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer