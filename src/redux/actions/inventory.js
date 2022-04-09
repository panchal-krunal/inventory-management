import {
    ADD_INVENTORY,
    ADD_INVENTORY_FIELD_VALUE,
    REMOVE_INVENTORY
} from '../actionType'
import { nanoid } from 'nanoid';

export const addInventory = (typeId) => (dispatch, getState) => {
    const inventoryId = nanoid()
    const fields = getState().inventoryType.types[typeId].typeFields
    let fieldValues = {}
    fields && Object.keys(fields).length > 0 && Object.keys(fields).map((item, _) => {
        fieldValues[item] = ''
    })
    dispatch({
        type: ADD_INVENTORY,
        payload: {
            typeId,
            inventoryId,
            fieldValues
        }
    })
}

export const removeInventory = (typeId, inventoryId) => dispatch => {
    dispatch({
        type: REMOVE_INVENTORY,
        payload: {
            typeId,
            inventoryId
        }
    })
}

export const addInventoryFieldValue = (typeId, inventoryId, fieldId, fieldValue) => dispatch => {
    dispatch({
        type: ADD_INVENTORY_FIELD_VALUE,
        payload: {
            typeId,
            inventoryId,
            fieldId,
            fieldValue
        }
    })
}