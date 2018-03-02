import React from 'react';
import { Icon } from 'semantic-ui-react';

import { TOURNAMENT_ACTIONS } from '../../../constants/constants';

import AddEditTournamentModal from '../tournamentModal/AddEditTournamentModal';

function CreateTournament(props) {
  const {
    add,
    title,
    formData,
    modalOpen,
    startDate,
    finishDate,
    handleOpen,
    handleClose,
    handleChange,
    setShowToaster,
    setToasterMessage,
    updateTournaments
  } = props;

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

export default CreateTournament;
