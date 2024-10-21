import { expect, test } from '@jest/globals'
import { newMatrix } from '../main.js'

test('throw a ReferenceError if arguments rows or columns are not defined', () => {
	expect(() => newMatrix()).toThrow(ReferenceError)
	expect(() => newMatrix(undefined, 1)).toThrow(ReferenceError)
	expect(() => newMatrix(1)).toThrow(ReferenceError)
	expect(() => newMatrix(1, undefined)).toThrow(ReferenceError)
})

test('throw a TypeError if rows or columns are not numbers', () => {
	expect(() => newMatrix(null, 1)).toThrow(TypeError)
	expect(() => newMatrix(true, 1)).toThrow(TypeError)
	expect(() => newMatrix('1', 1)).toThrow(TypeError)
	expect(() => newMatrix(Symbol(), 1)).toThrow(TypeError)
	expect(() => newMatrix({}, 1)).toThrow(TypeError)
	
	expect(() => newMatrix(1, null)).toThrow(TypeError)
	expect(() => newMatrix(1, true)).toThrow(TypeError)
	expect(() => newMatrix(1, '1')).toThrow(TypeError)
	expect(() => newMatrix(1, Symbol())).toThrow(TypeError)
	expect(() => newMatrix(1, {})).toThrow(TypeError)
})

test('throw a RangeError if arguments rows or columns are not integers greater than or equal to 1', () => {
	expect(() => newMatrix(0, 1)).toThrow(RangeError)
	expect(() => newMatrix(1, 0)).toThrow(RangeError)
	expect(() => newMatrix(1.1, 1)).toThrow(RangeError)
	expect(() => newMatrix(1, 1.1)).toThrow(RangeError)
})

test('throw a TypeError if optional argument data is not an object or array', () => {
	expect(() => newMatrix(1, 1, null)).toThrow(TypeError)
	expect(() => newMatrix(1, 1, true)).toThrow(TypeError)
	expect(() => newMatrix(1, 1, '')).toThrow(TypeError)
	expect(() => newMatrix(1, 1, Symbol())).toThrow(TypeError)
	expect(() => newMatrix(1, 1, 0)).toThrow(TypeError)
})

test('throw a ReferenceError if property length of argument data is not defined', () => {
	expect(() => newMatrix(1, 1, {})).toThrow(ReferenceError)
	expect(() => newMatrix(1, 1, { length: undefined })).toThrow(ReferenceError)
})

test('throw a TypeError if property length of argument data is not a number', () => {
	expect(() => newMatrix(1, 1, { length: null })).toThrow(TypeError)
	expect(() => newMatrix(1, 1, { length: true })).toThrow(TypeError)
	expect(() => newMatrix(1, 1, { length: '0' })).toThrow(TypeError)
	expect(() => newMatrix(1, 1, { length: Symbol() })).toThrow(TypeError)
	expect(() => newMatrix(1, 1, { length: {} })).toThrow(TypeError)
})

test('throw a TypeError if any enumerable property of argument data is not a number', () => {
	expect(() => newMatrix(1, 1, [undefined])).toThrow(TypeError)
	expect(() => newMatrix(1, 1, [null])).toThrow(TypeError)
	expect(() => newMatrix(1, 1, [0, true])).toThrow(TypeError)
	expect(() => newMatrix(1, 1, [0, 0, '0'])).toThrow(TypeError)
	expect(() => newMatrix(1, 1, [0, 0, 0, Symbol()])).toThrow(TypeError)
	expect(() => newMatrix(1, 1, [0, 0, 0, {}])).toThrow(TypeError)
})

test('throw a TypeError if optional argument buffer is not an ArrayBuffer', () => {
	expect(() => newMatrix(1, 1, undefined, null)).toThrow(TypeError)
	expect(() => newMatrix(1, 1, undefined, true)).toThrow(TypeError)
	expect(() => newMatrix(1, 1, undefined, '')).toThrow(TypeError)
	expect(() => newMatrix(1, 1, undefined, Symbol())).toThrow(TypeError)
	expect(() => newMatrix(1, 1, undefined, 0)).toThrow(TypeError)
	expect(() => newMatrix(1, 1, undefined, {})).toThrow(TypeError)
})

test('throw a RangeError if property byteLength of argument buffer is less than the byteLength required to store the whole matrix (rows * columns * 8)', () => {
	expect(() => newMatrix(1, 1, undefined, new ArrayBuffer(7))).toThrow(RangeError)
})

test('throw a TypeError if optional argument byteOffset is not a number', () => {
	expect(() => newMatrix(1, 1, undefined, new ArrayBuffer(8), null)).toThrow(TypeError)
	expect(() => newMatrix(1, 1, undefined, new ArrayBuffer(8), true)).toThrow(TypeError)
	expect(() => newMatrix(1, 1, undefined, new ArrayBuffer(8), '0')).toThrow(TypeError)
	expect(() => newMatrix(1, 1, undefined, new ArrayBuffer(8), Symbol())).toThrow(TypeError)
	expect(() => newMatrix(1, 1, undefined, new ArrayBuffer(8), {})).toThrow(TypeError)
})

test('throw a RangeError if property byteLength of argument buffer minus argument byteOffset is less than the byteLength required to store the whole matrix (rows * columns * 8)', () => {
	expect(() => newMatrix(1, 1, undefined, new ArrayBuffer(8), 1)).toThrow(RangeError)
})

test('return an object that fits the Matrix interface', () => {
	const testMatrix = matrix => {
		const { columns, length, rows } = matrix
		
		// is rows an integer greater than or equal to 1
		expect(rows).toBeGreaterThanOrEqual(1)
		expect(rows % 1).toEqual(0)
		
		// is rows an integer greater than or equal to 1
		expect(columns).toBeGreaterThanOrEqual(1)
		expect(columns % 1).toEqual(0)
		
		// is matrix ArrayLike<number>
		
		expect(matrix).toHaveLength(rows * columns)
		
		// elements
		for (let i = 0; i < length; i++) {
			expect(typeof matrix[i]).toEqual('number')
		}
	}
	
	testMatrix(newMatrix(1, 1, [0]))
	testMatrix(newMatrix(1, 2, [0, 1]))
	testMatrix(newMatrix(2, 1, [0, 1]))
	testMatrix(newMatrix(2, 2, [0, 1, 2, 3]))
	testMatrix(newMatrix(2, 3, [0, 1, 2, 3, 4, 5]))
	testMatrix(newMatrix(3, 2, [0, 1, 2, 3, 4, 5]))
	testMatrix(newMatrix(3, 3, [0, 1, 2, 3, 4, 5, 6, 7, 8]))
})