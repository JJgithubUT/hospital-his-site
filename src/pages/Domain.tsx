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
                <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><Link to="/">Home</Link></span> <span>Domain</span></p>
                <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Domain Hosting</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-domain">
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-5 heading-white mb-4 mb-sm-4 mb-lg-0 ftco-animate">
              <h2>Search You Domain Name</h2>
              <p>A small river named Duden flows by their place</p>
            </div>
            <div className="col-lg-7 ftco-wrap ftco-animate">
              <form className="domain-form d-flex" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group domain-name">
                  <input type="text" className="form-control name px-4" placeholder="Enter your domain name..." />
                </div>
                <div className="form-group domain-select d-flex">
                  <div className="select-wrap">
                    <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                    <select name="" id="" className="form-control">
                      <option value="">.com</option>
                      <option value="">.net</option>
                      <option value="">.biz</option>
                      <option value="">.co</option>
                      <option value="">.me</option>
                    </select>
                  </div>
                  <input type="submit" className="search-domain btn btn-primary text-center" value="Search" />
                </div>
              </form>
              <p className="domain-price mt-2"><span><small>.com</small> $9.75</span> <span><small>.net</small> $9.50</span> <span><small>.biz</small> $8.95</span> <span><small>.co</small> $7.80</span><span><small>.me</small> $7.95</span></p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <h2 className="mb-4">Domain Pricing</h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 ftco-animate">
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-primary">
                    <tr>
                      <th>TLD</th>
                      <th>Duration</th>
                      <th>Registration</th>
                      <th>Renewal</th>
                      <th>Transfer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>.com</td>
                      <td>1 Year</td>
                      <td>$70.00</td>
                      <td>$5.00</td>
                      <td>$5.00</td>
                    </tr>
                    <tr>
                      <td>.net</td>
                      <td>1 Year</td>
                      <td>$75.00</td>
                      <td>$5.00</td>
                      <td>$5.00</td>
                    </tr>
                    <tr>
                      <td>.org</td>
                      <td>1 Year</td>
                      <td>$65.00</td>
                      <td>$5.00</td>
                      <td>$5.00</td>
                    </tr>
                    <tr>
                      <td>.biz</td>
                      <td>1 Year</td>
                      <td>$60.00</td>
                      <td>$5.00</td>
                      <td>$5.00</td>
                    </tr>
                    <tr>
                      <td>.info</td>
                      <td>1 Year</td>
                      <td>$50.00</td>
                      <td>$5.00</td>
                      <td>$5.00</td>
                    </tr>
                    <tr>
                      <td>.me</td>
                      <td>1 Year</td>
                      <td>$45.00</td>
                      <td>$5.00</td>
                      <td>$5.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <h2 className="mb-4">Your Question</h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 ftco-animate">
              <div id="accordion">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <a className="card-link" data-toggle="collapse" href="#menuone" aria-expanded="true" aria-controls="menuone">What is your domain name? <span className="collapsed"><i className="icon-plus-circle"></i></span><span className="expanded"><i className="icon-minus-circle"></i></span></a>
                      </div>
                      <div id="menuone" className="collapse show">
                        <div className="card-body">
                          <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <a className="card-link" data-toggle="collapse" href="#menutwo" aria-expanded="false" aria-controls="menutwo">How long is my domain name valid? <span className="collapsed"><i className="icon-plus-circle"></i></span><span className="expanded"><i className="icon-minus-circle"></i></span></a>
                      </div>
                      <div id="menutwo" className="collapse">
                        <div className="card-body">
                          <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <a className="card-link" data-toggle="collapse" href="#menu3" aria-expanded="false" aria-controls="menu3">Can I sell my domain name? <span className="collapsed"><i className="icon-plus-circle"></i></span><span className="expanded"><i className="icon-minus-circle"></i></span></a>
                      </div>
                      <div id="menu3" className="collapse">
                        <div className="card-body">
                          <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <a className="card-link" data-toggle="collapse" href="#menu4" aria-expanded="false" aria-controls="menu4">Can I cancel a domain? <span className="collapsed"><i className="icon-plus-circle"></i></span><span className="expanded"><i className="icon-minus-circle"></i></span></a>
                      </div>
                      <div id="menu4" className="collapse">
                        <div className="card-body">
                          <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <a className="card-link" data-toggle="collapse" href="#menu5" aria-expanded="false" aria-controls="menu5">How do I transfer a domain name? <span className="collapsed"><i className="icon-plus-circle"></i></span><span className="expanded"><i className="icon-minus-circle"></i></span></a>
                      </div>
                      <div id="menu5" className="collapse">
                        <div className="card-body">
                          <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <a className="card-link" data-toggle="collapse" href="#menu6" aria-expanded="false" aria-controls="menu6">How do I setup URL forwarding? <span className="collapsed"><i className="icon-plus-circle"></i></span><span className="expanded"><i className="icon-minus-circle"></i></span></a>
                      </div>
                      <div id="menu6" className="collapse">
                        <div className="card-body">
                          <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Domain
