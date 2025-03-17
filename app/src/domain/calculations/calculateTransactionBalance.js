const calculateTransactionBalance = (transaction, stockAveragePrice) => {
    return (transaction['unit-cost'] - stockAveragePrice) * transaction.quantity;
}

module.exports = {
    calculateTransactionBalance
}
