import {connect} from 'react-redux';
import React, {Component} from 'react';
import {mapStateToProps, mapDispatchToProps} from '../store.js';

 class Cart extends Component {
  render() {
    return (
      <div>
        <h1>Cart!</h1>
        <button onClick={() => this.props.clearCart()}>Clear Cart!</button>
        <ul>
        {
          this.props.cart.map((ele, i) => {
            return  <div key={this.props.cart[i].id}>
                      <li>{ele.item}</li>
                      <p>{ele.quantity}</p>
                      <button onClick={() => this.props.delItemCart(this.props.cart[i].id)}>Del</button>
                    </div>
          })
        }
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
