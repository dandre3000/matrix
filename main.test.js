import { expect, test } from '@jest/globals'
import { add, checkMatrix, divideScalar, isMatrix, multiplyMatrix, multiplyScalar, newMatrix, rowAdd, rowMultiply, rowSwitch, subtract, transpose } from './main.js'

test('newMatrix throws an Error if rows or columns are not integers greater than or equal to 1', () => {
	expect(() => newMatrix(1)).toThrow(ReferenceError)
	expect(() => newMatrix(null, 2)).toThrow(TypeError)
	expect(() => newMatrix(true, 3)).toThrow(TypeError)
	expect(() => newMatrix('', 4)).toThrow(TypeError)
	expect(() => newMatrix({}, 5)).toThrow(TypeError)
	expect(() => newMatrix(0, 6)).toThrow(RangeError)
	expect(() => newMatrix(1.1, 7)).toThrow(RangeError)
	
	expect(() => newMatrix(1, undefined)).toThrow(ReferenceError)
	expect(() => newMatrix(2, null)).toThrow(TypeError)
	expect(() => newMatrix(3, true)).toThrow(TypeError)
	expect(() => newMatrix(4, '')).toThrow(TypeError)
	expect(() => newMatrix(5, {})).toThrow(TypeError)
	expect(() => newMatrix(6, 0)).toThrow(RangeError)
	expect(() => newMatrix(7, 1.1)).toThrow(RangeError)
})

test('newMatrix throws an Error if data does not fit the ArrayLike<number> interface', () => {
	expect(() => newMatrix(2, 1, null)).toThrow(TypeError)
	expect(() => newMatrix(1, 2, true)).toThrow(TypeError)
	expect(() => newMatrix(1, 2, 0)).toThrow(TypeError)
	expect(() => newMatrix(2, 2, '')).toThrow(TypeError)
	expect(() => newMatrix(3, 2, {})).toThrow(TypeError)
	expect(() => newMatrix(1, 2, { 0: 1, 1: 2, length: 2 }))
	expect(() => newMatrix(1, 2, { '0': 3, '1': 4, length: 2 }))
	expect(() => newMatrix(1, 2, { '0': 3, '1': 4, length: -2 })).toThrow(RangeError)
	expect(() => newMatrix(1, 3, [1, '2', 3])).toThrow(TypeError)
})

test('newMatrix throws an Error if buffer is not an ArrayBuffer or buffer.byteLength is not greater than or equal to the minimum byteLength of the matrix (rows * columns * 8)', () => {
	expect(() => newMatrix(1, 1, undefined, null)).toThrow(TypeError)
	expect(() => newMatrix(1, 1, undefined, true)).toThrow(TypeError)
	expect(() => newMatrix(1, 1, undefined, 0)).toThrow(TypeError)
	expect(() => newMatrix(1, 1, undefined, '')).toThrow(TypeError)
	expect(() => newMatrix(1, 1, undefined, {})).toThrow(TypeError)
	expect(() => newMatrix(1, 1, undefined, new ArrayBuffer(0))).toThrow(RangeError)
	expect(() => newMatrix(1, 2, undefined, new ArrayBuffer(15))).toThrow(RangeError)
})

test('newMatrix throws an Error if byteOffset is not an integer greater than or equal to 0 and less than or equal to buffer.byteLength minus the byteLength of the matrix (rows * columns * 8)', () => {
	expect(() => newMatrix(1, 1, undefined, new ArrayBuffer(8), null)).toThrow(TypeError)
	expect(() => newMatrix(1, 1, undefined, new ArrayBuffer(8), true)).toThrow(TypeError)
	expect(() => newMatrix(1, 1, undefined, new ArrayBuffer(8), '')).toThrow(TypeError)
	expect(() => newMatrix(1, 1, undefined, new ArrayBuffer(8), {})).toThrow(TypeError)
	expect(() => newMatrix(1, 1, undefined, new ArrayBuffer(8), -1)).toThrow(RangeError)
	expect(() => newMatrix(1, 1, undefined, new ArrayBuffer(16), 9)).toThrow(RangeError)
	expect(() => newMatrix(1, 1, undefined, new ArrayBuffer(16), 7.9)).toThrow(RangeError)
})

test('newMatrix always returns an object that fits the Matrix interface', () => {
	const testMatrix = matrix => {
		const { columns, length, rows } = matrix
		
		// is rows an integer greater than or equal to 1
		expect(rows).toBeGreaterThanOrEqual(1)
		expect(rows % 1).toEqual(0)
		
		// is rows an integer greater than or equal to 1
		expect(columns).toBeGreaterThanOrEqual(1)
		expect(columns % 1).toEqual(0)
		
		// is matrix ArrayLike<number>
		
		expect(matrix).toHaveLength(rows * columns)
		
		// elements
		for (let i = 0; i < length; i++) {
			expect(typeof matrix[i]).toEqual('number')
		}
	}
	
	testMatrix(newMatrix(1, 1, [0]))
	testMatrix(newMatrix(1, 2, [0, 1]))
	testMatrix(newMatrix(2, 1, [0, 1]))
	testMatrix(newMatrix(2, 2, [0, 1, 2, 3]))
	testMatrix(newMatrix(2, 3, [0, 1, 2, 3, 4, 5]))
	testMatrix(newMatrix(3, 2, [0, 1, 2, 3, 4, 5]))
	testMatrix(newMatrix(3, 3, [0, 1, 2, 3, 4, 5, 6, 7, 8]))
})

test('checkMatrix throws an Error if matrix does not fit the Matrix interface', () => {
	expect(() => checkMatrix()).toThrow(ReferenceError)
	expect(() => checkMatrix(null)).toThrow(TypeError)
	expect(() => checkMatrix(true)).toThrow(TypeError)
	expect(() => checkMatrix(0)).toThrow(TypeError)
	expect(() => checkMatrix('')).toThrow(TypeError)
	expect(() => checkMatrix({})).toThrow(ReferenceError)
	
	expect(() => checkMatrix({
		columns: 1,
		length: 1,
		0: 1
	})).toThrow(ReferenceError)
	
	expect(() => checkMatrix({
		rows: 1,
		columns: -1,
		length: 1,
		0: 1
	})).toThrow(RangeError)
	
	expect(() => checkMatrix({
		rows: 1,
		columns: 1,
		length: 1.1,
		0: 1
	})).toThrow(RangeError)
	
	expect(() => checkMatrix({
		rows: 1,
		columns: 1,
		length: 1,
		0: '1'
	})).toThrow(TypeError)
})

test('isMatrix returns true if matrix fits the Matrix interface or false if it does not', () => {
	expect(isMatrix(undefined)).toEqual(false)
	expect(isMatrix(null)).toEqual(false)
	expect(isMatrix(true)).toEqual(false)
	expect(isMatrix(0)).toEqual(false)
	expect(isMatrix('')).toEqual(false)
	expect(isMatrix({})).toEqual(false)
	
	expect(isMatrix({
		rows: undefined,
		columns: 1,
		length: 1,
		0: 1
	})).toEqual(false)
	
	expect(isMatrix({
		rows: 1,
		columns: -1,
		length: 1,
		0: 1
	})).toEqual(false)
	
	expect(isMatrix({
		rows: 1,
		columns: 1,
		length: 1.1,
		0: 1
	})).toEqual(false)
	
	expect(isMatrix({
		rows: 1,
		columns: 1,
		length: 1,
		0: '1'
	})).toEqual(false)
	
	expect(isMatrix({
		rows: 1,
		columns: 1,
		length: 1,
		0: 1
	})).toEqual(true)
	
	expect(isMatrix({
		rows: 3,
		columns: 1,
		length: 3,
		0: 1,
		1: 2,
		2: 3
	})).toEqual(true)
})

test('add throws an Error if a or b do not fit the Matrix interface', () => {
	expect(() => add({
		rows: 1,
		columns: 1,
		length: 1.1,
		0: 1
	}, newMatrix(1, 1))).toThrow(RangeError)
	
	expect(() => add(newMatrix(1, 1), {
		rows: 1,
		columns: 1,
		length: 1,
		0: '1'
	})).toThrow(TypeError)
})

test('add throws an Error if the dimensions of a do not equal equal the dimensions of b', () => {
	expect(() => add(newMatrix(1, 2), newMatrix(1, 1))).toThrow(RangeError)
	expect(() => add(newMatrix(2, 1), newMatrix(1, 1))).toThrow(RangeError)
	expect(() => add(newMatrix(1, 1), newMatrix(2, 1))).toThrow(RangeError)
	expect(() => add(newMatrix(1, 1), newMatrix(2, 2))).toThrow(RangeError)
})

test('add matrix a to matrix b', () => {
	expect(add(newMatrix(1, 3, [1, 2, 3]), newMatrix(1, 3, [4, 5, 6]))).toStrictEqual(newMatrix(1, 3, [5, 7, 9]))
	expect(add(newMatrix(3, 1, [4, 5, 6]), newMatrix(3, 1, [1, 2, 3]))).toStrictEqual(newMatrix(3, 1, [5, 7, 9]))
})

test('subtract throws an Error if a or b do not fit the Matrix interface', () => {
	expect(() => subtract({
		rows: undefined,
		columns: 1,
		length: 1,
		0: 1
	}, newMatrix(1, 1))).toThrow(ReferenceError)
	
	expect(() => subtract(newMatrix(1, 1), {
		rows: 1,
		columns: -1,
		length: 1,
		0: 1
	})).toThrow(RangeError)
})

test('subtract throws an Error if the dimensions of a do not equal equal the dimensions of b', () => {
	expect(() => subtract(newMatrix(1, 2), newMatrix(1, 1))).toThrow(RangeError)
	expect(() => subtract(newMatrix(2, 1), newMatrix(1, 1))).toThrow(RangeError)
	expect(() => subtract(newMatrix(1, 1), newMatrix(2, 1))).toThrow(RangeError)
	expect(() => subtract(newMatrix(1, 1), newMatrix(2, 2))).toThrow(RangeError)
})

test('subtract matrix b from matrix a', () => {
	expect(subtract(newMatrix(1, 3, [1, 2, 3]), newMatrix(1, 3, [4, 5, 6]))).toStrictEqual(newMatrix(1, 3, [-3, -3, -3]))
	expect(subtract(newMatrix(3, 1, [4, 5, 6]), newMatrix(3, 1, [1, 2, 3]))).toStrictEqual(newMatrix(3, 1, [3, 3, 3]))
})

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