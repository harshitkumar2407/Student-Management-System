import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Login from '../pages/auth/Login'
import Signup from '../pages/auth/Signup'


// Pages
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Contect from '../pages/Contact'
import Courses from '../pages/Courses'
import Department from '../pages/Department'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/about' element={ <AboutUs/>} />
        <Route path='/login' element={ <Login/>} />
        <Route path='/signup' element={ <Signup/>} />
        <Route path='/contact' element={ <Contect  />} />
        <Route path='/courses' element={ <Courses/>}/>
        <Route path='/department' element={ <Department />}/>
      </Routes>
    </div>
  )
}

export default AppRoutes