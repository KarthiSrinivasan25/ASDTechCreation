import './Cta.css'
function Cta(props) {
    return (
        <section className="cta-animated">
            <div className="cta-particles" id="ctaParticles"></div>
            <div className="cta-glow-orb"></div>
            <div className="cta-glow-orb2"></div>
            <div className="container">
                <div className="cta-content">
                    
                    {props.badgeName && (<div className="cta-badge"><i className="fas fa-rocket me-2"></i> {props.badgeName}</div> )}
                    <h2 className="cta-title">
                        {props.prefix} <span>{props.highlight}</span> {props.suffix}
                    </h2>
                    
                    
                    {props.description && (<p className="cta-description">{props.description}</p>)}
                    
                    <div className="cta-buttons">
                        {props.button1 && (<a href="#" className="btn-cta-primary"><i className="fas fa-paper-plane"></i> {props.button1}</a> )}

                        {props.button2 && (<a href="#" className="btn-cta-secondary"><i className="fas fa-calendar-alt"></i> {props.button2}</a> )}
                    </div>
                    <div className="cta-trust">
                        {props.trust1 && (<div className="trust-item"><i className="fas fa-check-circle"></i> {props.trust1}</div> )}

                      {props.trust2 &&  (<div className="trust-item"><i className="fas fa-lock"></i> {props.trust2}</div> )}

                       {props.trust3 && ( <div className="trust-item"><i className="fas fa-headset"></i> {props.trust3}</div> )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta



// import { useEffect } from "react";
// import './Cta.css';

// function Cta() {

//     useEffect(() => {
//         const container = document.getElementById('ctaParticles');
//         if (!container) return;

//         container.innerHTML = ""; // important (duplicate avoid)

//         for (let i = 0; i < 50; i++) {
//             const particle = document.createElement('div');
//             particle.classList.add('cta-particle');

//             const size = Math.random() * 4 + 2;
//             particle.style.width = size + 'px';
//             particle.style.height = size + 'px';

//             particle.style.left = Math.random() * 100 + '%';
//             particle.style.animationDuration = Math.random() * 15 + 10 + 's';
//             particle.style.animationDelay = Math.random() * 5 + 's';

//             container.appendChild(particle);
//         }

//     }, []);

//     return (
//         <section className="cta-animated">
//             <div className="cta-particles" id="ctaParticles"></div>
//             <div className="cta-glow-orb"></div>
//             <div className="cta-glow-orb2"></div>

//             <div className="container">
//                 <div className="cta-content">
//                     <div className="cta-badge">
//                         <i className="fas fa-rocket me-2"></i> Limited Time Offer
//                     </div>

//                     <h2 className="cta-title">
//                         Ready to <span>Transform</span> Your Business?
//                     </h2>

//                     <p className="cta-description">
//                         Join 500+ successful businesses. Get a free consultation and quote today!
//                     </p>

//                     <div className="cta-buttons">
//                         <a href="#" className="btn-cta-primary">Start Project</a>
//                         <a href="#" className="btn-cta-secondary">Free Consultation</a>
//                     </div>

//                     <div className="cta-trust">
//                         <div className="trust-item">No upfront payment</div>
//                         <div className="trust-item">100% Satisfaction</div>
//                         <div className="trust-item">24/7 Support</div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Cta;