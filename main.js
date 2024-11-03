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
 */

const h = /* @__PURE__ */ new WeakMap(), f = function(t, e) {
  if (t === void 0)
    throw new ReferenceError(`Argument #1 matrix must be a Matrix instance: matrix = ${t}`);
  if (!(t instanceof u))
    throw new TypeError(`Argument #1 matrix must be a Matrix instance: matrix = ${t}`);
  const { rows: n, columns: s } = h.get(this), { rows: r, columns: o } = h.get(t);
  if (n !== r)
    throw new RangeError(`The dimensions of this must equal the dimensions of matrix: this.rows = ${n}, matrix.rows = ${r}`);
  if (s !== o)
    throw new RangeError(`The dimensions of this must equal the dimensions of matrix: this.columns = ${s}, matrix.columns = ${o}`);
  if (e !== void 0) {
    if (!(e instanceof u))
      throw new TypeError(`Argument #2 result must be a Matrix instance and result.data.length must be greater than or equal to this.data.length: result = ${e}`);
    const { rows: a, columns: i } = h.get(e);
    if (a !== n)
      throw new RangeError(`result.rows must equal this.rows: result.rows = ${a}, this.rows = ${n}`);
    if (i !== s)
      throw new RangeError(`result.columns must equal this.columns: result.columns = ${i}, this.columns = ${s}`);
  } else e = new u(n, s);
  for (let a = 0; a < this.data.length; a++)
    e.data[a] = this.data[a] + t.data[a];
  return e;
}, g = function(t, e) {
  if (t === void 0)
    throw new ReferenceError(`Argument #1 matrix must be a Matrix instance: matrix = ${t}`);
  if (!(t instanceof u))
    throw new TypeError(`Argument #1 matrix must be a Matrix instance: matrix = ${t}`);
  const { rows: n, columns: s } = h.get(this), { rows: r, columns: o } = h.get(t);
  if (n !== r)
    throw new RangeError(`The dimensions of this must equal the dimensions of matrix: this.rows = ${n}, matrix.rows = ${r}`);
  if (s !== o)
    throw new RangeError(`The dimensions of this must equal the dimensions of matrix: this.columns = ${s}, matrix.columns = ${o}`);
  if (e !== void 0) {
    if (!(e instanceof u))
      throw new TypeError(`Argument #2 result must be a Matrix instance and result.data.length must be greater than or equal to this.data.length: result = ${e}`);
    const { rows: a, columns: i } = h.get(e);
    if (a !== n)
      throw new RangeError(`result.rows must equal this.rows: result.rows = ${a}, this.rows = ${n}`);
    if (i !== s)
      throw new RangeError(`result.columns must equal this.columns: result.columns = ${i}, this.columns = ${s}`);
  } else e = new u(n, s);
  for (let a = 0; a < this.data.length; a++)
    e.data[a] = this.data[a] - t.data[a];
  return e;
}, c = function(t, e) {
  if (t === void 0)
    throw new ReferenceError(`Argument #1 n must be a number: n = ${t}`);
  if (typeof t != "number")
    throw new TypeError(`Argument #1 n must be a number: n = ${t}`);
  const { rows: n, columns: s } = h.get(this);
  if (e !== void 0) {
    if (!(e instanceof u))
      throw new TypeError(`Argument #2 result must be a Matrix instance and result.data.length must be greater than or equal to this.data.length: result = ${e}`);
    const { rows: r, columns: o } = h.get(e);
    if (r !== n)
      throw new RangeError(`result.rows must equal this.rows: result.rows = ${r}, this.rows = ${n}`);
    if (o !== s)
      throw new RangeError(`result.columns must equal this.columns: result.columns = ${o}, this.columns = ${s}`);
  } else e = new u(n, s);
  for (let r = 0; r < this.data.length; r++)
    e.data[r] = this.data[r] * t;
  return e;
}, $ = function(t, e) {
  if (t === void 0)
    throw new ReferenceError(`Argument #1 matrix must be a Matrix instance: matrix = ${t}`);
  if (!(t instanceof u))
    throw new TypeError(`Argument #1 matrix must be a Matrix instance: matrix = ${t}`);
  const { rows: n, columns: s } = h.get(this), { rows: r, columns: o } = h.get(t);
  if (s !== r)
    throw new RangeError(`this.columns must equal matrix.rows: this.columns = ${s}, matrix.rows = ${r}`);
  if (e !== void 0) {
    if (!(e instanceof u))
      throw new TypeError(`Argument #2 result must be a Matrix instance and result.data.length must be greater than or equal to this.data.length: result = ${e}`);
    const { rows: i, columns: l } = h.get(e);
    if (i !== n)
      throw new RangeError(`result.rows must equal this.rows: result.rows = ${i}, this.rows = ${n}`);
    if (l !== o)
      throw new RangeError(`result.columns must equal matrix.columns: result.columns = ${l}, matrix.columns = ${o}`);
  } else e = new u(n, o);
  let a = [];
  for (let i = 0; i < n; i++)
    for (let l = 0; l < o; l++) {
      let m = 0;
      for (let w = 0; w < s; w++)
        m += this.data[i * s + w] * t.data[w * o + l];
      a[i * o + l] = m;
    }
  for (let i = 0; i < a.length; i++)
    e.data[i] = a[i];
  return e;
}, d = function(t, e, n) {
  const { rows: s, columns: r } = h.get(this);
  if (t === void 0)
    throw new ReferenceError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${s}): a = ${t}`);
  if (typeof t != "number")
    throw new TypeError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${s}): a = ${t}`);
  if (t % 1 !== 0)
    throw new RangeError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${s}): a = ${t}`);
  if (t < 0 || t >= s)
    throw new RangeError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${s}): a = ${t}`);
  if (e === void 0)
    throw new ReferenceError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${s}): b = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${s}): b = ${e}`);
  if (e % 1 !== 0)
    throw new RangeError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${s}): b = ${e}`);
  if (e < 0 || e >= s)
    throw new RangeError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${s}): b = ${e}`);
  if (n !== void 0) {
    if (!(n instanceof u))
      throw new TypeError(`Argument #3 result must be a Matrix instance: result = ${n}`);
    const { rows: o, columns: a } = h.get(n);
    if (o !== s)
      throw new RangeError(`result.rows must equal this.rows: result.rows = ${o}, this.rows = ${s}`);
    if (a !== r)
      throw new RangeError(`result.columns must equal this.columns: result.columns = ${a}, this.columns = ${r}`);
  } else n = new u(s, r, this.data);
  for (let o = 0; o < r; o++) {
    const a = this.data[t * r + o];
    n.data[t * r + o] = this.data[e * r + o], n.data[e * r + o] = a;
  }
  return n;
}, b = function(t, e, n = 1, s) {
  const { rows: r, columns: o } = h.get(this);
  if (t === void 0)
    throw new ReferenceError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${r}): a = ${t}`);
  if (typeof t != "number")
    throw new TypeError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${r}): a = ${t}`);
  if (t % 1 !== 0)
    throw new RangeError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${r}): a = ${t}`);
  if (t < 0 || t >= r)
    throw new RangeError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${r}): a = ${t}`);
  if (e === void 0)
    throw new ReferenceError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${r}): b = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${r}): b = ${e}`);
  if (e % 1 !== 0)
    throw new RangeError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${r}): b = ${e}`);
  if (e < 0 || e >= r)
    throw new RangeError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${r}): b = ${e}`);
  if (typeof n != "number")
    throw new TypeError(`Argument #3 n must be a number: n = ${n}`);
  if (s !== void 0) {
    if (!(s instanceof u))
      throw new TypeError(`Argument #4 result must be a Matrix instance: result = ${s}`);
    const { rows: a, columns: i } = h.get(s);
    if (a !== r)
      throw new RangeError(`result.rows must equal this.rows (${r}): result.rows = ${a}, this.rows = ${r}`);
    if (i !== o)
      throw new RangeError(`result.columns must equal this.columns (${o}): result.columns = ${i}, this.columns = ${o}`);
  } else s = new u(r, o, this.data);
  for (let a = 0; a < o; a++)
    s.data[e * o + a] = this.data[e * o + a] + this.data[t * o + a] * n;
  return s;
}, E = function(t, e, n) {
  const { rows: s, columns: r } = h.get(this);
  if (t === void 0)
    throw new ReferenceError(`Argument #1 row must be an integer greater than or equal to 0 and less than this.rows (${s}): row = ${t}`);
  if (typeof t != "number")
    throw new TypeError(`Argument #1 row must be an integer greater than or equal to 0 and less than this.rows (${s}): row = ${t}`);
  if (t % 1 !== 0)
    throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than this.rows (${s}): row = ${t}`);
  if (t < 0 || t >= s)
    throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than this.rows (${s}): row = ${t}`);
  if (e === void 0) throw new ReferenceError(`Argument #2 n must be a number: n = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 n must be a number: n = ${e}`);
  if (n !== void 0) {
    if (!(n instanceof u))
      throw new TypeError(`Argument #3 result must be a Matrix instance: result = ${n}`);
    const { rows: o, columns: a } = h.get(n);
    if (o !== s)
      throw new RangeError(`result.rows must equal this.rows (${s}): result.rows = ${o}, this.rows = ${s}`);
    if (a !== r)
      throw new RangeError(`result.columns must equal this.columns (${r}): result.columns = ${a}, this.columns = ${r}`);
  } else n = new u(s, r, this.data);
  for (let o = 0; o < r; o++)
    n.data[t * r + o] = this.data[t * r + o] * e;
  return n;
}, y = function(t, e, n, s) {
  const { rows: r, columns: o } = h.get(this);
  if (t === void 0)
    throw new ReferenceError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${r}): row = ${t}`);
  if (typeof t != "number")
    throw new TypeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${r}): row = ${t}`);
  if (t % 1 !== 0)
    throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${r}): row = ${t}`);
  if (t < 0 || t > r)
    throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${r}): row = ${t}`);
  if (e === void 0)
    throw new ReferenceError(`Argument #2 count must be an integer greater than or equal to 1: count = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 count must be an integer greater than or equal to 1: count = ${e}`);
  if (e % 1 > 0)
    throw new RangeError(`Argument #2 count must be an integer greater than or equal to 1: count = ${e}`);
  if (e < 1)
    throw new RangeError(`Argument #2 count must be an integer greater than or equal to 1: count = ${e}`);
  if (n !== void 0) {
    if (typeof n != "object" || n === null)
      throw new TypeError(`Argument #3 newData must be an array like object containing only numbers: newData = ${n}`);
    if (!(ArrayBuffer.isView(n) === !0 && !(n instanceof DataView))) {
      if (n.length === void 0)
        throw new ReferenceError(`Argument #3 newData must be an array like object containing only numbers: newData.length = ${n.length}`);
      if (typeof n.length != "number")
        throw new TypeError(`Argument #3 newData must be an array like object containing only numbers: newData.length = ${n.length}`);
      for (let l = 0; l < n.length; l++)
        if (typeof n[l] != "number")
          throw new TypeError(`Argument #3 newData must be an array like object containing only numbers: newData[i] = ${n[l]}`);
    }
  }
  if (s !== void 0) {
    if (!(s instanceof u))
      throw new TypeError(`Argument #4 result must be a Matrix instance: result = ${s}`);
    const { rows: l, columns: m } = h.get(s);
    if (l !== r + e)
      throw new RangeError(`result.rows must equal this.rows + count (${r + e}): result.rows = ${l}, this.rows = ${r}`);
    if (m !== o)
      throw new RangeError(`result.columns must equal this.columns (${o}): result.columns = ${m}, this.columns = ${o}`);
  } else s = new u(r + e, o);
  if (e <= 0) return s;
  n === void 0 && (n = []);
  for (let l = n.length; l < o * e; l++)
    n[l] = 0;
  let a = 0, i = 0;
  for (let l = 0; l < r + e; l++) {
    for (let m = 0; m < o; m++)
      l >= t && l < t + e ? s.data[l * o + m] = n[i * o + m] : s.data[l * o + m] = this.data[a * o + m];
    l >= t && l < t + e ? i++ : a++;
  }
  return s;
}, R = function(t, e, n) {
  const { rows: s, columns: r } = h.get(this);
  if (t === void 0)
    throw new ReferenceError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${s}): row = ${t}`);
  if (typeof t != "number")
    throw new TypeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${s}): row = ${t}`);
  if (t % 1 !== 0)
    throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${s}): row = ${t}`);
  if (t < 0 || t > s)
    throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${s}): row = ${t}`);
  if (e === void 0)
    throw new ReferenceError(`Argument #2 count must be an integer >= 1 or < this.rows while row === 0: count = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 count must be an integer >= 1 or < this.rows while row === 0: count = ${e}`);
  if (e % 1 > 0)
    throw new RangeError(`Argument #2 count must be an integer >= 1 or < this.rows while row === 0: count = ${e}`);
  if (e < 1 || t === 0 && e >= s)
    throw new RangeError(`Argument #2 count must be an integer >= 1 or < this.rows while row === 0: count = ${e}`);
  if (n !== void 0) {
    if (!(n instanceof u))
      throw new TypeError(`Argument #3 result must be a Matrix instance: result = ${n}`);
    const { rows: a, columns: i } = h.get(n);
    if (a !== s - e)
      throw new RangeError(`result.rows must equal this.rows - count (${s - e}): result.rows = ${a}, this.rows = ${s}`);
    if (i !== r)
      throw new RangeError(`result.columns must equal this.columns (${r}): result.columns = ${i}, this.columns = ${r}`);
  } else n = new u(s - e, r);
  let o = 0;
  for (let a = 0; a < s; a++)
    if (!(a >= t && a < t + e)) {
      for (let i = 0; i < r; i++)
        n.data[o * r + i] = this.data[a * r + i];
      o++;
    }
  return n;
}, A = function(t, e, n) {
  if (!(this instanceof u)) throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: s, columns: r } = h.get(this);
  if (t === void 0)
    throw new ReferenceError(`Argument #1 a must be an integer >= 0 and < this.columns (${r}): a = ${t}`);
  if (typeof t != "number")
    throw new TypeError(`Argument #1 a must be an integer >= 0 and < this.columns (${r}): a = ${t}`);
  if (t % 1 !== 0)
    throw new RangeError(`Argument #1 a must be an integer >= 0 and < this.columns (${r}): a = ${t}`);
  if (t < 0 || t >= r)
    throw new RangeError(`Argument #1 a must be an integer >= 0 and < this.columns (${r}): a = ${t}`);
  if (e === void 0)
    throw new ReferenceError(`Argument #2 b must be an integer >= 0 and < this.columns (${r}): b = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 b must be an integer >= 0 and < this.columns (${r}): b = ${e}`);
  if (e % 1 !== 0)
    throw new RangeError(`Argument #2 b must be an integer >= 0 and < this.columns (${r}): b = ${e}`);
  if (e < 0 || e >= r)
    throw new RangeError(`Argument #2 b must be an integer >= 0 and < this.columns (${r}): b = ${e}`);
  if (n !== void 0) {
    if (!(n instanceof u))
      throw new TypeError(`Argument #3 result must be a Matrix instance: result = ${n}`);
    const { rows: o, columns: a } = h.get(n);
    if (o !== s)
      throw new RangeError(`result.rows must = this.rows: result.rows = ${o}, this.rows = ${s}`);
    if (a !== r)
      throw new RangeError(`result.columns must = this.columns: result.columns = ${a}, this.columns = ${r}`);
  } else n = new u(s, r, this.data);
  for (let o = 0; o < s; o++) {
    const a = this.data[o * r + t];
    n.data[o * r + t] = this.data[o * r + e], n.data[o * r + e] = a;
  }
  return n;
}, p = function(t, e, n = 1, s) {
  if (!(this instanceof u)) throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: r, columns: o } = h.get(this);
  if (t === void 0)
    throw new ReferenceError(`Argument #1 a must be an integer >= 0 and < this.columns (${o}): a = ${t}`);
  if (typeof t != "number")
    throw new TypeError(`Argument #1 a must be an integer >= 0 and < this.columns (${o}): a = ${t}`);
  if (t % 1 !== 0)
    throw new RangeError(`Argument #1 a must be an integer >= 0 and < this.columns (${o}): a = ${t}`);
  if (t < 0 || t >= o)
    throw new RangeError(`Argument #1 a must be an integer >= 0 and < this.columns (${o}): a = ${t}`);
  if (e === void 0)
    throw new ReferenceError(`Argument #2 b must be an integer >= 0 and < this.columns (${o}): b = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 b must be an integer >= 0 and < this.columns (${o}): b = ${e}`);
  if (e % 1 !== 0)
    throw new RangeError(`Argument #2 b must be an integer >= 0 and < this.columns (${o}): b = ${e}`);
  if (e < 0 || e >= o)
    throw new RangeError(`Argument #2 b must be an integer >= 0 and < this.columns (${o}): b = ${e}`);
  if (typeof n != "number")
    throw new TypeError(`Argument #3 n must be a number: n = ${n}`);
  if (s !== void 0) {
    if (!(s instanceof u))
      throw new TypeError(`Argument #4 result must be a Matrix instance: result = ${s}`);
    const { rows: a, columns: i } = h.get(s);
    if (a !== r)
      throw new RangeError(`result.rows must equal this.rows (${r}): result.rows = ${a}, this.rows = ${r}`);
    if (i !== o)
      throw new RangeError(`result.columns must equal this.columns (${o}): result.columns = ${i}, this.columns = ${o}`);
  } else s = new u(r, o, this.data);
  for (let a = 0; a < r; a++)
    s.data[a * o + e] = this.data[a * o + e] + this.data[a * o + t] * n;
  return s;
}, q = function(t, e, n) {
  if (!(this instanceof u)) throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: s, columns: r } = h.get(this);
  if (t === void 0)
    throw new ReferenceError(`Argument #1 column must be an integer >= 0 and < this.columns (${r}): column = ${t}`);
  if (typeof t != "number")
    throw new TypeError(`Argument #1 column must be an integer >= 0 and < this.columns (${r}): column = ${t}`);
  if (t % 1 !== 0)
    throw new RangeError(`Argument #1 column must be an integer >= 0 and < this.columns (${r}): column = ${t}`);
  if (t < 0 || t >= r)
    throw new RangeError(`Argument #1 column must be an integer >= 0 and < this.columns (${r}): column = ${t}`);
  if (e === void 0) throw new ReferenceError(`Argument #2 n must be a number: n = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 n must be a number: n = ${e}`);
  if (n !== void 0) {
    if (!(n instanceof u))
      throw new TypeError(`Argument #3 result must be a Matrix instance: result = ${n}`);
    const { rows: o, columns: a } = h.get(n);
    if (o !== s)
      throw new RangeError(`result.rows must equal this.rows (${s}): result.rows = ${o}, this.rows = ${s}`);
    if (a !== r)
      throw new RangeError(`result.columns must equal this.columns (${r}): result.columns = ${a}, this.columns = ${r}`);
  } else n = new u(s, r, this.data);
  for (let o = 0; o < s; o++)
    n.data[o * r + t] = this.data[o * r + t] * e;
  return n;
}, T = function(t, e, n, s) {
  if (!(this instanceof u)) throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: r, columns: o } = h.get(this);
  if (t === void 0)
    throw new ReferenceError(`Argument #1 column must be an integer >= 0 and < this.columns (${o}): column = ${t}`);
  if (typeof t != "number")
    throw new TypeError(`Argument #1 column must be an integer >= 0 and < this.columns (${o}): column = ${t}`);
  if (t % 1 !== 0)
    throw new RangeError(`Argument #1 column must be an integer >= 0 and < this.columns (${o}): column = ${t}`);
  if (t < 0 || t > o)
    throw new RangeError(`Argument #1 column must be an integer >= 0 and < this.columns (${o}): column = ${t}`);
  if (e === void 0)
    throw new ReferenceError(`Argument #2 count must be an integer greater than or equal to 1: count = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 count must be an integer greater than or equal to 1: count = ${e}`);
  if (e % 1 > 0)
    throw new RangeError(`Argument #2 count must be an integer greater than or equal to 1: count = ${e}`);
  if (e < 1)
    throw new RangeError(`Argument #2 count must be an integer greater than or equal to 1: count = ${e}`);
  if (n !== void 0) {
    if (typeof n != "object" || n === null)
      throw new TypeError(`Argument #3 newData must be an array like object containing only numbers: newData = ${n}`);
    if (!(ArrayBuffer.isView(n) === !0 && !(n instanceof DataView))) {
      if (n.length === void 0)
        throw new ReferenceError(`Argument #3 newData must be an array like object containing only numbers: newData.length = ${n.length}`);
      if (typeof n.length != "number")
        throw new TypeError(`Argument #3 newData must be an array like object containing only numbers: newData.length = ${n.length}`);
      for (let i = 0; i < n.length; i++)
        if (typeof n[i] != "number")
          throw new TypeError(`Argument #3 newData must be an array like object containing only numbers: newData[i] = ${n[i]}`);
    }
  }
  if (s !== void 0) {
    if (!(s instanceof u))
      throw new TypeError(`Argument #4 result must be a Matrix instance: result = ${s}`);
    const { rows: i, columns: l } = h.get(s);
    if (i !== r)
      throw new RangeError(`result.rows must equal this.rows (${r}): result.rows = ${i}, this.rows = ${r}`);
    if (l !== o + e)
      throw new RangeError(`result.columns must equal this.columns + count (${o + e}): result.columns = ${l}, this.columns = ${o}`);
  } else s = new u(r, o + e);
  if (e <= 0) return s;
  n === void 0 && (n = []);
  for (let i = n.length; i < r * e; i++)
    n[i] = 0;
  let a = o + e;
  for (let i = 0; i < r; i++) {
    let l = 0, m = 0;
    for (let w = 0; w < a; w++)
      w >= t && w < t + e ? (s.data[i * a + w] = n[i * e + m], m++) : (s.data[i * a + w] = this.data[i * o + l], l++);
  }
  return s;
}, x = function(t, e, n) {
  if (!(this instanceof u)) throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: s, columns: r } = h.get(this);
  if (t === void 0)
    throw new ReferenceError(`Argument #1 column must be an integer >= 0 and < this.columns (${r}): column = ${t}`);
  if (typeof t != "number")
    throw new TypeError(`Argument #1 column must be an integer >= 0 and < this.columns (${r}): column = ${t}`);
  if (t % 1 !== 0)
    throw new RangeError(`Argument #1 column must be an integer >= 0 and < this.columns (${r}): column = ${t}`);
  if (t < 0 || t > r)
    throw new RangeError(`Argument #1 column must be an integer >= 0 and < this.columns (${r}): column = ${t}`);
  if (e === void 0)
    throw new ReferenceError(`Argument #2 count must be an integer >= 1 or < this.columns - column: count = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 count must be an integer >= 1 or < this.columns - column: count = ${e}`);
  if (e % 1 > 0)
    throw new RangeError(`Argument #2 count must be an integer >= 1 or < this.columns - column: count = ${e}`);
  if (e < 1 || e > r - t)
    throw new RangeError(`Argument #2 count must be an integer >= 1 or < this.columns - column: count = ${e}`);
  if (n !== void 0) {
    if (!(n instanceof u))
      throw new TypeError(`Argument #4 result must be a Matrix instance: result = ${n}`);
    const { rows: a, columns: i } = h.get(n);
    if (a !== s)
      throw new RangeError(`result.rows must equal this.rows (${s}): result.rows = ${a}, this.rows = ${s}`);
    if (i !== r - e)
      throw new RangeError(`result.columns must equal this.columns - count (${r - e}): result.columns = ${i}, this.columns = ${r}`);
  } else n = new u(s, r - e);
  if (e <= 0) return n;
  let o = 0;
  for (let a = 0; a < s; a++)
    for (let i = 0; i < r; i++)
      i >= t && i < t + e || (n.data[o] = this.data[a * r + i], o++);
  return n;
}, u = function(t, e, n, s) {
  if (this instanceof u) {
    if (t === void 0) throw new ReferenceError(`Argument #1 rows must be an integer and greater than or equal to 1: rows = ${t}`);
    if (typeof t != "number") throw new TypeError(`Argument #1 rows must be an integer and greater than or equal to 1: rows = ${t}`);
    if (t % 1 !== 0) throw new RangeError(`Argument #1 rows must be an integer and greater than or equal to 1: rows = ${t}`);
    if (t < 1) throw new RangeError(`Argument #1 rows must be an integer and greater than or equal to 1: rows = ${t}`);
    if (e === void 0) throw new ReferenceError(`Argument #2 columns must be an integer and greater than or equal to 1: columns = ${e}`);
    if (typeof e != "number") throw new TypeError(`Argument #2 columns must be an integer and greater than or equal to 1: columns = ${e}`);
    if (e % 1 !== 0) throw new RangeError(`Argument #2 columns must be an integer and greater than or equal to 1: columns = ${e}`);
    if (e < 1) throw new RangeError(`Argument #2 columns must be an integer and greater than or equal to 1: columns = ${e}`);
  } else throw new SyntaxError("Matrix must be called with the new operator");
  let r, o, a;
  if (s !== void 0) {
    if (r = n, r === null || typeof r != "object")
      throw new TypeError(`Argument #3 data must be an array of numbers: data = ${r}`);
    if (!(ArrayBuffer.isView(r) === !0 && !(r instanceof DataView))) {
      if (r.length === void 0)
        throw new TypeError(`Argument #3 data must be an array of numbers: data = ${r}`);
      if (typeof r.length != "number")
        throw new TypeError(`Argument #3 data must be an array of numbers: data = ${r}`);
      for (let i = 0; i < r.length; i++)
        if (typeof r[i] != "number")
          throw new TypeError(`Argument #3 data must be an array of numbers: data = ${r}`);
    }
    if (s === null || typeof s != "object")
      throw new TypeError(`Argument #4 options must be an object: options = ${s}`);
    o = s.buffer, a = s.byteOffset;
  } else if (n !== void 0) {
    if (n === null || typeof n != "object")
      throw new TypeError(`Argument #3 dataOrOptions must be an object or an array of numbers: dataOrOptions = ${n}`);
    if (n.length === void 0)
      s = n, o = s.buffer, a = s.byteOffset;
    else {
      if (r = n, r === null || typeof r != "object")
        throw new TypeError(`Argument #3 dataOrOptions must be an object or an array of numbers: dataOrOptions = ${n}`);
      if (typeof r.length != "number")
        throw new TypeError(`Argument #3 dataOrOptions must be an object or an array of numbers: dataOrOptions.length = ${n.length}`);
      for (let i = 0; i < r.length; i++)
        if (typeof r[i] != "number")
          throw new TypeError(`Argument #3 dataOrOptions must be an object or an array of numbers: dataOrOptions[i] = ${n[i]}`);
    }
  }
  if (o !== void 0)
    if (o instanceof ArrayBuffer) {
      if (o.byteLength < t * e * 8)
        throw new RangeError(`options.buffer must be an ArrayBuffer instance with a fixed byteLength greater than or equal to data.length * 8 (${t * e * 8}): options.buffer.byteLength = ${o.byteLength}`);
      if (o.resizable === !0)
        throw new RangeError(`options.buffer must be an ArrayBuffer instance with a fixed byteLength greater than or equal to data.length * 8 (${t * e * 8}): options.buffer.resizable = ${o.resizable}`);
    } else throw new TypeError(`options.buffer must be an ArrayBuffer instance with a fixed byteLength greater than or equal to data.length * 8 (${t * e * 8}): options.buffer = ${o}`);
  else o = new ArrayBuffer(t * e * 8);
  if (a !== void 0) {
    if (typeof a != "number") throw new TypeError(`options.byteOffset must be a multiple of 8, at least 0, and less than or equal to buffer.byteLength - data.length * 8 (${o.byteLength - t * e * 8}): options.byteOffset = ${a}`);
    if (a % 8 > 0 || a < 0 || o.byteLength - a < t * e * 8) throw new RangeError(`options.byteOffset must be a multiple of 8, at least 0, and less than or equal to buffer.byteLength - data.length * 8 (${o.byteLength - t * e * 8}): options.byteOffset = ${a}`);
  }
  if (h.set(this, { rows: t, columns: e }), Object.defineProperty(this, "data", {
    configurable: !1,
    enumerable: !0,
    value: new Float64Array(o, a, t * e),
    writable: !1
  }), r !== void 0) {
    const i = Math.min(r.length, t * e);
    for (let l = 0; l < i; l++)
      this.data[l] = r[l];
  }
  return this;
}, C = function(t) {
  if (!(this instanceof u)) throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: e, columns: n } = h.get(this);
  if (t !== void 0) {
    if (!(t instanceof u))
      throw new TypeError(`Argument #1 result must be a Matrix instance: result = ${t}`);
    const { rows: s, columns: r } = h.get(t);
    if (s !== e)
      throw new RangeError(`result.rows must equal this.rows: result.rows = ${s}, this.rows = ${e}`);
    if (r !== n)
      throw new RangeError(`result.columns must equal this.columns: result.columns = ${r}, this.columns = ${n}`);
  } else t = new u(e, n);
  for (let s = 0; s < e; s++)
    for (let r = 0; r < n; r++)
      t.data[r * e + s] = this.data[s * n + r];
  return t;
}, M = function() {
  if (!(this instanceof u)) throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: t, columns: e } = h.get(this), n = new Array(t);
  for (let s = 0; s < t; s++) {
    n[s] = [];
    for (let r = 0; r < e; r++)
      n[s][r] = this.data[s * e + r];
  }
  return n;
}, j = function() {
  if (!(this instanceof u)) throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: t, columns: e } = h.get(this), n = new Array(e);
  for (let s = 0; s < e; s++)
    n[s] = [];
  for (let s = 0; s < t; s++)
    for (let r = 0; r < e; r++)
      n[r][s] = this.data[s * e + r];
  return n;
};
u.prototype = {
  get rows() {
    return h.get(this).rows;
  },
  get columns() {
    return h.get(this).columns;
  },
  add: f,
  addColumnToColumn: p,
  addRowToRow: b,
  insertColumns: T,
  insertRows: y,
  multiplyColumn: q,
  multiplyMatrix: $,
  multiplyRow: E,
  multiplyScalar: c,
  removeColumns: x,
  removeRows: R,
  subtract: g,
  switchColumns: A,
  switchRows: d,
  to2DArrayColumnMajor: j,
  to2DArrayRowMajor: M,
  transpose: C
};
export {
  u as Matrix
};
