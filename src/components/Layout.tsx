import { Link, Outlet, useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation()
  const isActive = (path: string) => (location.pathname === path ? ' active' : '')

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">WebHost</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${isActive('/')}`}><Link to="/" className="nav-link">Home</Link></li>
              <li className={`nav-item${isActive('/about')}`}><Link to="/about" className="nav-link">About</Link></li>
              <li className={`nav-item${isActive('/domain')}`}><Link to="/domain" className="nav-link">Domain</Link></li>
              <li className={`nav-item${isActive('/hosting')}`}><Link className="nav-link" to="/hosting">Hosting</Link></li>
              <li className={`nav-item${isActive('/blog')}`}><Link to="/blog" className="nav-link">Blog</Link></li>
              <li className={`nav-item${isActive('/contact')}`}><Link to="/contact" className="nav-link">Contact</Link></li>
              <li className="nav-item cta"><Link to="/contact" className="nav-link"><span>Get started</span></Link></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* END nav */}

      <Outlet />

      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">WebHost</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Unseful Links</h2>
                <ul className="list-unstyled">
                  <li><a href="#" className="py-2 d-block">Servers</a></li>
                  <li><a href="#" className="py-2 d-block">Windos Hosting</a></li>
                  <li><a href="#" className="py-2 d-block">Cloud Hosting</a></li>
                  <li><a href="#" className="py-2 d-block">OS Servers</a></li>
                  <li><a href="#" className="py-2 d-block">Linux Servers</a></li>
                  <li><a href="#" className="py-2 d-block">Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Navigational</h2>
                <ul className="list-unstyled">
                  <li><a href="#" className="py-2 d-block">Home</a></li>
                  <li><a href="#" className="py-2 d-block">Domain</a></li>
                  <li><a href="#" className="py-2 d-block">Hosting</a></li>
                  <li><a href="#" className="py-2 d-block">About</a></li>
                  <li><a href="#" className="py-2 d-block">Blog</a></li>
                  <li><a href="#" className="py-2 d-block">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Office</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                    <li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
                    <li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noreferrer">Colorlib</a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
