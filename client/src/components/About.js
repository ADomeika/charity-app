import React from 'react'

const About = () => (
  <section className="about-area" id="about">
    <div className="container-fluid">
      <div className="row d-flex justify-content-end align-items-center">
        <div className="col-lg-6 col-md-12 about-left no-padding">
          <img className="img-fluid" src="img/about-img.jpg" alt="" />
        </div>
        <div className="col-lg-6 col-md-12 about-right">
          <h1>A very Lovely Welcome <br />
          to our Company</h1>
          <p>
            inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.
          </p>
          <button className="primary-btn mt-20 text-uppercase ">learn more<span className="lnr lnr-arrow-right"></span></button>
        </div>
      </div>
    </div>
  </section>
)

export default About
