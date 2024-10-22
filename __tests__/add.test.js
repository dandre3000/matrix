import { expect, test } from '@jest/globals'
import { add } from '../main.js'

test('Throw Error if a or b does not fit the Matrix interface', () => {
	expect(() => add({
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
	
	expect(() => add({
		data: ['0'],
		rows: 1,
		columns: 1
	}, {
		data: [0],
		rows: 1,
		columns: 1
	})).toThrow(Error)
	
	expect(() => add({
		data: [0],
		rows: 1,
		columns: 1
	}, {
		data: [0],
		rows: 1.1,
		columns: 1
	})).toThrow(Error)
	
	expect(() => add({
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

test('Throw TypeError if result is not an object', () => {
	expect(() => add({
		data: [0],
		rows: 1,
		columns: 1
	}, {
		data: [0],
		rows: 1,
		columns: 1
	}, null)).toThrow(TypeError)
	
	expect(() => add({
		data: [0],
		rows: 1,
		columns: 1
	}, {
		data: [0],
		rows: 1,
		columns: 1
	}, true)).toThrow(TypeError)
	
	expect(() => add({
		data: [0],
		rows: 1,
		columns: 1
	}, {
		data: [0],
		rows: 1,
		columns: 1
	}, '')).toThrow(TypeError)
	
	expect(() => add({
		data: [0],
		rows: 1,
		columns: 1
	}, {
		data: [0],
		rows: 1,
		columns: 1
	}, Symbol())).toThrow(TypeError)
	
	expect(() => add({
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

test('Return and fill result', () => {
	const result = []
	
	expect(add({
		data: [5],
		rows: 1,
		columns: 1
	}, {
		data: [5],
		rows: 1,
		columns: 1
	}, result)).toBe(result)
	
	expect(result).toStrictEqual([10])
})