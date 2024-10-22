import { expect, test } from '@jest/globals'
import { add } from '../main.js'

test('Throw Error if matrix does not fit the Matrix interface', () => {
	expect(() => add({
		data: {
			0: 0,
			length: 0
		},
		rows: 1,
		columns: 1
	})).toThrow(Error)
	
	expect(() => add({
		data: ['0'],
		rows: 1,
		columns: 1
	})).toThrow(Error)
	
	expect(() => add({
		data: [0],
		rows: 1.1,
		columns: 1
	})).toThrow(Error)
	
	expect(() => add({
		data: [0],
		rows: 1,
		columns: 2
	})).toThrow(Error)
})

test('Throw RangeError if a.rows does not equal b.rows or a.columns does not equal b.columns', () => {
	expect(() => add({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, {
		data: [0],
		rows: 1,
		columns: 2
	})).toThrow(RangeError)
	
	expect(() => add({
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
	expect(add({
		data: [1, 2, 3],
		rows: 1,
		columns: 3
	}, {
		data: [4, 5, 6],
		rows: 1,
		columns: 3
	})).toStrictEqual([5, 7, 9])
	
	expect(add({
		data: [4, 5, 6],
		rows: 3,
		columns: 1
	}, {
		data: [1, 2, 3],
		rows: 3,
		columns: 1
	})).toStrictEqual([5, 7, 9])
})