import React from 'react';
import TableHeader, { Table, Icon } from 'semantic-ui-react';

import { TOURNAMENT_ACTIONS } from '../../../constants/constants';

function TournamentList(props) {
  const { title, startDate, finishDate, handleOpen, tournaments } = props;

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
                  <Icon
                    color="blue"
                    style={{ cursor: 'pointer' }}
                    name={TOURNAMENT_ACTIONS.edit}
                    onClick={() =>
                      handleOpen(TOURNAMENT_ACTIONS.edit, tournament)
                    }
                  />
                  <Icon
                    color="red"
                    style={{ cursor: 'pointer' }}
                    name={TOURNAMENT_ACTIONS.remove}
                    onClick={() =>
                      handleOpen(TOURNAMENT_ACTIONS.remove, tournament)
                    }
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
