import { expect, test } from 'vitest'
import { Matrix } from '../src/Matrix.js'

test('Throw Error if matrix is not a Matrix instance', () => {
	const a = new Matrix(1, 1)
	
	expect(() => a.add({
		rows: 1,
		columns: 1,
		data: [0]
	})).toThrow(Error)
})

test('Throw Error if the dimensions of this and matrix are not equal', () => {
	const a = new Matrix(2, 1)
	const b = new Matrix(1, 2)
	const c = new Matrix(1, 1)
	
	expect(() => a.add(b)).toThrow(Error)
	expect(() => a.add(c)).toThrow(Error)
	expect(() => b.add(a)).toThrow(Error)
	expect(() => b.add(c)).toThrow(Error)
})

test('Throw Error if result is defined but not a Matrix instance', () => {
	const a = new Matrix(1, 1)
	const b = new Matrix(1, 1)
	
	expect(() => a.add(b, {
		rows: 1,
		columns: 1,
		data: [0]
	})).toThrow(Error)
})

test('Throw Error if the dimensions of this and result are not equal', () => {
	const a = new Matrix(2, 1)
	const b = new Matrix(1, 2)
	const c = new Matrix(1, 1)
	
	expect(() => a.add(a, b)).toThrow(Error)
	expect(() => a.add(a, c)).toThrow(Error)
})

test('Add this to matrix', () => {
	const a = new Matrix(2, 2, [1, 2, 3, 4])
	const b = new Matrix(2, 2, [5, 6, 7, 8])
	const c = new Matrix(2, 2, [6, 8, 10, 12])
	
	expect(a.add(b)).toStrictEqual(c)
})

test('Return and mutate result', () => {
	const a = new Matrix(2, 2, [1, 2, 3, 4])
	const b = new Matrix(2, 2, [5, 6, 7, 8])
	const c = new Matrix(2, 2, [6, 8, 10, 12])
	
	expect(b.add(a, b)).toBe(b)
	expect(b).toStrictEqual(c)
})