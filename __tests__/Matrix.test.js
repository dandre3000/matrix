import { expect, test } from 'vitest'
import { Matrix } from '../src/Matrix.js'

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

test('Throw Error if data is not a number, an Array of numbers of any length or a Float64Array where data.length must === rows * columns and data.buffer.resizable must === false', () => {
	expect(() => new Matrix(1, 1, '0')).toThrow(Error)
	expect(() => new Matrix(1, 1, ['0'])).toThrow(Error)
	expect(() => new Matrix(1, 1, new FLoat64Array([0, 0]))).toThrow(Error)
	
	const buffer = new ArrayBuffer(8, { maxByteLength: 16 })
	expect(() => new Matrix(1, 1, new FLoat64Array(buffer, 0, 1))).toThrow(Error)
})

test('return an object that fits IMatrix', () => {
	const a = new Matrix(1, 1)
	
	expect(a.rows).toEqual(1)
	expect(a.columns).toEqual(1)
	expect(a.data).toStrictEqual(new Float64Array(1))
})

test('fill matrix with data if its a number or Array', () => {
	const array = new Float64Array([9, 9, 9, 9, 9, 9, 9, 9, 9])
	const a = new Matrix(3, 3, 9)
	const b = new Matrix(3, 3, [9, 9, 9, 9, 9, 9, 9, 9, 9])
	
	expect(a.data).toStrictEqual(array)
	expect(b.data).toStrictEqual(array)
	expect(a.data).toStrictEqual(b.data)
	
	const array2 = new Float64Array([1, 2, 3, 0, 0, 0, 0, 0, 0])
	const c = new Matrix(3, 3, [1, 2, 3])
	
	expect(c.data).toStrictEqual(array2)
})

test('data is assigned to matrix.data if it is a Float64Array', () => {
	const array = new Float64Array([9])
	const a = new Matrix(1, 1, array)
	
	expect(a.data).toBe(array)
	expect(a.data[0]).toEqual(9)
})