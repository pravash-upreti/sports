import { render } from 'react-dom';
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

import Routes from './components/Routes';

import './assets/sass/style.scss';

export default class Main extends Component {
  render() {
    return <Routes />;
  }
}

render(<Main />, document.getElementById('app'));
