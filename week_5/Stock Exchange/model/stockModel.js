import { secret } from "../secrets.js"

export const StockExchange = () => {
  let _data = []
  let _companyHistoryData = []
  let _companiesProfileData = []

  const apiKey = secret.api_key

  const getData = () => {
    return _data
  }

  const getProfileData = (companySymbol) => {

    const company = _companiesProfileData.find((elem) => elem.symbol === companySymbol)

    return company
  }

  const getSearchProfilesData = () => {
    const data = _data.map((company) => ({ ...company, ..._companiesProfileData.find((elem) => elem.symbol === company.symbol) }))

    return data
  }

  const getHistoryData = () => {
    return _companyHistoryData
  }

  const loadDataWithProfile = async (query) => {
    await loadData(query)

    const symbols = _data.map((company) => company.symbol).join(",")

    await loadCompanyProfile(symbols)
  }

  const loadData = async (query) => {
    try {
      const response = await fetch(`https://financialmodelingprep.com//api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${apiKey}`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data = await response.json()

      _data = data
    } catch (err) {
      console.error("Load Data Error" + err.message)
      _data = null
    }
  }

  const loadCompanyProfile = async (symbol) => {
    try {
      const res = await fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`)

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data = await res.json()

      // _companiesProfileData = data
      const existingSymbols = new Set(_companiesProfileData.map((c) => c.symbol))
      const newProfiles = data.filter((c) => !existingSymbols.has(c.symbol))
      _companiesProfileData = [..._companiesProfileData, ...newProfiles]

    } catch (err) {
      console.error("Load Company Error" + err.message)
      _companiesProfileData = null
    }
  }

  const loadCompanyHistory = async (symbol) => {
    try {
      const res = await fetch(`https://financialmodelingprep.com//api/v3/historical-price-full/${symbol}?serietype=line&apikey=${apiKey}`)

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data = await res.json()

      _companyHistoryData = data.historical
    } catch (err) {
      console.error("Load Company Error" + err.message)
      _companyHistoryData = null
    }
  }

  return { getData, loadData, loadCompanyProfile, loadCompanyHistory, getProfileData, getSearchProfilesData, getHistoryData, loadDataWithProfile }
}
