import { render } from 'react-dom';
import React, { Component } from 'react';

import '../public/css/style.css';
import './assets/sass/style.scss';

import logo from '../public/images/logo-transparent.png';

export default class Hello extends Component {
  render() {
    return (
      'hello world'
    );
  }
}

render(<Hello />, document.getElementById('app'));
