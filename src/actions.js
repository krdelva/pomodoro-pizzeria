import {
    ADD_ITEM,
    REMOVE_ITEM,
    REMOVE_ITEM_COMPLETE,
    CLEAR_CART
} from './types.js';
import {store} from './store.js';


export const addCart = (element) => {
  let currentSum = store.getState().totalSum;
  return {
    type: ADD_ITEM,
    item: element.item,
    price: element.price,
    quantity: ++element.quantity,
    addedSum: currentSum + element.price
  }
}

export const removeCart = (element) => {
  let currentSum = store.getState().totalSum;
  if (element.quantity === 1) {
    return {
      type: REMOVE_ITEM_COMPLETE,
      item: element.item,
      quantity: --element.quantity,
      price: element.price,
      removedSum: currentSum - element.price
    }
  }
  return {
    type: REMOVE_ITEM,
    item: element.item,
    quantity: --element.quantity,
    price: element.price,
    removedSum: currentSum - element.price
  }
}

export const clearCart = () => {
  return {
    type: CLEAR_CART
  }
}
