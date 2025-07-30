import { StockExchange } from "../model/model.js"
import { Render } from "../view/view.js"

const companyController = async () => {
  const urlParams = new URLSearchParams(window.location.search)
  const symbol = urlParams.get("symbol")

  const loader = document.getElementById("loader")
  loader.style.display = "inline-block"
  loader.style.marginTop = "50%"

  try {
    //TODO: remove before fligth
    //await stockExchange.loadCompanyProfile(symbol)
    //await stockExchange.loadCompanyHistory(symbol)
    const profileData = stockExchange.getProfileData()
    const historyData = stockExchange.getHistoryData()

    if (!profileData && !historyData) {
      console.log("No results found.")
      render.renderInfoError("No results found.")
    } else {
      render.renderCompanyProfile(profileData[0])
      render.renderChart(historyData)
    }
  } catch (err) {
    console.error("Error loading data:", err.message)
    render.renderInfoError("An error occurred. Please try again later.")
  } finally {
    loader.style.display = "none"
  }
}

const stockExchange = StockExchange()
const render = Render()
companyController()
