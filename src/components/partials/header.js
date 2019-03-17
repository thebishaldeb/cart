import React from "react";
import { Link } from "react-router-dom";
import {
  Layout, Input, Avatar, Icon,
} from 'antd';

const Search = Input.Search;

class Header extends React.Component {
  render() {
    return (
      <header className="Rectangle">
      <span className="HeaderLogo"><a href="#">
        <Icon className="Fill-4" type="smile" />
        <div>LOGO</div>
      </a></span>
      <div className="HeaderSearch">
        <Search className="Rectangle-2"
          placeholder="Search brand, camera, model number,category"
          onSearch={value => console.log(value)}
          size="large"
        />
      </div>
      <span className="HeaderImg"><a href="#">
        <Avatar className="Bitmap" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </a></span>
      <div className="HeaderLinks"><a href="#">
        <Icon className="Fill-4" type="shopping-cart" />
      </a></div>
      <div className="HeaderLinks"><a href="#">Messages</a></div>
      <div className="HeaderLinks"><a href="#">List your gear</a></div>
      <div className="HeaderLinks"><a href="#">Blog</a></div>
      <div className="HeaderLinks"><a href="#">FAQ</a></div>
      </header>
    );
  }
}

export default Header;
