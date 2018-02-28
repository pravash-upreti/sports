import React from 'react';
import TableHeader, { Table } from 'semantic-ui-react';

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
      {tournaments.map((tournament, index) => {
        return (
          <Table.Body key={index}>
            <Table.Row>
              <Table.Cell>{tournament.title}</Table.Cell>
              <Table.Cell>{tournament.startDate}</Table.Cell>
              <Table.Cell>{tournament.finishDate}</Table.Cell>
              <Table.Cell>
                <NewIcon
                  name="edit"
                  color="blue"
                  tournament={tournament}
                  handleOpen={handleOpen}
                />
                <NewIcon
                  color="red"
                  name="remove"
                  tournament={tournament}
                  handleOpen={handleOpen}
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
