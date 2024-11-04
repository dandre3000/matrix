import { expect, test } from 'vitest'
import { Matrix } from '../src/Matrix.js'

test('Throw Error if a is not an integer greater than or equal to 0 and less than this.columns', () => {
	const matrix = new Matrix(1, 2)
	
	expect(() => matrix.switchColumns('2', 1)).toThrow(Error)
	expect(() => matrix.switchColumns(-1, 1)).toThrow(Error)
	expect(() => matrix.switchColumns(0.1, 1)).toThrow(Error)
})

test('Throw Error if b is not an integer greater than or equal to 0 and less than this.columns', () => {
	const matrix = new Matrix(1, 2)
	
	expect(() => matrix.switchColumns(0, '2')).toThrow(Error)
	expect(() => matrix.switchColumns(0, -1)).toThrow(Error)
	expect(() => matrix.switchColumns(0, 0.1)).toThrow(Error)
})

test('Throw Error if result is defined but not a Matrix instance', () => {
	const matrix = new Matrix(1, 2)
	
	expect(() => matrix.switchColumns(0, 1, {
		rows: 1,
		columns: 2,
		data: [0, 0]
	}, 0, 1)).toThrow(Error)
})

test('Throw Error if the dimensions of this and result are not equal', () => {
	const a = new Matrix(1, 2)
	const b = new Matrix(1, 1)
	
	expect(() => a.switchColumns(0, 1, b)).toThrow(Error)
})

test('Switch column a with column b', () => {
	const a = new Matrix(2, 2, new FLoat64Array([1, 2, 3, 4]))
	const b = new Matrix(2, 2, new FLoat64Array([2, 1, 4, 3]))
	
	expect(a.switchColumns(0, 1)).toStrictEqual(b)
})

test('Return and mutate result', () => {
	const a = new Matrix(2, 3, new FLoat64Array([1, 2, 3, 4, 5, 6]))
	const b = new Matrix(2, 3, new FLoat64Array([1, 3, 2, 4, 6, 5]))
	
	expect(a.switchColumns(1, 2, a)).toBe(a)
	expect(a).toStrictEqual(b)
})