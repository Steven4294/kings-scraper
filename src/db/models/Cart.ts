import {Table, Column, Model, HasMany, PrimaryKey, BelongsToMany} from 'sequelize-typescript';
import ProductVariantCart from './ProductVariantCart';
import ProductVariant from './ProductVariant';
 
@Table
export default class Cart extends Model implements Cart {
 
    @PrimaryKey
    @Column
    id!: string;
    
    @Column
    abandoned_checkout_url!: string;

    @Column
    email!: string;

    @Column
    rawJson?: string;

    @BelongsToMany(() => ProductVariant, () => ProductVariantCart)
    products!: ProductVariant[];
}

// @Table
// class Author extends Model<Author> {

//   @BelongsToMany(() => Book, () => BookAuthor)
//   books: Book[];
// }