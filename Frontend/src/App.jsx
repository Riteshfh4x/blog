import React from 'react'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Blogs from './pages/Blogs'
import Home from './pages/Home'
import CreateBlog from './pages/CreateBlog'

function App() {

  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin/create/blog' element={<CreateBlog />} />
      </Routes>


    </div>
  )
}

export default App