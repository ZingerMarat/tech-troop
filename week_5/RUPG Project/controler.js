import { Renderer } from "./render.js"
import { UserModel } from "./model.js"

const render = Renderer()
const userModel = UserModel()

const user = {
  firstName: "Ben",
  lastName: "Hughes",
  city: "Warrnambool",
  state: "Tasmania",
  picture: "https://randomuser.me/api/portraits/med/men/34.jpg",
}

const friends = [
  { firstName: "Hazel", lastName: "Jacobs" },
  { firstName: "Stephanie", lastName: "Peters" },
  { firstName: "Alexander", lastName: "Medina" },
  { firstName: "Robert", lastName: "Jordan" },
  { firstName: "Alvário", lastName: "Novaes" },
  { firstName: "Earl", lastName: "Brooks" },
]

const quote = `" We came into a broken world. And we're the cleanup crew. " \n - Kanye West`

const pokemon = {
  name: "silvally",
  picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png",
}
const about =
  "Bacon ipsum dolor amet frankfurter cupim drumstick flank leberkas filet mignon, pig boudin.  Tri-tip landjaeger pork chop shoulder porchetta jowl sausage swine frankfurter ground round.  Ground round jerky ribeye, shoulder tenderloin tri-tip boudin.  Short ribs swine meatloaf landjaeger jerky corned beef pig.  Pork chop pastrami turducken, fatback alcatra ball tip swine chicken buffalo chislic doner kielbasa tail strip steak.  Frankfurter beef prosciutto, jowl t-bone burgdoggen pastrami pork chop tri-tip.  Chuck buffalo beef pancetta cupim sausage hamburger sirloin."

document.getElementById("gen-btn").addEventListener("click", async () => {
    await Promise.all([
    userModel.loadUserInfo(),
    userModel.loadKanyeQuote(),
    userModel.loadPokemon(),
    userModel.loadAbout()
  ])

  const user = userModel.getUser()
  const quote = userModel.getQuote()
  const pokemon = userModel.getPokemon()
  const about = userModel.getAbout()
  const friends = userModel.getFriends()

  render.renderUser(user)
  render.renderQuote(quote)
  render.renderPokemon(pokemon)
  render.renderAbout(about)
  render.renderFriends(friends)
})
