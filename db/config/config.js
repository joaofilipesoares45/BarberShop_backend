const path = require('path')
require('dotenv/config')

module.exports = {
  "development": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "dialect": "mysql",
    "dialectOptions": {
      ssl: {
        rejectUnauthorized: true,
      },
    },
    "define":{
      timestamps: true,
      underscored: true
    }
  },
  "test": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "dialect": "mysql",
    "dialectOptions": {
      ssl: {
        rejectUnauthorized: true,
      },
    },
    "define":{
      timestamps: true,
      underscored: true
    }
  },
  "production": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "dialect": "mysql",
    "dialectOptions": {
      ssl: {
        rejectUnauthorized: true,
      },
    },
    "define":{
      timestamps: true,
      underscored: true
    }
  }
}
