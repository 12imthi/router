import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import All from './compound/All'
import Menu from './compound/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FullStack from './compound/FullStack'
import DataScience from './compound/DataScience'
import CyberSecurity from './compound/CyberSecurity'
import Career from './compound/Career'

function App() {

  return (
    <>
     <BrowserRouter>
     <Menu />
     <Routes>
      <Route  path='/' element={<All />} />
      <Route  path='/fullstack' element={<FullStack />} />
      <Route  path='/datascience' element={<DataScience />} />
      <Route  path='/cybersecurity' element={<CyberSecurity />} />
      <Route  path='/career' element={<Career />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
