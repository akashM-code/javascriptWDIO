//Reduce function is
//to Find single ans like max , min or sum of the array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function sum(arr){
//     let sum =0;
//     for(var i=0 ; i<arr.length; i++){
//     sum= sum+arr[i]
//     }
//     return sum
// }
// console.log(sum(arr));

const output = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0)

console.log(output)



const output2 = arr.reduce(function (max, curr) {
    if (max < curr) {
        max = curr;
        return max
    }
})
console.log(output2)