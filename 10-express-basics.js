const express = require('express')
const path = require("path")
// relative path : href="style.css"
// root relative path : href="/style.css"
const app = express()

app.use(express.static(path.join("public")))

console.log("dir:"+__dirname)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index-en.html'))
})


app.all("/*splat", (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})