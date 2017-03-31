import {createStore} from 'redux';
import addToCartReducer from './reducers.js';
import {addCart, removeCart, clearCart} from './actions.js';

export const store = createStore(addToCartReducer);

export const mapStateToProps = (state) => {
  return {cart: state.cart,
          qty: state.qty,
          user: state.user,
          menuAntipasti: state.menuAntipasti,
          totalSum: state.totalSum};
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (element) => {
      dispatch(addCart(element))
    },
    removeCart: (element) => {
      dispatch(removeCart(element))
    },
    clearCart: () => {
      dispatch(clearCart())
    }
  };
}
