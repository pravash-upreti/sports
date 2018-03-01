import React from 'react';
import TableHeader, { Table } from 'semantic-ui-react';

import { TOURNAMENT_ACTIONS } from '../../../constants/constants';

import NewIcon from '../../commons/Icon';

function TournamentList(props) {
  const {
    title,
    formData,
    modalOpen,
    startDate,
    finishDate,
    handleOpen,
    tournaments,
    handleClose,
    handleChange,
    updateTournaments
  } = props;

  return (
    <Table compact>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Tournament Name</Table.HeaderCell>
          <Table.HeaderCell>Start Date</Table.HeaderCell>
          <Table.HeaderCell>Finish Date</Table.HeaderCell>
          <Table.HeaderCell>Edit/Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      {tournaments &&
        tournaments.map((tournament, index) => {
          return (
            <Table.Body key={index}>
              <Table.Row>
                <Table.Cell>{tournament.title}</Table.Cell>
                <Table.Cell>{tournament.startDate}</Table.Cell>
                <Table.Cell>{tournament.finishDate}</Table.Cell>
                <Table.Cell>
                  <NewIcon
                    color="blue"
                    tournament={tournament}
                    handleOpen={handleOpen}
                    name={TOURNAMENT_ACTIONS.edit}
                  />
                  <NewIcon
                    color="red"
                    tournament={tournament}
                    handleOpen={handleOpen}
                    name={TOURNAMENT_ACTIONS.remove}
                  />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          );
        })}
    </Table>
  );
}

export default TournamentList;
