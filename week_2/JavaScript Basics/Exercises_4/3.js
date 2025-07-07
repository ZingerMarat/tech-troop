const reservations = {
  bob: { claimed: false },
  ted: { claimed: true },
}

//const name = "Bob"
const name = "Ted"
const lowerName = name.toLowerCase()

if (lowerName in reservations) {
  if (!reservations[lowerName].claimed) {
    console.log(`Welcome, ${name}`)
  } else {
    console.log("Hmm, someone already claimed this reservation")
  }
} else {
  console.log("You have no reservation")
}

const newName = "Max"

reservations[newName.toLowerCase()] = reservations[newName.toLowerCase()] || {}
reservations[newName.toLowerCase()].claimed = true

console.log(reservations)
