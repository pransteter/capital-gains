const { describe, it } = require('node:test')
const assert = require('node:assert')

const { calculateAveragePrice } = require('./calculateAveragePrice')

describe('calculateAveragePrice', () => {
    it('Should round to 2 decimal places', () => {
        const transaction = {'operation':'buy', 'unit-cost':10.00, 'quantity': 5} 
        const stockQuantity = 10
        const stockAveragePrice = 20.00

        const result = calculateAveragePrice(transaction, stockQuantity, stockAveragePrice)
        assert.strictEqual(result, 16.67)
    })

    it('Should not return a different average price when operation is sell', () => {
        const transaction = {'operation':'sell', 'unit-cost':10.00, 'quantity': 5} 
        const stockQuantity = 10
        const stockAveragePrice = 20.00

        const result = calculateAveragePrice(transaction, stockQuantity, stockAveragePrice)
        assert.strictEqual(result, 20.00)
    })

    it('Should not return a different average price when unit price is equal to average price', () => {
        const transaction = {'operation':'buy', 'unit-cost':20.00, 'quantity': 5} 
        const stockQuantity = 10
        const stockAveragePrice = 20.00

        const result = calculateAveragePrice(transaction, stockQuantity, stockAveragePrice)
        assert.strictEqual(result, 20.00)
    })
})