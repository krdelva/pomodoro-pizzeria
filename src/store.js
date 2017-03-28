import {createStore} from 'redux';
import addToCartReducer from './reducers.js';
import {addToCart, clearCartAct, delItem, addExisting} from './actions.js';

export const store = createStore(addToCartReducer);

export const mapStateToProps = (state) => {
  return {cart: state.cart};
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item, key) => {
      dispatch(addToCart(item, key))
    },
    delItemCart: (id) => {
      dispatch(delItem(id))
    },
    clearCart: () => {
      dispatch(clearCartAct())
    },
    addExisting: (item, key) => {
      dispatch(addExisting(item, key))
    }
  };
}
