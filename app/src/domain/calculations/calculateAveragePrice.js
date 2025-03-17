const calculateAveragePrice = (transaction, stockQuantity, stockAveragePrice) => {
    if (transaction.operation === 'sell') {
        return Number(stockAveragePrice)
    }

    if (transaction['unit-cost'] === stockAveragePrice) {
        return Number(stockAveragePrice)
    }

    const totalPrice = (stockQuantity * stockAveragePrice) + (transaction.quantity * transaction['unit-cost'])
    const totalQuantity = (stockQuantity + transaction.quantity)

    return +Number.parseFloat(totalPrice / totalQuantity).toFixed(2)
}

module.exports = {
    calculateAveragePrice
}
