
var express = require('express');
var app = express();

app.route('/api/whoami')
  .get((req, res) => {
    res.writeHead(200, {'content-type': 'text/json'});
    res.end(JSON.stringify({
      ipaddress: req.headers['x-forwarded-for'],
      language: req.headers['accept-language'].split(',')[0],
      'user-agent': req.headers['user-agent']
    }));
  });
  
app.route('/')
  .all((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end("Hello.. Please go to /api/whoami. Thank you.");
  })

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("Server listening at " + process.env.IP + ' port ' + process.env.port);
});
