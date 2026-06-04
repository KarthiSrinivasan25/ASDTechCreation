import BreadCrumb from '../component/BreadCrumb'
import Cta from '../component/Cta'
import JobApplySection from '../component/JobApplySection'
import JobSection from '../component/JobSection'
import './Career.css'

function Career() {
    return (


        <>
            <BreadCrumb pageName="Career" />

            <section className="career-hero">
                <div className="container text-center">
                    <div className="hero-badge"><i className="fas fa-rocket me-2"></i> We're Hiring!</div>
                    <h1>Join Our <span>Dream Team</span><br />Build the Future</h1>
                    <p>Build your career with CodeStack. We're looking for passionate individuals who love technology and innovation.</p>
                </div>
            </section>



            <section className="why-join">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="section-badge"><i className="fas fa-heart me-1"></i> Why Join Us</span>
                        <h2 className="section-title">Benefits & Culture</h2>
                        <p className="text-secondary">We believe in creating an environment where you can thrive</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6"><div className="benefit-card"><div className="benefit-icon"><i className="fas fa-laptop-code"></i></div><h4>Remote Friendly</h4><p>Work from anywhere with flexible hours</p></div></div>
                        <div className="col-lg-3 col-md-6"><div className="benefit-card"><div className="benefit-icon"><i className="fas fa-graduation-cap"></i></div><h4>Learning Budget</h4><p>$2000 annual learning stipend</p></div></div>
                        <div className="col-lg-3 col-md-6"><div className="benefit-card"><div className="benefit-icon"><i className="fas fa-heartbeat"></i></div><h4>Health Insurance</h4><p>Comprehensive medical coverage</p></div></div>
                        <div className="col-lg-3 col-md-6"><div className="benefit-card"><div className="benefit-icon"><i className="fas fa-chart-line"></i></div><h4>Growth Path</h4><p>Clear career progression framework</p></div></div>
                    </div>
                </div>
            </section>


            <JobSection />

            <JobApplySection />


            <Cta prefix="Not Finding" highlight="The Right Fit?" suffix="Let’s Change That."  
            description="We're always looking for talented people. Send us your resume anyway!"
            button1="Send Application" />
        </>
    )
}

export default Career