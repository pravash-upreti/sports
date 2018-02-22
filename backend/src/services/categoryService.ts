import { Collection } from 'bookshelf';
import * as HttpStatus from 'http-status-codes';

import { categoryMessages } from '../constants/messages';

import Category from '../models/category';
import NotFoundError from '../errors/NotFoundError';
import NoRowUpdatedError from '../errors/NoRowUpdatedError';

/**
 * Create a new category.
 *
 * @export
 * @param {object} params
 * @returns {object}
 * @throws {NoRowUpdatedError|error}
 */
export async function create(params: object) {
  try {
    try {
      const category: Category = await new Category(params).save();

      if (!category) {
        throw new NoRowUpdatedError(categoryMessages.unableToCreate);
      }

      return {
        data: category,
        code: HttpStatus.CREATED,
        message: categoryMessages.created,
        status: HttpStatus.getStatusText(HttpStatus.CREATED)
      };
    } catch (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
};

/**
 * Fetch all categories.
 *
 * @export
 * @returns {object}
 * @throws {error}
 */
export async function getAll() {
  try {
    const categories: Collection<Category> = await new Category().fetchAll();

    return {
      data: categories,
      code: HttpStatus.OK,
      message: categoryMessages.fetched,
      status: HttpStatus.getStatusText(HttpStatus.OK)
    };
  } catch (error) {
    throw(error);
  }
}

/**
 * Fetch details of a category.
 *
 * @export
 * @param {number} id
 * @returns {object}
 * @throws {error}
 */
export async function get(id: number) {
  try {
    const category: Category = await findById(id);

    return {
      data: category,
      code: HttpStatus.OK,
      message: categoryMessages.fetched,
      status: HttpStatus.getStatusText(HttpStatus.OK)
    };
  } catch (error) {
    throw(error);
  }
}

/**
 * Update a category details.
 *
 * @export
 * @param {number} id
 * @param {object} params
 * @returns {object}
 * @throws {NoRowUpdatedError|error}
 */
export async function update(id: number, params:object) {
  try {
    const category: Category = await findById(id);

    const updatedCategory = await category.save(params, { patch: true });

    if (!updatedCategory) {
      throw new NoRowUpdatedError(categoryMessages.unableToUpdate);
    }

    return {
      code: HttpStatus.OK,
      data: updatedCategory,
      message: categoryMessages.updated,
      status: HttpStatus.getStatusText(HttpStatus.OK)
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Remove or delete a category.
 *
 * @export
 * @param {number} id
 * @returns {object}
 * @throws {NoRowUpdatedError|error}
 */
export async function remove(id: number) {
  try {
    const category: Category = await findById(id);

    const deletedTournament = await category.destroy();

    if (!deletedTournament) {
      throw new NoRowUpdatedError(categoryMessages.unableToRemove);
    }

    return {
      data: {
        id
      },
      code: HttpStatus.OK,
      message: categoryMessages.removed,
      status: HttpStatus.getStatusText(HttpStatus.OK)
    };
  } catch (error) {
    throw(error);
  }
}

/**
 * Find a category by ID.
 *
 * @param {number} id
 * @returns {Category}
 * @throws {NotFoundError|error}
 */
async function findById(id: number) {
  try {
    const category: Category = await new Category({ id }).fetch();

    if (!category) {
      throw new NotFoundError(categoryMessages.notFound);
    }

    return category;
  } catch (error) {
    throw error;
  }
}
