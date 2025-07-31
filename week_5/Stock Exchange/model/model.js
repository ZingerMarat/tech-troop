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
// const mockCompanyProfileData = [
//   {
//     symbol: "AAPL",
//     price: 211.27,
//     marketCap: 3155486466000,
//     beta: 1.199,
//     lastDividend: 1.01,
//     range: "169.21-260.1",
//     change: -2.78,
//     changePercentage: -1.29876,
//     volume: 48540908,
//     averageVolume: 53252362,
//     companyName: "Apple Inc.",
//     currency: "USD",
//     cik: "0000320193",
//     isin: "US0378331005",
//     cusip: "037833100",
//     exchangeFullName: "NASDAQ Global Select",
//     exchange: "NASDAQ",
//     industry: "Consumer Electronics",
//     website: "https://www.apple.com",
//     description:
//       "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, and HomePod. It also provides AppleCare support and cloud services; and operates various platforms, including the App Store that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts, as well as advertising services include third-party licensing arrangements and its own advertising platforms. In addition, the company offers various subscription-based services, such as Apple Arcade, a game subscription service; Apple Fitness+, a personalized fitness service; Apple Music, which offers users a curated listening experience with on-demand radio stations; Apple News+, a subscription news and magazine service; Apple TV+, which offers exclusive original content; Apple Card, a co-branded credit card; and Apple Pay, a cashless payment service, as well as licenses its intellectual property. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It distributes third-party applications for its products through the App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. was founded in 1976 and is headquartered in Cupertino, California.",
//     ceo: "Timothy D. Cook",
//     sector: "Technology",
//     country: "US",
//     fullTimeEmployees: "164000",
//     phone: "(408) 996-1010",
//     address: "One Apple Park Way",
//     city: "Cupertino",
//     state: "CA",
//     zip: "95014",
//     image: "https://images.financialmodelingprep.com/symbol/AAPL.png",
//     ipoDate: "1980-12-12",
//     defaultImage: false,
//     isEtf: false,
//     isActivelyTrading: true,
//     isAdr: false,
//     isFund: false,
//   },
// ]
const mockCompanyHistoryData = [
  { date: "2025-07-29", close: 211.27 },
  { date: "2025-07-28", close: 214.05 },
  { date: "2025-07-25", close: 213.88 },
  { date: "2025-07-24", close: 213.76 },
  { date: "2025-07-23", close: 214.15 },
  { date: "2025-07-22", close: 214.4 },
  { date: "2025-07-21", close: 212.48 },
  { date: "2025-07-18", close: 211.18 },
  { date: "2025-07-17", close: 210.02 },
  { date: "2025-07-16", close: 210.16 },
  { date: "2025-07-15", close: 209.11 },
  { date: "2025-07-14", close: 208.62 },
  { date: "2025-07-11", close: 211.16 },
  { date: "2025-07-10", close: 212.41 },
  { date: "2025-07-09", close: 211.14 },
  { date: "2025-07-08", close: 210.01 },
  { date: "2025-07-07", close: 209.95 },
  { date: "2025-07-03", close: 213.55 },
  { date: "2025-07-02", close: 212.44 },
  { date: "2025-07-01", close: 207.82 },
  { date: "2025-06-30", close: 205.17 },
  { date: "2025-06-27", close: 201.08 },
  { date: "2025-06-26", close: 201 },
  { date: "2025-06-25", close: 201.56 },
  { date: "2025-06-24", close: 200.3 },
  { date: "2025-06-23", close: 201.5 },
  { date: "2025-06-20", close: 201 },
  { date: "2025-06-18", close: 196.58 },
  { date: "2025-06-17", close: 195.64 },
  { date: "2025-06-16", close: 198.42 },
  { date: "2025-06-13", close: 196.45 },
  { date: "2025-06-12", close: 199.2 },
  { date: "2025-06-11", close: 198.78 },
  { date: "2025-06-10", close: 202.67 },
  { date: "2025-06-09", close: 201.45 },
  { date: "2025-06-06", close: 203.92 },
  { date: "2025-06-05", close: 200.63 },
  { date: "2025-06-04", close: 202.82 },
  { date: "2025-06-03", close: 203.27 },
  { date: "2025-06-02", close: 201.7 },
  { date: "2025-05-30", close: 200.85 },
  { date: "2025-05-29", close: 199.95 },
  { date: "2025-05-28", close: 200.42 },
  { date: "2025-05-27", close: 200.21 },
  { date: "2025-05-23", close: 195.27 },
  { date: "2025-05-22", close: 201.36 },
  { date: "2025-05-21", close: 202.09 },
  { date: "2025-05-20", close: 206.86 },
  { date: "2025-05-19", close: 208.78 },
  { date: "2025-05-16", close: 211.26 },
  { date: "2025-05-15", close: 211.45 },
  { date: "2025-05-14", close: 212.33 },
  { date: "2025-05-13", close: 212.93 },
  { date: "2025-05-12", close: 210.79 },
  { date: "2025-05-09", close: 198.53 },
  { date: "2025-05-08", close: 197.49 },
  { date: "2025-05-07", close: 196.25 },
  { date: "2025-05-06", close: 198.51 },
  { date: "2025-05-05", close: 198.89 },
  { date: "2025-05-02", close: 205.35 },
  { date: "2025-05-01", close: 213.32 },
  { date: "2025-04-30", close: 212.5 },
  { date: "2025-04-29", close: 211.21 },
  { date: "2025-04-28", close: 210.14 },
  { date: "2025-04-25", close: 209.28 },
  { date: "2025-04-24", close: 208.37 },
  { date: "2025-04-23", close: 204.6 },
  { date: "2025-04-22", close: 199.74 },
  { date: "2025-04-21", close: 193.16 },
  { date: "2025-04-17", close: 196.98 },
  { date: "2025-04-16", close: 194.27 },
  { date: "2025-04-15", close: 202.14 },
  { date: "2025-04-14", close: 202.52 },
  { date: "2025-04-11", close: 198.15 },
  { date: "2025-04-10", close: 190.42 },
  { date: "2025-04-09", close: 198.85 },
  { date: "2025-04-08", close: 172.42 },
  { date: "2025-04-07", close: 181.46 },
  { date: "2025-04-04", close: 188.38 },
  { date: "2025-04-03", close: 203.19 },
  { date: "2025-04-02", close: 223.89 },
  { date: "2025-04-01", close: 223.19 },
  { date: "2025-03-31", close: 222.13 },
  { date: "2025-03-28", close: 217.9 },
  { date: "2025-03-27", close: 223.85 },
  { date: "2025-03-26", close: 221.53 },
  { date: "2025-03-25", close: 223.75 },
  { date: "2025-03-24", close: 220.73 },
  { date: "2025-03-21", close: 218.27 },
  { date: "2025-03-20", close: 214.1 },
  { date: "2025-03-19", close: 215.24 },
  { date: "2025-03-18", close: 212.69 },
  { date: "2025-03-17", close: 214 },
  { date: "2025-03-14", close: 213.49 },
  { date: "2025-03-13", close: 209.68 },
  { date: "2025-03-12", close: 216.98 },
  { date: "2025-03-11", close: 220.84 },
  { date: "2025-03-10", close: 227.48 },
  { date: "2025-03-07", close: 239.07 },
  { date: "2025-03-06", close: 235.33 },
]
const mockCompanysProfileData = [
  {
    symbol: 'AAL',
    price: 11.51,
    beta: 1.359,
    volAvg: 61022680,
    mktCap: 7594631790,
    lastDiv: 0,
    range: '8.5-19.1',
    changes: 0.09,
    companyName: 'American Airlines Group Inc.',
    currency: 'USD',
    cik: '0000006201',
    isin: 'US02376R1023',
    cusip: '02376R102',
    exchange: 'NASDAQ Global Select',
    exchangeShortName: 'NASDAQ',
    industry: 'Airlines, Airports & Air Services',
    website: 'https://www.aa.com',
    description: 'American Airlines Group Inc., through its subsidiaries, operates as a network air carrier. The company provides scheduled air transportation services for passengers and cargo through its hubs in Charlotte, Chicago, Dallas/Fort Worth, Los Angeles, Miami, New York, Philadelphia, Phoenix, and Washington, D.C., as well as through partner gateways in London, Madrid, Seattle/Tacoma, Sydney, and Tokyo. As of December 31, 2021, it operated a mainline fleet of 865 aircraft. The company was formerly known as AMR Corporation and changed its name to American Airlines Group Inc. in December 2013. American Airlines Group Inc. was founded in 1930 and is headquartered in Fort Worth, Texas.',
    ceo: 'Robert D. Isom Jr.',
    sector: 'Industrials',
    country: 'US',
    fullTimeEmployees: '133100',
    phone: '682 278 9000',
    address: '1 Skyview Drive',
    city: 'Fort Worth',
    state: 'TX',
    zip: '76155',
    dcfDiff: 2.01582,
    dcf: 14.4142,
    image: 'https://images.financialmodelingprep.com/symbol/AAL.png',
    ipoDate: '2005-09-27',
    defaultImage: false,
    isEtf: false,
    isActivelyTrading: true,
    isAdr: false,
    isFund: false
  },
  {
    symbol: 'AARD',
    price: 12.69,
    beta: 3.0121627,
    volAvg: 58917,
    mktCap: 275321225,
    lastDiv: 0,
    range: '4.88-19.58',
    changes: -0.29,
    companyName: 'Aardvark Therapeutics, Inc. Common Stock',
    currency: 'USD',
    cik: '0001774857',
    isin: 'US0029421007',
    cusip: null,
    exchange: 'NASDAQ Global Select',
    exchangeShortName: 'NASDAQ',
    industry: 'Biotechnology',
    website: 'https://aardvarktherapeutics.com',
    description: 'Aardvark Therapeutics, Inc., a clinical-stage biopharmaceutical company, focuses on developing small-molecule therapeutics to activate innate homeostatic pathways for the treatment of metabolic diseases. Its lead product candidate is the ARD-101, an oral gut-restricted small-molecule agonist of certain targeting bitter taste receptors expressed in the gut lumen that is in Phase III clinical trial for hyperphagia associated with Prader-Willi Syndrome, as well as in Phase II clinical trial for hyperphagia associated with acquired hypothalamic obesity resultant from treatment of craniopharyngioma, including surgery or radiation. It also developing ARD-201, which is in Phase I clinical trial for the treatment of obesity. The company was incorporated in 2017 and is based in San Diego, California.',
    ceo: 'Tien-Li Lee',
    sector: 'Healthcare',
    country: 'US',
    fullTimeEmployees: '22',
    phone: '858 225 7696',
    address: '4370 La Jolla Village Drive',
    city: 'San Diego',
    state: 'CA',
    zip: '92122',
    dcfDiff: 8.5754,
    dcf: 4.714597660734727,
    image: 'https://images.financialmodelingprep.com/symbol/AARD.png',
    ipoDate: '2025-02-13',
    defaultImage: false,
    isEtf: false,
    isActivelyTrading: true,
    isAdr: false,
    isFund: false
  },
  {
    symbol: 'AAPU',
    price: 22.57,
    beta: 1.7045331,
    volAvg: 3809385,
    mktCap: 328124691,
    lastDiv: 0.90437,
    range: '15.89-43.099',
    changes: -0.5,
    companyName: 'Direxion Daily AAPL Bull 1.5X Shares',
    currency: 'USD',
    cik: null,
    isin: 'US25461A8743',
    cusip: '25461A874',
    exchange: 'NASDAQ Global Market',
    exchangeShortName: 'NASDAQ',
    industry: 'Asset Management - Leveraged',
    website: null,
    description: 'The fund, under normal circumstances, invests at least 80% of its net assets (plus any borrowings for investment purposes) in the securities of AAPL and financial instruments, such as swap agreements and options, that provide leveraged exposure to AAPL. The fund is non-diversified.',
    ceo: '',
    sector: 'Financial Services',
    country: 'US',
    fullTimeEmployees: null,
    phone: null,
    address: null,
    city: null,
    state: null,
    zip: null,
    dcfDiff: null,
    dcf: 0,
    image: 'https://images.financialmodelingprep.com/symbol/AAPU.png',
    ipoDate: '2022-08-09',
    defaultImage: false,
    isEtf: true,
    isActivelyTrading: true,
    isAdr: false,
    isFund: false
  },
  {
    symbol: 'AAPL',
    price: 209.05,
    beta: 1.199,
    volAvg: 53123538,
    mktCap: 3122328990000,
    lastDiv: 1.01,
    range: '169.21-260.1',
    changes: -2.22,
    companyName: 'Apple Inc.',
    currency: 'USD',
    cik: '0000320193',
    isin: 'US0378331005',
    cusip: '037833100',
    exchange: 'NASDAQ Global Select',
    exchangeShortName: 'NASDAQ',
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
    dcfDiff: 43.41352,
    dcf: 166.2642767590856,
    image: 'https://images.financialmodelingprep.com/symbol/AAPL.png',
    ipoDate: '1980-12-12',
    defaultImage: false,
    isEtf: false,
    isActivelyTrading: true,
    isAdr: false,
    isFund: false
  },
  {
    symbol: 'AAPB',
    price: 20.76,
    beta: 1.72435,
    volAvg: 289732,
    mktCap: 28808382,
    lastDiv: 4.30641,
    range: '14.5-36.475',
    changes: -0.43,
    companyName: 'GraniteShares ETF Trust - GraniteShares 2x Long Tilray Daily ETF',
    currency: 'USD',
    cik: null,
    isin: 'US38747R8842',
    cusip: '38747R884',
    exchange: 'NASDAQ Global Market',
    exchangeShortName: 'NASDAQ',
    industry: 'Asset Management - Leveraged',
    website: null,
    description: 'The adviser will enter into one or more swap agreements with major financial institutions for a specified period ranging from a day to more than one year whereby the adviser and the financial institution will agree to exchange the return earned or realized on the underlying stock. It is non-diversified.',
    ceo: '',
    sector: 'Financial Services',
    country: 'US',
    fullTimeEmployees: null,
    phone: null,
    address: null,
    city: null,
    state: null,
    zip: null,
    dcfDiff: null,
    dcf: 0,
    image: 'https://images.financialmodelingprep.com/symbol/AAPB.png',
    ipoDate: '2022-08-10',
    defaultImage: false,
    isEtf: true,
    isActivelyTrading: true,
    isAdr: false,
    isFund: false
  },
  {
    symbol: 'AAPD',
    price: 17.2828,
    beta: -1.005697,
    volAvg: 1044135,
    mktCap: 41657424,
    lastDiv: 0.54632,
    range: '14.7-21.96',
    changes: 0.1828,
    companyName: 'Direxion Daily AAPL Bear 1X Shares',
    currency: 'USD',
    cik: null,
    isin: 'US25461A3041',
    cusip: '25461A304',
    exchange: 'NASDAQ Global Market',
    exchangeShortName: 'NASDAQ',
    industry: 'Asset Management - Leveraged',
    website: null,
    description: 'The fund, under normal circumstances, invests in financial instruments, including swap agreements and options, that, in combination, provide inverse (opposite) or short leveraged exposure to AAPL equal to at least 80% of the fund’s net assets (plus borrowings for investment purposes). It is non-diversified.',
    ceo: '',
    sector: 'Financial Services',
    country: 'US',
    fullTimeEmployees: null,
    phone: null,
    address: null,
    city: null,
    state: null,
    zip: null,
    dcfDiff: null,
    dcf: 0,
    image: 'https://images.financialmodelingprep.com/symbol/AAPD.png',
    ipoDate: '2022-08-10',
    defaultImage: false,
    isEtf: true,
    isActivelyTrading: true,
    isAdr: false,
    isFund: false
  },
  {
    symbol: 'AAPG',
    price: 37.5,
    beta: 0.834,
    volAvg: 12485,
    mktCap: 3472274250,
    lastDiv: 0,
    range: '16.5-43.58',
    changes: -2.58,
    companyName: 'Ascentage Pharma Group International',
    currency: 'USD',
    cik: '0002023311',
    isin: 'US04390B1052',
    cusip: '04563G101',
    exchange: 'NASDAQ Global Market',
    exchangeShortName: 'NASDAQ',
    industry: 'Biotechnology',
    website: 'https://www.ascentage.cn',
    description: "Ascentage Pharma Group International, a clinical-stage biotechnology company, develops therapies for cancers, chronic hepatitis B virus (HBV), and age-related diseases in Mainland China. The company's primary product candidate is HQP1351, a BCR-ABL inhibitor targeting BCR-ABL1 mutants, including those with the T315I mutation. It also develops APG-2575, an oral administered Bcl-2 selective inhibitor for hematologic malignancies and solid tumors; APG-115, an oral small molecule inhibitor of the MDM2-p53 protein-protein interactions to treat solid tumors and hematological malignancies; and APG-1252, a small molecule drug to restore apoptosis through dual inhibition of the Bcl-2 and Bcl-xL proteins for the treatment of small-cell lung cancer, non-small cell lung cancer, neuroendocrine tumor, and non-Hodgkin's lymphoma. In addition, the company is developing APG-1387, a small molecule inhibitor of apoptosis proteins for advanced solid tumors and chronic HBV infection; APG-2449, an oral inhibitor of FAK, ROS1, and ALK kinases; APG-5918, an orally available and selective embryonic ectoderm development inhibitor; APG-265, a MDM2 protein degrader; and UBX1967/1325, which are Bcl-2 inhibitors. In addition, it is also involved in medical research and development; clinical development; clinical trial operation; venture capital investment; rental services; and science and technology promotion services. The company has collaboration relationships with biotechnology and pharmaceutical companies; and research institutions. Ascentage Pharma Group International was founded in 2009 and is headquartered in Suzhou, China.",
    ceo: 'Dajun Yang',
    sector: 'Healthcare',
    country: 'CN',
    fullTimeEmployees: '567',
    phone: '86 512 8555 7777',
    address: 'Suzhou Industrial Park',
    city: 'Suzhou',
    state: null,
    zip: '215000',
    dcfDiff: null,
    dcf: 0,
    image: 'https://images.financialmodelingprep.com/symbol/AAPG.png',
    ipoDate: '2025-01-24',
    defaultImage: false,
    isEtf: false,
    isActivelyTrading: true,
    isAdr: false,
    isFund: false
  },
  {
    symbol: 'AAVM',
    price: 26.77,
    beta: 0.48,
    volAvg: 1941,
    mktCap: 19262675,
    lastDiv: 0.64556,
    range: '21.1-27.77',
    changes: -0.035,
    companyName: 'Alpha Architect Global Factor Equity ETF',
    currency: 'USD',
    cik: '0001592900',
    isin: 'US02072L5084',
    cusip: null,
    exchange: 'NASDAQ Global Market',
    exchangeShortName: 'NASDAQ',
    industry: 'Asset Management',
    website: null,
    description: "AAVM is a fund-of-funds that seeks to provide long-term capital appreciation through a multi-factor approach. The fund comprises four other ETFs from Alpha Architect, each targeting specific exposures: US value, developed ex-US value, US momentum, and developed ex-US momentum. These underlying funds are managed using a multi-step, quantitative methodology to identify equities with the highest relative momentum (for the momentum ETFs) or potential for capital appreciation (for the value ETFs). AAVM's adviser allocates the portfolio across the four underlying ETFs using a proprietary model that assigns greater weight to the ETF with higher relative momentum. The portfolio is generally rebalanced quarterly, although it may be rebalanced more frequently at the adviser's discretion. Prior to Jan. 31, 2022, AAVM tracked the Alpha Architect Value Momentum Trend Index. Before Jan. 31, 2025, the fund was named Alpha Architect Value Momentum Trend ETF and traded under the ticker VMOT.",
    ceo: null,
    sector: 'Financial Services',
    country: 'US',
    fullTimeEmployees: null,
    phone: '',
    address: null,
    city: null,
    state: '',
    zip: null,
    dcfDiff: null,
    dcf: 0,
    image: 'https://images.financialmodelingprep.com/symbol/AAVM.png',
    ipoDate: '2017-05-04',
    defaultImage: false,
    isEtf: false,
    isActivelyTrading: true,
    isAdr: false,
    isFund: false
  },
  {
    symbol: 'AAWW',
    price: 102.48,
    beta: 1.154682,
    volAvg: 552884,
    mktCap: 2934330336,
    lastDiv: 0,
    range: '58.7-102.5',
    changes: 0.02,
    companyName: 'Atlas Air Worldwide Holdings, Inc.',
    currency: 'USD',
    cik: '0001135185',
    isin: 'US0491642056',
    cusip: '049164205',
    exchange: 'NASDAQ Global Select',
    exchangeShortName: 'NASDAQ',
    industry: 'Airlines, Airports & Air Services',
    website: 'https://www.atlasairworldwide.com',
    description: 'Atlas Air Worldwide Holdings, Inc., through its subsidiaries, provides outsourced aircraft and aviation operating services. It operates through two segments, Airline Operations and Dry Leasing. The company offers outsourced cargo and passenger aircraft operating solutions, including contractual service arrangements, such as the provision of aircraft; and value-added services, including crew, maintenance, and insurance to aircraft and other customers. It also provides cargo and passenger aircraft charter services to the U.S. Military Air Mobility Command, charter brokers, freight forwarders, direct shippers, airlines, manufacturers, sports teams and fans, and private charter customers; and cargo and passenger aircraft and engines dry leasing services. In addition, the company offers administrative and management support services, and flight simulator training services. It also serves express delivery providers, e-commerce retailers, and airlines. The company has operations in Africa, Asia, Australia, Europe, the Middle East, North America, and South America. Atlas Air Worldwide Holdings, Inc. was founded in 1992 and is headquartered in Purchase, New York.',
    ceo: 'John W. Dietrich',
    sector: 'Industrials',
    country: 'US',
    fullTimeEmployees: '4500',
    phone: '914 701 8000',
    address: '2000 Westchester Avenue',
    city: 'Purchase',
    state: 'NY',
    zip: '10577-2543',
    dcfDiff: 32.9913,
    dcf: 134.891,
    image: 'https://images.financialmodelingprep.com/symbol/AAWW.png',
    ipoDate: '1995-08-11',
    defaultImage: false,
    isEtf: false,
    isActivelyTrading: false,
    isAdr: false,
    isFund: false
  },
  {
    symbol: 'AAXJ',
    price: 84.32,
    beta: 1.11,
    volAvg: 515746,
    mktCap: 2675219375,
    lastDiv: 1.63373,
    range: '64.33-86.09',
    changes: -0.68,
    companyName: 'iShares MSCI All Country Asia ex Japan ETF',
    currency: 'USD',
    cik: '0001100663',
    isin: 'US4642881829',
    cusip: '464288182',
    exchange: 'NASDAQ Global Market',
    exchangeShortName: 'NASDAQ',
    industry: 'Asset Management',
    website: null,
    description: 'The fund will invest at least 80% of its assets in the component securities of the index and in investments that have economic characteristics that are substantially identical to the component securities of the index. The index is a free float-adjusted market capitalization index designed to measure equity market performance of securities from the following 11 developed and emerging market countries or regions: China, Hong Kong, India, Indonesia, Malaysia, Pakistan, the Philippines, Singapore, South Korea, Taiwan and Thailand.',
    ceo: '',
    sector: 'Financial Services',
    country: 'US',
    fullTimeEmployees: null,
    phone: null,
    address: null,
    city: null,
    state: 'DE',
    zip: null,
    dcfDiff: null,
    dcf: 0,
    image: 'https://images.financialmodelingprep.com/symbol/AAXJ.png',
    ipoDate: '2008-08-15',
    defaultImage: false,
    isEtf: true,
    isActivelyTrading: true,
    isAdr: false,
    isFund: false
  }
]

export const StockExchange = () => {
  let _data = mockData
  let _companyHistoryData = mockCompanyHistoryData
  let _companysProfileData = mockCompanysProfileData

  const apiKey = secret.api_key

  const getData = () => {
    return _data
  }

  const getProfileData = (companySymbol) => {
    return _companysProfileData.find(elem => elem.symbol === companySymbol)
  }

  const getSearchProfilesData = () => {
    const data = _data.map(company => ({...company, ..._companysProfileData.find(elem => elem.symbol === company.symbol)}))
    console.log(data);
    return data
  }

  const getHistoryData = () => {
    return _companyHistoryData
  }

  //TODO: change my name
  const loadDataWithProfile = async (query) => {

    await loadData(query)

    const symbols = _data.map(company =>  company.symbol).join(',')
    console.log(symbols);

    await loadCompanyProfile(symbols)
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
      const res = await fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`)

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data = await res.json()
      console.log(data)

      _companysProfileData = data
    } catch (err) {
      console.error("Load Company Error" + err.message)
      _companysProfileData = null
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

  return { getData, loadData, loadCompanyProfile, loadCompanyHistory, getProfileData, getSearchProfilesData, getHistoryData, loadDataWithProfile }
}

const test = StockExchange()
//test.loadData('AA')
//test.loadCompanyProfile("AAPL")
//test.loadDataWithProfile()
test.getSearchProfilesData()
