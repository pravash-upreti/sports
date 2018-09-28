import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import FixtureService from '../../services/FixtureService';

import Content from './views/Content';
import LoadingIcon from '../common/loadingIcon';

class Futsal extends Component {
  state = {
    data: [],
    error: false,
    loading: true
  };

  componentDidMount() {
    this.props.handleChangePageTitle('Futsal');
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get('https://script.google.com/macros/s/AKfycbzSidEKAgKW6EhCUB5qukR5lO-8JUW-O35ax82JZUumFxwJFns/exec')
      .then(response => {
        const data = this.getSanitizedData(response.data.data);

        this.setState({ data });
        this.props.handleChangePageTitle(data.details.title, data.details.year);
      })
      .catch(() => {
        this.setState({
          error: true
        });
      })
      .then(() => {
        this.setState({
          loading: false
        });
      });
  };

  getSanitizedData = rawData => {
    const data = {
      teams: rawData.teams,
      details: rawData.details,
      stats: rawData.stats,
      pointsTable: rawData.table,
      recents: FixtureService.getRecentFixtures(rawData),
      results: FixtureService.getResults(rawData.fixtures),
      fixtures: FixtureService.getFixtures(rawData.fixtures)
    };

    return data;
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="container">
          <LoadingIcon />
        </div>
      );
    }

    if (this.state.error) {
      return (
        <div className="container">
          <div className="alert alert-error">Unable to load data. Please try again later.</div>
        </div>
      );
    }

    return (
      <div className="futsal">
        <div className="tournament-content">
          <Content data={this.state.data} />
        </div>
      </div>
    );
  }
}

Futsal.propTypes = {
  handleChangePageTitle: PropTypes.func
};

export default Futsal;
