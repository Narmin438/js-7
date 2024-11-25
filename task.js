// function num(a,b) {
//     if (a>b) {
//         return b
//     } else {
//         return a
//     }
// }
// console.log(num(10,15));


// function num(a,b) {
//     return Math.min(a,b)
// }
// console.log(num(10,15));



// task-1

function capitalizeWords(word) {
    let wordSplit = word.split(" ");
    let wordLen = wordSplit.length;

    if (wordLen == 5) {
        let first = wordSplit[0].substring(0,1).toLocaleUpperCase() + wordSplit[0].substring(1).toLowerCase();
        let second = wordSplit[1].substring(0,1).toLocaleUpperCase() + wordSplit[1].substring(1).toLowerCase();
        let third = wordSplit[2].substring(0,1).toLocaleUpperCase() + wordSplit[2].substring(1).toLowerCase();
        let fourth = wordSplit[3].substring(0,1).toLocaleUpperCase() + wordSplit[3].substring(1).toLowerCase();
        let fifth = wordSplit[4].substring(0,1).toLocaleUpperCase() + wordSplit[4].substring(1).toLowerCase();
        return first + " " + second + " " + third + " " + fourth + " " + fifth;
    } else {
        return "duzgun daxil edilmeyib";
    }
}

let word = prompt("5 sozlu cumle daxil edin:");
console.log(capitalizeWords(word));





// task-2

function isvalidnumber(num1) {
    let a = num1.substring(1).length
    let b = num1.startsWith("+7")
    return a==11 && b==true
}

let num1 = prompt("nomreni daxil edin")
console.log(isvalidnumber(num1));



// task-3

function numCounter(num2) {
    let a = num2.replaceAll(/[^a-z]/gi,"")
    return a.length
}

let num2 = prompt("metni daxil edin")
console.log(numCounter(num2));



//task-4

function isLucky(num) {
    num = num.replace(/[^0-9]/g,"")
    if (num.length!==6) {
        return false
    }
    let a = +num[0] + +num[1] + +num[2]
    let b = +num[3] + +num[4] + +num[5]
    return a === b
}
let num = prompt("ededi daxil edin")
console.log(isLucky(num));
