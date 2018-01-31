import { TABLES } from './../utils/constants';
import BookShelf from '../config/bookshelf';

class Tournament extends BookShelf.Model<Tournament> {
  tableName: 'tournament';
  hasTimestamps: true;
}

export default Tournament;
