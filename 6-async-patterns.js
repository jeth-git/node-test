const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/')
    {
        return res.end("Home page")
    }
    if(req.url === '/about')
    {
        // BLOCKING CODE !!!!
        for(let i = 0; i < 100; i++)
        {
            // for(let j = 0; j<100; j++)
            {
                console.log(`${i}.${j}`)
            }
        }

        res.end('About Page')
    }

    res.end('/no such entry')
})

server.listen(5000, () => {
    console.log("Server Listening on port 5000...")
})