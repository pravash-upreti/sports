import axios from 'axios';
import React from 'react';
import moment from 'moment';
import { withState, withHandlers, lifecycle, compose } from 'recompose';

import { DATE_FORMAT } from '../../constants/constants';
import { TOURNAMENT_ACTIONS } from '../../constants/constants';

import {
  getTournaments,
  editTournament,
  deleteTournament
} from '../../services/tournamentServices/tournamentServices';

import TournamentList from './tournamentList';
import CreateTournament from './actions/CreateTournament';
import AddEditTournamentModal from './tournamentModal/AddEditTournamentModal';
import DeleteTournamentModal from './tournamentModal/DeleteTournamentModal';

function Admin(props) {
  const {
    formData,
    handleClose,
    tournaments,
    updateTournaments,
    selectedTournament
  } = props;

  const edit = async () => {
    if (
      moment(formData.startDate, DATE_FORMAT).isValid &&
      (formData.finishDate === null ||
        moment(formData.finishDate, DATE_FORMAT).isValid)
    ) {
      let title, startDate;

      !formData.title
        ? (title = selectedTournament.title)
        : (title = formData.title);

      !formData.startDate
        ? (startDate = selectedTournament.startDate)
        : (startDate = formData.startDate);

      let payload = { title: title, start_date: startDate };

      if (formData.finishDate) payload.finish_date = formData.finishDate;

      try {
        const res = await editTournament(payload, selectedTournament.id);

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
    handleClose(TOURNAMENT_ACTIONS.edit);
  };

  const remove = async () => {
    try {
      const res = await deleteTournament(selectedTournament.id);

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

    handleClose(TOURNAMENT_ACTIONS.remove);
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
            toggle={TOURNAMENT_ACTIONS.edit}
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
        const tournaments = res;

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
