// Node Package Manager
// It is the default package manager for Node.js and the world's largest software registry
// It is a container that contains over two million package of open-source JS codes.

// npm has two main components the CLI tool and Online Registry

// A package is a folder containing reusable JS code with a package.json file

// e.g lodash, express(web app framework), react(UI library)

// npm is the backbone of Node.js development


// npx Node Package Executer

// Testing a package compatibility
// Initialization and one-time use
// Work environment constraints

// A large, pubilc database that hosts, manages, and distributes JS packages(modules) for the Node.js ecosystem e.g npm

// npm registry is a database that stores, manages, and distributes reusable JS code with a package.json file.

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency -- use it in any project
// npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

// a devdependency is a category of local dependency that are used while you are actively writing code, testing, or building your app. e.g typescript, ESLint(linter), Jest(testing), or Webpack(bundler)
// npx (NODE PACKAGE EXECUTE)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// node_modules (the artefact) is the "heavy lifting" that contains the actual source code of the dependency while package.json(the manifest) is "brain" the lightweight json file use to store the dependencies metadata(name, version, author) it tells the other devs(your server) exactly what needs to be installed for the app to work

// the package-lock.json file is a file that contains the exact details(like dependencies and their sub-dependencies if they exist, the exact version of the dependency to which the original project was developped) about the dependecy. It is very crucial during shared works. 

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)
