"use strict";
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { deleteFromCart } from "../../actions/cartActions";
import { Row, Col, Button, Steps, Card, Icon } from "antd";

const Step = Steps.Step;

class Cart extends React.Component {
  renderCart() {
    return (
      <div className="cartList" header="Cart" bsStyle="primary">
        {this.cartList()}
      </div>
    );
  }
  handleDeleteFromCart(id) {
    this.props.deleteFromCart({ id });
  }

  cartList() {
    return this.props.cart.map(cartItem => {
      return (
        <CartItem
          key={cartItem.id}
          cartItem={cartItem}
          handleDeleteFromCart={this.handleDeleteFromCart.bind(
            this,
            cartItem.id
          )}
        />
      );
    });
  }

  cartTotal() {
    return (
      <div>
        <Card className="CheckoutList">
          <h2>Cart Summary</h2>
          {this.props.cart.map((item, key)=> (
            <div>
              <strong>Item {key+1}:</strong>
              <p>Rent per day  <div style={{ float: "right" }}>&#8377; {item.rent}</div></p>
              <p>
              &#8377; {item.rent}/- <Icon type="close" /> {item.days}days <div style={{ float: "right" }}>&#8377; {item.rent*item.days}</div>
          </p>
            </div>
          ))}
          <hr/>
          <p>
            Total<div style={{ float: "right" }}>&#8377; {this.totalRent(this.props.cart)}</div>
          </p>
          <p>
            25% Multi day discount{" "}
            <div style={{ float: "right", color: "#23b195" }}>-&#8377; 
              {0.25 * this.totalRent(this.props.cart)}
            </div>
          </p>
          <p>
            Service fee <div style={{ float: "right" }}>&#8377; 100</div>
          </p>
          <hr />
          <h3>
            Total rent amount{" "}
            <strong style={{ float: "right", color: "#23b195" }}>&#8377; 
              {this.totalAmount(this.props.cart)}
            </strong>
          </h3>
          <p>
            Refundable deposit{" "}
            <div style={{ float: "right" }}>&#8377; {this.Refund(this.props.cart)}</div>
          </p>
          <Button className="goToCheckout">Checkout</Button>
        </Card>
      </div>
    );
  }
  totalRent(cartArray) {
    return cartArray.reduce((acum, item) => {
      acum += item.days * item.rent;
      return acum;
    }, 0);
  }
  Refund(cartArray) {
    return cartArray.reduce((acum, item) => {
      acum += item.refund;
      return acum;
    }, 0);
  }
  totalAmount(cartArray) {
    let total = this.totalRent(cartArray);
    total -= 0.25 * total;
    total += 100;
    return total;
  }

  render() {
    if (this.props.cart.length !== 0) {
      return (
        <div className="payment">
          <div className="checkout">Checkout</div>
          <Steps className="steps" current={0}>
            <Step title="Cart" />
            <Step title="Billing Address" />
            <Step title="Payment options" />
            <Step title="Order Status" />
          </Steps>
          <Row >
            <Col sm={12} md={12} xl={12}>
              <div style={{ fontSize: "18px" }}>
                <strong>My cart - </strong>
                {this.props.cart.length} items
              </div>
              <div style={{ fontSize: "18px" }}>
                Total rent:{" "}
                <strong>&#8377; {this.totalRent(this.props.cart)} </strong>
              </div>
            </Col>
            <Col sm={12} md={12} xl={12}>
              <a className="Add-more-products" onClick={this.props.cartToggle}>
                Add more products
              </a>
            </Col>
          </Row>
          <Row>
            <Col style={{marginTop: "20px", marginBottom: "20px"}} sm={24} md={14} xl={14}>
              {this.renderCart()}
            </Col>
            <Col sm={24} md={8} xl={8}>
              {this.cartTotal()}
            </Col>
          </Row>
        </div>
      );
    }

    return (
      <div className="cart">
        <div style={{ margin: "20px" }}>
          Nothing in the cart currently. Add Some cool stuffs in your cart and
          come back again.
        </div>
        <a className="Add-more-products" onClick={this.props.cartToggle}>
          Add more products
        </a>
      </div>
    );
  }
}

class CartItem extends React.Component {
  render() {
    return (
      <div className="cartItem">
        <Card className="cartCard">
          <img className="cartImg" src={this.props.cartItem.image} />
          <Row className="cartDes">
            <div className="cartTitle">{this.props.cartItem.title}</div>
            <Col style={{ paddingRight: "3%" }} sm={12} md={12} xl={12}>
              Refundundable deposit
              <br />
              <strong style={{color: "#23b195"}}>&#8377; {this.props.cartItem.refund}</strong>
              <br />
              Rental period <br />
              <strong>
                {this.props.cartItem.date.start} -{" "}
                {this.props.cartItem.date.end}
              </strong>
            </Col>
            <Col sm={12} md={12} xl={12}>
              Rent <br />
              <strong>&#8377; {this.props.cartItem.rent}</strong>
              <br />
              Days: <br />
              <strong>{this.props.cartItem.days}</strong>
            </Col>
          </Row>
          <div className="editButtons">
            <Button className="editAndDelete">
              <Icon type="edit" />
            </Button>
            <Button
              className="editAndDelete"
              onClick={() => this.props.handleDeleteFromCart()}
            >
              <Icon type="close" />
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}
function mapActionsToProps(dispatch) {
  return bindActionCreators(
    {
      deleteFromCart
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Cart);
