const { describe, it } = require('node:test')
const assert = require('node:assert')
const { getTaxes } = require('./getTaxes')

describe('getTaxes', () => {
    it('Case #1', () => {
        const transactions = [
            {'operation':'buy', 'unit-cost':10.00, 'quantity': 100},
            {'operation':'sell', 'unit-cost':15.00, 'quantity': 50},
            {'operation':'sell', 'unit-cost':15.00, 'quantity': 50},
        ]

        const result = getTaxes(transactions)

        assert.deepStrictEqual(result, [
            {'tax': 0.00},
            {'tax': 0.00},
            {'tax': 0.00},
        ])
    })

    it('Case #2', () => {
        const transactions = [
            {'operation':'buy', 'unit-cost':10.00, 'quantity': 10000},
            {'operation':'sell', 'unit-cost':20.00, 'quantity': 5000},
            {'operation':'sell', 'unit-cost':5.00, 'quantity': 5000},
        ]

        const result = getTaxes(transactions)

        assert.deepStrictEqual(result, [
            {'tax': 0.00},
            {'tax': 10000.00},
            {'tax': 0.00},
        ])
    })

    it('Case #1 + Case #2', () => {
        const firstTransactions = [
            {'operation':'buy', 'unit-cost':10.00, 'quantity': 100},
            {'operation':'sell', 'unit-cost':15.00, 'quantity': 50},
            {'operation':'sell', 'unit-cost':15.00, 'quantity': 50},
        ]

        const secondTransactions = [
            {'operation':'buy', 'unit-cost':10.00, 'quantity': 10000},
            {'operation':'sell', 'unit-cost':20.00, 'quantity': 5000},
            {'operation':'sell', 'unit-cost':5.00, 'quantity': 5000},
        ]

        const firstResult = getTaxes(firstTransactions)
        const secondResult = getTaxes(secondTransactions)

        assert.deepStrictEqual(firstResult, [
            {'tax': 0.00},
            {'tax': 0.00},
            {'tax': 0.00},
        ])
        assert.deepStrictEqual(secondResult, [
            {'tax': 0.00},
            {'tax': 10000.00},
            {'tax': 0.00},
        ])
    })

    it('Case #3', () => {
        const transactions = [
            {'operation':'buy', 'unit-cost':10.00, 'quantity': 10000},
            {'operation':'sell', 'unit-cost':5.00, 'quantity': 5000},
            {'operation':'sell', 'unit-cost':20.00, 'quantity': 3000},
        ]

        const result = getTaxes(transactions)

        assert.deepStrictEqual(result, [
            {'tax': 0.00},
            {'tax': 0.00},
            {'tax': 1000.00}
        ])
    })

    it('Case #4', () => {
        const transactions = [
            {'operation':'buy', 'unit-cost':10.00, 'quantity': 10000},
            {'operation':'buy', 'unit-cost':25.00, 'quantity': 5000},
            {'operation':'sell', 'unit-cost':15.00, 'quantity': 10000},
        ]

        const result = getTaxes(transactions)

        assert.deepStrictEqual(result, [
            {'tax': 0.00},
            {'tax': 0.00},
            {'tax': 0.00},
        ])
    })

    it('Case #5', () => {
        const transactions = [
            {'operation':'buy', 'unit-cost':10.00, 'quantity': 10000},
            {'operation':'buy', 'unit-cost':25.00, 'quantity': 5000},
            {'operation':'sell', 'unit-cost':15.00, 'quantity': 10000},
            {'operation':'sell', 'unit-cost':25.00, 'quantity': 5000},
        ]

        const result = getTaxes(transactions)

        assert.deepStrictEqual(result, [
            {'tax': 0.00},
            {'tax': 0.00},
            {'tax': 0.00},
            {'tax': 10000.00},
        ])
    })

    it('Case #6', () => {
        const transactions = [
            {'operation':'buy', 'unit-cost':10.00, 'quantity': 10000},
            {'operation':'sell', 'unit-cost':2.00, 'quantity': 5000},
            {'operation':'sell', 'unit-cost':20.00, 'quantity': 2000},
            {'operation':'sell', 'unit-cost':20.00, 'quantity': 2000},
            {'operation':'sell', 'unit-cost':25.00, 'quantity': 1000},
        ]

        const result = getTaxes(transactions)

        assert.deepStrictEqual(result, [
            {'tax': 0.00},
            {'tax': 0.00},
            {'tax': 0.00},
            {'tax': 0.00},
            {'tax': 3000.00},
        ])
    })

    it('Case #7', () => {
        const transactions = [
            {'operation':'buy', 'unit-cost':10.00, 'quantity': 10000},
            {'operation':'sell', 'unit-cost':2.00, 'quantity': 5000},
            {'operation':'sell', 'unit-cost':20.00, 'quantity': 2000},
            {'operation':'sell', 'unit-cost':20.00, 'quantity': 2000},
            {'operation':'sell', 'unit-cost':25.00, 'quantity': 1000},
            {'operation':'buy', 'unit-cost':20.00, 'quantity': 10000},
            {'operation':'sell', 'unit-cost':15.00, 'quantity': 5000},
            {'operation':'sell', 'unit-cost':30.00, 'quantity': 4350},
            {'operation':'sell', 'unit-cost':30.00, 'quantity': 650},
        ]

        const result = getTaxes(transactions)

        assert.deepStrictEqual(result, [
            {'tax':0.00}, 
            {'tax':0.00}, 
            {'tax':0.00}, 
            {'tax':0.00}, 
            {'tax':3000.00},
            {'tax':0.00}, 
            {'tax':0.00}, 
            {'tax':3700.00}, 
            {'tax':0.00},
        ])
    })

    it('Case #8', () => {
        const transactions = [
            {'operation':'buy', 'unit-cost':10.00, 'quantity': 10000},
            {'operation':'sell', 'unit-cost':50.00, 'quantity': 10000},
            {'operation':'buy', 'unit-cost':20.00, 'quantity': 10000},
            {'operation':'sell', 'unit-cost':50.00, 'quantity': 10000},
        ]

        const result = getTaxes(transactions)

        assert.deepStrictEqual(result, [
            {'tax':0.00},
            {'tax':80000.00},
            {'tax':0.00},
            {'tax':60000.00},
        ])
    })
})