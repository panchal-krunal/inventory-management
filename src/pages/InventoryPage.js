import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Inventory from '../containers/Inventory'
import { addInventory, addInventoryFieldValue, removeInventory } from '../redux/actions/inventory'

const InventoryPage = ({ typeId }) => {
    const dispatch = useDispatch()
    const {
        inventoryType: { types },
        inventory: { inventoryList }
    } = useSelector(state => state)

    const onAddInventory = async (typeId) => {
        await dispatch(addInventory(typeId))
    }
    const onRemoveInventory = async (typeId, inventoryId) => {
        await dispatch(removeInventory(typeId, inventoryId))
    }
    const onAddInventoryFieldValue = async (typeId, inventoryId, fieldId, fieldValue) => {
        await dispatch(addInventoryFieldValue(typeId, inventoryId, fieldId, fieldValue))
    }
    return (
        <Inventory
            types={types}
            onAddInventory={onAddInventory}
            onRemoveInventory={onRemoveInventory}
            onAddInventoryFieldValue={onAddInventoryFieldValue}
            inventoryList={inventoryList}
            typeId={typeId}
        />
    )
}

export default InventoryPage