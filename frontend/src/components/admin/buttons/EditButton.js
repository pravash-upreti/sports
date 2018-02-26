import axios from "axios";
import React from "react";
import moment from "moment";
import InputMask from "react-input-mask";

function EditData(props) {
  const {
    id,
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
      axios
        .put("http://0.0.0.0:5000/api/v1/tournaments/" + id, {
          title: "title",
          start_date: "2012/12/12",
          finish_date: "2013/12/12"
        })
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
