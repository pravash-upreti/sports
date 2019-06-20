import BookShelf from '../config/bookshelf';

import User from './User';

/**
 * Base bookshelf model that provides columns that is common in all tables used in app.
 * All bookshelf models should extend this class.
 */
abstract class BaseModel<T extends BaseModel<any>> extends BookShelf.Model<T> {
  createdBy(): User {
    return this.belongsTo(User);
  }

  updatedBy(): User {
    return this.belongsTo(User);
  }

  timestamp() {
    return true;
  }

  softDelete() {
    return true;
  }
}

export default BaseModel;
