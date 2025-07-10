import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import assets from './assets/assets'
import eldenArt from './assets/elden_art.png'

const App = () => {
  return (
    <div className="min-h-screen w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${eldenArt})` }}>
      <Routes>
        <Route path ='/' element={<HomePage />}/>
        <Route path ='/login' element={<LoginPage />}/>
        <Route path ='/profile' element={<ProfilePage />}/>
      </Routes>
    </div>
  )
}

export default App