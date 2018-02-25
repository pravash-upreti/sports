import axios from "axios";
import React from "react";
import { withState, withHandlers, lifecycle, compose } from "recompose";

import AddButton from "./buttons/AddButton";
import TournamentList from "./tournamentList";

function Admin(props) {
  const { tournament } = props;

  return (
    <div className="admin-main-container">
      <h1>Admin Panel</h1>
      <AddButton
        title={props.title}
        startDate={props.startDate}
        finishDate={props.finishDate}
        tournament={props.tournament}
        updateTournament={props.updateTournament}
        handleChangeTitle={props.handleChangeTitle}
        handleChangeStartDate={props.handleChangeStartDate}
        handleChangeFinishDate={props.handleChangeFinishDate}
      />
      <div className="admin-panel-container">
        <TournamentList tournament={tournament} />
      </div>
    </div>
  );
}

const enhance = compose(
  withState("tournament", "updateTournament", []),
  withState("title", "updateTitle", ""),
  withState("startDate", "updateStartDate", ""),
  withState("finishDate", "updateFinishDate", ""),
  lifecycle({
    componentDidMount(){
      axios
        .get("http://0.0.0.0:5000/api/v1/tournaments")
        .then(res => {
          const tournament = (res && res.data && res.data.data) || [];
          this.props.updateTournament(tournament);
        })
        .catch(err => err);
    }
  }),
  withHandlers({
    handleChangeTitle: ({ updateTitle }) => e => {
      const title = e.target.value;
      updateTitle(title);
    },
    handleChangeStartDate: ({ updateStartDate }) => e => {
      const startDate = e.target.value;
      updateStartDate(startDate);
    },
    handleChangeFinishDate: ({ updateFinishDate }) => e => {
      const finishDate = e.target.value;
      updateFinishDate(finishDate);
    }
  })
);

export default enhance(Admin);
