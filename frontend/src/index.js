import { render } from 'react-dom';
import React, { Component } from 'react';

import '../public/css/style.css';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from the sports website.
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
