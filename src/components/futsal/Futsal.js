import axios from 'axios';
import React, { Component } from 'react';

import FixtureService from '../../services/FixtureService';

import Content from './views/Content';
import LoadingIcon from '../common/loadingIcon';
import TournamentTitle from '../common/tournamentTitle';

class Futsal extends Component {
  state = {
    data: [],
    error: false,
    loading: true
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get('https://script.google.com/macros/s/AKfycbzSidEKAgKW6EhCUB5qukR5lO-8JUW-O35ax82JZUumFxwJFns/exec')
      .then(response => {
        this.setState({
          data: response.data.data
        });
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

    const data = this.getSanitizedData(this.state.data);

    return (
      <div className="futsal">
        <TournamentTitle title={data.details.title} season={data.details.year} />
        <div className="tournament-content">
          <Content data={data} />
        </div>
      </div>
    );
  }
}

export default Futsal;
