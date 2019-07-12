import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({ project: { _id, name, description, imgSrc } }) => (
  <div className="col-lg-4 col-md-4 mb-4">
    <Link to={`/projects/${_id}`} className="d-block text-dark border rounded shadow">
      <div className="project-wrap">
        <div className="single-project">
          <div className="content">
            <div className="content-overlay"></div>
            <img className="content-image img-fluid d-block mx-auto" src={imgSrc} alt="Project presentational pic" />
              <div className="content-details fadeIn-bottom">
                <span className="head-btn btn text-uppercase">Donate Now</span>
              </div>
          </div>
        </div>
        <div className="details px-3">
          <h2>{name}</h2>
          <p>{description.length > 300 ? description.slice(0, 300) + '...' : description}</p>
          <div className="mb-4 d-flex justify-content-center">
            <span className="primary-btn mt-20 text-uppercase text-white">Read more<span className="lnr lnr-arrow-right"></span></span>
          </div>
        </div>
      </div>
    </Link>
  </div>
)

export default Project
