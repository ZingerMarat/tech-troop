import { CompanyInfo } from "../model/companyModel.js"

const urlParams = new URLSearchParams(window.location.search)
const symbol = urlParams.get("symbol")

const compInfo = new CompanyInfo($(".compInfo"), symbol)
await compInfo.load()
await compInfo.addChart()
