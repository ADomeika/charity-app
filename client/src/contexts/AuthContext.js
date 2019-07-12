import React, { Component, createContext } from 'react'

import setAuthToken from '../utils/setAuthToken'

export const AuthContext = createContext()

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: !!localStorage.getItem('user'),
    user: JSON.parse(localStorage.getItem('user'))
  }
  setAuth = (value, data) => {
    this.setState({ isAuthenticated: value })
    if (value) {
      setAuthToken(data.token)
      this.setState({ user: data.user })
      localStorage.setItem('user', JSON.stringify(data.user))
      localStorage.setItem('token', data.token)
    } else {
      setAuthToken()
      this.setState({ user: undefined })
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    }
  }
  checkAuth = () => {
    if (this.state.isAuthenticated) {
      this.setAuth(this.state.isAuthenticated, { user: this.state.user, token: localStorage.getItem('token') })
    } else {
      this.setAuth(false)
    }
  }
  render() {
    return (
      <AuthContext.Provider value={{ ...this.state, setAuth: this.setAuth, checkAuth: this.checkAuth }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}
 
export default AuthContextProvider
