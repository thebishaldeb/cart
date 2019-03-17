"use strict";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import { Row, Col, Button, Card } from "antd";
import Cart from "./cart";

const { Meta } = Card;

class Home extends Component {
  constructor(props) {
    super(props);
    this.cartToggle = this.cartToggle.bind(this);
    this.state = {
      cartButton: false
    };
  }
  cartToggle() {
    if (this.state.cartButton === true) this.setState({ cartButton: false });
    else this.setState({ cartButton: true });
  }
  dispachAddToCart(product) {
    this.props.addToCart(product);
  }
  renderProducts() {
    return this.props.products.map(p => {
      return (
        <ProductItem
          cart={this.state.cart}
          handleOnAdd={this.dispachAddToCart.bind(this)}
          product={p}
        />
      );
    });
  }

  render() {
    return (
      <div>
        {this.state.cartButton === true ? (
          <Row>
            <Cart cartToggle={this.cartToggle} />
          </Row>
        ) : (
          <div>
            <Button className="goToCart" onClick={this.cartToggle}>
              Go To Cart
            </Button>
            {this.renderProducts()}
          </div>
        )}
      </div>
    );
  }
}

class ProductItem extends Component {
  render() {
    return (
      <Col xs={24} lg={6} sm={12}>
        <Card
          style={{ height: 600, margin: "20px" }}
          cover={
            <img
              style={{ height: 300 }}
              src={this.props.product.image}
              alt={this.props.product.title}
            />
          }
          actions={[
            <Button
              onClick={() => this.props.handleOnAdd(this.props.product)}
              bsStyle="primary"
            >
              Add to Cart
            </Button>
          ]}
        >
          <Meta
            title={this.props.product.title}
            description={this.props.product.description}
          />
          <hr />
          <strong>Rent: INR {this.props.product.rent}</strong>
          <br />
          <strong>
            Refundundable deposit: INR {this.props.product.refund}
          </strong>
        </Card>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}
function mapActionsToProps(dispatch) {
  return bindActionCreators(
    {
      addToCart
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapActionsToProps
)(Home);
