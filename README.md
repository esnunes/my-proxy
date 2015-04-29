# my-proxy

my-proxy is an HTTP(S) Proxy that enables a developer to access internal networks (localhost, VMs, Docker containers) from external devices as they were in the host computer.

<img src="./docs/usage-example.png" style="width: 100%;" />

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
- [ ] filter requests (something similar to tcpdump)
- [ ] simulate mobile networking conditions (Edge, 3G and even offline)
