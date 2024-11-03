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
import { Matrix } from './Matrix.js'

export const switchColumns = function(a, b, result) {
	if ((this instanceof Matrix) === false) throw new TypeError(`this must be a Matrix instance: this = ${this}`)
	
	const { rows: thisRows, columns: thisColumns } = privateMap.get(this)
	
	if (a === undefined)
		throw new ReferenceError(`Argument #1 a must be an integer >= 0 and < this.columns (${thisColumns}): a = ${a}`)
	else if (typeof a !== 'number')
		throw new TypeError(`Argument #1 a must be an integer >= 0 and < this.columns (${thisColumns}): a = ${a}`)
	else if (a % 1 !== 0)
		throw new RangeError(`Argument #1 a must be an integer >= 0 and < this.columns (${thisColumns}): a = ${a}`)
	else if (a < 0 || a >= thisColumns)
		throw new RangeError(`Argument #1 a must be an integer >= 0 and < this.columns (${thisColumns}): a = ${a}`)
	
	if (b === undefined)
		throw new ReferenceError(`Argument #2 b must be an integer >= 0 and < this.columns (${thisColumns}): b = ${b}`)
	else if (typeof b !== 'number')
		throw new TypeError(`Argument #2 b must be an integer >= 0 and < this.columns (${thisColumns}): b = ${b}`)
	else if (b % 1 !== 0)
		throw new RangeError(`Argument #2 b must be an integer >= 0 and < this.columns (${thisColumns}): b = ${b}`)
	else if (b < 0 || b >= thisColumns)
		throw new RangeError(`Argument #2 b must be an integer >= 0 and < this.columns (${thisColumns}): b = ${b}`)
	
	else if (result !== undefined) {
		if ((result instanceof Matrix) === false)
			throw new TypeError(`Argument #3 result must be a Matrix instance: result = ${result}`)
		
		const { rows: resultRows, columns: resultColumns } = privateMap.get(result)
		
		if (resultRows !== thisRows)
			throw new RangeError(`result.rows must = this.rows: result.rows = ${resultRows}, this.rows = ${thisRows}`)
		else if (resultColumns !== thisColumns)
			throw new RangeError(`result.columns must = this.columns: result.columns = ${resultColumns}, this.columns = ${thisColumns}`)
	} else result = new Matrix(thisRows, thisColumns, this.data)
	
	for (let i = 0; i < thisRows; i++) {
		const n = this.data[i * thisColumns + a]
		
		result.data[i * thisColumns + a] = this.data[i * thisColumns + b]
		result.data[i * thisColumns + b] = n
	}
	
	return result
}

export const addColumnToColumn = function(a, b, n = 1, result) {
	if ((this instanceof Matrix) === false) throw new TypeError(`this must be a Matrix instance: this = ${this}`)
	
	const { rows: thisRows, columns: thisColumns } = privateMap.get(this)
	
	if (a === undefined)
		throw new ReferenceError(`Argument #1 a must be an integer >= 0 and < this.columns (${thisColumns}): a = ${a}`)
	else if (typeof a !== 'number')
		throw new TypeError(`Argument #1 a must be an integer >= 0 and < this.columns (${thisColumns}): a = ${a}`)
	else if (a % 1 !== 0)
		throw new RangeError(`Argument #1 a must be an integer >= 0 and < this.columns (${thisColumns}): a = ${a}`)
	else if (a < 0 || a >= thisColumns)
		throw new RangeError(`Argument #1 a must be an integer >= 0 and < this.columns (${thisColumns}): a = ${a}`)
	
	if (b === undefined)
		throw new ReferenceError(`Argument #2 b must be an integer >= 0 and < this.columns (${thisColumns}): b = ${b}`)
	else if (typeof b !== 'number')
		throw new TypeError(`Argument #2 b must be an integer >= 0 and < this.columns (${thisColumns}): b = ${b}`)
	else if (b % 1 !== 0)
		throw new RangeError(`Argument #2 b must be an integer >= 0 and < this.columns (${thisColumns}): b = ${b}`)
	else if (b < 0 || b >= thisColumns)
		throw new RangeError(`Argument #2 b must be an integer >= 0 and < this.columns (${thisColumns}): b = ${b}`)
	
	if (typeof n !== 'number')
		throw new TypeError(`Argument #3 n must be a number: n = ${n}`)
	
	else if (result !== undefined) {
		if ((result instanceof Matrix) === false)
			throw new TypeError(`Argument #4 result must be a Matrix instance: result = ${result}`)
		
		const { rows: resultRows, columns: resultColumns } = privateMap.get(result)
		
		if (resultRows !== thisRows)
			throw new RangeError(`result.rows must equal this.rows (${thisRows}): result.rows = ${resultRows}, this.rows = ${thisRows}`)
		else if (resultColumns !== thisColumns)
			throw new RangeError(`result.columns must equal this.columns (${thisColumns}): result.columns = ${resultColumns}, this.columns = ${thisColumns}`)
	} else result = new Matrix(thisRows, thisColumns, this.data)
	
	for (let i = 0; i < thisRows; i++) {
		result.data[i * thisColumns + b] = this.data[i * thisColumns + b] + this.data[i * thisColumns + a] * n
	}
	
	return result
}

export const multiplyColumn = function(column, n, result) {
	if ((this instanceof Matrix) === false) throw new TypeError(`this must be a Matrix instance: this = ${this}`)
	
	const { rows: thisRows, columns: thisColumns } = privateMap.get(this)
	
	if (column === undefined)
		throw new ReferenceError(`Argument #1 column must be an integer >= 0 and < this.columns (${thisColumns}): column = ${column}`)
	else if (typeof column !== 'number')
		throw new TypeError(`Argument #1 column must be an integer >= 0 and < this.columns (${thisColumns}): column = ${column}`)
	else if (column % 1 !== 0)
		throw new RangeError(`Argument #1 column must be an integer >= 0 and < this.columns (${thisColumns}): column = ${column}`)
	else if (column < 0 || column >= thisColumns)
		throw new RangeError(`Argument #1 column must be an integer >= 0 and < this.columns (${thisColumns}): column = ${column}`)
	
	else if (n === undefined) throw new ReferenceError(`Argument #2 n must be a number: n = ${n}`)
	else if (typeof n !== 'number')
		throw new TypeError(`Argument #2 n must be a number: n = ${n}`)
	
	else if (result !== undefined) {
		if ((result instanceof Matrix) === false)
			throw new TypeError(`Argument #3 result must be a Matrix instance: result = ${result}`)
		
		const { rows: resultRows, columns: resultColumns } = privateMap.get(result)
		
		if (resultRows !== thisRows)
			throw new RangeError(`result.rows must equal this.rows (${thisRows}): result.rows = ${resultRows}, this.rows = ${thisRows}`)
		else if (resultColumns !== thisColumns)
			throw new RangeError(`result.columns must equal this.columns (${thisColumns}): result.columns = ${resultColumns}, this.columns = ${thisColumns}`)
	} else result = new Matrix(thisRows, thisColumns, this.data)
	
	for (let i = 0; i < thisRows; i++) {
		result.data[i * thisColumns + column] = this.data[i * thisColumns + column] * n
	}
	
	return result
}

export const insertColumns = function(column, count, newData, result) {
	if ((this instanceof Matrix) === false) throw new TypeError(`this must be a Matrix instance: this = ${this}`)
	
	const { rows: thisRows, columns: thisColumns } = privateMap.get(this)
	
	if (column === undefined)
		throw new ReferenceError(`Argument #1 column must be an integer >= 0 and < this.columns (${thisColumns}): column = ${column}`)
	else if (typeof column !== 'number')
		throw new TypeError(`Argument #1 column must be an integer >= 0 and < this.columns (${thisColumns}): column = ${column}`)
	else if (column % 1 !== 0)
		throw new RangeError(`Argument #1 column must be an integer >= 0 and < this.columns (${thisColumns}): column = ${column}`)
	else if (column < 0 || column > thisColumns)
		throw new RangeError(`Argument #1 column must be an integer >= 0 and < this.columns (${thisColumns}): column = ${column}`)
	
	else if (count === undefined)
		throw new ReferenceError(`Argument #2 count must be an integer greater than or equal to 1: count = ${count}`)
	else if (typeof count !== 'number')
		throw new TypeError(`Argument #2 count must be an integer greater than or equal to 1: count = ${count}`)
	else if (count % 1 > 0)
		throw new RangeError(`Argument #2 count must be an integer greater than or equal to 1: count = ${count}`)
	else if (count < 1)
		throw new RangeError(`Argument #2 count must be an integer greater than or equal to 1: count = ${count}`)
	
	// is newData ArrayLike<number>
	else if (newData !== undefined) {
		if (typeof newData !== 'object' || newData === null)
			throw new TypeError((`Argument #3 newData must be an array like object containing only numbers: newData = ${newData}`))
		
		else if ((ArrayBuffer.isView(newData) === true && (newData instanceof DataView) === false) === false) {
			if (newData.length === undefined)
				throw new ReferenceError((`Argument #3 newData must be an array like object containing only numbers: newData.length = ${newData.length}`))
			else if (typeof newData.length !== 'number')
				throw new TypeError((`Argument #3 newData must be an array like object containing only numbers: newData.length = ${newData.length}`))
			
			for (let i = 0; i < newData.length; i++) {
				if (typeof newData[i] !== 'number')
					throw new TypeError((`Argument #3 newData must be an array like object containing only numbers: newData[i] = ${newData[i]}`))
			}
		}
	}

	if (result !== undefined) {
		if ((result instanceof Matrix) === false)
			throw new TypeError(`Argument #4 result must be a Matrix instance: result = ${result}`)
		
		const { rows: resultRows, columns: resultColumns } = privateMap.get(result)
		
		if (resultRows !== thisRows)
			throw new RangeError(`result.rows must equal this.rows (${thisRows}): result.rows = ${resultRows}, this.rows = ${thisRows}`)
		else if (resultColumns !== thisColumns + count)
			throw new RangeError(`result.columns must equal this.columns + count (${thisColumns + count}): result.columns = ${resultColumns}, this.columns = ${thisColumns}`)
	} else result = new Matrix(thisRows, thisColumns + count)
	
	if (count <= 0) return result
	
	if (newData === undefined) {
		newData = []
	}
	
	for (let i = newData.length; i < thisRows * count; i++) {
		newData[i] = 0
	}
	
	let newColumns = thisColumns + count
	
	for (let i = 0; i < thisRows; i++) {
		let j2 = 0
		let j3 = 0
		
		for (let j = 0; j < newColumns; j++) {
			if (j >= column && j < column + count) {
				result.data[i * newColumns + j] = newData[i * count + j3]
				
				j3++
			} else {
				result.data[i * newColumns + j] = this.data[i * thisColumns + j2]
				
				j2++
			}
		}
	}
	
	return result
}

export const removeColumns = function(column, count, result) {
	if ((this instanceof Matrix) === false) throw new TypeError(`this must be a Matrix instance: this = ${this}`)
	
	const { rows: thisRows, columns: thisColumns } = privateMap.get(this)
	
	if (column === undefined)
		throw new ReferenceError(`Argument #1 column must be an integer >= 0 and < this.columns (${thisColumns}): column = ${column}`)
	else if (typeof column !== 'number')
		throw new TypeError(`Argument #1 column must be an integer >= 0 and < this.columns (${thisColumns}): column = ${column}`)
	else if (column % 1 !== 0)
		throw new RangeError(`Argument #1 column must be an integer >= 0 and < this.columns (${thisColumns}): column = ${column}`)
	else if (column < 0 || column > thisColumns)
		throw new RangeError(`Argument #1 column must be an integer >= 0 and < this.columns (${thisColumns}): column = ${column}`)
	
	else if (count === undefined)
		throw new ReferenceError(`Argument #2 count must be an integer >= 1 or < this.columns - column: count = ${count}`)
	else if (typeof count !== 'number')
		throw new TypeError(`Argument #2 count must be an integer >= 1 or < this.columns - column: count = ${count}`)
	else if (count % 1 > 0)
		throw new RangeError(`Argument #2 count must be an integer >= 1 or < this.columns - column: count = ${count}`)
	else if (count < 1 || count > thisColumns - column)
		throw new RangeError(`Argument #2 count must be an integer >= 1 or < this.columns - column: count = ${count}`)
	
	if (result !== undefined) {
		if ((result instanceof Matrix) === false)
			throw new TypeError(`Argument #4 result must be a Matrix instance: result = ${result}`)
		
		const { rows: resultRows, columns: resultColumns } = privateMap.get(result)
		
		if (resultRows !== thisRows)
			throw new RangeError(`result.rows must equal this.rows (${thisRows}): result.rows = ${resultRows}, this.rows = ${thisRows}`)
		else if (resultColumns !== thisColumns - count)
			throw new RangeError(`result.columns must equal this.columns - count (${thisColumns - count}): result.columns = ${resultColumns}, this.columns = ${thisColumns}`)
	} else result = new Matrix(thisRows, thisColumns - count)
	
	if (count <= 0) return result
	
	let j2 = 0
	
	for (let i = 0; i < thisRows; i++) {
		for (let j = 0; j < thisColumns; j++) {
			if (j >= column && j < column + count) continue
			else {
				result.data[j2] = this.data[i * thisColumns + j]
				
				j2++
			}
		}
	}
	
	return result
}