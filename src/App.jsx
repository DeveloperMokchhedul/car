import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UsedCars from './pages/UsedCars'
import Auctions from './pages/Auctions'
import NewCars from './pages/NewCars'
import SellCars from './pages/SellCars'
import LocalDealer from './pages/LocalDealer'
import Support from './pages/Support'
import Navbar from './componenst/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/usedcars' element={<UsedCars />} />
        <Route path='/auctions' element={<Auctions />} />
        <Route path='/newcars' element={<NewCars />} />
        <Route path='/sellcars' element={<SellCars />} />
        <Route path='/localdealers' element={<LocalDealer />} />
        <Route path='/support' element={<Support />} />
      </Routes>

    </>
  )
}

export default App
