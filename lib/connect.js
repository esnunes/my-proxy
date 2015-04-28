import url from 'url';
import net from 'net';


export default function onConnect (opts) {

  async function handler (req, sock, head) {
    const urlData = url.parse(`http://${req.url}`);

    if (opts.verbose) console.log(`${req.method} ${urlData.href}`);

    const srvSock = net.connect(urlData.port, urlData.hostname, () => {
      const res = [];
      res.push('HTTP/1.1 200 Connection Established');
      res.push('Proxy-agent: dev-proxy');
      res.push('', '');
      sock.write(res.join('\r\n'));

      srvSock.write(head);
      srvSock.pipe(sock);
      sock.pipe(srvSock);
    });

    srvSock.on('error', (e) => console.error(e));
    sock.on('error', (e) => console.error(e));
  }

  return handler;
}
