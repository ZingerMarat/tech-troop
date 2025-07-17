const AutoCompleteTrie = require("./AutoCompleteTrie")

describe("AutoCompleteTrie", () => {
  beforeEach(() => {
    AutoCompleteTrie.dictionary = {}
  })

  test("addWord adds 'cat' correctly", () => {
    const trie = new AutoCompleteTrie()
    trie.addWord("cat")

    expect(AutoCompleteTrie.dictionary).toEqual({"cat": 0})

    expect(trie.children["c"]).toBeDefined()
    expect(trie.children["c"].children["a"]).toBeDefined()
    expect(trie.children["c"].children["a"].children["t"]).toBeDefined()

    const tNode = trie.children["c"].children["a"].children["t"]
    expect(tNode.endOfWord).toBeTruthy()
  })

  test("addWord reuses common prefix for 'car' and 'cat'", () => {
    const trie = new AutoCompleteTrie()
    trie.addWord("cat")
    trie.addWord("car")

    const cNode = trie.children["c"]
    const aNode = cNode.children["a"]

    expect(aNode.children["t"]).toBeDefined()
    expect(aNode.children["r"]).toBeDefined()

    expect(aNode.children["t"].endOfWord).toBeTruthy()
    expect(aNode.children["r"].endOfWord).toBeTruthy()
  })

  test("addWord does not override endOfWord for prefix nodes", () => {
    const trie = new AutoCompleteTrie()
    trie.addWord("run")
    trie.addWord("running")

    const runNode = trie.children["r"].children["u"].children["n"]

    expect(runNode.endOfWord).toBeTruthy()

    const gNode = runNode.children["n"].children["i"].children["n"].children["g"]

    expect(gNode.endOfWord).toBeTruthy()
  })

  test("addWord multiple times keeps structure intact", () => {
    const trie = new AutoCompleteTrie()
    trie.addWord("dog")
    trie.addWord("dog")

    const gNode = trie.children["d"].children["o"].children["g"]

    expect(gNode).toBeDefined()
    expect(gNode.endOfWord).toBeTruthy()
  })

  test("findWord returns true for existing word", () => {
    const trie = new AutoCompleteTrie()
    trie.addWord("cat")
    expect(trie.findWord("cat")).toBeTruthy()
  })

  test("findWord returns false for word not added", () => {
    const trie = new AutoCompleteTrie()
    trie.addWord("cat")
    expect(trie.findWord("dog")).toBeFalsy()
  })

  test("findWord returns false for prefix only", () => {
    const trie = new AutoCompleteTrie()
    trie.addWord("cat")
    expect(trie.findWord("ca")).toBeFalsy()
  })

  test("findWord returns correct results for multiple words", () => {
    const trie = new AutoCompleteTrie()
    trie.addWord("cat")
    trie.addWord("dog")
    trie.addWord("car")

    expect(trie.findWord("cat")).toBeTruthy()
    expect(trie.findWord("car")).toBeTruthy()
    expect(trie.findWord("cab")).toBeFalsy()
  })

  test("findWord remains consistent after duplicate adds", () => {
    const trie = new AutoCompleteTrie()
    trie.addWord("cat")
    trie.addWord("cat")
    expect(trie.findWord("cat")).toBeTruthy()
  })

  test("predictWords returns one word with exact prefix", () => {
    const trie = new AutoCompleteTrie()
    trie.addWord("cat")
    expect(trie.predictWords("cat")).toEqual(["cat"])
  })

  test("predictWords returns empty array for unknown prefix", () => {
    const trie = new AutoCompleteTrie()
    trie.addWord("cat")
    expect(trie.predictWords("z")).toEqual([])
  })

  test("predictWords returns words with same prefix", () => {
    const trie = new AutoCompleteTrie()
    trie.addWord("cat")
    trie.addWord("car")
    expect(trie.predictWords("ca").sort()).toEqual(["car", "cat"].sort())
  })

  test("predictWords returns nested suggestions", () => {
    const trie = new AutoCompleteTrie()
    trie.addWord("run")
    trie.addWord("running")
    trie.addWord("runner")
    expect(trie.predictWords("run").sort()).toEqual(["run", "runner", "running"].sort())
  })

  test("predictWords with deep prefix", () => {
    const trie = new AutoCompleteTrie()
    trie.addWord("train")
    trie.addWord("tray")
    trie.addWord("trapeze")
    expect(trie.predictWords("tra").sort()).toEqual(["train", "trapeze", "tray"].sort())
  })

  test('should increment word count if word exists in dictionary', () => {
    const trie = new AutoCompleteTrie()
    trie.addWord('hello')

    expect(AutoCompleteTrie.dictionary['hello']).toBe(0);

    const count1 = trie.incrementWord('hello');
    expect(count1).toBe(1);

    const count2 = trie.incrementWord('hello');
    expect(count2).toBe(2);
  })

  test('should return -1 if word does not exist in dictionary', () => {
    const trie = new AutoCompleteTrie();

    const result = trie.incrementWord('world');
    expect(result).toBe(-1);
  })
})

describe("AutoCompleteTrie Full Flow", () => {
  let trie

  beforeEach(() => {
    trie = new AutoCompleteTrie()
  })

  test("adds multiple words, finds them, and predicts correctly", () => {
    trie.addWord("cat")
    trie.addWord("car")
    trie.addWord("cart")
    trie.addWord("dog")
    trie.addWord("door")
    trie.addWord("dorm")

    // Step 1: findWord
    expect(trie.findWord("cat")).toBe(true)
    expect(trie.findWord("car")).toBe(true)
    expect(trie.findWord("cart")).toBe(true)
    expect(trie.findWord("dog")).toBe(true)
    expect(trie.findWord("door")).toBe(true)
    expect(trie.findWord("dorm")).toBe(true)

    expect(trie.findWord("ca")).toBe(false)
    expect(trie.findWord("do")).toBe(false)
    expect(trie.findWord("castle")).toBe(false)

    // Step 2: predictWords
    expect(trie.predictWords("ca").sort()).toEqual(["car", "cart", "cat"].sort())
    expect(trie.predictWords("car")).toEqual(["car", "cart"])
    expect(trie.predictWords("do").sort()).toEqual(["dog", "door", "dorm"].sort())
    expect(trie.predictWords("z")).toEqual([])
  })

  test("predictWords returns full list when prefix is empty", () => {
    trie.addWord("a")
    trie.addWord("b")
    trie.addWord("c")
    expect(trie.predictWords("").sort()).toEqual(["a", "b", "c"].sort())
  })
})

