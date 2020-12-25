import {Table, Column, Model, HasMany, PrimaryKey, BelongsToMany} from 'sequelize-typescript';
import ProductVariantCart from './ProductVariantCart';
import Cart from './Cart';
 
@Table
export default class ProductVariant extends Model implements ProductVariant {
 
    @PrimaryKey
    @Column
    id!: string;
    
    @Column
    price!: string;

    @Column
    imgSrc?: string;

    @BelongsToMany(() => Cart, () => ProductVariantCart)
    carts!: Cart[];
}