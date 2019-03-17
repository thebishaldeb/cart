// "use strict";
// import React from 'react';
// import { bindActionCreators } from 'redux'
// import {connect} from 'react-redux';
// import {deleteFromCart, updateItemUnits} from '../actions/cartActions';
// import {Col, Row, Panel, Badge} from 'react-bootstrap';

// class Cart extends React.Component {
//     renderCart() {
//         return (
//             <Panel className='cartList' header='Cart' bsStyle='primary'>
//                 {this.cartList()}
//             </Panel>
//         );
//     }
//     handleDeleteFromCart(id) {
//         this.props.deleteFromCart({id})
//     }
//     handleDeductUnit(id) {
//         let units = -1;
//         this.props.updateItemUnits({id, units})
//     }
//     handleAddUnit(id) {
//         let units = 1;
//         this.props.updateItemUnits({id, units})
//     }

//     cartList() {
//         return (
//             this.props.cart.map(cartItem => {
//               return (
//                   <CartItem key={cartItem.id}
//                             cartItem={cartItem}
//                             onAddUnit={this.handleAddUnit.bind(this, cartItem.id)}
//                             onDeductUnit={this.handleDeductUnit.bind(this, cartItem.id)}
//                             handleDeleteFromCart={this.handleDeleteFromCart.bind(this, cartItem.id)} />
//               );
//             })
//         );
//     }

//     cartTotal() {
//         return (
//             <Panel>
//                 <Row>
//                     <Col xs={12} sm={6}>
//                         <h4>TOTAL: <Badge pullRight>Price: INR {this.totalAmount(this.props.cart)}</Badge></h4>
//                     </Col>
//                 </Row>
//             </Panel>
//         );
//     }
//     totalAmount(cartArray) {
//         return cartArray.reduce((acum, item) => {
//             acum += item.price * item.units;
//             return acum;
//         }, 0);
//     }

//     render() {
//         if (this.props.cart.length !== 0) {
//             return (
//                 <aside className='cart'>
//                     {this.renderCart()}
//                     {this.cartTotal()}
//                 </aside>
//             );
//         }

//         return (
//             <aside className='cart'>cart empty</aside>
//         );
//     }
// }

// class CartItem extends React.Component {

//     render() {
//         return (
//             <Panel className='cartItem'>
//                 <Row>
//                     <Col xs={12} sm={6}>
//                         <h5>{this.props.cartItem.title} <Badge pullRight>Price: INR {this.props.cartItem.price}</Badge></h5>
//                     </Col>
//                     <Col xs={6} sm={4}>
//                         <p>units :&nbsp;
//                             <Label bsStyle='success'> {this.props.cartItem.units} </Label>
//                             &nbsp;
//                             <Button bsSize='small' onClick={() => this.props.onAddUnit()}>+</Button>
//                             <Button bsSize='small' onClick={() => this.props.onDeductUnit()}>-</Button>
//                         </p>
//                     </Col>
//                     <Col xs={6} sm={2}>
//                         <Button onClick={() => this.props.handleDeleteFromCart()}
//                                 bsSize='small' bsStyle='danger'>DEL</Button>
//                     </Col>
//                 </Row>
//             </Panel>
//         );
//     }
// }

// function mapStateToProps(state) {
//     return {
//         cart: state.cart
//     }
// }
// function mapActionsToProps(dispatch) {
//     return bindActionCreators({
//         deleteFromCart,
//         updateItemUnits
//     }, dispatch);
// }

// export default connect(mapStateToProps, mapActionsToProps)(Cart);