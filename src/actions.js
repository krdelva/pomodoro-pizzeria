import {
    ADD_ITEM
} from './types.js';
import {store} from './store.js';


export const addCart = (element) => {
  let currentSum = store.getState().totalSum;
  console.log(currentSum);
  return {
    type: ADD_ITEM,
    item: element.item,
    price: element.price,
    quantity: ++element.quantity,
    addedSum: currentSum + element.price
  }
}
