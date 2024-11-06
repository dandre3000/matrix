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
const l = /* @__PURE__ */ new WeakMap(), f = function(r, e) {
  if (r === void 0)
    throw new ReferenceError(`Argument #1 matrix must be a Matrix instance: matrix = ${r}`);
  if (!(r instanceof u))
    throw new TypeError(`Argument #1 matrix must be a Matrix instance: matrix = ${r}`);
  const { rows: t, columns: n } = l.get(this), { rows: s, columns: o } = l.get(r);
  if (t !== s)
    throw new RangeError(`The dimensions of this must equal the dimensions of matrix: this.rows = ${t}, matrix.rows = ${s}`);
  if (n !== o)
    throw new RangeError(`The dimensions of this must equal the dimensions of matrix: this.columns = ${n}, matrix.columns = ${o}`);
  if (e !== void 0) {
    if (!(e instanceof u))
      throw new TypeError(`Argument #2 result must be a Matrix instance and result.data.length must be greater than or equal to this.data.length: result = ${e}`);
    const { rows: i, columns: a } = l.get(e);
    if (i !== t)
      throw new RangeError(`result.rows must equal this.rows: result.rows = ${i}, this.rows = ${t}`);
    if (a !== n)
      throw new RangeError(`result.columns must equal this.columns: result.columns = ${a}, this.columns = ${n}`);
  } else e = new u(t, n);
  for (let i = 0; i < this.data.length; i++)
    e.data[i] = this.data[i] + r.data[i];
  return e;
}, g = function(r, e) {
  if (r === void 0)
    throw new ReferenceError(`Argument #1 matrix must be a Matrix instance: matrix = ${r}`);
  if (!(r instanceof u))
    throw new TypeError(`Argument #1 matrix must be a Matrix instance: matrix = ${r}`);
  const { rows: t, columns: n } = l.get(this), { rows: s, columns: o } = l.get(r);
  if (t !== s)
    throw new RangeError(`The dimensions of this must equal the dimensions of matrix: this.rows = ${t}, matrix.rows = ${s}`);
  if (n !== o)
    throw new RangeError(`The dimensions of this must equal the dimensions of matrix: this.columns = ${n}, matrix.columns = ${o}`);
  if (e !== void 0) {
    if (!(e instanceof u))
      throw new TypeError(`Argument #2 result must be a Matrix instance and result.data.length must be greater than or equal to this.data.length: result = ${e}`);
    const { rows: i, columns: a } = l.get(e);
    if (i !== t)
      throw new RangeError(`result.rows must equal this.rows: result.rows = ${i}, this.rows = ${t}`);
    if (a !== n)
      throw new RangeError(`result.columns must equal this.columns: result.columns = ${a}, this.columns = ${n}`);
  } else e = new u(t, n);
  for (let i = 0; i < this.data.length; i++)
    e.data[i] = this.data[i] - r.data[i];
  return e;
}, c = function(r, e) {
  if (r === void 0)
    throw new ReferenceError(`Argument #1 n must be a number: n = ${r}`);
  if (typeof r != "number")
    throw new TypeError(`Argument #1 n must be a number: n = ${r}`);
  const { rows: t, columns: n } = l.get(this);
  if (e !== void 0) {
    if (!(e instanceof u))
      throw new TypeError(`Argument #2 result must be a Matrix instance and result.data.length must be greater than or equal to this.data.length: result = ${e}`);
    const { rows: s, columns: o } = l.get(e);
    if (s !== t)
      throw new RangeError(`result.rows must equal this.rows: result.rows = ${s}, this.rows = ${t}`);
    if (o !== n)
      throw new RangeError(`result.columns must equal this.columns: result.columns = ${o}, this.columns = ${n}`);
  } else e = new u(t, n);
  for (let s = 0; s < this.data.length; s++)
    e.data[s] = this.data[s] * r;
  return e;
}, $ = function(r, e) {
  if (r === void 0)
    throw new ReferenceError(`Argument #1 matrix must be a Matrix instance: matrix = ${r}`);
  if (!(r instanceof u))
    throw new TypeError(`Argument #1 matrix must be a Matrix instance: matrix = ${r}`);
  const { rows: t, columns: n } = l.get(this), { rows: s, columns: o } = l.get(r);
  if (n !== s)
    throw new RangeError(`this.columns must equal matrix.rows: this.columns = ${n}, matrix.rows = ${s}`);
  if (e !== void 0) {
    if (!(e instanceof u))
      throw new TypeError(`Argument #2 result must be a Matrix instance and result.data.length must be greater than or equal to this.data.length: result = ${e}`);
    const { rows: a, columns: h } = l.get(e);
    if (a !== t)
      throw new RangeError(`result.rows must equal this.rows: result.rows = ${a}, this.rows = ${t}`);
    if (h !== o)
      throw new RangeError(`result.columns must equal matrix.columns: result.columns = ${h}, matrix.columns = ${o}`);
  } else e = new u(t, o);
  let i = [];
  for (let a = 0; a < t; a++)
    for (let h = 0; h < o; h++) {
      let m = 0;
      for (let w = 0; w < n; w++)
        m += this.data[a * n + w] * r.data[w * o + h];
      i[a * o + h] = m;
    }
  for (let a = 0; a < i.length; a++)
    e.data[a] = i[a];
  return e;
}, d = function(r) {
  if (!(this instanceof u))
    throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: e, columns: t } = l.get(this);
  if (r !== void 0) {
    if (!(r instanceof u))
      throw new TypeError(`Argument #1 result must be a Matrix instance: result = ${r}`);
    const { rows: n, columns: s } = l.get(r);
    if (n !== e)
      throw new RangeError(`result.rows must equal this.rows: result.rows = ${n}, this.rows = ${e}`);
    if (s !== t)
      throw new RangeError(`result.columns must equal this.columns: result.columns = ${s}, this.columns = ${t}`);
  } else r = new u(e, t);
  for (let n = 0; n < e; n++)
    for (let s = 0; s < t; s++)
      r.data[s * e + n] = this.data[n * t + s];
  return r;
}, b = function(r) {
  if (!(this instanceof u))
    throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: e, columns: t } = l.get(this);
  if (r !== void 0) {
    if (r.l !== void 0) {
      if (!(r.l instanceof u))
        throw new TypeError(`result.l must be a Matrix instance: result = ${r}`);
      const { rows: o, columns: i } = l.get(r.l);
      if (o !== e)
        throw new RangeError(`result.l.rows must === this.rows and result.l.columns must === this.rows: result.l.rows = ${o}`);
      if (i !== e)
        throw new RangeError(`result.l.rows must === this.rows and result.l.columns must === this.rows: result.l.columns = ${i}`);
    } else r.l = new u(e, e);
    if (r.u !== void 0) {
      if (!(r.u instanceof u))
        throw new TypeError(`result.u must be a Matrix instance: result = ${r}`);
      const { rows: o, columns: i } = l.get(r.u);
      if (o !== e)
        throw new RangeError(`result.u.rows must === this.rows and result.u.columns must === this.rows: result.u.rows = ${o}`);
      if (i !== t)
        throw new RangeError(`result.u.rows must === this.rows and result.u.columns must === this.columns: result.u.columns = ${i}`);
    } else r.u = new u(e, t);
  } else r = {
    l: new u(e, e),
    u: new u(e, t)
  };
  const n = r.u, s = r.l;
  for (let o = 0; o < e; o++)
    s.data[o * e + o] = 1;
  for (let o = 0; o < e; o++)
    for (let i = 0; i < t; i++)
      n.data[o * t + i] = this.data[o * t + i];
  for (let o = 0; o < t; o++) {
    let i = !1;
    n.data[o * t + o] === 0 && (i = !0);
    for (let a = o + 1; a < e; a++)
      if (n.data[a * t + o] !== 0)
        if (i === !0)
          i = !1, n.switchRows(o, a, n), s.switchRows(o, a, s);
        else {
          const h = n.data[a * t + o] / n.data[o * t + o];
          s.data[a * e + o] = h, n.addRowToRow(o, a, -1 * h, n);
        }
  }
  return r;
}, E = function() {
  if (!(this instanceof u))
    throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const r = l.get(this).rows, e = this.luDecomposition().u;
  let t = 1;
  for (let n = 0; n < r; n++)
    t *= e.data[n * r + n];
  return t;
}, R = function(r, e, t) {
  const { rows: n, columns: s } = l.get(this);
  if (r === void 0)
    throw new ReferenceError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${n}): a = ${r}`);
  if (typeof r != "number")
    throw new TypeError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${n}): a = ${r}`);
  if (r % 1 !== 0)
    throw new RangeError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${n}): a = ${r}`);
  if (r < 0 || r >= n)
    throw new RangeError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${n}): a = ${r}`);
  if (e === void 0)
    throw new ReferenceError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${n}): b = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${n}): b = ${e}`);
  if (e % 1 !== 0)
    throw new RangeError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${n}): b = ${e}`);
  if (e < 0 || e >= n)
    throw new RangeError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${n}): b = ${e}`);
  if (t !== void 0) {
    if (!(t instanceof u))
      throw new TypeError(`Argument #3 result must be a Matrix instance: result = ${t}`);
    const { rows: o, columns: i } = l.get(t);
    if (o !== n)
      throw new RangeError(`result.rows must equal this.rows: result.rows = ${o}, this.rows = ${n}`);
    if (i !== s)
      throw new RangeError(`result.columns must equal this.columns: result.columns = ${i}, this.columns = ${s}`);
  } else t = new u(n, s, [...this.data]);
  for (let o = 0; o < s; o++) {
    const i = this.data[r * s + o];
    t.data[r * s + o] = this.data[e * s + o], t.data[e * s + o] = i;
  }
  return t;
}, y = function(r, e, t = 1, n) {
  const { rows: s, columns: o } = l.get(this);
  if (r === void 0)
    throw new ReferenceError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${s}): a = ${r}`);
  if (typeof r != "number")
    throw new TypeError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${s}): a = ${r}`);
  if (r % 1 !== 0)
    throw new RangeError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${s}): a = ${r}`);
  if (r < 0 || r >= s)
    throw new RangeError(`Argument #1 a must be an integer greater than or equal to 0 and less than this.rows (${s}): a = ${r}`);
  if (e === void 0)
    throw new ReferenceError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${s}): b = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${s}): b = ${e}`);
  if (e % 1 !== 0)
    throw new RangeError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${s}): b = ${e}`);
  if (e < 0 || e >= s)
    throw new RangeError(`Argument #2 b must be an integer greater than or equal to 0 and less than this.rows (${s}): b = ${e}`);
  if (typeof t != "number")
    throw new TypeError(`Argument #3 n must be a number: n = ${t}`);
  if (n !== void 0) {
    if (!(n instanceof u))
      throw new TypeError(`Argument #4 result must be a Matrix instance: result = ${n}`);
    const { rows: i, columns: a } = l.get(n);
    if (i !== s)
      throw new RangeError(`result.rows must equal this.rows (${s}): result.rows = ${i}, this.rows = ${s}`);
    if (a !== o)
      throw new RangeError(`result.columns must equal this.columns (${o}): result.columns = ${a}, this.columns = ${o}`);
  } else n = new u(s, o, [...this.data]);
  for (let i = 0; i < o; i++)
    n.data[e * o + i] = this.data[e * o + i] + this.data[r * o + i] * t;
  return n;
}, A = function(r, e, t) {
  const { rows: n, columns: s } = l.get(this);
  if (r === void 0)
    throw new ReferenceError(`Argument #1 row must be an integer greater than or equal to 0 and less than this.rows (${n}): row = ${r}`);
  if (typeof r != "number")
    throw new TypeError(`Argument #1 row must be an integer greater than or equal to 0 and less than this.rows (${n}): row = ${r}`);
  if (r % 1 !== 0)
    throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than this.rows (${n}): row = ${r}`);
  if (r < 0 || r >= n)
    throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than this.rows (${n}): row = ${r}`);
  if (e === void 0) throw new ReferenceError(`Argument #2 n must be a number: n = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 n must be a number: n = ${e}`);
  if (t !== void 0) {
    if (!(t instanceof u))
      throw new TypeError(`Argument #3 result must be a Matrix instance: result = ${t}`);
    const { rows: o, columns: i } = l.get(t);
    if (o !== n)
      throw new RangeError(`result.rows must equal this.rows (${n}): result.rows = ${o}, this.rows = ${n}`);
    if (i !== s)
      throw new RangeError(`result.columns must equal this.columns (${s}): result.columns = ${i}, this.columns = ${s}`);
  } else t = new u(n, s, [...this.data]);
  for (let o = 0; o < s; o++)
    t.data[r * s + o] = this.data[r * s + o] * e;
  return t;
}, p = function(r, e, t, n) {
  const { rows: s, columns: o } = l.get(this);
  if (r === void 0)
    throw new ReferenceError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${s}): row = ${r}`);
  if (typeof r != "number")
    throw new TypeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${s}): row = ${r}`);
  if (r % 1 !== 0)
    throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${s}): row = ${r}`);
  if (r < 0 || r > s)
    throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${s}): row = ${r}`);
  if (e === void 0)
    throw new ReferenceError(`Argument #2 count must be an integer greater than or equal to 1: count = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 count must be an integer greater than or equal to 1: count = ${e}`);
  if (e % 1 > 0)
    throw new RangeError(`Argument #2 count must be an integer greater than or equal to 1: count = ${e}`);
  if (e < 1)
    throw new RangeError(`Argument #2 count must be an integer greater than or equal to 1: count = ${e}`);
  if (t !== void 0) {
    if (typeof t != "object" || t === null)
      throw new TypeError(`Argument #3 newData must be an array like object containing only numbers: newData = ${t}`);
    if (!(ArrayBuffer.isView(t) === !0 && !(t instanceof DataView))) {
      if (t.length === void 0)
        throw new ReferenceError(`Argument #3 newData must be an array like object containing only numbers: newData.length = ${t.length}`);
      if (typeof t.length != "number")
        throw new TypeError(`Argument #3 newData must be an array like object containing only numbers: newData.length = ${t.length}`);
      for (let h = 0; h < t.length; h++)
        if (typeof t[h] != "number")
          throw new TypeError(`Argument #3 newData must be an array like object containing only numbers: newData[i] = ${t[h]}`);
    }
  }
  if (n !== void 0) {
    if (!(n instanceof u))
      throw new TypeError(`Argument #4 result must be a Matrix instance: result = ${n}`);
    const { rows: h, columns: m } = l.get(n);
    if (h !== s + e)
      throw new RangeError(`result.rows must equal this.rows + count (${s + e}): result.rows = ${h}, this.rows = ${s}`);
    if (m !== o)
      throw new RangeError(`result.columns must equal this.columns (${o}): result.columns = ${m}, this.columns = ${o}`);
  } else n = new u(s + e, o);
  if (e <= 0) return n;
  t === void 0 && (t = []);
  for (let h = t.length; h < o * e; h++)
    t[h] = 0;
  let i = 0, a = 0;
  for (let h = 0; h < s + e; h++) {
    for (let m = 0; m < o; m++)
      h >= r && h < r + e ? n.data[h * o + m] = t[a * o + m] : n.data[h * o + m] = this.data[i * o + m];
    h >= r && h < r + e ? a++ : i++;
  }
  return n;
}, q = function(r, e, t) {
  const { rows: n, columns: s } = l.get(this);
  if (r === void 0)
    throw new ReferenceError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${n}): row = ${r}`);
  if (typeof r != "number")
    throw new TypeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${n}): row = ${r}`);
  if (r % 1 !== 0)
    throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${n}): row = ${r}`);
  if (r < 0 || r > n)
    throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${n}): row = ${r}`);
  if (e === void 0)
    throw new ReferenceError(`Argument #2 count must be an integer >= 1 or < this.rows while row === 0: count = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 count must be an integer >= 1 or < this.rows while row === 0: count = ${e}`);
  if (e % 1 > 0)
    throw new RangeError(`Argument #2 count must be an integer >= 1 or < this.rows while row === 0: count = ${e}`);
  if (e < 1 || r === 0 && e >= n)
    throw new RangeError(`Argument #2 count must be an integer >= 1 or < this.rows while row === 0: count = ${e}`);
  if (t !== void 0) {
    if (!(t instanceof u))
      throw new TypeError(`Argument #3 result must be a Matrix instance: result = ${t}`);
    const { rows: i, columns: a } = l.get(t);
    if (i !== n - e)
      throw new RangeError(`result.rows must equal this.rows - count (${n - e}): result.rows = ${i}, this.rows = ${n}`);
    if (a !== s)
      throw new RangeError(`result.columns must equal this.columns (${s}): result.columns = ${a}, this.columns = ${s}`);
  } else t = new u(n - e, s);
  let o = 0;
  for (let i = 0; i < n; i++)
    if (!(i >= r && i < r + e)) {
      for (let a = 0; a < s; a++)
        t.data[o * s + a] = this.data[i * s + a];
      o++;
    }
  return t;
}, T = function(r, e, t) {
  if (!(this instanceof u)) throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: n, columns: s } = l.get(this);
  if (r === void 0)
    throw new ReferenceError(`Argument #1 a must be an integer >= 0 and < this.columns (${s}): a = ${r}`);
  if (typeof r != "number")
    throw new TypeError(`Argument #1 a must be an integer >= 0 and < this.columns (${s}): a = ${r}`);
  if (r % 1 !== 0)
    throw new RangeError(`Argument #1 a must be an integer >= 0 and < this.columns (${s}): a = ${r}`);
  if (r < 0 || r >= s)
    throw new RangeError(`Argument #1 a must be an integer >= 0 and < this.columns (${s}): a = ${r}`);
  if (e === void 0)
    throw new ReferenceError(`Argument #2 b must be an integer >= 0 and < this.columns (${s}): b = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 b must be an integer >= 0 and < this.columns (${s}): b = ${e}`);
  if (e % 1 !== 0)
    throw new RangeError(`Argument #2 b must be an integer >= 0 and < this.columns (${s}): b = ${e}`);
  if (e < 0 || e >= s)
    throw new RangeError(`Argument #2 b must be an integer >= 0 and < this.columns (${s}): b = ${e}`);
  if (t !== void 0) {
    if (!(t instanceof u))
      throw new TypeError(`Argument #3 result must be a Matrix instance: result = ${t}`);
    const { rows: o, columns: i } = l.get(t);
    if (o !== n)
      throw new RangeError(`result.rows must = this.rows: result.rows = ${o}, this.rows = ${n}`);
    if (i !== s)
      throw new RangeError(`result.columns must = this.columns: result.columns = ${i}, this.columns = ${s}`);
  } else t = new u(n, s, [...this.data]);
  for (let o = 0; o < n; o++) {
    const i = this.data[o * s + r];
    t.data[o * s + r] = this.data[o * s + e], t.data[o * s + e] = i;
  }
  return t;
}, x = function(r, e, t = 1, n) {
  if (!(this instanceof u)) throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: s, columns: o } = l.get(this);
  if (r === void 0)
    throw new ReferenceError(`Argument #1 a must be an integer >= 0 and < this.columns (${o}): a = ${r}`);
  if (typeof r != "number")
    throw new TypeError(`Argument #1 a must be an integer >= 0 and < this.columns (${o}): a = ${r}`);
  if (r % 1 !== 0)
    throw new RangeError(`Argument #1 a must be an integer >= 0 and < this.columns (${o}): a = ${r}`);
  if (r < 0 || r >= o)
    throw new RangeError(`Argument #1 a must be an integer >= 0 and < this.columns (${o}): a = ${r}`);
  if (e === void 0)
    throw new ReferenceError(`Argument #2 b must be an integer >= 0 and < this.columns (${o}): b = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 b must be an integer >= 0 and < this.columns (${o}): b = ${e}`);
  if (e % 1 !== 0)
    throw new RangeError(`Argument #2 b must be an integer >= 0 and < this.columns (${o}): b = ${e}`);
  if (e < 0 || e >= o)
    throw new RangeError(`Argument #2 b must be an integer >= 0 and < this.columns (${o}): b = ${e}`);
  if (typeof t != "number")
    throw new TypeError(`Argument #3 n must be a number: n = ${t}`);
  if (n !== void 0) {
    if (!(n instanceof u))
      throw new TypeError(`Argument #4 result must be a Matrix instance: result = ${n}`);
    const { rows: i, columns: a } = l.get(n);
    if (i !== s)
      throw new RangeError(`result.rows must equal this.rows (${s}): result.rows = ${i}, this.rows = ${s}`);
    if (a !== o)
      throw new RangeError(`result.columns must equal this.columns (${o}): result.columns = ${a}, this.columns = ${o}`);
  } else n = new u(s, o, [...this.data]);
  for (let i = 0; i < s; i++)
    n.data[i * o + e] = this.data[i * o + e] + this.data[i * o + r] * t;
  return n;
}, C = function(r, e, t) {
  if (!(this instanceof u)) throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: n, columns: s } = l.get(this);
  if (r === void 0)
    throw new ReferenceError(`Argument #1 column must be an integer >= 0 and < this.columns (${s}): column = ${r}`);
  if (typeof r != "number")
    throw new TypeError(`Argument #1 column must be an integer >= 0 and < this.columns (${s}): column = ${r}`);
  if (r % 1 !== 0)
    throw new RangeError(`Argument #1 column must be an integer >= 0 and < this.columns (${s}): column = ${r}`);
  if (r < 0 || r >= s)
    throw new RangeError(`Argument #1 column must be an integer >= 0 and < this.columns (${s}): column = ${r}`);
  if (e === void 0) throw new ReferenceError(`Argument #2 n must be a number: n = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 n must be a number: n = ${e}`);
  if (t !== void 0) {
    if (!(t instanceof u))
      throw new TypeError(`Argument #3 result must be a Matrix instance: result = ${t}`);
    const { rows: o, columns: i } = l.get(t);
    if (o !== n)
      throw new RangeError(`result.rows must equal this.rows (${n}): result.rows = ${o}, this.rows = ${n}`);
    if (i !== s)
      throw new RangeError(`result.columns must equal this.columns (${s}): result.columns = ${i}, this.columns = ${s}`);
  } else t = new u(n, s, [...this.data]);
  for (let o = 0; o < n; o++)
    t.data[o * s + r] = this.data[o * s + r] * e;
  return t;
}, M = function(r, e, t, n) {
  if (!(this instanceof u)) throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: s, columns: o } = l.get(this);
  if (r === void 0)
    throw new ReferenceError(`Argument #1 column must be an integer >= 0 and < this.columns (${o}): column = ${r}`);
  if (typeof r != "number")
    throw new TypeError(`Argument #1 column must be an integer >= 0 and < this.columns (${o}): column = ${r}`);
  if (r % 1 !== 0)
    throw new RangeError(`Argument #1 column must be an integer >= 0 and < this.columns (${o}): column = ${r}`);
  if (r < 0 || r > o)
    throw new RangeError(`Argument #1 column must be an integer >= 0 and < this.columns (${o}): column = ${r}`);
  if (e === void 0)
    throw new ReferenceError(`Argument #2 count must be an integer greater than or equal to 1: count = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 count must be an integer greater than or equal to 1: count = ${e}`);
  if (e % 1 > 0)
    throw new RangeError(`Argument #2 count must be an integer greater than or equal to 1: count = ${e}`);
  if (e < 1)
    throw new RangeError(`Argument #2 count must be an integer greater than or equal to 1: count = ${e}`);
  if (t !== void 0) {
    if (typeof t != "object" || t === null)
      throw new TypeError(`Argument #3 newData must be an array like object containing only numbers: newData = ${t}`);
    if (!(ArrayBuffer.isView(t) === !0 && !(t instanceof DataView))) {
      if (t.length === void 0)
        throw new ReferenceError(`Argument #3 newData must be an array like object containing only numbers: newData.length = ${t.length}`);
      if (typeof t.length != "number")
        throw new TypeError(`Argument #3 newData must be an array like object containing only numbers: newData.length = ${t.length}`);
      for (let a = 0; a < t.length; a++)
        if (typeof t[a] != "number")
          throw new TypeError(`Argument #3 newData must be an array like object containing only numbers: newData[i] = ${t[a]}`);
    }
  }
  if (n !== void 0) {
    if (!(n instanceof u))
      throw new TypeError(`Argument #4 result must be a Matrix instance: result = ${n}`);
    const { rows: a, columns: h } = l.get(n);
    if (a !== s)
      throw new RangeError(`result.rows must equal this.rows (${s}): result.rows = ${a}, this.rows = ${s}`);
    if (h !== o + e)
      throw new RangeError(`result.columns must equal this.columns + count (${o + e}): result.columns = ${h}, this.columns = ${o}`);
  } else n = new u(s, o + e);
  if (e <= 0) return n;
  t === void 0 && (t = []);
  for (let a = t.length; a < s * e; a++)
    t[a] = 0;
  let i = o + e;
  for (let a = 0; a < s; a++) {
    let h = 0, m = 0;
    for (let w = 0; w < i; w++)
      w >= r && w < r + e ? (n.data[a * i + w] = t[a * e + m], m++) : (n.data[a * i + w] = this.data[a * o + h], h++);
  }
  return n;
}, j = function(r, e, t) {
  if (!(this instanceof u)) throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: n, columns: s } = l.get(this);
  if (r === void 0)
    throw new ReferenceError(`Argument #1 column must be an integer >= 0 and < this.columns (${s}): column = ${r}`);
  if (typeof r != "number")
    throw new TypeError(`Argument #1 column must be an integer >= 0 and < this.columns (${s}): column = ${r}`);
  if (r % 1 !== 0)
    throw new RangeError(`Argument #1 column must be an integer >= 0 and < this.columns (${s}): column = ${r}`);
  if (r < 0 || r > s)
    throw new RangeError(`Argument #1 column must be an integer >= 0 and < this.columns (${s}): column = ${r}`);
  if (e === void 0)
    throw new ReferenceError(`Argument #2 count must be an integer >= 1 or < this.columns - column: count = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 count must be an integer >= 1 or < this.columns - column: count = ${e}`);
  if (e % 1 > 0)
    throw new RangeError(`Argument #2 count must be an integer >= 1 or < this.columns - column: count = ${e}`);
  if (e < 1 || e > s - r)
    throw new RangeError(`Argument #2 count must be an integer >= 1 or < this.columns - column: count = ${e}`);
  if (t !== void 0) {
    if (!(t instanceof u))
      throw new TypeError(`Argument #4 result must be a Matrix instance: result = ${t}`);
    const { rows: i, columns: a } = l.get(t);
    if (i !== n)
      throw new RangeError(`result.rows must equal this.rows (${n}): result.rows = ${i}, this.rows = ${n}`);
    if (a !== s - e)
      throw new RangeError(`result.columns must equal this.columns - count (${s - e}): result.columns = ${a}, this.columns = ${s}`);
  } else t = new u(n, s - e);
  if (e <= 0) return t;
  let o = 0;
  for (let i = 0; i < n; i++)
    for (let a = 0; a < s; a++)
      a >= r && a < r + e || (t.data[o] = this.data[i * s + a], o++);
  return t;
}, u = function(r, e, t) {
  if (this instanceof u) {
    if (r === void 0)
      throw new ReferenceError(`Argument #1 rows must be an integer and greater than or equal to 1: rows = ${r}`);
    if (typeof r != "number")
      throw new TypeError(`Argument #1 rows must be an integer and greater than or equal to 1: rows = ${r}`);
    if (r % 1 !== 0)
      throw new RangeError(`Argument #1 rows must be an integer and greater than or equal to 1: rows = ${r}`);
    if (r < 1)
      throw new RangeError(`Argument #1 rows must be an integer and greater than or equal to 1: rows = ${r}`);
    if (e === void 0)
      throw new ReferenceError(`Argument #2 columns must be an integer and greater than or equal to 1: columns = ${e}`);
    if (typeof e != "number")
      throw new TypeError(`Argument #2 columns must be an integer and greater than or equal to 1: columns = ${e}`);
    if (e % 1 !== 0)
      throw new RangeError(`Argument #2 columns must be an integer and greater than or equal to 1: columns = ${e}`);
    if (e < 1)
      throw new RangeError(`Argument #2 columns must be an integer and greater than or equal to 1: columns = ${e}`);
  } else throw new SyntaxError("Matrix must be called with the new operator");
  if (t !== void 0)
    if (typeof t == "number") {
      const n = new Float64Array(r * e);
      for (let s = 0; s < n.length; s++)
        n[s] = t;
      t = n;
    } else if (t instanceof Array) {
      const n = new Float64Array(r * e), s = Math.min(t.length, n.length);
      for (let o = 0; o < s; o++) {
        if (typeof t[o] != "number") throw new TypeError(`Argument #3 data must be a number, an Array of numbers of any length or a Float64Array where data.length must === rows * columns (${r * e}) and data.buffer.resizable must === false: data[i] = ${t[o]}`);
        n[o] = t[o];
      }
      t = n;
    } else if (t instanceof Float64Array) {
      if (t.length !== r * e)
        throw new TypeError(`Argument #3 data must be a number, an Array of numbers of any length or a Float64Array where data.length must === rows * columns (${r * e}) and data.buffer.resizable must === false: data.length = ${t.length}`);
      if (t.buffer.resizable === !0)
        throw new TypeError(`Argument #3 data must be a number, an Array of numbers of any length or a Float64Array where data.length must === rows * columns (${r * e}) and data.buffer.resizable must === false: data.buffer.resizable = ${t.buffer.resizable}`);
    } else throw new TypeError(`Argument #3 data must be a number, an Array of numbers of any length or a Float64Array where data.length must === rows * columns (${r * e}) and data.buffer.resizable must === false: data = ${t}`);
  else t = new Float64Array(r * e);
  return l.set(this, { rows: r, columns: e }), Object.defineProperty(this, "data", {
    configurable: !1,
    enumerable: !0,
    value: t,
    writable: !1
  }), this;
}, k = function() {
  if (!(this instanceof u))
    throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: r, columns: e } = l.get(this), t = new Array(r);
  for (let n = 0; n < r; n++) {
    t[n] = [];
    for (let s = 0; s < e; s++)
      t[n][s] = this.data[n * e + s];
  }
  return t;
}, F = function() {
  if (!(this instanceof u))
    throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: r, columns: e } = l.get(this), t = new Array(e);
  for (let n = 0; n < e; n++)
    t[n] = [];
  for (let n = 0; n < r; n++)
    for (let s = 0; s < e; s++)
      t[s][n] = this.data[n * e + s];
  return t;
};
u.prototype = {
  get rows() {
    return l.get(this).rows;
  },
  get columns() {
    return l.get(this).columns;
  },
  add: f,
  addColumnToColumn: x,
  addRowToRow: y,
  determinant: E,
  insertColumns: M,
  insertRows: p,
  luDecomposition: b,
  multiplyColumn: C,
  multiplyMatrix: $,
  multiplyRow: A,
  multiplyScalar: c,
  removeColumns: j,
  removeRows: q,
  subtract: g,
  switchColumns: T,
  switchRows: R,
  to2DArrayColumnMajor: F,
  to2DArrayRowMajor: k,
  transpose: d
};
export {
  u as Matrix
};
