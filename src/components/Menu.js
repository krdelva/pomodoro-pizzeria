import {connect} from 'react-redux';
import React, {Component} from 'react';
import {mapStateToProps, mapDispatchToProps} from '../store.js';

class Menu extends Component {
  addCart = (item, key) => {
    let bool = false;
    for (let i = 0; i < this.props.cart.length; i++) {
      if (key === this.props.cart[i].key)
        bool = true
    }
    if (bool === true)
      this.props.addExisting(item, key);
    else {
      this.props.addItemToCart(item, key);
    }
  }
  render() {
    return (
    <div>
      <ul>
        <li onClick={() => this.addCart('Strawberry', 'S')}>Strawberry</li>
        <li onClick={() => this.addCart('Chocolate', 'C')}>Chocolate</li>
        <li onClick={() => this.addCart('Vanilla', 'V')}>Vannilla</li>
      </ul>
    </div>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
