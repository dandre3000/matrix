import { expect, test } from 'vitest'
import { Matrix } from '../src/Matrix.js'

test('Throw Error if a is not an integer >= 0 and < this.columns', () => {
	const matrix = new Matrix(1, 2)
	
	expect(() => matrix.addColumnToColumn('2', 1)).toThrow(Error)
	expect(() => matrix.addColumnToColumn(-1, 1)).toThrow(Error)
	expect(() => matrix.addColumnToColumn(0.1, 1)).toThrow(Error)
})

test('Throw Error if b is not an integer >= 0 and < this.columns', () => {
	const matrix = new Matrix(1, 2)
	
	expect(() => matrix.addColumnToColumn(0, '2')).toThrow(Error)
	expect(() => matrix.addColumnToColumn(0, -1)).toThrow(Error)
	expect(() => matrix.addColumnToColumn(0, 0.1)).toThrow(Error)
})

test('Throw Error if n is defined but not a number', () => {
	const matrix = new Matrix(1, 2)
	
	expect(() => matrix.addColumnToColumn(0, 1, '2')).toThrow(Error)
})

test('Throw Error if result is defined but not a Matrix instance', () => {
	const matrix = new Matrix(1, 2)
	
	expect(() => matrix.addColumnToColumn(0, 1, 1, {
		rows: 1,
		columns: 2,
		data: [0, 0]
	})).toThrow(Error)
})

test('Throw Error if the dimensions of this and result are not equal', () => {
	const a = new Matrix(1, 2)
	const b = new Matrix(1, 1)
	
	expect(() => a.addColumnToColumn(0, 1, 1, b)).toThrow(Error)
})

test('Add column a * n to column b', () => {
	const a = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])
	const b = new Matrix(3, 3, [1, 5, 3, 4, 17, 6, 7, 29, 9])
	
	expect(a.addColumnToColumn(0, 1, 3)).toStrictEqual(b)
})

test('Return and mutate result', () => {
	const a = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])
	const b = new Matrix(3, 3, [1, 2, 9, 4, 5, 21, 7, 8, 33])
	
	expect(a.addColumnToColumn(1, 2, 3, a)).toBe(a)
	expect(a).toStrictEqual(b)
})