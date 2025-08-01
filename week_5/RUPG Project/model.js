export const UserModel = () => {
  let _user = {}
  let _friends = []
  let _kenyeQuote = ""
  let _pokemon = {}
  let _about = ""

  const loadUserInfo = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=7")
      //const response = await fetch("https://raghfghfgndomuser.me/api/?results=7")
      const data = (await response.json()).results
      const loadedUser = data[0]
      const loadedFriends = data.slice(1)

      _setUser(loadedUser)
      _setFriends(loadedFriends)
    } catch (error) {
      console.error("Failed to fetch user:", error)
      _user = null
      _friends = null
    }
  }

  const _setUser = (loadedUser) => {
    _user.firstName = loadedUser.name.first
    _user.lastName = loadedUser.name.last
    _user.city = loadedUser.location.city
    _user.state = loadedUser.location.state
    _user.picture = loadedUser.picture.medium

    //console.log("User saved:", _user)
  }

  const _setFriends = (loadedFriends) => {
    _friends = []

    loadedFriends.forEach((friend) => {
      _friends.push({ firstName: friend.name.first, lastName: friend.name.last })
    })

    //console.log("Friends saved:", _friends)
  }

  const loadKanyeQuote = async () => {
    try {
      const response = await fetch("https://api.kanye.rest")
      const data = await response.json()

      _kenyeQuote = `" ${data.quote} " \n - Kanye West`

      //console.log(_kenyeQuote);
    } catch (error) {
      console.error("Failed to fetch quote:", error)
      _kenyeQuote = null
    }
  }

  const loadPokemon = async () => {
    try {
      const randomID = Math.floor(Math.random() * 1000) + 1

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomID}`)
      const data = await response.json()

      _pokemon.name = data.name
      _pokemon.picture = data.sprites.front_default

      //console.log(_pokemon);
    } catch (err) {
      console.error("Failed to fetch pokemon:", err)
      _pokemon = null
    }
  }

  const loadAbout = async () => {
    try {
      const response = await fetch("https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1")
      const data = await response.json()

      _about = data[0]

      //console.log(_about);
    } catch (err) {
      console.error("Failed to fetch about:", err)
      _about = null
    }
  }

  return {
    // Getters
    getUser: () => _user,
    getFriends: () => _friends,
    getQuote: () => _kenyeQuote,
    getPokemon: () => _pokemon,
    getAbout: () => _about,

    // Setters
    setUser: (user) => {
      _user = user
    },
    setFriends: (friends) => {
      _friends = friends
    },
    setQuote: (quote) => {
      _kenyeQuote = quote
    },
    setPokemon: (pokemon) => {
      _pokemon = pokemon
    },
    setAbout: (about) => {
      _about = about
    },

    // Loading
    loadUserInfo,
    loadKanyeQuote,
    loadPokemon,
    loadAbout,
  }
}

const userModel = UserModel()
userModel.loadAbout()
