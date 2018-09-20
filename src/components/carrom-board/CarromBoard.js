import axios from 'axios';
import moment from 'moment';
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
      .get('https://script.google.com/macros/s/AKfycbyYfBIlzlDhbFKprirQTDeeb_-ezxQkYsYq9HyEDT9LAl7HLkPc/exec')
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

  getFixtures = (data, limit) => {
    let fixtures = data
      .filter(fixture => ['played', 'forfeited'].indexOf(fixture.status.toLowerCase()) < 0)
      .sort((a, b) => {
        return moment(a.date) - new Date(b.date);
      });

    if (limit) {
      fixtures = fixtures.slice(0, limit);
    }

    return fixtures;
  };

  getResults = (data, limit) => {
    let results = data
      .filter(fixture => ['played', 'forfeited'].indexOf(fixture.status.toLowerCase()) >= 0)
      .sort((a, b) => {
        return moment(a.date) - new Date(b.date);
      });

    if (limit) {
      results = results.reverse().slice(0, limit);
    }

    return results;
  };

  getRecents = data => {
    const today = moment();
    const finishDate = moment(data.details.finishDate);
    let recents = {
      results: [],
      fixtures: [],
      showChampions: false
    };

    if (moment(today).isAfter(finishDate)) {
      recents.showChampions = true;
      recents.winner = data.details.winner;
      recents.runnerUp = data.details.runnerUp;
    } else {
      recents.results = this.getResults(data.fixtures, 2);
      recents.fixtures = this.getFixtures(data.fixtures, 2);
    }

    return recents;
  };

  getSanitizedData = rawData => {
    const data = {
      teams: rawData.teams,
      rounds: rawData.rounds,
      details: rawData.details,
      statuses: rawData.statuses,
      categories: rawData.categories,
      recents: this.getRecents(rawData),
      results: this.getResults(rawData.fixtures),
      fixtures: this.getFixtures(rawData.fixtures)
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
      <div className="carrom-board">
        <TournamentTitle title={data.details.title} season={data.details.year} />
        <div className="tournament-content">
          <Content data={data} />
        </div>
      </div>
    );
  }
}

export default CarromBoard;
