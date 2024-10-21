# @dandre3000/matrix
Matrix math library.

## Usage
`$ npm install @dandre3000/matrix`

```js
import { add, newMatrix } from '@dandre3000/matrix'

/*
  [
    0, 0,
    0, 0
  ]
*/
newMatrix(2, 2)

/*
  [
    6, 8,
    10, 12
  ]
*/
add(newMatrix(2, 2, [1, 2, 3, 4]), newMatrix(2, 2, [5, 6, 7, 8]))
```

## API
`newMatrix` creates a `Float64Array` instance that fits the `Matrix` inteface. Arguments `rows` and `columns` are required and corresponding properties of the created `Matrix` are non-configurable and read-only.
The `data`, `buffer` and `byteOffset` arguments are optional. The `Matrix` will be filled with the elements in `data`.
`data.length` may be greater or less than `Matrix.length`. `buffer.length - byteOffset` must be greater than the amount of memory required to contain the whole `Matrix` ie. `Matrix.rows * Matrix.columns * 8 // 64 bits == 8 bytes`.
```js
import { newMatrix } from './main.min.js'

// [0]
newMatrix(1, 1)

/*
  [
    2, 2,
    0, 0
  ]
*/
newMatrix(2, 2, [2, 2])

// [1, 2, 3, 4,]
newMatrix(4, 1, [1, 2, 3, 4, 5])

/*
  [
    6,
    7,
    8,
    9,
  ]
*/
newMatrix(1, 4, [6, 7, 8, 9])

const buffer = new ArrayBuffer(6 * 8 * 2)

/*
  [
    0, 0,
    0, 0
  ]
*/
const matrix = newMatrix(2, 2, undefined, buffer, 0)

/*
  [
    1, 1,
    0, 0
  ]
*/
newMatrix(2, 2, [1, 1], buffer, 16)

/*
  [
    0, 0,
    1, 1
  ]
*/
console.log(matrix)
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
