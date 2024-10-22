import { expect, test } from '@jest/globals'
import { subtract } from '../main.js'

test('Throw Error if a or b does not fit the Matrix interface', () => {
	expect(() => subtract({
		data: [0],
		rows: 1,
		columns: 1
	}, {
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
	}, {
		data: [0],
		rows: 1,
		columns: 1
	})).toThrow(Error)
	
	expect(() => subtract({
		data: [0],
		rows: 1,
		columns: 1
	}, {
		data: [0],
		rows: 1.1,
		columns: 1
	})).toThrow(Error)
	
	expect(() => subtract({
		data: [0],
		rows: 1,
		columns: 2
	}, {
		data: [0],
		rows: 1,
		columns: 1
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

test('Throw TypeError if result is not an object', () => {
	expect(() => subtract({
		data: [0],
		rows: 1,
		columns: 1
	}, {
		data: [0],
		rows: 1,
		columns: 1
	}, null)).toThrow(TypeError)
	
	expect(() => subtract({
		data: [0],
		rows: 1,
		columns: 1
	}, {
		data: [0],
		rows: 1,
		columns: 1
	}, true)).toThrow(TypeError)
	
	expect(() => subtract({
		data: [0],
		rows: 1,
		columns: 1
	}, {
		data: [0],
		rows: 1,
		columns: 1
	}, '')).toThrow(TypeError)
	
	expect(() => subtract({
		data: [0],
		rows: 1,
		columns: 1
	}, {
		data: [0],
		rows: 1,
		columns: 1
	}, Symbol())).toThrow(TypeError)
	
	expect(() => subtract({
		data: [0],
		rows: 1,
		columns: 1
	}, {
		data: [0],
		rows: 1,
		columns: 1
	}, 0)).toThrow(TypeError)
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

test('Return and fill difference', () => {
	const difference = []
	
	expect(subtract({
		data: [5],
		rows: 1,
		columns: 1
	}, {
		data: [5],
		rows: 1,
		columns: 1
	}, difference)).toBe(difference)
	
	expect(difference).toStrictEqual([0])
})