let nowX = prompt('now? ', 'A');
let nowY = prompt('nowY?', '1');
let laterX = prompt('later?', 'H');
let laterY = prompt('laterY?', '8');


for (;
    (nowX).toUpperCase() > 'H' || nowY > 8;) {
    if ((nowX).toUpperCase() > 'H' || nowY > 8) {
        nowX = prompt('nowX? ', 'A');
        nowY = prompt('nowY?', '1');
    } else {
        break;
    }
}

for (;
    (laterX).toUpperCase() > 'H' || laterY > 8;) {
    if ((laterX).toUpperCase() > 'H' || laterY > 8) {
        laterX = prompt('laterX?', 'H');
        laterY = prompt('laterY?', '8');
    } else {
        break;
    }
}

let now = (nowX + nowY).toUpperCase();
let later = (laterX + laterY).toUpperCase();

function chessElephant(now, later) {
    if (Math.abs(now.charCodeAt(0) - later.charCodeAt(0)) == Math.abs(now.charCodeAt(1) - later.charCodeAt(1))) {
        console.log('true');
    } else {
        console.log('false');
    }
}

chessElephant(now, later);



// for (; now > 'H8';) {
//     if (now > 'H8') {
//         now = prompt('now? ', 'A1');
//     } else {
//         break;
//     }
// }

// for (; later > 'H8';) {
//     if (later > 'H8') {
//         later = prompt('later?', 'H8');
//     } else {
//         break;
//     }
// }


// for (nowX; nowX > 'H';) {
//     if (nowX > 'H') {
//         nowX = prompt('nowX? ', 'A');
//     } else {
//         break;
//     }
// }



// if (3 - 1 == 'C' - 'A') {
//     console.log('true');
// }

// console.log('C'.charCodeAt() - 'A'.charCodeAt())


// console.log('3'.charCodeAt());