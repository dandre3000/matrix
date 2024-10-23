import { expect, test } from '@jest/globals'
import { convertDOMMatrixToMatrix } from '../main.js'

test('Throw ReferenceError if domMatrix is not defined', () => {
	expect(() => convertDOMMatrixToMatrix()).toThrow(ReferenceError)
	expect(() => convertDOMMatrixToMatrix(undefined)).toThrow(ReferenceError)
})

test('Throw Error if domMatrix is not a DOMMatrix', () => {
	expect(() => convertDOMMatrixToMatrix(null)).toThrow(TypeError)
	expect(() => convertDOMMatrixToMatrix(true)).toThrow(TypeError)
	expect(() => convertDOMMatrixToMatrix('')).toThrow(TypeError)
	expect(() => convertDOMMatrixToMatrix(Symbol())).toThrow(TypeError)
	expect(() => convertDOMMatrixToMatrix(0)).toThrow(TypeError)
	expect(() => convertDOMMatrixToMatrix({})).toThrow(ReferenceError)
})

test('Convert DOMMatrix to Matrix', () => {
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
	
	expect(convertDOMMatrixToMatrix(domMatrix)).toStrictEqual({
		data: new Float64Array([2, 3, 4, 5, 3, 4, 5, 6, 4, 5, 6, 7, 5, 6, 7, 8]),
		rows: 4,
		columns: 4
	})
})