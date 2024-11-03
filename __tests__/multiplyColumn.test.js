import { expect, test } from 'vitest'
import { Matrix } from '../src/Matrix.ts'

test('Throw Error if row is not an integer >= 0 and < this.columns', () => {
	const matrix = new Matrix(1, 2)
	
	expect(() => matrix.multiplyColumn('1', 1)).toThrow(Error)
	expect(() => matrix.multiplyColumn(-1, 1)).toThrow(Error)
	expect(() => matrix.multiplyColumn(0.1, 1)).toThrow(Error)
})

test('Throw Error if n is not a number', () => {
	const matrix = new Matrix(1, 2)
	
	expect(() => matrix.multiplyColumn(0, '2')).toThrow(Error)
})

test('Throw Error if result is defined but not a Matrix instance', () => {
	const matrix = new Matrix(1, 2)
	
	expect(() => matrix.multiplyColumn(0, 2, {
		rows: 2,
		columns: 1,
		data: [0, 0]
	})).toThrow(Error)
})

test('Throw Error if the dimensions of this and result are not equal', () => {
	const a = new Matrix(1, 2)
	const b = new Matrix(1, 1)
	
	expect(() => a.multiplyColumn(0, 2, b)).toThrow(Error)
})

test('Multiply column * n', () => {
	const a = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])
	const b = new Matrix(3, 3, [10, 2, 3, 40, 5, 6, 70, 8, 9])
	
	expect(a.multiplyColumn(0, 10)).toStrictEqual(b)
})

test('Return and mutate result', () => {
	const a = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])
	const b = new Matrix(3, 3, [1, 40, 3, 4, 100, 6, 7, 160, 9])
	
	expect(a.multiplyColumn(1, 20, a)).toBe(a)
	expect(a).toStrictEqual(b)
})