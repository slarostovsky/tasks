let arr = [-1, 10, -9, 5, 6, -10];
let total = [];

for (let i = 0; i < arr.length - 1; i++) {
    let totalMax = arr.reduce((acc, item) => {
        total.push(acc);
        return acc += item;
    }, 0);
    delete arr[i]
}
let a = Math.max.apply(null, total);
console.log(a);






// for (let i = 0; i < arr.length - 1; i++) {
//     sum = +(arr[i] + arr[i + 1]);
//     max.push(sum);
// }

// let a = Math.max.apply(null, max);
// console.log(a);


// const total = arr.reduce((acc, number) => {
//console.log(acc);
//     return acc += number;
// });

// console.log(total)