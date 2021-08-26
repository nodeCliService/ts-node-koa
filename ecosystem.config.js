const { name } = require('./package.json');
const path = require('path');

module.exports = {
  apps: [
    {
      name,
      script: path.resolve(__dirname, './dist/index.js'),
      args: 'one two',
      instances: require('os').cpus().length, // number 写1-4 即可 数值越低 电脑越不卡
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 4000
      }
    }
  ]
};
