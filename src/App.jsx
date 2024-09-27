import { useState } from 'react'
import Navbar from './Components/Header/Navbar'
import Home from './Container/Home/Home'
import ImageSection from './Components/ImageSection/ImageSection'
import GridCard from './Components/GridComponent/GridCard'
import Foooter from './Components/Footer/Foooter'
// import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <ImageSection />
      <GridCard />
      <Foooter/>
    </>
  )
}

export default App
