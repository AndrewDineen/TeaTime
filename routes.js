/*jshint esversion: 6 */
const fs = require('fs');

const requestHandler = (request, response) => 
{
    const url = request.url;
    const method = request.method;
    if(url === '/'){
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><title>Enter Message</title></head>');
        response.write('<body><form action="/message" method="post"><input type ="text" name="message"><button type="submit">Send</button></form></body>');
        response.write('<html>');
        response.write('</html>');
        //done writing, dont continue
        response.end();
        
    }
    //if the message post request was made
    if(url === '/message' && method === 'POST')
    {
       //list of chunks to make the buffer
       const body = [];
    
       //push each chunk to the buffer as it arrives
       request.on('data', (chunk) => 
       {
        //console.log(chunk);    
        body.push(chunk);
       });
    
        //when we have all the chunks
        request.on('end', () => 
        {
            //create the buffer
            const parsedBody = Buffer.concat(body).toString();
    
            //take everything to the right of the equals sign
            const message = parsedBody.split('=')[1];
    
            //write it to the text file
            fs.writeFile('message.txt', message, (err) => 
            {
                response.statusCode = 302;
                response.setHeader('Location', '/');
                response.end();
            });
        });
        
        //we continue to redirect and functions above wait
        //302 is the redirect status code
        /*response.statusCode = 302;
        response.setHeader('Location', '/');
        response.end();*/
    }
};
// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'

// };

//module.exports = requestHandler; for just one item

// module.exports.handler = requestHandler;
// module.exports.someText = 'some hard coded text';

exports.handler = requestHandler;
exports.someText = 'some hard coded text';

