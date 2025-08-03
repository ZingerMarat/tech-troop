import { StockExchange } from "../model/model.js"
import { Render } from "../view/view.js"

const stockExchange = StockExchange()
const render = Render()

export function CompanyInfo(div, symbol) {
  this.$companyDIV = div
  this.symbol = symbol

  this._showLoader = () => {
    this.$companyDIV.find(".loader").css({
      display: "inline-block",
    })
  }

  this._hideLoader = () => {
    this.$companyDIV.find(".loader").css("display", "none")
  }

  this._renderStructure = () => {

    this.$companyDIV.append(`

        <div class="company">
          <div class="company-img"></div>
          <div class="company-info"></div>
        </div>

        <div class="company-price">
          <div class="stock-price"></div>
          <div class="stock-percent"></div>
        </div>

        <p class="company-desc"></p>

        <div class="loader spinner-border text-primary mx-auto my-auto" role="status" style="display: none">
          <span class="visually-hidden">Loading...</span>
        </div>

        <canvas class="company-chart" id="${this.symbol}" width="600" height="300"></canvas>

    `)
  }

  this.load = async () => {
    this._showLoader()

    try {
      await stockExchange.loadCompanyProfile(this.symbol)
      const profileData = await stockExchange.getProfileData(this.symbol)
      

      if (!profileData) {
        console.warn("No results found.")
        render.renderInfoError("No results found.")
      } else {
        this._renderStructure()

        render.renderCompanyProfile(profileData, this.$companyDIV)
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
      await stockExchange.loadCompanyHistory(this.symbol)
      const historyData = stockExchange.getHistoryData()

      if (!historyData) {
        console.warn("No chart data found.")
        render.renderInfoError("No chart data found.")
      } else {
        render.renderChart(historyData, this.symbol, this.$companyDIV)
      }
    } catch (err) {
      console.error("Error loading chart data:", err.message)
      render.renderInfoError("An error occurred while loading the chart.")
    } finally {
      this._hideLoader()
    }
  }
}
