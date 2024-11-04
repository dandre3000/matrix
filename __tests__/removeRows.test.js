import { expect, test } from 'vitest'
import { Matrix } from '../src/Matrix.js'

test('Throw Error if row is not an integer >= 0 and <= to this.rows', () => {
	const matrix = new Matrix(2, 1)
	
	expect(() => matrix.removeRows('1', 1)).toThrow(Error)
	expect(() => matrix.removeRows(-1, 1)).toThrow(Error)
	expect(() => matrix.removeRows(3, 1)).toThrow(Error)
	expect(() => matrix.removeRows(0.1, 1)).toThrow(Error)
})

test('Throw Error if count is not an integer >= 1 or is >= this.rows while row === 0', () => {
	const matrix = new Matrix(2, 1)
	
	expect(() => matrix.removeRows(0, '1')).toThrow(Error)
	expect(() => matrix.removeRows(0, 1.1)).toThrow(Error)
	expect(() => matrix.removeRows(0, 2)).toThrow(Error)
})

test('Throw Error if result is defined but not a Matrix instance, result.rows does not equal this.rows - count, or if result.columns does not equal this.columns', () => {
	const a = new Matrix(2, 1)
	const b = new Matrix(1, 1)
	
	expect(() => matrix.removeRows(0, 1, undefined, b)).toThrow(Error)
})

test('Remove count rows from this', () => {
	const a = new Matrix(3, 3, new Float64Array([1, 2, 3, 4, 5, 6, 7, 8, 9]))
	const b = new Matrix(2, 3, new Float64Array([1, 2, 3, 7, 8, 9]))
	
	expect(a.removeRows(1, 1)).toStrictEqual(b)
})

test('Return and mutate result', () => {
	const a = new Matrix(3, 3, new Float64Array([1, 2, 3, 4, 5, 6, 7, 8, 9]))
	const b = new Matrix(2, 3, new Float64Array([0, 0, 0, 0, 0, 0]))
	const c = new Matrix(2, 3, new Float64Array([1, 2, 3, 4, 5, 6]))
	
	expect(a.removeRows(2, 1, b)).toBe(b)
	expect(b).toStrictEqual(c)
})