import {createStore} from 'redux';
import addToCartReducer from './reducers.js';
import {addToCart, clearCartAct, delItem} from './actions.js';

export const store = createStore(addToCartReducer);

export const mapStateToProps = (state) => {
  return {cart: state.cart};
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => {
      dispatch(addToCart(item))
    },
    delItemCart: (id) => {
      dispatch(delItem(id))
    },
    clearCart: () => {
      dispatch(clearCartAct())
    }
  };
}
