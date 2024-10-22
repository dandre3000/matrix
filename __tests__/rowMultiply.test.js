import { expect, test } from '@jest/globals'
import { rowMultiply } from '../main.js'

test('Throw Error if matrix does not fit the Matrix interface', () => {
	expect(() => rowMultiply({
		data: {
			0: 0,
			length: 0
		},
		rows: 1,
		columns: 1
	}, 0, 1, 0)).toThrow(Error)
	
	expect(() => rowMultiply({
		data: ['0'],
		rows: 1,
		columns: 1
	}, 0, 1, 0)).toThrow(Error)
	
	expect(() => rowMultiply({
		data: [0],
		rows: 1.1,
		columns: 1
	}, 0, 1, 0)).toThrow(Error)
	
	expect(() => rowMultiply({
		data: [0],
		rows: 1,
		columns: 2
	}, 0, 1, 0)).toThrow(Error)
})

test('Throw ReferenceError if a or n is not defined', () => {
	expect(() => rowMultiply({
		data: [0],
		rows: 1,
		columns: 1
	})).toThrow(ReferenceError)
	
	expect(() => rowMultiply({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, undefined, 1)).toThrow(ReferenceError)
	
	expect(() => rowMultiply({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0)).toThrow(ReferenceError)
	
	expect(() => rowMultiply({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0, undefined)).toThrow(ReferenceError)
})

test('Throw TypeError if a or n is not a number', () => {
	expect(() => rowMultiply({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, null, 1)).toThrow(TypeError)
	expect(() => rowMultiply({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, true, 1)).toThrow(TypeError)
	expect(() => rowMultiply({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, '0', 1)).toThrow(TypeError)
	expect(() => rowMultiply({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, Symbol(), 1)).toThrow(TypeError)
	expect(() => rowMultiply({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, {}, 1)).toThrow(TypeError)
	
	expect(() => rowMultiply({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0, null)).toThrow(TypeError)
	expect(() => rowMultiply({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0, true)).toThrow(TypeError)
	expect(() => rowMultiply({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0, '0')).toThrow(TypeError)
	expect(() => rowMultiply({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0, Symbol())).toThrow(TypeError)
	expect(() => rowMultiply({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0, {})).toThrow(TypeError)
})

test('Throw RangeError if a is not an integer', () => {
	expect(() => rowMultiply({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0.1, 1)).toThrow(RangeError)
	expect(() => rowMultiply({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, 0.9, 1)).toThrow(RangeError)
})

test('Throw TypeError if result is not an object', () => {
	expect(() => rowMultiply({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, 0, null)).toThrow(TypeError)
	
	expect(() => rowMultiply({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, 0, true)).toThrow(TypeError)
	
	expect(() => rowMultiply({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, 0, '')).toThrow(TypeError)
	
	expect(() => rowMultiply({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, 0, Symbol())).toThrow(TypeError)
	
	expect(() => rowMultiply({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, 0, 0)).toThrow(TypeError)
})

test('Multiply row a * scalar n', () => {
	expect(rowMultiply({
		data: [
			1, 2, 3,
			4, 5, 6,
			7, 8, 9
		],
		rows: 3,
		columns: 3
	}, 1, 8)).toStrictEqual([1, 2, 3, 32, 40, 48, 7, 8, 9])
})

test('Return and fill result', () => {
	const result = []
	
	expect(rowMultiply({
		data: [5],
		rows: 1,
		columns: 1
	}, 0, 9, result)).toBe(result)
	
	expect(result).toStrictEqual([45])
})