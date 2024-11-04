import { expect, test } from 'vitest'
import { Matrix } from '../src/Matrix.js'

test('Throw Error if matrix is not a Matrix instance', () => {
	const a = new Matrix(1, 1)
	
	expect(() => a.subtract({
		rows: 1,
		columns: 1,
		data: [0]
	})).toThrow(Error)
})

test('Throw Error if the dimensions of this and matrix are not equal', () => {
	const a = new Matrix(2, 1)
	const b = new Matrix(1, 2)
	const c = new Matrix(1, 1)
	
	expect(() => a.subtract(b)).toThrow(Error)
	expect(() => a.subtract(c)).toThrow(Error)
	expect(() => b.subtract(a)).toThrow(Error)
	expect(() => b.subtract(c)).toThrow(Error)
})

test('Throw Error if result is defined but not a Matrix instance', () => {
	const a = new Matrix(1, 1)
	const b = new Matrix(1, 1)
	
	expect(() => a.subtract(b, {
		rows: 1,
		columns: 1,
		data: [0]
	})).toThrow(Error)
})

test('Throw Error if the dimensions of this and result are not equal', () => {
	const a = new Matrix(2, 1)
	const b = new Matrix(1, 2)
	const c = new Matrix(1, 1)
	
	expect(() => a.subtract(a, b)).toThrow(Error)
	expect(() => a.subtract(a, c)).toThrow(Error)
})

test('Subtract matrix from this', () => {
	const a = new Matrix(2, 2, [1, 2, 3, 4])
	const b = new Matrix(2, 2, [5, 6, 7, 8])
	const c = new Matrix(2, 2, [-4, -4, -4, -4])
	
	expect(a.subtract(b)).toStrictEqual(c)
})

test('Return and mutate result', () => {
	const a = new Matrix(2, 2, [1, 2, 3, 4])
	const b = new Matrix(2, 2, [5, 6, 7, 8])
	const c = new Matrix(2, 2, [4, 4, 4, 4])
	
	expect(b.subtract(a, b)).toBe(b)
	expect(b).toStrictEqual(c)
})