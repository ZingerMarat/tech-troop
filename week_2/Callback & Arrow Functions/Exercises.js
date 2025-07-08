//Exercise 1 - Callbacks

// const push = function () {
//   console.log("pushing it!")
// }

// const pull = function () {
//   console.log("pulling it!")
// }

// const pushPull = (func) => {
//     func()
// }

// pushPull(push) //should print "pushing it!"
// pushPull(pull) //should print "pulling it!"



//Exercise 2 - Callbacks

// const returnTime = function (time) {
//   console.log('The current time is: ' + time)
// }

// const getTime = (func) => {
//     const time = new Date()

//     func(time)
// }

// getTime(returnTime)



//Exercise 3 - Callbacks

// const displayData = function (alertDataFunc, logDataFunc, data) {
//   alertDataFunc(data);
//   logDataFunc(data);
// };

// const logData = data => console.log(data);


// displayData(console.error, logData, "I like to party")



//Exercise 4 - Arrow Functions

// const sumArrowFunction = (num1, num2, num3) => num1+num2+num3
// console.log(sumArrowFunction(1,2,3));



//Exercise 5 - Arrow Functions

// const capitalize = text => text[0].toUpperCase() + text.slice(1).toLowerCase()    

// console.log(capitalize("bOb"));
// console.log(capitalize("TAYLOR"));
// console.log(capitalize("feliSHIA"));



//Exercise 6 - Arrow functions

// const determineWeather = temp => {
//   if(temp > 25){
//     return "hot"
//   }
//   return "cold"
// }

// const commentOnWeather = (temp) => `It's ${determineWeather(temp)}`

// console.log(commentOnWeather(30));
// console.log(commentOnWeather(22));
