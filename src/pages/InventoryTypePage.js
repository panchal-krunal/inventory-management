import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InventoryType from '../containers/InventoryType'
import { addField, addInventoryType, addObjectTitle, addObjectType, removeField, updateFieldName, updateFieldType } from '../redux/actions/inventoryType'

const InventoryTypePage = () => {
    const dispatch = useDispatch()
    const {
        inventoryType: { types }
    } = useSelector(state => state)

    const onAddInventoryTypeClick = async () => {
        await dispatch(addInventoryType())
    }

    const onAddFieldClick = async (fieldType, typeId) => {
        await dispatch(addField('', fieldType, typeId))
    }

    const onRemoveFieldClick = async (typeId, fieldId) => {
        await dispatch(removeField(fieldId, typeId))
    }

    const onTypeNameChange = async (typeId, typeName) => {
        await dispatch(addObjectType(typeId, typeName))
    }

    const onTypeTitleFieldChange = async (typeId, typeFieldId) => {
        await dispatch(addObjectTitle(typeId, typeFieldId))
    }

    const onFeildTypeChange = async (fieldId, fieldType, typeId) => {
        await dispatch(updateFieldType(fieldId, fieldType, typeId))
    }

    const onFeildNameChange = async (fieldId, fieldName, typeId) => {
        await dispatch(updateFieldName(fieldId, fieldName, typeId))
    }

    return <InventoryType
        onAddInventoryTypeClick={onAddInventoryTypeClick}
        onAddFieldClick={onAddFieldClick}
        onRemoveFieldClick={onRemoveFieldClick}
        types={types}
        onTypeNameChange={onTypeNameChange}
        onTypeTitleFieldChange={onTypeTitleFieldChange}
        onFeildTypeChange={onFeildTypeChange}
        onFeildNameChange={onFeildNameChange}
    />
}
export default InventoryTypePage