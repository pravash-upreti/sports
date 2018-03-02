import axios from 'axios';
import React from 'react';
import moment from 'moment';
import { Icon } from 'semantic-ui-react';
import InputMask from 'react-input-mask';

import { DATE_FORMAT, TOURNAMENT_ACTIONS } from '../../../constants/constants';
import { DEFAULT_INVALID_INPUT_MESSAGE } from '../../../constants/errorMessages';

import {
  getTournaments,
  createTournament
} from '../../../services/tournamentServices/tournamentServices';

import AddEditTournamentModal from '../tournamentModal/AddEditTournamentModal';

function CreateTournament(props) {
  const {
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

  const post = async () => {
    if (
      moment(formData.startDate, DATE_FORMAT).isValid &&
      moment(formData.finishDate, DATE_FORMAT).isValid
    ) {
      let payload = {
        title: formData.title,
        start_date: formData.startDate
      };

      if (formData.finishDate) {
        payload.finish_date = formData.finishDate;
      }

      try {
        const createResponse = await createTournament(payload);

        const getResponse = await getTournaments();

        updateTournaments(getResponse);
      } catch (error) {
        const errorMessage =
          (error && error.error && error.error.message) ||
          DEFAULT_INVALID_INPUT_MESSAGE;

        setShowToaster(true);
        setToasterMessage(errorMessage);
      }
    }
    handleClose(TOURNAMENT_ACTIONS.add);
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
        action={post}
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
