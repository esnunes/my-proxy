import proxy from './middlewares/proxy';


async function invalid () {
  throw { status: 500 };
}


export default function onRequest (opts) {

  async function handler (req, res) {
    const middlewares = [
      proxy,
      invalid,
    ].reverse();

    try {
      while (await middlewares.pop()(opts, req, res)) ;
    } catch (e) {
      if (!opts.quiet) console.error(e);
      res.statusCode = e.status || 500;
      res.end();
    }
  }

  return handler;
}
