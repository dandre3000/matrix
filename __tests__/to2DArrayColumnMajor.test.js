import { expect, test } from 'vitest'
import { Matrix } from '../src/Matrix.js'

test('Convert matrix to 2d array column major', () => {
	const a = new Matrix(3, 3, new Float64Array([1, 2, 3, 4, 5, 6, 7, 8, 9]))
	
	const array = [
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9]
	]
	
	expect(a.to2DArrayColumnMajor()).toStrictEqual(array)
})