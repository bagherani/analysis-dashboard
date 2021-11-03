import axios from 'axios';
import { ACTIONS, API_ROOT } from '../constants'

export const getAll = (data) => async dispatch => {
    dispatch({ type: ACTIONS.TRANSACTIONS_BEGIN_GET });
    try {
        const res = await axios.get(`${API_ROOT}/transactions`);
        var result = res.response;

        if (!result.isSuccess)
            throw result.message;

        dispatch({ type: ACTIONS.TRANSACTIONS_RECEIVED, payload: result.payload });
    } catch (e) {
        dispatch({ type: ACTIONS.TRANSACTIONS_RECEIVED, error: e });
        throw e;
    }
}