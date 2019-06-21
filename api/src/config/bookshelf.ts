import knex from './knex';
import Bookshelf from 'bookshelf';

const bookshelf: Bookshelf = Bookshelf(knex);

export default bookshelf;
