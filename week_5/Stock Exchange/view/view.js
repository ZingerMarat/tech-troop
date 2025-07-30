export const Render = () => {
  const renderSearchResults = (loadedData) => {
    loadedData.forEach((item) => {
      const $listItem = $(`<a href=./company.html?symbol=${item.symbol} class="list-group-item list-group-item-action">${item.name} (${item.symbol})</a>`)
      $("#company-list").append($listItem)
    })
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
    $("#stock-percent").text(`(${change}%)`).css("color", change >= 0 ? "green" : "red")
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
    console.log(companyData)

    renderCompanyImage(companyData.image)
    renderCompanyInfo(companyData.companyName, companyData.price, companyData.change)
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
            pointRadius: 0
          },
        ],
      },
    })
  }

  return { renderSearchResults, renderSearchError, renderCompanyProfile, renderChart , renderInfoError}
}
