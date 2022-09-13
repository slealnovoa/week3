const connect = require('connect');
const app = connect();

function helloWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
};

function goodbyeWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('GoodBye World');
};

// app.use('/')
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);

app.listen(3000);