//Exercise 1

// const safeJsonParse = (input) => {
//     let output
//     try{
//         output = JSON.parse(input)
//     }catch{
//         output = "Invalid JSON format"
//     }

//     return output
// }

// console.log(safeJsonParse('{"name": "John"}')); 
// // Output: { name: "John" }

// console.log(safeJsonParse('invalid json')); 
// // Output: "Invalid JSON format"



//Exercise 2
const fs = require("fs");

const readFileWithErrorHandling = (fileName, callback) => {
    fs.readFile(fileName, 'utf8', (err, data) =>{
        if (err) {
            if (err.code === 'EISDIR') {
                callback('An operation expected a file, but the given pathname was a directory.')
                return
            } else if (err.code === 'ENOENT') {
                callback('No such file ')
                return
            } else{
                callback(err.message)
                return
            }
        }


        const sizeInBytes = Buffer.byteLength(data, "utf8");
        callback(`File read successfully. Size: ${sizeInBytes} bytes`)
    })
}


readFileWithErrorHandling('existing.txt', (result) => {
  console.log(result);
  // Success: "File read successfully. Size: 150 bytes"
  // Or error: "File not found: existing.txt"
});