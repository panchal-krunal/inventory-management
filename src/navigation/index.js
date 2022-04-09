import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { InventoryScreen, ManageTypeScreen } from '../screens'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<InventoryScreen />} />
                <Route path='/type/:id' element={<InventoryScreen />} />
                <Route path='/types' element={<ManageTypeScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;