import { Sequelize } from 'sequelize-typescript';

const uri = 'postgres://edwfxtxadowqjw:3dc337268b226f9b4ee934a5c817c3a5e9517c65ea07779a6438f63f92a53d8b@ec2-54-158-190-214.compute-1.amazonaws.com:5432/dajno1b88amgs9?ssl=no-verify'

export const sequelize = new Sequelize(uri, {
    models: [__dirname + '/models']
})
