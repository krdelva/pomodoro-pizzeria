import {
  ADD_ITEM
} from './types.js';
import {menu_data} from './components/menu.json';


const addToCartReducer = (state = {cart: [], user: {}, menu: menu_data, totalSum: 0}, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {...state, cart: state.cart.filter(ele => ele.item !== action.item).concat([{item: action.item, price: action.price, quantity: action.quantity}]), totalSum: action.addedSum};
    default:
      return state;
  }
};

export default addToCartReducer;
