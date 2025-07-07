const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  },
]

const capitalize = function (str) {
  let capitalizedStr = ""
  capitalizedStr += str[0].toUpperCase() // first letter, capitalized
  capitalizedStr += str.slice(1) // rest of the string
  return capitalizedStr
}

const capitalizeSentence = (sentence) => {
  const words = sentence.split(" ")
  let capitalizedSentence = ""

  words.forEach((word) => {
    capitalizedSentence += " " + capitalize(word)
  })

  return capitalizedSentence
}

const getAge = (age) => {
  if (age < 21) {
    return "Underage"
  } else if (age > 55) {
    return "55+"
  }

  return age
}

const joinCityCountry = (city, country) => {
  return capitalize(city) + ", " + capitalize(country)
}

const formatCatchphrase = (catchphrase) => {
  let wordsOfCatchphrase = catchphrase.split(" ")
  let formatedCatchphrase = ""

  formatedCatchphrase += capitalize(wordsOfCatchphrase[0])

  for (let i = 1; i < wordsOfCatchphrase.length; i++) {
    formatedCatchphrase += " " + wordsOfCatchphrase[i]
  }

  return `"${formatedCatchphrase}"`
}

const getSummary = function (person) {
  let summary = ""
  summary += capitalize(person.name)
  summary += ` is ${getAge(person.age)} ` //Yes - you can put a function call inside the tick quotes!
  summary += capitalizeSentence(person.profession) //call function for profession
  summary += ` from ${joinCityCountry(person.city, person.country)}.` //call function for country + city
  summary += ` ${capitalize(person.name)} loves to say ${formatCatchphrase(person.catchphrase)}.` //call function for catchphrase
  return summary
}

console.log(getSummary(people_info[0]))
console.log(getSummary(people_info[1]))
console.log(getSummary(people_info[2]))
