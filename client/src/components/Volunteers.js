import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Volunteer from './Volunteer'

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState([])
  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await axios.get('/api/volunteers')
        setVolunteers(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchVolunteers()
  }, [])
  return (
    <section className="volunteer-area section-gap" id="volunteers">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 pb-80 header-text">
            <h1>Our Volunteers</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br /> labore  et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          {volunteers.slice(0, 4).map((volunteer, index) => (
            <Volunteer volunteer={volunteer} key={index} />
          ))}
        </div>
        {volunteers.length > 4 && (
          <div className="mt-4 d-flex justify-content-center">
            <Link className="primary-btn mt-20 text-uppercase" to="/volunteers">See all volunteers<span className="lnr lnr-arrow-right"></span></Link>
          </div>
        )}
      </div>
    </section>
  )
}
export default Volunteers
