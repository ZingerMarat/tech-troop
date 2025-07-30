import { StockExchange } from "../model/model.js"
import { Render } from "../view/view.js"

const stockExchange = StockExchange()
const render = Render()

document.getElementById("srch-btn").addEventListener("click", async () => {
  $("#company-list").empty()

  const query = document.getElementById("input-field").value
  const loader = document.getElementById("loader")

  loader.style.display = "inline-block"

  try {
    //TODO: remove before fligth
    //await stockExchange.loadData(query)
    const data = stockExchange.getData()

    if (!data || data.length === 0) {
      console.log("No results found.")
      render.renderSearchError("No results found.")
    } else {
      render.renderSearchResults(data)
    }
  } catch (err) {
    console.error("Error loading data:", err.message)
    render.renderSearchError("An error occurred. Please try again later.")
  } finally {
    loader.style.display = "none"
  }
})
