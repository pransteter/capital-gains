const { calculateAveragePrice } = require('./calculations/calculateAveragePrice')
const { calculateBalance } = require('./calculations/calculateBalance')
const { calculateStockQuantity } = require('./calculations/calculateStockQuantity')
const { calculateTax } = require('./calculations/calculateTax')
const { calculateTransactionBalance } = require('./calculations/calculateTransactionBalance')

const getTaxes = (transactions) => {
    let stockQuantity = 0
    let stockAveragePrice = 0
    let acummulatedLosses = 0

    const updateGlobalValues = (transaction) => {
        stockAveragePrice = calculateAveragePrice(transaction, stockQuantity, stockAveragePrice)
        stockQuantity = calculateStockQuantity(transaction, stockQuantity)
    }

    const processSellTransaction = (transaction) => {
        const transactionBalance = calculateTransactionBalance(transaction, stockAveragePrice)
        const balance = calculateBalance(transactionBalance, acummulatedLosses)

        const result = {tax: +calculateTax(transaction, stockAveragePrice, balance).toFixed(2)}

        updateGlobalValues(transaction)

        acummulatedLosses += transactionBalance
        if (acummulatedLosses > 0) {
            acummulatedLosses = 0
        }

        return result
    }

    const processBuyTransaction = (transaction) => {
        updateGlobalValues(transaction)

        return {tax: +Number(0).toFixed(2)}
    }

    return transactions.map((transaction) => {
        return transaction.operation === 'sell'
            ? processSellTransaction(transaction)
            : processBuyTransaction(transaction)
    })
}

module.exports = {
    getTaxes
}
