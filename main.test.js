import { expect, test } from '@jest/globals'
import { newMatrix, rowMultiply, transpose } from './main.js'

test('rowMultiply throws an Error if matrix does not fit the Matrix interface', () => {
	expect(() => rowMultiply({
		rows: 1,
		columns: '',
		length: 1,
		0: 1
	}, 0, 1)).toThrow(TypeError)
})

test('rowMultiply throws an Error if a is not an integer greater than or equal to 0 and less than matrix.rows', () => {
	expect(() => rowMultiply(newMatrix(2, 1), true, 1)).toThrow(TypeError)
	expect(() => rowMultiply(newMatrix(2, 1), '', 1)).toThrow(TypeError)
})

test('rowMultiply throws an Error if n is not a number', () => {
	expect(() => rowMultiply(newMatrix(2, 1), 0, null)).toThrow(TypeError)
})

test('rowMultiply multiplies the elements of row a times n then adds them to the elements of row b', () => {
	expect(rowMultiply(newMatrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]), 0, 2)).toStrictEqual(newMatrix(3, 3, [2, 4, 6, 4, 5, 6, 7, 8, 9]))
	expect(rowMultiply(newMatrix(3, 3, [2, 4, 6, 4, 5, 6, 7, 8, 9]), 1, 3)).toStrictEqual(newMatrix(3, 3, [2, 4, 6, 12, 15, 18, 7, 8, 9]))
})

test('transpose throws an Error if matrix does not fit the Matrix interface', () => {
	expect(() => transpose({
		rows: 1,
		columns: '',
		length: 1,
		0: 1
	})).toThrow(TypeError)
})

test('transpose matrix', () => {
	expect(transpose(newMatrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]))).toStrictEqual(newMatrix(3, 3, [1, 4, 7, 2, 5, 8, 3, 6, 9]))
	expect(transpose(newMatrix(3, 3, [1, 4, 7, 2, 5, 8, 3, 6, 9]))).toStrictEqual(newMatrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
})