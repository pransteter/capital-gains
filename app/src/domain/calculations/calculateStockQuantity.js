const calculateStockQuantity = (transaction, stockQuantity) => {
    return transaction.operation === 'buy'
        ? stockQuantity + transaction.quantity
        : stockQuantity - transaction.quantity
}

module.exports = {
    calculateStockQuantity
}
