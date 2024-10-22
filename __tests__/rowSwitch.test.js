import { expect, test } from '@jest/globals'
import { rowSwitch } from '../main.js'

test('Throw Error if matrix does not fit the Matrix interface', () => {
	expect(() => rowSwitch({
		data: {
			0: 0,
			length: 0
		},
		rows: 1,
		columns: 1
	}, 0, 1)).toThrow(Error)
	
	expect(() => rowSwitch({
		data: ['0'],
		rows: 1,
		columns: 1
	}, 0, 1)).toThrow(Error)
	
	expect(() => rowSwitch({
		data: [0],
		rows: 1.1,
		columns: 1
	}, 0, 1)).toThrow(Error)
	
	expect(() => rowSwitch({
		data: [0],
		rows: 1,
		columns: 2
	}, 0, 1)).toThrow(Error)
})

test('Throw ReferenceError if a or b is not defined', () => {
	expect(() => rowSwitch({
		data: [0],
		rows: 1,
		columns: 1
	})).toThrow(ReferenceError)
	
	expect(() => rowSwitch({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, undefined, 1)).toThrow(ReferenceError)
	
	expect(() => rowSwitch({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0, undefined)).toThrow(ReferenceError)
})

test('Throw TypeError if a or b is not a number', () => {
	expect(() => rowSwitch({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, null, 1)).toThrow(TypeError)
	expect(() => rowSwitch({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, true, 1)).toThrow(TypeError)
	expect(() => rowSwitch({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, '0', 1)).toThrow(TypeError)
	expect(() => rowSwitch({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, Symbol(), 1)).toThrow(TypeError)
	expect(() => rowSwitch({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, {}, 1)).toThrow(TypeError)
	
	expect(() => rowSwitch({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0, null)).toThrow(TypeError)
	expect(() => rowSwitch({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, 0, true)).toThrow(TypeError)
	expect(() => rowSwitch({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, 0, '0')).toThrow(TypeError)
	expect(() => rowSwitch({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, 0, Symbol())).toThrow(TypeError)
	expect(() => rowSwitch({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, 0, {})).toThrow(TypeError)
})

test('Throw RangeError if a or b is not an integer', () => {
	expect(() => rowSwitch({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0.1, 1)).toThrow(RangeError)
	expect(() => rowSwitch({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, 0.9, 1)).toThrow(RangeError)
	
	expect(() => rowSwitch({
		data: [0, 0],
		rows: 2,
		columns: 1
	}, 0, 1.1)).toThrow(RangeError)
	expect(() => rowSwitch({
		data: [0, 0],
		rows: 1,
		columns: 2
	}, 0, 1.9)).toThrow(RangeError)
})

test('Throw TypeError if result is not an object', () => {
	expect(() => rowSwitch({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, 0, null)).toThrow(TypeError)
	
	expect(() => rowSwitch({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, 0, true)).toThrow(TypeError)
	
	expect(() => rowSwitch({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, 0, '')).toThrow(TypeError)
	
	expect(() => rowSwitch({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, 0, Symbol())).toThrow(TypeError)
	
	expect(() => rowSwitch({
		data: [0],
		rows: 1,
		columns: 1
	}, 0, 0, 0)).toThrow(TypeError)
})

test('Switch row a with row b', () => {
	expect(rowSwitch({
		data: [
			1, 2,
			3, 4
		],
		rows: 2,
		columns: 2
	}, 0, 1)).toStrictEqual([3, 4, 1, 2])
})

test('Return and fill result', () => {
	const result = []
	
	expect(rowSwitch({
		data: [5],
		rows: 1,
		columns: 1
	}, 0, 0, result)).toBe(result)
	
	expect(result).toStrictEqual([5])
})