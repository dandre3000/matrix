import { expect, test } from '@jest/globals'
import { transpose } from '../main.js'

test('Throw Error if matrix does not fit the Matrix interface', () => {
	expect(() => transpose({
		data: {
			0: 0,
			length: 0
		},
		rows: 1,
		columns: 1
	})).toThrow(Error)
	
	expect(() => transpose({
		data: ['0'],
		rows: 1,
		columns: 1
	})).toThrow(Error)
	
	expect(() => transpose({
		data: [0],
		rows: 1.1,
		columns: 1
	})).toThrow(Error)
	
	expect(() => transpose({
		data: [0],
		rows: 1,
		columns: 2
	})).toThrow(Error)
})

test('Throw TypeError if result is not an object', () => {
	expect(() => transpose({
		data: [0],
		rows: 1,
		columns: 1
	}, null)).toThrow(TypeError)
	
	expect(() => transpose({
		data: [0],
		rows: 1,
		columns: 1
	}, true)).toThrow(TypeError)
	
	expect(() => transpose({
		data: [0],
		rows: 1,
		columns: 1
	}, '')).toThrow(TypeError)
	
	expect(() => transpose({
		data: [0],
		rows: 1,
		columns: 1
	}, Symbol())).toThrow(TypeError)
	
	expect(() => transpose({
		data: [0],
		rows: 1,
		columns: 1
	}, 0)).toThrow(TypeError)
})

test('Transpose matrix', () => {
	expect(transpose({
		data: [
			1, 2, 3,
			4, 5, 6,
			7, 8, 9
		],
		rows: 3,
		columns: 3
	})).toStrictEqual([1, 4, 7, 2, 5, 8, 3, 6, 9])
})

test('Return and fill result', () => {
	const result = []
	
	expect(transpose({
		data: [5],
		rows: 1,
		columns: 1
	}, result)).toBe(result)
	
	expect(result).toStrictEqual([5])
})