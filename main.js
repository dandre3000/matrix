/**
 * Copyright (c) 2024 DeAundre Payne
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 * @module Matrix
 * @license GPL-3.0
 **/

'use strict'

// used to skip redundant Matrix interface validation
const matrixSymbol = Symbol('Matrix')

/** @type {import('Matrix').newMatrix} */
export const newMatrix = (rows, columns, data, buffer = new ArrayBuffer(rows * columns * 8), byteOffset = 0) => {
	if (rows === undefined) throw new ReferenceError('rows is not defined')
	else if (typeof rows !== 'number') throw new TypeError('rows must be a number')
	else if (rows % 1 !== 0) throw new RangeError('rows must be an integer')
	else if (rows < 1) throw new RangeError('rows must be greater than or equal to 1')
	
	else if (columns === undefined) throw new ReferenceError('columns is not defined')
	else if (typeof columns !== 'number') throw new TypeError('columns must be a number')
	else if (columns % 1 !== 0) throw new RangeError('columns must be an integer')
	else if (columns < 1) throw new RangeError('columns must be greater than or equal to 1')
	
	else if (rows * columns > 134217728) throw new RangeError('rows * columns must not be greater than 134217728')
	
	else if (data !== undefined) {
		if (typeof data !== 'object') throw new TypeError('data must be an array of only numbers')
		else if (typeof data.length !== 'number') throw new TypeError('data.length must be an integer')
		else if (data.length % 1 !== 0) throw new RangeError('data.length must be an integer')
		else if (data.length < 0) throw new RangeError('data.length must be greater than or equal to 0')
		for (let i = 0; i < data.length; i++) {
			if (typeof data[i] !== 'number') throw new TypeError('data must be an array of only numbers')
		}
	}
	
	if ((buffer instanceof ArrayBuffer) !== true) throw new TypeError('buffer must be an ArrayBuffer')
	else if (buffer.byteLength < rows * columns * 8) throw new RangeError('buffer.byteLength must be greater than or equal to the minimum byteLength of the matrix (rows * columns * 8)')
	
	else if (typeof byteOffset !== 'number') throw new TypeError('byteOffset must be a number')
	else if (byteOffset % 1 !== 0) throw new RangeError('byteOffset must be an integer')
	else if (byteOffset < 0) throw new RangeError('byteOffset must be greater than or equal to 0')
	else if (byteOffset > buffer.byteLength - (rows * columns * 8)) throw new RangeError('byteOffset must be less than or equal to buffer.byteLength minus the byteLength of the matrix (rows * columns * 8)')
	
	/** Can not convert Float64Array to Matrix @type {*} */
	const matrix = new Float64Array(buffer, byteOffset, rows * columns)
	
	if (data !== undefined) {
		const length = Math.min(data.length, matrix.length)
		
		for (let i = 0; i < length; i++) {
			matrix[i] = data[i]
		}
	}
	
	// readonly matrix.rows = rows
	Object.defineProperty(matrix, 'rows', {
		value: rows,
		configurable: false,
		enumerable: false,
		writable: false
	})
	
	// readonly matrix.columns = columns
	Object.defineProperty(matrix, 'columns', {
		value: columns,
		configurable: false,
		enumerable: false,
		writable: false
	})
	
	// seal of approval
	// readonly matrix[matrixSymbol] = true
	Object.defineProperty(matrix, matrixSymbol, {
		value: true,
		configurable: false,
		enumerable: false,
		writable: false
	})
	
	return matrix
}

/** @type {import('Matrix').checkMatrix} */
export const checkMatrix = matrix => {
	if (matrix === undefined) throw new ReferenceError('matrix is not defined')
	else if (typeof matrix !== 'object' ||
		matrix === null) throw new TypeError('matrix must be an array of only numbers')
	
	// matrix has already been validated
	else if (/** Typescript will not accept matrixSymbol as a property key: @type {*} */ (matrix)[matrixSymbol] == true) return matrix
	
	else {
		const { columns, length, rows } = matrix
		
		// is rows an integer greater than or equal to 1
		if (rows === undefined) throw new ReferenceError('matrix.rows is not defined')
		else if (typeof rows !== 'number') throw new TypeError('matrix.rows must be a number')
		else if (rows % 1 !== 0) throw new RangeError('matrix.rows must be an integer')
		else if (rows < 1) throw new RangeError('matrix.rows must be greater than or equal to 1')
		
		// is columns an integer greater than or equal to 1
		else if (columns === undefined) throw new ReferenceError('matrix.columns is not defined')
		else if (typeof columns !== 'number') throw new TypeError('matrix.columns must be a number')
		else if (columns % 1 !== 0) throw new RangeError('matrix.columns must be an integer')
		else if (columns < 1) throw new RangeError('matrix.columns must be greater than or equal to 1')
		
		// is matrix ArrayLike<number>
		else if (typeof matrix.length !== 'number') throw new TypeError('matrix.length must be an integer')
		else if (length % 1 !== 0) throw new RangeError('matrix.length must be an integer')
		else if (length < 0) throw new RangeError('matrix.length must be greater than or equal to 0')
		else if (length !== rows * columns) throw new TypeError('matrix.length must equal rows * columns')
		
		// elements
		else if ((ArrayBuffer.isView(matrix) === true && (matrix instanceof DataView) === false) === false) { // TypedArray can only hold numbers
			for (let i = 0; i < length; i++) {
				if (typeof matrix[i] !== 'number') throw new TypeError('matrix must be an array of only numbers')
			}
		}
		
		return matrix
	}
}

/** @type {import('Matrix').isMatrix} */
export const isMatrix = matrix => {
	if (matrix === undefined) return false // matrix is not defined
	else if (typeof matrix !== 'object' ||
		matrix === null) return false
	
	// matrix has already been validated
	else if (/** Typescript will not accept matrixSymbol as a property key: @type {*} */ (matrix)[matrixSymbol] === true) return true
	
	else {
		const { columns, length, rows } = matrix
		
		// is rows an integer greater than or equal to 1
		if (rows === undefined || // matrix.rows is not defined
			typeof rows !== 'number' || // matrix.rows must be an integer
			rows % 1 !== 0 || // matrix.rows must be an integer
			rows < 1 || // matrix.rows must be greater than or equal to 1
		
		// is columns an integer greater than or equal to 1
			columns === undefined || // matrix.columns is not defined
			typeof columns !== 'number' || // matrix.columns must be an integer
			columns % 1 !== 0 || // matrix.columns must be an integer
			columns < 1 || // matrix.columns must be greater than or equal to 1
		
		// is matrix ArrayLike<number>
			typeof matrix.length !== 'number' || // matrix.length must be an integer
			length % 1 !== 0 || // matrix.length must be an integer
			length < 0 || // matrix.length must be greater than or equal to 0
			length !== rows * columns) return false // matrix.length must equal rows * columns
		
		// elements
		else if ((ArrayBuffer.isView(matrix) === true && (matrix instanceof DataView) === false) === false) { // TypedArray can only hold numbers
			for (let i = 0; i < length; i++) {
				if (typeof matrix[i] !== 'number') return false // matrix must be an array of only numbers
			}
		}
		
		return true
	}
}

/** @type {import('Matrix').add} */
export const add = (a, b, sum = newMatrix(a.rows, a.columns)) => {
	checkMatrix(a)
	checkMatrix(b)
	
	if (a.columns !== b.columns || a.rows !== b.rows) {
		throw new RangeError('The dimensions of a must equal the dimensions of b')
	}
	
	checkMatrix(sum)
	
	if (sum.columns !== a.columns || sum.rows !== a.rows) {
		throw new RangeError('The dimensions of the sum must equal the dimensions of a and b')
	}
	
	for (let i = 0; i < a.length; i++) {
		sum[i] = a[i] + b[i]
	}
	
	return sum
}

/** @type {import('Matrix').subtract} */
export const subtract = (a, b, difference = newMatrix(a.rows, a.columns)) => {
	checkMatrix(a)
	checkMatrix(b)
	
	if (a.columns !== b.columns || a.rows !== b.rows) {
		throw new RangeError('The dimensions of a must equal the dimensions of b')
	}
	
	checkMatrix(difference)
	
	if (difference.columns !== a.columns || difference.rows !== a.rows) {
		throw new RangeError('The dimensions of the difference must equal the dimensions of a and b')
	}
	
	for (let i = 0; i < a.length; i++) {
		difference[i] = a[i] - b[i]
	}
	
	return difference
}

/** @type {import('Matrix').multiplyScalar} */
export const multiplyScalar = (a, b, product = newMatrix(a.rows, a.columns, a)) => {
	checkMatrix(a)
	
	if (typeof b !== 'number') throw new TypeError('b must be a number')
	
	checkMatrix(product)
	
	if (product.rows !== a.rows || product.columns !== a.columns) {
		throw new Error('The dimensions of product must equal the dimensions of a')
	}
	
	for (let i = 0; i < product.length; i++) {
		product[i] *= b
	}
	
	return product
}

/** @type {import('Matrix').divideScalar} */
export const divideScalar = (a, b, quotient = newMatrix(a.rows, a.columns, a)) => {
	checkMatrix(a)
	
	if (typeof b !== 'number') throw new TypeError('b must be a number')
	
	checkMatrix(quotient)
	
	if (quotient.rows !== a.rows || quotient.columns !== a.columns) {
		throw new Error('The dimensions of quotient must equal the dimensions of a')
	}
	
	for (let i = 0; i < quotient.length; i++) {
		quotient[i] /= b
	}
	
	return quotient
}

/** @type {import('Matrix').multiplyMatrix} */
export const multiplyMatrix = (a, b, product = newMatrix(a.rows, b.columns)) => {
	checkMatrix(a)
	checkMatrix(b)
	
	if (a.columns !== b.rows) {
		throw new RangeError('Number of columns in a must be equal to the number of rows in b')
	}
	
	checkMatrix(product)
	
	if (product.rows !== a.rows || product.columns !== b.columns) {
		throw new Error('The dimensions of the product must equal (a rows) * (b columns)')
	}
	
	for (let i = 0; i < a.rows; i++) {
		for (let j = 0; j < b.columns; j++) {
			let sum = 0
			
			for (let k = 0; k < a.columns; k++) {
				sum += a[i * a.columns + k] * b[k * b.columns + j]
			}
			
			product[i * b.columns + j] = sum
		}
	}
	
	return product
}

/** @type {import('Matrix').rowSwitch} */
export const rowSwitch = (matrix, a, b, result = newMatrix(matrix.rows, matrix.columns, matrix)) => {
	if (a === b) return matrix
	
	checkMatrix(matrix)
	
	if (typeof a !== 'number') throw new TypeError('a must be an integer')
	if (a % 1 > 0) throw new RangeError('a must be an integer')
	if (a < 0 || a > matrix.rows - 1) throw new RangeError('a must be greater than or equal to 0 and less than matrix.rows')
	
	if (typeof b !== 'number') throw new TypeError('b must be an integer')
	if (b % 1 > 0) throw new RangeError('b must be an integer')
	if (b < 0 || b > matrix.rows - 1) throw new RangeError('b must be greater than or equal to 0 and less than matrix.rows')
	
	checkMatrix(result)
	
	if (result.columns !== matrix.columns || result.rows !== matrix.rows) {
		throw new RangeError('The dimensions of result must equal the dimensions of matrix')
	}
	
	const columns = matrix.columns
	
	for (let i = 0; i < columns; i++) {
		const n = matrix[a * columns + i]
		
		result[a * columns + i] = matrix[b * columns + i]
		result[b * columns + i] = n
	}
	
	return result
}

/** @type {import('Matrix').rowAdd} */
export const rowAdd = (matrix, a, b, n, result = newMatrix(matrix.rows, matrix.columns, matrix)) => {
	if (a === b) return matrix
	
	checkMatrix(matrix)
	
	if (typeof a !== 'number') throw new TypeError('a must be an integer')
	if (a % 1 > 0) throw new RangeError('a must be an integer')
	if (a < 0 || a > matrix.rows - 1) throw new RangeError('a must be greater than or equal to 0 and less than matrix.rows')
	
	if (typeof b !== 'number') throw new TypeError('b must be an integer')
	if (b % 1 > 0) throw new RangeError('b must be an integer')
	if (b < 0 || b > matrix.rows - 1) throw new RangeError('b must be greater than or equal to 0 and less than matrix.rows')
	
	if (typeof n !== 'number') throw new TypeError('n must be a number')
	
	checkMatrix(result)
	
	if (result.columns !== matrix.columns || result.rows !== matrix.rows) {
		throw new RangeError('The dimensions of result must equal the dimensions of matrix')
	}
	
	const columns = matrix.columns
	
	for (let i = 0; i < columns; i++) {
		result[b * columns + i] += matrix[a * columns + i] * n
	}
	
	return result
}

/** @type {import('Matrix').rowMultiply} */
export const rowMultiply = (matrix, a, n, result = newMatrix(matrix.rows, matrix.columns, matrix)) => {
	checkMatrix(matrix)
	
	if (typeof a !== 'number') throw new TypeError('a must be an integer')
	if (a % 1 > 0) throw new RangeError('a must be an integer')
	if (a < 0 || a > matrix.rows - 1) throw new RangeError('a must be greater than or equal to 0 and less than matrix.rows')
	
	if (typeof n !== 'number') throw new TypeError('n must be a number')
	
	checkMatrix(result)
	
	if (result.columns !== matrix.columns || result.rows !== matrix.rows) {
		throw new RangeError('The dimensions of result must equal the dimensions of matrix')
	}
	
	if (n === 1) return matrix
	
	const columns = matrix.columns
	
	for (let i = 0; i < columns; i++) {
		result[a * columns + i] *= n
	}
	
	return result
}

/** @type {import('Matrix').transpose} */
export const transpose = (matrix, transpose) => {
	checkMatrix(matrix)
	
	const { rows, columns } = matrix
	
	if (transpose === undefined) {
		transpose = newMatrix(columns, rows)
	} else {
		checkMatrix(transpose)
		
		if (transpose.rows !== columns || transpose.columns !== rows) {
			throw new Error('The dimensions of the transpose must equal (matrix.columns) * (matrix.rows)')
		}
	}
	
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			transpose[j * rows + i] = matrix[i * columns + j]
		}
	}
	
	return transpose
}

/** @type {import('Matrix').convertDOMMatrixToMatrix} */
export const convertDOMMatrixToMatrix = domMatrix => {
	if ((domMatrix instanceof DOMMatrix) === false) throw new TypeError('domMatrix must be an instance of DOMMatrix')
	
	const matrix = newMatrix(4, 4)
	
	for (let i = 0; i < matrix.rows; i++) {
		for (let j = 0; j < matrix.columns; j++) {
			matrix[i * matrix.columns + j] = /** String can not be used to index DOMMatrix: @type {*} */ (domMatrix)[`m${i + 1}${j + 1}`]
		}
	}
	
	return matrix
}

/** @type {import('Matrix').convertMatrixToDOMMatrix} */
export const convertMatrixToDOMMatrix = matrix => {
	checkMatrix(matrix)
	
	const domMatrix = new DOMMatrix(/** Can not convert Float64Array to number[]: @type {*} */ (matrix))
	
	return domMatrix
}

/** @type {import('Matrix').formatDataRowMajor} */
export const formatDataRowMajor = matrix => {
	checkMatrix(matrix)
	
	const data = new Array(matrix.rows)
	
	
	for (let i = 0; i < data.length; i++) {
		data[i] = []
	}
	
	for (let i = 0; i < matrix.rows; i++) {
		for (let j = 0; j < matrix.columns; j++) {
			data[i][j] = matrix[i * matrix.columns + j]
		}
	}
	
	return data
}

/** @type {import('Matrix').formatDataColumnMajor} */
export const formatDataColumnMajor = matrix => {
	checkMatrix(matrix)
	
	const data = new Array(matrix.columns)
	
	for (let i = 0; i < data.length; i++) {
		data[i] = []
	}
	
	for (let i = 0; i < matrix.rows; i++) {
		for (let j = 0; j < matrix.columns; j++) {
			data[j][i] = matrix[i * matrix.columns + j]
		}
	}
	
	return data
}