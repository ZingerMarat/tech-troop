// ex 1

// class UniqueArray {
//   constructor() {
//     this.uniqueArray = {}
//     this.index = 0
//   }

//   add(item) {
//     if (!Object.keys(this.uniqueArray).includes(item)) {
//       this.uniqueArray[item] = this.index
//       this.index += 1
//     }
//   }

//   showAll() {
//     console.log(Object.keys(this.uniqueArray))
//   }

//   exists(item) {
//     return this.uniqueArray[item] ? true : false
//   }

//   get(index) {
//     for (let [key, value] of Object.entries(this.uniqueArray)) {
//       if (value === index) {
//         return key
//       }
//     }
//     return -1 // or undefined, if not found
//   }
// }

// const uniqueStuff = new UniqueArray()
// uniqueStuff.add("toy")
// uniqueStuff.showAll() //prints ["toy"]
// uniqueStuff.add("toy")
// uniqueStuff.showAll() //prints ["toy"]
// console.log(uniqueStuff.exists("toy")) //returns true
// uniqueStuff.add("poster")
// uniqueStuff.add("hydrogen")
// console.log(uniqueStuff.get(2)) //prints "hydrogen


// ex 2
class UniqueArray {
  constructor() {
    this.uniqueArray = new Map()   // key: JSON.stringify(item), value: index
    this.reverseMap = new Map()    // key: index, value: original item
    this.index = 0
  }

  add(item) {
    const key = JSON.stringify(item)
    if (!this.exists(item)) {
      this.uniqueArray.set(key, this.index)
      this.reverseMap.set(this.index, item)
      this.index += 1
    }
  }

  showAll() {
    console.log([...this.reverseMap.values()])
  }

  exists(item) {
    const key = JSON.stringify(item)
    return this.uniqueArray.has(key)
  }

  get(index) {
    return this.reverseMap.get(index) ?? -1
  }
}


const uniqueStuff = new UniqueArray()
uniqueStuff.add({x: 3})
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add({x: 3})
uniqueStuff.showAll() //prints ["toy"]
console.log(uniqueStuff.exists("toy")) //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen