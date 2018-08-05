import React, { Component } from 'react';
import Header from '../containers/header';
import Banner from './banner';
import Accordion from '../containers/accordion';

export default class App extends Component {
  render() {
    return (
      <div className="app-container mx-auto">
        <Header />
        <Banner />
        <Accordion />
      </div>
    );
  }
}
