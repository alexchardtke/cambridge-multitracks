import React, { Component } from 'react';
import { NAV_ITEMS } from '../../constants'

export default class Header extends Component {
  renderNavItems() {
    return NAV_ITEMS.map((item, index) => {
      return (
        <li key={index} className="nav-link py-0">{item}</li>
      )
    });
  }
  render() {
    return (
      <nav className="header-container navbar navbar-expand-lg navbar-dark py-0">
        <a className="navbar-brand py-0" href="#">Cambridge Multitracks</a>
        <ul className="navbar-nav ml-auto">
          {this.renderNavItems()}
        </ul>
      </nav>
    );
  }
}
