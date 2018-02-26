import React from "react";

import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";

function TournamentList(props) {
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
  console.log(props);

  return (
    <ul>
      {props.tournament.map((tournament, index) => {
        return (
          <li key={index}>
            {tournament.title} Start Date:{tournament.startDate} Finish Date:{
              tournament.finishDate
            }
            <EditButton
              id={props.id}
              title={props.title}
              startDate={props.startDate}
              finishDate={props.finishDate}
              tournament={props.tournament}
              isEditable={props.isEditable}
              handleEditClick={props.handleEditClick}
              updateTournament={props.updateTournament}
              handleChangeTitle={props.handleChangeTitle}
              handleChangeStartDate={props.handleChangeStartDate}
              handleChangeFinishDate={props.handleChangeFinishDate}
            />
            <DeleteButton
              id={props.id}
              tournament={props.tournament}
              updateTournament={props.updateTournament}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default TournamentList;
