# 1.0.0-alpha
* Move public functions into `Matrix` class and refactor to use `this`
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