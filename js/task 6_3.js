let str1 = 'abcdef';
let str2 = 'cdebaf';
let a = [];
let b = [];


function rowChange(firstStr, secondStr) {
    let strNew = firstStr.split('');
    let strNew2 = secondStr.split('');

    for (let i = 0; i < (strNew, strNew2).length; i += 2) {
        a.push(strNew[i]);
        b.push(strNew2[i]);
    }
    if ((strNew2.sort()).join('') == str1 && (a.sort()).join() == (b.sort()).join()) {
        console.log('true');
    } else {
        console.log('false');
    }
}

rowChange(str1, str2);




// function Swap(a, b) {
//     let arrA = a.split(""),
//         arrB = b.split(""),
//         arrSortA = [],
//         arrSortB = [];
//     for (let i = 0; i < arrB.length; i++) {
//         if (i % 2 == 0) {
//             arrSortA.push(arrA[i]);
//             arrSortB.push(arrB[i]);
//         }
//     }
//     arrSortA.sort();
//     arrSortB.sort();
//     arrA.sort();
//     arrB.sort();
//     return arrSortA.join("") == arrSortB.join("") && arrA.join("") == arrB.join("");
// }
// console.log(Swap("abcdef", "cdebaf"));