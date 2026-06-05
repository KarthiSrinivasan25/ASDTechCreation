import './Service.css'
import BreadCrumb from "../component/BreadCrumb"
import Hero from "../component/Hero"

function Service() {
    return (

        <>
            <BreadCrumb pageName="Service" />

            <Hero HeroTitlePrefix="Smart Digital Solutions for" HeroTitleSuffix="Modern Businesses" HeroDescription="We build fast, scalable, and user-friendly digital products that help your business grow in the digital world." />

            <section className="why-choose-advanced">
                <div className="container">
                    <div className="text-center mb-4">
                        <span className="section-badge"><i className="fas fa-star me-1"></i> Why Choose Us</span>
                        <h2 className="section-title">The ASDTech Creation Advantage</h2>
                        <p className="text-secondary">We combine innovation, expertise, and dedication to deliver excellence</p>
                    </div>

                    <div className="theory-content-no-card">
                        <p>We create <span className="theory-highlight">modern, high-performance websites</span> that help businesses establish a strong online presence and achieve their goals. Our focus is not just on building websites, but on delivering solutions that are <span className="theory-highlight">visually appealing, user-friendly, mobile responsive, and optimized for growth</span>. From the initial consultation to post-launch support, we work closely with our clients to ensure every project is completed with quality, transparency, and attention to detail.</p>
                        <p>With a commitment to <span className="theory-highlight">timely delivery, affordable pricing, and long-term support</span>, we strive to provide websites that not only look great but also perform effectively for your business. Whether you need a business website, e-commerce platform, or custom web solution, we aim to deliver results that create real value for your brand.</p>
                    </div>

                 
                    <div className="usp-grid">
                        <div className="usp-card">
                            <div className="usp-icon"><i className="fas fa-rocket"></i></div>
                            <h4>Fast & Reliable Delivery</h4>
                            <p>On-time project completion with agile methodology and regular progress updates.</p>
                        </div>
                        <div className="usp-card">
                            <div className="usp-icon"><i className="fas fa-mobile-alt"></i></div>
                            <h4>Mobile Responsive Design</h4>
                            <p>Flawless experience across all devices — phones, tablets, and desktops.</p>
                        </div>
                        <div className="usp-card">
                            <div className="usp-icon"><i className="fas fa-chart-line"></i></div>
                            <h4>SEO-Friendly Development</h4>
                            <p>Clean code and structure that search engines love for better rankings.</p>
                        </div>
                        <div className="usp-card">
                            <div className="usp-icon"><i className="fas fa-briefcase"></i></div>
                            <h4>Custom Business Solutions</h4>
                            <p>Tailored software and platforms built to fit your unique requirements.</p>
                        </div>
                        <div className="usp-card">
                            <div className="usp-icon"><i className="fas fa-tag"></i></div>
                            <h4>Affordable Pricing</h4>
                            <p>Competitive rates without compromising quality — maximum ROI for clients.</p>
                        </div>
                        <div className="usp-card">
                            <div className="usp-icon"><i className="fas fa-headset"></i></div>
                            <h4>Ongoing Support & Maintenance</h4>
                            <p>24/7 assistance, regular updates, security patches, and backups.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-overview">
    <div className="container">
      <div className="text-center mb-5">
        <span className="section-badge"><i className="fas fa-cogs me-1"></i> What We Offer</span>
        <h2 className="section-title">Our Services</h2>
        <p className="text-secondary">Comprehensive solutions for your digital success</p>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6"><div className="service-card"><div className="service-icon"><i className="fas fa-paint-brush"></i></div><h3>Website Design</h3><p>Stunning, responsive designs that captivate your audience and drive engagement.</p><a href="#" className="btn-learn-more">Learn More <i className="fas fa-arrow-right"></i></a></div></div>
        <div className="col-lg-4 col-md-6"><div className="service-card"><div className="service-icon"><i className="fas fa-code"></i></div><h3>Web Development</h3><p>Custom web applications built with modern frameworks like React, Node.js, and Laravel.</p><a href="#" className="btn-learn-more">Learn More <i className="fas fa-arrow-right"></i></a></div></div>
        <div className="col-lg-4 col-md-6"><div className="service-card"><div className="service-icon"><i className="fas fa-shopping-cart"></i></div><h3>E-commerce</h3><p>Powerful online stores with secure payments, inventory management, and seamless UX.</p><a href="#" className="btn-learn-more">Learn More <i className="fas fa-arrow-right"></i></a></div></div>
        <div className="col-lg-4 col-md-6"><div className="service-card"><div className="service-icon"><i className="fas fa-chart-line"></i></div><h3>SEO</h3><p>Boost your rankings with data-driven SEO strategies and optimization.</p><a href="#" className="btn-learn-more">Learn More <i className="fas fa-arrow-right"></i></a></div></div>
        <div className="col-lg-4 col-md-6"><div className="service-card"><div className="service-icon"><i className="fas fa-mobile-alt"></i></div><h3>Mobile App Development</h3><p>Native and cross-platform mobile apps for iOS and Android.</p><a href="#" className="btn-learn-more">Learn More <i className="fas fa-arrow-right"></i></a></div></div>
        <div className="col-lg-4 col-md-6"><div className="service-card"><div className="service-icon"><i className="fas fa-tools"></i></div><h3>Maintenance</h3><p>Ongoing support, updates, and optimization for peak performance.</p><a href="#" className="btn-learn-more">Learn More <i className="fas fa-arrow-right"></i></a></div></div>
      </div>
    </div>
  </section>

        </>


    )
}

export default Service