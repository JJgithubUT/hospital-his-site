import { Link } from 'react-router-dom'

function Hosting() {
  return (
    <>
      <section className="home-slider owl-carousel">
        <div className="slider-item bread-item" style={{ backgroundImage: 'url(/template/images/bg_1.jpg)' }} data-stellar-background-ratio="0.5">
          <div className="overlay"></div>
          <div className="container-fluid">
            <div className="row slider-text align-items-center justify-content-center" data-scrollax-parent="true">
              <div className="col-md-8 mt-5 text-center col-sm-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><Link to="/">Inicio</Link></span> <span>Roles</span></p>
                <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Roles</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <span className="subheading">Un sistema, cuatro oficios</span>
              <h2 className="mb-4">Cada quien ve lo que le toca</h2>
              <p>Nadie navega entre pantallas que no le tocan. El acceso también se adapta al oficio: el personal clínico entra con un código corto y un PIN de seis dígitos —rápido, con las manos ocupadas, con guantes puestos—; el personal de gestión, con correo y contraseña.</p>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-lg-3 col-md-6 ftco-animate">
              <div className="block-7">
                <div className="text-center">
                  <h2 className="heading">Médico</h2>
                  <h3 className="heading-2 mb-3">Admisión y prescripción</h3>
                  <ul className="pricing-text mb-4">
                    <li>Admite pacientes</li>
                    <li>Revisa signos vitales</li>
                    <li>Prescribe desde el expediente</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ftco-animate">
              <div className="block-7">
                <div className="text-center">
                  <h2 className="heading">Enfermero</h2>
                  <h3 className="heading-2 mb-3">Administración de dosis</h3>
                  <ul className="pricing-text mb-4">
                    <li>Ve las dosis pendientes del turno</li>
                    <li>Firma cada administración</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ftco-animate">
              <div className="block-7">
                <div className="text-center">
                  <h2 className="heading">Farmacéutico</h2>
                  <h3 className="heading-2 mb-3">Inventario</h3>
                  <ul className="pricing-text mb-4">
                    <li>Ajusta el inventario desde el estante</li>
                    <li>Con el teléfono en la mano</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ftco-animate">
              <div className="block-7">
                <div className="text-center">
                  <h2 className="heading">Administrador</h2>
                  <h3 className="heading-2 mb-3">Gestión de accesos</h3>
                  <ul className="pricing-text mb-4">
                    <li>Da de alta accesos</li>
                    <li>Desactiva usuarios</li>
                    <li>Supervisa el piso completo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hosting
