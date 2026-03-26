// transform stream

const fs  = require('fs')

const path = require("path")
const {Transform} = require("stream")

const inputFilePath = path.join(__dirname, "./content/result-sync.txt")
const transformOutputFilePath = path.join(__dirname, "./content/transformOutput.txt")

const readStream = fs.createReadStream(inputFilePath, {encoding: "utf-8"})

const writeStream = fs.createWriteStream(transformOutputFilePath)

// Transform Data 
const uppercaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase())
        callback()
    }
})

readStream.pipe(uppercaseTransform).pipe(writeStream)