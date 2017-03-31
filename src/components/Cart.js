import {connect} from 'react-redux';
import React, {Component} from 'react';
import {mapStateToProps, mapDispatchToProps} from '../store.js';
import {Link} from 'react-router-dom';


 class Cart extends Component {
  render() {
    let toRender = undefined;
    if (this.props.cart.length === 0) {
      toRender = <h1 className='text-center'>Empty Cart</h1>
    } else {
      toRender = this.props.cart.map((ele, i) => {
                  return  <tr key={i}>
                            <td>{ele.item}</td>
                            <td>{ele.quantity}</td>
                            <td>${ele.price}</td>
                            <td><button type="button" className="btn btn-danger btn-sm" onClick={() => this.props.delItemCart(this.props.cart[i].id, this.props.cart[i].key)}>Delete Item</button></td>
                          </tr>
                  });
    }
    return (
      <div className='container-fluid'>
        <h1 className='text-center'><strong>Cart</strong></h1>
        <hr/>
        <br/>
        <table className='table table-stripped'>
        <thead>
          <tr><th>Item</th><th>Quantity</th><th>Price</th><th><span className="glyphicon glyphicon-edit"></span></th></tr>
        </thead>
        <tbody>
          {toRender}
        <tr className='active'><td><strong>Total: </strong></td><td></td><td><strong>RD${this.props.totalSum}</strong></td><td>
        <button type="button" className="btn btn-warning btn-md" onClick={() => this.props.clearCart()}>Clear Cart!</button>
        </td></tr>
        </tbody>
        </table>
        <hr/>
        <div className='text-center'><button type="button" className="btn btn-success btn-lg align-center"><Link to='/confirm'>Pay Now!</Link></button></div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
