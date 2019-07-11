require('babel-register');

const router = require('./index').default;
const Sitemap = require('../lib').default;

(
  new Sitemap(router)
    .build('http://strongandhayden.com', { limitCountPaths: 5000 })
    .save('./sitemap.xml', '/static/')
);