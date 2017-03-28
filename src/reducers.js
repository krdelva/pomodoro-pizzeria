import {
  ADD,
  CLEAR,
  DELETE,
  ADD_EXISTING,
  DELETE_EXISTING
} from './types.js';


const addToCartReducer = (state = {cart: []}, action) => {
  switch (action.type) {
    case ADD:
      return {...state, cart: [...state.cart, {key: action.key, item: action.item, id: action.id, quantity: action.quantity}]};
    case ADD_EXISTING:
      return {...state, cart: state.cart.filter(ele => action.key !== ele.key).concat([{key: action.key, item: action.item, id: action.id, quantity: action.quantity}])};
    case DELETE:
      return {...state, cart: state.cart.filter(ele => action.id !== ele.id)};
    case DELETE_EXISTING:
      return {...state, cart: state.cart.filter(ele => action.id - 1 !== ele.id).concat([{...state.cart[action.i], id: action.id, quantity: action.quantity}]) };
    case CLEAR:
      return {...state, cart: []};
    default:
      return state;
  }
};

export default addToCartReducer;
