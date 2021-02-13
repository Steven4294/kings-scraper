import {Table, Column, Model, HasMany, PrimaryKey} from 'sequelize-typescript';
 
@Table
export default class Store extends Model<Store> {
 
    @PrimaryKey
    @Column
    id!: string;

    @Column
    klaviyoAPIKey?: string;
    
    @Column
    limitPercent?: number;

    @Column
    limitAmount?: number;

    @Column
    amountAndPercent?: boolean;

    @Column
    accessToken!: string;

    @Column
    name!: string;

    @Column
    billingId?: string;

    @Column
    accountType?: string;

    @Column
    enabled?: boolean;

    @Column
    klaviyoPricedropEventsSent?: number;

    @Column
    apiKeySynced?: boolean;
}