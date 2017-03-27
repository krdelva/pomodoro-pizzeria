import {
    ADD,
    CLEAR,
    DELETE
} from './types.js';

export let idNum = 0;

export const addToCart = (item) => {
  return {
    type: ADD,
    item,
    id: ++idNum
  }
}

export const clearCartAct = () => {
  idNum = 0;
  return {
    type: CLEAR,
    id: idNum
  }
}

export const delItem = (id) => {
  return {
    type: DELETE,
    id
  }
}
