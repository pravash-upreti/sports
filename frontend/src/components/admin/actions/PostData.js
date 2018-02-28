import axios from 'axios';
import React from 'react';
import moment from 'moment';
import { Icon } from 'semantic-ui-react';
import InputMask from 'react-input-mask';

import TournamentModal from '../tournamentModal/TournamentModal';
import {
  getTournaments,
  createTournament
} from '../../../services/tournamentService';

function PostData(props) {
  const {
    title,
    input,
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
      moment(input.startDate, 'YYYY/MM/DD').isValid &&
      (input.finishDate === null ||
        moment(input.finishDate, 'YYYY/MM/DD').isValid)
    ) {
      let payload = {
        title: input.title,
        start_date: input.startDate
      };
      if (input.finishDate) payload.finish_date = input.finishDate;
      createTournament(payload)
        .then(res => {
          getTournaments()
            .then(res => {
              const tournaments = (res && res.data && res.data.data) || [];
              updateTournaments(tournaments);
            })
            .catch(err => err);
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
      <TournamentModal
        toggle="add"
        action={post}
        tournament=""
        icon={addIcon()}
        open={props.modalOpen.add}
        modalOpen={props.modalOpen}
        handleClose={props.handleClose}
        handleChange={props.handleChange}
      />
    </span>
  );
}

export default PostData;
