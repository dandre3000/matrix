import { expect, test } from '@jest/globals'
import { checkMatrix } from '../main.js'

test('throws a ReferenceError if matrix is not defined', () => {
	expect(() => checkMatrix()).toThrow(ReferenceError)
	expect(() => checkMatrix(undefined)).toThrow(ReferenceError)
})

test('throws a ReferenceError if property rows, columns or length of argument matrix are not defined', () => {
	expect(() => checkMatrix([0])).toThrow(ReferenceError)
	expect(() => checkMatrix({
		0: 0,
		columns: 1,
		length: 1
	})).toThrow(ReferenceError)
	expect(() => checkMatrix({
		0: 0,
		rows: undefined,
		columns: 1,
		length: 1
	})).toThrow(ReferenceError)
	expect(() => checkMatrix({
		0: 0,
		rows: 1,
		length: 1
	})).toThrow(ReferenceError)
	expect(() => checkMatrix({
		0: 0,
		rows: 1,
		columns: undefined,
		length: 1
	})).toThrow(ReferenceError)
	expect(() => checkMatrix({
		0: 0,
		rows: 1,
		columns: 1
	})).toThrow(ReferenceError)
	expect(() => checkMatrix({
		0: 0,
		rows: 1,
		columns: 1,
		length: undefined
	})).toThrow(ReferenceError)
})

test('throws a TypeError if property rows, columns or length of argument matrix are not numbers', () => {
	expect(() => checkMatrix({
		0: 0,
		rows: null,
		columns: 1,
		length: 1
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		0: 0,
		rows: true,
		columns: 1,
		length: 1
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		0: 0,
		rows: '1',
		columns: 1,
		length: 1
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		0: 0,
		rows: Symbol(),
		columns: 1,
		length: 1
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		0: 0,
		rows: {},
		columns: 1,
		length: 1
	})).toThrow(TypeError)
	
	expect(() => checkMatrix({
		0: 0,
		rows: 1,
		columns: null,
		length: 1
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		0: 0,
		rows: 1,
		columns: true,
		length: 1
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		0: 0,
		rows: 1,
		columns: '1',
		length: 1
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		0: 0,
		rows: 1,
		columns: Symbol(),
		length: 1
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		0: 0,
		rows: 1,
		columns: {},
		length: 1
	})).toThrow(TypeError)
	
	expect(() => checkMatrix({
		0: 0,
		rows: 1,
		columns: 1,
		length: null
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		0: 0,
		rows: 1,
		columns: 1,
		length: true
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		0: 0,
		rows: 1,
		columns: 1,
		length: '1'
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		0: 0,
		rows: 1,
		columns: 1,
		length: Symbol()
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		0: 0,
		rows: 1,
		columns: 1,
		length: {}
	})).toThrow(TypeError)
})

test('throws a RangeError if property rows or columns of argument matrix is not an integer', () => {
	expect(() => checkMatrix({
		0: 0,
		rows: 1.1,
		columns: 1,
		length: {}
	})).toThrow(RangeError)
	expect(() => checkMatrix({
		0: 0,
		rows: 1,
		columns: 1.1,
		length: {}
	})).toThrow(RangeError)
})

test('throws a RangeError if property length of argument matrix does not equal property rows times property columns', () => {
	expect(() => checkMatrix({
		0: 0,
		0: 0,
		0: 0,
		0: 0,
		rows: 2,
		columns: 2,
		length: 3
	})).toThrow(RangeError)
})

test('throws a TypeError if any enumerable property of argument matrix is not a number', () => {
	expect(() => checkMatrix({
		0: undefined,
		rows: 1,
		columns: 1,
		length: 1
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		0: 0,
		0: null,
		rows: 2,
		columns: 1,
		length: 2
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		0: 0,
		0: 0,
		0: true,
		rows: 1,
		columns: 3,
		length: 3
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		0: 0,
		0: 0,
		0: 0,
		0: '0',
		rows: 2,
		columns: 2,
		length: 4
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		0: 0,
		0: 0,
		0: 0,
		0: 0,
		0: Symbol(),
		rows: 5,
		columns: 1,
		length: 5
	})).toThrow(TypeError)
	expect(() => checkMatrix({
		0: 0,
		0: 0,
		0: 0,
		0: 0,
		0: 0,
		0: {},
		rows: 2,
		columns: 3,
		length: 6
	})).toThrow(TypeError)
})