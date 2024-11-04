import { expect, test } from 'vitest'
import { Matrix } from '../src/Matrix.js'

test('Throw Error if row is not an integer greater than or equal to 0 and less than or equal to this.rows', () => {
	const matrix = new Matrix(2, 1)
	
	expect(() => matrix.insertRows('1', 1)).toThrow(Error)
	expect(() => matrix.insertRows(-1, 1)).toThrow(Error)
	expect(() => matrix.insertRows(3, 1)).toThrow(Error)
	expect(() => matrix.insertRows(0.1, 1)).toThrow(Error)
})

test('Throw Error if count is not an integer greater than or equal to 1', () => {
	const matrix = new Matrix(2, 1)
	
	expect(() => matrix.insertRows(0, '2')).toThrow(Error)
	expect(() => matrix.insertRows(0, 1.1)).toThrow(Error)
})

test('Throw Error if newData is not an array of numbers', () => {
	const matrix = new Matrix(2, 1)
	
	expect(() => matrix.insertRows(0, '2', ['1', 2])).toThrow(Error)
})

test('Throw Error if result is defined but not a Matrix instance, result.rows does not equal this.rows + count, or if result.columns does not equal this.columns', () => {
	const a = new Matrix(2, 1)
	const b = new Matrix(4, 1)
	
	expect(() => matrix.insertRows(0, 2, undefined, b)).toThrow(Error)
})

test('Insert count rows into this', () => {
	const a = new Matrix(3, 3, new Float64Array([1, 2, 3, 4, 5, 6, 7, 8, 9]))
	const b = new Matrix(4, 3, new Float64Array([1, 2, 3, 0, 0, 0, 4, 5, 6, 7, 8, 9]))
	
	expect(a.insertRows(1, 1)).toStrictEqual(b)
})

test('Fill inserted rows with newData', () => {
	const a = new Matrix(3, 3, new Float64Array([1, 2, 3, 4, 5, 6, 7, 8, 9]))
	const b = new Matrix(4, 3, new Float64Array([-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
	
	expect(a.insertRows(0, 1, [-2, -1, 0])).toStrictEqual(b)
})

test('Return and mutate result', () => {
	const a = new Matrix(3, 3, new Float64Array([1, 2, 3, 4, 5, 6, 7, 8, 9]))
	const b = new Matrix(4, 3)
	const c = new Matrix(4, 3, new Float64Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))
	
	expect(a.insertRows(3, 1, [10, 11, 12], b)).toBe(b)
	expect(b).toStrictEqual(c)
})