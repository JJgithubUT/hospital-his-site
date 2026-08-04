import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
      <section className="home-slider owl-carousel">
        <div className="slider-item bread-item" style={{ backgroundImage: 'url(/template/images/bg_1.jpg)' }} data-stellar-background-ratio="0.5">
          <div className="overlay"></div>
          <div className="container-fluid">
            <div className="row slider-text align-items-center justify-content-center" data-scrollax-parent="true">
              <div className="col-md-8 mt-5 text-center col-sm-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><Link to="/">Inicio</Link></span> <span>Contacto</span></p>
                <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Contacto</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section contact-section ftco-degree-bg">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
            <div className="col-md-12 mb-4">
              <h2 className="h4">Información de contacto</h2>
            </div>
            <div className="w-100"></div>
            <div className="col-md-3">
              <p><span>Email:</span> <a href="mailto:juanjcbreton@gmail.com">juanjcbreton@gmail.com</a></p>
            </div>
          </div>
          <div className="row block-9">
            <div className="col-md-6 pr-md-5">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Tu nombre" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Tu correo" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Asunto" />
                </div>
                <div className="form-group">
                  <textarea name="" id="" cols={30} rows={7} className="form-control" placeholder="Mensaje"></textarea>
                </div>
                <div className="form-group">
                  <input type="submit" value="Enviar mensaje" className="btn btn-primary py-3 px-5" />
                </div>
              </form>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
