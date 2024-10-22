import { expect, test } from '@jest/globals'
import { multiplyMatrix } from '../main.js'

test('Throw Error if a or b does not fit the Matrix interface', () => {
	expect(() => multiplyMatrix({
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
	
	expect(() => multiplyMatrix({
		data: ['0'],
		rows: 1,
		columns: 1
	}, {
		data: [0],
		rows: 1,
		columns: 1
	})).toThrow(Error)
	
	expect(() => multiplyMatrix({
		data: [0],
		rows: 1,
		columns: 1
	}, {
		data: [0],
		rows: 1.1,
		columns: 1
	})).toThrow(Error)
	
	expect(() => multiplyMatrix({
		data: [0],
		rows: 1,
		columns: 2
	}, {
		data: [0],
		rows: 1,
		columns: 1
	})).toThrow(Error)
})

test('Throw RangeError if a.columns does not equal b.rows', () => {
	expect(() => multiplyMatrix({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, {
		data: [0, 0],
		rows: 1,
		columns: 2
	})).toThrow(RangeError)
	
	expect(() => multiplyMatrix({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, {
		data: [0, 0],
		rows: 2,
		columns: 1
	})).toThrow(RangeError)
})

test('Throw TypeError if result is not an object', () => {
	expect(() => multiplyMatrix({
		data: [0],
		rows: 1,
		columns: 1
	}, {
		data: [0],
		rows: 1,
		columns: 1
	}, null)).toThrow(TypeError)
	
	expect(() => multiplyMatrix({
		data: [0],
		rows: 1,
		columns: 1
	}, {
		data: [0],
		rows: 1,
		columns: 1
	}, true)).toThrow(TypeError)
	
	expect(() => multiplyMatrix({
		data: [0],
		rows: 1,
		columns: 1
	}, {
		data: [0],
		rows: 1,
		columns: 1
	}, '')).toThrow(TypeError)
	
	expect(() => multiplyMatrix({
		data: [0],
		rows: 1,
		columns: 1
	}, {
		data: [0],
		rows: 1,
		columns: 1
	}, Symbol())).toThrow(TypeError)
	
	expect(() => multiplyMatrix({
		data: [0],
		rows: 1,
		columns: 1
	}, {
		data: [0],
		rows: 1,
		columns: 1
	}, 0)).toThrow(TypeError)
})

test('Multiply a * b', () => {
	expect(multiplyMatrix({
		data: [1, 2, 3],
		rows: 3,
		columns: 1
	}, {
		data: [4, 5, 6],
		rows: 1,
		columns: 3
	})).toStrictEqual([
		4, 5, 6,
		8, 10, 12,
		12, 15, 18
	])
	
	expect(multiplyMatrix({
		data: [4, 5, 6],
		rows: 1,
		columns: 3
	}, {
		data: [1, 2, 3],
		rows: 3,
		columns: 1
	})).toStrictEqual([32])
})

test('Return and fill result', () => {
	const result = []
	
	expect(multiplyMatrix({
		data: [5],
		rows: 1,
		columns: 1
	}, {
		data: [5],
		rows: 1,
		columns: 1
	}, result)).toBe(result)
	
	expect(result).toStrictEqual([25])
})