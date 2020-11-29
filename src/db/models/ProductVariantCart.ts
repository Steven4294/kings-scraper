import {Table, Column, Model, HasMany, PrimaryKey, ForeignKey} from 'sequelize-typescript';
import ProductVariant from './ProductVariant';
import Cart from './Cart';

@Table
export default class ProductVariantCart extends Model implements ProductVariantCart {

  @ForeignKey(() => ProductVariant)
  @Column
  productVariant_id!: string;

  @ForeignKey(() => Cart)
  @Column
  cart_id!: string;
}