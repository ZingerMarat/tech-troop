export const Render = () => {
  const renderSearchResults = (query, loadedData) => {
    const $companyList = $("#company-list")
    $companyList.empty()

    loadedData.forEach((item) => {
      let highlightedName = highlightText(query, item.name)
      let highlightedSymbol = highlightText(query, item.symbol)

      const $change = $('<div class="stock-change"></div>')
        .text(`(${item.changes}%)`)
        .css("color", item.changes >= 0 ? "green" : "red")

      const $listItem = $(`
                      <a href=./company.html?symbol=${item.symbol} class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center gap-2">
                            <picture>
                              <source srcset="${item.image}" type="image/webp">
                              <img src="${item.image}" alt="" style="width: 2rem; height: 2rem; border-radius: 50%;">
                            </picture>
                            <div>${highlightedName} (${highlightedSymbol})</div>
                        </div>
                      </a>
                    `)

      $listItem.append($change)
      $companyList.append($listItem)
    })
  }

  const highlightText = (query, name) => {
    let highlighted

    const index = name.toLowerCase().indexOf(query.toLowerCase())

    if (index === -1) {
      highlighted = name
    } else {
      const before = name.slice(0, index)
      const match = name.slice(index, index + query.length)
      const after = name.slice(index + query.length)

      highlighted = `${before}<span class="highlight">${match}</span>${after}`
    }

    return highlighted
  }

  const renderSearchError = (message) => {
    $(".list-wrapper").append(`<div class="mx-auto">${message}</div>`)
  }

  const renderInfoError = (message) => {
    $("#company-wrapper").append(`<div class="mx-auto">${message}</div>`)
  }

  const renderCompanyImage = (imageUrl) => {
    $("#company-img").html(`
    <picture>
      <source srcset="${imageUrl}" type="image/webp">
      <img src="${imageUrl}" alt="company picture" style="max-width: 100%; height: auto; border-radius: 50%;">
    </picture>
  `)
  }

  const renderCompanyInfo = (name, price, change) => {
    $("#company-info").text(name)
    $("#stock-price").text(`Stock price: $${price}`)
    $("#stock-percent")
      .text(`(${change}%)`)
      .css("color", change >= 0 ? "green" : "red")
  }

  const renderCompanyDescriptionWithToggle = (description) => {
    const maxLength = 500
    let isExpanded = false

    $("#company-desc").after(`<a href="#" id="toggle-desc">Show more</a>`)

    const updateDescription = () => {
      if (isExpanded) {
        $("#company-desc").text(description)
        $("#toggle-desc").text("Show less")
      } else {
        const shortText = description.length > maxLength ? description.substring(0, maxLength) + "..." : description
        $("#company-desc").text(shortText)
        $("#toggle-desc").text("Show more")
      }
    }

    $("#toggle-desc").on("click", (event) => {
      event.preventDefault()
      isExpanded = !isExpanded
      updateDescription()
    })

    updateDescription()
  }

  const renderCompanyProfile = (companyData) => {
    //console.log(companyData)

    renderCompanyImage(companyData.image)
    renderCompanyInfo(companyData.companyName, companyData.price, companyData.changes)
    renderCompanyDescriptionWithToggle(companyData.description)
  }

  const renderChart = async (historyData) => {
    new Chart(document.getElementById("company-chart"), {
      type: "line",
      data: {
        labels: historyData.map((row) => row.date),
        datasets: [
          {
            label: "Stock Price History",
            data: historyData.map((row) => row.close),
            borderColor: "gray",
            pointRadius: 0,
          },
        ],
      },
    })
  }

  return { renderSearchResults, renderSearchError, renderCompanyProfile, renderChart, renderInfoError }
}
