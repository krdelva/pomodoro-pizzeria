import {connect} from 'react-redux';
import React, {Component} from 'react';
import {mapStateToProps, mapDispatchToProps} from '../store.js';
import Carousel from './Carousel.js';

class Home extends Component {
  render() {
    return (
        <div className='row'>
          <Carousel />
          <div className='col-md-8'>
            <h3>Welcome to ****** ice cream shop online!
            We hope you enjoy your visit.</h3>
          </div>
          <div className='col-md-4'>
            <div className="panel panel-default">
              <div className="panel-heading">News!!!</div>
              <div className="panel-body">Happy hour on **/**/**</div>
              <div className="panel-body">Children Play</div>
            </div>
          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
