import { render } from 'react-dom';
import React, { Component } from 'react';
import MainComponent from './components/index';

import '../public/css/style.css';

export default class Hello extends Component {
  render() {
    return (
      <MainComponent />
    );
  }
}

render(<Hello />, document.getElementById('app'));
