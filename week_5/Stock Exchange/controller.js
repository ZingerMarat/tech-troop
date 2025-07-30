import { StockExchange } from "./model.js"
import { Render } from "./view.js"

const stockExchange = StockExchange()
const render = Render()

document.getElementById("srch-btn").addEventListener("click", async () => {
  $("#company-list").empty()

  const query = document.getElementById("input-field").value
  const loader = document.getElementById("loader")

  loader.style.display = "inline-block"

  try {
    //await stockExchange.loadData(query)
    const data = stockExchange.getData()
    //const data = null

    if (!data || data.length === 0) {
      console.log("No results found.")
      render.renderSearchError('No results found.')
    } else {
      render.renderSearchResults(data)
    }
  } catch (err) {
    console.error("Error loading data:", err.message)
    render.renderSearchError('An error occurred. Please try again later.')
  } finally {
    loader.style.display = "none"
  }
})
