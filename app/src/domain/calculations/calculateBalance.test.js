const { describe, it } = require('node:test')
const assert = require('node:assert')
const { calculateBalance } = require('./calculateBalance')

describe('calculateBalance', () => {
    it('should return zero balance when losses are equal to transaction balance', () => {
        const transactionBalance = 1000
        const accumulatedLosses = -1000

        const result = calculateBalance(transactionBalance, accumulatedLosses)

        assert.strictEqual(result, 0)
    })

    it('should return negative balance when accumulatedLosses are more than transaction balance', () => {
        const transactionBalance = -5
        const accumulatedLosses = -1000

        const result = calculateBalance(transactionBalance, accumulatedLosses)

        assert.strictEqual(result, -1005)
    })

    it('should return positive balance when accumulatedLosses are less than transaction balance', () => {
        const transactionBalance = 1203
        const accumulatedLosses = -1000

        const result = calculateBalance(transactionBalance, accumulatedLosses)

        assert.strictEqual(result, 203)
    })
})