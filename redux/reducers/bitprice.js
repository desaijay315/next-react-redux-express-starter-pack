import {
    FETCH_PRICE
} from '../actions/types';

const initialState = {
    bizpricedata: [],
    loading: true
};

export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case FETCH_PRICE:
        return {
          ...state,
          bizpricedata: payload,
          loading: false
        };
      default:
        return state;
    }
  }