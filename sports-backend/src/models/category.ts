import BookShelf from './bookshelf';
import CONSTANTS from '../utils/constants';

class Category extends BookShelf.Model<Category> {
  get tableName() {
    return CONSTANTS.TABLES.CATEGORY;
  }
}

export default Category;
