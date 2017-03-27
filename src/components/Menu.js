import {connect} from 'react-redux';
import React, {Component} from 'react';
import {mapStateToProps, mapDispatchToProps} from '../store.js';

class Menu extends Component {
  addCart = (item) => {
    this.props.addItemToCart(item);
  }
  render() {
    return (
    <div>
      <ul>
        <li onClick={() => this.addCart('Strawberry')}>Strawberry</li>
        <li onClick={() => this.addCart('Chocolate')}>Chocolate</li>
        <li onClick={() => this.addCart('Vanilla')}>Vannilla</li>
      </ul>
    </div>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
