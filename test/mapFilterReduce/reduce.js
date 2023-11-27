let users = [
    { first: 'John', second: 'Doe', subject: "Maths", marks: '60', grade: 'A' },
    { first: 'Ling', second: ' Jess', subject: 'english', marks: '60', grade: 'B' },
    { first: '1234', second: ' 1', subject: 'englishMaths', marks: '23', grade: 'C' },
    { first: '4567', second: ' Je2ss', subject: 'englishenglish', marks: '23', grade: 'D' },
    { first: '5678', second: ' Je3ss', subject: 'Mathsenglish', marks: '23', grade: 'E' }
];

// const output2 = users.reduce(
//     function (arr, curr) {
//         if (arr[curr.marks]) {
//             arr[curr.marks] = ++arr[curr.marks];
//         }
//         else {
//             arr[curr.marks] = 1;
//         }
//         return arr;
//     }
//     , {})

// console.log(output2);


// const output = users.map(x => x.first + " " + x.second);
// console.log(output);

const output3 = users.reduce(function(name,curr){
    if(name[curr.marks]>50){
        // name[curr.first]=++ name[curr.first];
    }

    return name;
},{})

console.log(output3);