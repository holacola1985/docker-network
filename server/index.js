const {createServer} = require('http');

createServer((request, response) => {
  response.write('hello');
  response.end();
}).listen(3333, () => console.log('listening...'));
