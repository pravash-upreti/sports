import { compose, withState, withHandlers } from 'recompose';

const withActiveMenu = initialValue =>
  compose(
    withState('activeMenu', 'setActiveMenu', initialValue),
    withHandlers({
      handleItemClick: ({ setActiveMenu }) => (e, props) => {
        setActiveMenu(props.name);
      }
    })
  );

export default withActiveMenu;
