import { StockExchange } from "../model/model.js"
import { Render } from "../view/view.js"

const stockExchange = StockExchange()
const render = Render()

export function CompanyInfo(div, symbol) {
  this.$companyDIV = div
  this.symbol = symbol

  this._showLoader = () => $("#loader").css("display", "inline-block").css("margin-top", "50%")
  this._hideLoader = () => $("#loader").css("display", "none")

  this._renderStructure = () => {
    this.$companyDIV.append(`
        <div id="company-wrapper">
            <div id="loader" class="spinner-border text-primary mx-auto" role="status" style="display: none">
                <span class="visually-hidden">Loading...</span>
            </div>
            
            <div id="company">
                <div id="company-img"></div>
                <div id="company-info"></div>
            </div>
    
            <div id="company-price">
                <div id="stock-price"></div>
                <div id="stock-percent"></div>
            </div>
    
            <p id="company-desc"></p>
    
            <canvas id="company-chart" width="600" height="300"></canvas>
        </div>  
        `)

  }

  this.load = async () => {
    this._renderStructure()
    this._showLoader()

    try {
      //TODO: run this func in search controller and just get the data from getProfileData
      //await stockExchange.loadCompanyProfile(symbol)
      const profileData = stockExchange.getProfileData(symbol)

      if (!profileData) {
        console.log("No results found.")
        render.renderInfoError("No results found.")
      } else {
        render.renderCompanyProfile(profileData)
      }
    } catch (err) {
      console.error("Error loading data:", err.message)
      render.renderInfoError("An error occurred. Please try again later.")
    } finally {
      this._hideLoader()
    }
  }

  this.addChart = async () => {
    this._showLoader()

    try {
      //TODO: remove before fligth
      //await stockExchange.loadCompanyHistory(symbol)
      const historyData = stockExchange.getHistoryData()

      if (!historyData) {
        console.log("No results found.")
        render.renderInfoError("No results found.")
      } else {
        render.renderChart(historyData)
      }
    } catch (err) {
      console.error("Error loading data:", err.message)
      render.renderInfoError("An error occurred. Please try again later.")
    } finally {
      this._hideLoader()
    }
  }
}
