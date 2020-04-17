import {
    FETCH_PRICE
} from './types';

import axios from 'axios';

export const fetbizPrice = () => async dispatch => {
    try {
        const res = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        dispatch({
            type: FETCH_PRICE,
            payload:  res.data
        });

    } catch (error) {
        console.log(error);
    }
}