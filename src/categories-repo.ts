import {model, Schema} from 'mongoose';
import {Category} from './types';

type categoriesSchemaType = {
    categories: Category[]
}
const categoriesSchema = new Schema<categoriesSchemaType>({
    categories: Array<string>
})

const Categories = model<categoriesSchemaType>('category', categoriesSchema)

const getAllCategories = () => {
    return Categories.findOne({}, {categories: 1}).distinct('categories')
}

module.exports = {
    getAllCategories
}

