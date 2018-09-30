import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { CARROM_BOARD_ROUTES } from '../../../constants/routes';

import Fixture from './Fixture';
import SubHeader from './SubHeader';
import { Home, Teams, Results, Fixtures } from '../../common/contents';

class Content extends React.Component {
  previousLocation = this.props.routeProps.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props.routeProps;

    // set previousLocation if props.location is not modal
    if (nextProps.routeProps.history.action !== 'POP' && (!location.state || !location.state.modal)) {
      this.previousLocation = this.props.routeProps.location;
    }
  }

  render() {
    const data = this.props.data;
    const { location } = this.props.routeProps;
    const isModal = !!(location.state && location.state.modal && this.previousLocation !== location); // not initial render

    return (
      <React.Fragment>
        <SubHeader />
        <Switch>
          <Route path={CARROM_BOARD_ROUTES.HOME} render={() => <Home data={data.recents} />} />
          <Route path={CARROM_BOARD_ROUTES.TEAMS} render={() => <Teams data={data.teams} />} />
          <Route path={CARROM_BOARD_ROUTES.RESULTS} render={() => <Results data={data.results} />} />
          <Route path={CARROM_BOARD_ROUTES.FIXTURES} render={() => <Fixtures data={data.fixtures} />} />
          <Route path={CARROM_BOARD_ROUTES.FIXTURE} render={routeProps => <Fixture routeProps={routeProps} />} />
          <Redirect to={CARROM_BOARD_ROUTES.HOME} />
        </Switch>
        {isModal ? (
          <Route path={CARROM_BOARD_ROUTES.FIXTURE} render={routeProps => <Fixture routeProps={routeProps} />} />
        ) : null}
      </React.Fragment>
    );
  }
}

Content.propTypes = {
  data: PropTypes.object,
  routeProps: PropTypes.object
};

export default Content;
