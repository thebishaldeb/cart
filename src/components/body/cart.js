"use strict";
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { deleteFromCart } from "../../actions/cartActions";
import { Row, Col, Button, Steps, Card, Icon } from "antd";

const Step = Steps.Step;
const { Meta } = Card;

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
        <Row>
          <Col xs={12} sm={6}>
            <h4>
              TOTAL:{" "}
              <div pullRight>
                Price: INR {this.totalAmount(this.props.cart)}
              </div>
            </h4>
          </Col>
        </Row>
      </div>
    );
  }
  totalAmount(cartArray) {
    return cartArray.reduce((acum, item) => {
      acum += item.price * item.units;
      return acum;
    }, 0);
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
          <Row style={{marginBottom: "20px"}}>
            <Col sm={12} md={12} xl={12}>
              <div style={{ fontSize: "18px" }}>
                <strong>My cart - </strong>
                {this.props.cart.length} items
              </div>
              <div style={{ fontSize: "18px" }}>
                Total rent:{" "}
                <strong>{this.totalAmount(this.props.cart)} INR</strong>
              </div>
            </Col>
            <Col sm={12} md={12} xl={12}>
              <a className="Add-more-products" onClick={this.props.cartToggle}>
                Add more products
              </a>
            </Col>
          </Row>
          <Row>
            <Col sm={24} md={14} xl={14}>
              {this.renderCart()}
            </Col>
            <Col sm={24} md={10} xl={8}>
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
            <Col style={{paddingRight: "3%"}} sm={12} md={12} xl={12}>
              Refundundable deposit
              <br />
              <strong>INR {this.props.cartItem.refund}</strong>
              <br />
              Rental period <br />
              <strong>
                {this.props.cartItem.date.start} -{" "}
                {this.props.cartItem.date.end}
              </strong>
            </Col>
            <Col sm={12} md={12} xl={12}>
              Rent <br />
              <strong>INR {this.props.cartItem.rent}</strong>
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
