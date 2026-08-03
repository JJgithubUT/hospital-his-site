import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="home-slider owl-carousel">
        <div className="slider-item" style={{ backgroundImage: 'url(/template/images/bg_1.jpg)' }}>
          <div className="overlay"></div>
          <div className="container-fluid">
            <div className="row slider-text align-items-center" data-scrollax-parent="true">
              <div className="col-md-5 wrap col-sm-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                <h1 className="mb-4 mt-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">HospitOS — Sistema de Gestión Hospitalaria</h1>
                <p className="mb-4 mb-md-5 sub-p" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">El expediente, los signos vitales y la alerta crítica, en el bolsillo de quien está junto a la cama.</p>
                <p><Link to="/descargas" className="btn btn-primary p-3 px-xl-5 py-xl-3">Descargar la app</Link> <Link to="/about" className="btn btn-primary btn-primary-2 p-3 px-xl-5 py-xl-3">Leer más</Link></p>
              </div>
              <div className="col-md-7 ftco-animate">
                <img src="/template/images/dashboard_full_1.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <h2 className="mb-4">Qué es HospitOS</h2>
              <p>HospitOS nace de una observación incómoda: la información que decide una urgencia casi nunca está donde ocurre la urgencia. Está en la computadora del control de enfermería, en una hoja impresa que alguien se llevó, en la memoria de quien pasó visita hace dos horas. El personal clínico camina; los datos, no. HospitOS invierte esa relación: todo el expediente vive en el teléfono que el médico y el enfermero ya traen encima, se abre escaneando el código de la pulsera, se actualiza solo, y cuando algo se sale de rango, no espera a que alguien lo consulte: interrumpe.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <span className="subheading">Cómo funciona</span>
              <h2 className="mb-4">El recorrido de un turno</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center ftco-animate">
              <div className="steps">
                <div className="icon mb-4 d-flex justify-content-center align-items-center">
                  <span className="flaticon-account"></span>
                </div>
                <h3>01 · Admisión</h3>
                <p>Un formulario de cinco campos crea el expediente en segundos. Queda registrado quién lo abrió.</p>
              </div>
            </div>
            <div className="col-md-4 text-center ftco-animate">
              <div className="steps">
                <div className="icon mb-4 d-flex justify-content-center align-items-center">
                  <span className="flaticon-web-page"></span>
                </div>
                <h3>02 · Identificación</h3>
                <p>Cada paciente lleva un código QR. Escanearlo abre su expediente al instante, sin buscar en listas.</p>
              </div>
            </div>
            <div className="col-md-4 text-center ftco-animate">
              <div className="steps">
                <div className="icon mb-4 d-flex justify-content-center align-items-center">
                  <span className="flaticon-cloud-computing-1"></span>
                </div>
                <h3>03 · Monitoreo</h3>
                <p>El monitor de cabecera publica los signos vitales de forma continua. La lista de pacientes cambia de color sola.</p>
              </div>
            </div>
            <div className="col-md-4 text-center ftco-animate mt-4">
              <div className="steps">
                <div className="icon mb-4 d-flex justify-content-center align-items-center">
                  <span className="flaticon-shield"></span>
                </div>
                <h3>04 · Alerta</h3>
                <p>Si un valor cruza el umbral clínico, el aviso aparece sobre la pantalla del personal, esté donde esté en la app.</p>
              </div>
            </div>
            <div className="col-md-4 text-center ftco-animate mt-4">
              <div className="steps">
                <div className="icon mb-4 d-flex justify-content-center align-items-center">
                  <span className="flaticon-guarantee"></span>
                </div>
                <h3>05 · Medicación</h3>
                <p>El médico receta desde el perfil del paciente; el enfermero marca la dosis y queda firmada con su nombre y la hora.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-md-8 text-center">
              <p><em>Cinco pasos que hoy involucran una computadora fija, dos hojas de papel y una llamada por teléfono.</em></p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-counter img" id="section-counter" style={{ backgroundImage: 'url(/template/images/bg_1.jpg)' }} data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-8 text-center heading-section heading-section-white ftco-animate">
              <span className="subheading">Tiempo real — no hay botón de actualizar</span>
              <p className="mt-3">Cada pantalla está suscrita a los datos que muestra. Cuando el monitor de la cama 204-B publica una saturación de 87 %, la tarjeta de esa paciente se pone roja en el teléfono de todo el personal del piso antes de que nadie haya tocado nada.</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <span className="number">García López María</span>
                      <span>Hab. 204B · DM2 · Sepsis</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <span className="number">CRÍTICO</span>
                      <span>Estado</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <span className="number">112 bpm</span>
                      <span>Frecuencia cardíaca</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <span className="number">87%</span>
                      <span>SpO₂</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <p>Los umbrales de lo que se considera crítico no están escondidos en el código: viven en la base de datos y se ajustan en caliente, porque lo que es alarmante en terapia intensiva no lo es en recuperación.</p>
              <Link to="/descargas" className="btn btn-primary d-inline-block px-4 py-3 mt-3">Descargar la app</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
