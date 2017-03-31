import {createStore} from 'redux';
import addToCartReducer from './reducers.js';
import {addCart} from './actions.js';

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
    addCart: (item, price, quantity, menu_type, element, index) => {
      dispatch(addCart(item, price, quantity, menu_type, element, index))
    }
  };
}
