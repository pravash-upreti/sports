import { render } from 'react-dom';
import React, { Component } from 'react';

import 'semantic-ui-css/semantic.min.css';

import './assets/sass/style.scss';

import Routes from './components/Routes';

export default class Main extends Component {
  render() {
    return <Routes />;
  }
}

render(<Main />, document.getElementById('app'));
