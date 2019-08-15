import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Project from './Project'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects')
        setProjects(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchProjects()
  }, [])
  return (
    <section className="project-area section-gap" id="project">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 pb-80 header-text">
            <h1>Waiting for Help</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br /> labore  et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          {projects.length > 0 && projects.slice(0, 3).map((project) => (
            <Project project={project} key={project._id} />
          ))}
        </div>
        {projects.length > 3 && (
          <div className="mt-4 d-flex justify-content-center">
            <Link className="primary-btn mt-20 text-uppercase" to="/projects">See all projects<span className="lnr lnr-arrow-right"></span></Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
