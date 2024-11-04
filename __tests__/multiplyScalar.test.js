import { expect, test } from 'vitest'
import { Matrix } from '../src/Matrix.js'

test('Throw Error if n is not a number', () => {
	const a = new Matrix(1, 1)
	
	expect(() => a.multiplyScalar('2')).toThrow(Error)
})

test('Throw Error if result is defined but not a Matrix instance', () => {
	const a = new Matrix(1, 1)
	const b = new Matrix(1, 1)
	
	expect(() => a.multiplyScalar(2, {
		rows: 1,
		columns: 1,
		data: [0]
	})).toThrow(Error)
})

test('Throw Error if the dimensions of this and result are not equal', () => {
	const a = new Matrix(2, 1)
	const b = new Matrix(1, 2)
	const c = new Matrix(1, 1)
	
	expect(() => a.multiplyScalar(2, b)).toThrow(Error)
	expect(() => a.multiplyScalar(2, c)).toThrow(Error)
})

test('Multiply this times n', () => {
	const a = new Matrix(2, 2, new Float64Array([1, 2, 3, 4]))
	const b = new Matrix(2, 2, new Float64Array([5, 10, 15, 20]))
	
	expect(a.multiplyScalar(5)).toStrictEqual(b)
})

test('Return and mutate result', () => {
	const a = new Matrix(2, 2, new Float64Array([1, 2, 3, 4]))
	const b = new Matrix(2, 2, new Float64Array([6, 12, 18, 24]))
	
	expect(a.multiplyScalar(6, a)).toBe(a)
	expect(a).toStrictEqual(b)
})