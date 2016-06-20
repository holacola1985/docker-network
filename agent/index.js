const {request} = require('http');

setTimeout(() => {
  request('http://server:3333/', request => {
    console.log('status:', request.statusCode);
  }).end();
}, 1000);
