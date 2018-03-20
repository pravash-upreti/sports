import React from 'react';
import { render } from 'react-dom';

import 'semantic-ui-css/semantic.min.css';

import './assets/sass/style.scss';

import Routes from './components/Routes';

export default function Main() {
  return <Routes />;
}

render(<Main />, document.getElementById('app'));
