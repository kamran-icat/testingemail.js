import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Mens from './Mens'
import Womens from './Womens'
import Kids from './Kids'
import "./App.css"
import Contact from './Contact'


function App() {
  return (
    <div>
    <div className='navbar'>
     <Link className='link' to="/" >HOME</Link>
     <Link className='link'  to="/mens" >MENS</Link>
     <Link className='link' to="/womens">WOMENS</Link>
     <Link className='link' to="/kids">KIDS</Link>
     <Link className='link' to="/contact" >Contact</Link>
    </div>


<Routes>
  <Route path="/"  element={<Home />} />
  <Route path="/mens" element={<Mens />} />
  <Route path="/womens"  element={<Womens />}/>
  <Route path="/kids" element={<Kids/>} />
  <Route path='/contact'  element={<Contact />} />
</Routes>
    </div>
  )
}

export default App
