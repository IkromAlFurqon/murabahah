let price = document.getElementById('price')
let discount = document.getElementById('discount')
let administration = document.getElementById('administration')
let margin = document.getElementById('margin')
let dp = document.getElementById('dp')
let duration = document.getElementById('duration')
let inputButton = document.getElementById('input-button')

let finalPriceContainer = document.getElementById('finalPrice-container')
let monthlyInstallmentContainer = document.getElementById('monthlyInstallment-container')
let primaryLoanContainer = document.getElementById('primaryLoan-container')
let loanMarginContainer = document.getElementById('loanMargin-container')

let murabahahTable = document.getElementById('murabahah-table')

inputButton.addEventListener("click", function() {
    murabahahTable.innerText = ''
    let p = Number(price.value)
    let d = Number(discount.value)
    let a = Number(administration.value)
    let m = Number(margin.value)
    let DP = Number(dp.value)
    let D = Number(duration.value)

    let finalPrice, monthlyInstallment, primaryLoan, loanMargin
    finalPrice = (p*(1-(d/100))+a)*(1+(m/100))
    monthlyInstallment = (finalPrice-DP)/D
    primaryLoan = (1/D)*((p*(1-(d/100)))+a-DP)
    loanMargin = monthlyInstallment-primaryLoan

    finalPriceContainer.innerText = (Math.round(finalPrice)).toString()
    monthlyInstallmentContainer.innerText = (Math.round(monthlyInstallment)).toString()
    primaryLoanContainer.innerText = (Math.round(primaryLoan)).toString()
    loanMarginContainer.innerText = (Math.round(loanMargin)).toString()

    let tableRow = document.createElement("tr")
    let tableHead = document.createElement("th")
    let tableHeadText = document.createTextNode("Month")
    tableHead.appendChild(tableHeadText)
    tableRow.appendChild(tableHead)
    tableHead = document.createElement("th")
    tableHeadText = document.createTextNode("Installment to Pay (per Month)")
    tableHead.appendChild(tableHeadText)
    tableRow.appendChild(tableHead)
    tableHead = document.createElement("th")
    tableHeadText = document.createTextNode("Remaining Installment")
    tableHead.appendChild(tableHeadText)
    tableRow.appendChild(tableHead)

    murabahahTable.appendChild(tableRow)

    tableRow = document.createElement("tr")
    let tableData = document.createElement("td")
    let tableDataValue = document.createTextNode("")
    tableData.appendChild(tableDataValue)
    tableRow.appendChild(tableData)
    tableData = document.createElement("td")
    tableDataValue = document.createTextNode("")
    tableData.appendChild(tableDataValue)
    tableRow.appendChild(tableData)
    tableData = document.createElement("td")
    tableDataValue = document.createTextNode(Math.round(finalPrice).toString())
    tableData.appendChild(tableDataValue)
    tableRow.appendChild(tableData)

    murabahahTable.appendChild(tableRow)



    finalPrice = finalPrice - DP

    for (let n = 1; n <= D; n++) {
        tableRow = document.createElement("tr")
        tableData = document.createElement("td")
        tableDataValue = document.createTextNode(n.toString())
        tableData.appendChild(tableDataValue)
        tableRow.appendChild(tableData)
        tableData = document.createElement("td")
        tableDataValue = document.createTextNode(Math.round(monthlyInstallment).toString())
        tableData.appendChild(tableDataValue)
        tableRow.appendChild(tableData)
        tableData = document.createElement("td")
        finalPrice = finalPrice-monthlyInstallment
        tableDataValue = document.createTextNode(Math.round(finalPrice).toString())
        tableData.appendChild(tableDataValue)
        tableRow.appendChild(tableData)
        murabahahTable.appendChild(tableRow)
    }
})