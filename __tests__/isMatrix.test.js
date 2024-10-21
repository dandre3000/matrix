import { expect, test } from '@jest/globals'
import { isMatrix } from '../main.js'

test('return false if matrix is not defined', () => {
	expect(isMatrix()).toBe(false)
	expect(isMatrix(undefined)).toBe(false)
})

test('return false if property rows, columns or length of argument matrix are not defined', () => {
	expect(isMatrix([0])).toBe(false)
	expect(isMatrix({
		0: 0,
		columns: 1,
		length: 1
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		rows: undefined,
		columns: 1,
		length: 1
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		rows: 1,
		length: 1
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		rows: 1,
		columns: undefined,
		length: 1
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		rows: 1,
		columns: 1
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		rows: 1,
		columns: 1,
		length: undefined
	})).toBe(false)
})

test('return false if property rows, columns or length of argument matrix are not numbers', () => {
	expect(isMatrix({
		0: 0,
		rows: null,
		columns: 1,
		length: 1
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		rows: true,
		columns: 1,
		length: 1
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		rows: '1',
		columns: 1,
		length: 1
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		rows: Symbol(),
		columns: 1,
		length: 1
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		rows: {},
		columns: 1,
		length: 1
	})).toBe(false)
	
	expect(isMatrix({
		0: 0,
		rows: 1,
		columns: null,
		length: 1
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		rows: 1,
		columns: true,
		length: 1
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		rows: 1,
		columns: '1',
		length: 1
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		rows: 1,
		columns: Symbol(),
		length: 1
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		rows: 1,
		columns: {},
		length: 1
	})).toBe(false)
	
	expect(isMatrix({
		0: 0,
		rows: 1,
		columns: 1,
		length: null
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		rows: 1,
		columns: 1,
		length: true
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		rows: 1,
		columns: 1,
		length: '1'
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		rows: 1,
		columns: 1,
		length: Symbol()
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		rows: 1,
		columns: 1,
		length: {}
	})).toBe(false)
})

test('return false if property rows or columns of argument matrix is not an integer', () => {
	expect(isMatrix({
		0: 0,
		rows: 1.1,
		columns: 1,
		length: {}
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		rows: 1,
		columns: 1.1,
		length: {}
	})).toBe(false)
})

test('return false if property length of argument matrix does not equal property rows times property columns', () => {
	expect(isMatrix({
		0: 0,
		0: 0,
		0: 0,
		0: 0,
		rows: 2,
		columns: 2,
		length: 3
	})).toBe(false)
})

test('return false if any enumerable property of argument matrix is not a number', () => {
	expect(isMatrix({
		0: undefined,
		rows: 1,
		columns: 1,
		length: 1
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		0: null,
		rows: 2,
		columns: 1,
		length: 2
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		0: 0,
		0: true,
		rows: 1,
		columns: 3,
		length: 3
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		0: 0,
		0: 0,
		0: '0',
		rows: 2,
		columns: 2,
		length: 4
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		0: 0,
		0: 0,
		0: 0,
		0: Symbol(),
		rows: 5,
		columns: 1,
		length: 5
	})).toBe(false)
	expect(isMatrix({
		0: 0,
		0: 0,
		0: 0,
		0: 0,
		0: 0,
		0: {},
		rows: 2,
		columns: 3,
		length: 6
	})).toBe(false)
})

test('return true if argument matrix fits the Matrix interface', () => {
	expect(isMatrix({
		0: 0,
		rows: 1,
		columns: 1,
		length: 1
	})).toBe(true)
})