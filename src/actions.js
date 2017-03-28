import {
    ADD,
    CLEAR,
    DELETE,
    ADD_EXISTING,
    DELETE_EXISTING,
    ADD_ORDER
} from './types.js';
import {store} from './store.js';

export let idNum = 0;

export const addToCart = (item, key) => {
  console.log(store.getState());
  return {
    type: ADD,
    item,
    id: ++idNum,
    quantity: 1,
    key
  }
}

export const addExisting = (item, key) => {
  let i = 0;
  while (key !== store.getState().cart[i].key) {
    i++;
  }
  let qty = store.getState().cart[i].quantity;
  return {
    type: ADD_EXISTING,
    item,
    key,
    id: ++idNum,
    quantity: ++qty
  }
}

export const clearCartAct = () => {
  idNum = 0;
  return {
    type: CLEAR,
    id: idNum
  }
}

export const delItem = (id, key) => {
  let i = 0;
  while (id !== store.getState().cart[i].id) {
    i++;
  }
  let qty = store.getState().cart[i].quantity;
  if (store.getState().cart[i].quantity > 1) {
    return {
      type: DELETE_EXISTING,
      id: ++idNum,
      i,
      quantity: --qty,
      key
    }
  }
  return {
    type: DELETE,
    id
  }
}

export const addOrder = (name, address, number) => {
  return {
    type: ADD_ORDER,
    name,
    address,
    number
  }
}
