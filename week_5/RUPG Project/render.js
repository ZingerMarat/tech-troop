export const Renderer = () => {
  const renderUser = (user) => {
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

  return {renderUser}
}
