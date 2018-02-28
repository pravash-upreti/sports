import axios from 'axios';
import React from 'react';
import moment from 'moment';
import { Icon } from 'semantic-ui-react';
import InputMask from 'react-input-mask';

import AddEditTournamentModal from '../tournamentModal/AddEditTournamentModal';
import {
  getTournaments,
  createTournament
} from '../../../services/tournamentService';

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
        name="add"
        color="green"
        onClick={() => handleOpen('add')}
        style={{
          float: 'right',
          cursor: 'pointer'
        }}
      >
        Add
      </Icon>
    );
  };

  const post = () => {
    if (
      moment(formData.startDate, 'YYYY/MM/DD').isValid &&
      (formData.finishDate === null ||
        moment(formData.finishDate, 'YYYY/MM/DD').isValid)
    ) {
      let payload = {
        title: formData.title,
        start_date: formData.startDate
      };

      if (formData.finishDate) payload.finish_date = formData.finishDate;
      createTournament(payload)
        .then(res => {
          getTournaments()
            .then(res => {
              const tournaments = (res && res.data && res.data.data) || [];
              updateTournaments(tournaments);
            })
            .catch(err => {
              throw err;
            });
        })
        .catch(err => err);
    }
    handleClose('add');
  };

  return (
    <span>
      <Icon
        name="add"
        color="green"
        onClick={() => handleOpen('add', {})}
        style={{
          float: 'right',
          cursor: 'pointer'
        }}
      />
      <AddEditTournamentModal
        toggle="add"
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
