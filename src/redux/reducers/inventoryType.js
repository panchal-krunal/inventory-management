import {
    ADD_INVENTORY_TYPE,
    ADD_FIELD,
    ADD_OBJECT_TITLE,
    ADD_OBJECT_TYPE,
    REMOVE_FIELD,
    UPDATE_FIELD_TYPE,
    UPDATE_FIELD_NAME
} from '../actionType'
import produce from 'immer'

/* structure of type data 
{
    'typeId':{
        typeId:'', // will be equal to uniqueId
        typeFields:{
            'uniqueId':{
                fieldName:'',
                fieldType:''
            },
            'uniqueId':{
                fieldName:'',
                fieldType:''
            }
        },
        typeName:'',
        typeTitleFieldId:<uniqueFieldId>
    }
}
*/


let initialState = {
    types: {}
}

const reducer = produce((draft, action) => {
    const { type, payload } = action
    switch (type) {
        case ADD_INVENTORY_TYPE: {
            const { typeId } = payload
            draft.types[typeId] = { typeId, typeTitleFieldId: null, typeName: null, typeFields: {} }
            return
        }
        case ADD_FIELD: {
            const { typeId, fieldType, fieldName, fieldId } = payload
            draft.types[typeId].typeFields[fieldId] = {
                fieldType, fieldName
            }
            return
        }
        case ADD_OBJECT_TITLE: {
            const { typeId, titleFieldId } = payload
            draft.types[typeId].typeTitleFieldId = titleFieldId
            return
        }
        case ADD_OBJECT_TYPE: {
            const { typeId, typeName } = payload
            draft.types[typeId].typeName = typeName
            return
        }
        case UPDATE_FIELD_TYPE: {
            const { fieldId, fieldType, typeId } = payload
            draft.types[typeId].typeFields[fieldId].fieldType = fieldType
            return
        }
        case UPDATE_FIELD_NAME: {
            const { fieldId, fieldName, typeId } = payload
            draft.types[typeId].typeFields[fieldId].fieldName = fieldName
            return
        }
        case REMOVE_FIELD: {
            const { fieldId, typeId } = payload
            delete draft.types[typeId].typeFields[fieldId]
            return
        }
        default: return draft;
    }
}, initialState)
export default reducer;