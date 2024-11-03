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

export const add = function(matrix, result) {
	if (matrix === undefined)
		throw new ReferenceError(`Argument #1 matrix must be a Matrix instance: matrix = ${matrix}`)
	else if ((matrix instanceof Matrix) === false)
		throw new TypeError(`Argument #1 matrix must be a Matrix instance: matrix = ${matrix}`)
	
	const { rows: thisRows, columns: thisColumns } = privateMap.get(this)
	const { rows: matrixRows, columns: matrixColumns } = privateMap.get(matrix)
	
	if (thisRows !== matrixRows)
		throw new RangeError(`The dimensions of this must equal the dimensions of matrix: this.rows = ${thisRows}, matrix.rows = ${matrixRows}`)
	else if (thisColumns !== matrixColumns)
		throw new RangeError(`The dimensions of this must equal the dimensions of matrix: this.columns = ${thisColumns}, matrix.columns = ${matrixColumns}`)
	
	else if (result !== undefined) {
		if ((result instanceof Matrix) === false)
			throw new TypeError(`Argument #2 result must be a Matrix instance and result.data.length must be greater than or equal to this.data.length: result = ${result}`)
		
		const { rows: resultRows, columns: resultColumns } = privateMap.get(result)
		
		if (resultRows !== thisRows)
			throw new RangeError(`result.rows must equal this.rows: result.rows = ${resultRows}, this.rows = ${thisRows}`)
		else if (resultColumns !== thisColumns)
			throw new RangeError(`result.columns must equal this.columns: result.columns = ${resultColumns}, this.columns = ${thisColumns}`)
	} else result = new Matrix(thisRows, thisColumns)
	
	for (let i = 0; i < this.data.length; i++) {
		result.data[i] = this.data[i] + matrix.data[i]
	}
	
	return result
}

export const subtract = function(matrix, result) {
	if (matrix === undefined)
		throw new ReferenceError(`Argument #1 matrix must be a Matrix instance: matrix = ${matrix}`)
	else if ((matrix instanceof Matrix) === false)
		throw new TypeError(`Argument #1 matrix must be a Matrix instance: matrix = ${matrix}`)
	
	const { rows: thisRows, columns: thisColumns } = privateMap.get(this)
	const { rows: matrixRows, columns: matrixColumns } = privateMap.get(matrix)
	
	if (thisRows !== matrixRows)
		throw new RangeError(`The dimensions of this must equal the dimensions of matrix: this.rows = ${thisRows}, matrix.rows = ${matrixRows}`)
	else if (thisColumns !== matrixColumns)
		throw new RangeError(`The dimensions of this must equal the dimensions of matrix: this.columns = ${thisColumns}, matrix.columns = ${matrixColumns}`)
	
	else if (result !== undefined) {
		if ((result instanceof Matrix) === false)
			throw new TypeError(`Argument #2 result must be a Matrix instance and result.data.length must be greater than or equal to this.data.length: result = ${result}`)
		
		const { rows: resultRows, columns: resultColumns } = privateMap.get(result)
		
		if (resultRows !== thisRows)
			throw new RangeError(`result.rows must equal this.rows: result.rows = ${resultRows}, this.rows = ${thisRows}`)
		else if (resultColumns !== thisColumns)
			throw new RangeError(`result.columns must equal this.columns: result.columns = ${resultColumns}, this.columns = ${thisColumns}`)
	} else result = new Matrix(thisRows, thisColumns)
	
	for (let i = 0; i < this.data.length; i++) {
		result.data[i] = this.data[i] - matrix.data[i]
	}
	
	return result
}

export const multiplyScalar = function(n, result) {
	if (n === undefined)
		throw new ReferenceError(`Argument #1 n must be a number: n = ${n}`)
	else if (typeof n !== 'number')
		throw new TypeError(`Argument #1 n must be a number: n = ${n}`)
	
	const { rows: thisRows, columns: thisColumns } = privateMap.get(this)
	
	if (result !== undefined) {
		if ((result instanceof Matrix) === false)
			throw new TypeError(`Argument #2 result must be a Matrix instance and result.data.length must be greater than or equal to this.data.length: result = ${result}`)
		
		const { rows: resultRows, columns: resultColumns } = privateMap.get(result)
		
		if (resultRows !== thisRows)
			throw new RangeError(`result.rows must equal this.rows: result.rows = ${resultRows}, this.rows = ${thisRows}`)
		else if (resultColumns !== thisColumns)
			throw new RangeError(`result.columns must equal this.columns: result.columns = ${resultColumns}, this.columns = ${thisColumns}`)
	} else result = new Matrix(thisRows, thisColumns)
	
	for (let i = 0; i < this.data.length; i++) {
		result.data[i] = this.data[i] * n
	}
	
	return result
}

export const multiplyMatrix = function(matrix, result) {
	if (matrix === undefined)
		throw new ReferenceError(`Argument #1 matrix must be a Matrix instance: matrix = ${matrix}`)
	else if ((matrix instanceof Matrix) === false)
		throw new TypeError(`Argument #1 matrix must be a Matrix instance: matrix = ${matrix}`)
	
	const { rows: thisRows, columns: thisColumns } = privateMap.get(this)
	const { rows: matrixRows, columns: matrixColumns } = privateMap.get(matrix)
	
	if (thisColumns !== matrixRows)
		throw new RangeError(`this.columns must equal matrix.rows: this.columns = ${thisColumns}, matrix.rows = ${matrixRows}`)
	
	else if (result !== undefined) {
		if ((result instanceof Matrix) === false)
			throw new TypeError(`Argument #2 result must be a Matrix instance and result.data.length must be greater than or equal to this.data.length: result = ${result}`)
		
		const { rows: resultRows, columns: resultColumns } = privateMap.get(result)
		
		if (resultRows !== thisRows)
			throw new RangeError(`result.rows must equal this.rows: result.rows = ${resultRows}, this.rows = ${thisRows}`)
		else if (resultColumns !== matrixColumns)
			throw new RangeError(`result.columns must equal matrix.columns: result.columns = ${resultColumns}, matrix.columns = ${matrixColumns}`)
	} else result = new Matrix(thisRows, matrixColumns)
	
	let array = []
	
	for (let i = 0; i < thisRows; i++) {
		for (let j = 0; j < matrixColumns; j++) {
			let sum = 0
			
			for (let k = 0; k < thisColumns; k++) {
				sum += this.data[i * thisColumns + k] * matrix.data[k * matrixColumns + j]
			}
			
			array[i * matrixColumns + j] = sum
		}
	}
	
	for (let i = 0; i < array.length; i++) {
		result.data[i] = array[i]
	}
	
	return result
}