//The Factory Mistake

let meatArr = ["beef","chicken"]
let vegetableArr = ["rabbit","carrots","potatoes","lettuce"]

meatArr = [...meatArr, vegetableArr[0]]
vegetableArr = [...vegetableArr.slice(1)]

console.log(meatArr);
console.log(vegetableArr);


//The Torn Passport

var firstPiece = { id: 101, name: 'Ofri' }
var seoncdPiece = { country: 'Israel'}

firstPiece = {...firstPiece, ...seoncdPiece}
console.log(firstPiece);
