import { Renderer } from "./render.js"
import { UserModel } from "./model.js"

const render = Renderer()
const userModel = UserModel()

document.getElementById("gen-btn").addEventListener("click", async () => {
  await Promise.all([userModel.loadUserInfo(), userModel.loadKanyeQuote(), userModel.loadPokemon(), userModel.loadAbout()])

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

document.getElementById("save-btn").addEventListener("click", () => {
  const currentUser = userModel.getUser()
  const userId = `${currentUser.firstName} ${currentUser.lastName}`

  const savedUsers = JSON.parse(localStorage.getItem("users") || "{}")

  savedUsers[userId] = {
    user: userModel.getUser(),
    quote: userModel.getQuote(),
    pokemon: userModel.getPokemon(),
    about: userModel.getAbout(),
    friends: userModel.getFriends(),
  }

  localStorage.setItem("users", JSON.stringify(savedUsers))
  alert(`User saved as ${userId}`)
})

document.getElementById("load-btn").addEventListener("click", () => {
  const userList = document.getElementById("user-list")
  userList.classList.toggle("hidden")
  userList.innerHTML = ""

  const savedUsers = JSON.parse(localStorage.getItem("users") || "{}")

  const userIds = Object.keys(savedUsers)
  if (userIds.length === 0) {
    alert("No saved users found")
    return
  }

  userIds.forEach((userId) => {
    const li = document.createElement("li")
    li.textContent = userId
    li.addEventListener("click", () => {
      const selectedUser = savedUsers[userId]

      userModel.setUser(selectedUser.user)
      userModel.setQuote(selectedUser.quote)
      userModel.setPokemon(selectedUser.pokemon)
      userModel.setAbout(selectedUser.about)
      userModel.setFriends(selectedUser.friends)

      render.renderUser(selectedUser.user)
      render.renderQuote(selectedUser.quote)
      render.renderPokemon(selectedUser.pokemon)
      render.renderAbout(selectedUser.about)
      render.renderFriends(selectedUser.friends)

      userList.classList.add("hidden")
    })

    userList.appendChild(li)
  })
})
