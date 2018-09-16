import axios from 'axios';
import React, { Component } from 'react';

import Content from './views/Content';
import LoadingIcon from '../common/loadingIcon';
import TournamentTitle from '../common/tournamentTitle';

class CarromBoard extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      error: false,
      loading: true
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get('https://script.google.com/macros/s/AKfycbx14eWMw6x6klJ5SAtUg6UgLAV0YiqctjQE2LJMS7tXmpPh7ek/exec')
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

  getFixtures = data => {
    return data.filter(fixture => ['played', 'forfeited'].indexOf(fixture.status.toLowerCase()) < 0);
  };

  getResults = data => {
    return data.filter(fixture => ['played', 'forfeited'].indexOf(fixture.status.toLowerCase()) >= 0);
  };

  getSanitizedData = rawData => {
    let data = {
      results: this.getResults(rawData.fixtures),
      fixtures: this.getFixtures(rawData.fixtures),
      rounds: rawData.rounds,
      statuses: rawData.statuses,
      categories: rawData.categories
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
          <div className="alert alert-error">Unable to load data.</div>
        </div>
      );
    }

    return (
      <div className="carrom-board">
        <TournamentTitle title="Carrom Board Tournament" season="2018" />
        <div className="tournament-content">
          <div className="container">
            <Content data={this.getSanitizedData(this.state.data)} />
          </div>
        </div>
      </div>
    );
  }
}

export default CarromBoard;
