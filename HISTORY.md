# 1.0.0-alpha, 03/11/2024
* Move public functions into `Matrix` class and refactor to use `this`
* Change: all methods with the optional `result` argument will mutate and return the given Matrix if it is the appropiate size
* Add the following methods to `Matrix`:
  * `addColumnToColumn`,
  * `insertColumns`,
  * `insertRows`,
  * `multiplyColumn`,
  * `removeColumns`,
  * `removeRows`,
  * `switchColumns`
* Change `Matrix` method names:
  * `rowAdd` -> `addRowToRow`,
  * `rowMultiply` -> `multiplyRow`,
  * `rowSwitch` -> `switchRows`,
  * `formatDataRowMajor` -> `to2DArrayRowMajor`,
  * `formatDataColumnMajor` -> `to2DArrayColumnMajor`
* Remove functions:
  * `checkMatrix`,
  * `convertDOMMatrixToMatrix`,
  * `convertMatrixToDOMMatrix`,
  * `divideScalar`,
  * `isMatrix`,
  * `newMatrix`

# 0.2.0-alpha, 22/10/2024
* `Matrix` interface uses `data` property for operations instead of extending and mutating standard APIs.
* Functions with the optional `result` argument now return an array instead of a `Matrix`.

# 0.1.0-alpha, 21/10/2024
* Initial release