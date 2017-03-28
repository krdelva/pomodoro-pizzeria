import {connect} from 'react-redux';
import React, {Component} from 'react';
import {mapStateToProps, mapDispatchToProps} from '../store.js';
import {Link} from 'react-router-dom';

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: '',
      inputAddress: '',
      inputNumber: '',
      text: ''
    }
  }
  handleChangeName = (event) => {
    this.setState({
      inputName: event.target.value
    });
  }
  handleChangeAddress = (event) => {
    this.setState({
      inputAddress: event.target.value
    });
  }
  handleChangeNumber = (event) => {
    this.setState({
      inputNumber: event.target.value
    });
  }
  render() {
    return(
    <div className='row'>
    <div className='col-md-offset-3 col-md-6'>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input value={this.state.inputName} onChange={this.handleChangeName} type="text" className="form-control" id="name"></input>
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input value={this.state.inputAddress} onChange={this.handleChangeAddress} type="text" className="form-control" id="address"></input>
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input value={this.state.inputNumber} onChange={this.handleChangeNumber} type="text" className="form-control" id="number"></input>
        </div>
        <button type="submit" className="btn btn-success" onClick={() => this.props.addOrder(this.state.inputName, this.state.inputAddress, this.state.inputNumber)}>
          <Link className='nav-link' to='/order'>Confirm Payment!</Link></button>
      </form>
    </div>
    </div>
  )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
