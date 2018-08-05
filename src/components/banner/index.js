import React, { Component } from 'react';
import { BANNER_TEXT } from '../../constants'

export default class Banner extends Component {
  render() {
    return (
      <div className="banner-container card">
        <div className="card-body">
          <h1>{BANNER_TEXT.title}</h1>
          <p>{BANNER_TEXT.body.one}</p>
          <p>{BANNER_TEXT.body.two}</p>
        </div>
      </div>
    );
  }
}
