import { StockExchange } from "../model/model.js"
import { Render } from "../view/view.js"

const companyController = async () => {
  const urlParams = new URLSearchParams(window.location.search)
  const symbol = urlParams.get("symbol")

  const loader = document.getElementById("loader")
  loader.style.display = "inline-block"
  loader.style.marginTop = "50%"

  try {
    //TODO: run this func in search controller and just get the data from getProfileData
    //await stockExchange.loadCompanyProfile(symbol)

    //TODO: remove before fligth
    //await stockExchange.loadCompanyHistory(symbol)
    const profileData = stockExchange.getProfileData(symbol)
    const historyData = stockExchange.getHistoryData()

    console.log(profileData);

    if (!profileData && !historyData) {
      console.log("No results found.")
      render.renderInfoError("No results found.")
    } else {
      render.renderCompanyProfile(profileData)
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
