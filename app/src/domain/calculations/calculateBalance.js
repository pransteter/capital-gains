const calculateBalance = (transactionBalance, accumulatedLosses) => {
    return transactionBalance + accumulatedLosses
}

module.exports = {
    calculateBalance
}
