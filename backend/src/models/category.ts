import BookShelf from '../config/bookshelf';
import { TABLES } from '../constants/tables';

class Category extends BookShelf.Model<Category> {
  get tableName() {
    return TABLES.CATEGORY;
  }

  timestamp() {
    return true;
  }
}

export default Category;
