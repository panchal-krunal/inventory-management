import { combineReducers } from 'redux'
import inventoryType from './inventoryType'
import inventory from './inventory'

const rootReducer = combineReducers({
    inventoryType,
    inventory
})

export default rootReducer