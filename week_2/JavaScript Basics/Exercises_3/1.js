const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.splice(1, 2)    //[1, 4, 5, 6, 7, 8, 9, 10]
numbers.splice(3, 1, 1) //[1, 4, 5, 1, 7, 8, 9, 10]
numbers.splice(numbers.length-4, 4) //[1, 4, 5, 1]
numbers.unshift(0)  //[0, 1, 4, 5, 1]

console.log(numbers)
