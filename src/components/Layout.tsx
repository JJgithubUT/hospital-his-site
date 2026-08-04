import { Link, Outlet, useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation()
  const isActive = (path: string) => (location.pathname === path ? ' active' : '')

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">HospitOS</Link>
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
              <li className={`nav-item${isActive('/')}`}><Link to="/" className="nav-link">Inicio</Link></li>
              <li className={`nav-item${isActive('/about')}`}><Link to="/about" className="nav-link">Quiénes somos</Link></li>
              <li className={`nav-item${isActive('/descargas')}`}><Link to="/descargas" className="nav-link">Descargas</Link></li>
              <li className={`nav-item${isActive('/roles')}`}><Link className="nav-link" to="/roles">Roles</Link></li>
              <li className={`nav-item${isActive('/notas')}`}><Link to="/notas" className="nav-link">Notas</Link></li>
              <li className={`nav-item${isActive('/contact')}`}><Link to="/contact" className="nav-link">Contacto</Link></li>
              <li className="nav-item cta"><Link to="/descargas" className="nav-link"><span>Descargar la app</span></Link></li>
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
                <h2 className="ftco-heading-2">HospitOS</h2>
                <p>El expediente, los signos vitales y la alerta crítica, en el bolsillo de quien está junto a la cama.</p>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Navegación</h2>
                <ul className="list-unstyled">
                  <li><Link to="/" className="py-2 d-block">Inicio</Link></li>
                  <li><Link to="/about" className="py-2 d-block">Quiénes somos</Link></li>
                  <li><Link to="/roles" className="py-2 d-block">Roles</Link></li>
                  <li><Link to="/descargas" className="py-2 d-block">Descargas</Link></li>
                  <li><Link to="/notas" className="py-2 d-block">Notas</Link></li>
                  <li><Link to="/contact" className="py-2 d-block">Contacto</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Contacto</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><a href="mailto:juanjcbreton@gmail.com"><span className="icon icon-envelope"></span><span className="text">juanjcbreton@gmail.com</span></a></li>
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
