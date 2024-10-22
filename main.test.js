import { expect, test } from '@jest/globals'
import { divideScalar, multiplyMatrix, multiplyScalar, newMatrix, rowAdd, rowMultiply, rowSwitch, transpose } from './main.js'

test('multiplyScalar throws an Error if a does not fit the Matrix interface or b is not a number', () => {
	expect(() => multiplyScalar({
		rows: 1,
		columns: 1,
		length: 1.1,
		0: 1
	}, 0)).toThrow(RangeError)
	
	expect(() => multiplyScalar(newMatrix(1, 1), true)).toThrow(TypeError)
})

test('multiply matrix a times scalar b', () => {
	expect(multiplyScalar(newMatrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]), 10)).toStrictEqual(newMatrix(3, 3, [10, 20, 30, 40, 50, 60, 70, 80, 90]))
	expect(multiplyScalar(newMatrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]), 2)).toStrictEqual(newMatrix(3, 3, [2, 4, 6, 8, 10, 12, 14, 16, 18]))
})

test('divideScalar throws an Error if a does not fit the Matrix interface or b is not a number', () => {
	expect(() => divideScalar({
		rows: 1,
		columns: 1,
		length: 1.1,
		0: 1
	}, 0)).toThrow(RangeError)
	
	expect(() => divideScalar(newMatrix(1, 1), true)).toThrow(TypeError)
})

test('divide matrix a by scalar b', () => {
	expect(divideScalar(newMatrix(3, 3, [10, 20, 30, 40, 50, 60, 70, 80, 90]), 10)).toStrictEqual(newMatrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
	expect(divideScalar(newMatrix(3, 3, [2, 4, 6, 8, 10, 12, 14, 16, 18]), 2)).toStrictEqual(newMatrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
})

test('multiplyMatrix throws an Error if a or b do not fit the Matrix interface', () => {
	expect(() => multiplyMatrix({
		rows: 1,
		columns: 1,
		length: 1.1,
		0: 1
	}, newMatrix(1, 1))).toThrow(RangeError)
	
	expect(() => multiplyMatrix(newMatrix(1, 1), {
		rows: 1,
		columns: 1,
		length: 1,
		0: '1'
	})).toThrow(TypeError)
})

test('multiplyMatrix throws an Error if a.columns does not equal b.rows', () => {
	expect(() => multiplyMatrix(newMatrix(1, 2), newMatrix(1, 1))).toThrow(RangeError)
	expect(() => multiplyMatrix(newMatrix(1, 1), newMatrix(2, 1))).toThrow(RangeError)
})

test('multiply matrix a times matrix b', () => {
	expect(multiplyMatrix(newMatrix(1, 4, [1, 2, 3, 4]), newMatrix(4, 1, [5, 6, 7, 8]))).toStrictEqual(newMatrix(1, 1, [70]))
	expect(multiplyMatrix(newMatrix(4, 1, [5, 6, 7, 8]), newMatrix(1, 4, [1, 2, 3, 4]))).toStrictEqual(newMatrix(4, 4, [5, 10, 15, 20, 6, 12, 18, 24, 7, 14, 21, 28, 8, 16, 24, 32]))
})

test('rowSwitch throws an Error if matrix does not fit the Matrix interface or if a or b is not an integer greater than or equal to 0 and less than matrix.rows', () => {
	expect(() => rowSwitch({
		rows: 1,
		columns: 1,
		length: 1.1,
		0: 1
	}, 0, 1)).toThrow(RangeError)
	
	expect(() => rowSwitch(newMatrix(2, 1), true, 1)).toThrow(TypeError)
	expect(() => rowSwitch(newMatrix(2, 1), 0, '')).toThrow(TypeError)
})

test('rowSwitch switches the elements of row a with those in row b', () => {
	expect(rowSwitch(newMatrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]), 0, 1)).toStrictEqual(newMatrix(3, 3, [4, 5, 6, 1, 2, 3, 7, 8, 9]))
	expect(rowSwitch(newMatrix(3, 3, [4, 5, 6, 1, 2, 3, 7, 8, 9]), 1, 2)).toStrictEqual(newMatrix(3, 3, [4, 5, 6, 7, 8, 9, 1, 2, 3]))
})

test('rowAdd throws an Error if matrix does not fit the Matrix interface', () => {
	expect(() => rowAdd({
		rows: undefined,
		columns: 1,
		length: 1,
		0: 1
	}, 0, 1)).toThrow(ReferenceError)
})

test('rowAdd throws an Error if a or b is not an integer greater than or equal to 0 and less than matrix.rows', () => {
	expect(() => rowAdd(newMatrix(2, 1), true, 1)).toThrow(TypeError)
	expect(() => rowAdd(newMatrix(2, 1), 0, '')).toThrow(TypeError)
})

test('rowAdd throws an Error if n is not a number', () => {
	expect(() => rowAdd(newMatrix(2, 1), 0, 1, null)).toThrow(TypeError)
})

test('rowAdd multiplies the elements of row a times n then adds them to the elements of row b', () => {
	expect(rowAdd(newMatrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]), 1, 0, 2)).toStrictEqual(newMatrix(3, 3, [9, 12, 15, 4, 5, 6, 7, 8, 9]))
	expect(rowAdd(newMatrix(3, 3, [9, 12, 15, 4, 5, 6, 7, 8, 9]), 2, 1, 3)).toStrictEqual(newMatrix(3, 3, [9, 12, 15, 25, 29, 33, 7, 8, 9]))
})

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