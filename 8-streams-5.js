// writeable streams

const fs = require("fs")
const path = require("path")

const inputFilePath = path.join(__dirname, "./content/result-sync.txt")
const outputFilePath = path.join(__dirname, "./content/output.txt")

const readStream = fs.createReadStream(inputFilePath, {encoding: "utf-8"})

const writeStream = fs.createWriteStream(outputFilePath)

readStream.pipe(writeStream)

writeStream.on("finish", () => {
    console.log("Data has been written")
})