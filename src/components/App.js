import React from 'react';

import AppRouter from './AppRouter';

class App extends React.Component {
  state = {
    pageTitle: {
      mainText: 'LF SPORTS',
      secondaryText: ''
    }
  };

  handleChangePageTitle = (mainText = '', secondaryText = '') => {
    const mText = mainText ? mainText : this.state.pageTitle.mainText;

    this.setState({
      pageTitle: {
        mainText: mText,
        secondaryText: secondaryText
      }
    });

    document.title = `${mText} ${secondaryText}`;
  };

  render() {
    return <AppRouter pageTitle={this.state.pageTitle} handleChangePageTitle={this.handleChangePageTitle} />;
  }
}

export default App;
