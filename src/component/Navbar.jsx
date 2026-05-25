import './Navbar.css';

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg sticky-top" id="mainNavbar">
  <div className="container">
    
   <a className="navbar-brand d-flex align-items-center" href="#">
  <img
    src="/logo.jpg"
    alt="ASDTech-Creation Logo"
    style={{ height: "50px", width: "auto", marginRight: "10px" }}
  />
</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#advancedNavbar" aria-controls="advancedNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

   
    <div className="collapse navbar-collapse" id="advancedNavbar">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
            <li><a className="dropdown-item" href="#">Web Development</a></li>
            <li><a className="dropdown-item" href="#">Mobile Apps</a></li>
            <li><a className="dropdown-item" href="#">UI/UX Design</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Cloud Solutions</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Career</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
      
   
      <div className="d-flex">
        <a href="#" className="btn btn-nav-cta">
          <i className="fas fa-rocket me-2"></i> Get In Touch
        </a>
      </div>
    </div>
  </div>
</nav>
    )
}

    export default Navbar