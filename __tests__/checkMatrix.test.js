import { expect, test } from '@jest/globals'
import { checkMatrix } from '../main.js'

test('Throw ReferenceError if matrix is not defined', () => {
	expect(() => checkMatrix()).toThrow(ReferenceError)
	expect(() => checkMatrix(undefined)).toThrow(ReferenceError)
})

test('Throw ReferenceError if matrix.rows or matrix.columns are not defined', () => {
	expect(() => checkMatrix([0])).toThrow(ReferenceError)
	expect(() => checkMatrix({
		data: [0],
		columns: 1
	})).toThrow(ReferenceError)
	expect(() => checkMatrix({
		data: [0],
		rows: undefined,
		columns: 1
	})).toThrow(ReferenceError)
	expect(() => checkMatrix({
		data: [0],
		rows: 1
	})).toThrow(ReferenceError)
	expect(() => checkMatrix({
		data: [0],
		rows: 1,
		columns: undefined
	})).toThrow(ReferenceError)
})

test('Throw TypeError if matrix.rows or matrix.columns are not numbers', () => {
	expect(() => checkMatrix({
		data: [0],
		rows: null,
		columns: 1
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		data: [0],
		rows: true,
		columns: 1
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		data: [0],
		rows: '1',
		columns: 1
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		data: [0],
		rows: Symbol(),
		columns: 1
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		data: [0],
		rows: {},
		columns: 1
	})).toThrow(TypeError)
	
	expect(() => checkMatrix({
		data: [0],
		rows: 1,
		columns: null
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		data: [0],
		rows: 1,
		columns: true
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		data: [0],
		rows: 1,
		columns: '1'
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		data: [0],
		rows: 1,
		columns: Symbol()
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		data: [0],
		rows: 1,
		columns: {}
	})).toThrow(TypeError)
})

test('Throw RangeError if matrix.rows or matrix.columns are not integers', () => {
	expect(() => checkMatrix({
		data: [0],
		rows: 1.1,
		columns: 1
	})).toThrow(RangeError)
	expect(() => checkMatrix({
		data: [0],
		rows: 1.9,
		columns: 1
	})).toThrow(RangeError)
	
	expect(() => checkMatrix({
		data: [0],
		rows: 1,
		columns: 1.1
	})).toThrow(RangeError)
	expect(() => checkMatrix({
		data: [0],
		rows: 1,
		columns: 1.9
	})).toThrow(RangeError)
})

test('Throw ReferenceError if matrix.data.length is not defined', () => {
	expect(() => checkMatrix({
		data: {
			0: 0
		},
		rows: 1,
		columns: 1
	})).toThrow(ReferenceError)
	
	expect(() => checkMatrix({
		data: {
			0: 0,
			length: undefined
		},
		rows: 1,
		columns: 1
	})).toThrow(ReferenceError)
})

test('Throw RangeError if matrix.data.length does not equal matrix.rows * matrix.columns', () => {
	expect(() => checkMatrix({
		data: {
			0: 0,
			1: 0,
			2: 0,
			3: 0,
			length: 3
		},
		rows: 2,
		columns: 2
	})).toThrow(RangeError)
	
	expect(() => checkMatrix({
		data: {
			0: 0,
			1: 0,
			2: 0,
			3: 0,
			length: 5
		},
		rows: 2,
		columns: 2
	})).toThrow(RangeError)
})

test('Throw TypeError if any number indexed property of matrix.data is not a number', () => {
	expect(() => checkMatrix({
		data: [undefined],
		rows: 1,
		columns: 1
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		data: [0, null],
		rows: 2,
		columns: 1
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		data: [0, 0, true],
		rows: 1,
		columns: 3
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		data: [0, 0, 0, '0'],
		rows: 2,
		columns: 2
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		data: [0, 0, 0, 0, Symbol()],
		rows: 5,
		columns: 1
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		data: [0, 0, 0, 0, 0, {}],
		rows: 2,
		columns: 3
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		data: new Array(6),
		rows: 2,
		columns: 3
	})).toThrow(TypeError)
})

test('return matrix if it fits the Matrix interface', () => {
	const matrix = {
		data: [0],
		rows: 1,
		columns: 1
	}
	
	expect(checkMatrix(matrix)).toBe(matrix)
})