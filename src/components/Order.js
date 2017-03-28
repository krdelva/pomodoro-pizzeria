import {connect} from 'react-redux';
import React, {Component} from 'react';
import {mapStateToProps, mapDispatchToProps} from '../store.js';

class Order extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.user.name} your order is complete!</h2>
        <h4>Your order:  </h4>
        <table className='table table-stripped'>
        <thead>
          <tr><th>Item</th><th>Quantity</th><th>Price</th></tr>
        </thead>
        <tbody>
        {
          this.props.cart.map((ele, i) => {
            return  <tr key={this.props.cart[i].id}>
                      <td>{ele.item}</td>
                      <td>{ele.quantity}</td>
                      <td>${ele.quantity * 2.50}</td>
                    </tr>
          })
        }
        <tr className='active'><td><strong>Total: ${this.props.qty * 2.50}</strong></td><td></td><td></td></tr>
        </tbody>
        </table>
        <h4>Your order will be delivered to: {this.props.user.address}</h4>
        <h1>Thank you for choosing our service</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);
