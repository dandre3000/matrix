import { expect, test } from 'vitest'
import { Matrix } from '../src/Matrix.js'

test('Throw Error if a is not an integer greater than or equal to 0 and less than this.rows', () => {
	const matrix = new Matrix(2, 1)
	
	expect(() => matrix.switchRows('2', 1)).toThrow(Error)
	expect(() => matrix.switchRows(-1, 1)).toThrow(Error)
	expect(() => matrix.switchRows(0.1, 1)).toThrow(Error)
})

test('Throw Error if b is not an integer greater than or equal to 0 and less than this.rows', () => {
	const matrix = new Matrix(2, 1)
	
	expect(() => matrix.switchRows(0, '2')).toThrow(Error)
	expect(() => matrix.switchRows(0, -1)).toThrow(Error)
	expect(() => matrix.switchRows(0, 0.1)).toThrow(Error)
})

test('Throw Error if result is defined but not a Matrix instance', () => {
	const matrix = new Matrix(2, 1)
	
	expect(() => matrix.switchRows(0, 1, {
		rows: 2,
		columns: 1,
		data: [0, 0]
	}, 0, 1)).toThrow(Error)
})

test('Throw Error if the dimensions of this and result are not equal', () => {
	const a = new Matrix(2, 1)
	const b = new Matrix(1, 1)
	
	expect(() => a.switchRows(0, 1, b)).toThrow(Error)
})

test('Switch row a with row b', () => {
	const a = new Matrix(2, 2, new Float64Array([1, 2, 3, 4]))
	const b = new Matrix(2, 2, new Float64Array([3, 4, 1, 2]))
	
	expect(a.switchRows(0, 1)).toStrictEqual(b)
})

test('Return and mutate result', () => {
	const a = new Matrix(3, 2, new Float64Array([1, 2, 3, 4, 5, 6]))
	const b = new Matrix(3, 2, new Float64Array([1, 2, 5, 6, 3, 4]))
	
	expect(a.switchRows(1, 2, a)).toBe(a)
	expect(a).toStrictEqual(b)
})