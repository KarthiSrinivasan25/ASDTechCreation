import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top" id="mainNavbar">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/asd_logo.png"
            alt="ASDTech-Creation Logo"
            style={{
              height: "60px",
              width: "auto",
              marginRight: "10px",
            }}
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#advancedNavbar"
          aria-controls="advancedNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="advancedNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ cursor: "pointer" }}
              >
                Services
              </span>

              <ul className="dropdown-menu">

                {/* Main Services Page */}
                <li>
                  <Link className="dropdown-item fw-bold" to="/service">
                    All Services
                  </Link>
                </li>

                <li><hr className="dropdown-divider" /></li>

                {/* Individual Services */}
                <li>
                  <Link className="dropdown-item" to="/web-development">
                    Web Development
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/mobile-apps">
                    Mobile Apps
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/ui-ux-design">
                    UI/UX Design
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/cloud-solutions">
                    Cloud Solutions
                  </Link>
                </li>

              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/career">
                Career
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

          </ul>

          {/* CTA Button */}
          <div className="d-flex">
            <Link to="/contact" className="btn btn-nav-cta">
              <i className="fas fa-rocket me-2"></i>
              Get In Touch
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;