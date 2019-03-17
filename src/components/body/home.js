"use strict";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import { Row, Col, Button } from "antd";
import Cart from "./cart";

class Home extends Component {
  dispachAddToCart(product) {
    this.props.addToCart(product);
  }
  renderProducts() {
    return this.props.products.map(p => {
      return (
        <Col className="productsList" xs={12} sm={6} md={4} key={p.id}>
          <ProductItem
            handleOnAdd={this.dispachAddToCart.bind(this)}
            product={p}
          />
        </Col>
      );
    });
  }

  render() {
    return (
      <div>
        <Row>
          <h1>Welcome to LensHood Rent Cart</h1>
        </Row>
        <Row>
          <Cart />
        </Row>
        <Row style={{ margin: "15px" }}>{this.renderProducts()}</Row>
      </div>
    );
  }
}

class ProductItem extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={12} className="productItem">
            <h4>{this.props.product.title}</h4>
            <p>{this.props.product.description}</p>
            <p>Price: INR {this.props.product.price}</p>
            <Button
              onClick={() => this.props.handleOnAdd(this.props.product)}
              bsStyle="primary"
            >
              ADD
            </Button>
          </Col>
        </Row>
      </div>
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
