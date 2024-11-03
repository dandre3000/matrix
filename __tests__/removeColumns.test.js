import { expect, test } from 'vitest'
import { Matrix } from '../src/Matrix.ts'

test('Throw Error if columns is not an integer >= 0 and <= to this.columns', () => {
	const matrix = new Matrix(1, 2)
	
	expect(() => matrix.removeColumns('1', 1)).toThrow(Error)
	expect(() => matrix.removeColumns(-1, 1)).toThrow(Error)
	expect(() => matrix.removeColumns(3, 1)).toThrow(Error)
	expect(() => matrix.removeColumns(0.1, 1)).toThrow(Error)
})

test('Throw Error if count is not an integer >= 1 or is >= this.columns - column', () => {
	const matrix = new Matrix(1, 2)
	
	expect(() => matrix.removeColumns(0, '1')).toThrow(Error)
	expect(() => matrix.removeColumns(0, 1.1)).toThrow(Error)
	expect(() => matrix.removeColumns(0, 2)).toThrow(Error)
})

test('Throw Error if result is defined but not a Matrix instance, result.columns !== this.columns - count, or if result.columns !== this.columns', () => {
	const a = new Matrix(1, 2)
	const b = new Matrix(1, 1)
	
	expect(() => matrix.removeColumns(0, 1, undefined, b)).toThrow(Error)
})

test('Remove count columns from this', () => {
	const a = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])
	const b = new Matrix(3, 2, [1, 3, 4, 6, 7, 9])
	
	expect(a.removeColumns(1, 1)).toStrictEqual(b)
})

test('Return and mutate result', () => {
	const a = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])
	const b = new Matrix(3, 2, [0, 0, 0, 0, 0, 0])
	const c = new Matrix(3, 2, [1, 2, 4, 5, 7, 8])
	
	expect(a.removeColumns(2, 1, b)).toBe(b)
	expect(b).toStrictEqual(c)
})