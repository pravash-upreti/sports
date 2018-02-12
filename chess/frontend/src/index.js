import { render } from 'react-dom';
import React, { Component } from 'react';

import '../public/css/style.css';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
