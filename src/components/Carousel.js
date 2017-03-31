import {connect} from 'react-redux';
import React, {Component} from 'react';
import {mapStateToProps, mapDispatchToProps} from '../store.js';
import {React_Bootstrap_Carousel as ReactBootstrapCarousel} from 'react-bootstrap-carousel';


class Carousel extends Component {
  render() {
    return (
      <div style={{height:500,margin:50}}>
       <ReactBootstrapCarousel animation={true} className="carousel-fade">
          <div className='text-center' style={{height:500,width:"100%",backgroundColor:"white"}}>
            <img src={require('../images/pomodoro1.jpg')} alt='Pomodoro 1' />
          </div>
          <div className='text-center' style={{height:500,width:"100%",backgroundColor:"white"}}>
            <img className='responsive' src={require('../images/pomodoro2.jpg')} alt='Pomodoro 2' />
          </div>
          <div className='text-center' style={{height:500,width:"100%",backgroundColor:"white"}}>
            <img className='responsive' src={require('../images/pomodoro3.jpg')} alt='Pomodoro 3' />
          </div>
        </ReactBootstrapCarousel>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
