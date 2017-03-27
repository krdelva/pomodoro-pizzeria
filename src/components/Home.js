import {connect} from 'react-redux';
import React, {Component} from 'react';
import {mapStateToProps} from '../store.js';

class Home extends Component {
  render() {
    return (
      <div>Home!</div>
    );
  }
}

export default connect(mapStateToProps, null)(Home);
