import React from 'react';
import PropTypes from 'prop-types';

class TableTennis extends React.Component {
  componentDidMount() {
    this.props.handleChangePageTitle('Table Tennis');
  }

  render() {
    return (
      <div className="container text-center">
        <h1>Table Tennis</h1>
        <p>Under construction...</p>
      </div>
    );
  }
}

TableTennis.propTypes = {
  handleChangePageTitle: PropTypes.func
};

export default TableTennis;
