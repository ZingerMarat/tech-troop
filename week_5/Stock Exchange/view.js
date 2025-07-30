export const Render = () => {
  const renderSearchResults = (loadedData) => {
    loadedData.forEach((item) => {
      const $listItem = $(`<a href="#"class="list-group-item list-group-item-action">${item.name} (${item.symbol})</a>`)
      $("#company-list").append($listItem)
    })
  }

  const renderSearchError = (message) => {
    $(".list-wrapper").append(`<div class="mx-auto">${message}</div>`)
  }

  return { renderSearchResults, renderSearchError }
}
