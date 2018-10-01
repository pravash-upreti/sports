import React from 'react';
import PropTypes from 'prop-types';

class Chess extends React.Component {
  componentDidMount() {
    this.props.handleChangePageTitle('Chess');
  }

  render() {
    return (
      <div className="container text-center">
        <h1>Chess</h1>
        <p>Under construction...</p>
      </div>
    );
  }
}

Chess.propTypes = {
  handleChangePageTitle: PropTypes.func
};

export default Chess;
