import {Table, Column, Model, HasMany, PrimaryKey} from 'sequelize-typescript';
 
@Table
export default class ProductVariant extends Model implements ProductVariant {
 
    @PrimaryKey
    @Column
    id!: string;
    
    @Column
    price!: string;
}