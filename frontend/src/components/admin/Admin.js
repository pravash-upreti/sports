import axios from 'axios';
import React from 'react';
import moment from 'moment';
import { withState, withHandlers, lifecycle, compose } from 'recompose';

import CreateTournament from './actions/CreateTournament';
import TournamentList from './tournamentList';
import AddEditTournamentModal from './tournamentModal/AddEditTournamentModal';
import DeleteTournamentModal from './tournamentModal/DeleteTournamentModal';
import {
  getTournaments,
  editTournament,
  deleteTournament
} from '../../services/tournamentService';

function Admin(props) {
  const {
    formData,
    handleClose,
    tournaments,
    updateTournaments,
    selectedTournament
  } = props;

  const edit = () => {
    if (
      moment(formData.startDate, 'YYYY/MM/DD').isValid &&
      (formData.finishDate === null ||
        moment(formData.finishDate, 'YYYY/MM/DD').isValid)
    ) {
      let title, startDate;

      if (!formData.title) {
        title = selectedTournament.title;
      } else {
        title = formData.title;
      }

      if (!formData.startDate) {
        startDate = selectedTournament.startDate;
      } else {
        startDate = formData.startDate;
      }

      let payload = { title: title, start_date: startDate };

      if (formData.finishDate) payload.finish_date = formData.finishDate;
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
        <CreateTournament
          title={props.title}
          formData={props.formData}
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
            formData={props.formData}
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
          <AddEditTournamentModal
            toggle="edit"
            action={edit}
            open={props.modalOpen.edit}
            modalOpen={props.modalOpen}
            tournament={selectedTournament}
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
  withState('formData', 'updateInput', {
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
    handleChange: ({ formData, updateInput }) => e => {
      const { name, value } = e.target;
      let formDateCopy = { ...formData };
      formDateCopy[name] = value;

      updateInput(formDateCopy);
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
