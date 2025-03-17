const { describe, it } = require('node:test')
const assert = require('node:assert')
const { calculateStockQuantity } = require('./calculateStockQuantity')

describe('calculateStockQuantity', () => {
    it('should return the sum of stock quantity when transaction is buy', () => {
        const transaction = {'operation':'buy', 'quantity': 5} 
        const stockQuantity = 10    

        const result = calculateStockQuantity(transaction, stockQuantity)

        assert.strictEqual(result, 15)
    })

    it('should return the subtract of stock quantity when transaction is buy', () => {
        const transaction = {'operation':'sell', 'quantity': 5} 
        const stockQuantity = 10    

        const result = calculateStockQuantity(transaction, stockQuantity)

        assert.strictEqual(result, 5)
    })
})
