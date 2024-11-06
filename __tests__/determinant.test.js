import { expect, test } from 'vitest'
import { Matrix } from '../src/Matrix.js'

test('Calculate determinant', () => {
	const a = new Matrix(3, 3, [1, 2, 1, 4, 5, 6, 1, 8, 1])
	
	expect(a.determinant()).toBe(-12)
})