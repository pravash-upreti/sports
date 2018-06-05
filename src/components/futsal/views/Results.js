import React, {Fragment} from 'react';

import TournamentContentGroup from './TournamentContentGroup';

class Results extends React.Component {
  render() {
    let tournamentDataSet = [
      {
        month: "July",
        data: [
          { 
            date: "21 July",
            day: "Sunday",
            time: "10:00 am",
            firstTeam: {
              name: "The Royal Strikers",
              score: 3
            },
            secondTeam: {
              name: "Flying Pundits",
              score: 8
            },
            halfTimeScore: {
              firstTeam: 1,
              secondTeam: 2
            }
          },
          { 
            date: "21 July",
            day: "Sunday",
            time: "10:00 am",
            firstTeam: {
              name: "The Royal Strikers",
              score: 3
            },
            secondTeam: {
              name: "Flying Pundits",
              score: 8
            },
            halfTimeScore: {
              firstTeam: 1,
              secondTeam: 2
            }
          },
          { 
            date: "21 July",
            day: "Sunday",
            time: "10:00 am",
            firstTeam: {
              name: "The Royal Strikers",
              score: 3
            },
            secondTeam: {
              name: "Flying Pundits",
              score: 8
            },
            halfTimeScore: {
              firstTeam: 1,
              secondTeam: 2
            }
          },
          { 
            date: "21 July",
            day: "Sunday",
            time: "10:00 am",
            firstTeam: {
              name: "The Royal Strikers",
              score: 3
            },
            secondTeam: {
              name: "Flying Pundits",
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

    return(
      <Fragment>
        <h3 className="tournament-content__heading">Results</h3>
        {
          tournamentDataSet.map((dataItem) => <TournamentContentGroup dataSet = {dataItem}/>)
        }
      </Fragment>
    );
  }
}

export default Results;
