const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

for (letter of Object.keys(dictionary)){
  console.log(`Words that begin with ${letter}:`);
  for (word of dictionary[letter]){
    console.log(word);    
  }
}
