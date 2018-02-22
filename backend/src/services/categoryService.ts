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
export async function create(params:object) {
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
    const category: Category = await new Category({ id }).fetch();

    if (!category) {
      throw new NotFoundError(categoryMessages.notFound);
    }

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
