import { StockExchange } from "../model/model.js"
import { Render } from "../view/view.js"
import { Marquee } from "../model/marquee.js"
import { secret } from "../secrets.js"

//Main Init
function init() {
  setupMarquee()
  setupSearch()
  setupSearchHandler()
}

//Setup marquee scrolling stock list
function setupMarquee() {
  new Marquee($("#marquee")).create()
}

//Render the search form and results container
function setupSearch() {
  const $searchForm = $(".search-input")
  $searchForm.append(`
    <div class="input-group mb-3">
      <input id="input-field" type="text" class="form-control" placeholder="search for company" />
      <button class="btn btn-outline-secondary" type="button" id="srch-btn">Search</button>
    </div>
  `)

  const $result = $(".list-wrapper")
  $result.append(`
    <div id="loader" class="spinner-border text-primary mx-auto" role="status" style="display: none">
      <span class="visually-hidden">Loading...</span>
    </div>
    <ul id="company-list" class="list-group list-group-flush hidden w-100"></ul>
  `)
}

//Handle search button click
function setupSearchHandler() {
  document.getElementById("srch-btn").addEventListener("click", handleSearch)
}

//Search logic: fetch and render data
async function handleSearch() {
  $("#company-list").empty()
  const query = document.getElementById("input-field").value
  const loader = document.getElementById("loader")

  loader.style.display = "inline-block"

  try {
    // TODO: enable real data fetch
    //await stockExchange.loadDataWithProfile(query)
    const data = stockExchange.getSearchProfilesData()

    if (!data || data.length === 0) {
      console.log("No results found.")
      render.renderSearchError("No results found.")
    } else {
      render.renderSearchResults(query, data, stockExchange.getProfileData)
    }
  } catch (err) {
    console.error("Error loading data:", err.message)
    render.renderSearchError("An error occurred. Please try again later.")
  } finally {
    loader.style.display = "none"
  }
}

const stockExchange = StockExchange()
const render = Render()

init()
