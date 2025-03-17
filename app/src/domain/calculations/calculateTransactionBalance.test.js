const { describe, it } = require('node:test')
const assert = require('node:assert')
const { calculateTransactionBalance } = require('./calculateTransactionBalance')


describe('calculateTransactionBalance', () => {
    it('should return 0 when transaction unit-cost is equal stockAveragePrice', () => {
        const transaction = { 'unit-cost': 10.00, quantity: 100 }
        const stockAveragePrice = 10.00
        const result = calculateTransactionBalance(transaction, stockAveragePrice)
        
        assert.strictEqual(result, 0)
    })

    it('should return positive balance when unit-cost is more than average price', () => {
        const transaction = { 'unit-cost': 20.00, quantity: 100 }
        const stockAveragePrice = 10.00
        const result = calculateTransactionBalance(transaction, stockAveragePrice)
        
        assert.strictEqual(result, 1000)
    })

    it('should return negative when transaction unit-cost is less than average price', () => {
        const transaction = { 'unit-cost': 10.00, quantity: 100 }
        const stockAveragePrice = 20.00
        const result = calculateTransactionBalance(transaction, stockAveragePrice)
        
        assert.strictEqual(result, -1000)
    })
})
