import { expect, test } from '@jest/globals'
import { rowAdd } from '../main.js'

test('Throw Error if matrix does not fit the Matrix interface', () => {
	expect(() => rowAdd({
		data: {
			0: 0,
			length: 0
		},
		rows: 1,
		columns: 1
	}, 0, 1, 0)).toThrow(Error)
	
	expect(() => rowAdd({
		data: ['0'],
		rows: 1,
		columns: 1
	}, 0, 1, 0)).toThrow(Error)
	
	expect(() => rowAdd({
		data: [0],
		rows: 1.1,
		columns: 1
	}, 0, 1, 0)).toThrow(Error)
	
	expect(() => rowAdd({
		data: [0],
		rows: 1,
		columns: 2
	}, 0, 1, 0)).toThrow(Error)
})

test('Throw ReferenceError if a, b or n are not defined', () => {
	expect(() => rowAdd({
		data: [0],
		rows: 1,
		columns: 1
	})).toThrow(ReferenceError)
	
	expect(() => rowAdd({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, undefined, 1, 0)).toThrow(ReferenceError)
	
	expect(() => rowAdd({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0, undefined, 0)).toThrow(ReferenceError)
	
	expect(() => rowAdd({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0, 1, undefined)).toThrow(ReferenceError)
})

test('Throw TypeError if a, b or n are not numbers', () => {
	expect(() => rowAdd({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, null, 1, 0)).toThrow(TypeError)
	expect(() => rowAdd({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, true, 1, 0)).toThrow(TypeError)
	expect(() => rowAdd({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, '0', 1, 0)).toThrow(TypeError)
	expect(() => rowAdd({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, Symbol(), 1, 0)).toThrow(TypeError)
	expect(() => rowAdd({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, {}, 1, 0)).toThrow(TypeError)
	
	expect(() => rowAdd({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0, null, 0)).toThrow(TypeError)
	expect(() => rowAdd({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0, true, 0)).toThrow(TypeError)
	expect(() => rowAdd({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0, '0', 0)).toThrow(TypeError)
	expect(() => rowAdd({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0, Symbol(), 0)).toThrow(TypeError)
	expect(() => rowAdd({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0, {}, 0)).toThrow(TypeError)
	
	expect(() => rowAdd({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0, 1, null)).toThrow(TypeError)
	expect(() => rowAdd({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0, 1, true)).toThrow(TypeError)
	expect(() => rowAdd({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0, 1, '0')).toThrow(TypeError)
	expect(() => rowAdd({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0, 1, Symbol())).toThrow(TypeError)
	expect(() => rowAdd({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0, 1, {})).toThrow(TypeError)
})

test('Throw RangeError if a or b is not an integer', () => {
	expect(() => rowAdd({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0.1, 1, 0)).toThrow(RangeError)
	expect(() => rowAdd({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, 0.9, 1, 0)).toThrow(RangeError)
	
	expect(() => rowAdd({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0, 1.1, 0)).toThrow(RangeError)
	expect(() => rowAdd({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, 0, 1.9, 0)).toThrow(RangeError)
})

test('Throw TypeError if result is not an object', () => {
	expect(() => rowAdd({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, 0, 0, null)).toThrow(TypeError)
	
	expect(() => rowAdd({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, 0, 0, true)).toThrow(TypeError)
	
	expect(() => rowAdd({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, 0, 0, '')).toThrow(TypeError)
	
	expect(() => rowAdd({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, 0, 0, Symbol())).toThrow(TypeError)
	
	expect(() => rowAdd({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, 0, 0, 0)).toThrow(TypeError)
})

test('Add row a * scalar n to row b', () => {
	expect(rowAdd({
		data: [
			1, 2, 3,
			4, 5, 6,
			7, 8, 9
		],
		rows: 3,
		columns: 3
	}, 0, 1, 5)).toStrictEqual([1, 2, 3, 9, 15, 21, 7, 8, 9])
})

test('Return and fill result', () => {
	const result = []
	
	expect(rowAdd({
		data: [5],
		rows: 1,
		columns: 1
	}, 0, 0, 10, result)).toBe(result)
	
	expect(result).toStrictEqual([55])
})