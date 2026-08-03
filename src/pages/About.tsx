import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <section className="home-slider owl-carousel">
        <div className="slider-item bread-item" style={{ backgroundImage: 'url(/template/images/bg_1.jpg)' }} data-stellar-background-ratio="0.5">
          <div className="overlay"></div>
          <div className="container-fluid">
            <div className="row slider-text align-items-center justify-content-center" data-scrollax-parent="true">
              <div className="col-md-8 mt-5 text-center col-sm-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><Link to="/">Inicio</Link></span> <span>Quiénes somos</span></p>
                <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Quiénes somos</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row d-md-flex">
            <div className="col-md-6 ftco-animate img about-image" style={{ backgroundImage: 'url(/template/images/about.jpg)' }}>
            </div>
            <div className="col-md-6 ftco-animate p-md-5">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="mb-4">Qué es HospitOS</h2>
                  <p>HospitOS nace de una observación incómoda: la información que decide una urgencia casi nunca está donde ocurre la urgencia. Está en la computadora del control de enfermería, en una hoja impresa que alguien se llevó, en la memoria de quien pasó visita hace dos horas. El personal clínico camina; los datos, no.</p>
                  <p>HospitOS invierte esa relación. Todo el expediente —quién es el paciente, qué se le diagnosticó, cómo respira ahora mismo, qué medicamento le toca y quién se lo dio— vive en el teléfono que el médico y el enfermero ya traen encima. Se abre escaneando el código de la pulsera. Se actualiza solo. Y cuando algo se sale de rango, no espera a que alguien lo consulte: interrumpe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <span className="subheading">Un dispositivo cualquiera</span>
              <h2 className="mb-4">Se adapta a lo que tengas a la mano</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5 ftco-animate">
              <div className="block-10">
                <p>La interfaz se rediseña sola según el aparato que la abre: barra inferior en el teléfono, riel lateral en la tablet, navegación por control remoto en la pantalla de la sala, y una versión comprimida para reloj inteligente donde solo caben los signos y la alerta.</p>
              </div>
            </div>
            <div className="col-md-6 mb-5 ftco-animate">
              <div className="block-10">
                <p>El monitor de cabecera tampoco requiere hardware. Cualquier teléfono puede entrar en Modo Simulador, vincularse a un paciente y comportarse como su monitor de signos vitales, con el código QR en pantalla listo para escanear.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
