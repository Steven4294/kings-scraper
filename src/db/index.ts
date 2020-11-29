// import * as sequelize from "sequelize";
// import {StoreFactory} from "./test";

// export const dbConfig = new sequelize.Sequelize(
//     (process.env.DB_NAME = "db-name"),
//     (process.env.DB_USER = "db-user"),
//     (process.env.DB_PASSWORD = "db-password"),
//     {
//         port: Number(process.env.DB_PORT) || 54320,
//         host: process.env.DB_HOST || "localhost",
//         dialect: "postgres",
//         pool: {
//             min: 0,
//             max: 5,
//             acquire: 30000,
//             idle: 10000,
//         },
//     }
// );

import {Sequelize} from 'sequelize-typescript';
 
// const sequelize =  new Sequelize({
//         // database: 'some_db',
//         // dialect: 'sqlite',
//         // username: 'root',
//         // password: '',
//         // storage: ':memory:',
//         connectionString: '',
//         models: [__dirname + '/models'], // or [Player, Team],
// });
const uri = 'postgres://edwfxtxadowqjw:3dc337268b226f9b4ee934a5c817c3a5e9517c65ea07779a6438f63f92a53d8b@ec2-54-158-190-214.compute-1.amazonaws.com:5432/dajno1b88amgs9?ssl=no-verify'

console.log('setting up db')

export const sequelize = new Sequelize(uri, {
    models: [__dirname + '/models']
})

// sequelize.sync()


// const db = {}

// db.Sequelize = Sequelize
// db.sequelize = sequelize
// //...
// db.stores = storeModel(sequelize, Sequelize)
// db.productVariants = productVariantModel(sequelize, Sequelize)
// db.carts = cartModel(sequelize, Sequelize)

// db.carts.belongsToMany(db.productVariants, {
//     through: "productVariant_cart",
//     as: "products",
//     foreignKey: "cart_id",
// });

// db.productVariants.belongsToMany(db.carts, {
//     through: "productVariant_cart",
//     as: "carts",
//     foreignKey: "productVariant_id",
// });

// export default db


