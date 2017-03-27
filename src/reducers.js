import {
  ADD,
  CLEAR,
  DELETE
} from './types.js';


const addToCartReducer = (state = {cart: []}, action) => {
  switch (action.type) {
    case ADD:
      return {...state, cart: [...state.cart, {item: action.item, id: action.id}]};
    case DELETE:
      return {...state, cart: state.cart.filter(ele => action.id !== ele.id)};
    case CLEAR:
      return {...state, cart: []};
    default:
      return state;
  }
};

export default addToCartReducer;
