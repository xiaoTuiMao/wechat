var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'wechat'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/wechat-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'wechat'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/wechat-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'wechat'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/wechat-production'
  }
};

module.exports = config[env];
