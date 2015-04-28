# my-proxy

pretty simple https(s) proxy.

## install instructions
```bash
npm install -g my-proxy
```

## usage
```bash
  Usage: my-proxy [options]

  Options:

    -h, --help         output usage information
    -V, --version      output the version number
    -b, --bind [host]  bind to host [0.0.0.0]
    -p, --port [port]  listen on port [3128]
    -v, --verbose      verbose mode
    -q, --quiet        quiet mode
```

### example
```bash
my-proxy
# HTTP(S) Proxy Server listening for connections on host [0.0.0.0] port [3128]
```

## todo
- [ ] add proxy authentication
