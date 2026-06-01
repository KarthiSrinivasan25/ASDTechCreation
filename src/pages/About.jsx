import BreadCrumb from "../component/BreadCrumb";
import './About.css'
import htmlIcon from '../assets/icons/html.png'
import cssIcon from '../assets/icons/css.png'
import jsIcon from '../assets/icons/java-script.png'
import bootstrapIcon from '../assets/icons/bootstrap.png'
import reactIcon from '../assets/icons/react.png'
import javaIcon from '../assets/icons/java.png'
import phpIcon from '../assets/icons/php.png'
import mysqlIcon from '../assets/icons/mysql.png'

import web from '../assets/icons/web.png'
import ecommerce from '../assets/icons/ecommerce.png'
import seo from '../assets/icons/seo.png'
import android from '../assets/icons/android.png'
import asd from '../assets/asd_logo.jpg'



function About() {
  return (


    <>
      <BreadCrumb />

      <section className="hero-ring">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="hero-content">
                <div className="hero-badge"><i className="fas fa-code"></i> Web Development Experts</div>
                <h1 className="hero-title">
                  We Build <span className="accent">High-Performance Websites & Apps</span> That Deliver Results
                </h1>
                <p className="hero-desc">ASDTech Creaion is a forward-thinking web development company dedicated to crafting innovative, high-performance digital solutions that help businesses thrive in the modern world.</p>
                <div className="hero-stats">
                  <div className="hero-stat"><div className="hero-stat-number">5+</div><div className="hero-stat-label">Years of Excellence</div></div>
                  <div className="hero-stat"><div className="hero-stat-number">250+</div><div className="hero-stat-label">Projects Delivered</div></div>
                  <div className="hero-stat"><div className="hero-stat-number">98%</div><div className="hero-stat-label">Client Retention</div></div>
                </div>
                <div className="hero-buttons">
                  <a href="contact.html" className="btn-hero-primary"><i className="fas fa-paper-plane"></i> Start Project</a>
                  <a href="#" className="btn-hero-secondary"><i className="fas fa-play-circle"></i> Watch Demo</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image-ring">

                <div className="outer-ring"></div>
                <div className="deco-ring"></div>


                <div className="outer-rotating-ring">
                  <div className="ring-icon outer-icon-1"><img src={htmlIcon} alt="HTML5" /></div>
                  <div className="ring-icon outer-icon-2"><img src={cssIcon} alt="CSS3" /></div>
                  <div className="ring-icon outer-icon-3"><img src={jsIcon} alt="JavaScript" /></div>
                  <div className="ring-icon outer-icon-4"><img src={bootstrapIcon} alt="Bootstrap" /></div>
                  <div className="ring-icon outer-icon-5"><img src={reactIcon} alt="React" /></div>
                  <div className="ring-icon outer-icon-6"><img src={javaIcon} alt="Java" /></div>
                  <div className="ring-icon outer-icon-7"><img src={phpIcon} alt="PHP" /></div>
                  <div className="ring-icon outer-icon-8"><img src={mysqlIcon} alt="MySQL" /></div>
                </div>


                <div className="inner-rotating-ring">
                  <div className="ring-icon inner-icon-1"><img src={web} alt="Web Development" /></div>
                  <div className="ring-icon inner-icon-2"><img src={ecommerce} alt="Android" /></div>
                  <div className="ring-icon inner-icon-3"><img src={seo} alt="SEO" /></div>
                  <div className="ring-icon inner-icon-4"><img src={android} alt="UI/UX Design" /></div>
                  
                </div>


                <div className="center-image">
                  <img src={asd} alt="Team collaboration" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>



  );
}

export default About;