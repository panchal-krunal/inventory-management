import {
    ADD_INVENTORY_TYPE,
    ADD_FIELD,
    ADD_OBJECT_TITLE,
    ADD_OBJECT_TYPE,
    REMOVE_FIELD,
    UPDATE_FIELD_NAME,
    UPDATE_FIELD_TYPE
} from '../actionType';

import { nanoid } from 'nanoid';

export const addInventoryType = () => (dispatch) => {
    const typeId = nanoid();
    dispatch({
        type: ADD_INVENTORY_TYPE,
        payload: {
            typeId,
        }
    });
    dispatch(addField('', 'TEXT', typeId))
}
export const addObjectType = (typeId, typeName) => (dispatch) => {
    dispatch({
        type: ADD_OBJECT_TYPE,
        payload: {
            typeId,
            typeName
        }
    })
}

export const addObjectTitle = (typeId, titleFieldId) => (dispatch) => {
    dispatch({
        type: ADD_OBJECT_TITLE,
        payload: {
            typeId,
            titleFieldId
        }
    })
}

export const addField = (fieldName, fieldType, typeId) => (dispatch) => {
    const fieldId = nanoid();
    dispatch({
        type: ADD_FIELD,
        payload: {
            fieldName,
            fieldType,
            fieldId,
            typeId
        }
    })
}

export const updateFieldType = (fieldId, fieldType, typeId) => (dispatch) => {
    dispatch({
        type: UPDATE_FIELD_TYPE,
        payload: {
            fieldId, fieldType, typeId
        }
    })
}

export const updateFieldName = (fieldId, fieldName, typeId) => (dispatch) => {
    dispatch({
        type: UPDATE_FIELD_NAME,
        payload: {
            fieldId, fieldName, typeId
        }
    })
}

export const removeField = (fieldId, typeId) => (dispatch) => {
    dispatch({ type: REMOVE_FIELD, payload: { fieldId, typeId } })
}