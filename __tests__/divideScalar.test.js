import { expect, test } from '@jest/globals'
import { divideScalar } from '../main.js'

test('Throw Error if matrix does not fit the Matrix interface', () => {
	expect(() => divideScalar({
		data: {
			0: 0,
			length: 0
		},
		rows: 1,
		columns: 1
	}, 0)).toThrow(Error)
	
	expect(() => divideScalar({
		data: ['0'],
		rows: 1,
		columns: 1
	}, 0)).toThrow(Error)
	
	expect(() => divideScalar({
		data: [0],
		rows: 1.1,
		columns: 1
	}, 0)).toThrow(Error)
	
	expect(() => divideScalar({
		data: [0],
		rows: 1,
		columns: 2
	}, 0)).toThrow(Error)
})

test('Throw ReferenceError if b is not defined', () => {
	expect(() => divideScalar({
		data: [0, 0],
		rows: 2,
		columns: 1
	})).toThrow(ReferenceError)
	
	expect(() => divideScalar({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, undefined)).toThrow(ReferenceError)
})

test('Throw TypeError if b is not a number', () => {
	expect(() => divideScalar({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, null)).toThrow(TypeError)
	
	expect(() => divideScalar({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, true)).toThrow(TypeError)
	
	expect(() => divideScalar({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, '0')).toThrow(TypeError)
	
	expect(() => divideScalar({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, Symbol())).toThrow(TypeError)
	
	expect(() => divideScalar({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, {})).toThrow(TypeError)
})

test('Throw TypeError if result is not an object', () => {
	expect(() => divideScalar({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, null)).toThrow(TypeError)
	
	expect(() => divideScalar({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, true)).toThrow(TypeError)
	
	expect(() => divideScalar({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, '')).toThrow(TypeError)
	
	expect(() => divideScalar({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, Symbol())).toThrow(TypeError)
	
	expect(() => divideScalar({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, 0)).toThrow(TypeError)
})

test('Divde Matrix a / scalar b', () => {
	expect(divideScalar({
		data: [1, 2, 3],
		rows: 1,
		columns: 3
	}, 0)).toStrictEqual([Infinity, Infinity, Infinity])
	
	expect(divideScalar({
		data: [5, 10, 15],
		rows: 3,
		columns: 1
	}, 5)).toStrictEqual([1, 2, 3])
})

test('Return and fill result', () => {
	const result = []
	
	expect(divideScalar({
		data: [5],
		rows: 1,
		columns: 1
	}, 1, result)).toBe(result)
	
	expect(result).toStrictEqual([5])
})