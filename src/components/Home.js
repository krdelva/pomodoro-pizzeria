import {connect} from 'react-redux';
import React, {Component} from 'react';
import {mapStateToProps} from '../store.js';

class Home extends Component {
  render() {
    return (
        <div className='row'>
          <div className='col-md-12'>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">

              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
              </ol>

            <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <img src={require("../images/icecream1.JPG")} alt="Ice Cream 1"/>
                  <div className="carousel-caption">
                    <h3>The Shop</h3>
                    <p>The atmosphere in Venice is chill.</p>
                  </div>
                </div>

                <div className="item">
                  <img src={require("../images/icecream2.jpg")} alt="Ice Cream 2"/>
                </div>

                <div className="item">
                  <img src={require("../images/icecream2.jpg")} alt="Flower"/>
                </div>

                <div className="item">
                  <img src={require("../images/icecream2.jpg")} alt="Flower"/>
                </div>
            </div>

            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

        </div>
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

export default connect(mapStateToProps, null)(Home);
