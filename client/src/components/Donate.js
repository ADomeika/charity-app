import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Donate = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects')
        setProjects(response.data)
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchProjects()
  }, [])
  return (
    <section
      className="donate-area relative section-gap"
      id="donate"
    >
      <div className="overlay overlay-bg"></div>
        <div className="container">
          <div className="row d-flex justify-content-end">
            <div className="col-lg-6 col-sm-12 pb-80 header-text">
              <h1>Donate Now</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                <br />
                tempor incididunt ut labore  et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 contact-left">
              <div className="single-info">
                <h4>Divided Evenly</h4>
                <p>
                  inappropriate behavior is often laughed off as “boys will be boys,”
                  <br />
                  women face higher conduct women face higher conduct.
                </p>
              </div>
              <div className="single-info">
                <h4>Transperancy All the Way</h4>
                <p>
                  inappropriate behavior is often laughed off as “boys will be boys,”
                  <br />
                  women face higher conduct women face higher conduct.
                </p>
              </div>
              <div className="single-info">
                <h4>Trustworthy</h4>
                <p>
                  inappropriate behavior is often laughed off as “boys will be boys,”
                  <br />
                  women face higher conduct women face higher conduct.
                </p>
              </div>
            </div>
            <div className="col-lg-6 contact-right">
              <form className="booking-form" id="myForm">
                <div className="row">
                  <div className="col-12 form-group">
                    <select
                      id="role"
                      className="form-control p-1"
                    >
                      <option
                        value=""
                        disabled
                      >Choose a project</option>
                      {projects && projects.map(project => (
                        <option
                          value={project.name}
                          key={project._id}
                          className="text-black-50"
                        >{project.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-lg-6 d-flex flex-column">
                  <input
                    name="fname"
                    placeholder="Enter your name"
                    className="form-control mt-20"
                    type="text"
                    required
                  />
                </div>
                <div className="col-lg-6 d-flex flex-column">
                  <input
                    name="email"
                    placeholder="Enter email address"
                    pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                    className="form-control mt-20"
                    required
                    type="email"
                  />
                </div>
                <div className="col-lg-12 d-flex flex-column">
                  <input
                    name="amound"
                    placeholder="Donation amount (GBP)"
                    className="form-control mt-20"
                    required
                    type="text"
                  />

                  <textarea
                    className="form-control mt-20"
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="col-lg-12 d-flex justify-content-end send-btn">
                  <button className="submit-btn primary-btn mt-20 text-uppercase ">Donate<span className="lnr lnr-arrow-right"></span></button>
                </div>

                <div className="alert-msg"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Donate
