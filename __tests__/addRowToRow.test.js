import { expect, test } from 'vitest'
import { Matrix } from '../src/Matrix.js'

test('Throw Error if a is not an integer greater than or equal to 0 and less than this.rows', () => {
	const matrix = new Matrix(2, 1)
	
	expect(() => matrix.addRowToRow('2', 1)).toThrow(Error)
	expect(() => matrix.addRowToRow(-1, 1)).toThrow(Error)
	expect(() => matrix.addRowToRow(0.1, 1)).toThrow(Error)
})

test('Throw Error if b is not an integer greater than or equal to 0 and less than this.rows', () => {
	const matrix = new Matrix(2, 1)
	
	expect(() => matrix.addRowToRow(0, '2')).toThrow(Error)
	expect(() => matrix.addRowToRow(0, -1)).toThrow(Error)
	expect(() => matrix.addRowToRow(0, 0.1)).toThrow(Error)
})

test('Throw Error if n is defined but not a number', () => {
	const matrix = new Matrix(2, 1)
	
	expect(() => matrix.addRowToRow(0, 1, '2')).toThrow(Error)
})

test('Throw Error if result is defined but not a Matrix instance', () => {
	const matrix = new Matrix(2, 1)
	
	expect(() => matrix.addRowToRow(0, 1, 1, {
		rows: 2,
		columns: 1,
		data: [0, 0]
	})).toThrow(Error)
})

test('Throw Error if the dimensions of this and result are not equal', () => {
	const a = new Matrix(2, 1)
	const b = new Matrix(1, 1)
	
	expect(() => a.addRowToRow(0, 1, 1, b)).toThrow(Error)
})

test('Add row a * n to row b', () => {
	const a = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])
	const b = new Matrix(3, 3, [1, 2, 3, 7, 11, 15, 7, 8, 9])
	
	expect(a.addRowToRow(0, 1, 3)).toStrictEqual(b)
})

test('Return and mutate result', () => {
	const a = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])
	const b = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 19, 23, 27])
	
	expect(a.addRowToRow(1, 2, 3, a)).toBe(a)
	expect(a).toStrictEqual(b)
})