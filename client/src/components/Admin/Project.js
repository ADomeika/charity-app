import React, { useState, useEffect, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import { AlertContext } from '../../contexts/AlertContext'

const Project = withRouter(({ match, history }) => {
  const { setAlert } = useContext(AlertContext)
  const [project, setProject] = useState({})

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`/api/projects/${match.params.id}`)
        setProject(response.data)
      } catch (error) {
        history.push('/admin/projects')
      }
    }
    fetchProject()
  }, [match.params.id, history])

  const onSubmit = async (e) => {
    e.preventDefault()
    const updates = {
      name: project.name,
      description: project.description,
      imgSrc: project.imgSrc
    }
    try {
      await axios.patch(`/api/projects/${project._id}`, updates)
      history.push('/admin/projects')
      setAlert('Successfully edited a project', 'success')
    } catch (error) {
      history.push('/admin/projects')
    }
  }

  const onRemoveProject = async () => {
    try {
      await axios.delete(`/api/projects/${project._id}`)
      history.push('/admin/projects')
      setAlert('Successfully removed a project', 'success')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="col-12 py-2">
      {project._id && (
        <>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Project title..."
                value={project.name}
                onChange={(e) => setProject({ ...project, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="5"
                placeholder="Project description..."
                value={project.description}
                onChange={(e) => setProject({ ...project, description: e.target.value })}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="imgUrl">Image URL</label>
              <input
                type="text"
                className="form-control"
                id="imgUrl"
                placeholder="Project image..."
                value={project.imgSrc}
                onChange={(e) => setProject({ ...project, imgSrc: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="btn btn-success btn-lg btn-block"
              style={{ cursor: 'pointer' }}>Save Project</button>
          </form>
          <button
            type="submit"
            className="btn btn-danger btn-lg btn-block mt-2"
            style={{ cursor: 'pointer' }}
            onClick={onRemoveProject}>Remove Project</button>
        </>
      )}
    </div>
  )
})

export default Project
