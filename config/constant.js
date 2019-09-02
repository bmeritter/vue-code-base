const NODE_ENV = process.env.NODE_ENV; // webpack编译是获取node环境的配置信息
const config = {
  dev: 'https://api.coindesk.com',
  st: 'http://st',
  uat: 'http://uat',
  prod: 'http://prod',
};
module.exports = config[NODE_ENV] || config.dev;
