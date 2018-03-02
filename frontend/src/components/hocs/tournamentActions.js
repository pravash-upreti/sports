import moment from 'moment';
import { withHandlers } from 'recompose';

import { DATE_FORMAT, TOURNAMENT_ACTIONS } from '../../constants/constants';
import { DEFAULT_INVALID_INPUT_MESSAGE } from '../../constants/errorMessages';

import {
  getTournaments,
  editTournament,
  createTournament,
  deleteTournament
} from '../../services/tournamentServices/tournamentServices';

export default withHandlers({
  add: ({
    formData,
    handleClose,
    setShowToaster,
    setToasterMessage,
    updateTournaments,
    selectedTournament
  }) => async () => {
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
        await createTournament(payload);
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
  },
  edit: ({
    formData,
    handleClose,
    setShowToaster,
    setToasterMessage,
    updateTournaments,
    selectedTournament
  }) => async () => {
    if (
      moment(formData.startDate, DATE_FORMAT).isValid &&
      moment(formData.finishDate, DATE_FORMAT).isValid
    ) {
      let title = formData.title || selectedTournament.title;
      let startDate = formData.startDate || selectedTournament.startDate;
      let payload = { title: title, start_date: startDate };

      if (formData.finishDate) {
        payload.finish_date = formData.finishDate;
      }

      try {
        await editTournament(payload, selectedTournament.id);
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
  },
  remove: ({
    handleClose,
    setShowToaster,
    updateTournaments,
    setToasterMessage,
    selectedTournament
  }) => async () => {
    try {
      await deleteTournament(selectedTournament.id);
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
  }
});
