'use strict';

/**
 * pratice Node.js project
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

module.exports = function (set, get, has) {

  // 服务器监听端口
  set('web.port', 3000);

  // session secret
  set('web.session.secret', 'test');

  // session redis connection
  set('web.session.redis', {
    host: '127.0.0.1',
    port: 6379,
  });

  // limiter redis connection
  set('limiter.redis', {
    host: '127.0.0.1',
    port: 6379,
    prefix: 'L:',
  });

  // captcha redis connection
  set('captcha.redis', {
    host: '127.0.0.1',
    port: 6379,
    prefix: 'C:',
  });

};
