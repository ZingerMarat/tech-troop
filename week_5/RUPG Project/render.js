export const Renderer = () => {
  const renderUser = (user) => {
    $(".user").empty()

    $(".user").append(`
            <div id="user-picture">
                <picture>
                    <source srcset="${user.picture}" type="image/webp">
                    <img src="${user.picture}" alt="User picture" style="max-width: 100%; height: auto; border-radius: 50%;">
                </picture>
            </div>


            <div id="user-info">
            <h3>${user.firstName} ${user.lastName}</h3>
            <p>Location: ${user.city}, ${user.state}</p>
            </div>
            `)
  }

  const renderQuote = (userQuote) => {
    $(".quote").empty()

    const quote = userQuote.replace(/\n/g, "<br>")

    $(".quote").append(`
        <h4>Favorite quote</h4>
        <p>${quote}</p>
        `)
  }

  const renderPokemon = (userPokemon) => {
    let pokemonName = userPokemon.name
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ")

    $(".pokemon").empty()

    $(".pokemon").append(`
        <h4>Favorite pokemon</h4>
        <div>
            <picture>
                <source srcset="${userPokemon.picture}" type="image/webp">
                <img src="${userPokemon.picture}" alt="User pokemon picture" style="max-width: 100%; height: auto; border-radius: 50%;">
            </picture>

            <p>${pokemonName}</p>
        
        </div>
        `)
  }

  const renderAbout = (userAbout) => {
    $(".about").empty()

    $(".about").append(`
        <h4>About me</h4>
            <p>${userAbout}</p>
        `)
  }

  const renderFriends = (userFriends) => {
    $(".friends").empty()

    $(".friends").append(`<h4>Friends</h4>`)

    userFriends.forEach((friend) => {
      const frindElem = $(`<div>${friend.firstName} ${friend.lastName}</div>`)
      $(".friends").append(frindElem)
    })
  }

  return { renderUser, renderQuote, renderPokemon, renderAbout, renderFriends }
}
