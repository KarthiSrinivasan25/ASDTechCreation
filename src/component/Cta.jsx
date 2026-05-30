import  './Cta.css'
function Cta() {
    return (
        <section className="cta-animated">
            <div className="cta-particles" id="ctaParticles"></div>
            <div className="cta-glow-orb"></div>
            <div className="cta-glow-orb2"></div>
            <div className="container">
                <div className="cta-content">
                    <div className="cta-badge"><i className="fas fa-rocket me-2"></i> Limited Time Offer</div>
                    <h2 className="cta-title">Ready to <span>Transform</span> Your Business?</h2>
                    <p className="cta-description">Join 500+ successful businesses. Get a free consultation and quote today!</p>
                    <div className="cta-buttons">
                        <a href="#" className="btn-cta-primary"><i className="fas fa-paper-plane"></i> Start Project</a>
                        <a href="#" className="btn-cta-secondary"><i className="fas fa-calendar-alt"></i> Free Consultation</a>
                    </div>
                    <div className="cta-trust">
                        <div className="trust-item"><i className="fas fa-check-circle"></i> No upfront payment</div>
                        <div className="trust-item"><i className="fas fa-lock"></i> 100% Satisfaction</div>
                        <div className="trust-item"><i className="fas fa-headset"></i> 24/7 Support</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta