import { Link } from 'react-router-dom'

function Domain() {
  return (
    <>
      <section className="home-slider owl-carousel">
        <div className="slider-item bread-item" style={{ backgroundImage: 'url(/template/images/bg_1.jpg)' }} data-stellar-background-ratio="0.5">
          <div className="overlay"></div>
          <div className="container-fluid">
            <div className="row slider-text align-items-center justify-content-center" data-scrollax-parent="true">
              <div className="col-md-8 mt-5 text-center col-sm-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><Link to="/">Inicio</Link></span> <span>Descargas</span></p>
                <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Descargas</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-domain">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 heading-white text-center ftco-animate">
              <h2>Descargar HospitOS</h2>
              <p className="mb-4">Prototipo funcional para Android.</p>
              <a href="/downloads/HospitOS.apk" download className="btn btn-primary p-3 px-xl-5 py-xl-3">Descargar APK</a>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <h2 className="mb-4">Ficha técnica</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 ftco-animate">
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <td><strong>Plataforma</strong></td>
                      <td>Flutter — Android, web y escritorio desde una sola base de código</td>
                    </tr>
                    <tr>
                      <td><strong>Datos</strong></td>
                      <td>Firebase Realtime Database, con suscripciones en vivo</td>
                    </tr>
                    <tr>
                      <td><strong>Arquitectura</strong></td>
                      <td>Toda la lógica en el cliente; sin servidor propio ni servicios de pago</td>
                    </tr>
                    <tr>
                      <td><strong>Interfaz</strong></td>
                      <td>Adaptativa: reloj, teléfono, tablet y televisión</td>
                    </tr>
                    <tr>
                      <td><strong>Identificación</strong></td>
                      <td>Códigos QR generados a partir del identificador del paciente</td>
                    </tr>
                    <tr>
                      <td><strong>Alcance</strong></td>
                      <td>Prototipo funcional (MVP) para demostración</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Domain
