import axios from "axios";
import React from "react";

function DeleteData(props) {
  const { id, tournament, updateTournament } = props;

  const remove = () => {
    axios
      .delete("http://0.0.0.0:5000/api/v1/tournaments/" + id)
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
        remove();
      }}
    >
      <button>Delete</button>
    </form>
  );
}

export default DeleteData;
