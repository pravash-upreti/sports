import axios from 'axios';
import React from 'react';
import moment from 'moment';
import { withState, withHandlers, lifecycle, compose } from 'recompose';

import { DATE_FORMAT, TOURNAMENT_ACTIONS } from '../../constants/constants';
import { DEFAULT_INVALID_INPUT_MESSAGE } from '../../constants/errorMessages';

import {
  getTournaments,
  editTournament,
  deleteTournament
} from '../../services/tournamentServices/tournamentServices';

import TournamentList from './tournamentList';
import CreateTournament from './actions/CreateTournament';
import DeleteTournamentModal from './tournamentModal/DeleteTournamentModal';
import AddEditTournamentModal from './tournamentModal/AddEditTournamentModal';

function Admin(props) {
  const {
    title,
    formData,
    startDate,
    modalOpen,
    finishDate,
    handleOpen,
    tournaments,
    handleClose,
    handleChange,
    setShowToaster,
    setToasterMessage,
    updateTournaments,
    selectedTournament
  } = props;

  console.log(props);

  const edit = async () => {
    if (
      moment(formData.startDate, DATE_FORMAT).isValid &&
      moment(formData.finishDate, DATE_FORMAT).isValid
    ) {
      let title, startDate;

      title = formData.title || selectedTournament.title;
      startDate = formData.startDate || selectedTournament.startDate;

      let payload = { title: title, start_date: startDate };

      if (formData.finishDate) {
        payload.finish_date = formData.finishDate;
      }

      try {
        const editResponse = await editTournament(
          payload,
          selectedTournament.id
        );
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

    handleClose(TOURNAMENT_ACTIONS.edit);
  };

  const remove = async () => {
    try {
      const deleteResponse = await deleteTournament(selectedTournament.id);

      const getResponse = await getTournaments();

      updateTournaments(getResponse);
    } catch (error) {
      const errorMessage =
        (error && error.error && error.error.message) ||
        DEFAULT_INVALID_INPUT_MESSAGE;

      setShowToaster(true);
      setToasterMessage(errorMessage);
    }

    handleClose(TOURNAMENT_ACTIONS.remove);
  };

  return (
    <div className="admin-outer-container">
      <div className="admin-main-container">
        <h1>Tournaments</h1>
        <CreateTournament
          title={title}
          formData={formData}
          startDate={startDate}
          modalOpen={modalOpen}
          finishDate={finishDate}
          handleOpen={handleOpen}
          handleClose={handleClose}
          handleChange={handleChange}
          setShowToaster={setShowToaster}
          setToasterMessage={setToasterMessage}
          updateTournaments={updateTournaments}
        />
        <div className="admin-panel-container">
          <TournamentList
            title={title}
            formData={formData}
            tournaments={tournaments}
            modalOpen={modalOpen}
            startDate={startDate}
            finishDate={finishDate}
            handleOpen={handleOpen}
            handleClose={handleClose}
            handleChange={handleChange}
            updateTournaments={updateTournaments}
          />
        </div>
        {selectedTournament ? (
          <AddEditTournamentModal
            action={edit}
            open={modalOpen.edit}
            modalOpen={modalOpen}
            tournament={selectedTournament}
            handleClose={handleClose}
            toggle={TOURNAMENT_ACTIONS.edit}
            handleChange={handleChange}
          />
        ) : null}
        {selectedTournament ? (
          <DeleteTournamentModal
            action={remove}
            modalOpen={modalOpen}
            handleClose={handleClose}
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
    async componentDidMount() {
      const response = await getTournaments();

      this.props.updateTournaments(response);
    }
  }),

  withHandlers({
    handleChange: ({ formData, updateInput }) => e => {
      const { name, value } = e.target;
      const formDataCopy = { ...formData };

      formDataCopy[name] = value;

      updateInput(formDataCopy);
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
