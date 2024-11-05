import { expect, test } from 'vitest'
import { Matrix } from '../src/Matrix.js'

test('Throw Error if result is defined but not a Matrix instance, result.rows !== this.rows, or if result.columns !== this.columns', () => {
	const a = new Matrix(1, 2)
	const b = new Matrix(2, 1)
	
	expect(() => a.transpose(b)).toThrow(Error)
})

test('Transpose this', () => {
	const a = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])
	const b = new Matrix(3, 3, [1, 4, 7, 2, 5, 8, 3, 6, 9])
	
	expect(a.transpose()).toStrictEqual(b)
})

test('Return and mutate result', () => {
	const a = new Matrix(3, 3, [1, 4, 7, 2, 5, 8, 3, 6, 9])
	const b = new Matrix(3, 3)
	const c = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])
	
	expect(a.transpose(b)).toBe(b)
	expect(a.transpose(b)).toStrictEqual(c)
})