import React, { Component } from 'react';
import {Provider, connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps, store} from './store.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Home from './components/Home';
import Confirm from './components/Confirm';
import Order from './components/Order';
import NavbarComp from './components/Navbar.js';

class App extends Component {
  render() {
    return (
            <Router>
                <div className='container-fluid'>
                  <NavbarComp />
                  <hr/>

                  <Route exact path='/' component={Home}/>
                  <Route path='/menu' component={Menu}/>
                  <Route path='/cart' component={Cart}/>
                  <Route path='/confirm' component={Confirm}/>
                  <Route path='/order' component={Order}/>
                </div>
              </Router>
    );
  }
}



const Container = connect(mapStateToProps, mapDispatchToProps)(App);

class AppWrapper extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}

export default AppWrapper;
