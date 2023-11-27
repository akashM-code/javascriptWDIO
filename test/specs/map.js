//Map functionality is used to transform the array
const arr = [5, 10, 15, 20]
//Double  = [10,20,30,40]
//Triple = [15,30,45,60]
function Double(x) {
    return x * 2;
}
const output = arr.map(Double)
console.log(output);


const arr2 = [5, 10, 15, 20]
//Double  = [10,20,30,40]
//Triple = [15,30,45,60]
function triple(x) {
    return x * 3;
}
const output2 = arr.map(triple)
console.log(output2);



const arr3 = [5, 10, 15, 20]
const output3 = arr.map(function half(x) {
    return x / 2;
})
console.log(output3);




const arr4 = [5, 10, 15, 20]
const output4 = arr4.map(x => x*2)
console.log(output4);