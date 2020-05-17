/*jshint esversion: 6 */
const http = require('http');
const routes = require('./routes');

//create a server instance, pass arrow function to handle request/response
const server = http.createServer(routes.handler);

//maintain event loop
server.listen(3000);

/*//include the database pool
const databasePool = require('./database.js');
databasePool.execute('SELECT * FROM dogs')
.then(result => {
    console.log(result);
})
.catch(err=>{
    console.log(err);
});*/