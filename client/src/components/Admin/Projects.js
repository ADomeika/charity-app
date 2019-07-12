import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { AuthContext } from '../../contexts/AuthContext'

const Projects = () => {
  const { user } = useContext(AuthContext)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects')
        setProjects(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProjects()
  }, [])
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-end pr-5">
        <Link type="button" className="btn btn-primary my-2" to="/admin/projects/new">Create a new project</Link>
      </div>
      {projects.length > 0 ? projects.map((project) => (
        <div className="col-12 col-sm-6 col-md-4 col-xl-3 py-2" key={project._id}>
          <div className="card">
            <img src={project.imgSrc} className="card-img-top" alt="Project presentational img" />
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text">{
                project.description.length > 250 ?
                project.description.slice(0, 250) + '...' :
                project.description
              }</p>
              <footer className="blockquote-footer mb-2">Created By: <cite title="Source Title">{project.createdBy.name}</cite></footer>
              {(user._id === project.createdBy._id || user.role === 'developer' || user.role === 'superadmin') && (
                <Link
                  to={`/admin/projects/${project._id}`}
                  className="btn btn-primary"
                >Edit project</Link>
              )}
            </div>
          </div>
        </div>
      )) : (
        <div className="d-flex justify-content-center col-12 py-2">
          <h2>There are no projects yet</h2>
        </div>
      )}
    </div>
  )
}

export default Projects
