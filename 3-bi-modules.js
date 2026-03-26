// Built-in Modules 

// Some of them are
// Operating System BI modules
// PATH BI modules 
// File System BI modules
// HTTP modules


// OS BI-Module
const os = require('os')


// info about current user
const user = os.userInfo()
// console.log(user)

// method returns the system uptime in seconds
// console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
// console.log(currentOs)

// PATH BI-Module
const path = require('path')

// console.log(path.sep)

const filePath = path.join('/conent', 'subfolder', 'text.txt')
// console.log(filePath)

const base = path.basename(filePath)
// console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
// console.log(absolute)


// File System BI Module
// non-blocking method code and blocking code

// The synchrounous approach (the non-blocking)
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second)

// writeFileSync(
//     './content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'}
// )

// The asynchronous approach (the blocking code)

const {readFile, writeFile} = require('fs')
console.log('start')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }

    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            // console.log(err)
        }

        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`
            , (err, result) => {
                if(err){
                    // console.log(err)
                    return
                }
                // console.log('done with this task')
            }
        )
    })
})
console.log('starting next task')


// HTTP BI-module

const http = require('http');

const server = http.createServer((req, res) => {
    
    if(req.url === '/')
    {
        return res.end('Welcome to our home page')
    }
    if(req.url === '/about')
    {
       return res.end('Here is our short history')
    }

    // console.log(req)
    res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking </p>
            <a href='/'>back</a>
        `)
    
})

server.listen(5000)

