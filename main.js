var http = require('http'),  
    httpProxy = require('http-proxy');

var options = {  
  hostnameOnly: true,
  router: {
    'dev.server.ironbane.com': '127.0.0.1:3000',
    'play.server.ironbane.com': '127.0.0.1:3100',
  }
}

var proxyServer = httpProxy.createServer(options).listen(80);  
