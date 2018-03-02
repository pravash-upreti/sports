import React from 'react';
import PropTypes from 'prop-types';
import { withState, withHandlers, lifecycle, compose } from 'recompose';

import { TOURNAMENT_ACTIONS } from '../../constants/constants';

import { getTournaments } from '../../services/tournamentServices/tournamentServices';

import tournamentActions from '../hocs/tournamentActions';

import TournamentList from './tournamentList';
import CreateTournament from './actions/CreateTournament';
import DeleteTournamentModal from './tournamentModal/DeleteTournamentModal';
import AddEditTournamentModal from './tournamentModal/AddEditTournamentModal';

function Admin(props) {
  const {
    add,
    edit,
    title,
    remove,
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

  return (
    <div className="admin-outer-container">
      <div className="admin-main-container">
        <h1>Tournaments</h1>
        <CreateTournament
          add={add}
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
            modalOpen={modalOpen}
            startDate={startDate}
            finishDate={finishDate}
            handleOpen={handleOpen}
            tournaments={tournaments}
            handleClose={handleClose}
            handleChange={handleChange}
            updateTournaments={updateTournaments}
          />
        </div>
        {Object.keys(selectedTournament).length ? (
          <AddEditTournamentModal
            action={edit}
            modalOpen={modalOpen}
            open={modalOpen.edit}
            handleClose={handleClose}
            handleChange={handleChange}
            tournament={selectedTournament}
            toggle={TOURNAMENT_ACTIONS.edit}
          />
        ) : null}
        {Object.keys(selectedTournament).length ? (
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

Admin.propTypes = {
  title: PropTypes.string,
  startDate: PropTypes.string,
  finishDate: PropTypes.string,
  add: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  modalOpen: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  tournaments: PropTypes.array.isRequired,
  setShowToaster: PropTypes.func.isRequired,
  setToasterMessage: PropTypes.func.isRequired,
  updateTournaments: PropTypes.func.isRequired,
  selectedTournament: PropTypes.object.isRequired
};

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
  }),
  tournamentActions
);

export default enhance(Admin);
