import { secret } from "../secrets.js"

const mockData = [
  {
    symbol: "AAL",
    name: "American Airlines Group Inc.",
    currency: "USD",
    stockExchange: "NASDAQ Global Select",
    exchangeShortName: "NASDAQ",
  },
  {
    symbol: "AAXJ",
    name: "iShares MSCI All Country Asia ex Japan ETF",
    currency: "USD",
    stockExchange: "NASDAQ Global Market",
    exchangeShortName: "NASDAQ",
  },
  {
    symbol: "AAWW",
    name: "Atlas Air Worldwide Holdings, Inc.",
    currency: "USD",
    stockExchange: "NASDAQ Global Select",
    exchangeShortName: "NASDAQ",
  },
  {
    symbol: "AAVM",
    name: "Alpha Architect Global Factor Equity ETF",
    currency: "USD",
    stockExchange: "NASDAQ Global Market",
    exchangeShortName: "NASDAQ",
  },
  {
    symbol: "AARD",
    name: "Aardvark Therapeutics, Inc. Common Stock",
    currency: "USD",
    stockExchange: "NASDAQ Global Select",
    exchangeShortName: "NASDAQ",
  },
  {
    symbol: "AAPU",
    name: "Direxion Daily AAPL Bull 1.5X Shares",
    currency: "USD",
    stockExchange: "NASDAQ Global Market",
    exchangeShortName: "NASDAQ",
  },
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    currency: "USD",
    stockExchange: "NASDAQ Global Select",
    exchangeShortName: "NASDAQ",
  },
  {
    symbol: "AAPG",
    name: "Ascentage Pharma Group International",
    currency: "USD",
    stockExchange: "NASDAQ Global Market",
    exchangeShortName: "NASDAQ",
  },
  {
    symbol: "AAPD",
    name: "Direxion Daily AAPL Bear 1X Shares",
    currency: "USD",
    stockExchange: "NASDAQ Global Market",
    exchangeShortName: "NASDAQ",
  },
  {
    symbol: "AAPB",
    name: "GraniteShares ETF Trust - GraniteShares 2x Long Tilray Daily ETF",
    currency: "USD",
    stockExchange: "NASDAQ Global Market",
    exchangeShortName: "NASDAQ",
  },
]
const mockCompanyProfileData = [
  {
    symbol: 'AAPL',
    price: 211.27,
    marketCap: 3155486466000,
    beta: 1.199,
    lastDividend: 1.01,
    range: '169.21-260.1',
    change: -2.78,
    changePercentage: -1.29876,
    volume: 48540908,
    averageVolume: 53252362,
    companyName: 'Apple Inc.',
    currency: 'USD',
    cik: '0000320193',
    isin: 'US0378331005',
    cusip: '037833100',
    exchangeFullName: 'NASDAQ Global Select',
    exchange: 'NASDAQ',
    industry: 'Consumer Electronics',
    website: 'https://www.apple.com',
    description: 'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, and HomePod. It also provides AppleCare support and cloud services; and operates various platforms, including the App Store that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts, as well as advertising services include third-party licensing arrangements and its own advertising platforms. In addition, the company offers various subscription-based services, such as Apple Arcade, a game subscription service; Apple Fitness+, a personalized fitness service; Apple Music, which offers users a curated listening experience with on-demand radio stations; Apple News+, a subscription news and magazine service; Apple TV+, which offers exclusive original content; Apple Card, a co-branded credit card; and Apple Pay, a cashless payment service, as well as licenses its intellectual property. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It distributes third-party applications for its products through the App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. was founded in 1976 and is headquartered in Cupertino, California.',
    ceo: 'Timothy D. Cook',
    sector: 'Technology',
    country: 'US',
    fullTimeEmployees: '164000',
    phone: '(408) 996-1010',
    address: 'One Apple Park Way',
    city: 'Cupertino',
    state: 'CA',
    zip: '95014',
    image: 'https://images.financialmodelingprep.com/symbol/AAPL.png',
    ipoDate: '1980-12-12',
    defaultImage: false,
    isEtf: false,
    isActivelyTrading: true,
    isAdr: false,
    isFund: false
  }
]
const mockCompanyHistoryData = [
    { date: '2025-07-29', close: 211.27 },
    { date: '2025-07-28', close: 214.05 },
    { date: '2025-07-25', close: 213.88 },
    { date: '2025-07-24', close: 213.76 },
    { date: '2025-07-23', close: 214.15 },
    { date: '2025-07-22', close: 214.4 },
    { date: '2025-07-21', close: 212.48 },
    { date: '2025-07-18', close: 211.18 },
    { date: '2025-07-17', close: 210.02 },
    { date: '2025-07-16', close: 210.16 },
    { date: '2025-07-15', close: 209.11 },
    { date: '2025-07-14', close: 208.62 },
    { date: '2025-07-11', close: 211.16 },
    { date: '2025-07-10', close: 212.41 },
    { date: '2025-07-09', close: 211.14 },
    { date: '2025-07-08', close: 210.01 },
    { date: '2025-07-07', close: 209.95 },
    { date: '2025-07-03', close: 213.55 },
    { date: '2025-07-02', close: 212.44 },
    { date: '2025-07-01', close: 207.82 },
    { date: '2025-06-30', close: 205.17 },
    { date: '2025-06-27', close: 201.08 },
    { date: '2025-06-26', close: 201 },
    { date: '2025-06-25', close: 201.56 },
    { date: '2025-06-24', close: 200.3 },
    { date: '2025-06-23', close: 201.5 },
    { date: '2025-06-20', close: 201 },
    { date: '2025-06-18', close: 196.58 },
    { date: '2025-06-17', close: 195.64 },
    { date: '2025-06-16', close: 198.42 },
    { date: '2025-06-13', close: 196.45 },
    { date: '2025-06-12', close: 199.2 },
    { date: '2025-06-11', close: 198.78 },
    { date: '2025-06-10', close: 202.67 },
    { date: '2025-06-09', close: 201.45 },
    { date: '2025-06-06', close: 203.92 },
    { date: '2025-06-05', close: 200.63 },
    { date: '2025-06-04', close: 202.82 },
    { date: '2025-06-03', close: 203.27 },
    { date: '2025-06-02', close: 201.7 },
    { date: '2025-05-30', close: 200.85 },
    { date: '2025-05-29', close: 199.95 },
    { date: '2025-05-28', close: 200.42 },
    { date: '2025-05-27', close: 200.21 },
    { date: '2025-05-23', close: 195.27 },
    { date: '2025-05-22', close: 201.36 },
    { date: '2025-05-21', close: 202.09 },
    { date: '2025-05-20', close: 206.86 },
    { date: '2025-05-19', close: 208.78 },
    { date: '2025-05-16', close: 211.26 },
    { date: '2025-05-15', close: 211.45 },
    { date: '2025-05-14', close: 212.33 },
    { date: '2025-05-13', close: 212.93 },
    { date: '2025-05-12', close: 210.79 },
    { date: '2025-05-09', close: 198.53 },
    { date: '2025-05-08', close: 197.49 },
    { date: '2025-05-07', close: 196.25 },
    { date: '2025-05-06', close: 198.51 },
    { date: '2025-05-05', close: 198.89 },
    { date: '2025-05-02', close: 205.35 },
    { date: '2025-05-01', close: 213.32 },
    { date: '2025-04-30', close: 212.5 },
    { date: '2025-04-29', close: 211.21 },
    { date: '2025-04-28', close: 210.14 },
    { date: '2025-04-25', close: 209.28 },
    { date: '2025-04-24', close: 208.37 },
    { date: '2025-04-23', close: 204.6 },
    { date: '2025-04-22', close: 199.74 },
    { date: '2025-04-21', close: 193.16 },
    { date: '2025-04-17', close: 196.98 },
    { date: '2025-04-16', close: 194.27 },
    { date: '2025-04-15', close: 202.14 },
    { date: '2025-04-14', close: 202.52 },
    { date: '2025-04-11', close: 198.15 },
    { date: '2025-04-10', close: 190.42 },
    { date: '2025-04-09', close: 198.85 },
    { date: '2025-04-08', close: 172.42 },
    { date: '2025-04-07', close: 181.46 },
    { date: '2025-04-04', close: 188.38 },
    { date: '2025-04-03', close: 203.19 },
    { date: '2025-04-02', close: 223.89 },
    { date: '2025-04-01', close: 223.19 },
    { date: '2025-03-31', close: 222.13 },
    { date: '2025-03-28', close: 217.9 },
    { date: '2025-03-27', close: 223.85 },
    { date: '2025-03-26', close: 221.53 },
    { date: '2025-03-25', close: 223.75 },
    { date: '2025-03-24', close: 220.73 },
    { date: '2025-03-21', close: 218.27 },
    { date: '2025-03-20', close: 214.1 },
    { date: '2025-03-19', close: 215.24 },
    { date: '2025-03-18', close: 212.69 },
    { date: '2025-03-17', close: 214 },
    { date: '2025-03-14', close: 213.49 },
    { date: '2025-03-13', close: 209.68 },
    { date: '2025-03-12', close: 216.98 },
    { date: '2025-03-11', close: 220.84 },
    { date: '2025-03-10', close: 227.48 },
    { date: '2025-03-07', close: 239.07 },
    { date: '2025-03-06', close: 235.33 },
  ]

export const StockExchange = () => {
  let _data = mockData
  let _companyHistoryData = mockCompanyHistoryData
  let _companyProfileData = mockCompanyProfileData
  //let _data = []
  const apiKey = secret.api_key

  const getData = () => {
    return _data
  }

  const getProfileData = () => {
    return _companyProfileData
  }

  const getHistoryData = () => {
    return _companyHistoryData
  }

  const loadData = async (query) => {
    try {
      const response = await fetch(`https://financialmodelingprep.com//api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${apiKey}`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data = await response.json()
      console.log(data)

      _data = data
    } catch (err) {
      console.error("Load Data Error" + err.message)
      _data = null
    }
  }

  const loadCompanyProfile = async (symbol) => {
    console.log("symbol: " + symbol)
    try {
      const res = await fetch(`https://financialmodelingprep.com/stable/profile?symbol=${symbol}&apikey=${apiKey}`)

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data = await res.json()
      console.log(data)

      _companyProfileData = data
    } catch (err) {
      console.error("Load Company Error" + err.message)
      _companyProfileData = null
    }
  }

  const loadCompanyHistory = async (symbol) => {
    console.log("symbol: " + symbol)
    try {
      const res = await fetch(`https://financialmodelingprep.com//api/v3/historical-price-full/${symbol}?serietype=line&apikey=${apiKey}`)
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data = await res.json()
      console.log(data)

      _companyHistoryData = data.historical
    } catch (err) {
      console.error("Load Company Error" + err.message)
      _companyHistoryData = null
    }
  }

  return { getData, loadData, loadCompanyProfile, loadCompanyHistory, getProfileData, getHistoryData }
}

const test = StockExchange()
//test.loadData('AA')
//test.loadCompanyHistory("AAPL")
