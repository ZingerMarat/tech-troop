const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

for (let letter of Object.keys(dictionary)){
  console.log(`Words that begin with ${letter}:`);
  for (let word of dictionary[letter]){
    console.log(word);    
  }
}
