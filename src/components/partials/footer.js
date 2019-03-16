import React from "react";
import { Row, Col } from 'antd';

const Footer = () => {
  return (
    <footer className="Rectangle-17-Copy-2">
      <Row type="flex" justify="center">
        <Col span={5}>
          <div className="FooterHead">About LensHood</div>
        </Col>
        <Col span={5}>
          <div className="FooterHead">How it works</div>
        </Col>
        <Col span={5}>
          <div className="FooterHead">Keep in touch</div>
        </Col>
        <Col span={5}>
          <div className="FooterHead">Follow us</div>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col className="FooterCol" span={5}>
          <div className="FooterContent"><a href="#">About us</a></div>
          <div className="FooterContent"><a href="#">Terms of service</a></div>
          <div className="FooterContent"><a href="#">Privacy Policy</a></div>
          <div className="FooterContent"><a href="#">Community Rules</a></div>
          <div className="FooterContent"><a href="#">Mission</a></div>
        </Col>
        <Col className="FooterCol" span={5}>
          <div className="FooterContent"><a href="#">Renting</a></div>
          <div className="FooterContent"><a href="#">Lending</a></div>
          <div className="FooterContent"><a href="#">FAQ</a></div>
        </Col>
        <Col className="FooterCol" span={5}>
          <div className="FooterContent">Write to us: <br/> contact@lenshood.in</div>
          <div className="FooterContent">For any inquiry: <br /> +91-9085525859</div>
        </Col>
        <Col className="FooterCol" span={5}>
          <div className="FooterContent"><a href="#">Blog</a></div>
          <div className=""></div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
