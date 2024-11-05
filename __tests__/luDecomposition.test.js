import { expect, test } from 'vitest'
import { Matrix } from '../src/Matrix.js'

test('Throw Error if result.l is defined but not a Matrix instance, result.l.rows !== this.rows, or if result.l.columns !== this.rows', () => {
	const a = new Matrix(1, 2)
	const b = new Matrix(2, 1)
	
	expect(() => a.luDecomposition({ l: b })).toThrow(Error)
})

test('Throw Error if result.u is defined but not a Matrix instance, result.u.rows !== this.rows, or if result.u.columns !== this.columns', () => {
	const a = new Matrix(1, 2)
	const b = new Matrix(2, 1)
	
	expect(() => a.luDecomposition({ u: b })).toThrow(Error)
})

test('LU decomposition', () => {
	const a = new Matrix(2, 5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
	const l = new Matrix(2, 2, [1, 0, 6, 1])
	const u = new Matrix(2, 5, [1, 2, 3, 4, 5, 0, -5, -10, -15, -20])
	
	expect(a.luDecomposition()).toStrictEqual({ l, u })
})

test('Return and mutate result', () => {
	const a = new Matrix(3, 3, [1, 4, 7, 2, 5, 8, 3, 6, 9])
	const b = new Matrix(3, 3, [1, 0, 0, 2, 1, 0, 3, 2, 1])
	const c = new Matrix(3, 3, [1, 4, 7, 0, -3, -6, 0, 0, 0])
	const l = new Matrix(3, 3)
	const u = new Matrix(3, 3)
	const result = a.luDecomposition({ l, u })
	
	expect(result.l).toBe(l)
	expect(result.l).toStrictEqual(b)
	expect(result.u).toBe(u)
	expect(result.u).toStrictEqual(c)
})