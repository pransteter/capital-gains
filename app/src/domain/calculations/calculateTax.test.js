const { describe, it } = require('node:test')
const assert = require('node:assert')
const { calculateTax } = require('./calculateTax')

describe('calculateTax', () => {
    it('should return zero when total transaction price is less or equal to 20.000', () => {
        const transaction = {'unit-cost': 19000, quantity: 1}
        const stockAveragePrice = 10.00
        const balance = 19000

        const result = calculateTax(transaction, stockAveragePrice, balance)

        assert.strictEqual(result, 0)
    })

    it('should return zero when transaction unit-cost is less than average price', () => {
        const transaction = {'unit-cost': 5.00, quantity: 200}
        const stockAveragePrice = 10.00
        const balance = 19000

        const result = calculateTax(transaction, stockAveragePrice, balance)

        assert.strictEqual(result, 0)
    })

    it('should return zero when transaction unit-cost is less than average price', () => {
        const transaction = {'unit-cost': 50.00, quantity: 100}
        const stockAveragePrice = 10.00
        const balance = -1

        const result = calculateTax(transaction, stockAveragePrice, balance)

        assert.strictEqual(result, 0)
    })

    it('should return 0.2% from balance when the gains are greater than 0', () => {
        const transaction = {'unit-cost': 50.00, quantity: 1000}
        const stockAveragePrice = 10.00
        const balance = 100

        const result = calculateTax(transaction, stockAveragePrice, balance)

        assert.strictEqual(result, 20)
    })
})
