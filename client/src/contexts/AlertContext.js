import React, { Component, createContext } from 'react'

export const AlertContext = createContext()

class AlertContextProvider extends Component {
  state = {
    alert: null
  }
  setAlert = (message = 'Success!', type = 'success', duration = 5000) => {
    this.setState({
      alert: {
        message, type, duration
      }
    })
    setTimeout(() => {
      this.setState({ alert: null })
    }, duration)
  }
  render() {
    return (
      <AlertContext.Provider value={{ ...this.state, setAlert: this.setAlert }}>
        {this.props.children}
      </AlertContext.Provider>
    )
  }
}
 
export default AlertContextProvider
