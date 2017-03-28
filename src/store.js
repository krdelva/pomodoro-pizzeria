import {createStore} from 'redux';
import addToCartReducer from './reducers.js';
import {addToCart, clearCartAct, delItem, addExisting, addOrder} from './actions.js';

export const store = createStore(addToCartReducer);

export const mapStateToProps = (state) => {
  return {cart: state.cart,
          qty: state.qty,
          user: state.user};
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item, key) => {
      dispatch(addToCart(item, key))
    },
    delItemCart: (id, key) => {
      dispatch(delItem(id, key))
    },
    clearCart: () => {
      dispatch(clearCartAct())
    },
    addExisting: (item, key) => {
      dispatch(addExisting(item, key))
    },
    addOrder: (name, address, number) => {
      dispatch(addOrder(name, address, number))
    }
  };
}
