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

const DOMMatrixKeys = ['a', 'b', 'c', 'd', 'e', 'f']
for (let i = 1; i < 5; i++) {
	for (let j = 1; j < 5; j++) {
		DOMMatrixKeys.push(`m${i}${j}`)
	}
}

/** @type {import('Matrix').checkDOMMatrix} */
const checkDOMMatrix = domMatrix => {
	if (domMatrix === undefined) throw new ReferenceError('domMatrix must be defined')
	else if (typeof DOMMatrix === 'function' && (domMatrix instanceof globalThis.DOMMatrix) === true) return domMatrix // validated
	else if (typeof domMatrix !== 'object' || domMatrix === null) throw new TypeError('domMatrix must be an object or array')
	else if (domMatrix.is2D === undefined) throw new ReferenceError('domMatrix.is2D must be defined')
	else if (typeof domMatrix.is2D !== 'boolean') throw new TypeError('domMatrix.is2D must be true or false')
	else if (domMatrix.isIdentity === undefined) throw new ReferenceError('domMatrix.isIdentity must be defined')
	else if (typeof domMatrix.isIdentity !== 'boolean') throw new TypeError('domMatrix.isIdentity must be true or false')
	
	for (let i = 0; i < DOMMatrixKeys.length; i++) {
		if ( /** String can not be used to index DOMMatrix @type {*} */ (domMatrix)[DOMMatrixKeys[i]] === undefined) throw new ReferenceError(`domMatrix[${DOMMatrixKeys[i]}] must be defined`)
		else if (typeof /** String can not be used to index DOMMatrix  @type {*} */ (domMatrix)[DOMMatrixKeys[i]] !== 'number') throw new TypeError(`domMatrix[${DOMMatrixKeys[i]}] must be a number`)
	}
	
	return domMatrix
}

/** type {WeakSet<Matrix>} */
const validSet = new WeakSet

/** 
 * Creates a Float64Array instance that fits the Matrix inteface.
 * Arguments rows and columns are required and the corresponding properties of the created Matrix are non-configurable and read-only.
 * Arguments data, buffer and byteOffset are optional.
 * The matrix will be filled with the elements contained in data.
 * The length of the data array may be greater or less than the length of the created Matrix.
 * The buffer length minus byteOffset must be long enough to contain the Matrix.
 * 
 * @type {import('Matrix').newMatrix}
 */
export const newMatrix = (rows, columns, data, buffer = new ArrayBuffer(rows * columns * 8), byteOffset = 0) => {
	if (rows === undefined) throw new ReferenceError('rows must be defined')
	else if (typeof rows !== 'number') throw new TypeError('rows must be a number')
	else if (rows % 1 !== 0) throw new RangeError('rows must be an integer')
	else if (rows < 1) throw new RangeError('rows must be greater than or equal to 1')
	
	else if (columns === undefined) throw new ReferenceError('columns must be defined')
	else if (typeof columns !== 'number') throw new TypeError('columns must be a number')
	else if (columns % 1 !== 0) throw new RangeError('columns must be an integer')
	else if (columns < 1) throw new RangeError('columns must be greater than or equal to 1')
	
	else if (data !== undefined) {
		if (typeof data !== 'object' || data === null) throw new TypeError('data must be an object or array')
		else if (data.length === undefined) throw new ReferenceError('data.length must be defined')
		else if (typeof data.length !== 'number') throw new TypeError('data.length must be a number')
		for (let i = 0; i < data.length; i++) {
			if (typeof data[i] !== 'number') throw new TypeError(`data[${i}] must be a number`)
		}
	}
	
	if ((buffer instanceof ArrayBuffer) !== true) throw new TypeError('buffer must be an ArrayBuffer')
	else if (buffer.byteLength < rows * columns * 8) throw new RangeError('buffer.byteLength must be greater than or equal to the byteLength required to store the whole matrix (rows * columns * 8)')
	else if (typeof byteOffset !== 'number') throw new TypeError('byteOffset must be a number')
	else if (buffer.byteLength - byteOffset < (rows * columns * 8)) throw new RangeError('buffer.byteLength minus byteOffset must be less than or equal to the byteLength required to store the whole matrix (rows * columns * 8)')
	
	const matrix = { data: new Float64Array(buffer, byteOffset, rows * columns), rows, columns }
	
	if (data !== undefined) {
		const length = Math.min(data.length, matrix.data.length)
		
		for (let i = 0; i < length; i++) {
			matrix.data[i] = data[i]
		}
	}
	
	// readonly matrix.rows = rows
	Object.defineProperty(matrix, 'rows', {
		value: rows,
		configurable: false,
		enumerable: true,
		writable: false
	})
	
	// readonly matrix.columns = columns
	Object.defineProperty(matrix, 'columns', {
		value: columns,
		configurable: false,
		enumerable: true,
		writable: false
	})
	
	// validated
	validSet.add(matrix)
	
	return matrix
}

/** @type {import('Matrix').checkMatrix} */
export const checkMatrix = matrix => {
	if (matrix === undefined) throw new ReferenceError('matrix must be defined')
	else if (typeof matrix !== 'object' ||
		matrix === null) throw new TypeError('matrix must be an object or array')
	
	// matrix has already been validated
	else if (validSet.has(matrix) === true) return matrix
	
	else {
		const { columns, data, rows } = matrix
		
		// is rows an integer greater than or equal to 1
		if (rows === undefined) throw new ReferenceError('matrix.rows must be defined')
		else if (typeof rows !== 'number') throw new TypeError('matrix.rows must be a number')
		else if (rows % 1 !== 0) throw new RangeError('matrix.rows must be an integer')
		else if (rows < 1) throw new RangeError('matrix.rows must be greater than or equal to 1')
		
		// is columns an integer greater than or equal to 1
		else if (columns === undefined) throw new ReferenceError('matrix.columns must be defined')
		else if (typeof columns !== 'number') throw new TypeError('matrix.columns must be a number')
		else if (columns % 1 !== 0) throw new RangeError('matrix.columns must be an integer')
		else if (columns < 1) throw new RangeError('matrix.columns must be greater than or equal to 1')
		
		// is matrix.data ArrayLike<number>
		else if (data === undefined) throw new ReferenceError('matrix.data must be defined')
		else if (typeof data !== 'object' ||
			data === null) throw new TypeError('matrix.data must be an object or array')
		else if (data.length === undefined) throw new ReferenceError('matrix.data.length must be defined')
		else if (typeof data.length !== 'number') throw new TypeError('matrix.data.length must be a number')
		else if (data.length !== rows * columns) throw new RangeError('matrix.data.length must equal rows * columns')
		
		// elements
		else if ((ArrayBuffer.isView(data) === true && (data instanceof DataView) === false) === false) { // matrix.data is not TypedArray
			for (let i = 0; i < data.length; i++) {
				if (typeof data[i] !== 'number') throw new TypeError(`matrix.data[${i}] must be a number`)
			}
		}
		
		return matrix
	}
}

/** @type {import('Matrix').isMatrix} */
export const isMatrix = matrix => {
	if (matrix === undefined) return false // matrix is not defined
	else if (typeof matrix !== 'object' ||
		matrix === null) return false // matrix is not an object or array
	
	// matrix has already been validated
	else if (validSet.has(matrix) === true) return true
	
	else {
		const { columns, data, rows } = matrix
		
		// is rows an integer greater than or equal to 1
		if (rows === undefined || // matrix.rows is not defined
			typeof rows !== 'number' || // matrix.rows is not an integer
			rows % 1 !== 0 || // matrix.rows is not an integer
			rows < 1 || // matrix.rows is less than 1
		
		// is columns an integer greater than or equal to 1
			columns === undefined || // matrix.columns is not defined
			typeof columns !== 'number' || // matrix.columns is not an integer
			columns % 1 !== 0 || // matrix.columns is not an integer
			columns < 1 || // matrix.columns is less than 1
		
		// is matrix ArrayLike<number>
			data === undefined || // data.matrix is not defined
			typeof data !== 'object' || data === null || // data.matrix is not an object or array
			data.length === undefined || // matrix.data.length is not defined
			typeof data.length !== 'number' || // matrix.data.length is not a number
			data.length !== rows * columns) return false // matrix.data.length does not equal rows * columns
		
		// elements
		else if ((ArrayBuffer.isView(data) === true && (data instanceof DataView) === false) === false) { // matrix.data is not TypedArray
			for (let i = 0; i < data.length; i++) {
				if (typeof data[i] !== 'number') return false // matrix.data is not an array of only numbers
			}
		}
		
		return true
	}
}

/** @type {import('Matrix').add} */
export const add = (a, b, result = []) => {
	checkMatrix(a)
	checkMatrix(b)
	
	if (a.columns !== b.columns || a.rows !== b.rows) throw new RangeError('The dimensions of a must equal the dimensions of b')
	
	else if (typeof result !== 'object' || result === null) throw new TypeError('result must be an object or array')
	
	for (let i = 0; i < a.data.length; i++) {
		result[i] = a.data[i] + b.data[i]
	}
	
	return result
}

/** @type {import('Matrix').subtract} */
export const subtract = (a, b, result = []) => {
	checkMatrix(a)
	checkMatrix(b)
	
	if (a.columns !== b.columns || a.rows !== b.rows) throw new RangeError('The dimensions of a must equal the dimensions of b')
	
	else if (typeof result !== 'object' || result === null) throw new TypeError('result must be an object or array')
	
	for (let i = 0; i < a.data.length; i++) {
		result[i] = a.data[i] - b.data[i]
	}
	
	return result
}

/** @type {import('Matrix').multiplyScalar} */
export const multiplyScalar = (a, b, result = []) => {
	checkMatrix(a)
	
	if (b === undefined) throw new ReferenceError('b must be defined')
	else if (typeof b !== 'number') throw new TypeError('b must be a number')
	
	else if (typeof result !== 'object' || result === null) throw new TypeError('result must be an object or array')
	
	for (let i = 0; i < a.data.length; i++) {
		result[i] = a.data[i] * b
	}
	
	return result
}

/** @type {import('Matrix').divideScalar} */
export const divideScalar = (a, b, result = []) => {
	checkMatrix(a)
	
	if (b === undefined) throw new ReferenceError('b must be defined')
	else if (typeof b !== 'number') throw new TypeError('b must be a number')
	
	else if (typeof result !== 'object' || result === null) throw new TypeError('result must be an object or array')
	
	for (let i = 0; i < a.data.length; i++) {
		result[i] = a.data[i] / b
	}
	
	return result
}

/** @type {import('Matrix').multiplyMatrix} */
export const multiplyMatrix = (a, b, result = []) => {
	checkMatrix(a)
	checkMatrix(b)
	
	if (a.columns !== b.rows) throw new RangeError('Number of columns in a must be equal to the number of rows in b')
	
	else if (typeof result !== 'object' || result === null) throw new TypeError('result must be an object or array')
	
	for (let i = 0; i < a.rows; i++) {
		for (let j = 0; j < b.columns; j++) {
			let sum = 0
			
			for (let k = 0; k < a.columns; k++) {
				sum += a.data[i * a.columns + k] * b.data[k * b.columns + j]
			}
			
			result[i * b.columns + j] = sum
		}
	}
	
	return result
}

/** @type {import('Matrix').rowSwitch} */
export const rowSwitch = (matrix, a, b, result = []) => {
	checkMatrix(matrix)
	
	if (a === undefined) throw new ReferenceError('a must be defined')
	else if (typeof a !== 'number') throw new TypeError('a must be a number')
	else if (a % 1 !== 0) throw new RangeError('a must be an integer')
	else if (a < 0 || a > matrix.rows - 1) throw new RangeError('a must be greater than or equal to 0 and less than matrix.rows')
	
	else if (b === undefined) throw new ReferenceError('b must be defined')
	else if (typeof b !== 'number') throw new TypeError('b must be a number')
	else if (b % 1 !== 0) throw new RangeError('b must be an integer')
	else if (b < 0 || b > matrix.rows - 1) throw new RangeError('b must be greater than or equal to 0 and less than matrix.rows')
	
	else if (typeof result !== 'object' || result === null) throw new TypeError('result must be an object or array')
	
	for (let i = 0; i < matrix.data.length; i++) {
		result[i] = matrix.data[i]
	}
	
	const columns = matrix.columns
	
	for (let i = 0; i < columns; i++) {
		const n = matrix.data[a * columns + i]
		
		result[a * columns + i] = matrix.data[b * columns + i]
		result[b * columns + i] = n
	}
	
	return result
}

/** @type {import('Matrix').rowAdd} */
export const rowAdd = (matrix, a, b, n, result = []) => {
	checkMatrix(matrix)
	
	if (a === undefined) throw new ReferenceError('a must be defined')
	else if (typeof a !== 'number') throw new TypeError('a must be a number')
	else if (a % 1 > 0) throw new RangeError('a must be an integer')
	else if (a < 0 || a > matrix.rows - 1) throw new RangeError('a must be greater than or equal to 0 and less than matrix.rows')
	
	else if (b === undefined) throw new ReferenceError('b must be defined')
	else if (typeof b !== 'number') throw new TypeError('b must be a number')
	else if (b % 1 > 0) throw new RangeError('b must be an integer')
	else if (b < 0 || b > matrix.rows - 1) throw new RangeError('b must be greater than or equal to 0 and less than matrix.rows')
	
	else if (n === undefined) throw new ReferenceError('n must be defined')
	else if (typeof n !== 'number') throw new TypeError('n must be a number')
	
	else if (typeof result !== 'object' || result === null) throw new TypeError('result must be an object or array')
	
	for (let i = 0; i < matrix.data.length; i++) {
		result[i] = matrix.data[i]
	}
	
	const columns = matrix.columns
	
	for (let i = 0; i < columns; i++) {
		result[b * columns + i] = matrix.data[b * columns + i] + matrix.data[a * columns + i] * n
	}
	
	return result
}

/** @type {import('Matrix').rowMultiply} */
export const rowMultiply = (matrix, a, n, result = []) => {
	checkMatrix(matrix)
	
	if (a === undefined) throw new ReferenceError('a must be defined')
	else if (typeof a !== 'number') throw new TypeError('a must be a number')
	else if (a % 1 > 0) throw new RangeError('a must be an integer')
	else if (a < 0 || a > matrix.rows - 1) throw new RangeError('a must be greater than or equal to 0 and less than matrix.rows')
	
	else if (n === undefined) throw new ReferenceError('n must be defined')
	else if (typeof n !== 'number') throw new TypeError('n must be a number')
	
	else if (typeof result !== 'object' || result === null) throw new TypeError('result must be an object or array')
	
	for (let i = 0; i < matrix.data.length; i++) {
		result[i] = matrix.data[i]
	}
	
	const columns = matrix.columns
	
	for (let i = 0; i < columns; i++) {
		result[a * columns + i] = matrix.data[a * columns + i] * n
	}
	
	return result
}

/** @type {import('Matrix').transpose} */
export const transpose = (matrix, result = []) => {
	checkMatrix(matrix)
	
	if (typeof result !== 'object' || result === null) throw new TypeError('result must be an object or array')
	
	const { rows, columns } = matrix
	
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			result[j * rows + i] = matrix.data[i * columns + j]
		}
	}
	
	return result
}

/** @type {import('Matrix').convertDOMMatrixToMatrix} */
export const convertDOMMatrixToMatrix = domMatrix => {
	checkDOMMatrix(domMatrix)
	
	const matrix = newMatrix(4, 4)
	
	for (let i = 0; i < matrix.rows; i++) {
		for (let j = 0; j < matrix.columns; j++) {
			matrix.data[i * matrix.columns + j] = /** String can not be used to index DOMMatrix: @type {*} */ (domMatrix)[`m${i + 1}${j + 1}`]
		}
	}
	
	return matrix
}

/** @type {import('Matrix').convertMatrixToDOMMatrix} */
export const convertMatrixToDOMMatrix = matrix => {
	checkMatrix(matrix)
	
	if (matrix.rows !== 4) throw new RangeError('matrix.rows must equal 4')
	else if (matrix.columns !== 4) throw new RangeError('matrix.columns must equal 4')
	
	let domMatrix
	
	if (typeof DOMMatrix === 'function') domMatrix = new DOMMatrix(/** ArrayLikeNumber is missing Array functions @type {*} */ (matrix.data))
	else {
		domMatrix = {
			is2D: false,
			isIdentity: true,
			a: 0,
			b: 0,
			c: 0,
			d: 0,
			e: 0,
			f: 0,
			m11: 0,
			m12: 0,
			m13: 0,
			m14: 0,
			m21: 0,
			m22: 0,
			m23: 0,
			m24: 0,
			m31: 0,
			m32: 0,
			m33: 0,
			m34: 0,
			m41: 0,
			m42: 0,
			m43: 0,
			m44: 0
		}
		
		for (let i = 0; i < matrix.rows; i++) {
			for (let j = 0; j < matrix.columns; j++) {
				/** String can not be used to index DOMMatrix: @type {*} */ (domMatrix)[`m${i + 1}${j + 1}`] = matrix.data[i * matrix.columns + j]
				
				if (i === j && matrix.data[i * matrix.columns + j] !== 1) domMatrix.isIdentity = false
				else if (i !== j && matrix.data[i * matrix.columns + j] !== 0) domMatrix.isIdentity = false
			}
		}
		
		domMatrix.a = domMatrix.m11
		domMatrix.b = domMatrix.m12
		domMatrix.c = domMatrix.m21
		domMatrix.d = domMatrix.m22
		domMatrix.e = domMatrix.m41
		domMatrix.f = domMatrix.m42
	}
	
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
			data[i][j] = matrix.data[i * matrix.columns + j]
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
			data[j][i] = matrix.data[i * matrix.columns + j]
		}
	}
	
	return data
}