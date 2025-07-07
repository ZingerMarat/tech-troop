let a = 3
let c = 0
let b = a
b = a   //a=3 b=3 c=0
c = a   //a=3 b=3 c=3
b = c   //a=3 b=3 c=3
a = b   //a=3 b=3 c=3

console.log(a)  //3
console.log(b)  //3
console.log(c)  //3