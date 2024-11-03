import { expect, test } from 'vitest'
import { Matrix } from '../src/Matrix.ts'

test('Throw Error if matrix is not a Matrix instance', () => {
	const a = new Matrix(1, 1)
	
	expect(() => a.multiplyMatrix({
		rows: 1,
		columns: 1,
		data: [0]
	})).toThrow(Error)
})

test('Throw Error if this.columns does not equal matrix.rows', () => {
	const a = new Matrix(2, 1)
	const b = new Matrix(2, 1)
	
	expect(() => a.multiplyMatrix(b)).toThrow(Error)
	expect(() => b.multiplyMatrix(a)).toThrow(Error)
})

test('Throw Error if result is defined but not a Matrix instance', () => {
	const a = new Matrix(1, 1)
	const b = new Matrix(1, 1)
	
	expect(() => a.multiplyMatrix(b, {
		rows: 1,
		columns: 1,
		data: [0]
	})).toThrow(Error)
})

test('Throw Error if result.rows does not equal this.rows and result.columns does not equal matrix.columns', () => {
	const a = new Matrix(1, 2)
	const b = new Matrix(2, 1)
	const c = new Matrix(1, 4)
	
	expect(() => a.multiplyMatrix(b, c)).toThrow(Error)
	expect(() => b.multiplyMatrix(a, c)).toThrow(Error)
})

test('Multiply this by matrix', () => {
	const a = new Matrix(2, 2, [1, 2, 3, 4])
	const b = new Matrix(2, 2, [5, 6, 7, 8])
	const c = new Matrix(2, 2, [19, 22, 43, 50])
	
	expect(a.multiplyMatrix(b)).toStrictEqual(c)
})

test('Return and mutate result', () => {
	const a = new Matrix(2, 2, [1, 2, 3, 4])
	const b = new Matrix(2, 2, [5, 6, 7, 8])
	const c = new Matrix(2, 2, [23, 34, 31, 46])
	
	expect(b.multiplyMatrix(a, b)).toBe(b)
	expect(b).toStrictEqual(c)
})