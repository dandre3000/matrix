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

declare module "Matrix" {
	interface ArrayLikeNumber {
		readonly length: number,
		[index: number]: number
	}
	
	export interface Matrix {
		readonly rows: number,
		readonly columns: number,
		readonly data: ArrayLikeNumber
	}

	export function newMatrix(rows: number, columns: number, data?: ArrayLikeNumber, buffer?: ArrayBuffer, byteOffset?: number): Matrix
	
	export function checkMatrix(matrix: Matrix): Matrix
	
	export function isMatrix(matrix: Matrix): boolean
	
	export function add(a: Matrix, b: Matrix, result: ArrayLikeNumber): ArrayLikeNumber
	
	export function subtract(a: Matrix, b: Matrix, result: ArrayLikeNumber): ArrayLikeNumber
	
	export function multiplyScalar(a: Matrix, b: number, result: ArrayLikeNumber): ArrayLikeNumber
	
	export function divideScalar(a: Matrix, b: number, result: ArrayLikeNumber): ArrayLikeNumber
	
	export function multiplyMatrix(a: Matrix, b: Matrix, result: ArrayLikeNumber): ArrayLikeNumber
	
	export function rowSwitch(matrix: Matrix, a: number, b: number, result: ArrayLikeNumber): ArrayLikeNumber
	
	export function rowAdd(matrix: Matrix, a: number, b: number, n: number, result: ArrayLikeNumber): ArrayLikeNumber
	
	export function rowMultiply(matrix: Matrix, a: number, n: number, result: ArrayLikeNumber): ArrayLikeNumber
	
	export function transpose(matrix: Matrix, result: ArrayLikeNumber): ArrayLikeNumber
	
	export function convertDOMMatrixToMatrix(domMatrix: DOMMatrix): Matrix
	
	export function convertMatrixToDOMMatrix(matrix: Matrix): DOMMatrix
	
	export function formatDataRowMajor(matrix: Matrix): number[][]
	
	export function formatDataColumnMajor(matrix: Matrix): number[][]
}