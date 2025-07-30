import { secret } from "./secrets.js"

const mockData = [
  {
    symbol: 'AAL',
    name: 'American Airlines Group Inc.',
    currency: 'USD',
    stockExchange: 'NASDAQ Global Select',
    exchangeShortName: 'NASDAQ'
  },
  {
    symbol: 'AAXJ',
    name: 'iShares MSCI All Country Asia ex Japan ETF',
    currency: 'USD',
    stockExchange: 'NASDAQ Global Market',
    exchangeShortName: 'NASDAQ'
  },
  {
    symbol: 'AAWW',
    name: 'Atlas Air Worldwide Holdings, Inc.',
    currency: 'USD',
    stockExchange: 'NASDAQ Global Select',
    exchangeShortName: 'NASDAQ'
  },
  {
    symbol: 'AAVM',
    name: 'Alpha Architect Global Factor Equity ETF',
    currency: 'USD',
    stockExchange: 'NASDAQ Global Market',
    exchangeShortName: 'NASDAQ'
  },
  {
    symbol: 'AARD',
    name: 'Aardvark Therapeutics, Inc. Common Stock',
    currency: 'USD',
    stockExchange: 'NASDAQ Global Select',
    exchangeShortName: 'NASDAQ'
  },
  {
    symbol: 'AAPU',
    name: 'Direxion Daily AAPL Bull 1.5X Shares',
    currency: 'USD',
    stockExchange: 'NASDAQ Global Market',
    exchangeShortName: 'NASDAQ'
  },
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    currency: 'USD',
    stockExchange: 'NASDAQ Global Select',
    exchangeShortName: 'NASDAQ'
  },
  {
    symbol: 'AAPG',
    name: 'Ascentage Pharma Group International',
    currency: 'USD',
    stockExchange: 'NASDAQ Global Market',
    exchangeShortName: 'NASDAQ'
  },
  {
    symbol: 'AAPD',
    name: 'Direxion Daily AAPL Bear 1X Shares',
    currency: 'USD',
    stockExchange: 'NASDAQ Global Market',
    exchangeShortName: 'NASDAQ'
  },
  {
    symbol: 'AAPB',
    name: 'GraniteShares ETF Trust - GraniteShares 2x Long Tilray Daily ETF',
    currency: 'USD',
    stockExchange: 'NASDAQ Global Market',
    exchangeShortName: 'NASDAQ'
  }
]

export const StockExchange = () => {
    let _data = mockData
    //let _data = []
    const apiKey = secret.api_key

    const getData = () => {
        return _data
    }

    const loadData = async (query) => {
        try{
            console.log(apiKey);
            
            const response = await fetch(`https://financialmodelingprep.com//api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${apiKey}`)
            const data = await response.json()
            console.log(data);

            _data = data
            
        } catch (err){
            console.error("Error" + err.message);
            _data = null
        }
    }

    return {getData, loadData}
}

const test = StockExchange()
//test.loadData('AA')