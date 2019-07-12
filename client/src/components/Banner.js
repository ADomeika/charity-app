import React from 'react'

const Banner = () => (
  <section className="banner-area relative" id="home">
    <div className="overlay overlay-bg"></div>
    <div className="container">
        <div className="row fullscreen align-items-center justify-content-start" style={{ height: '915px' }}>
          <div className="banner-content col-lg-9 col-md-12">
            <h1>
              Your Donation<br />
              Is Others Inspiration
            </h1>
            <a href="#donate" className="head-btn btn text-uppercase">Donate Now</a>
          </div>
        </div>
    </div>
  </section>
)

export default Banner
