import { expect, test } from '@jest/globals'
import { isMatrix } from '../main.js'

test('return false if matrix is not defined', () => {
	expect(isMatrix()).toBe(false)
	expect(isMatrix(undefined)).toBe(false)
})

test('return false if matrix.rows or matrix.columns are not defined', () => {
	expect(isMatrix([0])).toBe(false)
	expect(isMatrix({
		data: [0],
		columns: 1
	})).toBe(false)
	expect(isMatrix({
		data: [0],
		rows: undefined,
		columns: 1
	})).toBe(false)
	expect(isMatrix({
		data: [0],
		rows: 1
	})).toBe(false)
	expect(isMatrix({
		data: [0],
		rows: 1,
		columns: undefined
	})).toBe(false)
})

test('return false if matrix.rows or matrix.columns are not numbers', () => {
	expect(isMatrix({
		data: [0],
		rows: null,
		columns: 1
	})).toBe(false)
	expect(isMatrix({
		data: [0],
		rows: true,
		columns: 1
	})).toBe(false)
	expect(isMatrix({
		data: [0],
		rows: '1',
		columns: 1
	})).toBe(false)
	expect(isMatrix({
		data: [0],
		rows: Symbol(),
		columns: 1
	})).toBe(false)
	expect(isMatrix({
		data: [0],
		rows: {},
		columns: 1
	})).toBe(false)
	
	expect(isMatrix({
		data: [0],
		rows: 1,
		columns: null
	})).toBe(false)
	expect(isMatrix({
		data: [0],
		rows: 1,
		columns: true
	})).toBe(false)
	expect(isMatrix({
		data: [0],
		rows: 1,
		columns: '1'
	})).toBe(false)
	expect(isMatrix({
		data: [0],
		rows: 1,
		columns: Symbol()
	})).toBe(false)
	expect(isMatrix({
		data: [0],
		rows: 1,
		columns: {}
	})).toBe(false)
})

test('return false if matrix.rows or matrix.columns are not integers', () => {
	expect(isMatrix({
		data: [0],
		rows: 1.1,
		columns: 1
	})).toBe(false)
	expect(isMatrix({
		data: [0],
		rows: 1.9,
		columns: 1
	})).toBe(false)
	
	expect(isMatrix({
		data: [0],
		rows: 1,
		columns: 1.1
	})).toBe(false)
	expect(isMatrix({
		data: [0],
		rows: 1,
		columns: 1.9
	})).toBe(false)
})

test('return false if matrix.data.length is not defined', () => {
	expect(isMatrix({
		data: {
			0: 0
		},
		rows: 1,
		columns: 1
	})).toBe(false)
	
	expect(isMatrix({
		data: {
			0: 0,
			length: undefined
		},
		rows: 1,
		columns: 1
	})).toBe(false)
})

test('return false if matrix.data.length does not equal matrix.rows * matrix.columns', () => {
	expect(isMatrix({
		data: {
			0: 0,
			1: 0,
			2: 0,
			3: 0,
			length: 3
		},
		rows: 2,
		columns: 2
	})).toBe(false)
	
	expect(isMatrix({
		data: {
			0: 0,
			1: 0,
			2: 0,
			3: 0,
			length: 5
		},
		rows: 2,
		columns: 2
	})).toBe(false)
})

test('return false if any number indexed property of matrix.data is not a number', () => {
	expect(isMatrix({
		data: [undefined],
		rows: 1,
		columns: 1
	})).toBe(false)
	expect(isMatrix({
		data: [0, null],
		rows: 2,
		columns: 1
	})).toBe(false)
	expect(isMatrix({
		data: [0, 0, true],
		rows: 1,
		columns: 3
	})).toBe(false)
	expect(isMatrix({
		data: [0, 0, 0, '0'],
		rows: 2,
		columns: 2
	})).toBe(false)
	expect(isMatrix({
		data: [0, 0, 0, 0, Symbol()],
		rows: 5,
		columns: 1
	})).toBe(false)
	expect(isMatrix({
		data: [0, 0, 0, 0, 0, {}],
		rows: 2,
		columns: 3
	})).toBe(false)
	expect(isMatrix({
		data: new Array(6),
		rows: 2,
		columns: 3
	})).toBe(false)
})

test('return true if argument matrix fits the Matrix interface', () => {
	expect(isMatrix({
		data: [0],
		rows: 1,
		columns: 1
	})).toBe(true)
})