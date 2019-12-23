let arr = [54, 2, 3, 1, 2, 3, 3, 5];
let arrNew = [];



for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length; k++) {
        if (arr[k] == arr[i] && i != k) {
            arrNew.push(arr[k]);
            break;
        }
    }
}

console.log(arrNew)