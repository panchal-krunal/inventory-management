import {
    SAVE_INVENTORY_TYPE,
} from '../actionType'
import produce from 'immer'

let initialState = {
    types: {}
}

const reducer = produce((draft, action) => {
    const { type, payload } = action
    switch (type) {
        case SAVE_INVENTORY_TYPE: {
            const { uniqueId, itemData } = payload
            return draft.types[uniqueId] = itemData
        }
        default: return draft;
    }
}, initialState)
export default reducer;