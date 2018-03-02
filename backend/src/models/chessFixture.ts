import BookShelf from '../config/bookshelf';
import { TABLES } from '../constants/tables';

import Round from './round';
import Player from './player';
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

  round() {
    return this.belongsTo(Round, 'round_id');
  }

  player1() {
    return this.belongsTo(Player, 'player_1_id');
  }

  player2() {
    return this.belongsTo(Player, 'player_2_id');
  }

  winnerPlayer() {
    return this.belongsTo(Player, 'winner_player_id');
  }

  status() {
    return this.belongsTo(FixtureStatus, 'status_id');
  }

  winningMethod() {
    return this.belongsTo(ChessWinningMethod, 'winning_method_id');
  }

  tournamentCategory() {
    return this.belongsTo(TournamentCategory, 'tournament_category_id');
  }
}

export default ChessFixture;
