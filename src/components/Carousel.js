import {connect} from 'react-redux';
import React, {Component} from 'react';
import {mapStateToProps, mapDispatchToProps} from '../store.js';
import {React_Bootstrap_Carousel as ReactBootstrapCarousel} from 'react-bootstrap-carousel';


class Carousel extends Component {
  render() {
    return (
      <div style={{height:500,margin:50}}>
       <ReactBootstrapCarousel animation={true} className="carousel-fade">
          <div style={{height:500,width:"100%",backgroundColor:"skyblue"}}>
            <img src={require('../images/pomodoro1.jpg')} alt='Pomodoro 1' />
          </div>
          <div style={{height:500,width:"100%",backgroundColor:"aqua"}}>
            <img className='responsive' src={require('../images/pomodoro2.jpg')} alt='Pomodoro 2' />
          </div>
          <div style={{height:500,width:"100%",backgroundColor:"lightpink"}}>

          </div>
        </ReactBootstrapCarousel>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
