// readable

const fs = require('fs')
const path = require('path')

const inputFilePath = path.join(__dirname, "./content/big.txt")

const readStream = fs.createReadStream(inputFilePath)

readStream.on("data", (chunk) => {
    console.log("Received a chunk of data : ","utf", chunk)
})

readStream.on("end", () => {
    console.log("Finished reading the file")
})

readStream.on("error", (err) => {
    console.log("An error occured : ", err.message);
})