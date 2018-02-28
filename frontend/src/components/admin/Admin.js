import axios from 'axios';
import React from 'react';
import moment from 'moment';
import { withState, withHandlers, lifecycle, compose } from 'recompose';

import PostData from './actions/PostData';
import TournamentList from './tournamentList';
import TournamentModal from './tournamentModal/TournamentModal';
import DeleteTournamentModal from './tournamentModal/DeleteTournamentModal';
import {
  getTournaments,
  editTournament,
  deleteTournament
} from '../../services/tournamentService';

function Admin(props) {
  const {
    input,
    handleClose,
    tournaments,
    selectedTournament,
    updateTournaments
  } = props;

  const edit = () => {
    if (
      moment(input.startDate, 'YYYY/MM/DD').isValid &&
      (input.finishDate === null ||
        moment(input.finishDate, 'YYYY/MM/DD').isValid)
    ) {
      let title, startDate;
      if (!input.title) {
        title = selectedTournament.title;
      } else {
        title = input.title;
      }
      if (!input.startDate) {
        startDate = selectedTournament.startDate;
      } else {
        startDate = input.startDate;
      }
      let payload = { title: title, start_date: startDate };
      if (input.finishDate) payload.finish_date = input.finishDate;
      editTournament(payload, selectedTournament.id)
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
    handleClose('edit');
  };

  const remove = e => {
    deleteTournament(selectedTournament.id)
      .then(res => {
        getTournaments()
          .then(res => {
            const tournaments = (res && res.data && res.data.data) || [];
            updateTournaments(tournaments);
          })
          .catch(err => err);
      })
      .catch(err => err);
    handleClose('remove');
  };

  return (
    <div className="admin-outer-container">
      <div className="admin-main-container">
        <h1>Tournaments</h1>
        <PostData
          title={props.title}
          input={props.input}
          startDate={props.startDate}
          modalOpen={props.modalOpen}
          finishDate={props.finishDate}
          handleOpen={props.handleOpen}
          handleClose={props.handleClose}
          handleChange={props.handleChange}
          updateTournaments={props.updateTournaments}
        />
        <div className="admin-panel-container">
          <TournamentList
            input={props.input}
            title={props.title}
            tournaments={tournaments}
            modalOpen={props.modalOpen}
            startDate={props.startDate}
            finishDate={props.finishDate}
            handleOpen={props.handleOpen}
            handleClose={props.handleClose}
            handleChange={props.handleChange}
            updateTournaments={props.updateTournaments}
          />
        </div>
        {selectedTournament ? (
          <TournamentModal
            toggle="edit"
            action={edit}
            tournament={selectedTournament}
            open={props.modalOpen.edit}
            modalOpen={props.modalOpen}
            handleClose={props.handleClose}
            handleChange={props.handleChange}
          />
        ) : null}
        {selectedTournament ? (
          <DeleteTournamentModal
            action={remove}
            modalOpen={props.modalOpen}
            handleClose={props.handleClose}
          />
        ) : null}
      </div>
    </div>
  );
}

const enhance = compose(
  withState('tournaments', 'updateTournaments', []),
  withState('isEditable', 'toggleIsEditable', false),
  withState('selectedTournament', 'setSelectedTournament', {}),
  withState('input', 'updateInput', {
    title: '',
    startDate: '',
    finishDate: ''
  }),
  withState('modalOpen', 'updateModalOpen', {
    add: false,
    edit: false,
    delete: false
  }),
  lifecycle({
    componentDidMount() {
      getTournaments().then(res => {
        const tournaments = (res && res.data && res.data.data) || [];
        this.props.updateTournaments(tournaments);
      });
    }
  }),
  withHandlers({
    handleChange: ({ input, updateInput }) => e => {
      const { name, value } = e.target;
      let inputCopy = { ...input };
      inputCopy[name] = value;
      updateInput(inputCopy);
    },
    handleOpen: ({ modalOpen, updateModalOpen, setSelectedTournament }) => (
      action,
      tournament
    ) => {
      const modelOpenCopy = { ...modalOpen };
      modelOpenCopy[action] = true;
      setSelectedTournament(tournament);
      updateModalOpen(modelOpenCopy);
    },
    handleClose: ({
      modalOpen,
      updateModalOpen,
      setSelectedTournament
    }) => action => {
      const modelOpenCopy = { ...modalOpen };
      modelOpenCopy[action] = false;
      setSelectedTournament({});
      updateModalOpen(modelOpenCopy);
    }
  })
);

export default enhance(Admin);
