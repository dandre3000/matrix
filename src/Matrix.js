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
 */

import { privateMap } from './common.js'
import { add, multiplyMatrix, multiplyScalar, subtract } from './math.js'
import { addRowToRow, insertRows, multiplyRow, removeRows, switchRows } from './row.js'
import { addColumnToColumn, insertColumns, multiplyColumn, removeColumns, switchColumns } from './column.js'

// TypedArrays can not be resized so its ok to make public, length will always be rows * columns
// ArrayBuffer therefore can not be resizable
// changing rows or columns must return new Matrix or mutate an existing one with dimensions >= the new dimensions
// rows and columns must be private
export const Matrix = function(rows, columns, dataOrOptions, options) {
	if ((this instanceof Matrix) === false) throw new SyntaxError('Matrix must be called with the new operator')
	
	else if (rows === undefined) throw new ReferenceError(`Argument #1 rows must be an integer and greater than or equal to 1: rows = ${rows}`)
	else if (typeof rows !== 'number') throw new TypeError(`Argument #1 rows must be an integer and greater than or equal to 1: rows = ${rows}`)
	else if (rows % 1 !== 0) throw new RangeError(`Argument #1 rows must be an integer and greater than or equal to 1: rows = ${rows}`)
	else if (rows < 1) throw new RangeError(`Argument #1 rows must be an integer and greater than or equal to 1: rows = ${rows}`)
	
	else if (columns === undefined) throw new ReferenceError(`Argument #2 columns must be an integer and greater than or equal to 1: columns = ${columns}`)
	else if (typeof columns !== 'number') throw new TypeError(`Argument #2 columns must be an integer and greater than or equal to 1: columns = ${columns}`)
	else if (columns % 1 !== 0) throw new RangeError(`Argument #2 columns must be an integer and greater than or equal to 1: columns = ${columns}`)
	else if (columns < 1) throw new RangeError(`Argument #2 columns must be an integer and greater than or equal to 1: columns = ${columns}`)
	
	let data
	let buffer
	let byteOffset
	
	// Matrix(rows, columns, data, options)
	if (options !== undefined) {
		// must be data
		data = dataOrOptions
		
		if (data === null || typeof data !== 'object')
			throw new TypeError(`Argument #3 data must be an array of numbers: data = ${data}`)
		
		else if ((ArrayBuffer.isView(data) === true && (data instanceof DataView) === false) === false) {
			if (data.length === undefined)
				throw new TypeError(`Argument #3 data must be an array of numbers: data = ${data}`)
			if (typeof data.length !== 'number')
				throw new TypeError(`Argument #3 data must be an array of numbers: data = ${data}`)
			
			for (let i = 0; i < data.length; i++) {
				if (typeof data[i] !== 'number')
				throw new TypeError(`Argument #3 data must be an array of numbers: data = ${data}`)
			}
		}
		
		if (options === null || typeof options !== 'object')
			throw new TypeError(`Argument #4 options must be an object: options = ${options}`)
		
		// get options
		buffer = options.buffer
		byteOffset = options.byteOffset
		
	// (rows, columns, dataOrOptions)
	} else if (dataOrOptions !== undefined) {
		if (dataOrOptions === null || typeof dataOrOptions !== 'object')
			throw new TypeError(`Argument #3 dataOrOptions must be an object or an array of numbers: dataOrOptions = ${dataOrOptions}`)
		
		else if (dataOrOptions.length === undefined) {
			options = dataOrOptions
			
			// get options
			buffer = options.buffer
			byteOffset = options.byteOffset
			
		// data if length property exists
		} else {
			data = dataOrOptions
			
			if (data === null || typeof data !== 'object')
					throw new TypeError(`Argument #3 dataOrOptions must be an object or an array of numbers: dataOrOptions = ${dataOrOptions}`)
			else if (typeof data.length !== 'number')
					throw new TypeError(`Argument #3 dataOrOptions must be an object or an array of numbers: dataOrOptions.length = ${dataOrOptions.length}`)
			
			for (let i = 0; i < data.length; i++) {
				if (typeof data[i] !== 'number')
					throw new TypeError(`Argument #3 dataOrOptions must be an object or an array of numbers: dataOrOptions[i] = ${dataOrOptions[i]}`)
			}
		}
	}
	
	if (buffer !== undefined) {
		if ((buffer instanceof ArrayBuffer) === false)
			throw new TypeError(`options.buffer must be an ArrayBuffer instance with a fixed byteLength greater than or equal to data.length * 8 (${rows * columns * 8}): options.buffer = ${buffer}`)
		else if (buffer.byteLength < rows * columns * 8)
			throw new RangeError(`options.buffer must be an ArrayBuffer instance with a fixed byteLength greater than or equal to data.length * 8 (${rows * columns * 8}): options.buffer.byteLength = ${buffer.byteLength}`)
		else if (buffer.resizable === true)
			throw new RangeError(`options.buffer must be an ArrayBuffer instance with a fixed byteLength greater than or equal to data.length * 8 (${rows * columns * 8}): options.buffer.resizable = ${buffer.resizable}`)
	} else buffer = new ArrayBuffer(rows * columns * 8)
	
	if (byteOffset !== undefined) {
		if (typeof byteOffset !== 'number') throw new TypeError(`options.byteOffset must be a multiple of 8, at least 0, and less than or equal to buffer.byteLength - data.length * 8 (${buffer.byteLength - rows * columns * 8}): options.byteOffset = ${byteOffset}`)
		else if (byteOffset % 8 > 0 || byteOffset < 0 || buffer.byteLength - byteOffset < rows * columns * 8) throw new RangeError(`options.byteOffset must be a multiple of 8, at least 0, and less than or equal to buffer.byteLength - data.length * 8 (${buffer.byteLength - rows * columns * 8}): options.byteOffset = ${byteOffset}`)
	}
	
	// private rows, columns
	privateMap.set(this, { rows, columns })
	
	// readonly data
	Object.defineProperty(this, 'data', {
		configurable: false,
		enumerable: true,
		value: new Float64Array(buffer, byteOffset, rows * columns),
		writable: false
	})
	
	// partial fill if length !== this.data.length
	if (data !== undefined) {
		const length = Math.min(data.length, rows * columns)
		
		for (let i = 0; i < length; i++) {
			this.data[i] = data[i]
		}
	}
	
	return this
}

const transpose = function(result) {
	if ((this instanceof Matrix) === false) throw new TypeError(`this must be a Matrix instance: this = ${this}`)
	
	const { rows: thisRows, columns: thisColumns } = privateMap.get(this)
	
	if (result !== undefined) {
		if ((result instanceof Matrix) === false)
			throw new TypeError(`Argument #1 result must be a Matrix instance: result = ${result}`)
		
		const { rows: resultRows, columns: resultColumns } = privateMap.get(result)
		
		if (resultRows !== thisRows)
			throw new RangeError(`result.rows must equal this.rows: result.rows = ${resultRows}, this.rows = ${thisRows}`)
		else if (resultColumns !== thisColumns)
			throw new RangeError(`result.columns must equal this.columns: result.columns = ${resultColumns}, this.columns = ${thisColumns}`)
	} else result = new Matrix(thisRows, thisColumns)
	
	for (let i = 0; i < thisRows; i++) {
		for (let j = 0; j < thisColumns; j++) {
			result.data[j * thisRows + i] = this.data[i * thisColumns + j]
		}
	}
	
	return result
}

const to2DArrayRowMajor = function() {
	if ((this instanceof Matrix) === false) throw new TypeError(`this must be a Matrix instance: this = ${this}`)
	
	const { rows: thisRows, columns: thisColumns } = privateMap.get(this)
	const array = new Array(thisRows)
	
	for (let i = 0; i < thisRows; i++) {
		array[i] = []
		
		for (let j = 0; j < thisColumns; j++) {
			array[i][j] = this.data[i * thisColumns + j]
		}
	}
	
	return array
}

const to2DArrayColumnMajor = function() {
	if ((this instanceof Matrix) === false) throw new TypeError(`this must be a Matrix instance: this = ${this}`)
	
	const { rows: thisRows, columns: thisColumns } = privateMap.get(this)
	const array = new Array(thisColumns)
	
	for (let i = 0; i < thisColumns; i++) {
		array[i] = []
	}
	
	for (let i = 0; i < thisRows; i++) {
		for (let j = 0; j < thisColumns; j++) {
			array[j][i] = this.data[i * thisColumns + j]
		}
	}
	
	return array
}

Matrix.prototype = {
	get rows() { return privateMap.get(this).rows },
	get columns() { return privateMap.get(this).columns },
	add,
	addColumnToColumn,
	addRowToRow,
	insertColumns,
	insertRows,
	multiplyColumn,
	multiplyMatrix,
	multiplyRow,
	multiplyScalar,
	removeColumns,
	removeRows,
	subtract,
	switchColumns,
	switchRows,
	to2DArrayColumnMajor,
	to2DArrayRowMajor,
	transpose
}