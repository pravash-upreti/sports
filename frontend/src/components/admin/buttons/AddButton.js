import axios from "axios";
import React from "react";
import moment from "moment";

function PostData(props) {
  const {
    title,
    startDate,
    finishDate,
    tournament,
    updateTournament,
    handleChangeTitle,
    handleChangeStartDate,
    handleChangeFinishDate
  } = props;

  const post = () => {
    axios
      .post("http://0.0.0.0:5000/api/v1/tournaments", {
        title: title,
        start_date: startDate,
        finish_date: finishDate
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
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        post();
      }}
    >
      <input
        type="text"
        placeholder="Enter Tournament Title"
        onChange={e => {
          handleChangeTitle(e);
        }}
      />
      <input
        type="text"
        placeholder="Enter Start Date"
        onChange={e => {
          handleChangeStartDate(e);
        }}
      />
      <input
        type="text"
        placeholder="Enter Finish Date"
        onChange={e => {
          handleChangeFinishDate(e);
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default PostData;
