import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import { AuthContext } from '../../contexts/AuthContext'
import { AlertContext } from '../../contexts/AlertContext'
import Login from './Login';

const AdminPanel = () => {
  const { isAuthenticated, checkAuth } = useContext(AuthContext)
  const { alert } = useContext(AlertContext)
  useEffect(() => {
    checkAuth()
  }, [checkAuth])
  
  return (
    <>
      {isAuthenticated ? (
        <>
          <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center pt-2">
              <Link to="/"><img src="/img/logo.png" alt="Company logo" /></Link>
            </div>
          </nav>
          <div className="container-fluid page-body-wrapper">
            <div>
              <Sidebar />
            </div>
            <div className="w-100">
              <Dashboard />
            </div>
          </div>
          {alert && (
            <div className={`alert alert-${alert.type} fixed-top mx-auto w-50 text-center mt-5`} role="alert">
              {alert.message}
            </div>
          )}
        </>
      ) : (
        <Login />
      )}
    </>
  )
}

export default AdminPanel
