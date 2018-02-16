import { render } from 'react-dom';
import React, { Component } from 'react';
import MainComponent from './components/index';

import '../public/assets/css/style.css';
import './assets/sass/style.scss';

export default class Hello extends Component {
  render() {
    return (
      <MainComponent />
    );
  }
}

render(<Hello />, document.getElementById('app'));
