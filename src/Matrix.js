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
import { add, multiplyMatrix, multiplyScalar, subtract, transpose } from './math.js'
import { addRowToRow, insertRows, multiplyRow, removeRows, switchRows } from './row.js'
import { addColumnToColumn, insertColumns, multiplyColumn, removeColumns, switchColumns } from './column.js'

// TypedArrays can not be resized or accept non-numbers so its ok to make public, length will always be rows * columns
// ArrayBuffer therefore can not be resizable
// changing rows or columns must return new Matrix or mutate an existing one with dimensions >= the new dimensions
// rows and columns must be private
export const Matrix = function(rows, columns, data) {
	if ((this instanceof Matrix) === false)
		throw new SyntaxError('Matrix must be called with the new operator')
	
	else if (rows === undefined)
		throw new ReferenceError(`Argument #1 rows must be an integer and greater than or equal to 1: rows = ${rows}`)
	else if (typeof rows !== 'number')
		throw new TypeError(`Argument #1 rows must be an integer and greater than or equal to 1: rows = ${rows}`)
	else if (rows % 1 !== 0)
		throw new RangeError(`Argument #1 rows must be an integer and greater than or equal to 1: rows = ${rows}`)
	else if (rows < 1)
		throw new RangeError(`Argument #1 rows must be an integer and greater than or equal to 1: rows = ${rows}`)
	
	else if (columns === undefined)
		throw new ReferenceError(`Argument #2 columns must be an integer and greater than or equal to 1: columns = ${columns}`)
	else if (typeof columns !== 'number')
		throw new TypeError(`Argument #2 columns must be an integer and greater than or equal to 1: columns = ${columns}`)
	else if (columns % 1 !== 0)
		throw new RangeError(`Argument #2 columns must be an integer and greater than or equal to 1: columns = ${columns}`)
	else if (columns < 1)
		throw new RangeError(`Argument #2 columns must be an integer and greater than or equal to 1: columns = ${columns}`)
	
	if (data !== undefined) {
		if (typeof data === 'number') {
			const array = new Float64Array(rows * columns)
			
			for (let i = 0; i < array.length; i++) {
				array[i] = data
			}
			
			data = array
		} else if (data instanceof Array) {
			const array = new Float64Array(rows * columns)
			const length = Math.min(data.length, array.length)
			
			for (let i = 0; i < length; i++) {
				if (typeof data[i] !== 'number') throw new TypeError(`Argument #3 data must be a number, an Array of numbers of any length or a Float64Array where data.length must === rows * columns (${rows * columns}) and data.buffer.resizable must === false: data[i] = ${data[i]}`)
				
				array[i] = data[i]
			}
			
			data = array
		} else if ((data instanceof Float64Array) === false)
			throw new TypeError(`Argument #3 data must be a number, an Array of numbers of any length or a Float64Array where data.length must === rows * columns (${rows * columns}) and data.buffer.resizable must === false: data = ${data}`)
		else if (data.length !== rows * columns)	
			throw new TypeError(`Argument #3 data must be a number, an Array of numbers of any length or a Float64Array where data.length must === rows * columns (${rows * columns}) and data.buffer.resizable must === false: data.length = ${data.length}`)
		else if (data.buffer.resizable === true)	
			throw new TypeError(`Argument #3 data must be a number, an Array of numbers of any length or a Float64Array where data.length must === rows * columns (${rows * columns}) and data.buffer.resizable must === false: data.buffer.resizable = ${data.buffer.resizable}`)
	} else data = new Float64Array(rows * columns)
	
	// private rows, columns
	privateMap.set(this, { rows, columns })
	
	// readonly data
	Object.defineProperty(this, 'data', {
		configurable: false,
		enumerable: true,
		value: data,
		writable: false
	})
	
	return this
}

const to2DArrayRowMajor = function() {
	if ((this instanceof Matrix) === false)
		throw new TypeError(`this must be a Matrix instance: this = ${this}`)
	
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
	if ((this instanceof Matrix) === false)
		throw new TypeError(`this must be a Matrix instance: this = ${this}`)
	
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