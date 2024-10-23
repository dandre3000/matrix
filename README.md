# @dandre3000/matrix
Matrix math library.

## Usage
`$ npm install @dandre3000/matrix`

```js
import { add, newMatrix } from '@dandre3000/matrix'

/*
  {
    data: [
      0, 0,
      0, 0
    ],
    rows: 2,
    columns: 2
  }
*/
newMatrix(2, 2)

/*
  {
    data: [
      6, 8,
      10, 12
    ],
    rows: 2,
    columns: 2
  }
*/
add(newMatrix(2, 2, [1, 2, 3, 4]), newMatrix(2, 2, [5, 6, 7, 8]))
```

## API
`newMatrix` returns a new object that fits the `Matrix` interface. Properties `rows` and `columns` are non-configurable and read-only.
Arguments `data`, `buffer` and `byteOffset` are optional. Property `data` will be filled with the elements contained in `data`.
`data.length` may be greater or less than `Matrix.data.length`. `buffer.length - byteOffset` must be greater than the amount of memory required to contain the whole `Matrix` ie. `Matrix.rows * Matrix.columns * 8 // 64 bits == 8 bytes`.
```js
import { newMatrix } from '@dandre3000/matrix'

/*
  {
    data: [0],
    rows: 1,
    columns: 1
  }
*/
console.log(newMatrix(1, 1))

/*
  {
    data: [
      2, 2,
      0, 0
    ],
    rows: 2,
    columns: 2
  }
*/
console.log(newMatrix(2, 2, [2, 2]))

/*
  {
    data: [
      1,
      2,
      3,
      4
    ],
    rows: 4,
    columns: 1
  }
*/
console.log(newMatrix(4, 1, [1, 2, 3, 4, 5]))

/*
  {
    data: [6, 7, 8, 9],
    rows: 1,
    columns: 4
  }
*/
console.log(newMatrix(1, 4, [6, 7, 8, 9]))

const buffer = new ArrayBuffer(6 * 8 * 2)

const matrix = newMatrix(2, 2, undefined, buffer, 0)

/*
  {
    data: [
      0, 0,
      0, 0
    ],
    rows: 2,
    columns: 2
  }
*/
console.log(matrix)

/*
  {
    data: [
      1, 1,
      0, 0
    ],
    rows: 2,
    columns: 2
  }
*/
console.log(newMatrix(2, 2, [1, 1], buffer, 16))

/*
  {
    data: [
      0, 0,
      1, 1
    ],
    rows: 2,
    columns: 2
  }
*/
console.log(matrix)
```

#
`add` returns the sum of arguments `a` and `b` as an array. Fills and returns the optional argument `result`.
```js
import { add, newMatrix } from '@dandre3000/matrix'

const a = newMatrix(3, 3, [
  1, 2, 3,
  4, 5, 6,
  7, 8, 9
])

const b = newMatrix(3, 3, [
  10, 11, 12,
  13, 14, 15,
  16, 17, 18
])

const sum = []

add(a, b, sum)

/*
  [
    11, 13, 15,
    17, 19, 21,
    23, 25, 27
  ]
*/
console.log(sum)
```

#
`subtract` returns the difference of arguments `a` and `b` as an array. Fills and returns the optional argument `result`.
```js
import { subtract, newMatrix } from '@dandre3000/matrix'

const a = newMatrix(3, 3, [
  1, 2, 3,
  4, 5, 6,
  7, 8, 9
])

const b = newMatrix(3, 3, [
  10, 11, 12,
  13, 14, 15,
  16, 17, 18
])

const difference = []

subtract(a, b, difference)

/*
  [
    -9, -9, -9,
    -9, -9, -9,
    -9, -9, -9
  ]
*/
console.log(difference)
```

## License
@dandre3000/matrix is published under the GNU General Public License 3.0:

```
Copyright (c) 2024 DeAundre Payne

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
```
