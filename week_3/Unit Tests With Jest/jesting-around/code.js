class Exercises {
  constructor() {}

  isEven(n) {
    return n % 2 == 0 ? true : false
  }

  removeAtLeastOne(arr) {
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
    arr.splice(0, numItemsToRemove)
    return arr
  }

  simplify(str) {
    let symbols = ["!", "#", ".", ",", "'"]
    if (typeof str !== "string") return ""
    return str
      .split("")
      .filter((c) => symbols.indexOf(c) == -1)
      .join("")
  }

  validate(arr){
    let trueCount = 0
    let falseCount = 0

    arr.forEach(el => {
        el === true ? trueCount++ : falseCount++
    })

    if (trueCount === 0){
        return {error: "Need at least one boolean"}
    } else {
        return trueCount > falseCount ? true : false
    }
  }
}

module.exports = {
  Exercises,
}
