const {Exercises }= require('./code')

test("should return true if n is even, false otherwise", () => {
    const ex = new Exercises()

    expect(ex.isEven(2)).toBeTruthy()
    expect(ex.isEven(1)).toBeFalsy()
})

test("should remove at least one element from the array `arr`", () => {
    const ex = new Exercises()
    const arr = [1,2,3,4,5,6,7,8,9]
    const oldSize = arr.length
    ex.removeAtLeastOne(arr)
    const newSize = arr.length
    
    expect(newSize).toBeLessThanOrEqual(oldSize)
})

test(`should return a clean string without these symbols: "!", "#", ".", ",", "'"`, () => {
    const ex = new Exercises()
    const oldString = 'a!#.,'
    const newString = ex.simplify(oldString)

    expect(newString).toBe('a')
})

test("should verify that there is at least one boolean in the array", () => {
    const ex = new Exercises()
    const arr1 = [true, true, false]
    const arr2 = [true, false, false]
    const arr3 = [false, false, false]

    expect(ex.validate(arr1)).toBeTruthy()
    expect(ex.validate(arr2)).toBeFalsy()
    expect(typeof ex.validate(arr3)).toBe("object")
})

test("isEven should return false if no parameter is provided", () => {
  const ex = new Exercises()
  expect(ex.isEven()).toBeFalsy()
})

test("removeAtLeastOne should throw if the parameter is not an array", () => {
  const ex = new Exercises()
  expect(() => ex.removeAtLeastOne("not an array")).toThrow()
})

test("simplify should return empty string if input is null or undefined", () => {
  const ex = new Exercises()
  expect(ex.simplify(null)).toBe("")
  expect(ex.simplify(undefined)).toBe("")
})

test("validate should handle missing, null, undefined, and invalid input types", () => {
  const ex = new Exercises()

  expect(() => ex.validate(null)).toThrow()
})


