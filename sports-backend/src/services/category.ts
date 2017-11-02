import Category from '../models/category';

export let getAllCategories = async () => {
  return Category.fetchAll();
};

export let addCategory = async (data: any) => {
  return new Category(data).save();
};
