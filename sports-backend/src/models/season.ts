import BookShelf from './bookshelf';

class Season extends BookShelf.Model<Season> {
  get tableName() {
    return 'season';
  }
}

export default Season;
