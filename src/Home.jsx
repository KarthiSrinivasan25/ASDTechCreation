import './home.css';
function Home() {
    return (
        <>
        <section>

       
        <div className="hero-carousel">
            <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">

                    <div
                        className="carousel-item active"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('/home1.jpg')"
                        }}
                    >
                        <div className="carousel-caption">
                            <h1>Innovative Web Solutions</h1>
                            <p>
                                Custom web applications, enterprise platforms, and scalable digital ecosystems built with modern frameworks.
                            </p>

                            <a href="#" className="carousel-btn">
                                Explore Services <i className="fas fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>

                    <div className="carousel-item" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('/home2.jpg')" }}>
                        <div className="carousel-caption">
                            <h1>Mobile App Development</h1>
                            <p>We build high-performance Android and iOS apps with intuitive UI, seamless UX, and scalable architecture.</p>
                            <a href="#" className="carousel-btn">Explore Apps <i className="fas fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>

                    <div className="carousel-item" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('/home3.jpg')" }}>
                        <div className="carousel-caption">
                            <h1>SEO & Digital Growth Solutions</h1>
                            <p>Boost your website ranking with on-page SEO, technical SEO, content optimization, and data-driven digital marketing strategies.</p>
                            <a href="#" className="carousel-btn">Improve Ranking <i className="fas fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

 </section>


 <section class="about-advanced">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-lg-6">
        <span class="about-badge"><i class="fas fa-code me-1"></i> About Us</span>
        <h1 class="about-title">We build websites & apps that deliver real business results.</h1>
        <p class="about-description">ASD Tech Creation is a leading web development company specializing in custom websites, web applications, and e-commerce solutions. We combine cutting-edge technology with user-centered design to create digital experiences that perform.</p>

        <p class="about-description">With over 8 years of experience and 200+ successful projects, we've helped businesses of all sizes establish a powerful online presence. From startups to enterprises, our tailored web solutions deliver measurable growth.</p>
        
      

        <div class="mt-3">
            <div className="culture-tag"><i className="fas fa-code"></i> Full-Stack Development</div>
            <div className="culture-tag"><i className="fab fa-android"></i> Android App Development</div>
            <div className="culture-tag"><i className="fas fa-shield-alt"></i> Security-Focused</div>
            <div className="culture-tag"><i className="fas fa-mobile-alt"></i> Responsive Design</div>
        </div>
      </div>
      
      <div className="col-lg-6">
        <div className="about-image-wrapper">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=700&fit=crop" alt="Web development team" class="img-fluid" />
          <div className="image-gradient-overlay"></div>
          <div className="image-floating-badge">
            <i className="fas fa-chart-line"></i> 10+ Websites & Apps Delivered
          </div>
          <div className="image-decorative-icon">
            <i className="fas fa-laptop-code"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="services-preview">
  <div className="container">
    <div className="section-header">
      <span className="section-badge"><i className="fas fa-cogs me-1"></i> What We Offer</span>
      <h2 className="section-title">Web Development Services</h2>
      <p className="text-secondary">End-to-end web solutions tailored to your business needs</p>
    </div>
    <div className="row g-4">
      {/* <!-- Service 1 --> */}
      <div className="col-lg-4 col-md-6">
        <div className="service-card">
          <div className="service-icon"><i className="fas fa-globe"></i></div>
          <h4>Custom Website Development</h4>
          <p>Bespoke websites built with modern frameworks like React, Next.js, and Laravel for optimal performance and scalability.</p>
          <a href="#" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
        </div>
      </div>
      {/* <!-- Service 2 --> */}
      <div className="col-lg-4 col-md-6">
        <div className="service-card">
          <div className="service-icon"><i className="fas fa-shopping-cart"></i></div>
          <h4>E-Commerce Solutions</h4>
          <p>Powerful online stores with Shopify, WooCommerce, or custom carts — secure payments, inventory, and seamless UX.</p>
          <a href="#" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
        </div>
      </div>
      {/* <!-- Service 3 --> */}
      <div className="col-lg-4 col-md-6">
        <div className="service-card">
          <div className="service-icon"><i className="fas fa-mobile-alt"></i></div>
          <h4>Responsive Web Design</h4>
          <p>Mobile-first designs that look stunning on all devices, improving user engagement and conversion rates.</p>
          <a href="#" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
        </div>
      </div>
      {/* <!-- Service 4 --> */}
      <div className="col-lg-4 col-md-6">
        <div className="service-card">
          <div className="service-icon"><i className="fas fa-database"></i></div>
          <h4>Web Application Development</h4>
          <p>Custom web apps, dashboards, and SaaS platforms with robust backend architecture and real-time features.</p>
          <a href="#" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
        </div>
      </div>
      {/* <!-- Service 5 --> */}
      <div className="col-lg-4 col-md-6">
        <div className="service-card">
          <div className="service-icon"><i className="fas fa-wordpress"></i></div>
          <h4>CMS Development</h4>
          <p>Easy-to-manage websites with WordPress, Webflow, or custom CMS — empowering your content team.</p>
          <a href="#" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
        </div>
      </div>
      {/* <!-- Service 6 --> */}
      <div className="col-lg-4 col-md-6">
        <div className="service-card">
          <div className="service-icon"><i className="fas fa-chart-line"></i></div>
          <h4>SEO & Performance Optimization</h4>
          <p>Lightning-fast load times, Core Web Vitals, and SEO-friendly code to rank higher on search engines.</p>
          <a href="#" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </div>
</section>
        
        </>
    )
}

export default Home