import { expect, test } from 'vitest'
import { Matrix } from '../src/Matrix.js'

test('Throw Error if row is not an integer greater than or equal to 0 and less than this.rows', () => {
	const matrix = new Matrix(2, 1)
	
	expect(() => matrix.multiplyRow('1', 1)).toThrow(Error)
	expect(() => matrix.multiplyRow(-1, 1)).toThrow(Error)
	expect(() => matrix.multiplyRow(0.1, 1)).toThrow(Error)
})

test('Throw Error if n is not a number', () => {
	const matrix = new Matrix(2, 1)
	
	expect(() => matrix.multiplyRow(0, '2')).toThrow(Error)
})

test('Throw Error if result is defined but not a Matrix instance', () => {
	const matrix = new Matrix(2, 1)
	
	expect(() => matrix.multiplyRow(0, 2, {
		rows: 2,
		columns: 1,
		data: [0, 0]
	})).toThrow(Error)
})

test('Throw Error if the dimensions of this and result are not equal', () => {
	const a = new Matrix(2, 1)
	const b = new Matrix(1, 1)
	
	expect(() => a.multiplyRow(0, 2, b)).toThrow(Error)
})

test('Multiply row * n', () => {
	const a = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])
	const b = new Matrix(3, 3, [10, 20, 30, 4, 5, 6, 7, 8, 9])
	
	expect(a.multiplyRow(0, 10)).toStrictEqual(b)
})

test('Return and mutate result', () => {
	const a = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])
	const b = new Matrix(3, 3, [1, 2, 3, 80, 100, 120, 7, 8, 9])
	
	expect(a.multiplyRow(1, 20, a)).toBe(a)
	expect(a).toStrictEqual(b)
})