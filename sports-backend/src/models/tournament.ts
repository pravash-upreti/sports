import BookShelf from './bookshelf';

class Tournament extends BookShelf.Model<Tournament> {
  get tableName() {
    return 'tournament';
  }
}

export default Tournament;
