// http headers

// http Headers are the "metadata" of a request or response. They allow the client(browser) and the server(you Node.js backend) to pass additional informations along with the actual data(the HTML, JSON, or images)
// A common description is a letter, where the letter is the data sent i.e react code, json, images, html, in programming terms and the descriptions written on the eveloppe is the http header 

// HTTP headers are structured in key-value pairs seperated by colons

// example Content-Type : application/json

// There are 4 types of headers
// 1. request header: UserAgent, Accept-Language, Authorization
// 2.Response Headers: Server, Content-Type, Set-Cookie
// 3.Representation headers: Content-Length, Content-Encoding
// 4.Fetch/CORS Headers: Access-Control-Allow-Origin


const http = require('http')

const server = http.createServer((req, res) => {
    // Reading a Header(Request)
    const language = req.headers['accep-language']
    console.log(`User prefers: ${language}`)

    // Setting a Header (Response)
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Succes!')

})

server.listen(5000)