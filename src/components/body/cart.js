"use strict";
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { deleteFromCart } from "../../actions/cartActions";
import { Row, Col, Button, Steps } from "antd";

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
          <div className="cart">
            {this.renderCart()}
          </div>
          <div>
            {this.cartTotal()}
          </div>
        </div>
      );
    }

    return <aside className="cart">cart empty</aside>;
  }
}

class CartItem extends React.Component {
  render() {
    return (
      <div className="cartItem">
        <Row>
          <Col xs={12} sm={6}>
            <h5>
              {this.props.cartItem.title}{" "}
              <div pullRight>Price: INR {this.props.cartItem.rent}</div>
            </h5>
          </Col>
          <Col xs={6} sm={4}>
            <p>
              No of days :&nbsp;
              <div bsStyle="success"> {this.props.cartItem.days} </div>
              &nbsp;
            </p>
          </Col>
          <Col xs={6} sm={2}>
            <Button
              onClick={() => this.props.handleDeleteFromCart()}
              bsSize="small"
              bsStyle="danger"
            >
              DEL
            </Button>
          </Col>
        </Row>
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
