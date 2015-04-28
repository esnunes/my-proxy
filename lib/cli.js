import program from 'commander';
import fs from 'fs';
import path from 'path';
import http from 'http';

import dev from '..';


const pkgInfo = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), { encoding: 'utf8' }));


program
  .version(pkgInfo.version)
  .usage('[options]')
  .option('-b, --bind [host]', 'Bind to host [0.0.0.0]', '0.0.0.0')
  .option('-p, --port [port]', 'Listen on port [3128]', '3128')
  .option('-v, --verbose', 'Verbose mode', false)
  .option('-q, --quiet', 'Quiet mode', false)
  .parse(process.argv);


const server = http.createServer();

server.on('request', dev.request(program));
server.on('connect', dev.connect(program));

server.on('clientError', (e) => console.error(e));

server.listen(program.port, program.bind, function () {
  console.log(`HTTP(S) Proxy Server listening for connections on host [${program.bind}] port [${program.port}]`);
});
