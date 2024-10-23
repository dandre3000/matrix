import { expect, test } from '@jest/globals'
import { convertMatrixToDOMMatrix } from '../main.js'

test('Throw ReferenceError if matrix is not defined', () => {
	expect(() => convertMatrixToDOMMatrix()).toThrow(ReferenceError)
	expect(() => convertMatrixToDOMMatrix(undefined)).toThrow(ReferenceError)
})

test('Throw TypeError if matrix is not a DOMMatrix', () => {
	expect(() => convertMatrixToDOMMatrix(null)).toThrow(TypeError)
	expect(() => convertMatrixToDOMMatrix(true)).toThrow(TypeError)
	expect(() => convertMatrixToDOMMatrix('')).toThrow(TypeError)
	expect(() => convertMatrixToDOMMatrix(Symbol())).toThrow(TypeError)
	expect(() => convertMatrixToDOMMatrix(0)).toThrow(TypeError)
	expect(() => convertMatrixToDOMMatrix({})).toThrow(ReferenceError)
})

test('Convert Matrix to DOMMatrix', () => {
	const domMatrix = {
		is2D: false,
		isIdentity: false,
		a: 2,
		b: 3,
		c: 3,
		d: 4,
		e: 5,
		f: 6,
		m11: 2,
		m12: 3,
		m13: 4,
		m14: 5,
		m21: 3,
		m22: 4,
		m23: 5,
		m24: 6,
		m31: 4,
		m32: 5,
		m33: 6,
		m34: 7,
		m41: 5,
		m42: 6,
		m43: 7,
		m44: 8,
	}
	
	expect(convertMatrixToDOMMatrix({
		data: [2, 3, 4, 5, 3, 4, 5, 6, 4, 5, 6, 7, 5, 6, 7, 8],
		rows: 4,
		columns: 4
	})).toStrictEqual(domMatrix)
})