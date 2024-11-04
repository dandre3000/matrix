import { expect, test } from 'vitest'
import { Matrix } from '../src/Matrix.js'

test('Convert matrix to 2d array row major', () => {
	const a = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])
	
	const array = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	]
	
	expect(a.to2DArrayRowMajor(a)).toStrictEqual(array)
})