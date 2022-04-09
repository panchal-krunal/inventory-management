import produce from 'immer'
import {
    ADD_INVENTORY,
    ADD_INVENTORY_FIELD_VALUE,
    REMOVE_INVENTORY
} from '../actionType'

/* 
structure for inventory
{
    inventory:{
        typeId:{
            uniqueId:{
                fieldId:value
            },
            uniqueId:{
                fieldId:value
            }
        }
    }

}
*/

let initialState = {
    inventoryList: {}
}

const reducer = produce((draft, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_INVENTORY: {
            const { typeId, inventoryId, fieldValues } = payload
            draft.inventoryList[typeId] = {
                ...draft.inventoryList[typeId],
                [inventoryId]: {
                    ...fieldValues
                }
            }
            return;
        }
        case ADD_INVENTORY_FIELD_VALUE: {
            const { typeId, inventoryId, fieldId, fieldValue } = payload
            draft.inventoryList[typeId][inventoryId][fieldId] = fieldValue
            return;
        }
        case REMOVE_INVENTORY: {
            const { typeId, inventoryId } = payload
            delete draft.inventoryList[typeId][inventoryId]
            return;
        }
        default: return draft
    }

}, initialState)


export default reducer