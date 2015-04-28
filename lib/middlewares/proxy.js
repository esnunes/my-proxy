import httpProxy from 'http-proxy';
import url from 'url';


const proxy = httpProxy.createProxyServer();


export default async function middleware (opts, req, res) {
  const urlData = url.parse(req.url);

  if (opts.verbose) console.log(`${req.method} ${urlData.href}`);

  req.url = urlData.path;

  const target = `${urlData.protocol}//${urlData.host}`;

  proxy.web(req, res, { target, auth: urlData.auth }, (e) => {
    res.statusCode = 500;
    res.end(JSON.stringify(e));
  });

  return false;
}
