const {writeFileSync} = require('fs')
for(let i = 0; i < 1000; i++)
{
    writeFileSync("./content/big.txt", `hello world ${i}\n`, {flag: 'a'})
}

// A "big file" is any data source that threatens to hog your server's RAM. In professional Node.js development, the rule of thumb is: If you don't need the whole file at once, stream it.