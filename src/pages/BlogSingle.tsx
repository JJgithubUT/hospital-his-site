import { Link } from 'react-router-dom'

function BlogSingle() {
  return (
    <>
      <section className="home-slider owl-carousel">
        <div className="slider-item bread-item" style={{ backgroundImage: 'url(/template/images/bg_1.jpg)' }} data-stellar-background-ratio="0.5">
          <div className="overlay"></div>
          <div className="container-fluid">
            <div className="row slider-text align-items-center justify-content-center" data-scrollax-parent="true">
              <div className="col-md-8 mt-5 text-center col-sm-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><Link to="/">Inicio</Link></span> <span className="mr-2"><Link to="/notas">Notas</Link></span> <span>Nota de alcance</span></p>
                <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Nota de alcance</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 ftco-animate">
              <p>HospitOS es hoy un prototipo de demostración. Funciona de extremo a extremo, con datos reales moviéndose en tiempo real entre dispositivos, pero corre en un entorno controlado y sin las medidas de seguridad que exigiría un despliegue clínico. Es una prueba de concepto de la idea, no un producto certificado.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogSingle
