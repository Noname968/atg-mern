import React from 'react'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Post from './components/Post'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
      <Navbar/>
      <Post/>
      <Routes>
        <Route path='/' element={<Register/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
