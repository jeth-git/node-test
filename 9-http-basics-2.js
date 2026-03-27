//When you serve an HTML file over HTTP in node.js, you are essentially creating a conversation where the HTTP Headers tell the browser how to "read" the file you are about to stream or send

// The "Handshake" (Header + Body)
// For a browser to render you HTML correctly, the HTTP response must have two parts:

// The Header(Content-Type: text/html): This tells the browser "Don't show the code, render the tags!"
// The Body: The actual <html>...</html>content

const http = require("http")
const fs = require('fs')

const server = http.createServer((req, res) => {
    //1. Set the Header first!
    // res.writeHead(200, {'Content-Type': 'text/html'})

    //2. Read the file
    fs.readFile('./index-en.html', (err, data) => {
        if(err){
            res.writeHead(404)
            return res.end('File not found')
        }
        // Send the body
        res.end(data)
    })
})

server.listen(5000)

// The professional way

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'})

//     //Create a read stream
//     const fileStream = fs.createReadStream('./content/big.txt')

//     // pip the HTML straight to the HTTP response
//     fileStream.pipe(res)
// })

// server.listen(5000)