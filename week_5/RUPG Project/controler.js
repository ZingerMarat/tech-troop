export const User = () => {
  let _user = {}
  let _friends = []

  const loadUserInfo = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=7")
      const data = (await response.json()).results
      const loadedUser = data[0]
      const loadedFriends = data.slice(1)

      _setUser(loadedUser)
      _setFriends(loadedFriends)
    } catch (error) {
      console.error("Failed to fetch user:", error)
    }
  }

  const _setUser = (loadedUser) => {
    _user.firstName = loadedUser.name.first
    _user.lastName = loadedUser.name.last
    _user.city = loadedUser.location.city
    _user.state = loadedUser.location.state
    _user.picture = loadedUser.picture.medium

    console.log("User saved:", _user)
  }

  const _setFriends = (loadedFriends) => {

    loadedFriends.forEach(friend => {
        _friends.push({firstName: friend.name.first, lastName: friend.name.last})
    })

    console.log("Friends saved:", _friends)
  }

  return { loadUserInfo }
}

const testUser = User()
testUser.loadUserInfo()
