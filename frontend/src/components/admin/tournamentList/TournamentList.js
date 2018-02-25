import React from "react";

import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";

const TournamentList = props => {
  return (
    <ul>
      {props.tournament.map((tournament, index) => {
        return (
          <li key={index}>
            {tournament.title} Start Date:{tournament.startDate} Finish Date:{
              tournament.finishDate
            }
            <DeleteButton />
            <EditButton />
          </li>
        );
      })}
    </ul>
  );
};

export default TournamentList;
