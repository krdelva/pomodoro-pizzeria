import {connect} from 'react-redux';
import React, {Component} from 'react';
import {mapStateToProps, mapDispatchToProps} from '../store.js';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class NavbarComp extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link className='nav-link' to='/'><span className="glyphicon glyphicon-ice-lolly"></span></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}><Link className='nav-link' to='/menu'>Menu</Link></NavItem>
            <NavItem eventKey={2}><Link className='nav-link' to='/cart'><span className="glyphicon glyphicon-shopping-cart"></span>Cart</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComp);
