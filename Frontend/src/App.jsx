import React from 'react'

import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import "./style/Variables.css"
import AppRoutes from './routes/AppRoutes'




const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes/>
      <Footer />
    </>
  )
}

export default App