import React from 'react'
import Store from '../pages/Store'
import Mac from '../pages/Mac'
import Watch from '../pages/Watch'
import AirPods from '../pages/AirPods'
import TVandHome from '../pages/TVandHome'
import Entertainment from '../pages/Entertainment'
import Accessories from '../pages/Accessories'
import Support from '../pages/Support'
import Logo from '../pages/Logo'
import { Route, Routes } from 'react-router-dom'
import IPad from '../pages/IPad'
import IPhone from '../pages/IPhone'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/store" element={<Store/>}></Route>
            <Route path="/mac" element={<Mac/>}></Route>
            <Route path='/ipad' element={<IPad/>}></Route>
            <Route path='/iphone' element={<IPhone/>}></Route>
            <Route path="/watch" element={<Watch/>}></Route>
            <Route path="/airPods" element={<AirPods/>}></Route>
            <Route path="/TV&Home" element={<TVandHome/>}></Route>
            <Route path="/Entertainment" element={<Entertainment/>}></Route>
            <Route path="/Accessories" element={<Accessories/>}></Route>
            <Route path="/Support" element={<Support/>}></Route>
            <Route path="/" element={<Logo/>}></Route>
        </Routes>
    </>
  )
}

export default AllRoutes