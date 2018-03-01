import axios from 'axios';
import React from 'react';
import moment from 'moment';
import { Icon } from 'semantic-ui-react';
import InputMask from 'react-input-mask';

import { DATE_FORMAT } from '../../../constants/constants';
import { TOURNAMENT_ACTIONS } from '../../../constants/constants';

import {
  getTournaments,
  createTournament
} from '../../../services/tournamentService';

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
    updateTournaments
  } = props;

  const addIcon = () => {
    return (
      <Icon
        name={TOURNAMENT_ACTIONS.add}
        color="green"
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
      (formData.finishDate === null ||
        moment(formData.finishDate, DATE_FORMAT).isValid)
    ) {
      let payload = {
        title: formData.title,
        start_date: formData.startDate
      };

      if (formData.finishDate) payload.finish_date = formData.finishDate;

      try {
        const res = await createTournament(payload);

        try {
          const res = await getTournaments();
          const tournaments = res;

          updateTournaments(tournaments);
        } catch (err) {
          throw err;
        }
      } catch (err) {
        throw err;
      }
    }
    handleClose(TOURNAMENT_ACTIONS.add);
  };

  return (
    <span>
      <Icon
        name={TOURNAMENT_ACTIONS.add}
        color="green"
        onClick={() => handleOpen(TOURNAMENT_ACTIONS.add, {})}
        style={{
          float: 'right',
          cursor: 'pointer'
        }}
      />
      <AddEditTournamentModal
        toggle={TOURNAMENT_ACTIONS.add}
        action={post}
        tournament={{}}
        icon={addIcon()}
        open={props.modalOpen.add}
        modalOpen={props.modalOpen}
        handleClose={props.handleClose}
        handleChange={props.handleChange}
      />
    </span>
  );
}

export default CreateTournament;
