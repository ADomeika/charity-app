import React, { useState, useContext } from 'react'
import axios from 'axios'

import { AuthContext } from '../../contexts/AuthContext'

const Login = () => {
  const { setAuth } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/auth', formData)
      setAuth(true, response.data)
    } catch (error) {
      // TODO: Setup proper alert
      alert(error.response.data.error)
    }
  }
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center">
          <div className="row w-100">
            <div className="col-lg-4 mx-auto">
              <div className="auto-form-wrapper">
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <label className="label">Email</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label">Password</label>
                    <div className="input-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="*********"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary submit-btn btn-block" style={{ cursor: 'pointer' }}>Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
