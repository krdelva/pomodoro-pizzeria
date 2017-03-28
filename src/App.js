import React, { Component } from 'react';
import {Provider, connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps, store} from './store.js';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Home from './components/Home';
import Confirm from './components/Confirm';
import Order from './components/Order';

class App extends Component {
  render() {
    return (
            <Router>
                <div className='container-fluid'>
                <nav className="navbar navbar-default">
                  <div className='row'>
                  <div className='col-md-12'>
                  <ul className="nav navbar-nav col-md-12">
                    <li className='nav-item col-md-offset-2 col-md-2'><Link className='nav-link' to='/'><span className="glyphicon glyphicon-ice-lolly"></span></Link></li>
                    <li className='nav-item col-md-2'><Link className='nav-link' to='/menu'>Menu</Link></li>
                    <li className='nav-item col-md-offset-2 col-md-4'><Link className='nav-link' to='/cart'><span className="glyphicon glyphicon-shopping-cart"></span>Cart</Link></li>
                  </ul>
                  </div>
                  </div>
                </nav>

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
