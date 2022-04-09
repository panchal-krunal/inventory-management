import React from 'react'
import InventoryPage from '../pages/InventoryPage'
import { useParams } from 'react-router-dom';

const InventoryScreen = () => {
    const { id } = useParams()
    return (
        <InventoryPage typeId={id} />
    )
}

export default InventoryScreen