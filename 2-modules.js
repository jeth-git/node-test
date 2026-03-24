// Modules

// It is a js file that contains reusable block of codes that encapsulates related functionalities

// Common js is a module system(library) create to standardize js development outside of web browsers, primarily for server-side applications. It is the library that enables every to become a module, there enabling the access of the modules data by other modules.
// we get the library by default. No installation needed
const {john , peter} = require('./2-modules-2')
const sayHi = require('./2-modules-3')
const data = require('./2-modules-4')

const person = {name: 'bob'}

require('./2-modules-5')

// console.log(data)
// sayHi(john)
// sayHi(peter)