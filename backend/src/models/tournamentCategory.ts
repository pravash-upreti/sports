import { TABLES } from '../constants/tables';

import Category from './category';
import Tournament from './tournament';
import BookShelf from '../config/bookshelf';

class TournamentCategory extends BookShelf.Model<TournamentCategory> {
  get tableName() {
    return TABLES.TOURNAMENT_CATEGORY;
  }

  timestamp() {
    return true;
  }

  category() {
    return this.belongsTo(Category);
  }

  tournament() {
    return this.belongsTo(Tournament);
  }
}

export default TournamentCategory;
