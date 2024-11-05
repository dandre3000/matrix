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

export const switchRows = function(a, b, result) {
	const { rows: thisRows, columns: thisColumns } = privateMap.get(this)
	
	if (a === undefined)
		throw new ReferenceError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${thisRows}): a = ${a}`)
	else if (typeof a !== 'number')
		throw new TypeError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${thisRows}): a = ${a}`)
	else if (a % 1 !== 0)
		throw new RangeError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${thisRows}): a = ${a}`)
	else if (a < 0 || a >= thisRows)
		throw new RangeError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${thisRows}): a = ${a}`)
		
	if (b === undefined)
		throw new ReferenceError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${thisRows}): b = ${b}`)
	else if (typeof b !== 'number')
		throw new TypeError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${thisRows}): b = ${b}`)
	else if (b % 1 !== 0)
		throw new RangeError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${thisRows}): b = ${b}`)
	else if (b < 0 || b >= thisRows)
		throw new RangeError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${thisRows}): b = ${b}`)
	
	else if (result !== undefined) {
		if ((result instanceof Matrix) === false)
			throw new TypeError(`Argument #3 result must be a Matrix instance: result = ${result}`)
		
		const { rows: resultRows, columns: resultColumns } = privateMap.get(result)
		
		if (resultRows !== thisRows)
			throw new RangeError(`result.rows must equal this.rows: result.rows = ${resultRows}, this.rows = ${thisRows}`)
		else if (resultColumns !== thisColumns)
			throw new RangeError(`result.columns must equal this.columns: result.columns = ${resultColumns}, this.columns = ${thisColumns}`)
	} else result = new Matrix(thisRows, thisColumns, [...this.data])
	
	for (let i = 0; i < thisColumns; i++) {
		const n = this.data[a * thisColumns + i]
		
		result.data[a * thisColumns + i] = this.data[b * thisColumns + i]
		result.data[b * thisColumns + i] = n
	}
	
	return result
}

export const addRowToRow = function(a, b, n = 1, result) {
	const { rows: thisRows, columns: thisColumns } = privateMap.get(this)
	
	if (a === undefined)
		throw new ReferenceError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${thisRows}): a = ${a}`)
	else if (typeof a !== 'number')
		throw new TypeError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${thisRows}): a = ${a}`)
	else if (a % 1 !== 0)
		throw new RangeError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${thisRows}): a = ${a}`)
	else if (a < 0 || a >= thisRows)
		throw new RangeError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${thisRows}): a = ${a}`)
		
	if (b === undefined)
		throw new ReferenceError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${thisRows}): b = ${b}`)
	else if (typeof b !== 'number')
		throw new TypeError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${thisRows}): b = ${b}`)
	else if (b % 1 !== 0)
		throw new RangeError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${thisRows}): b = ${b}`)
	else if (b < 0 || b >= thisRows)
		throw new RangeError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${thisRows}): b = ${b}`)
	
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
	} else result = new Matrix(thisRows, thisColumns, [...this.data])
	
	for (let i = 0; i < thisColumns; i++) {
		result.data[b * thisColumns + i] = this.data[b * thisColumns + i] + this.data[a * thisColumns + i] * n
	}
	
	return result
}

export const multiplyRow = function(row, n, result) {
	const { rows: thisRows, columns: thisColumns } = privateMap.get(this)
	
	if (row === undefined)
		throw new ReferenceError(`Argument #1 row must be an integer greater than or equal to 0 and less than this.rows (${thisRows}): row = ${row}`)
	else if (typeof row !== 'number')
		throw new TypeError(`Argument #1 row must be an integer greater than or equal to 0 and less than this.rows (${thisRows}): row = ${row}`)
	else if (row % 1 !== 0)
		throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than this.rows (${thisRows}): row = ${row}`)
	else if (row < 0 || row >= thisRows)
		throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than this.rows (${thisRows}): row = ${row}`)
	
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
	} else result = new Matrix(thisRows, thisColumns, [...this.data])
	
	for (let i = 0; i < thisColumns; i++) {
		result.data[row * thisColumns + i] = this.data[row * thisColumns + i] * n
	}
	
	return result
}

export const insertRows = function(row, count, newData, result) {
	const { rows: thisRows, columns: thisColumns } = privateMap.get(this)
	
	if (row === undefined)
		throw new ReferenceError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${thisRows}): row = ${row}`)
	else if (typeof row !== 'number')
		throw new TypeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${thisRows}): row = ${row}`)
	else if (row % 1 !== 0)
		throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${thisRows}): row = ${row}`)
	else if (row < 0 || row > thisRows)
		throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${thisRows}): row = ${row}`)
	
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
		
		if (resultRows !== thisRows + count)
			throw new RangeError(`result.rows must equal this.rows + count (${thisRows + count}): result.rows = ${resultRows}, this.rows = ${thisRows}`)
		else if (resultColumns !== thisColumns)
			throw new RangeError(`result.columns must equal this.columns (${thisColumns}): result.columns = ${resultColumns}, this.columns = ${thisColumns}`)
	} else result = new Matrix(thisRows + count, thisColumns)
	
	if (count <= 0) return result
	
	if (newData === undefined) {
		newData = []
	}
	
	for (let i = newData.length; i < thisColumns * count; i++) {
		newData[i] = 0
	}
	
	let i2 = 0
	let i3 = 0
	
	for (let i = 0; i < thisRows + count; i++) {
		for (let j = 0; j < thisColumns; j++) {
			if (i >= row && i < row + count) result.data[i * thisColumns + j] = newData[i3 * thisColumns + j]
			else result.data[i * thisColumns + j] = this.data[i2 * thisColumns + j]
		}
		
		if (i >= row && i < row + count) i3++
		else i2++
	}
	
	return result
}

export const removeRows = function(row, count, result) {
	const { rows: thisRows, columns: thisColumns } = privateMap.get(this)
	
	if (row === undefined)
		throw new ReferenceError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${thisRows}): row = ${row}`)
	else if (typeof row !== 'number')
		throw new TypeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${thisRows}): row = ${row}`)
	else if (row % 1 !== 0)
		throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${thisRows}): row = ${row}`)
	else if (row < 0 || row > thisRows)
		throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${thisRows}): row = ${row}`)
	
	else if (count === undefined)
		throw new ReferenceError(`Argument #2 count must be an integer >= 1 or < this.rows while row === 0: count = ${count}`)
	else if (typeof count !== 'number')
		throw new TypeError(`Argument #2 count must be an integer >= 1 or < this.rows while row === 0: count = ${count}`)
	else if (count % 1 > 0)
		throw new RangeError(`Argument #2 count must be an integer >= 1 or < this.rows while row === 0: count = ${count}`)
	else if (count < 1 || (row === 0 && count >= thisRows))
		throw new RangeError(`Argument #2 count must be an integer >= 1 or < this.rows while row === 0: count = ${count}`)
	
	if (result !== undefined) {
		if ((result instanceof Matrix) === false)
			throw new TypeError(`Argument #3 result must be a Matrix instance: result = ${result}`)
		
		const { rows: resultRows, columns: resultColumns } = privateMap.get(result)
		
		if (resultRows !== thisRows - count)
			throw new RangeError(`result.rows must equal this.rows - count (${thisRows - count}): result.rows = ${resultRows}, this.rows = ${thisRows}`)
		else if (resultColumns !== thisColumns)
			throw new RangeError(`result.columns must equal this.columns (${thisColumns}): result.columns = ${resultColumns}, this.columns = ${thisColumns}`)
	} else result = new Matrix(thisRows - count, thisColumns)
	
	let i2 = 0
	
	for (let i = 0; i < thisRows; i++) {
		if (i >= row && i < row + count) continue
		
		for (let j = 0; j < thisColumns; j++) {
			result.data[i2 * thisColumns + j] = this.data[i * thisColumns + j]
		}
		
		i2++
	}
	
	return result
}