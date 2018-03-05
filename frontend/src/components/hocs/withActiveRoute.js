import { compose, withState, withHandlers, lifecycle } from 'recompose';

const withActiveRoute = initialValue =>
  compose(
    withState('activeRoute', 'setActiveRoute'),
    lifecycle({
      componentWillMount() {
        this.props.setActiveRoute(this.props.location.pathname);
      }
    }),
    withHandlers({
      handleItemClick: ({ setActiveRoute }) => (e, props) => {
        setActiveRoute(props.to);
      }
    })
  );

export default withActiveRoute;
