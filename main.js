var http = require('http'),
    httpProxy = require('http-proxy'),
    proxy = httpProxy.createProxyServer({}),
    url = require('url');

http.createServer(function(req, res) {
    var hostname, pathname;

    if(!req.headers.host) {
        console.log('no host in headers', req.headers);
    } else {
        hostname = req.headers.host.split(":")[0];
    }
    pathname = url.parse(req.url).pathname;

    console.log('hostname: ', hostname);
    console.log('pathname: ', pathname);

    // TODO: pull ports from config
    switch(hostname)
    {
        case 'dev.server.ironbane.com':
            proxy.web(req, res, { target: 'http://localhost:5001' });
            break;
        case 'play.server.ironbane.com':
            proxy.web(req, res, { target: 'http://localhost:3100' });
            break;
        default:
            proxy.web(req, res, { target: 'http://localhost:3100' });
    }
}).listen(8080, function() {
    console.log('proxy listening on port 8080');
});
