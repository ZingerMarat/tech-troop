class BSNode {
  constructor(value) {
    this.value = value
    this.leftChild = null
    this.rightChild = null
  }

  insertNode(newVal) {
    if (!this.value) {
      this.value = newVal
    } else if (newVal > this.value && this.rightChild) {
      this.rightChild.insertNode(newVal)
    } else if (newVal <= this.value && this.leftChild) {
      this.leftChild.insertNode(newVal)
    } else if (newVal <= this.value) {
      this.leftChild = new BSNode(newVal)
    } else {
      this.rightChild = new BSNode(newVal)
    }
  }

  findNode(val) {
    if (this.value === val) {
      return true
    } else if (this.value > val && this.leftChild) {
      return this.leftChild.findNode(val)
    } else if (this.value < val && this.rightChild) {
      return this.rightChild.findNode(val)
    } else {
      return false
    }
  }

  findCommonParent(val1, val2) {
    const path1 = this._pathToValue(val1, [])
    const path2 = this._pathToValue(val2, [])

    if (!path1 || !path2) return null

    const minLength = Math.min(path1.length, path2.length)
    let common = null

    for (let i = 0; i < minLength - 1; i++) {
      if (path1[i] === path2[i]) {
        common = path1[i]
      } else {
        break
      }
    }

    return common
  }

  removeNode(node, value) {
    if (node.value === value) {
      return this._removeRoot(node)
    }

    const nodeParent = this._findNodeParent(node, value)
    const isLeft = nodeParent.leftChild && nodeParent.leftChild.value === value
    const nodeParentSide = isLeft ? "leftChild" : "rightChild"
    const nodeToDelete = nodeParent[nodeParentSide]

    if (this._isLeaf(nodeToDelete)) {
      nodeParent[nodeParentSide] = null
    } else if (this._hasOneChild(nodeToDelete)) {
      const nodeToUp = nodeToDelete.leftChild || nodeToDelete.rightChild
      nodeParent[nodeParentSide] = nodeToUp
    } else {
      this._replaceWithMaxFromLeft(nodeToDelete)
    }

    return node
  }

  _findNodeParent(node, value) {
    if (node.leftChild.value === value || node.rightChild.value === value) {
      return node //return parent of node
    } else if (node.value > value && node.leftChild) {
      return this._findNodeParent(node.leftChild, value)
    } else if (node.value < value && node.rightChild) {
      return this._findNodeParent(node.rightChild, value)
    }
  }

  _removeRoot(node) {
    if (this._isLeaf(node)) {
      return null
    }

    if (this._hasOneChild(node)) {
      return node.leftChild || node.rightChild
    }

    this._replaceWithMaxFromLeft(node)
    return node
  }

  _isLeaf(node) {
    return node.leftChild === null && node.rightChild === null
  }

  _hasOneChild(node) {
    return (node.leftChild === null && node.rightChild !== null) || (node.leftChild !== null && node.rightChild === null)
  }

  _replaceWithMaxFromLeft(node) {
    let nodeToUp = node.leftChild
    let nodeToUpParent = null

    while (nodeToUp.rightChild) {
      nodeToUpParent = nodeToUp
      nodeToUp = nodeToUp.rightChild
    }

    node.value = nodeToUp.value

    if (nodeToUpParent) {
      if (nodeToUpParent.rightChild === nodeToUp) {
        nodeToUpParent.rightChild = nodeToUp.leftChild
      } else {
        nodeToUpParent.leftChild = nodeToUp.leftChild
      }
    } else {
      node.leftChild = nodeToUp.leftChild
    }
  }

  _pathToValue(val, arr) {
    arr.push(this.value)
    if (this.value === val) {
      return arr
    } else if (this.value > val && this.leftChild) {
      return this.leftChild._pathToValue(val, arr)
    } else if (this.value < val && this.rightChild) {
      return this.rightChild._pathToValue(val, arr)
    } else {
      return null
    }
  }
}

// const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]
// const bsTree = new BSNode()

// letters.forEach((l) => {
//   bsTree.insertNode(l)
// })

// console.log(bsTree.findNode("H")) // should print true
// console.log(bsTree.findNode("G")) // should print true
// console.log(bsTree.findNode("Z")) // should print false
// console.log(bsTree.findNode("F")) // should print false
// console.log(bsTree.findNode("y")) // should print false - we didn't make the tree case sensitive!

// console.log(bsTree.findCommonParent("B", "I")) //should return "H"
// console.log(bsTree.findCommonParent("B", "G")) //should return "E"
// console.log(bsTree.findCommonParent("B", "L")) //should return "J"
// console.log(bsTree.findCommonParent("L", "Y")) //should return "R"
// console.log(bsTree.findCommonParent("E", "H")) //should return "J"

const numbers = [8, 9, 12, 3, 5, 1, 11, 4]
let nodeWithOneChild = new BSNode()
numbers.forEach((n) => nodeWithOneChild.insertNode(n))

//console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9))

let nodeWithTwoChildren = new BSNode()
numbers.forEach((n) => nodeWithTwoChildren.insertNode(n))
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)) // will return tree like the second image (the root will be 5)
