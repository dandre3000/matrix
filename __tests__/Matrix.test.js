import { expect, test } from 'vitest'
import { Matrix } from '../src/Matrix.ts'

test('Throw Error if Matrix is called without new operator', () => {
	expect(() => Matrix(1, 1)).toThrow(Error)
})

test('Throw Error if rows or columns are not integers greater than or equal to 1', () => {
	expect(() => new Matrix()).toThrow(Error)
	expect(() => new Matrix(undefined, 1)).toThrow(Error)
	expect(() => new Matrix(1)).toThrow(Error)
	expect(() => new Matrix(1, undefined)).toThrow(Error)
	
	expect(() => new Matrix('1', '1')).toThrow(Error)
	
	expect(() => new Matrix(0, 1)).toThrow(Error)
	expect(() => new Matrix(1, 0)).toThrow(Error)
	expect(() => new Matrix(1.1, 1)).toThrow(Error)
	expect(() => new Matrix(1, 1.1)).toThrow(Error)
})

test('Throw Error if data is defined but not an array like object containing only numbers', () => {
	expect(() => new Matrix(1, 1, {
		length: null
	})).toThrow(Error)
	expect(() => new Matrix(1, 1, {
		0: '0',
		length: 1
	})).toThrow(Error)
})

test('Throw Error if options is defined but not an object', () => {
	expect(() => new Matrix(1, 1, [0], null)).toThrow(Error)
})

test('Throw Error if options.buffer is defined but not an ArrayBuffer instance with a fixed byteLength greater than or equal to data.length * 8', () => {
	expect(() => new Matrix(1, 1, [0], { buffer: new ArrayBuffer(7) })).toThrow(Error)
})

test('Throw Error if options.byteOffset is not a multiple of 8, at least 0, and grerater than buffer.byteLength - data.length * 8', () => {
	expect(() => new Matrix(1, 1, [0], { byteOffset: -1 })).toThrow(Error)
	expect(() => new Matrix(1, 1, [0], { buffer: new ArrayBuffer(16), byteOffset: 0.1 })).toThrow(Error)
	expect(() => new Matrix(1, 1, [0], { buffer: new ArrayBuffer(16), byteOffset: 16 })).toThrow(Error)
})

test('return an object that fits IMatrix', () => {
	const a = new Matrix(1, 1, [0])
	
	expect(a.rows).toEqual(1)
	expect(a.columns).toEqual(1)
	expect(a.data).toStrictEqual(new Float64Array(1))
})

test('options.buffer and options.byteOffset are used to create matrix.data', () => {
	const ab = new ArrayBuffer(16)
	const a = new Matrix(1, 1, [0], { buffer: ab, byteOffset: 8 })
	
	expect(a.rows).toEqual(1)
	expect(a.columns).toEqual(1)
	expect(a.data.byteOffset).toEqual(8)
	expect(a.data).toStrictEqual(new Float64Array(1))
	expect(a.data.buffer).toStrictEqual(ab)
})