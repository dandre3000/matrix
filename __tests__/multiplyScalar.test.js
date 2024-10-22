import { expect, test } from '@jest/globals'
import { multiplyScalar } from '../main.js'

test('Throw Error if matrix does not fit the Matrix interface', () => {
	expect(() => multiplyScalar({
		data: {
			0: 0,
			length: 0
		},
		rows: 1,
		columns: 1
	}, 0)).toThrow(Error)
	
	expect(() => multiplyScalar({
		data: ['0'],
		rows: 1,
		columns: 1
	}, 0)).toThrow(Error)
	
	expect(() => multiplyScalar({
		data: [0],
		rows: 1.1,
		columns: 1
	}, 0)).toThrow(Error)
	
	expect(() => multiplyScalar({
		data: [0],
		rows: 1,
		columns: 2
	}, 0)).toThrow(Error)
})

test('Throw ReferenceError if b is not defined', () => {
	expect(() => multiplyScalar({
		data: [0, 0],
		rows: 2,
		columns: 1
	})).toThrow(ReferenceError)
	
	expect(() => multiplyScalar({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, undefined)).toThrow(ReferenceError)
})

test('Throw TypeError if b is not a number', () => {
	expect(() => multiplyScalar({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, null)).toThrow(TypeError)
	
	expect(() => multiplyScalar({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, true)).toThrow(TypeError)
	
	expect(() => multiplyScalar({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, '0')).toThrow(TypeError)
	
	expect(() => multiplyScalar({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, Symbol())).toThrow(TypeError)
	
	expect(() => multiplyScalar({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, {})).toThrow(TypeError)
})

test('Throw TypeError if result is not an object', () => {
	expect(() => multiplyScalar({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, null)).toThrow(TypeError)
	
	expect(() => multiplyScalar({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, true)).toThrow(TypeError)
	
	expect(() => multiplyScalar({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, '')).toThrow(TypeError)
	
	expect(() => multiplyScalar({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, Symbol())).toThrow(TypeError)
	
	expect(() => multiplyScalar({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, 0)).toThrow(TypeError)
})

test('Multiply Matrix a * scalar b', () => {
	expect(multiplyScalar({
		data: [1, 2, 3],
		rows: 1,
		columns: 3
	}, 0)).toStrictEqual([0, 0, 0])
	
	expect(multiplyScalar({
		data: [4, 5, 6],
		rows: 3,
		columns: 1
	}, 5)).toStrictEqual([20, 25, 30])
})

test('Return and fill result', () => {
	const result = []
	
	expect(multiplyScalar({
		data: [5],
		rows: 1,
		columns: 1
	}, 1, result)).toBe(result)
	
	expect(result).toStrictEqual([5])
})