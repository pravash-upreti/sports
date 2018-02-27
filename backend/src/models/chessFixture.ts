import BookShelf from '../config/bookshelf';
import { TABLES } from '../constants/tables';
import Team from './team';
import Round from './round';
import FixtureStatus from './fixtureStatus';
import TournamentCategory from './tournamentCategory';
import ChessWinningMethod from './chessWinningMethod';

class ChessFixture extends BookShelf.Model<ChessFixture> {
  get tableName() {
    return TABLES.CHESS_FIXTURE;
  }

  timestamp() {
    return true;
  }

  status() {
    return this.belongsTo(FixtureStatus, 'status_id');
  }

  round() {
    return this.belongsTo(Round, 'round_id');
  }

  team1() {
    return this.belongsTo(Team, 'team_1_id');
  }

  team2() {
    return this.belongsTo(Team, 'team_2_id');
  }

  winnerTeam() {
    return this.belongsTo(Team, 'winner_team_id');
  }

  winningMethod() {
    return this.belongsTo(ChessWinningMethod, 'winning_method_id');
  }

  tournamentCategory() {
    return this.belongsTo(TournamentCategory, 'tournament_category_id');
  }
}

export default ChessFixture;
