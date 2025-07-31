import { secret } from "../secrets.js"
const mockStockData = [
  {
    ticker: "HCTI",
    changes: -0.0206,
    price: "0.0302",
    changesPercentage: "-40.55118",
    companyName: "Healthcare Triangle, Inc.",
  },
  {
    ticker: "OP",
    changes: 0.0345,
    price: "0.1749",
    changesPercentage: "24.57265",
    companyName: "OceanPal Inc.",
  },
  {
    ticker: "IXHL",
    changes: -0.19,
    price: "0.88",
    changesPercentage: "-17.75701",
    companyName: "Incannex Healthcare Limited",
  },
  {
    ticker: "GIBO",
    changes: -0.0205,
    price: "0.0745",
    changesPercentage: "-21.57895",
    companyName: "GIBO Holdings Limited",
  },
  {
    ticker: "REPL",
    changes: 3.8,
    price: "7.55",
    changesPercentage: "101.33333",
    companyName: "Replimune Group, Inc.",
  },
  {
    ticker: "SOXS",
    changes: -0.1402,
    price: "7.06",
    changesPercentage: "-1.94717",
    companyName: "Direxion Daily Semiconductor Bear 3X Shares",
  },
  {
    ticker: "SOFI",
    changes: -0.53,
    price: "21.87",
    changesPercentage: "-2.36607",
    companyName: "SoFi Technologies, Inc.",
  },
  {
    ticker: "NVDA",
    changes: 3.76,
    price: "179.27",
    changesPercentage: "2.14233",
    companyName: "NVIDIA Corporation",
  },
  {
    ticker: "XBP",
    changes: 0.7299,
    price: "1.63",
    changesPercentage: "81.09099",
    companyName: "XBP Europe Holdings, Inc.",
  },
  {
    ticker: "WLGS",
    changes: 0.0068,
    price: "0.0601",
    changesPercentage: "12.75797",
    companyName: "WANG & LEE GROUP, Inc.",
  },
  {
    ticker: "OPEN",
    changes: 0.02,
    price: "2.07",
    changesPercentage: "0.97561",
    companyName: "Opendoor Technologies Inc.",
  },
  {
    ticker: "BINI",
    changes: 0.001,
    price: "0.058",
    changesPercentage: "1.75439",
    companyName: "Bollinger Innovations, Inc.",
  },
  {
    ticker: "TSLL",
    changes: -0.17,
    price: "11.47",
    changesPercentage: "-1.46048",
    companyName: "Direxion Daily TSLA Bull 2X Shares",
  },
  {
    ticker: "NCNA",
    changes: -0.0036,
    price: "0.0467",
    changesPercentage: "-7.15706",
    companyName: "NuCana plc",
  },
  {
    ticker: "MULN",
    changes: -0.0028,
    price: "0.0542",
    changesPercentage: "-4.91228",
    companyName: "Mullen Automotive, Inc.",
  },
  {
    ticker: "SQQQ",
    changes: -0.07,
    price: "18.1",
    changesPercentage: "-0.38525",
    companyName: "ProShares UltraPro Short QQQ",
  },
  {
    ticker: "SOXL",
    changes: 0.58,
    price: "27.61",
    changesPercentage: "2.14576",
    companyName: "Direxion Daily Semiconductor Bull 3X Shares",
  },
  {
    ticker: "LCID",
    changes: -0.06,
    price: "2.5",
    changesPercentage: "-2.34375",
    companyName: "Lucid Group, Inc.",
  },
  {
    ticker: "TSLA",
    changes: -2.16,
    price: "319.04",
    changesPercentage: "-0.67248",
    companyName: "Tesla, Inc.",
  },
  {
    ticker: "SPY",
    changes: -0.8,
    price: "634.46",
    changesPercentage: "-0.12593",
    companyName: "SPDR S&P 500 ETF Trust",
  },
  {
    ticker: "DNN",
    changes: -0.05,
    price: "2.08",
    changesPercentage: "-2.34742",
    companyName: "Denison Mines Corp.",
  },
  {
    ticker: "F",
    changes: -0.21,
    price: "10.87",
    changesPercentage: "-1.89531",
    companyName: "Ford Motor Company",
  },
  {
    ticker: "AAL",
    changes: 0.09,
    price: "11.51",
    changesPercentage: "0.78809",
    companyName: "American Airlines Group Inc.",
  },
  {
    ticker: "TNFA",
    changes: -0.0294,
    price: "0.125",
    changesPercentage: "-19.04145",
    companyName: "TNF Pharmaceuticals, Inc.",
  },
  {
    ticker: "SPXS",
    changes: 0.0187,
    price: "4.39",
    changesPercentage: "0.42779",
    companyName: "Direxion Daily S&P 500 Bear 3X Shares",
  },
  {
    ticker: "VALE",
    changes: -0.26,
    price: "9.63",
    changesPercentage: "-2.62892",
    companyName: "Vale S.A.",
  },
  {
    ticker: "TQQQ",
    changes: 0.31,
    price: "89.69",
    changesPercentage: "0.34683",
    companyName: "ProShares UltraPro QQQ",
  },
  {
    ticker: "INTC",
    changes: -0.07,
    price: "20.34",
    changesPercentage: "-0.34297",
    companyName: "Intel Corporation",
  },
  {
    ticker: "FCX",
    changes: -4.09,
    price: "39.14",
    changesPercentage: "-9.46102",
    companyName: "Freeport-McMoRan Inc.",
  },
  {
    ticker: "NVO",
    changes: -3.91,
    price: "50.03",
    changesPercentage: "-7.24879",
    companyName: "Novo Nordisk A/S",
  },
  {
    ticker: "EWZ",
    changes: 0.12,
    price: "26.88",
    changesPercentage: "0.44843",
    companyName: "iShares MSCI Brazil ETF",
  },
  {
    ticker: "BBD",
    changes: -0.005,
    price: "2.77",
    changesPercentage: "-0.18018",
    companyName: "Banco Bradesco S.A.",
  },
  {
    ticker: "AMD",
    changes: 2.07,
    price: "179.51",
    changesPercentage: "1.16659",
    companyName: "Advanced Micro Devices, Inc.",
  },
  {
    ticker: "QH",
    changes: 0.0127,
    price: "0.1148",
    changesPercentage: "12.43879",
    companyName: "Quhuo Limited",
  },
  {
    ticker: "QS",
    changes: -0.495,
    price: "8.78",
    changesPercentage: "-5.33693",
    companyName: "QuantumScape Corporation",
  },
  {
    ticker: "FUBO",
    changes: 0.62,
    price: "4.16",
    changesPercentage: "17.51412",
    companyName: "fuboTV Inc.",
  },
  {
    ticker: "BGLC",
    changes: 2.72,
    price: "7.18",
    changesPercentage: "60.98655",
    companyName: "BioNexus Gene Lab Corp.",
  },
  {
    ticker: "MARA",
    changes: -0.06,
    price: "16.55",
    changesPercentage: "-0.36123",
    companyName: "Marathon Digital Holdings, Inc.",
  },
  {
    ticker: "BBAI",
    changes: -0.21,
    price: "6.41",
    changesPercentage: "-3.17221",
    companyName: "BigBear.ai Holdings, Inc.",
  },
  {
    ticker: "HIMS",
    changes: 5.26,
    price: "65.53",
    changesPercentage: "8.72739",
    companyName: "Hims & Hers Health, Inc.",
  },
  {
    ticker: "SMCI",
    changes: 2.08,
    price: "60.71",
    changesPercentage: "3.54767",
    companyName: "Super Micro Computer, Inc.",
  },
  {
    ticker: "WBD",
    changes: 0.14,
    price: "13.26",
    changesPercentage: "1.06707",
    companyName: "Warner Bros. Discovery, Inc.",
  },
  {
    ticker: "IWM",
    changes: -1.13,
    price: "221.56",
    changesPercentage: "-0.50743",
    companyName: "iShares Russell 2000 ETF",
  },
  {
    ticker: "MRVL",
    changes: 5.4,
    price: "81.74",
    changesPercentage: "7.07362",
    companyName: "Marvell Technology, Inc.",
  },
  {
    ticker: "BTG",
    changes: -0.11,
    price: "3.32",
    changesPercentage: "-3.207",
    companyName: "B2Gold Corp.",
  },
  {
    ticker: "SBUX",
    changes: -0.2,
    price: "92.76",
    changesPercentage: "-0.21515",
    companyName: "Starbucks Corporation",
  },
  {
    ticker: "PTON",
    changes: 1.16,
    price: "7.34",
    changesPercentage: "18.77023",
    companyName: "Peloton Interactive, Inc.",
  },
  {
    ticker: "KEY",
    changes: -0.23,
    price: "18.16",
    changesPercentage: "-1.25068",
    companyName: "KeyCorp",
  },
  {
    ticker: "AAPL",
    changes: -2.22,
    price: "209.05",
    changesPercentage: "-1.05079",
    companyName: "Apple Inc.",
  },
  {
    ticker: "PSLV",
    changes: -0.45,
    price: "12.48",
    changesPercentage: "-3.48028",
    companyName: "Sprott Physical Silver Trust",
  },
]

export function Marquee(div) {
  this.$marquee = div
  //TODO: remove before flight
  //this.stockData = []
  this.stockData = mockStockData

  this.create = async () => {
    //TODO: remove before flight
    //await this._fetchData()
    this._createMarguee()
  }

  this._fetchData = async () => {
    try {
      const res = await fetch(`https://financialmodelingprep.com/api/v3/actives?apikey=${secret.api_key}`)

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data = await res.json()
      this.stockData = data
    } catch (err) {
      console.error("Fetch marquee error" + err.message)
      this.stockData = null
    }
  }

  this._createMarguee = () => {
    //console.log(this.stockData)

    this.stockData.forEach((elem) => {
      const color = elem.changesPercentage >= 0 ? "green" : "red"

      const $marqueeItem = $(`
                            <div id="marquee-item">
                                ${elem.ticker} <span style="color: ${color}">($${elem.price})</span>
                            </div>
                            `)

      this.$marquee.append($marqueeItem)
    })
  }
}
