import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Callto from './components/Callto'
import Projects from './components/Projects'
import About from './components/About'
import Volunteers from './components/Volunteers'
import Donate from './components/Donate'
import Footer from './components/Footer'
import AdminPanel from './components/Admin/AdminPanel'

import AuthContextProvider from './contexts/AuthContext';
import AlertContextProvider from './contexts/AlertContext';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <AuthContextProvider>
            <AlertContextProvider>
              <AdminPanel />
            </AlertContextProvider>
          </AuthContextProvider>
        </Route>
        <Route path="*">
          <Navbar />
          <Banner />
          <Callto />
          <Projects />
          <About />
          <Volunteers />
          <Donate />
          <Footer />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
