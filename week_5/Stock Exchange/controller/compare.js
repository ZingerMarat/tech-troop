import { CompanyInfo } from "../model/companyModel.js"

const urlParams = new URLSearchParams(window.location.search)
const symbols = urlParams.get("symbols").split(",")

async function renderAllCompanies() {
  for (const symbol of symbols) {
    const $compInfo = $(`<div class="company-wrapper" id="${symbol}"></div>`)
    $(".companies-for-compare").append($compInfo)

    const compInfo = new CompanyInfo($compInfo, symbol)
    await compInfo.load()
    await compInfo.addChart()
  }
}

renderAllCompanies()
