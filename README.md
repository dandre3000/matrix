# @dandre3000/matrix
Matrix math library.

## Usage
`$ npm install @dandre3000/matrix`

```js
import { Matrix } from '@dandre3000/matrix'

/*
  {
    rows: 2,
    columns: 2,
    data: Float64Array[
      1, 2,
      3, 4
    ]
  }
*/
const a = new Matrix(2, 2, [1, 2, 3, 4])

/*
  {
    rows: 2,
    columns: 2,
    data: Float64Array[
      5, 6,
      7, 8
    ]
  }
*/
const b = new Matrix(2, 2, [5, 6, 7, 8])

/*
  {
    rows: 2,
    columns: 2,
    data: Float64Array[
      6, 8,
      10, 12
    ]
  }
*/
a.add(b)
```

## API
```js
import { new Matrix } from '@dandre3000/matrix'

/*
  {
    rows: 1,
    columns: 1,
    data: Float64Array[0]
  }
*/
new Matrix(1, 1)

/*
  {
    rows: 2,
    columns: 2,
    data: Float64Array[
      2, 2,
      0, 0
    ]
  }
*/
new Matrix(2, 2, [2, 2])

/*
  {
    rows: 4,
    columns: 1
    data: Float64Array[
      1,
      2,
      3,
      4
    ]
  }
*/
new Matrix(4, 1, [1, 2, 3, 4, 5])

/*
  {
    rows: 1,
    columns: 4,
    data: Float64Array[6, 7, 8, 9]
  }
*/
new Matrix(1, 4, [6, 7, 8, 9])

const buffer = new ArrayBuffer(6 * 8)

/*
  {
    rows: 2,
    columns: 2,
    data: Float64Array[
      0, 0,
      0, 0
    ]
  }
*/
const matrix = new Matrix(2, 2, { buffer, byteOffset: 0 })

/*
  {
    rows: 2,
    columns: 2,
    data: Float64Array[
      1, 1,
      0, 0
    ]
  }
*/
const matrix = new Matrix(2, 2, [1, 1] { buffer, byteOffset: 16 })

/*
  {
    rows: 2,
    columns: 2,
    data: Float64Array[
      0, 0,
      1, 1
    ]
  }
*/
console.log(matrix)
```

#
```js
import { Matrix } from '@dandre3000/matrix'

const a = new Matrix(3, 3, [
  1, 2, 3,
  4, 5, 6,
  7, 8, 9
])

const b = new Matrix(3, 3, [
  10, 11, 12,
  13, 14, 15,
  16, 17, 18
])

/*
  {
    rows: 3,
    columns: 3,
    data: Float64Array[
      11, 13, 15,
      17, 19, 21,
      23, 25, 27
    ]
  }
*/
a.sum(b)
```

#
```js
import { Matrix } from '@dandre3000/matrix'

const a = new Matrix(3, 3, [
  1, 2, 3,
  4, 5, 6,
  7, 8, 9
])

const b = new Matrix(3, 3, [
  10, 11, 12,
  13, 14, 15,
  16, 17, 18
])

/*
  {
    rows: 3,
	columns: 3,
    data: Float64Array[
    -9, -9, -9,
    -9, -9, -9,
    -9, -9, -9
  ]
*/
a.subtract(b)
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
