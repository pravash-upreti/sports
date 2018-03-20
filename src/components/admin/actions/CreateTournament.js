import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

import { TOURNAMENT_ACTIONS } from '../../../constants/constants';

import AddEditTournamentModal from '../tournamentModal/AddEditTournamentModal';

function CreateTournament(props) {
  const { add, modalOpen, handleOpen, handleClose, handleChange } = props;

  return (
    <span>
      <Icon
        color="green"
        name={TOURNAMENT_ACTIONS.add}
        onClick={() => handleOpen(TOURNAMENT_ACTIONS.add, {})}
        style={{
          float: 'right',
          cursor: 'pointer'
        }}
      />
      <AddEditTournamentModal
        action={add}
        tournament={{}}
        open={modalOpen.add}
        modalOpen={modalOpen}
        handleClose={handleClose}
        handleChange={handleChange}
        toggle={TOURNAMENT_ACTIONS.add}
      />
    </span>
  );
}

CreateTournament.propTypes = {
  add: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  modalOpen: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default CreateTournament;
