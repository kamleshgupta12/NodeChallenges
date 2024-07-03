// Javascript And NodeJs both are Asynchronous  

// console.log("Heading 1");

// setTimeout(()=>{
//     console.log("Heading 2");
// },3000)

// console.log("Heading 3");


// Disadvantage of Asynchronous 

// let a =10;
// let b= 20;

// setTimeout(()=>{
//      a=20;
//      b=30;
// },2000)

// console.log(a+b);


// With the help of promise resolve Disadvantage of Aynchronous


let a=10;
let b=20;


const data = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve([20,30]);
    },3000)
})

data.then((data1)=>{
     a = data1[0];
     b= data1[1];
    console.log(a+b);
})