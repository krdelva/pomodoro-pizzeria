import {
  ADD,
  CLEAR,
  DELETE,
  ADD_EXISTING,
  DELETE_EXISTING,
  ADD_ORDER
} from './types.js';


const addToCartReducer = (state = {cart: [], qty: 0, user: {}}, action) => {
  switch (action.type) {
    case ADD:
      return {...state, cart: [...state.cart, {key: action.key, item: action.item, id: action.id, quantity: action.quantity}], qty: state.qty + 1};
    case ADD_EXISTING:
      return {...state, cart: state.cart.filter(ele => action.key !== ele.key).concat([{key: action.key, item: action.item, id: action.id, quantity: action.quantity}]), qty:state.qty + 1};
    case DELETE:
      return {...state, cart: state.cart.filter(ele => action.id !== ele.id), qty: state.qty - 1};
    case DELETE_EXISTING:
      return {...state, cart: state.cart.filter(ele => action.key !== ele.key).concat([{...state.cart[action.i], id: action.id, quantity: action.quantity}]), qty:state.qty - 1 };
    case CLEAR:
      return {...state, cart: [], qty: 0};
    case ADD_ORDER:
      return {...state, user: { id: action.idUser, name: action.name, address: action.address, number: action.number } };
    default:
      return state;
  }
};

export default addToCartReducer;
