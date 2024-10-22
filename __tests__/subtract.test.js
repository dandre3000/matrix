import { expect, test } from '@jest/globals'
import { subtract } from '../main.js'

test('Throw Error if matrix does not fit the Matrix interface', () => {
	expect(() => subtract({
		data: {
			0: 0,
			length: 0
		},
		rows: 1,
		columns: 1
	})).toThrow(Error)
	
	expect(() => subtract({
		data: ['0'],
		rows: 1,
		columns: 1
	})).toThrow(Error)
	
	expect(() => subtract({
		data: [0],
		rows: 1.1,
		columns: 1
	})).toThrow(Error)
	
	expect(() => subtract({
		data: [0],
		rows: 1,
		columns: 2
	})).toThrow(Error)
})

test('Throw RangeError if a.rows does not equal b.rows or a.columns does not equal b.columns', () => {
	expect(() => subtract({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, {
		data: [0],
		rows: 1,
		columns: 2
	})).toThrow(RangeError)
	
	expect(() => subtract({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, {
		data: [0],
		rows: 2,
		columns: 1
	})).toThrow(RangeError)
})

test('Add a to b', () => {
	expect(subtract({
		data: [1, 2, 3],
		rows: 1,
		columns: 3
	}, {
		data: [4, 5, 6],
		rows: 1,
		columns: 3
	})).toStrictEqual([-3, -3, -3])
	
	expect(subtract({
		data: [4, 5, 6],
		rows: 3,
		columns: 1
	}, {
		data: [1, 2, 3],
		rows: 3,
		columns: 1
	})).toStrictEqual([3, 3, 3])
})