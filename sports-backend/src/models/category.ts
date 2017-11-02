import BookShelf from './bookshelf';

class Category extends BookShelf.Model<Category> {
  get tableName() {
    return 'category';
  }
}

export default Category;
