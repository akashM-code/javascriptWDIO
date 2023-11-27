// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const obj3 = { e: 5, f: 6 };
// const mergedObj = [obj1, obj2, obj3].reduce((acc, curr) => {
//     return { ...acc, ...curr };
// }, {});
// console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

//How to merge multiple arrays into once

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

const output = [obj1,obj2,obj3].reduce((acc, curr) => {
    return {...acc,...curr};
},{});

console.log(output)



const shoppingCart = [
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Xiomi', price: 2.99, quantity: 2},
    {name: 'Samsung', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 4.99, quantity: 4},
    {name: 'Nokia', price: 4.99, quantity: 4},
]

const checkOutput = shoppingCart.reduce((acc, curr) =>{

    if(acc[curr.name] == null){
        acc[curr.name] =[];
    }
    
        acc[curr.name].push(curr);
    
    return acc;
},{})

console.log(checkOutput);

