const calculateTax = (transaction, stockAveragePrice, balance) => {
    if (!shouldCalculateTax(transaction, stockAveragePrice, balance)) {
        return 0;
    }

    const taxPercentual = 0.20
    return balance * taxPercentual
}

const shouldCalculateTax = (transaction, stockAveragePrice, balance) => {
    const minimunTransactionTotalPrice = 20000
    const transactionTotalPrice = transaction.quantity * transaction['unit-cost']
    if (transactionTotalPrice <= minimunTransactionTotalPrice) {
        return false;
    }

    if (transaction['unit-cost'] <= stockAveragePrice) {
        return false;
    }

    if (balance <= 0) {
        
        return false;
    }

    return true;
}

module.exports = {
    calculateTax
}
