"use strict";
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { deleteFromCart } from "../../actions/cartActions";
import { Row, Col, Button, Steps, Card } from "antd";

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
          <div className="cart" />
          <Row>
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
            <Col sm={24} md={14} xl={12}>
              {this.renderCart()}
            </Col>
            <Col sm={24} md={10} xl={8}>
              {this.cartTotal()}
            </Col>
          </Row>
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
        <Card>
          <Meta
            style={{ height: "100%", width: "30%" }}
            avatar={
              <img
                style={{ height: "100%", width: "30%" }}
                src={this.props.cartItem.image}
              />
            }
            title={this.props.cartItem.title}
          />
          <strong>
            Refundundable deposit: INR {this.props.cartItem.refund}
          </strong>
          <hr />
          <strong>Rent: INR {this.props.cartItem.rent}</strong>
          <strong>
            Rental period : {this.props.cartItem.date.start} -{" "}
            {this.props.cartItem.date.end}
          </strong>
          <strong>Days: {this.props.cartItem.days}</strong>
          <br />
          <Button
            onClick={() => this.props.handleDeleteFromCart()}
            bsSize="small"
            bsStyle="danger"
          >
            DEL
          </Button>
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
