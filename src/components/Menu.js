import {connect} from 'react-redux';
import React, {Component} from 'react';
import {mapStateToProps, mapDispatchToProps} from '../store.js';
import {Tab, Row, Col, Nav, NavItem, Panel} from 'react-bootstrap';
import menu_data from './menu.json';

class Menu extends Component {
  render() {
    return (
    <div className='container-fluid'>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
       <Row className="clearfix">
         <Col sm={4}>
           <Nav bsStyle="pills" stacked>
             <NavItem eventKey="first">
               Antipasti
             </NavItem>
             <NavItem eventKey="second">
               Crostoni
             </NavItem>
             <NavItem eventKey="third">
               Pizza
             </NavItem>
             <NavItem eventKey="fourth">
               Pizza Bianca
             </NavItem>
           </Nav>
         </Col>
         <Col sm={8}>
           <Tab.Content animation>
             <Tab.Pane eventKey="first" >
             <div className='container-fluid'>
             <h1 className='text-center'>Antipasti</h1>
             <hr/><br/>
             {
              Object.values(menu_data.Antipasti).map((ele, i) => ele.map((element, index) =>
                <Panel key={'outer' + i + 'inner' + index} header={<div className='row'><strong>
                  <p className='col-md-8'>{element.item}</p>
                    <p className='col-md-2'>RD${element.price}</p></strong>
                      <button onClick={() => this.props.addCart(element)}
                          type='button' className='btn'><span
                              className='col-md-2 glyphicon glyphicon-plus'></span></button></div>}>
                  {element.description}
                </Panel>
                )
              )
             }
             </div>
             </Tab.Pane>
             <Tab.Pane eventKey="second">
               <div className='container-fluid'>
               <h1 className='text-center'>Crostoni</h1>
               <hr/><br/>
               {
                 menu_data.Crostoni.map((ele, i) =>
                 <Panel key={i} header={<div className='row'><strong>
                   <p className='col-md-8'>{ele.item}</p>
                     <p className='col-md-2'>RD${ele.price}</p></strong>
                       <button onClick={() => this.props.addCart(ele)}
                           type='button' className='btn'><span
                               className='col-md-2 glyphicon glyphicon-plus'></span></button></div>}>
                   {ele.description}
                 </Panel>
                 )
                }
               </div>
             </Tab.Pane>
             <Tab.Pane eventKey="third">
               <div className='container-fluid'>
               <h1 className='text-center'>Pizza</h1>
               <hr/><br/>
               {
                 menu_data.Pizza.map((ele, i) =>
                 <Panel key={i} header={<div className='row'><strong>
                   <p className='col-md-8'>{ele.item}</p>
                     <p className='col-md-2'>RD${ele.price}</p></strong>
                       <button onClick={() => this.props.addCart(ele)}
                           type='button' className='btn'><span
                               className='col-md-2 glyphicon glyphicon-plus'></span></button></div>}>
                   {ele.description}
                 </Panel>
                 )
                }
               </div>
             </Tab.Pane>
             <Tab.Pane eventKey="fourth">
               <div className='container-fluid'>
               <h1 className='text-center'>Pizza Bianca</h1>
               <hr/><br/>
               {
                 menu_data.PizzaBianca.map((ele, i) =>
                 <Panel key={i} header={<div className='row'><strong>
                   <p className='col-md-8'>{ele.item}</p>
                     <p className='col-md-2'>RD${ele.price}</p></strong>
                       <button onClick={() => this.props.addCart(ele)}
                           type='button' className='btn'><span
                               className='col-md-2 glyphicon glyphicon-plus'></span></button></div>}>
                   {ele.description}
                 </Panel>
                 )
                }
               </div>
             </Tab.Pane>
           </Tab.Content>
         </Col>
       </Row>
     </Tab.Container>

    </div>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
