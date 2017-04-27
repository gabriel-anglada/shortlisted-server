let restify = require('restify');

const server = restify.createServer({
    name: 'shortlisted',
    version: '1.0.0'
});

server.get('/echo/:name', function (req, res, next) {
    res.send(req.params);
    return next();
});

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});