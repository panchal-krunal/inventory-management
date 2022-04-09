import {
    SAVE_INVENTORY_TYPE,
} from '../actionType';
import { nanoid } from 'nanoid';

export const saveInventoryType = (itemData) => (dispatch) => {
    const uniqueId = nanoid();
    dispatch({
        type: SAVE_INVENTORY_TYPE,
        payload: {
            uniqueId,
            itemData
        }
    });
}