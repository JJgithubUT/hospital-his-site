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
                <h1 className="mb-4 mt-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Everything you get what you need to Host your website</h1>
                <p className="mb-4 mb-md-5 sub-p" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Up to 90% Discount with Free Domain Name Registration</p>
                <p><a href="#" className="btn btn-primary p-3 px-xl-5 py-xl-3">Get started</a> <a href="#" className="btn btn-primary btn-primary-2 p-3 px-xl-5 py-xl-3">Read more</a></p>
              </div>
              <div className="col-md-7 ftco-animate">
                <img src="/template/images/dashboard_full_1.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="slider-item" style={{ backgroundImage: 'url(/template/images/bg_2.jpg)' }}>
          <div className="overlay"></div>
          <div className="container-fluid">
            <div className="row slider-text align-items-center" data-scrollax-parent="true">
              <div className="col-md-5 wrap col-sm-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                <h1 className="mb-4 mt-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">The Web Hosting Platform Made for You</h1>
                <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <p><a href="#" className="btn btn-primary p-3 px-xl-5 py-xl-3">Get started</a> <a href="#" className="btn btn-primary btn-primary-2 p-3 px-xl-5 py-xl-3">Read more</a></p>
              </div>
              <div className="col-md-7 ftco-animate">
                <img src="/template/images/dashboard_full_3.png" className="img-fluid" alt="" />
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

      <section className="ftco-section services-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <h2 className="mb-4">The WebHost Guarantee</h2>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-guarantee"></span>
                  </div>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">100% Uptime Guarantee</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-shield"></span>
                  </div>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Safe and Secured</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-support"></span>
                  </div>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Our Dedicated Support</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-cloud-computing"></span>
                  </div>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Domain Transfer</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-settings"></span>
                  </div>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">DNS Control</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-loading"></span>
                  </div>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Fast Loaded</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-counter img" id="section-counter" style={{ backgroundImage: 'url(/template/images/bg_1.jpg)' }} data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
              <span className="subheading">More than 100,000 websites hosted</span>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number="2000">0</strong>
                      <span>CMS Installation</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number="100">0</strong>
                      <span>Awards Won</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number="32000">0</strong>
                      <span>Registered Domains</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number="31998">0</strong>
                      <span>Satisfied Customers</span>
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
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <span className="subheading">Pricing Plans</span>
              <h2 className="mb-4">Our Best Pricing</h2>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-lg-3 col-md-6 ftco-animate">
              <div className="block-7">
                <div className="text-center">
                  <h2 className="heading">Free</h2>
                  <span className="price"><sup>$</sup> <span className="number">0</span></span>
                  <span className="excerpt d-block">100% free. Forever</span>
                  <h3 className="heading-2 mb-3">Enjoy All The Features</h3>

                  <ul className="pricing-text mb-4">
                    <li><strong>150 GB</strong> Bandwidth</li>
                    <li><strong>100 GB</strong> Storage</li>
                    <li><strong>$1.00 / GB</strong> Overages</li>
                    <li>All features</li>
                  </ul>
                  <a href="#" className="btn btn-primary d-block px-3 py-3 mb-4">Choose Plan</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ftco-animate">
              <div className="block-7">
                <div className="text-center">
                  <h2 className="heading">Startup</h2>
                  <span className="price"><sup>$</sup> <span className="number">19</span></span>
                  <span className="excerpt d-block">All features are included</span>
                  <h3 className="heading-2 mb-3">Enjoy All The Features</h3>

                  <ul className="pricing-text mb-4">
                    <li><strong>450 GB</strong> Bandwidth</li>
                    <li><strong>400 GB</strong> Storage</li>
                    <li><strong>$2.00 / GB</strong> Overages</li>
                    <li>All features</li>
                  </ul>
                  <a href="#" className="btn btn-primary d-block px-3 py-3 mb-4">Choose Plan</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ftco-animate">
              <div className="block-7">
                <div className="text-center">
                  <h2 className="heading">Premium</h2>
                  <span className="price"><sup>$</sup> <span className="number">49</span></span>
                  <span className="excerpt d-block">All features are included</span>
                  <h3 className="heading-2 mb-3">Enjoy All The Features</h3>

                  <ul className="pricing-text mb-4">
                    <li><strong>250 GB</strong> Bandwidth</li>
                    <li><strong>200 GB</strong> Storage</li>
                    <li><strong>$5.00 / GB</strong> Overages</li>
                    <li>All features</li>
                  </ul>
                  <a href="#" className="btn btn-primary d-block px-3 py-3 mb-4">Choose Plan</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ftco-animate">
              <div className="block-7">
                <div className="text-center">
                  <h2 className="heading">Pro</h2>
                  <span className="price"><sup>$</sup> <span className="number">99</span></span>
                  <span className="excerpt d-block">All features are included</span>
                  <h3 className="heading-2 mb-3">Enjoy All The Features</h3>

                  <ul className="pricing-text mb-4">
                    <li><strong>450 GB</strong> Bandwidth</li>
                    <li><strong>400 GB</strong> Storage</li>
                    <li><strong>$20.00 / GB</strong> Overages</li>
                    <li>All features</li>
                  </ul>
                  <a href="#" className="btn btn-primary d-block px-3 py-3 mb-4">Choose Plan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-services">
        <div className="container-wrap">
          <div className="row no-gutters">
            <div className="col-lg-5 img services-img" style={{ backgroundImage: 'url(/template/images/bg_1.jpg)' }} data-stellar-background-ratio="0.5">
              <a href="https://vimeo.com/45830194" className="icon popup-vimeo d-flex justify-content-center align-items-center">
                <span className="icon-play"></span>
              </a>
            </div>
            <div className="col-lg-7">
              <div className="services-wrap p-4 p-md-5">
                <div className="heading-section mb-5 ftco-animate">
                  <h2 className="mb-2">Why Choose Us?</h2>
                  <span className="subheading">Peoples Choice WebHost The Best Web Hosting</span>
                </div>
                <div className="d-md-flex">
                  <div className="one-half mr-4">
                    <div className="list-services d-flex ftco-animate">
                      <div className="icon d-flex order-md-last justify-content-center align-items-center">
                        <span className="flaticon-cloud-computing"></span>
                      </div>
                      <div className="text pl-4 pl-sm-0 pr-md-4 text-md-right">
                        <h3>Free Domain Transfer</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
                      </div>
                    </div>
                    <div className="list-services d-flex ftco-animate">
                      <div className="icon d-flex order-md-last justify-content-center align-items-center">
                        <span className="flaticon-bandwidth"></span>
                      </div>
                      <div className="text pl-4 pl-sm-0 pr-md-4 text-md-right">
                        <h3>Unlimited BandWidth</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
                      </div>
                    </div>
                    <div className="list-services d-flex ftco-animate">
                      <div className="icon d-flex order-md-last justify-content-center align-items-center">
                        <span className="flaticon-shield"></span>
                      </div>
                      <div className="text pl-4 pl-sm-0 pr-md-4 text-md-right">
                        <h3>Security</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
                      </div>
                    </div>
                  </div>

                  <div className="one-half">
                    <div className="list-services d-flex ftco-animate">
                      <div className="icon d-flex justify-content-center align-items-center">
                        <span className="flaticon-guarantee"></span>
                      </div>
                      <div className="text pl-4 pl-sm-0 pl-md-4">
                        <h3>99% Uptime</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
                      </div>
                    </div>
                    <div className="list-services d-flex ftco-animate">
                      <div className="icon d-flex justify-content-center align-items-center">
                        <span className="flaticon-settings"></span>
                      </div>
                      <div className="text pl-4 pl-sm-0 pl-md-4">
                        <h3>Free Website Optimization</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
                      </div>
                    </div>
                    <div className="list-services d-flex ftco-animate">
                      <div className="icon d-flex justify-content-center align-items-center">
                        <span className="flaticon-support"></span>
                      </div>
                      <div className="text pl-4 pl-sm-0 pl-md-4">
                        <h3>24/7 Tech Support</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section testimony-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
              <span className="subheading">Customer Says</span>
              <h2 className="mb-4">Our satisfied customer says</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
            </div>
          </div>
          <div className="row ftco-animate">
            <div className="col-md-12">
              <div className="carousel-testimony owl-carousel ftco-owl">
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="user-img mb-5" style={{ backgroundImage: 'url(/template/images/person_1.jpg)' }}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      <p className="name">Mark Web</p>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="user-img mb-5" style={{ backgroundImage: 'url(/template/images/person_2.jpg)' }}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      <p className="name">Mark Web</p>
                      <span className="position">Interface Designer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="user-img mb-5" style={{ backgroundImage: 'url(/template/images/person_3.jpg)' }}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      <p className="name">Mark Web</p>
                      <span className="position">UI Designer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="user-img mb-5" style={{ backgroundImage: 'url(/template/images/person_1.jpg)' }}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      <p className="name">Mark Web</p>
                      <span className="position">Web Developer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="user-img mb-5" style={{ backgroundImage: 'url(/template/images/person_1.jpg)' }}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      <p className="name">Mark Web</p>
                      <span className="position">System Analyst</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <span className="subheading">Services</span>
              <h2 className="mb-4">How it works</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 nav-link-wrap mb-5 pb-md-5 pb-sm-1 ftco-animate">
              <div className="nav ftco-animate nav-pills justify-content-center text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="v-pills-nextgen-tab" data-toggle="pill" href="#v-pills-nextgen" role="tab" aria-controls="v-pills-nextgen" aria-selected="true">Next gen VPS</a>

                <a className="nav-link" id="v-pills-performance-tab" data-toggle="pill" href="#v-pills-performance" role="tab" aria-controls="v-pills-performance" aria-selected="false">Performance</a>

                <a className="nav-link" id="v-pills-effect-tab" data-toggle="pill" href="#v-pills-effect" role="tab" aria-controls="v-pills-effect" aria-selected="false">Effectiveness</a>
              </div>
            </div>
            <div className="col-md-12 align-items-center ftco-animate">

              <div className="tab-content ftco-animate" id="v-pills-tabContent">

                <div className="tab-pane fade show active" id="v-pills-nextgen" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
                  <div className="d-md-flex">
                    <div className="one-forth align-self-center">
                      <img src="/template/images/dashboard_full_1.jpg" className="img-fluid border" alt="" />
                    </div>
                    <div className="one-half ml-md-5 align-self-center">
                      <h2 className="mb-4">Next gen VPS hosting</h2>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="v-pills-performance" role="tabpanel" aria-labelledby="v-pills-performance-tab">
                  <div className="d-md-flex">
                    <div className="one-forth order-last align-self-center">
                      <img src="/template/images/dashboard_full_2.jpg" className="img-fluid border" alt="" />
                    </div>
                    <div className="one-half order-first mr-md-5 align-self-center">
                      <h2 className="mb-4">Performance VPS hosting</h2>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="v-pills-effect" role="tabpanel" aria-labelledby="v-pills-effect-tab">
                  <div className="d-md-flex">
                    <div className="one-forth align-self-center">
                      <img src="/template/images/dashboard_full_1.jpg" className="img-fluid border" alt="" />
                    </div>
                    <div className="one-half ml-md-5 align-self-center">
                      <h2 className="mb-4">Effective VPS hosting</h2>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-partner">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
              <h2 className="mb-4">Our Clients</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm ftco-animate">
              <a href="#" className="partner"><img src="/template/images/partner-1.png" className="img-fluid" alt="Colorlib Template" /></a>
            </div>
            <div className="col-sm ftco-animate">
              <a href="#" className="partner"><img src="/template/images/partner-2.png" className="img-fluid" alt="Colorlib Template" /></a>
            </div>
            <div className="col-sm ftco-animate">
              <a href="#" className="partner"><img src="/template/images/partner-3.png" className="img-fluid" alt="Colorlib Template" /></a>
            </div>
            <div className="col-sm ftco-animate">
              <a href="#" className="partner"><img src="/template/images/partner-4.png" className="img-fluid" alt="Colorlib Template" /></a>
            </div>
            <div className="col-sm ftco-animate">
              <a href="#" className="partner"><img src="/template/images/partner-5.png" className="img-fluid" alt="Colorlib Template" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <h2>Recent Blog</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
            </div>
          </div>
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
              <div className="blog-entry" data-aos-delay="100">
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
              <div className="blog-entry" data-aos-delay="200">
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
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
