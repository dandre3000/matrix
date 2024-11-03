import { expect, test } from 'vitest'
import { Matrix } from '../src/Matrix.ts'

test('Throw Error if column is not an integer >= 0 and < this.columns', () => {
	const matrix = new Matrix(1, 2)
	
	expect(() => matrix.insertColumns('1', 1)).toThrow(Error)
	expect(() => matrix.insertColumns(-1, 1)).toThrow(Error)
	expect(() => matrix.insertColumns(3, 1)).toThrow(Error)
	expect(() => matrix.insertColumns(0.1, 1)).toThrow(Error)
})

test('Throw Error if count is not an integer >= 1', () => {
	const matrix = new Matrix(1, 2)
	
	expect(() => matrix.insertColumns(0, '2')).toThrow(Error)
	expect(() => matrix.insertColumns(0, 1.1)).toThrow(Error)
})

test('Throw Error if newData is not an array of numbers', () => {
	const matrix = new Matrix(1, 2)
	
	expect(() => matrix.insertColumns(0, '2', ['1', 2])).toThrow(Error)
})

test('Throw Error if result is defined but not a Matrix instance, result.rows does !== this.rows + count, or if result.columns !== this.columns', () => {
	const a = new Matrix(1, 2)
	const b = new Matrix(4, 1)
	
	expect(() => matrix.insertColumns(0, 2, undefined, b)).toThrow(Error)
})

test('Insert count columns into this', () => {
	const a = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])
	const b = new Matrix(4, 3, [1, 0, 2, 3, 4, 0, 5, 6, 7, 0, 8, 9])
	
	expect(a.insertColumns(1, 1)).toStrictEqual(b)
})

test('Fill inserted columns with newData', () => {
	const a = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])
	const b = new Matrix(4, 3, [-2, 1, 2, 3, -1, 4, 5, 6, 0, 7, 8, 9])
	
	expect(a.insertColumns(0, 1, [-2, -1, 0])).toStrictEqual(b)
})

test('Return and mutate result', () => {
	const a = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])
	const b = new Matrix(3, 4)
	const c = new Matrix(3, 4, [1, 2, 3, 10, 4, 5, 6, 11, 7, 8, 9, 12])
	
	expect(a.insertColumns(3, 1, [10, 11, 12], b)).toBe(b)
	expect(b).toStrictEqual(c)
})