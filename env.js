const promise = Promise;
const bCrypt = require('bcrypt-nodejs');
const options = {
    promiseLib: promise,
};
const pgp = require('pg-promise')(options);
const app = require('express')();
let env = app.get('env');
if(env==='test')
    env = 'development';
const isProd = env==='production';
const isDev  = env==='development';
const config = require('./config.json')[env];
const connectionString = isDev ? config.pgConnection + config.database : process.env.HEROKU_POSTGRESQL_GRAY_URL;
const test_db_name = config.database + '_test';
const testConnectionString = config.pgConnection + test_db_name;
const db = pgp(connectionString);
const initDb =  isDev ? pgp(config.pgConnection + config.initDb) : db;
const testDb = pgp(testConnectionString);
const pgm = require('pg-monitor');
const color = require("cli-color");
require('dotenv').config()

const pgmTheme = {
    time: color.bgBlack.whiteBright,
    value: color.black,
    cn: color.black.bold,
    tx: color.cyan,
    paramTitle: color.magenta,
    errorTitle: color.redBright,
    query: color.bgBlue.whiteBright.bold,
    special: color.bgYellowBright.black.bold,
    error: color.red
};
pgm.setTheme(pgmTheme); // selecting your own theme;
pgm.attach(options);


module.exports = {
    bcrypt: bCrypt,
    pgp: pgp,
    pgm: pgm,
    app: app,
    config: config,
    db: db,
    testDb : testDb,
    initDb: initDb,
    db_name: config.database,
    test_db_name: test_db_name,
    isProd: isProd,
    isDev: isDev,
    databaseUrl: process.env.DATABASE_URL,
};
