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
    <div className='row'>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.addCart('Strawberry', 'S')}><img src={require("../images/strawberry.jpg")} alt='Strawberry' /><div className='caption'><p>Strawberry</p></div></div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.addCart('Chocolate', 'Ch')}><img src={require("../images/strawberry.jpg")} alt='Strawberry' /><div className='caption'><p>Straberry</p></div></div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.addCart('Vanilla', 'V')}><img src={require("../images/strawberry.jpg")} alt='Strawberry' /><div className='caption'><p>Straberry</p></div></div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.addCart('Strawberry', 'S')}><img src={require("../images/strawberry.jpg")} alt='Strawberry' /><div className='caption'><p>Straberry</p></div></div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.addCart('Strawberry', 'S')}><img src={require("../images/strawberry.jpg")} alt='Strawberry' /><div className='caption'><p>Straberry</p></div></div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.addCart('Strawberry', 'S')}><img src={require("../images/strawberry.jpg")} alt='Strawberry' /><div className='caption'><p>Straberry</p></div></div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.addCart('Strawberry', 'S')}><img src={require("../images/strawberry.jpg")} alt='Strawberry' /><div className='caption'><p>Straberry</p></div></div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.addCart('Strawberry', 'S')}><img src={require("../images/strawberry.jpg")} alt='Strawberry' /><div className='caption'><p>Straberry</p></div></div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.addCart('Strawberry', 'S')}><img src={require("../images/strawberry.jpg")} alt='Strawberry' /><div className='caption'><p>Straberry</p></div></div>
        </div>
    </div>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
