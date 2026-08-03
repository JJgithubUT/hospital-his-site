import { Link } from 'react-router-dom'

function Blog() {
  return (
    <>
      <section className="home-slider owl-carousel">
        <div className="slider-item bread-item" style={{ backgroundImage: 'url(/template/images/bg_1.jpg)' }} data-stellar-background-ratio="0.5">
          <div className="overlay"></div>
          <div className="container-fluid">
            <div className="row slider-text align-items-center justify-content-center" data-scrollax-parent="true">
              <div className="col-md-8 mt-5 text-center col-sm-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><Link to="/">Home</Link></span> <span>Blog</span></p>
                <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Read Blog</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4 ftco-animate">
              <div className="blog-entry">
                <Link to="/blog-single" className="block-20" style={{ backgroundImage: "url('/template/images/image_1.jpg')" }}>
                </Link>
                <div className="text d-flex py-4">
                  <div className="meta mb-3">
                    <div><a href="#">Sep. 20, 2018</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                  </div>
                  <div className="desc pl-3">
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate">
              <div className="blog-entry">
                <Link to="/blog-single" className="block-20" style={{ backgroundImage: "url('/template/images/image_2.jpg')" }}>
                </Link>
                <div className="text d-flex py-4">
                  <div className="meta mb-3">
                    <div><a href="#">Sep. 20, 2018</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                  </div>
                  <div className="desc pl-3">
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate">
              <div className="blog-entry">
                <Link to="/blog-single" className="block-20" style={{ backgroundImage: "url('/template/images/image_3.jpg')" }}>
                </Link>
                <div className="text d-flex py-4">
                  <div className="meta mb-3">
                    <div><a href="#">Sep. 20, 2018</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                  </div>
                  <div className="desc pl-3">
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate">
              <div className="blog-entry">
                <Link to="/blog-single" className="block-20" style={{ backgroundImage: "url('/template/images/image_4.jpg')" }}>
                </Link>
                <div className="text d-flex py-4">
                  <div className="meta mb-3">
                    <div><a href="#">Sep. 20, 2018</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                  </div>
                  <div className="desc pl-3">
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate">
              <div className="blog-entry">
                <Link to="/blog-single" className="block-20" style={{ backgroundImage: "url('/template/images/image_5.jpg')" }}>
                </Link>
                <div className="text d-flex py-4">
                  <div className="meta mb-3">
                    <div><a href="#">Sep. 20, 2018</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                  </div>
                  <div className="desc pl-3">
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate">
              <div className="blog-entry">
                <Link to="/blog-single" className="block-20" style={{ backgroundImage: "url('/template/images/image_6.jpg')" }}>
                </Link>
                <div className="text d-flex py-4">
                  <div className="meta mb-3">
                    <div><a href="#">Sep. 20, 2018</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                  </div>
                  <div className="desc pl-3">
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li><a href="#">&lt;</a></li>
                  <li className="active"><span>1</span></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">&gt;</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
