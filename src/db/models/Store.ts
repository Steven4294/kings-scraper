import {Table, Column, Model, HasMany, PrimaryKey} from 'sequelize-typescript';
 
@Table
export default class Store extends Model<Store> {
 
    @PrimaryKey
    @Column
    id!: string;

    @Column
    klaviyoAPIKey?: string;
    
    @Column
    accessToken!: string;

    @Column
    name!: string;
}