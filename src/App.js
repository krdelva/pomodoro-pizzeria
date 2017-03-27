import React, { Component } from 'react';
import {Provider, connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps, store} from './store.js';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
            <Router>
                <div>
                <nav>
                  <ul>
                    <li><Link className='nav-link' to='/'>Home</Link></li>
                    <li><Link className='nav-link' to='/menu'>Menu</Link></li>
                    <li><Link className='nav-link' to='/cart'>Cart</Link></li>
                  </ul>
                </nav>

                <hr/>

                <Route exact path='/' component={Home}/>
                <Route path='/menu' component={Menu}/>
                <Route path='/cart' component={Cart}/>
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
