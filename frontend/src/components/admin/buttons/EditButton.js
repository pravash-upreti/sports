import axios from "axios";
import React from "react";
import moment from "moment";
import InputMask from "react-input-mask";

function EditData(props) {
  const {
    title,
    startDate,
    finishDate,
    tournament,
    isEditable,
    handleEditClick,
    updateTournament,
    handleChangeTitle,
    handleChangeStartDate,
    handleChangeFinishDate
  } = props;

  const edit = () => {
    if (
      moment(startDate, "YYYY/MM/DD").isValid &&
      (finishDate === null || moment(finishDate, "YYYY/MM/DD").isValid)
    ) {
      let payload = { title: title, start_date: startDate };
      if (finishDate) payload.finish_date = finishDate;
      axios
        .put(
          "http://0.0.0.0:5000/api/v1/tournaments/" + tournament[0].id,
          payload
        )
        .then(res => {
          axios
            .get("http://0.0.0.0:5000/api/v1/tournaments")
            .then(res => {
              const tournament = (res && res.data && res.data.data) || [];
              updateTournament(tournament);
            })
            .catch(err => err);
        })
        .catch(err => err);
    }
  };

  if (isEditable === true) {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          edit();
          handleEditClick();
        }}
      >
        <input
          type="text"
          placeholder="Enter Tournament Title"
          onChange={e => {
            handleChangeTitle(e);
          }}
        />
        <InputMask
          mask="9999/99/99"
          placeholder="Start Date YYYY/MM/DD"
          onChange={e => {
            handleChangeStartDate(e);
          }}
        />
        <InputMask
          mask="9999/99/99"
          placeholder="Finish Date YYYY/MM/DD"
          onChange={e => {
            handleChangeFinishDate(e);
          }}
        />
        <button>Save</button>
      </form>
    );
  } else {
    return (
      <button
        type="button"
        onClick={() => {
          handleEditClick();
        }}
      >
        Edit
      </button>
    );
  }
}

export default EditData;
