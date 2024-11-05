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
  const { rows: t, columns: s } = l.get(this), { rows: n, columns: o } = l.get(r);
  if (t !== n)
    throw new RangeError(`The dimensions of this must equal the dimensions of matrix: this.rows = ${t}, matrix.rows = ${n}`);
  if (s !== o)
    throw new RangeError(`The dimensions of this must equal the dimensions of matrix: this.columns = ${s}, matrix.columns = ${o}`);
  if (e !== void 0) {
    if (!(e instanceof u))
      throw new TypeError(`Argument #2 result must be a Matrix instance and result.data.length must be greater than or equal to this.data.length: result = ${e}`);
    const { rows: i, columns: a } = l.get(e);
    if (i !== t)
      throw new RangeError(`result.rows must equal this.rows: result.rows = ${i}, this.rows = ${t}`);
    if (a !== s)
      throw new RangeError(`result.columns must equal this.columns: result.columns = ${a}, this.columns = ${s}`);
  } else e = new u(t, s);
  for (let i = 0; i < this.data.length; i++)
    e.data[i] = this.data[i] + r.data[i];
  return e;
}, g = function(r, e) {
  if (r === void 0)
    throw new ReferenceError(`Argument #1 matrix must be a Matrix instance: matrix = ${r}`);
  if (!(r instanceof u))
    throw new TypeError(`Argument #1 matrix must be a Matrix instance: matrix = ${r}`);
  const { rows: t, columns: s } = l.get(this), { rows: n, columns: o } = l.get(r);
  if (t !== n)
    throw new RangeError(`The dimensions of this must equal the dimensions of matrix: this.rows = ${t}, matrix.rows = ${n}`);
  if (s !== o)
    throw new RangeError(`The dimensions of this must equal the dimensions of matrix: this.columns = ${s}, matrix.columns = ${o}`);
  if (e !== void 0) {
    if (!(e instanceof u))
      throw new TypeError(`Argument #2 result must be a Matrix instance and result.data.length must be greater than or equal to this.data.length: result = ${e}`);
    const { rows: i, columns: a } = l.get(e);
    if (i !== t)
      throw new RangeError(`result.rows must equal this.rows: result.rows = ${i}, this.rows = ${t}`);
    if (a !== s)
      throw new RangeError(`result.columns must equal this.columns: result.columns = ${a}, this.columns = ${s}`);
  } else e = new u(t, s);
  for (let i = 0; i < this.data.length; i++)
    e.data[i] = this.data[i] - r.data[i];
  return e;
}, c = function(r, e) {
  if (r === void 0)
    throw new ReferenceError(`Argument #1 n must be a number: n = ${r}`);
  if (typeof r != "number")
    throw new TypeError(`Argument #1 n must be a number: n = ${r}`);
  const { rows: t, columns: s } = l.get(this);
  if (e !== void 0) {
    if (!(e instanceof u))
      throw new TypeError(`Argument #2 result must be a Matrix instance and result.data.length must be greater than or equal to this.data.length: result = ${e}`);
    const { rows: n, columns: o } = l.get(e);
    if (n !== t)
      throw new RangeError(`result.rows must equal this.rows: result.rows = ${n}, this.rows = ${t}`);
    if (o !== s)
      throw new RangeError(`result.columns must equal this.columns: result.columns = ${o}, this.columns = ${s}`);
  } else e = new u(t, s);
  for (let n = 0; n < this.data.length; n++)
    e.data[n] = this.data[n] * r;
  return e;
}, $ = function(r, e) {
  if (r === void 0)
    throw new ReferenceError(`Argument #1 matrix must be a Matrix instance: matrix = ${r}`);
  if (!(r instanceof u))
    throw new TypeError(`Argument #1 matrix must be a Matrix instance: matrix = ${r}`);
  const { rows: t, columns: s } = l.get(this), { rows: n, columns: o } = l.get(r);
  if (s !== n)
    throw new RangeError(`this.columns must equal matrix.rows: this.columns = ${s}, matrix.rows = ${n}`);
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
      for (let w = 0; w < s; w++)
        m += this.data[a * s + w] * r.data[w * o + h];
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
    const { rows: s, columns: n } = l.get(r);
    if (s !== e)
      throw new RangeError(`result.rows must equal this.rows: result.rows = ${s}, this.rows = ${e}`);
    if (n !== t)
      throw new RangeError(`result.columns must equal this.columns: result.columns = ${n}, this.columns = ${t}`);
  } else r = new u(e, t);
  for (let s = 0; s < e; s++)
    for (let n = 0; n < t; n++)
      r.data[n * e + s] = this.data[s * t + n];
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
  const s = r.u, n = r.l;
  for (let o = 0; o < e; o++)
    n.data[o * e + o] = 1;
  for (let o = 0; o < e; o++)
    for (let i = 0; i < t; i++)
      s.data[o * t + i] = this.data[o * t + i];
  for (let o = 0; o < t; o++) {
    let i = !1;
    s.data[o * t + o] === 0 && (i = !0);
    for (let a = o + 1; a < e; a++)
      if (s.data[a * t + o] !== 0)
        if (i === !0)
          i = !1, s.switchRows(o, a, s), n.switchRows(o, a, n);
        else {
          const h = s.data[a * t + o] / s.data[o * t + o];
          n.data[a * e + o] = h, s.addRowToRow(o, a, -1 * h, s);
        }
  }
  return r;
}, E = function(r, e, t) {
  const { rows: s, columns: n } = l.get(this);
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
  if (t !== void 0) {
    if (!(t instanceof u))
      throw new TypeError(`Argument #3 result must be a Matrix instance: result = ${t}`);
    const { rows: o, columns: i } = l.get(t);
    if (o !== s)
      throw new RangeError(`result.rows must equal this.rows: result.rows = ${o}, this.rows = ${s}`);
    if (i !== n)
      throw new RangeError(`result.columns must equal this.columns: result.columns = ${i}, this.columns = ${n}`);
  } else t = new u(s, n, [...this.data]);
  for (let o = 0; o < n; o++) {
    const i = this.data[r * n + o];
    t.data[r * n + o] = this.data[e * n + o], t.data[e * n + o] = i;
  }
  return t;
}, R = function(r, e, t = 1, s) {
  const { rows: n, columns: o } = l.get(this);
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
  if (typeof t != "number")
    throw new TypeError(`Argument #3 n must be a number: n = ${t}`);
  if (s !== void 0) {
    if (!(s instanceof u))
      throw new TypeError(`Argument #4 result must be a Matrix instance: result = ${s}`);
    const { rows: i, columns: a } = l.get(s);
    if (i !== n)
      throw new RangeError(`result.rows must equal this.rows (${n}): result.rows = ${i}, this.rows = ${n}`);
    if (a !== o)
      throw new RangeError(`result.columns must equal this.columns (${o}): result.columns = ${a}, this.columns = ${o}`);
  } else s = new u(n, o, [...this.data]);
  for (let i = 0; i < o; i++)
    s.data[e * o + i] = this.data[e * o + i] + this.data[r * o + i] * t;
  return s;
}, y = function(r, e, t) {
  const { rows: s, columns: n } = l.get(this);
  if (r === void 0)
    throw new ReferenceError(`Argument #1 row must be an integer greater than or equal to 0 and less than this.rows (${s}): row = ${r}`);
  if (typeof r != "number")
    throw new TypeError(`Argument #1 row must be an integer greater than or equal to 0 and less than this.rows (${s}): row = ${r}`);
  if (r % 1 !== 0)
    throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than this.rows (${s}): row = ${r}`);
  if (r < 0 || r >= s)
    throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than this.rows (${s}): row = ${r}`);
  if (e === void 0) throw new ReferenceError(`Argument #2 n must be a number: n = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 n must be a number: n = ${e}`);
  if (t !== void 0) {
    if (!(t instanceof u))
      throw new TypeError(`Argument #3 result must be a Matrix instance: result = ${t}`);
    const { rows: o, columns: i } = l.get(t);
    if (o !== s)
      throw new RangeError(`result.rows must equal this.rows (${s}): result.rows = ${o}, this.rows = ${s}`);
    if (i !== n)
      throw new RangeError(`result.columns must equal this.columns (${n}): result.columns = ${i}, this.columns = ${n}`);
  } else t = new u(s, n, [...this.data]);
  for (let o = 0; o < n; o++)
    t.data[r * n + o] = this.data[r * n + o] * e;
  return t;
}, A = function(r, e, t, s) {
  const { rows: n, columns: o } = l.get(this);
  if (r === void 0)
    throw new ReferenceError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${n}): row = ${r}`);
  if (typeof r != "number")
    throw new TypeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${n}): row = ${r}`);
  if (r % 1 !== 0)
    throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${n}): row = ${r}`);
  if (r < 0 || r > n)
    throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${n}): row = ${r}`);
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
  if (s !== void 0) {
    if (!(s instanceof u))
      throw new TypeError(`Argument #4 result must be a Matrix instance: result = ${s}`);
    const { rows: h, columns: m } = l.get(s);
    if (h !== n + e)
      throw new RangeError(`result.rows must equal this.rows + count (${n + e}): result.rows = ${h}, this.rows = ${n}`);
    if (m !== o)
      throw new RangeError(`result.columns must equal this.columns (${o}): result.columns = ${m}, this.columns = ${o}`);
  } else s = new u(n + e, o);
  if (e <= 0) return s;
  t === void 0 && (t = []);
  for (let h = t.length; h < o * e; h++)
    t[h] = 0;
  let i = 0, a = 0;
  for (let h = 0; h < n + e; h++) {
    for (let m = 0; m < o; m++)
      h >= r && h < r + e ? s.data[h * o + m] = t[a * o + m] : s.data[h * o + m] = this.data[i * o + m];
    h >= r && h < r + e ? a++ : i++;
  }
  return s;
}, p = function(r, e, t) {
  const { rows: s, columns: n } = l.get(this);
  if (r === void 0)
    throw new ReferenceError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${s}): row = ${r}`);
  if (typeof r != "number")
    throw new TypeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${s}): row = ${r}`);
  if (r % 1 !== 0)
    throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${s}): row = ${r}`);
  if (r < 0 || r > s)
    throw new RangeError(`Argument #1 row must be an integer greater than or equal to 0 and less than or equal to this.rows (${s}): row = ${r}`);
  if (e === void 0)
    throw new ReferenceError(`Argument #2 count must be an integer >= 1 or < this.rows while row === 0: count = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 count must be an integer >= 1 or < this.rows while row === 0: count = ${e}`);
  if (e % 1 > 0)
    throw new RangeError(`Argument #2 count must be an integer >= 1 or < this.rows while row === 0: count = ${e}`);
  if (e < 1 || r === 0 && e >= s)
    throw new RangeError(`Argument #2 count must be an integer >= 1 or < this.rows while row === 0: count = ${e}`);
  if (t !== void 0) {
    if (!(t instanceof u))
      throw new TypeError(`Argument #3 result must be a Matrix instance: result = ${t}`);
    const { rows: i, columns: a } = l.get(t);
    if (i !== s - e)
      throw new RangeError(`result.rows must equal this.rows - count (${s - e}): result.rows = ${i}, this.rows = ${s}`);
    if (a !== n)
      throw new RangeError(`result.columns must equal this.columns (${n}): result.columns = ${a}, this.columns = ${n}`);
  } else t = new u(s - e, n);
  let o = 0;
  for (let i = 0; i < s; i++)
    if (!(i >= r && i < r + e)) {
      for (let a = 0; a < n; a++)
        t.data[o * n + a] = this.data[i * n + a];
      o++;
    }
  return t;
}, q = function(r, e, t) {
  if (!(this instanceof u)) throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: s, columns: n } = l.get(this);
  if (r === void 0)
    throw new ReferenceError(`Argument #1 a must be an integer >= 0 and < this.columns (${n}): a = ${r}`);
  if (typeof r != "number")
    throw new TypeError(`Argument #1 a must be an integer >= 0 and < this.columns (${n}): a = ${r}`);
  if (r % 1 !== 0)
    throw new RangeError(`Argument #1 a must be an integer >= 0 and < this.columns (${n}): a = ${r}`);
  if (r < 0 || r >= n)
    throw new RangeError(`Argument #1 a must be an integer >= 0 and < this.columns (${n}): a = ${r}`);
  if (e === void 0)
    throw new ReferenceError(`Argument #2 b must be an integer >= 0 and < this.columns (${n}): b = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 b must be an integer >= 0 and < this.columns (${n}): b = ${e}`);
  if (e % 1 !== 0)
    throw new RangeError(`Argument #2 b must be an integer >= 0 and < this.columns (${n}): b = ${e}`);
  if (e < 0 || e >= n)
    throw new RangeError(`Argument #2 b must be an integer >= 0 and < this.columns (${n}): b = ${e}`);
  if (t !== void 0) {
    if (!(t instanceof u))
      throw new TypeError(`Argument #3 result must be a Matrix instance: result = ${t}`);
    const { rows: o, columns: i } = l.get(t);
    if (o !== s)
      throw new RangeError(`result.rows must = this.rows: result.rows = ${o}, this.rows = ${s}`);
    if (i !== n)
      throw new RangeError(`result.columns must = this.columns: result.columns = ${i}, this.columns = ${n}`);
  } else t = new u(s, n, [...this.data]);
  for (let o = 0; o < s; o++) {
    const i = this.data[o * n + r];
    t.data[o * n + r] = this.data[o * n + e], t.data[o * n + e] = i;
  }
  return t;
}, T = function(r, e, t = 1, s) {
  if (!(this instanceof u)) throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: n, columns: o } = l.get(this);
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
  if (s !== void 0) {
    if (!(s instanceof u))
      throw new TypeError(`Argument #4 result must be a Matrix instance: result = ${s}`);
    const { rows: i, columns: a } = l.get(s);
    if (i !== n)
      throw new RangeError(`result.rows must equal this.rows (${n}): result.rows = ${i}, this.rows = ${n}`);
    if (a !== o)
      throw new RangeError(`result.columns must equal this.columns (${o}): result.columns = ${a}, this.columns = ${o}`);
  } else s = new u(n, o, [...this.data]);
  for (let i = 0; i < n; i++)
    s.data[i * o + e] = this.data[i * o + e] + this.data[i * o + r] * t;
  return s;
}, x = function(r, e, t) {
  if (!(this instanceof u)) throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: s, columns: n } = l.get(this);
  if (r === void 0)
    throw new ReferenceError(`Argument #1 column must be an integer >= 0 and < this.columns (${n}): column = ${r}`);
  if (typeof r != "number")
    throw new TypeError(`Argument #1 column must be an integer >= 0 and < this.columns (${n}): column = ${r}`);
  if (r % 1 !== 0)
    throw new RangeError(`Argument #1 column must be an integer >= 0 and < this.columns (${n}): column = ${r}`);
  if (r < 0 || r >= n)
    throw new RangeError(`Argument #1 column must be an integer >= 0 and < this.columns (${n}): column = ${r}`);
  if (e === void 0) throw new ReferenceError(`Argument #2 n must be a number: n = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 n must be a number: n = ${e}`);
  if (t !== void 0) {
    if (!(t instanceof u))
      throw new TypeError(`Argument #3 result must be a Matrix instance: result = ${t}`);
    const { rows: o, columns: i } = l.get(t);
    if (o !== s)
      throw new RangeError(`result.rows must equal this.rows (${s}): result.rows = ${o}, this.rows = ${s}`);
    if (i !== n)
      throw new RangeError(`result.columns must equal this.columns (${n}): result.columns = ${i}, this.columns = ${n}`);
  } else t = new u(s, n, [...this.data]);
  for (let o = 0; o < s; o++)
    t.data[o * n + r] = this.data[o * n + r] * e;
  return t;
}, C = function(r, e, t, s) {
  if (!(this instanceof u)) throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: n, columns: o } = l.get(this);
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
  if (s !== void 0) {
    if (!(s instanceof u))
      throw new TypeError(`Argument #4 result must be a Matrix instance: result = ${s}`);
    const { rows: a, columns: h } = l.get(s);
    if (a !== n)
      throw new RangeError(`result.rows must equal this.rows (${n}): result.rows = ${a}, this.rows = ${n}`);
    if (h !== o + e)
      throw new RangeError(`result.columns must equal this.columns + count (${o + e}): result.columns = ${h}, this.columns = ${o}`);
  } else s = new u(n, o + e);
  if (e <= 0) return s;
  t === void 0 && (t = []);
  for (let a = t.length; a < n * e; a++)
    t[a] = 0;
  let i = o + e;
  for (let a = 0; a < n; a++) {
    let h = 0, m = 0;
    for (let w = 0; w < i; w++)
      w >= r && w < r + e ? (s.data[a * i + w] = t[a * e + m], m++) : (s.data[a * i + w] = this.data[a * o + h], h++);
  }
  return s;
}, M = function(r, e, t) {
  if (!(this instanceof u)) throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: s, columns: n } = l.get(this);
  if (r === void 0)
    throw new ReferenceError(`Argument #1 column must be an integer >= 0 and < this.columns (${n}): column = ${r}`);
  if (typeof r != "number")
    throw new TypeError(`Argument #1 column must be an integer >= 0 and < this.columns (${n}): column = ${r}`);
  if (r % 1 !== 0)
    throw new RangeError(`Argument #1 column must be an integer >= 0 and < this.columns (${n}): column = ${r}`);
  if (r < 0 || r > n)
    throw new RangeError(`Argument #1 column must be an integer >= 0 and < this.columns (${n}): column = ${r}`);
  if (e === void 0)
    throw new ReferenceError(`Argument #2 count must be an integer >= 1 or < this.columns - column: count = ${e}`);
  if (typeof e != "number")
    throw new TypeError(`Argument #2 count must be an integer >= 1 or < this.columns - column: count = ${e}`);
  if (e % 1 > 0)
    throw new RangeError(`Argument #2 count must be an integer >= 1 or < this.columns - column: count = ${e}`);
  if (e < 1 || e > n - r)
    throw new RangeError(`Argument #2 count must be an integer >= 1 or < this.columns - column: count = ${e}`);
  if (t !== void 0) {
    if (!(t instanceof u))
      throw new TypeError(`Argument #4 result must be a Matrix instance: result = ${t}`);
    const { rows: i, columns: a } = l.get(t);
    if (i !== s)
      throw new RangeError(`result.rows must equal this.rows (${s}): result.rows = ${i}, this.rows = ${s}`);
    if (a !== n - e)
      throw new RangeError(`result.columns must equal this.columns - count (${n - e}): result.columns = ${a}, this.columns = ${n}`);
  } else t = new u(s, n - e);
  if (e <= 0) return t;
  let o = 0;
  for (let i = 0; i < s; i++)
    for (let a = 0; a < n; a++)
      a >= r && a < r + e || (t.data[o] = this.data[i * n + a], o++);
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
      const s = new Float64Array(r * e);
      for (let n = 0; n < s.length; n++)
        s[n] = t;
      t = s;
    } else if (t instanceof Array) {
      const s = new Float64Array(r * e), n = Math.min(t.length, s.length);
      for (let o = 0; o < n; o++) {
        if (typeof t[o] != "number") throw new TypeError(`Argument #3 data must be a number, an Array of numbers of any length or a Float64Array where data.length must === rows * columns (${r * e}) and data.buffer.resizable must === false: data[i] = ${t[o]}`);
        s[o] = t[o];
      }
      t = s;
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
}, j = function() {
  if (!(this instanceof u))
    throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: r, columns: e } = l.get(this), t = new Array(r);
  for (let s = 0; s < r; s++) {
    t[s] = [];
    for (let n = 0; n < e; n++)
      t[s][n] = this.data[s * e + n];
  }
  return t;
}, k = function() {
  if (!(this instanceof u))
    throw new TypeError(`this must be a Matrix instance: this = ${this}`);
  const { rows: r, columns: e } = l.get(this), t = new Array(e);
  for (let s = 0; s < e; s++)
    t[s] = [];
  for (let s = 0; s < r; s++)
    for (let n = 0; n < e; n++)
      t[n][s] = this.data[s * e + n];
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
  addColumnToColumn: T,
  addRowToRow: R,
  insertColumns: C,
  insertRows: A,
  luDecomposition: b,
  multiplyColumn: x,
  multiplyMatrix: $,
  multiplyRow: y,
  multiplyScalar: c,
  removeColumns: M,
  removeRows: p,
  subtract: g,
  switchColumns: q,
  switchRows: E,
  to2DArrayColumnMajor: k,
  to2DArrayRowMajor: j,
  transpose: d
};
export {
  u as Matrix
};
