export function CompareList() {
  this.companiesList = []

  $(".compare-list").on("click", ".remove-symbol", (e) => {
    const $parent = $(e.target).closest(".compared-company")
    const symbolToRemove = $parent.data("symbol")

    $parent.remove()
    this.companiesList = this.companiesList.filter((c) => c.symbol !== symbolToRemove)
    this.renderCompareBtn()

  })

  this.addToList = (company) => {

    if (!this.companiesList.find((c) => c.symbol === company.symbol)) {
      this.companiesList.push(company)
      this.renderCompanyBTN(company)
    }
  }

  this.renderCompanyBTN = (company) => {
    const $list = $(".compare-list")

    const $item = $(`
      <div class="compared-company" data-symbol="${company.symbol}">
        <div class="company-symbol">${company.symbol}</div>
        <div class="remove-symbol" role="button">✖</div>
      </div>
    `)

    $list.append($item)
    this.renderCompareBtn()
  }

  this.renderCompareBtn = () => {
    const $wrapper = $(".compare-list-wrapper")

    $wrapper.find(".compare-btn").remove()

    if(this.companiesList.length === 0){
        return
    }

    const symbols = this.companiesList.map(item => item.symbol).join(',')

    const $btn = $(`
    <a href=./compare.html?symbols=${symbols} class="compare-btn">Compare ${this.companiesList.length} items</a>
  `)

    $wrapper.append($btn)
  }
}
