
// const fs = require('fs')
// input = process.argv;
// if (input[2] == 'add') {
//     fs.writeFileSync(input[3], input[4])
// }
// else if (input[2] == 'remove') 
// {
// fs.unlinkSync(input[3])
// }
// else
// {
//     console.log("Invalid ");
// }


const { log } = require('console');
const fs = require('fs')
const path = require('path');

const dirPath = path.join(__filename,'New');

for(i=1; i<5; i++){
    fs.writeFileSync(dirPath + "/index "+i+".txt ","dynamic data")

}
// console.log(dirPath);

// fs.readdir(dirPath,(err,item)=>{
//     console.log(item);
// })