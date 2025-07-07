const date = 3

const kitchen = {
  owner: "Geraldine",
  hasOven: true,
  fridge: {
    price: 500,
    works: false,
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "radish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 },
    ],
  },
}

const hasOven = kitchen.hasOven
const works = kitchen.fridge.works

if (hasOven) {
  if (works) {
    console.log(`${kitchen.owner}'s ${kitchen.fridge.items[1].name} expired ${date-kitchen.fridge.items[1].expiryDate} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the radish in.`)
  } else {
    console.log(`${kitchen.owner}'s ${kitchen.fridge.items[1].name}  expired ${date-kitchen.fridge.items[1].expiryDate} day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the radish in. And she'll have to pay ${kitchen.fridge.price/2} to fix the fridge.`)
  }
} else {
  if (works) {
    console.log(`${kitchen.owner}'s ${kitchen.fridge.items[1].name}  expired ${date-kitchen.fridge.items[1].expiryDate} day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the radish in.`)
  } else {
    console.log(`${kitchen.owner}'s ${kitchen.fridge.items[1].name}  expired ${date-kitchen.fridge.items[1].expiryDate} day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the radish in. And she'll have to pay ${kitchen.fridge.price/2} to fix the fridge.`)
  }
}
