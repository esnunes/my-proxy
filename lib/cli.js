const program = require('commander');
const fs = require('fs');
const path = require('path');
const http = require('http');

const dev = require('..');


const pkgInfo = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), { encoding: 'utf8' }));


program
  .version(pkgInfo.version)
  .usage('[options]')
  .option('-b, --bind [host]', 'bind to host [0.0.0.0]', '0.0.0.0')
  .option('-p, --port [port]', 'listen on port [3128]', '3128')
  .option('-v, --verbose', 'verbose mode', false)
  .option('-q, --quiet', 'quiet mode', false)
  .parse(process.argv);


const server = http.createServer();

server.on('request', dev.request(program));
server.on('connect', dev.connect(program));

server.on('clientError', (e) => console.error(e));

server.listen(program.port, program.bind, function () {
  console.log(`HTTP(S) Proxy Server listening for connections on host [${program.bind}] port [${program.port}]`);
});
