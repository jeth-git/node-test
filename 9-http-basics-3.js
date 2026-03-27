const http = require('http')
const fs = require('fs')


http.createServer((req, res) => {
    // 1. Grab the language header (default to English)

    const langHeader = req.headers['accept-language'] || '';

    // 2. Determine the path to the right HTML file
    let filePath = './index-en.html'

    if(langHeader.includes('fr')){
        filePath = './index-fr.html' // Server French for Yaounde
    }

    // 3.Set the correct Content-Type Header
    res.writeHead(200, {'Content-Type': 'text/html'})

    //4. Stream the file for better perfomance
    const readStream = fs.createReadStream(filePath)
    readStream.pipe(res)
}).listen(500);