import './BreadCrumb.css'

function BreadCrumb(){
    return(
        <section className="breadcrumb-advanced-section">
    <div className="breadcrumb-particles" id="breadcrumbParticles"></div>
    <div className="container">
      <div className="breadcrumb-advanced-wrapper">
        <div className="breadcrumb-advanced">
          <div className="breadcrumb-item">
            <a href="index.html">
              <div className="breadcrumb-home-icon">
                <i className="fas fa-home"></i>
              </div>
            </a>
          </div>
          <span className="breadcrumb-separator"><i className="fas fa-chevron-right"></i></span>
          <div className="breadcrumb-item">
            <a href="#"><i className="fas fa-folder"></i> Pages</a>
          </div>
          <span className="breadcrumb-separator"><i className="fas fa-chevron-right"></i></span>
          <div className="breadcrumb-item active">
            <i className="fas fa-info-circle"></i> About Us
          </div>
        </div>
        <div className="page-title">
          <i className="fas fa-info-circle color-white"></i> About CodeStack
        </div>
      </div>
    </div>
  </section>
    )
}

export default BreadCrumb