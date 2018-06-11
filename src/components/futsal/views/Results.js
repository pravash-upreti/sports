import React, { Fragment } from 'react';

import TournamentContentGroup from './TournamentContentGroup';

class Results extends React.Component {
  render() {
    let tournamentDataSet = [
      {
        month: 'July',
        data: [
          {
            id: 1,
            date: '21 July',
            day: 'Sunday',
            time: '10:00 am',
            firstTeam: {
              name: 'The Royal Strikers',
              score: 3
            },
            secondTeam: {
              name: 'Flying Pundits',
              score: 8
            },
            halfTimeScore: {
              firstTeam: 1,
              secondTeam: 2
            }
          },
          {
            id: 2,
            date: '21 July',
            day: 'Sunday',
            time: '10:00 am',
            firstTeam: {
              name: 'The Royal Strikers',
              score: 3
            },
            secondTeam: {
              name: 'Flying Pundits',
              score: 8
            },
            halfTimeScore: {
              firstTeam: 1,
              secondTeam: 2
            }
          },
          {
            id: 3,
            date: '21 July',
            day: 'Sunday',
            time: '10:00 am',
            firstTeam: {
              name: 'The Royal Strikers',
              score: 3
            },
            secondTeam: {
              name: 'Flying Pundits',
              score: 8
            },
            halfTimeScore: {
              firstTeam: 1,
              secondTeam: 2
            }
          },
          {
            id: 4,
            date: '21 July',
            day: 'Sunday',
            time: '10:00 am',
            firstTeam: {
              name: 'The Royal Strikers',
              score: 3
            },
            secondTeam: {
              name: 'Flying Pundits',
              score: 8
            },
            halfTimeScore: {
              firstTeam: 1,
              secondTeam: 2
            }
          }
        ]
      },
      {
        month: 'June',
        data: [
          {
            id: 5,
            date: '21 June',
            day: 'Sunday',
            time: '10:00 am',
            firstTeam: {
              name: 'The Royal Strikers',
              score: 3
            },
            secondTeam: {
              name: 'Flying Pundits',
              score: 8
            },
            halfTimeScore: {
              firstTeam: 1,
              secondTeam: 2
            }
          },
          {
            id: 6,
            date: '21 June',
            day: 'Sunday',
            time: '10:00 am',
            firstTeam: {
              name: 'The Royal Strikers',
              score: 3
            },
            secondTeam: {
              name: 'Flying Pundits',
              score: 8
            },
            halfTimeScore: {
              firstTeam: 1,
              secondTeam: 2
            }
          },
          {
            id: 7,
            date: '21 June',
            day: 'Sunday',
            time: '10:00 am',
            firstTeam: {
              name: 'The Royal Strikers',
              score: 3
            },
            secondTeam: {
              name: 'Flying Pundits',
              score: 8
            },
            halfTimeScore: {
              firstTeam: 1,
              secondTeam: 2
            }
          }
        ]
      }
    ];

    return (
      <Fragment>
        <h3 className="tournament-content__heading">Results</h3>
        {
          tournamentDataSet.map((dataItem) => (
            <TournamentContentGroup key={`tournament-content-group-${dataItem.month}`} dataSet = {dataItem}/>
          ))
        }
      </Fragment>
    );
  }
}

export default Results;
