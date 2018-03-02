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

  const addIcon = () => {
    return (
      <Icon
        color="green"
        name={TOURNAMENT_ACTIONS.add}
        onClick={() => handleOpen(TOURNAMENT_ACTIONS.add)}
        style={{
          float: 'right',
          cursor: 'pointer'
        }}
      >
        Add
      </Icon>
    );
  };

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
        icon={addIcon}
        open={modalOpen.add}
        modalOpen={modalOpen}
        toggle={TOURNAMENT_ACTIONS.add}
        handleClose={handleClose}
        handleChange={handleChange}
      />
    </span>
  );
}

export default CreateTournament;
