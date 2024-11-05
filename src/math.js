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

export const transpose = function(result) {
	if ((this instanceof Matrix) === false)
		throw new TypeError(`this must be a Matrix instance: this = ${this}`)
	
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

export const luDecomposition = function(result) {
	if ((this instanceof Matrix) === false)
		throw new TypeError(`this must be a Matrix instance: this = ${this}`)
	
	const { rows: thisRows, columns: thisColumns } = privateMap.get(this)
	
	if (result !== undefined) {
		if (result.l !== undefined) {
			if ((result.l instanceof Matrix) === false)
				throw new TypeError(`result.l must be a Matrix instance: result = ${result}`)
			
			const { rows: lRows, columns: lColumns } = privateMap.get(result.l)
			
			if (lRows !== thisRows)
				throw new RangeError(`result.l.rows must === this.rows and result.l.columns must === this.rows: result.l.rows = ${lRows}`)
			else if (lColumns !== thisRows)
				throw new RangeError(`result.l.rows must === this.rows and result.l.columns must === this.rows: result.l.columns = ${lColumns}`)
		} else result.l = new Matrix(thisRows, thisRows)
		
		if (result.u !== undefined) {
			if ((result.u instanceof Matrix) === false)
				throw new TypeError(`result.u must be a Matrix instance: result = ${result}`)
			
			const { rows: uRows, columns: uColumns } = privateMap.get(result.u)
			
			if (uRows !== thisRows)
				throw new RangeError(`result.u.rows must === this.rows and result.u.columns must === this.rows: result.u.rows = ${uRows}`)
			else if (uColumns !== thisColumns)
				throw new RangeError(`result.u.rows must === this.rows and result.u.columns must === this.columns: result.u.columns = ${uColumns}`)
		} else result.u = new Matrix(thisRows, thisColumns)
	} else result = {
		l: new Matrix(thisRows, thisRows),
		u: new Matrix(thisRows, thisColumns)
	}
	
	const u = result.u
	const l = result.l
	
	// l identity
	for (let i = 0; i < thisRows; i++) {
		l.data[i * thisRows + i] = 1
	}
	
	for (let i = 0; i < thisRows; i++) {
		for (let j = 0; j < thisColumns; j++) {
			u.data[i * thisColumns + j] = this.data[i * thisColumns + j]
		}
	}
	
	// Gaussian elimination
	for (let i = 0; i < thisColumns; i++) {
		let swap = false
		
		// pivot
		if (u.data[i * thisColumns + i] === 0) {
			swap = true
		}
		
		for (let j = i + 1; j < thisRows; j++) {
			// find 1st non-zero element under the pivot
			if (u.data[j * thisColumns + i] === 0) continue
			
			if (swap === true) {
				// swap with pivot row
				swap = false
				u.switchRows(i, j, u)
				l.switchRows(i, j, l)
			} else {
				// current - pivot * coefficient = 0
				const coefficient = u.data[j * thisColumns + i] / u.data[i * thisColumns + i]
				
				l.data[j * thisRows + i] = coefficient
				u.addRowToRow(i, j, -1 * coefficient, u)
			}
		}
	}
	
	return result
}