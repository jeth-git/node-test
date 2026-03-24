// Globals
// in node there is no window, but there are some globals 

// globals are variables , objects, functions that are available throught out the app in all modules without being explicitly imported

// some of them are 
/*
    __dirname: directory path
    __filename: file name
    require: function to use modules (CommonJS)
    module: info about current module (file)
    process: info about env where the program is being executed
*/

console.log(__dirname);
console.log(module)
console.log(`process ${process}`)