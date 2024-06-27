
// non-global core module 
// Ex:- fs,buffer,HTTP 

const fs = require("fs");
const { buffer } = require("stream/consumers");
fs.writeFileSync("demo.css","hello jiii")
console.log(__filename);