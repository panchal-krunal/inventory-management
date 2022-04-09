import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { InventoryScreen, ManageTypeScreen } from '../screens'
import Navigationbar from '../pages/Navigationbar'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Navigationbar />
            <Routes>
                <Route path='/' element={<InventoryScreen />} />
                <Route path='/type/:id' element={<InventoryScreen />} />
                <Route path='/types' element={<ManageTypeScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;