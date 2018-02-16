import { render } from 'react-dom';
import React, { Component } from 'react';
import Routes from './components/Routes';

import '../public/assets/css/style.css';
import './assets/sass/style.scss';

export default class Hello extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

render(<Hello />, document.getElementById('app'));
