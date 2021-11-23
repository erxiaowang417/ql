/*
东东水果:脚本更新地址 https://gitee.com/lxk0301/jd_scripts/raw/master/jd_fruit.js
更新时间：2021-9-8
活动入口：京东APP我的-更多工具-东东农场
东东农场活动链接：https://h5.m.jd.com/babelDiy/Zeus/3KSjXqQabiTuD1cJ28QskrpWoBKT/index.html
已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
互助码shareCode请先手动运行脚本查看打印可看到
一天只能帮助3个人。多出的助力码无效
==========================Quantumultx=========================
[task_local]
#jd免费水果
5 6-18/6 * * * https://gitee.com/lxk0301/jd_scripts/raw/master/jd_fruit.js, tag=东东农场, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jdnc.png, enabled=true
=========================Loon=============================
[Script]
cron "5 6-18/6 * * *" script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_fruit.js,tag=东东农场

=========================Surge============================
东东农场 = type=cron,cronexp="5 6-18/6 * * *",wake-system=1,timeout=3600,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_fruit.js

=========================小火箭===========================
东东农场 = type=cron,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_fruit.js, cronexpr="5 6-18/6 * * *", timeout=3600, enable=true

jd免费水果 搬的https://github.com/liuxiaoyucc/jd-helper/blob/a6f275d9785748014fc6cca821e58427162e9336/fruit/fruit.js
*/
// prettier-ignore
!function (t, e) { "object" == typeof exports ? module.exports = exports = e() : "function" == typeof define && define.amd ? define([], e) : t.CryptoJS = e() }(this, function () { var h, t, e, r, i, n, f, o, s, c, a, l, d, m, x, b, H, z, A, u, p, _, v, y, g, B, w, k, S, C, D, E, R, M, F, P, W, O, I, U, K, X, L, j, N, T, q, Z, V, G, J, $, Q, Y, tt, et, rt, it, nt, ot, st, ct, at, ht, lt, ft, dt, ut, pt, _t, vt, yt, gt, Bt, wt, kt, St, bt = bt || function (l) { var t; if ("undefined" != typeof window && window.crypto && (t = window.crypto), !t && "undefined" != typeof window && window.msCrypto && (t = window.msCrypto), !t && "undefined" != typeof global && global.crypto && (t = global.crypto), !t && "function" == typeof require) try { t = require("crypto") } catch (t) { } function i() { if (t) { if ("function" == typeof t.getRandomValues) try { return t.getRandomValues(new Uint32Array(1))[0] } catch (t) { } if ("function" == typeof t.randomBytes) try { return t.randomBytes(4).readInt32LE() } catch (t) { } } throw new Error("Native crypto module could not be used to get secure random number.") } var r = Object.create || function (t) { var e; return n.prototype = t, e = new n, n.prototype = null, e }; function n() { } var e = {}, o = e.lib = {}, s = o.Base = { extend: function (t) { var e = r(this); return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function () { e.$super.init.apply(this, arguments) }), (e.init.prototype = e).$super = this, e }, create: function () { var t = this.extend(); return t.init.apply(t, arguments), t }, init: function () { }, mixIn: function (t) { for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]); t.hasOwnProperty("toString") && (this.toString = t.toString) }, clone: function () { return this.init.prototype.extend(this) } }, f = o.WordArray = s.extend({ init: function (t, e) { t = this.words = t || [], this.sigBytes = null != e ? e : 4 * t.length }, toString: function (t) { return (t || a).stringify(this) }, concat: function (t) { var e = this.words, r = t.words, i = this.sigBytes, n = t.sigBytes; if (this.clamp(), i % 4) for (var o = 0; o < n; o++) { var s = r[o >>> 2] >>> 24 - o % 4 * 8 & 255; e[i + o >>> 2] |= s << 24 - (i + o) % 4 * 8 } else for (o = 0; o < n; o += 4)e[i + o >>> 2] = r[o >>> 2]; return this.sigBytes += n, this }, clamp: function () { var t = this.words, e = this.sigBytes; t[e >>> 2] &= 4294967295 << 32 - e % 4 * 8, t.length = l.ceil(e / 4) }, clone: function () { var t = s.clone.call(this); return t.words = this.words.slice(0), t }, random: function (t) { for (var e = [], r = 0; r < t; r += 4)e.push(i()); return new f.init(e, t) } }), c = e.enc = {}, a = c.Hex = { stringify: function (t) { for (var e = t.words, r = t.sigBytes, i = [], n = 0; n < r; n++) { var o = e[n >>> 2] >>> 24 - n % 4 * 8 & 255; i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16)) } return i.join("") }, parse: function (t) { for (var e = t.length, r = [], i = 0; i < e; i += 2)r[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4; return new f.init(r, e / 2) } }, h = c.Latin1 = { stringify: function (t) { for (var e = t.words, r = t.sigBytes, i = [], n = 0; n < r; n++) { var o = e[n >>> 2] >>> 24 - n % 4 * 8 & 255; i.push(String.fromCharCode(o)) } return i.join("") }, parse: function (t) { for (var e = t.length, r = [], i = 0; i < e; i++)r[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8; return new f.init(r, e) } }, d = c.Utf8 = { stringify: function (t) { try { return decodeURIComponent(escape(h.stringify(t))) } catch (t) { throw new Error("Malformed UTF-8 data") } }, parse: function (t) { return h.parse(unescape(encodeURIComponent(t))) } }, u = o.BufferedBlockAlgorithm = s.extend({ reset: function () { this._data = new f.init, this._nDataBytes = 0 }, _append: function (t) { "string" == typeof t && (t = d.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes }, _process: function (t) { var e, r = this._data, i = r.words, n = r.sigBytes, o = this.blockSize, s = n / (4 * o), c = (s = t ? l.ceil(s) : l.max((0 | s) - this._minBufferSize, 0)) * o, a = l.min(4 * c, n); if (c) { for (var h = 0; h < c; h += o)this._doProcessBlock(i, h); e = i.splice(0, c), r.sigBytes -= a } return new f.init(e, a) }, clone: function () { var t = s.clone.call(this); return t._data = this._data.clone(), t }, _minBufferSize: 0 }), p = (o.Hasher = u.extend({ cfg: s.extend(), init: function (t) { this.cfg = this.cfg.extend(t), this.reset() }, reset: function () { u.reset.call(this), this._doReset() }, update: function (t) { return this._append(t), this._process(), this }, finalize: function (t) { return t && this._append(t), this._doFinalize() }, blockSize: 16, _createHelper: function (r) { return function (t, e) { return new r.init(e).finalize(t) } }, _createHmacHelper: function (r) { return function (t, e) { return new p.HMAC.init(r, e).finalize(t) } } }), e.algo = {}); return e }(Math); function mt(t, e, r) { return t ^ e ^ r } function xt(t, e, r) { return t & e | ~t & r } function Ht(t, e, r) { return (t | ~e) ^ r } function zt(t, e, r) { return t & r | e & ~r } function At(t, e, r) { return t ^ (e | ~r) } function Ct(t, e) { return t << e | t >>> 32 - e } function Dt(t, e, r, i) { var n, o = this._iv; o ? (n = o.slice(0), this._iv = void 0) : n = this._prevBlock, i.encryptBlock(n, 0); for (var s = 0; s < r; s++)t[e + s] ^= n[s] } function Et(t) { if (255 == (t >> 24 & 255)) { var e = t >> 16 & 255, r = t >> 8 & 255, i = 255 & t; 255 === e ? (e = 0, 255 === r ? (r = 0, 255 === i ? i = 0 : ++i) : ++r) : ++e, t = 0, t += e << 16, t += r << 8, t += i } else t += 1 << 24; return t } function Rt() { for (var t = this._X, e = this._C, r = 0; r < 8; r++)ft[r] = e[r]; e[0] = e[0] + 1295307597 + this._b | 0, e[1] = e[1] + 3545052371 + (e[0] >>> 0 < ft[0] >>> 0 ? 1 : 0) | 0, e[2] = e[2] + 886263092 + (e[1] >>> 0 < ft[1] >>> 0 ? 1 : 0) | 0, e[3] = e[3] + 1295307597 + (e[2] >>> 0 < ft[2] >>> 0 ? 1 : 0) | 0, e[4] = e[4] + 3545052371 + (e[3] >>> 0 < ft[3] >>> 0 ? 1 : 0) | 0, e[5] = e[5] + 886263092 + (e[4] >>> 0 < ft[4] >>> 0 ? 1 : 0) | 0, e[6] = e[6] + 1295307597 + (e[5] >>> 0 < ft[5] >>> 0 ? 1 : 0) | 0, e[7] = e[7] + 3545052371 + (e[6] >>> 0 < ft[6] >>> 0 ? 1 : 0) | 0, this._b = e[7] >>> 0 < ft[7] >>> 0 ? 1 : 0; for (r = 0; r < 8; r++) { var i = t[r] + e[r], n = 65535 & i, o = i >>> 16, s = ((n * n >>> 17) + n * o >>> 15) + o * o, c = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0); dt[r] = s ^ c } t[0] = dt[0] + (dt[7] << 16 | dt[7] >>> 16) + (dt[6] << 16 | dt[6] >>> 16) | 0, t[1] = dt[1] + (dt[0] << 8 | dt[0] >>> 24) + dt[7] | 0, t[2] = dt[2] + (dt[1] << 16 | dt[1] >>> 16) + (dt[0] << 16 | dt[0] >>> 16) | 0, t[3] = dt[3] + (dt[2] << 8 | dt[2] >>> 24) + dt[1] | 0, t[4] = dt[4] + (dt[3] << 16 | dt[3] >>> 16) + (dt[2] << 16 | dt[2] >>> 16) | 0, t[5] = dt[5] + (dt[4] << 8 | dt[4] >>> 24) + dt[3] | 0, t[6] = dt[6] + (dt[5] << 16 | dt[5] >>> 16) + (dt[4] << 16 | dt[4] >>> 16) | 0, t[7] = dt[7] + (dt[6] << 8 | dt[6] >>> 24) + dt[5] | 0 } function Mt() { for (var t = this._X, e = this._C, r = 0; r < 8; r++)wt[r] = e[r]; e[0] = e[0] + 1295307597 + this._b | 0, e[1] = e[1] + 3545052371 + (e[0] >>> 0 < wt[0] >>> 0 ? 1 : 0) | 0, e[2] = e[2] + 886263092 + (e[1] >>> 0 < wt[1] >>> 0 ? 1 : 0) | 0, e[3] = e[3] + 1295307597 + (e[2] >>> 0 < wt[2] >>> 0 ? 1 : 0) | 0, e[4] = e[4] + 3545052371 + (e[3] >>> 0 < wt[3] >>> 0 ? 1 : 0) | 0, e[5] = e[5] + 886263092 + (e[4] >>> 0 < wt[4] >>> 0 ? 1 : 0) | 0, e[6] = e[6] + 1295307597 + (e[5] >>> 0 < wt[5] >>> 0 ? 1 : 0) | 0, e[7] = e[7] + 3545052371 + (e[6] >>> 0 < wt[6] >>> 0 ? 1 : 0) | 0, this._b = e[7] >>> 0 < wt[7] >>> 0 ? 1 : 0; for (r = 0; r < 8; r++) { var i = t[r] + e[r], n = 65535 & i, o = i >>> 16, s = ((n * n >>> 17) + n * o >>> 15) + o * o, c = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0); kt[r] = s ^ c } t[0] = kt[0] + (kt[7] << 16 | kt[7] >>> 16) + (kt[6] << 16 | kt[6] >>> 16) | 0, t[1] = kt[1] + (kt[0] << 8 | kt[0] >>> 24) + kt[7] | 0, t[2] = kt[2] + (kt[1] << 16 | kt[1] >>> 16) + (kt[0] << 16 | kt[0] >>> 16) | 0, t[3] = kt[3] + (kt[2] << 8 | kt[2] >>> 24) + kt[1] | 0, t[4] = kt[4] + (kt[3] << 16 | kt[3] >>> 16) + (kt[2] << 16 | kt[2] >>> 16) | 0, t[5] = kt[5] + (kt[4] << 8 | kt[4] >>> 24) + kt[3] | 0, t[6] = kt[6] + (kt[5] << 16 | kt[5] >>> 16) + (kt[4] << 16 | kt[4] >>> 16) | 0, t[7] = kt[7] + (kt[6] << 8 | kt[6] >>> 24) + kt[5] | 0 } return h = bt.lib.WordArray, bt.enc.Base64 = { stringify: function (t) { var e = t.words, r = t.sigBytes, i = this._map; t.clamp(); for (var n = [], o = 0; o < r; o += 3)for (var s = (e[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (e[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | e[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, c = 0; c < 4 && o + .75 * c < r; c++)n.push(i.charAt(s >>> 6 * (3 - c) & 63)); var a = i.charAt(64); if (a) for (; n.length % 4;)n.push(a); return n.join("") }, parse: function (t) { var e = t.length, r = this._map, i = this._reverseMap; if (!i) { i = this._reverseMap = []; for (var n = 0; n < r.length; n++)i[r.charCodeAt(n)] = n } var o = r.charAt(64); if (o) { var s = t.indexOf(o); -1 !== s && (e = s) } return function (t, e, r) { for (var i = [], n = 0, o = 0; o < e; o++)if (o % 4) { var s = r[t.charCodeAt(o - 1)] << o % 4 * 2, c = r[t.charCodeAt(o)] >>> 6 - o % 4 * 2, a = s | c; i[n >>> 2] |= a << 24 - n % 4 * 8, n++ } return h.create(i, n) }(t, e, i) }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" }, function (l) { var t = bt, e = t.lib, r = e.WordArray, i = e.Hasher, n = t.algo, H = []; !function () { for (var t = 0; t < 64; t++)H[t] = 4294967296 * l.abs(l.sin(t + 1)) | 0 }(); var o = n.MD5 = i.extend({ _doReset: function () { this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]) }, _doProcessBlock: function (t, e) { for (var r = 0; r < 16; r++) { var i = e + r, n = t[i]; t[i] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8) } var o = this._hash.words, s = t[e + 0], c = t[e + 1], a = t[e + 2], h = t[e + 3], l = t[e + 4], f = t[e + 5], d = t[e + 6], u = t[e + 7], p = t[e + 8], _ = t[e + 9], v = t[e + 10], y = t[e + 11], g = t[e + 12], B = t[e + 13], w = t[e + 14], k = t[e + 15], S = o[0], m = o[1], x = o[2], b = o[3]; S = z(S, m, x, b, s, 7, H[0]), b = z(b, S, m, x, c, 12, H[1]), x = z(x, b, S, m, a, 17, H[2]), m = z(m, x, b, S, h, 22, H[3]), S = z(S, m, x, b, l, 7, H[4]), b = z(b, S, m, x, f, 12, H[5]), x = z(x, b, S, m, d, 17, H[6]), m = z(m, x, b, S, u, 22, H[7]), S = z(S, m, x, b, p, 7, H[8]), b = z(b, S, m, x, _, 12, H[9]), x = z(x, b, S, m, v, 17, H[10]), m = z(m, x, b, S, y, 22, H[11]), S = z(S, m, x, b, g, 7, H[12]), b = z(b, S, m, x, B, 12, H[13]), x = z(x, b, S, m, w, 17, H[14]), S = A(S, m = z(m, x, b, S, k, 22, H[15]), x, b, c, 5, H[16]), b = A(b, S, m, x, d, 9, H[17]), x = A(x, b, S, m, y, 14, H[18]), m = A(m, x, b, S, s, 20, H[19]), S = A(S, m, x, b, f, 5, H[20]), b = A(b, S, m, x, v, 9, H[21]), x = A(x, b, S, m, k, 14, H[22]), m = A(m, x, b, S, l, 20, H[23]), S = A(S, m, x, b, _, 5, H[24]), b = A(b, S, m, x, w, 9, H[25]), x = A(x, b, S, m, h, 14, H[26]), m = A(m, x, b, S, p, 20, H[27]), S = A(S, m, x, b, B, 5, H[28]), b = A(b, S, m, x, a, 9, H[29]), x = A(x, b, S, m, u, 14, H[30]), S = C(S, m = A(m, x, b, S, g, 20, H[31]), x, b, f, 4, H[32]), b = C(b, S, m, x, p, 11, H[33]), x = C(x, b, S, m, y, 16, H[34]), m = C(m, x, b, S, w, 23, H[35]), S = C(S, m, x, b, c, 4, H[36]), b = C(b, S, m, x, l, 11, H[37]), x = C(x, b, S, m, u, 16, H[38]), m = C(m, x, b, S, v, 23, H[39]), S = C(S, m, x, b, B, 4, H[40]), b = C(b, S, m, x, s, 11, H[41]), x = C(x, b, S, m, h, 16, H[42]), m = C(m, x, b, S, d, 23, H[43]), S = C(S, m, x, b, _, 4, H[44]), b = C(b, S, m, x, g, 11, H[45]), x = C(x, b, S, m, k, 16, H[46]), S = D(S, m = C(m, x, b, S, a, 23, H[47]), x, b, s, 6, H[48]), b = D(b, S, m, x, u, 10, H[49]), x = D(x, b, S, m, w, 15, H[50]), m = D(m, x, b, S, f, 21, H[51]), S = D(S, m, x, b, g, 6, H[52]), b = D(b, S, m, x, h, 10, H[53]), x = D(x, b, S, m, v, 15, H[54]), m = D(m, x, b, S, c, 21, H[55]), S = D(S, m, x, b, p, 6, H[56]), b = D(b, S, m, x, k, 10, H[57]), x = D(x, b, S, m, d, 15, H[58]), m = D(m, x, b, S, B, 21, H[59]), S = D(S, m, x, b, l, 6, H[60]), b = D(b, S, m, x, y, 10, H[61]), x = D(x, b, S, m, a, 15, H[62]), m = D(m, x, b, S, _, 21, H[63]), o[0] = o[0] + S | 0, o[1] = o[1] + m | 0, o[2] = o[2] + x | 0, o[3] = o[3] + b | 0 }, _doFinalize: function () { var t = this._data, e = t.words, r = 8 * this._nDataBytes, i = 8 * t.sigBytes; e[i >>> 5] |= 128 << 24 - i % 32; var n = l.floor(r / 4294967296), o = r; e[15 + (64 + i >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), e[14 + (64 + i >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), t.sigBytes = 4 * (e.length + 1), this._process(); for (var s = this._hash, c = s.words, a = 0; a < 4; a++) { var h = c[a]; c[a] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8) } return s }, clone: function () { var t = i.clone.call(this); return t._hash = this._hash.clone(), t } }); function z(t, e, r, i, n, o, s) { var c = t + (e & r | ~e & i) + n + s; return (c << o | c >>> 32 - o) + e } function A(t, e, r, i, n, o, s) { var c = t + (e & i | r & ~i) + n + s; return (c << o | c >>> 32 - o) + e } function C(t, e, r, i, n, o, s) { var c = t + (e ^ r ^ i) + n + s; return (c << o | c >>> 32 - o) + e } function D(t, e, r, i, n, o, s) { var c = t + (r ^ (e | ~i)) + n + s; return (c << o | c >>> 32 - o) + e } t.MD5 = i._createHelper(o), t.HmacMD5 = i._createHmacHelper(o) }(Math), e = (t = bt).lib, r = e.WordArray, i = e.Hasher, n = t.algo, f = [], o = n.SHA1 = i.extend({ _doReset: function () { this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]) }, _doProcessBlock: function (t, e) { for (var r = this._hash.words, i = r[0], n = r[1], o = r[2], s = r[3], c = r[4], a = 0; a < 80; a++) { if (a < 16) f[a] = 0 | t[e + a]; else { var h = f[a - 3] ^ f[a - 8] ^ f[a - 14] ^ f[a - 16]; f[a] = h << 1 | h >>> 31 } var l = (i << 5 | i >>> 27) + c + f[a]; l += a < 20 ? 1518500249 + (n & o | ~n & s) : a < 40 ? 1859775393 + (n ^ o ^ s) : a < 60 ? (n & o | n & s | o & s) - 1894007588 : (n ^ o ^ s) - 899497514, c = s, s = o, o = n << 30 | n >>> 2, n = i, i = l } r[0] = r[0] + i | 0, r[1] = r[1] + n | 0, r[2] = r[2] + o | 0, r[3] = r[3] + s | 0, r[4] = r[4] + c | 0 }, _doFinalize: function () { var t = this._data, e = t.words, r = 8 * this._nDataBytes, i = 8 * t.sigBytes; return e[i >>> 5] |= 128 << 24 - i % 32, e[14 + (64 + i >>> 9 << 4)] = Math.floor(r / 4294967296), e[15 + (64 + i >>> 9 << 4)] = r, t.sigBytes = 4 * e.length, this._process(), this._hash }, clone: function () { var t = i.clone.call(this); return t._hash = this._hash.clone(), t } }), t.SHA1 = i._createHelper(o), t.HmacSHA1 = i._createHmacHelper(o), function (n) { var t = bt, e = t.lib, r = e.WordArray, i = e.Hasher, o = t.algo, s = [], B = []; !function () { function t(t) { for (var e = n.sqrt(t), r = 2; r <= e; r++)if (!(t % r)) return; return 1 } function e(t) { return 4294967296 * (t - (0 | t)) | 0 } for (var r = 2, i = 0; i < 64;)t(r) && (i < 8 && (s[i] = e(n.pow(r, .5))), B[i] = e(n.pow(r, 1 / 3)), i++), r++ }(); var w = [], c = o.SHA256 = i.extend({ _doReset: function () { this._hash = new r.init(s.slice(0)) }, _doProcessBlock: function (t, e) { for (var r = this._hash.words, i = r[0], n = r[1], o = r[2], s = r[3], c = r[4], a = r[5], h = r[6], l = r[7], f = 0; f < 64; f++) { if (f < 16) w[f] = 0 | t[e + f]; else { var d = w[f - 15], u = (d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3, p = w[f - 2], _ = (p << 15 | p >>> 17) ^ (p << 13 | p >>> 19) ^ p >>> 10; w[f] = u + w[f - 7] + _ + w[f - 16] } var v = i & n ^ i & o ^ n & o, y = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22), g = l + ((c << 26 | c >>> 6) ^ (c << 21 | c >>> 11) ^ (c << 7 | c >>> 25)) + (c & a ^ ~c & h) + B[f] + w[f]; l = h, h = a, a = c, c = s + g | 0, s = o, o = n, n = i, i = g + (y + v) | 0 } r[0] = r[0] + i | 0, r[1] = r[1] + n | 0, r[2] = r[2] + o | 0, r[3] = r[3] + s | 0, r[4] = r[4] + c | 0, r[5] = r[5] + a | 0, r[6] = r[6] + h | 0, r[7] = r[7] + l | 0 }, _doFinalize: function () { var t = this._data, e = t.words, r = 8 * this._nDataBytes, i = 8 * t.sigBytes; return e[i >>> 5] |= 128 << 24 - i % 32, e[14 + (64 + i >>> 9 << 4)] = n.floor(r / 4294967296), e[15 + (64 + i >>> 9 << 4)] = r, t.sigBytes = 4 * e.length, this._process(), this._hash }, clone: function () { var t = i.clone.call(this); return t._hash = this._hash.clone(), t } }); t.SHA256 = i._createHelper(c), t.HmacSHA256 = i._createHmacHelper(c) }(Math), function () { var n = bt.lib.WordArray, t = bt.enc; t.Utf16 = t.Utf16BE = { stringify: function (t) { for (var e = t.words, r = t.sigBytes, i = [], n = 0; n < r; n += 2) { var o = e[n >>> 2] >>> 16 - n % 4 * 8 & 65535; i.push(String.fromCharCode(o)) } return i.join("") }, parse: function (t) { for (var e = t.length, r = [], i = 0; i < e; i++)r[i >>> 1] |= t.charCodeAt(i) << 16 - i % 2 * 16; return n.create(r, 2 * e) } }; function s(t) { return t << 8 & 4278255360 | t >>> 8 & 16711935 } t.Utf16LE = { stringify: function (t) { for (var e = t.words, r = t.sigBytes, i = [], n = 0; n < r; n += 2) { var o = s(e[n >>> 2] >>> 16 - n % 4 * 8 & 65535); i.push(String.fromCharCode(o)) } return i.join("") }, parse: function (t) { for (var e = t.length, r = [], i = 0; i < e; i++)r[i >>> 1] |= s(t.charCodeAt(i) << 16 - i % 2 * 16); return n.create(r, 2 * e) } } }(), function () { if ("function" == typeof ArrayBuffer) { var t = bt.lib.WordArray, n = t.init; (t.init = function (t) { if (t instanceof ArrayBuffer && (t = new Uint8Array(t)), (t instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)), t instanceof Uint8Array) { for (var e = t.byteLength, r = [], i = 0; i < e; i++)r[i >>> 2] |= t[i] << 24 - i % 4 * 8; n.call(this, r, e) } else n.apply(this, arguments) }).prototype = t } }(), Math, c = (s = bt).lib, a = c.WordArray, l = c.Hasher, d = s.algo, m = a.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]), x = a.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]), b = a.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]), H = a.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]), z = a.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), A = a.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), u = d.RIPEMD160 = l.extend({ _doReset: function () { this._hash = a.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]) }, _doProcessBlock: function (t, e) { for (var r = 0; r < 16; r++) { var i = e + r, n = t[i]; t[i] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8) } var o, s, c, a, h, l, f, d, u, p, _, v = this._hash.words, y = z.words, g = A.words, B = m.words, w = x.words, k = b.words, S = H.words; l = o = v[0], f = s = v[1], d = c = v[2], u = a = v[3], p = h = v[4]; for (r = 0; r < 80; r += 1)_ = o + t[e + B[r]] | 0, _ += r < 16 ? mt(s, c, a) + y[0] : r < 32 ? xt(s, c, a) + y[1] : r < 48 ? Ht(s, c, a) + y[2] : r < 64 ? zt(s, c, a) + y[3] : At(s, c, a) + y[4], _ = (_ = Ct(_ |= 0, k[r])) + h | 0, o = h, h = a, a = Ct(c, 10), c = s, s = _, _ = l + t[e + w[r]] | 0, _ += r < 16 ? At(f, d, u) + g[0] : r < 32 ? zt(f, d, u) + g[1] : r < 48 ? Ht(f, d, u) + g[2] : r < 64 ? xt(f, d, u) + g[3] : mt(f, d, u) + g[4], _ = (_ = Ct(_ |= 0, S[r])) + p | 0, l = p, p = u, u = Ct(d, 10), d = f, f = _; _ = v[1] + c + u | 0, v[1] = v[2] + a + p | 0, v[2] = v[3] + h + l | 0, v[3] = v[4] + o + f | 0, v[4] = v[0] + s + d | 0, v[0] = _ }, _doFinalize: function () { var t = this._data, e = t.words, r = 8 * this._nDataBytes, i = 8 * t.sigBytes; e[i >>> 5] |= 128 << 24 - i % 32, e[14 + (64 + i >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), t.sigBytes = 4 * (e.length + 1), this._process(); for (var n = this._hash, o = n.words, s = 0; s < 5; s++) { var c = o[s]; o[s] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8) } return n }, clone: function () { var t = l.clone.call(this); return t._hash = this._hash.clone(), t } }), s.RIPEMD160 = l._createHelper(u), s.HmacRIPEMD160 = l._createHmacHelper(u), p = bt.lib.Base, _ = bt.enc.Utf8, bt.algo.HMAC = p.extend({ init: function (t, e) { t = this._hasher = new t.init, "string" == typeof e && (e = _.parse(e)); var r = t.blockSize, i = 4 * r; e.sigBytes > i && (e = t.finalize(e)), e.clamp(); for (var n = this._oKey = e.clone(), o = this._iKey = e.clone(), s = n.words, c = o.words, a = 0; a < r; a++)s[a] ^= 1549556828, c[a] ^= 909522486; n.sigBytes = o.sigBytes = i, this.reset() }, reset: function () { var t = this._hasher; t.reset(), t.update(this._iKey) }, update: function (t) { return this._hasher.update(t), this }, finalize: function (t) { var e = this._hasher, r = e.finalize(t); return e.reset(), e.finalize(this._oKey.clone().concat(r)) } }), y = (v = bt).lib, g = y.Base, B = y.WordArray, w = v.algo, k = w.SHA1, S = w.HMAC, C = w.PBKDF2 = g.extend({ cfg: g.extend({ keySize: 4, hasher: k, iterations: 1 }), init: function (t) { this.cfg = this.cfg.extend(t) }, compute: function (t, e) { for (var r = this.cfg, i = S.create(r.hasher, t), n = B.create(), o = B.create([1]), s = n.words, c = o.words, a = r.keySize, h = r.iterations; s.length < a;) { var l = i.update(e).finalize(o); i.reset(); for (var f = l.words, d = f.length, u = l, p = 1; p < h; p++) { u = i.finalize(u), i.reset(); for (var _ = u.words, v = 0; v < d; v++)f[v] ^= _[v] } n.concat(l), c[0]++ } return n.sigBytes = 4 * a, n } }), v.PBKDF2 = function (t, e, r) { return C.create(r).compute(t, e) }, E = (D = bt).lib, R = E.Base, M = E.WordArray, F = D.algo, P = F.MD5, W = F.EvpKDF = R.extend({ cfg: R.extend({ keySize: 4, hasher: P, iterations: 1 }), init: function (t) { this.cfg = this.cfg.extend(t) }, compute: function (t, e) { for (var r, i = this.cfg, n = i.hasher.create(), o = M.create(), s = o.words, c = i.keySize, a = i.iterations; s.length < c;) { r && n.update(r), r = n.update(t).finalize(e), n.reset(); for (var h = 1; h < a; h++)r = n.finalize(r), n.reset(); o.concat(r) } return o.sigBytes = 4 * c, o } }), D.EvpKDF = function (t, e, r) { return W.create(r).compute(t, e) }, I = (O = bt).lib.WordArray, U = O.algo, K = U.SHA256, X = U.SHA224 = K.extend({ _doReset: function () { this._hash = new I.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]) }, _doFinalize: function () { var t = K._doFinalize.call(this); return t.sigBytes -= 4, t } }), O.SHA224 = K._createHelper(X), O.HmacSHA224 = K._createHmacHelper(X), L = bt.lib, j = L.Base, N = L.WordArray, (T = bt.x64 = {}).Word = j.extend({ init: function (t, e) { this.high = t, this.low = e } }), T.WordArray = j.extend({ init: function (t, e) { t = this.words = t || [], this.sigBytes = null != e ? e : 8 * t.length }, toX32: function () { for (var t = this.words, e = t.length, r = [], i = 0; i < e; i++) { var n = t[i]; r.push(n.high), r.push(n.low) } return N.create(r, this.sigBytes) }, clone: function () { for (var t = j.clone.call(this), e = t.words = this.words.slice(0), r = e.length, i = 0; i < r; i++)e[i] = e[i].clone(); return t } }), function (d) { var t = bt, e = t.lib, u = e.WordArray, i = e.Hasher, l = t.x64.Word, r = t.algo, C = [], D = [], E = []; !function () { for (var t = 1, e = 0, r = 0; r < 24; r++) { C[t + 5 * e] = (r + 1) * (r + 2) / 2 % 64; var i = (2 * t + 3 * e) % 5; t = e % 5, e = i } for (t = 0; t < 5; t++)for (e = 0; e < 5; e++)D[t + 5 * e] = e + (2 * t + 3 * e) % 5 * 5; for (var n = 1, o = 0; o < 24; o++) { for (var s = 0, c = 0, a = 0; a < 7; a++) { if (1 & n) { var h = (1 << a) - 1; h < 32 ? c ^= 1 << h : s ^= 1 << h - 32 } 128 & n ? n = n << 1 ^ 113 : n <<= 1 } E[o] = l.create(s, c) } }(); var R = []; !function () { for (var t = 0; t < 25; t++)R[t] = l.create() }(); var n = r.SHA3 = i.extend({ cfg: i.cfg.extend({ outputLength: 512 }), _doReset: function () { for (var t = this._state = [], e = 0; e < 25; e++)t[e] = new l.init; this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32 }, _doProcessBlock: function (t, e) { for (var r = this._state, i = this.blockSize / 2, n = 0; n < i; n++) { var o = t[e + 2 * n], s = t[e + 2 * n + 1]; o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), s = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), (x = r[n]).high ^= s, x.low ^= o } for (var c = 0; c < 24; c++) { for (var a = 0; a < 5; a++) { for (var h = 0, l = 0, f = 0; f < 5; f++) { h ^= (x = r[a + 5 * f]).high, l ^= x.low } var d = R[a]; d.high = h, d.low = l } for (a = 0; a < 5; a++) { var u = R[(a + 4) % 5], p = R[(a + 1) % 5], _ = p.high, v = p.low; for (h = u.high ^ (_ << 1 | v >>> 31), l = u.low ^ (v << 1 | _ >>> 31), f = 0; f < 5; f++) { (x = r[a + 5 * f]).high ^= h, x.low ^= l } } for (var y = 1; y < 25; y++) { var g = (x = r[y]).high, B = x.low, w = C[y]; l = w < 32 ? (h = g << w | B >>> 32 - w, B << w | g >>> 32 - w) : (h = B << w - 32 | g >>> 64 - w, g << w - 32 | B >>> 64 - w); var k = R[D[y]]; k.high = h, k.low = l } var S = R[0], m = r[0]; S.high = m.high, S.low = m.low; for (a = 0; a < 5; a++)for (f = 0; f < 5; f++) { var x = r[y = a + 5 * f], b = R[y], H = R[(a + 1) % 5 + 5 * f], z = R[(a + 2) % 5 + 5 * f]; x.high = b.high ^ ~H.high & z.high, x.low = b.low ^ ~H.low & z.low } x = r[0]; var A = E[c]; x.high ^= A.high, x.low ^= A.low } }, _doFinalize: function () { var t = this._data, e = t.words, r = (this._nDataBytes, 8 * t.sigBytes), i = 32 * this.blockSize; e[r >>> 5] |= 1 << 24 - r % 32, e[(d.ceil((1 + r) / i) * i >>> 5) - 1] |= 128, t.sigBytes = 4 * e.length, this._process(); for (var n = this._state, o = this.cfg.outputLength / 8, s = o / 8, c = [], a = 0; a < s; a++) { var h = n[a], l = h.high, f = h.low; l = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8), f = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8), c.push(f), c.push(l) } return new u.init(c, o) }, clone: function () { for (var t = i.clone.call(this), e = t._state = this._state.slice(0), r = 0; r < 25; r++)e[r] = e[r].clone(); return t } }); t.SHA3 = i._createHelper(n), t.HmacSHA3 = i._createHmacHelper(n) }(Math), function () { var t = bt, e = t.lib.Hasher, r = t.x64, i = r.Word, n = r.WordArray, o = t.algo; function s() { return i.create.apply(i, arguments) } var mt = [s(1116352408, 3609767458), s(1899447441, 602891725), s(3049323471, 3964484399), s(3921009573, 2173295548), s(961987163, 4081628472), s(1508970993, 3053834265), s(2453635748, 2937671579), s(2870763221, 3664609560), s(3624381080, 2734883394), s(310598401, 1164996542), s(607225278, 1323610764), s(1426881987, 3590304994), s(1925078388, 4068182383), s(2162078206, 991336113), s(2614888103, 633803317), s(3248222580, 3479774868), s(3835390401, 2666613458), s(4022224774, 944711139), s(264347078, 2341262773), s(604807628, 2007800933), s(770255983, 1495990901), s(1249150122, 1856431235), s(1555081692, 3175218132), s(1996064986, 2198950837), s(2554220882, 3999719339), s(2821834349, 766784016), s(2952996808, 2566594879), s(3210313671, 3203337956), s(3336571891, 1034457026), s(3584528711, 2466948901), s(113926993, 3758326383), s(338241895, 168717936), s(666307205, 1188179964), s(773529912, 1546045734), s(1294757372, 1522805485), s(1396182291, 2643833823), s(1695183700, 2343527390), s(1986661051, 1014477480), s(2177026350, 1206759142), s(2456956037, 344077627), s(2730485921, 1290863460), s(2820302411, 3158454273), s(3259730800, 3505952657), s(3345764771, 106217008), s(3516065817, 3606008344), s(3600352804, 1432725776), s(4094571909, 1467031594), s(275423344, 851169720), s(430227734, 3100823752), s(506948616, 1363258195), s(659060556, 3750685593), s(883997877, 3785050280), s(958139571, 3318307427), s(1322822218, 3812723403), s(1537002063, 2003034995), s(1747873779, 3602036899), s(1955562222, 1575990012), s(2024104815, 1125592928), s(2227730452, 2716904306), s(2361852424, 442776044), s(2428436474, 593698344), s(2756734187, 3733110249), s(3204031479, 2999351573), s(3329325298, 3815920427), s(3391569614, 3928383900), s(3515267271, 566280711), s(3940187606, 3454069534), s(4118630271, 4000239992), s(116418474, 1914138554), s(174292421, 2731055270), s(289380356, 3203993006), s(460393269, 320620315), s(685471733, 587496836), s(852142971, 1086792851), s(1017036298, 365543100), s(1126000580, 2618297676), s(1288033470, 3409855158), s(1501505948, 4234509866), s(1607167915, 987167468), s(1816402316, 1246189591)], xt = []; !function () { for (var t = 0; t < 80; t++)xt[t] = s() }(); var c = o.SHA512 = e.extend({ _doReset: function () { this._hash = new n.init([new i.init(1779033703, 4089235720), new i.init(3144134277, 2227873595), new i.init(1013904242, 4271175723), new i.init(2773480762, 1595750129), new i.init(1359893119, 2917565137), new i.init(2600822924, 725511199), new i.init(528734635, 4215389547), new i.init(1541459225, 327033209)]) }, _doProcessBlock: function (t, e) { for (var r = this._hash.words, i = r[0], n = r[1], o = r[2], s = r[3], c = r[4], a = r[5], h = r[6], l = r[7], f = i.high, d = i.low, u = n.high, p = n.low, _ = o.high, v = o.low, y = s.high, g = s.low, B = c.high, w = c.low, k = a.high, S = a.low, m = h.high, x = h.low, b = l.high, H = l.low, z = f, A = d, C = u, D = p, E = _, R = v, M = y, F = g, P = B, W = w, O = k, I = S, U = m, K = x, X = b, L = H, j = 0; j < 80; j++) { var N, T, q = xt[j]; if (j < 16) T = q.high = 0 | t[e + 2 * j], N = q.low = 0 | t[e + 2 * j + 1]; else { var Z = xt[j - 15], V = Z.high, G = Z.low, J = (V >>> 1 | G << 31) ^ (V >>> 8 | G << 24) ^ V >>> 7, $ = (G >>> 1 | V << 31) ^ (G >>> 8 | V << 24) ^ (G >>> 7 | V << 25), Q = xt[j - 2], Y = Q.high, tt = Q.low, et = (Y >>> 19 | tt << 13) ^ (Y << 3 | tt >>> 29) ^ Y >>> 6, rt = (tt >>> 19 | Y << 13) ^ (tt << 3 | Y >>> 29) ^ (tt >>> 6 | Y << 26), it = xt[j - 7], nt = it.high, ot = it.low, st = xt[j - 16], ct = st.high, at = st.low; T = (T = (T = J + nt + ((N = $ + ot) >>> 0 < $ >>> 0 ? 1 : 0)) + et + ((N += rt) >>> 0 < rt >>> 0 ? 1 : 0)) + ct + ((N += at) >>> 0 < at >>> 0 ? 1 : 0), q.high = T, q.low = N } var ht, lt = P & O ^ ~P & U, ft = W & I ^ ~W & K, dt = z & C ^ z & E ^ C & E, ut = A & D ^ A & R ^ D & R, pt = (z >>> 28 | A << 4) ^ (z << 30 | A >>> 2) ^ (z << 25 | A >>> 7), _t = (A >>> 28 | z << 4) ^ (A << 30 | z >>> 2) ^ (A << 25 | z >>> 7), vt = (P >>> 14 | W << 18) ^ (P >>> 18 | W << 14) ^ (P << 23 | W >>> 9), yt = (W >>> 14 | P << 18) ^ (W >>> 18 | P << 14) ^ (W << 23 | P >>> 9), gt = mt[j], Bt = gt.high, wt = gt.low, kt = X + vt + ((ht = L + yt) >>> 0 < L >>> 0 ? 1 : 0), St = _t + ut; X = U, L = K, U = O, K = I, O = P, I = W, P = M + (kt = (kt = (kt = kt + lt + ((ht = ht + ft) >>> 0 < ft >>> 0 ? 1 : 0)) + Bt + ((ht = ht + wt) >>> 0 < wt >>> 0 ? 1 : 0)) + T + ((ht = ht + N) >>> 0 < N >>> 0 ? 1 : 0)) + ((W = F + ht | 0) >>> 0 < F >>> 0 ? 1 : 0) | 0, M = E, F = R, E = C, R = D, C = z, D = A, z = kt + (pt + dt + (St >>> 0 < _t >>> 0 ? 1 : 0)) + ((A = ht + St | 0) >>> 0 < ht >>> 0 ? 1 : 0) | 0 } d = i.low = d + A, i.high = f + z + (d >>> 0 < A >>> 0 ? 1 : 0), p = n.low = p + D, n.high = u + C + (p >>> 0 < D >>> 0 ? 1 : 0), v = o.low = v + R, o.high = _ + E + (v >>> 0 < R >>> 0 ? 1 : 0), g = s.low = g + F, s.high = y + M + (g >>> 0 < F >>> 0 ? 1 : 0), w = c.low = w + W, c.high = B + P + (w >>> 0 < W >>> 0 ? 1 : 0), S = a.low = S + I, a.high = k + O + (S >>> 0 < I >>> 0 ? 1 : 0), x = h.low = x + K, h.high = m + U + (x >>> 0 < K >>> 0 ? 1 : 0), H = l.low = H + L, l.high = b + X + (H >>> 0 < L >>> 0 ? 1 : 0) }, _doFinalize: function () { var t = this._data, e = t.words, r = 8 * this._nDataBytes, i = 8 * t.sigBytes; return e[i >>> 5] |= 128 << 24 - i % 32, e[30 + (128 + i >>> 10 << 5)] = Math.floor(r / 4294967296), e[31 + (128 + i >>> 10 << 5)] = r, t.sigBytes = 4 * e.length, this._process(), this._hash.toX32() }, clone: function () { var t = e.clone.call(this); return t._hash = this._hash.clone(), t }, blockSize: 32 }); t.SHA512 = e._createHelper(c), t.HmacSHA512 = e._createHmacHelper(c) }(), Z = (q = bt).x64, V = Z.Word, G = Z.WordArray, J = q.algo, $ = J.SHA512, Q = J.SHA384 = $.extend({ _doReset: function () { this._hash = new G.init([new V.init(3418070365, 3238371032), new V.init(1654270250, 914150663), new V.init(2438529370, 812702999), new V.init(355462360, 4144912697), new V.init(1731405415, 4290775857), new V.init(2394180231, 1750603025), new V.init(3675008525, 1694076839), new V.init(1203062813, 3204075428)]) }, _doFinalize: function () { var t = $._doFinalize.call(this); return t.sigBytes -= 16, t } }), q.SHA384 = $._createHelper(Q), q.HmacSHA384 = $._createHmacHelper(Q), bt.lib.Cipher || function () { var t = bt, e = t.lib, r = e.Base, a = e.WordArray, i = e.BufferedBlockAlgorithm, n = t.enc, o = (n.Utf8, n.Base64), s = t.algo.EvpKDF, c = e.Cipher = i.extend({ cfg: r.extend(), createEncryptor: function (t, e) { return this.create(this._ENC_XFORM_MODE, t, e) }, createDecryptor: function (t, e) { return this.create(this._DEC_XFORM_MODE, t, e) }, init: function (t, e, r) { this.cfg = this.cfg.extend(r), this._xformMode = t, this._key = e, this.reset() }, reset: function () { i.reset.call(this), this._doReset() }, process: function (t) { return this._append(t), this._process() }, finalize: function (t) { return t && this._append(t), this._doFinalize() }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function (i) { return { encrypt: function (t, e, r) { return h(e).encrypt(i, t, e, r) }, decrypt: function (t, e, r) { return h(e).decrypt(i, t, e, r) } } } }); function h(t) { return "string" == typeof t ? w : g } e.StreamCipher = c.extend({ _doFinalize: function () { return this._process(!0) }, blockSize: 1 }); var l, f = t.mode = {}, d = e.BlockCipherMode = r.extend({ createEncryptor: function (t, e) { return this.Encryptor.create(t, e) }, createDecryptor: function (t, e) { return this.Decryptor.create(t, e) }, init: function (t, e) { this._cipher = t, this._iv = e } }), u = f.CBC = ((l = d.extend()).Encryptor = l.extend({ processBlock: function (t, e) { var r = this._cipher, i = r.blockSize; p.call(this, t, e, i), r.encryptBlock(t, e), this._prevBlock = t.slice(e, e + i) } }), l.Decryptor = l.extend({ processBlock: function (t, e) { var r = this._cipher, i = r.blockSize, n = t.slice(e, e + i); r.decryptBlock(t, e), p.call(this, t, e, i), this._prevBlock = n } }), l); function p(t, e, r) { var i, n = this._iv; n ? (i = n, this._iv = void 0) : i = this._prevBlock; for (var o = 0; o < r; o++)t[e + o] ^= i[o] } var _ = (t.pad = {}).Pkcs7 = { pad: function (t, e) { for (var r = 4 * e, i = r - t.sigBytes % r, n = i << 24 | i << 16 | i << 8 | i, o = [], s = 0; s < i; s += 4)o.push(n); var c = a.create(o, i); t.concat(c) }, unpad: function (t) { var e = 255 & t.words[t.sigBytes - 1 >>> 2]; t.sigBytes -= e } }, v = (e.BlockCipher = c.extend({ cfg: c.cfg.extend({ mode: u, padding: _ }), reset: function () { var t; c.reset.call(this); var e = this.cfg, r = e.iv, i = e.mode; this._xformMode == this._ENC_XFORM_MODE ? t = i.createEncryptor : (t = i.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == t ? this._mode.init(this, r && r.words) : (this._mode = t.call(i, this, r && r.words), this._mode.__creator = t) }, _doProcessBlock: function (t, e) { this._mode.processBlock(t, e) }, _doFinalize: function () { var t, e = this.cfg.padding; return this._xformMode == this._ENC_XFORM_MODE ? (e.pad(this._data, this.blockSize), t = this._process(!0)) : (t = this._process(!0), e.unpad(t)), t }, blockSize: 4 }), e.CipherParams = r.extend({ init: function (t) { this.mixIn(t) }, toString: function (t) { return (t || this.formatter).stringify(this) } })), y = (t.format = {}).OpenSSL = { stringify: function (t) { var e = t.ciphertext, r = t.salt; return (r ? a.create([1398893684, 1701076831]).concat(r).concat(e) : e).toString(o) }, parse: function (t) { var e, r = o.parse(t), i = r.words; return 1398893684 == i[0] && 1701076831 == i[1] && (e = a.create(i.slice(2, 4)), i.splice(0, 4), r.sigBytes -= 16), v.create({ ciphertext: r, salt: e }) } }, g = e.SerializableCipher = r.extend({ cfg: r.extend({ format: y }), encrypt: function (t, e, r, i) { i = this.cfg.extend(i); var n = t.createEncryptor(r, i), o = n.finalize(e), s = n.cfg; return v.create({ ciphertext: o, key: r, iv: s.iv, algorithm: t, mode: s.mode, padding: s.padding, blockSize: t.blockSize, formatter: i.format }) }, decrypt: function (t, e, r, i) { return i = this.cfg.extend(i), e = this._parse(e, i.format), t.createDecryptor(r, i).finalize(e.ciphertext) }, _parse: function (t, e) { return "string" == typeof t ? e.parse(t, this) : t } }), B = (t.kdf = {}).OpenSSL = { execute: function (t, e, r, i) { i = i || a.random(8); var n = s.create({ keySize: e + r }).compute(t, i), o = a.create(n.words.slice(e), 4 * r); return n.sigBytes = 4 * e, v.create({ key: n, iv: o, salt: i }) } }, w = e.PasswordBasedCipher = g.extend({ cfg: g.cfg.extend({ kdf: B }), encrypt: function (t, e, r, i) { var n = (i = this.cfg.extend(i)).kdf.execute(r, t.keySize, t.ivSize); i.iv = n.iv; var o = g.encrypt.call(this, t, e, n.key, i); return o.mixIn(n), o }, decrypt: function (t, e, r, i) { i = this.cfg.extend(i), e = this._parse(e, i.format); var n = i.kdf.execute(r, t.keySize, t.ivSize, e.salt); return i.iv = n.iv, g.decrypt.call(this, t, e, n.key, i) } }) }(), bt.mode.CFB = ((Y = bt.lib.BlockCipherMode.extend()).Encryptor = Y.extend({ processBlock: function (t, e) { var r = this._cipher, i = r.blockSize; Dt.call(this, t, e, i, r), this._prevBlock = t.slice(e, e + i) } }), Y.Decryptor = Y.extend({ processBlock: function (t, e) { var r = this._cipher, i = r.blockSize, n = t.slice(e, e + i); Dt.call(this, t, e, i, r), this._prevBlock = n } }), Y), bt.mode.ECB = ((tt = bt.lib.BlockCipherMode.extend()).Encryptor = tt.extend({ processBlock: function (t, e) { this._cipher.encryptBlock(t, e) } }), tt.Decryptor = tt.extend({ processBlock: function (t, e) { this._cipher.decryptBlock(t, e) } }), tt), bt.pad.AnsiX923 = { pad: function (t, e) { var r = t.sigBytes, i = 4 * e, n = i - r % i, o = r + n - 1; t.clamp(), t.words[o >>> 2] |= n << 24 - o % 4 * 8, t.sigBytes += n }, unpad: function (t) { var e = 255 & t.words[t.sigBytes - 1 >>> 2]; t.sigBytes -= e } }, bt.pad.Iso10126 = { pad: function (t, e) { var r = 4 * e, i = r - t.sigBytes % r; t.concat(bt.lib.WordArray.random(i - 1)).concat(bt.lib.WordArray.create([i << 24], 1)) }, unpad: function (t) { var e = 255 & t.words[t.sigBytes - 1 >>> 2]; t.sigBytes -= e } }, bt.pad.Iso97971 = { pad: function (t, e) { t.concat(bt.lib.WordArray.create([2147483648], 1)), bt.pad.ZeroPadding.pad(t, e) }, unpad: function (t) { bt.pad.ZeroPadding.unpad(t), t.sigBytes-- } }, bt.mode.OFB = (et = bt.lib.BlockCipherMode.extend(), rt = et.Encryptor = et.extend({ processBlock: function (t, e) { var r = this._cipher, i = r.blockSize, n = this._iv, o = this._keystream; n && (o = this._keystream = n.slice(0), this._iv = void 0), r.encryptBlock(o, 0); for (var s = 0; s < i; s++)t[e + s] ^= o[s] } }), et.Decryptor = rt, et), bt.pad.NoPadding = { pad: function () { }, unpad: function () { } }, it = bt.lib.CipherParams, nt = bt.enc.Hex, bt.format.Hex = { stringify: function (t) { return t.ciphertext.toString(nt) }, parse: function (t) { var e = nt.parse(t); return it.create({ ciphertext: e }) } }, function () { var t = bt, e = t.lib.BlockCipher, r = t.algo, h = [], l = [], f = [], d = [], u = [], p = [], _ = [], v = [], y = [], g = []; !function () { for (var t = [], e = 0; e < 256; e++)t[e] = e < 128 ? e << 1 : e << 1 ^ 283; var r = 0, i = 0; for (e = 0; e < 256; e++) { var n = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4; n = n >>> 8 ^ 255 & n ^ 99, h[r] = n; var o = t[l[n] = r], s = t[o], c = t[s], a = 257 * t[n] ^ 16843008 * n; f[r] = a << 24 | a >>> 8, d[r] = a << 16 | a >>> 16, u[r] = a << 8 | a >>> 24, p[r] = a; a = 16843009 * c ^ 65537 * s ^ 257 * o ^ 16843008 * r; _[n] = a << 24 | a >>> 8, v[n] = a << 16 | a >>> 16, y[n] = a << 8 | a >>> 24, g[n] = a, r ? (r = o ^ t[t[t[c ^ o]]], i ^= t[t[i]]) : r = i = 1 } }(); var B = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], i = r.AES = e.extend({ _doReset: function () { if (!this._nRounds || this._keyPriorReset !== this._key) { for (var t = this._keyPriorReset = this._key, e = t.words, r = t.sigBytes / 4, i = 4 * (1 + (this._nRounds = 6 + r)), n = this._keySchedule = [], o = 0; o < i; o++)o < r ? n[o] = e[o] : (a = n[o - 1], o % r ? 6 < r && o % r == 4 && (a = h[a >>> 24] << 24 | h[a >>> 16 & 255] << 16 | h[a >>> 8 & 255] << 8 | h[255 & a]) : (a = h[(a = a << 8 | a >>> 24) >>> 24] << 24 | h[a >>> 16 & 255] << 16 | h[a >>> 8 & 255] << 8 | h[255 & a], a ^= B[o / r | 0] << 24), n[o] = n[o - r] ^ a); for (var s = this._invKeySchedule = [], c = 0; c < i; c++) { o = i - c; if (c % 4) var a = n[o]; else a = n[o - 4]; s[c] = c < 4 || o <= 4 ? a : _[h[a >>> 24]] ^ v[h[a >>> 16 & 255]] ^ y[h[a >>> 8 & 255]] ^ g[h[255 & a]] } } }, encryptBlock: function (t, e) { this._doCryptBlock(t, e, this._keySchedule, f, d, u, p, h) }, decryptBlock: function (t, e) { var r = t[e + 1]; t[e + 1] = t[e + 3], t[e + 3] = r, this._doCryptBlock(t, e, this._invKeySchedule, _, v, y, g, l); r = t[e + 1]; t[e + 1] = t[e + 3], t[e + 3] = r }, _doCryptBlock: function (t, e, r, i, n, o, s, c) { for (var a = this._nRounds, h = t[e] ^ r[0], l = t[e + 1] ^ r[1], f = t[e + 2] ^ r[2], d = t[e + 3] ^ r[3], u = 4, p = 1; p < a; p++) { var _ = i[h >>> 24] ^ n[l >>> 16 & 255] ^ o[f >>> 8 & 255] ^ s[255 & d] ^ r[u++], v = i[l >>> 24] ^ n[f >>> 16 & 255] ^ o[d >>> 8 & 255] ^ s[255 & h] ^ r[u++], y = i[f >>> 24] ^ n[d >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[255 & l] ^ r[u++], g = i[d >>> 24] ^ n[h >>> 16 & 255] ^ o[l >>> 8 & 255] ^ s[255 & f] ^ r[u++]; h = _, l = v, f = y, d = g } _ = (c[h >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[f >>> 8 & 255] << 8 | c[255 & d]) ^ r[u++], v = (c[l >>> 24] << 24 | c[f >>> 16 & 255] << 16 | c[d >>> 8 & 255] << 8 | c[255 & h]) ^ r[u++], y = (c[f >>> 24] << 24 | c[d >>> 16 & 255] << 16 | c[h >>> 8 & 255] << 8 | c[255 & l]) ^ r[u++], g = (c[d >>> 24] << 24 | c[h >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & f]) ^ r[u++]; t[e] = _, t[e + 1] = v, t[e + 2] = y, t[e + 3] = g }, keySize: 8 }); t.AES = e._createHelper(i) }(), function () { var t = bt, e = t.lib, n = e.WordArray, r = e.BlockCipher, i = t.algo, h = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4], l = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32], f = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], d = [{ 0: 8421888, 268435456: 32768, 536870912: 8421378, 805306368: 2, 1073741824: 512, 1342177280: 8421890, 1610612736: 8389122, 1879048192: 8388608, 2147483648: 514, 2415919104: 8389120, 2684354560: 33280, 2952790016: 8421376, 3221225472: 32770, 3489660928: 8388610, 3758096384: 0, 4026531840: 33282, 134217728: 0, 402653184: 8421890, 671088640: 33282, 939524096: 32768, 1207959552: 8421888, 1476395008: 512, 1744830464: 8421378, 2013265920: 2, 2281701376: 8389120, 2550136832: 33280, 2818572288: 8421376, 3087007744: 8389122, 3355443200: 8388610, 3623878656: 32770, 3892314112: 514, 4160749568: 8388608, 1: 32768, 268435457: 2, 536870913: 8421888, 805306369: 8388608, 1073741825: 8421378, 1342177281: 33280, 1610612737: 512, 1879048193: 8389122, 2147483649: 8421890, 2415919105: 8421376, 2684354561: 8388610, 2952790017: 33282, 3221225473: 514, 3489660929: 8389120, 3758096385: 32770, 4026531841: 0, 134217729: 8421890, 402653185: 8421376, 671088641: 8388608, 939524097: 512, 1207959553: 32768, 1476395009: 8388610, 1744830465: 2, 2013265921: 33282, 2281701377: 32770, 2550136833: 8389122, 2818572289: 514, 3087007745: 8421888, 3355443201: 8389120, 3623878657: 0, 3892314113: 33280, 4160749569: 8421378 }, { 0: 1074282512, 16777216: 16384, 33554432: 524288, 50331648: 1074266128, 67108864: 1073741840, 83886080: 1074282496, 100663296: 1073758208, 117440512: 16, 134217728: 540672, 150994944: 1073758224, 167772160: 1073741824, 184549376: 540688, 201326592: 524304, 218103808: 0, 234881024: 16400, 251658240: 1074266112, 8388608: 1073758208, 25165824: 540688, 41943040: 16, 58720256: 1073758224, 75497472: 1074282512, 92274688: 1073741824, 109051904: 524288, 125829120: 1074266128, 142606336: 524304, 159383552: 0, 176160768: 16384, 192937984: 1074266112, 209715200: 1073741840, 226492416: 540672, 243269632: 1074282496, 260046848: 16400, 268435456: 0, 285212672: 1074266128, 301989888: 1073758224, 318767104: 1074282496, 335544320: 1074266112, 352321536: 16, 369098752: 540688, 385875968: 16384, 402653184: 16400, 419430400: 524288, 436207616: 524304, 452984832: 1073741840, 469762048: 540672, 486539264: 1073758208, 503316480: 1073741824, 520093696: 1074282512, 276824064: 540688, 293601280: 524288, 310378496: 1074266112, 327155712: 16384, 343932928: 1073758208, 360710144: 1074282512, 377487360: 16, 394264576: 1073741824, 411041792: 1074282496, 427819008: 1073741840, 444596224: 1073758224, 461373440: 524304, 478150656: 0, 494927872: 16400, 511705088: 1074266128, 528482304: 540672 }, { 0: 260, 1048576: 0, 2097152: 67109120, 3145728: 65796, 4194304: 65540, 5242880: 67108868, 6291456: 67174660, 7340032: 67174400, 8388608: 67108864, 9437184: 67174656, 10485760: 65792, 11534336: 67174404, 12582912: 67109124, 13631488: 65536, 14680064: 4, 15728640: 256, 524288: 67174656, 1572864: 67174404, 2621440: 0, 3670016: 67109120, 4718592: 67108868, 5767168: 65536, 6815744: 65540, 7864320: 260, 8912896: 4, 9961472: 256, 11010048: 67174400, 12058624: 65796, 13107200: 65792, 14155776: 67109124, 15204352: 67174660, 16252928: 67108864, 16777216: 67174656, 17825792: 65540, 18874368: 65536, 19922944: 67109120, 20971520: 256, 22020096: 67174660, 23068672: 67108868, 24117248: 0, 25165824: 67109124, 26214400: 67108864, 27262976: 4, 28311552: 65792, 29360128: 67174400, 30408704: 260, 31457280: 65796, 32505856: 67174404, 17301504: 67108864, 18350080: 260, 19398656: 67174656, 20447232: 0, 21495808: 65540, 22544384: 67109120, 23592960: 256, 24641536: 67174404, 25690112: 65536, 26738688: 67174660, 27787264: 65796, 28835840: 67108868, 29884416: 67109124, 30932992: 67174400, 31981568: 4, 33030144: 65792 }, { 0: 2151682048, 65536: 2147487808, 131072: 4198464, 196608: 2151677952, 262144: 0, 327680: 4198400, 393216: 2147483712, 458752: 4194368, 524288: 2147483648, 589824: 4194304, 655360: 64, 720896: 2147487744, 786432: 2151678016, 851968: 4160, 917504: 4096, 983040: 2151682112, 32768: 2147487808, 98304: 64, 163840: 2151678016, 229376: 2147487744, 294912: 4198400, 360448: 2151682112, 425984: 0, 491520: 2151677952, 557056: 4096, 622592: 2151682048, 688128: 4194304, 753664: 4160, 819200: 2147483648, 884736: 4194368, 950272: 4198464, 1015808: 2147483712, 1048576: 4194368, 1114112: 4198400, 1179648: 2147483712, 1245184: 0, 1310720: 4160, 1376256: 2151678016, 1441792: 2151682048, 1507328: 2147487808, 1572864: 2151682112, 1638400: 2147483648, 1703936: 2151677952, 1769472: 4198464, 1835008: 2147487744, 1900544: 4194304, 1966080: 64, 2031616: 4096, 1081344: 2151677952, 1146880: 2151682112, 1212416: 0, 1277952: 4198400, 1343488: 4194368, 1409024: 2147483648, 1474560: 2147487808, 1540096: 64, 1605632: 2147483712, 1671168: 4096, 1736704: 2147487744, 1802240: 2151678016, 1867776: 4160, 1933312: 2151682048, 1998848: 4194304, 2064384: 4198464 }, { 0: 128, 4096: 17039360, 8192: 262144, 12288: 536870912, 16384: 537133184, 20480: 16777344, 24576: 553648256, 28672: 262272, 32768: 16777216, 36864: 537133056, 40960: 536871040, 45056: 553910400, 49152: 553910272, 53248: 0, 57344: 17039488, 61440: 553648128, 2048: 17039488, 6144: 553648256, 10240: 128, 14336: 17039360, 18432: 262144, 22528: 537133184, 26624: 553910272, 30720: 536870912, 34816: 537133056, 38912: 0, 43008: 553910400, 47104: 16777344, 51200: 536871040, 55296: 553648128, 59392: 16777216, 63488: 262272, 65536: 262144, 69632: 128, 73728: 536870912, 77824: 553648256, 81920: 16777344, 86016: 553910272, 90112: 537133184, 94208: 16777216, 98304: 553910400, 102400: 553648128, 106496: 17039360, 110592: 537133056, 114688: 262272, 118784: 536871040, 122880: 0, 126976: 17039488, 67584: 553648256, 71680: 16777216, 75776: 17039360, 79872: 537133184, 83968: 536870912, 88064: 17039488, 92160: 128, 96256: 553910272, 100352: 262272, 104448: 553910400, 108544: 0, 112640: 553648128, 116736: 16777344, 120832: 262144, 124928: 537133056, 129024: 536871040 }, { 0: 268435464, 256: 8192, 512: 270532608, 768: 270540808, 1024: 268443648, 1280: 2097152, 1536: 2097160, 1792: 268435456, 2048: 0, 2304: 268443656, 2560: 2105344, 2816: 8, 3072: 270532616, 3328: 2105352, 3584: 8200, 3840: 270540800, 128: 270532608, 384: 270540808, 640: 8, 896: 2097152, 1152: 2105352, 1408: 268435464, 1664: 268443648, 1920: 8200, 2176: 2097160, 2432: 8192, 2688: 268443656, 2944: 270532616, 3200: 0, 3456: 270540800, 3712: 2105344, 3968: 268435456, 4096: 268443648, 4352: 270532616, 4608: 270540808, 4864: 8200, 5120: 2097152, 5376: 268435456, 5632: 268435464, 5888: 2105344, 6144: 2105352, 6400: 0, 6656: 8, 6912: 270532608, 7168: 8192, 7424: 268443656, 7680: 270540800, 7936: 2097160, 4224: 8, 4480: 2105344, 4736: 2097152, 4992: 268435464, 5248: 268443648, 5504: 8200, 5760: 270540808, 6016: 270532608, 6272: 270540800, 6528: 270532616, 6784: 8192, 7040: 2105352, 7296: 2097160, 7552: 0, 7808: 268435456, 8064: 268443656 }, { 0: 1048576, 16: 33555457, 32: 1024, 48: 1049601, 64: 34604033, 80: 0, 96: 1, 112: 34603009, 128: 33555456, 144: 1048577, 160: 33554433, 176: 34604032, 192: 34603008, 208: 1025, 224: 1049600, 240: 33554432, 8: 34603009, 24: 0, 40: 33555457, 56: 34604032, 72: 1048576, 88: 33554433, 104: 33554432, 120: 1025, 136: 1049601, 152: 33555456, 168: 34603008, 184: 1048577, 200: 1024, 216: 34604033, 232: 1, 248: 1049600, 256: 33554432, 272: 1048576, 288: 33555457, 304: 34603009, 320: 1048577, 336: 33555456, 352: 34604032, 368: 1049601, 384: 1025, 400: 34604033, 416: 1049600, 432: 1, 448: 0, 464: 34603008, 480: 33554433, 496: 1024, 264: 1049600, 280: 33555457, 296: 34603009, 312: 1, 328: 33554432, 344: 1048576, 360: 1025, 376: 34604032, 392: 33554433, 408: 34603008, 424: 0, 440: 34604033, 456: 1049601, 472: 1024, 488: 33555456, 504: 1048577 }, { 0: 134219808, 1: 131072, 2: 134217728, 3: 32, 4: 131104, 5: 134350880, 6: 134350848, 7: 2048, 8: 134348800, 9: 134219776, 10: 133120, 11: 134348832, 12: 2080, 13: 0, 14: 134217760, 15: 133152, 2147483648: 2048, 2147483649: 134350880, 2147483650: 134219808, 2147483651: 134217728, 2147483652: 134348800, 2147483653: 133120, 2147483654: 133152, 2147483655: 32, 2147483656: 134217760, 2147483657: 2080, 2147483658: 131104, 2147483659: 134350848, 2147483660: 0, 2147483661: 134348832, 2147483662: 134219776, 2147483663: 131072, 16: 133152, 17: 134350848, 18: 32, 19: 2048, 20: 134219776, 21: 134217760, 22: 134348832, 23: 131072, 24: 0, 25: 131104, 26: 134348800, 27: 134219808, 28: 134350880, 29: 133120, 30: 2080, 31: 134217728, 2147483664: 131072, 2147483665: 2048, 2147483666: 134348832, 2147483667: 133152, 2147483668: 32, 2147483669: 134348800, 2147483670: 134217728, 2147483671: 134219808, 2147483672: 134350880, 2147483673: 134217760, 2147483674: 134219776, 2147483675: 0, 2147483676: 133120, 2147483677: 2080, 2147483678: 131104, 2147483679: 134350848 }], u = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679], o = i.DES = r.extend({ _doReset: function () { for (var t = this._key.words, e = [], r = 0; r < 56; r++) { var i = h[r] - 1; e[r] = t[i >>> 5] >>> 31 - i % 32 & 1 } for (var n = this._subKeys = [], o = 0; o < 16; o++) { var s = n[o] = [], c = f[o]; for (r = 0; r < 24; r++)s[r / 6 | 0] |= e[(l[r] - 1 + c) % 28] << 31 - r % 6, s[4 + (r / 6 | 0)] |= e[28 + (l[r + 24] - 1 + c) % 28] << 31 - r % 6; s[0] = s[0] << 1 | s[0] >>> 31; for (r = 1; r < 7; r++)s[r] = s[r] >>> 4 * (r - 1) + 3; s[7] = s[7] << 5 | s[7] >>> 27 } var a = this._invSubKeys = []; for (r = 0; r < 16; r++)a[r] = n[15 - r] }, encryptBlock: function (t, e) { this._doCryptBlock(t, e, this._subKeys) }, decryptBlock: function (t, e) { this._doCryptBlock(t, e, this._invSubKeys) }, _doCryptBlock: function (t, e, r) { this._lBlock = t[e], this._rBlock = t[e + 1], p.call(this, 4, 252645135), p.call(this, 16, 65535), _.call(this, 2, 858993459), _.call(this, 8, 16711935), p.call(this, 1, 1431655765); for (var i = 0; i < 16; i++) { for (var n = r[i], o = this._lBlock, s = this._rBlock, c = 0, a = 0; a < 8; a++)c |= d[a][((s ^ n[a]) & u[a]) >>> 0]; this._lBlock = s, this._rBlock = o ^ c } var h = this._lBlock; this._lBlock = this._rBlock, this._rBlock = h, p.call(this, 1, 1431655765), _.call(this, 8, 16711935), _.call(this, 2, 858993459), p.call(this, 16, 65535), p.call(this, 4, 252645135), t[e] = this._lBlock, t[e + 1] = this._rBlock }, keySize: 2, ivSize: 2, blockSize: 2 }); function p(t, e) { var r = (this._lBlock >>> t ^ this._rBlock) & e; this._rBlock ^= r, this._lBlock ^= r << t } function _(t, e) { var r = (this._rBlock >>> t ^ this._lBlock) & e; this._lBlock ^= r, this._rBlock ^= r << t } t.DES = r._createHelper(o); var s = i.TripleDES = r.extend({ _doReset: function () { var t = this._key.words; if (2 !== t.length && 4 !== t.length && t.length < 6) throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192."); var e = t.slice(0, 2), r = t.length < 4 ? t.slice(0, 2) : t.slice(2, 4), i = t.length < 6 ? t.slice(0, 2) : t.slice(4, 6); this._des1 = o.createEncryptor(n.create(e)), this._des2 = o.createEncryptor(n.create(r)), this._des3 = o.createEncryptor(n.create(i)) }, encryptBlock: function (t, e) { this._des1.encryptBlock(t, e), this._des2.decryptBlock(t, e), this._des3.encryptBlock(t, e) }, decryptBlock: function (t, e) { this._des3.decryptBlock(t, e), this._des2.encryptBlock(t, e), this._des1.decryptBlock(t, e) }, keySize: 6, ivSize: 2, blockSize: 2 }); t.TripleDES = r._createHelper(s) }(), function () { var t = bt, e = t.lib.StreamCipher, r = t.algo, i = r.RC4 = e.extend({ _doReset: function () { for (var t = this._key, e = t.words, r = t.sigBytes, i = this._S = [], n = 0; n < 256; n++)i[n] = n; n = 0; for (var o = 0; n < 256; n++) { var s = n % r, c = e[s >>> 2] >>> 24 - s % 4 * 8 & 255; o = (o + i[n] + c) % 256; var a = i[n]; i[n] = i[o], i[o] = a } this._i = this._j = 0 }, _doProcessBlock: function (t, e) { t[e] ^= n.call(this) }, keySize: 8, ivSize: 0 }); function n() { for (var t = this._S, e = this._i, r = this._j, i = 0, n = 0; n < 4; n++) { r = (r + t[e = (e + 1) % 256]) % 256; var o = t[e]; t[e] = t[r], t[r] = o, i |= t[(t[e] + t[r]) % 256] << 24 - 8 * n } return this._i = e, this._j = r, i } t.RC4 = e._createHelper(i); var o = r.RC4Drop = i.extend({ cfg: i.cfg.extend({ drop: 192 }), _doReset: function () { i._doReset.call(this); for (var t = this.cfg.drop; 0 < t; t--)n.call(this) } }); t.RC4Drop = e._createHelper(o) }(), bt.mode.CTRGladman = (ot = bt.lib.BlockCipherMode.extend(), st = ot.Encryptor = ot.extend({ processBlock: function (t, e) { var r, i = this._cipher, n = i.blockSize, o = this._iv, s = this._counter; o && (s = this._counter = o.slice(0), this._iv = void 0), 0 === ((r = s)[0] = Et(r[0])) && (r[1] = Et(r[1])); var c = s.slice(0); i.encryptBlock(c, 0); for (var a = 0; a < n; a++)t[e + a] ^= c[a] } }), ot.Decryptor = st, ot), at = (ct = bt).lib.StreamCipher, ht = ct.algo, lt = [], ft = [], dt = [], ut = ht.Rabbit = at.extend({ _doReset: function () { for (var t = this._key.words, e = this.cfg.iv, r = 0; r < 4; r++)t[r] = 16711935 & (t[r] << 8 | t[r] >>> 24) | 4278255360 & (t[r] << 24 | t[r] >>> 8); var i = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16], n = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]]; for (r = this._b = 0; r < 4; r++)Rt.call(this); for (r = 0; r < 8; r++)n[r] ^= i[r + 4 & 7]; if (e) { var o = e.words, s = o[0], c = o[1], a = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), h = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8), l = a >>> 16 | 4294901760 & h, f = h << 16 | 65535 & a; n[0] ^= a, n[1] ^= l, n[2] ^= h, n[3] ^= f, n[4] ^= a, n[5] ^= l, n[6] ^= h, n[7] ^= f; for (r = 0; r < 4; r++)Rt.call(this) } }, _doProcessBlock: function (t, e) { var r = this._X; Rt.call(this), lt[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16, lt[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16, lt[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16, lt[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16; for (var i = 0; i < 4; i++)lt[i] = 16711935 & (lt[i] << 8 | lt[i] >>> 24) | 4278255360 & (lt[i] << 24 | lt[i] >>> 8), t[e + i] ^= lt[i] }, blockSize: 4, ivSize: 2 }), ct.Rabbit = at._createHelper(ut), bt.mode.CTR = (pt = bt.lib.BlockCipherMode.extend(), _t = pt.Encryptor = pt.extend({ processBlock: function (t, e) { var r = this._cipher, i = r.blockSize, n = this._iv, o = this._counter; n && (o = this._counter = n.slice(0), this._iv = void 0); var s = o.slice(0); r.encryptBlock(s, 0), o[i - 1] = o[i - 1] + 1 | 0; for (var c = 0; c < i; c++)t[e + c] ^= s[c] } }), pt.Decryptor = _t, pt), yt = (vt = bt).lib.StreamCipher, gt = vt.algo, Bt = [], wt = [], kt = [], St = gt.RabbitLegacy = yt.extend({ _doReset: function () { for (var t = this._key.words, e = this.cfg.iv, r = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16], i = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]], n = this._b = 0; n < 4; n++)Mt.call(this); for (n = 0; n < 8; n++)i[n] ^= r[n + 4 & 7]; if (e) { var o = e.words, s = o[0], c = o[1], a = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), h = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8), l = a >>> 16 | 4294901760 & h, f = h << 16 | 65535 & a; i[0] ^= a, i[1] ^= l, i[2] ^= h, i[3] ^= f, i[4] ^= a, i[5] ^= l, i[6] ^= h, i[7] ^= f; for (n = 0; n < 4; n++)Mt.call(this) } }, _doProcessBlock: function (t, e) { var r = this._X; Mt.call(this), Bt[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16, Bt[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16, Bt[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16, Bt[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16; for (var i = 0; i < 4; i++)Bt[i] = 16711935 & (Bt[i] << 8 | Bt[i] >>> 24) | 4278255360 & (Bt[i] << 24 | Bt[i] >>> 8), t[e + i] ^= Bt[i] }, blockSize: 4, ivSize: 2 }), vt.RabbitLegacy = yt._createHelper(St), bt.pad.ZeroPadding = { pad: function (t, e) { var r = 4 * e; t.clamp(), t.sigBytes += r - (t.sigBytes % r || r) }, unpad: function (t) { var e = t.words, r = t.sigBytes - 1; for (r = t.sigBytes - 1; 0 <= r; r--)if (e[r >>> 2] >>> 24 - r % 4 * 8 & 255) { t.sigBytes = r + 1; break } } }, bt });


const $ = new Env('JD东东农场');
$.CryptoJS = $.isNode() ? require('crypto-js') : CryptoJS;
const notify = $.isNode() ? require('./sendNotify') : '';
let cookie = '', jdFruitShareArr = [], isBox = false, newShareCodes;
let cookieArr = [];
//助力好友分享码(最多3个,否则后面的助力失败),原因:京东农场每人每天只有3次助力机会
//此此内容是IOS用户下载脚本到本地使用，填写互助码的地方，同一京东账号的好友互助码请使用@符号隔开。
//下面给出两个账号的填写示例（iOS只支持2个京东账号）
let shareCodes = [ // 这个列表填入你要助力的好友的shareCode
   //账号一的好友shareCode,不同好友的shareCode中间用@符号隔开
  '1ee20e01c8c4450dbf8cc1c38c1eea69@a9c5641c550048d0bbef109c9aa64fb4@3',
  //账号二的好友shareCode,不同好友的shareCode中间用@符号隔开
  '8d2ec49a30974e8794f7d563a6d946cd@a9c5641c550048d0bbef109c9aa64fb4@3@4','1ee20e01c8c4450dbf8cc1c38c1eea69@8d2ec49a30974e8794f7d563a6d946cd@3',
]

let jdcookies =  $.isNode() ? (process.env.JDCOOKIES ? process.env.JDCOOKIES : "") : ($.getdata('JDCOOKIES') ? $.getdata('JDCOOKIES') : "");
let jdcookies1 =  $.isNode() ? (process.env.JDCOOKIES1 ? process.env.JDCOOKIES1 : "") : ($.getdata('JDCOOKIES1') ? $.getdata('JDCOOKIES1') : "");
let jdcookies2 =  $.isNode() ? (process.env.JDCOOKIES2 ? process.env.JDCOOKIES2 : "") : ($.getdata('JDCOOKIES2') ? $.getdata('JDCOOKIES2') : "");

let message = '', subTitle = '', option = {}, isFruitFinished = false;
const retainWater = 100;//保留水滴大于多少g,默认100g;
let jdNotify = false;//是否关闭通知，false打开通知推送，true关闭通知推送
let jdFruitBeanCard = false;//农场使用水滴换豆卡(如果出现限时活动时100g水换20豆,此时比浇水划算,推荐换豆),true表示换豆(不浇水),false表示不换豆(继续浇水),脚本默认是浇水
let randomCount = $.isNode() ? 20 : 5;
const JD_API_HOST = 'https://api.m.jd.com/client.action';
const urlSchema = `openjd://virtual?params=%7B%20%22category%22:%20%22jump%22,%20%22des%22:%20%22m%22,%20%22url%22:%20%22https://h5.m.jd.com/babelDiy/Zeus/3KSjXqQabiTuD1cJ28QskrpWoBKT/index.html%22%20%7D`;
!(async () => {
  if (!getCookies()) return;

  for (let i = 0; i < cookieArr.length; i++) {
    if (cookieArr[i]) {
      cookie = cookieArr[i];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=(.+?);/) && cookie.match(/pt_pin=(.+?);/)[1])
      $.index = i + 1;
      $.isLogin = true;
      $.nickName = '';
      await TotalBean();
      console.log(`\n开始【京东账号${$.index}】${$.nickName || $.UserName}\n`);
      if (!$.isLogin) {
        $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});


        continue
      }
      message = '';
      subTitle = '';
      option = {};
      await shareCodesFormat();
      await jdFruit();
    }
  }
})()
    .catch((e) => {
      $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
      $.done();
    })
async function jdFruit() {
  subTitle = `【京东账号${$.index}】${$.nickName}`;
  try {
    await initForFarm();
    if ($.farmInfo.farmUserPro) {
      // option['media-url'] = $.farmInfo.farmUserPro.goodsImage;
      message = `【水果名称】${$.farmInfo.farmUserPro.name}\n`;
      console.log(`\n【京东账号${$.index}（${$.nickName || $.UserName}）的${$.name}好友互助码】${$.farmInfo.farmUserPro.shareCode}\n`);
      console.log(`\n【已成功兑换水果】${$.farmInfo.farmUserPro.winTimes}次\n`);
      message += `【已兑换水果】${$.farmInfo.farmUserPro.winTimes}次\n`;
      await masterHelpShare();//助力好友
      if ($.farmInfo.treeState === 2 || $.farmInfo.treeState === 3) {
        option['open-url'] = urlSchema;
        $.msg($.name, ``, `【京东账号${$.index}】${$.nickName || $.UserName}\n【提醒⏰】${$.farmInfo.farmUserPro.name}已可领取\n请去京东APP或微信小程序查看\n点击弹窗即达`, option);
        await notify.sendNotify($.name,`【京东账号${$.index}】${$.nickName || $.UserName}\n【提醒⏰】${$.farmInfo.farmUserPro.name}已可领取\n请去京东APP或微信小程序查看` )
        return
      } else if ($.farmInfo.treeState === 1) {
        console.log(`\n${$.farmInfo.farmUserPro.name}种植中...\n`)
      } else if ($.farmInfo.treeState === 0) {
        //已下单购买, 但未开始种植新的水果
        option['open-url'] = urlSchema;
        $.msg($.name, ``, `【京东账号${$.index}】 ${$.nickName || $.UserName}\n【提醒⏰】您忘了种植新的水果\n请去京东APP或微信小程序选购并种植新的水果\n点击弹窗即达`, option);
 
        return
      }
      await doDailyTask();
      await doTenWater();//浇水十次
      await getFirstWaterAward();//领取首次浇水奖励
      await getTenWaterAward();//领取10浇水奖励
      await getWaterFriendGotAward();//领取为2好友浇水奖励
      await duck();
      await doTenWaterAgain();//再次浇水
      await predictionFruit();//预测水果成熟时间
    } else {
      console.log(`初始化农场数据异常, 请登录京东 app查看农场0元水果功能是否正常,农场初始化数据: ${JSON.stringify($.farmInfo)}`);
      message = `【数据异常】请手动登录京东app查看此账号${$.name}是否正常`;
    }
  } catch (e) {
    console.log(`任务执行异常，请检查执行日志 ‼️‼️`);
    message = `任务执行异常，请检查执行日志 ‼️‼️`;
    $.logErr(e);
  }
  await showMsg();
}
async function doDailyTask() {
  await taskInitForFarm();
  console.log(`开始签到`);
  if (!$.farmTask.signInit.todaySigned) {
    await signForFarm(); //签到
    if ($.signResult.code === "0") {
      console.log(`【签到成功】获得${$.signResult.amount}g💧\\n`)
      //message += `【签到成功】获得${$.signResult.amount}g💧\n`//连续签到${signResult.signDay}天
    } else {
      // message += `签到失败,详询日志\n`;
      console.log(`签到结果:  ${JSON.stringify($.signResult)}`);
    }
  } else {
    console.log(`今天已签到,连续签到${$.farmTask.signInit.totalSigned},下次签到可得${$.farmTask.signInit.signEnergyEachAmount}g\n`);
  }
  // 被水滴砸中
  console.log(`被水滴砸中： ${$.farmInfo.todayGotWaterGoalTask.canPop ? '是' : '否'}`);
  if ($.farmInfo.todayGotWaterGoalTask.canPop) {
    await gotWaterGoalTaskForFarm();
    if ($.goalResult.code === '0') {
      console.log(`【被水滴砸中】获得${$.goalResult.addEnergy}g💧\\n`);
      // message += `【被水滴砸中】获得${$.goalResult.addEnergy}g💧\n`
    }
  }
  console.log(`签到结束,开始广告浏览任务`);
  if (!$.farmTask.gotBrowseTaskAdInit.f) {
    let adverts = $.farmTask.gotBrowseTaskAdInit.userBrowseTaskAds
    let browseReward = 0
    let browseSuccess = 0
    let browseFail = 0
    for (let advert of adverts) { //开始浏览广告
      if (advert.limit <= advert.hadFinishedTimes) {
        // browseReward+=advert.reward
        console.log(`${advert.mainTitle}+ ' 已完成`);//,获得${advert.reward}g
        continue;
      }
      console.log('正在进行广告浏览任务: ' + advert.mainTitle);
      await browseAdTaskForFarm(advert.advertId, 0);
      if ($.browseResult.code === '0') {
        console.log(`${advert.mainTitle}浏览任务完成`);
        //领取奖励
        await browseAdTaskForFarm(advert.advertId, 1);
        if ($.browseRwardResult.code === '0') {
          console.log(`领取浏览${advert.mainTitle}广告奖励成功,获得${$.browseRwardResult.amount}g`)
          browseReward += $.browseRwardResult.amount
          browseSuccess++
        } else {
          browseFail++
          console.log(`领取浏览广告奖励结果:  ${JSON.stringify($.browseRwardResult)}`)
        }
      } else {
        browseFail++
        console.log(`广告浏览任务结果:   ${JSON.stringify($.browseResult)}`);
      }
    }
    if (browseFail > 0) {
      console.log(`【广告浏览】完成${browseSuccess}个,失败${browseFail},获得${browseReward}g💧\\n`);
      // message += `【广告浏览】完成${browseSuccess}个,失败${browseFail},获得${browseReward}g💧\n`;
    } else {
      console.log(`【广告浏览】完成${browseSuccess}个,获得${browseReward}g💧\n`);
      // message += `【广告浏览】完成${browseSuccess}个,获得${browseReward}g💧\n`;
    }
  } else {
    console.log(`今天已经做过浏览广告任务\n`);
  }
  //定时领水
  if (!$.farmTask.gotThreeMealInit.f) {
    //
    await gotThreeMealForFarm();
    if ($.threeMeal.code === "0") {
      console.log(`【定时领水】获得${$.threeMeal.amount}g💧\n`);
      // message += `【定时领水】获得${$.threeMeal.amount}g💧\n`;
    } else {
      // message += `【定时领水】失败,详询日志\n`;
      console.log(`定时领水成功结果:  ${JSON.stringify($.threeMeal)}`);
    }
  } else {
    console.log('当前不在定时领水时间断或者已经领过\n')
  }
  //给好友浇水
  if (!$.farmTask.waterFriendTaskInit.f) {
    if ($.farmTask.waterFriendTaskInit.waterFriendCountKey < $.farmTask.waterFriendTaskInit.waterFriendMax) {
      await doFriendsWater();
    }
  } else {
    console.log(`给${$.farmTask.waterFriendTaskInit.waterFriendMax}个好友浇水任务已完成\n`)
  }
  // await Promise.all([
  //   clockInIn(),//打卡领水
  //   executeWaterRains(),//水滴雨
  //   masterHelpShare(),//助力好友
  //   getExtraAward(),//领取额外水滴奖励
  //   turntableFarm()//天天抽奖得好礼
  // ])
  await getAwardInviteFriend();
  await clockInIn();//打卡领水
  await executeWaterRains();//水滴雨
  await getExtraAward();//领取额外水滴奖励
  await turntableFarm()//天天抽奖得好礼
}
async function predictionFruit() {
  console.log('开始预测水果成熟时间\n');
  await initForFarm();
  await taskInitForFarm();
  let waterEveryDayT = $.farmTask.totalWaterTaskInit.totalWaterTaskTimes;//今天到到目前为止，浇了多少次水
  message += `【今日共浇水】${waterEveryDayT}次\n`;
  message += `【剩余 水滴】${$.farmInfo.farmUserPro.totalEnergy}g💧\n`;
  message += `【水果🍉进度】${(($.farmInfo.farmUserPro.treeEnergy / $.farmInfo.farmUserPro.treeTotalEnergy) * 100).toFixed(2)}%，已浇水${$.farmInfo.farmUserPro.treeEnergy / 10}次,还需${($.farmInfo.farmUserPro.treeTotalEnergy - $.farmInfo.farmUserPro.treeEnergy) / 10}次\n`
  if ($.farmInfo.toFlowTimes > ($.farmInfo.farmUserPro.treeEnergy / 10)) {
    message += `【开花进度】再浇水${$.farmInfo.toFlowTimes - $.farmInfo.farmUserPro.treeEnergy / 10}次开花\n`
  } else if ($.farmInfo.toFruitTimes > ($.farmInfo.farmUserPro.treeEnergy / 10)) {
    message += `【结果进度】再浇水${$.farmInfo.toFruitTimes - $.farmInfo.farmUserPro.treeEnergy / 10}次结果\n`
  }
  // 预测n天后水果课可兑换功能
  let waterTotalT = ($.farmInfo.farmUserPro.treeTotalEnergy - $.farmInfo.farmUserPro.treeEnergy - $.farmInfo.farmUserPro.totalEnergy) / 10;//一共还需浇多少次水

  let waterD = Math.ceil(waterTotalT / waterEveryDayT);

  message += `【预测】${waterD === 1 ? '明天' : waterD === 2 ? '后天' : waterD + '天之后'}(${timeFormat(24 * 60 * 60 * 1000 * waterD + Date.now())}日)可兑换水果🍉`
}
//浇水十次
async function doTenWater() {
  jdFruitBeanCard = $.getdata('jdFruitBeanCard') ? $.getdata('jdFruitBeanCard') : jdFruitBeanCard;
  if ($.isNode() && process.env.FRUIT_BEAN_CARD) {
    jdFruitBeanCard = process.env.FRUIT_BEAN_CARD;
  }
  await myCardInfoForFarm();
  const { fastCard, doubleCard, beanCard, signCard  } = $.myCardInfoRes;
  if (`${jdFruitBeanCard}` === 'true' && JSON.stringify($.myCardInfoRes).match(`限时翻倍`) && beanCard > 0) {
    console.log(`您设置的是使用水滴换豆卡，且背包有水滴换豆卡${beanCard}张, 跳过10次浇水任务`)
    return
  }
  if ($.farmTask.totalWaterTaskInit.totalWaterTaskTimes < $.farmTask.totalWaterTaskInit.totalWaterTaskLimit) {
    console.log(`\n准备浇水十次`);
    let waterCount = 0;
    isFruitFinished = false;
    for (; waterCount < $.farmTask.totalWaterTaskInit.totalWaterTaskLimit - $.farmTask.totalWaterTaskInit.totalWaterTaskTimes; waterCount++) {
      console.log(`第${waterCount + 1}次浇水`);
      await waterGoodForFarm();
      console.log(`本次浇水结果:   ${JSON.stringify($.waterResult)}`);
      if ($.waterResult.code === '0') {
        console.log(`剩余水滴${$.waterResult.totalEnergy}g`);
        if ($.waterResult.finished) {
          // 已证实，waterResult.finished为true，表示水果可以去领取兑换了
          isFruitFinished = true;
          break
        } else {
          if ($.waterResult.totalEnergy < 10) {
            console.log(`水滴不够，结束浇水`)
            break
          }
          await gotStageAward();//领取阶段性水滴奖励
        }
      } else {
        console.log('浇水出现失败异常,跳出不在继续浇水')
        break;
      }
    }
    if (isFruitFinished) {
      option['open-url'] = urlSchema;
      $.msg($.name, ``, `【京东账号${$.index}】${$.nickName || $.UserName}\n【提醒⏰】${$.farmInfo.farmUserPro.name}已可领取\n请去京东APP或微信小程序查看\n点击弹窗即达`, option);
      $.done();

    }
  } else {
    console.log('\n今日已完成10次浇水任务\n');
  }
}
//领取首次浇水奖励
async function getFirstWaterAward() {
  await taskInitForFarm();
  //领取首次浇水奖励
  if (!$.farmTask.firstWaterInit.f && $.farmTask.firstWaterInit.totalWaterTimes > 0) {
    await firstWaterTaskForFarm();
    if ($.firstWaterReward.code === '0') {
      console.log(`【首次浇水奖励】获得${$.firstWaterReward.amount}g💧\n`);
      // message += `【首次浇水奖励】获得${$.firstWaterReward.amount}g💧\n`;
    } else {
      // message += '【首次浇水奖励】领取奖励失败,详询日志\n';
      console.log(`领取首次浇水奖励结果:  ${JSON.stringify($.firstWaterReward)}`);
    }
  } else {
    console.log('首次浇水奖励已领取\n')
  }
}
//领取十次浇水奖励
async function getTenWaterAward() {
  //领取10次浇水奖励
  if (!$.farmTask.totalWaterTaskInit.f && $.farmTask.totalWaterTaskInit.totalWaterTaskTimes >= $.farmTask.totalWaterTaskInit.totalWaterTaskLimit) {
    await totalWaterTaskForFarm();
    if ($.totalWaterReward.code === '0') {
      console.log(`【十次浇水奖励】获得${$.totalWaterReward.totalWaterTaskEnergy}g💧\n`);
      // message += `【十次浇水奖励】获得${$.totalWaterReward.totalWaterTaskEnergy}g💧\n`;
    } else {
      // message += '【十次浇水奖励】领取奖励失败,详询日志\n';
      console.log(`领取10次浇水奖励结果:  ${JSON.stringify($.totalWaterReward)}`);
    }
  } else if ($.farmTask.totalWaterTaskInit.totalWaterTaskTimes < $.farmTask.totalWaterTaskInit.totalWaterTaskLimit) {
    // message += `【十次浇水奖励】任务未完成，今日浇水${$.farmTask.totalWaterTaskInit.totalWaterTaskTimes}次\n`;
    console.log(`【十次浇水奖励】任务未完成，今日浇水${$.farmTask.totalWaterTaskInit.totalWaterTaskTimes}次\n`);
  }
  console.log('finished 水果任务完成!');
}
//再次浇水
async function doTenWaterAgain() {
  console.log('开始检查剩余水滴能否再次浇水再次浇水\n');
  await initForFarm();
  let totalEnergy  = $.farmInfo.farmUserPro.totalEnergy;
  console.log(`剩余水滴${totalEnergy}g\n`);
  await myCardInfoForFarm();
  const { fastCard, doubleCard, beanCard, signCard  } = $.myCardInfoRes;
  console.log(`背包已有道具:\n快速浇水卡:${fastCard === -1 ? '未解锁': fastCard + '张'}\n水滴翻倍卡:${doubleCard === -1 ? '未解锁': doubleCard + '张'}\n水滴换京豆卡:${beanCard === -1 ? '未解锁' : beanCard + '张'}\n加签卡:${signCard === -1 ? '未解锁' : signCard + '张'}\n`)
  if (totalEnergy >= 100 && doubleCard > 0) {
    //使用翻倍水滴卡
    for (let i = 0; i < new Array(doubleCard).fill('').length; i++) {
      await userMyCardForFarm('doubleCard');
      console.log(`使用翻倍水滴卡结果:${JSON.stringify($.userMyCardRes)}`);
    }
    await initForFarm();
    totalEnergy = $.farmInfo.farmUserPro.totalEnergy;
  }
  if (signCard > 0) {
    //使用加签卡
    for (let i = 0; i < new Array(signCard).fill('').length; i++) {
      await userMyCardForFarm('signCard');
      console.log(`使用加签卡结果:${JSON.stringify($.userMyCardRes)}`);
    }
    await initForFarm();
    totalEnergy = $.farmInfo.farmUserPro.totalEnergy;
  }
  jdFruitBeanCard = $.getdata('jdFruitBeanCard') ? $.getdata('jdFruitBeanCard') : jdFruitBeanCard;
  if ($.isNode() && process.env.FRUIT_BEAN_CARD) {
    jdFruitBeanCard = process.env.FRUIT_BEAN_CARD;
  }
  if (`${jdFruitBeanCard}` === 'true' && JSON.stringify($.myCardInfoRes).match('限时翻倍')) {
    console.log(`\n您设置的是水滴换豆功能,现在为您换豆`);
    if (totalEnergy >= 100 && $.myCardInfoRes.beanCard > 0) {
      //使用水滴换豆卡
      await userMyCardForFarm('beanCard');
      console.log(`使用水滴换豆卡结果:${JSON.stringify($.userMyCardRes)}`);
      if ($.userMyCardRes.code === '0') {
        message += `【水滴换豆卡】获得${$.userMyCardRes.beanCount}个京豆\n`;
        return
      }
    } else {
      console.log(`您目前水滴:${totalEnergy}g,水滴换豆卡${$.myCardInfoRes.beanCard}张,暂不满足水滴换豆的条件,为您继续浇水`)
    }
  }
  // if (totalEnergy > 100 && $.myCardInfoRes.fastCard > 0) {
  //   //使用快速浇水卡
  //   await userMyCardForFarm('fastCard');
  //   console.log(`使用快速浇水卡结果:${JSON.stringify($.userMyCardRes)}`);
  //   if ($.userMyCardRes.code === '0') {
  //     console.log(`已使用快速浇水卡浇水${$.userMyCardRes.waterEnergy}g`);
  //   }
  //   await initForFarm();
  //   totalEnergy  = $.farmInfo.farmUserPro.totalEnergy;
  // }
  // 所有的浇水(10次浇水)任务，获取水滴任务完成后，如果剩余水滴大于等于60g,则继续浇水(保留部分水滴是用于完成第二天的浇水10次的任务)
  let overageEnergy = totalEnergy - retainWater;
  if (totalEnergy >= ($.farmInfo.farmUserPro.treeTotalEnergy - $.farmInfo.farmUserPro.treeEnergy)) {
    //如果现有的水滴，大于水果可兑换所需的对滴(也就是把水滴浇完，水果就能兑换了)
    isFruitFinished = false;
    for (let i = 0; i < ($.farmInfo.farmUserPro.treeTotalEnergy - $.farmInfo.farmUserPro.treeEnergy) / 10; i++) {
      await waterGoodForFarm();
      console.log(`本次浇水结果(水果马上就可兑换了):   ${JSON.stringify($.waterResult)}`);
      if ($.waterResult.code === '0') {
        console.log('\n浇水10g成功\n');
        if ($.waterResult.finished) {
          // 已证实，waterResult.finished为true，表示水果可以去领取兑换了
          isFruitFinished = true;
          break
        } else {
          console.log(`目前水滴【${$.waterResult.totalEnergy}】g,继续浇水，水果马上就可以兑换了`)
        }
      } else {
        console.log('浇水出现失败异常,跳出不在继续浇水')
        break;
      }
    }
    if (isFruitFinished) {
      option['open-url'] = urlSchema;
      $.msg($.name, ``, `【京东账号${$.index}】${$.nickName || $.UserName}\n【提醒⏰】${$.farmInfo.farmUserPro.name}已可领取\n请去京东APP或微信小程序查看\n点击弹窗即达`, option);
      $.done();

    }
  } else if (overageEnergy >= 10) {
    console.log("目前剩余水滴：【" + totalEnergy + "】g，可继续浇水");
    isFruitFinished = false;
    for (let i = 0; i < parseInt(overageEnergy / 10); i++) {
      await waterGoodForFarm();
      console.log(`本次浇水结果:   ${JSON.stringify($.waterResult)}`);
      if ($.waterResult.code === '0') {
        console.log(`\n浇水10g成功,剩余${$.waterResult.totalEnergy}\n`)
        if ($.waterResult.finished) {
          // 已证实，waterResult.finished为true，表示水果可以去领取兑换了
          isFruitFinished = true;
          break
        } else {
          await gotStageAward()
        }
      } else {
        console.log('浇水出现失败异常,跳出不在继续浇水')
        break;
      }
    }
    if (isFruitFinished) {
      option['open-url'] = urlSchema;
      $.msg($.name, ``, `【京东账号${$.index}】${$.nickName || $.UserName}\n【提醒⏰】${$.farmInfo.farmUserPro.name}已可领取\n请去京东APP或微信小程序查看\n点击弹窗即达`, option);
      $.done();

    }
  } else {
    console.log("目前剩余水滴：【" + totalEnergy + "】g,不再继续浇水,保留部分水滴用于完成第二天【十次浇水得水滴】任务")
  }
}
//领取阶段性水滴奖励
function gotStageAward() {
  return new Promise(async resolve => {
    if ($.waterResult.waterStatus === 0 && $.waterResult.treeEnergy === 10) {
      console.log('果树发芽了,奖励30g水滴');
      await gotStageAwardForFarm('1');
      console.log(`浇水阶段奖励1领取结果 ${JSON.stringify($.gotStageAwardForFarmRes)}`);
      if ($.gotStageAwardForFarmRes.code === '0') {
        // message += `【果树发芽了】奖励${$.gotStageAwardForFarmRes.addEnergy}\n`;
        console.log(`【果树发芽了】奖励${$.gotStageAwardForFarmRes.addEnergy}\n`);
      }
    } else if ($.waterResult.waterStatus === 1) {
      console.log('果树开花了,奖励40g水滴');
      await gotStageAwardForFarm('2');
      console.log(`浇水阶段奖励2领取结果 ${JSON.stringify($.gotStageAwardForFarmRes)}`);
      if ($.gotStageAwardForFarmRes.code === '0') {
        // message += `【果树开花了】奖励${$.gotStageAwardForFarmRes.addEnergy}g💧\n`;
        console.log(`【果树开花了】奖励${$.gotStageAwardForFarmRes.addEnergy}g💧\n`);
      }
    } else if ($.waterResult.waterStatus === 2) {
      console.log('果树长出小果子啦, 奖励50g水滴');
      await gotStageAwardForFarm('3');
      console.log(`浇水阶段奖励3领取结果 ${JSON.stringify($.gotStageAwardForFarmRes)}`)
      if ($.gotStageAwardForFarmRes.code === '0') {
        // message += `【果树结果了】奖励${$.gotStageAwardForFarmRes.addEnergy}g💧\n`;
        console.log(`【果树结果了】奖励${$.gotStageAwardForFarmRes.addEnergy}g💧\n`);
      }
    }
    resolve()
  })
}
//天天抽奖活动
async function turntableFarm() {
  await initForTurntableFarm();
  if ($.initForTurntableFarmRes.code === '0') {
    //领取定时奖励 //4小时一次
    let {timingIntervalHours, timingLastSysTime, sysTime, timingGotStatus, remainLotteryTimes, turntableInfos} = $.initForTurntableFarmRes;

    if (!timingGotStatus) {
      console.log(`是否到了领取免费赠送的抽奖机会----${sysTime > (timingLastSysTime + 60*60*timingIntervalHours*1000)}`)
      if (sysTime > (timingLastSysTime + 60*60*timingIntervalHours*1000)) {
        await timingAwardForTurntableFarm();
        console.log(`领取定时奖励结果${JSON.stringify($.timingAwardRes)}`);
        await initForTurntableFarm();
        remainLotteryTimes = $.initForTurntableFarmRes.remainLotteryTimes;
      } else {
        console.log(`免费赠送的抽奖机会未到时间`)
      }
    } else {
      console.log('4小时候免费赠送的抽奖机会已领取')
    }
    if ($.initForTurntableFarmRes.turntableBrowserAds && $.initForTurntableFarmRes.turntableBrowserAds.length > 0) {
      for (let index = 0; index < $.initForTurntableFarmRes.turntableBrowserAds.length; index++) {
        if (!$.initForTurntableFarmRes.turntableBrowserAds[index].status) {
          console.log(`开始浏览天天抽奖的第${index + 1}个逛会场任务`)
          await browserForTurntableFarm(1, $.initForTurntableFarmRes.turntableBrowserAds[index].adId);
          if ($.browserForTurntableFarmRes.code === '0' && $.browserForTurntableFarmRes.status) {
            console.log(`第${index + 1}个逛会场任务完成，开始领取水滴奖励\n`)
            await browserForTurntableFarm(2, $.initForTurntableFarmRes.turntableBrowserAds[index].adId);
            if ($.browserForTurntableFarmRes.code === '0') {
              console.log(`第${index + 1}个逛会场任务领取水滴奖励完成\n`)
              await initForTurntableFarm();
              remainLotteryTimes = $.initForTurntableFarmRes.remainLotteryTimes;
            }
          }
        } else {
          console.log(`浏览天天抽奖的第${index + 1}个逛会场任务已完成`)
        }
      }
    }
    //天天抽奖助力
    console.log('开始天天抽奖--好友助力--每人每天只有三次助力机会.')
    for (let code of newShareCodes) {
      if (code === $.farmInfo.farmUserPro.shareCode) {
        console.log('天天抽奖-不能自己给自己助力\n')
        continue
      }
      await lotteryMasterHelp(code);
      // console.log('天天抽奖助力结果',lotteryMasterHelpRes.helpResult)
      if ($.lotteryMasterHelpRes.helpResult.code === '0') {
        console.log(`天天抽奖-助力${$.lotteryMasterHelpRes.helpResult.masterUserInfo.nickName}成功\n`)
      } else if ($.lotteryMasterHelpRes.helpResult.code === '11') {
        console.log(`天天抽奖-不要重复助力${$.lotteryMasterHelpRes.helpResult.masterUserInfo.nickName}\n`)
      } else if ($.lotteryMasterHelpRes.helpResult.code === '13') {
        console.log(`天天抽奖-助力${$.lotteryMasterHelpRes.helpResult.masterUserInfo.nickName}失败,助力次数耗尽\n`);
        break;
      }
    }
    console.log(`---天天抽奖次数remainLotteryTimes----${remainLotteryTimes}次`)
    //抽奖
    if (remainLotteryTimes > 0) {
      console.log('开始抽奖')
      let lotteryResult = '';
      for (let i = 0; i < new Array(remainLotteryTimes).fill('').length; i++) {
        await lotteryForTurntableFarm()
        console.log(`第${i + 1}次抽奖结果${JSON.stringify($.lotteryRes)}`);
        if ($.lotteryRes.code === '0') {
          turntableInfos.map((item) => {
            if (item.type === $.lotteryRes.type) {
              console.log(`lotteryRes.type${$.lotteryRes.type}`);
              if ($.lotteryRes.type.match(/bean/g) && $.lotteryRes.type.match(/bean/g)[0] === 'bean') {
                lotteryResult += `${item.name}个，`;
              } else if ($.lotteryRes.type.match(/water/g) && $.lotteryRes.type.match(/water/g)[0] === 'water') {
                lotteryResult += `${item.name}，`;
              } else {
                lotteryResult += `${item.name}，`;
              }
            }
          })
          //没有次数了
          if ($.lotteryRes.remainLotteryTimes === 0) {
            break
          }
        }
      }
      if (lotteryResult) {
        console.log(`【天天抽奖】${lotteryResult.substr(0, lotteryResult.length - 1)}\n`)
        // message += `【天天抽奖】${lotteryResult.substr(0, lotteryResult.length - 1)}\n`;
      }
    }  else {
      console.log('天天抽奖--抽奖机会为0次')
    }
  } else {
    console.log('初始化天天抽奖得好礼失败')
  }
}
//领取额外奖励水滴
async function getExtraAward() {
  await masterHelpTaskInitForFarm();
  if ($.masterHelpResult.code === '0') {
    if ($.masterHelpResult.masterHelpPeoples && $.masterHelpResult.masterHelpPeoples.length >= 5) {
      // 已有五人助力。领取助力后的奖励
      if (!$.masterHelpResult.masterGotFinal) {
        await masterGotFinishedTaskForFarm();
        if ($.masterGotFinished.code === '0') {
          console.log(`已成功领取好友助力奖励：【${$.masterGotFinished.amount}】g水`);
          message += `【额外奖励】${$.masterGotFinished.amount}g水领取成功\n`;
        }
      } else {
        console.log("已经领取过5好友助力额外奖励");
        message += `【额外奖励】已被领取过\n`;
      }
    } else {
      console.log("助力好友未达到5个");
      message += `【额外奖励】领取失败,原因：给您助力的人未达5个\n`;
    }
    if ($.masterHelpResult.masterHelpPeoples && $.masterHelpResult.masterHelpPeoples.length > 0) {
      let str = '';
      $.masterHelpResult.masterHelpPeoples.map((item, index) => {
        if (index === ($.masterHelpResult.masterHelpPeoples.length - 1)) {
          str += item.nickName || "匿名用户";
        } else {
          str += (item.nickName || "匿名用户") + ',';
        }
        let date = new Date(item.time);
        let time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getMinutes();
        console.log(`\n京东昵称【${item.nickName || "匿名用户"}】 在 ${time} 给您助过力\n`);
      })
      message += `【助力您的好友】${str}\n`;
    }
    console.log('领取额外奖励水滴结束\n');
  }
}
//助力好友
async function masterHelpShare() {
  console.log('开始助力好友')
  let salveHelpAddWater = 0;
  let remainTimes = 3;//今日剩余助力次数,默认3次（京东农场每人每天3次助力机会）。
  let helpSuccessPeoples = '';//成功助力好友
  console.log(`格式化后的助力码::${JSON.stringify(newShareCodes)}\n`);

  for (let code of newShareCodes) {
    console.log(`开始助力京东账号${$.index} - ${$.nickName}的好友: ${code}`);
    if (!code) continue;
    if (code === $.farmInfo.farmUserPro.shareCode) {
      console.log('不能为自己助力哦，跳过自己的shareCode\n')
      continue
    }
    await masterHelp(code);
    if ($.helpResult.code === '0') {
      if ($.helpResult.helpResult.code === '0') {
        //助力成功
        salveHelpAddWater += $.helpResult.helpResult.salveHelpAddWater;
        console.log(`【助力好友结果】: 已成功给【${$.helpResult.helpResult.masterUserInfo.nickName}】助力`);
        console.log(`给好友【${$.helpResult.helpResult.masterUserInfo.nickName}】助力获得${$.helpResult.helpResult.salveHelpAddWater}g水滴`)
        helpSuccessPeoples += ($.helpResult.helpResult.masterUserInfo.nickName || '匿名用户') + ',';
      } else if ($.helpResult.helpResult.code === '8') {
        console.log(`【助力好友结果】: 助力【${$.helpResult.helpResult.masterUserInfo.nickName}】失败，您今天助力次数已耗尽`);
      } else if ($.helpResult.helpResult.code === '9') {
        console.log(`【助力好友结果】: 之前给【${$.helpResult.helpResult.masterUserInfo.nickName}】助力过了`);
      } else if ($.helpResult.helpResult.code === '10') {
        console.log(`【助力好友结果】: 好友【${$.helpResult.helpResult.masterUserInfo.nickName}】已满五人助力`);
      } else {
        console.log(`助力其他情况：${JSON.stringify($.helpResult.helpResult)}`);
      }
      console.log(`【今日助力次数还剩】${$.helpResult.helpResult.remainTimes}次\n`);
      remainTimes = $.helpResult.helpResult.remainTimes;
      if ($.helpResult.helpResult.remainTimes === 0) {
        console.log(`您当前助力次数已耗尽，跳出助力`);
        break
      }
    } else {
      console.log(`助力失败::${JSON.stringify($.helpResult)}`);
    }
  }
  if ($.isLoon() || $.isQuanX() || $.isSurge()) {
    let helpSuccessPeoplesKey = timeFormat() + $.farmInfo.farmUserPro.shareCode;
    if (!$.getdata(helpSuccessPeoplesKey)) {
      //把前一天的清除
      $.setdata('', timeFormat(Date.now() - 24 * 60 * 60 * 1000) + $.farmInfo.farmUserPro.shareCode);
      $.setdata('', helpSuccessPeoplesKey);
    }
    if (helpSuccessPeoples) {
      if ($.getdata(helpSuccessPeoplesKey)) {
        $.setdata($.getdata(helpSuccessPeoplesKey) + ',' + helpSuccessPeoples, helpSuccessPeoplesKey);
      } else {
        $.setdata(helpSuccessPeoples, helpSuccessPeoplesKey);
      }
    }
    helpSuccessPeoples = $.getdata(helpSuccessPeoplesKey);
  }
  if (helpSuccessPeoples && helpSuccessPeoples.length > 0) {
    message += `【您助力的好友👬】${helpSuccessPeoples.substr(0, helpSuccessPeoples.length - 1)}\n`;
  }
  if (salveHelpAddWater > 0) {
    // message += `【助力好友👬】获得${salveHelpAddWater}g💧\n`;
    console.log(`【助力好友👬】获得${salveHelpAddWater}g💧\n`);
  }
  message += `【今日剩余助力👬】${remainTimes}次\n`;
  console.log('助力好友结束，即将开始领取额外水滴奖励\n');
}
//水滴雨
async function executeWaterRains() {
  let executeWaterRain = !$.farmTask.waterRainInit.f;
  if (executeWaterRain) {
    console.log(`水滴雨任务，每天两次，最多可得10g水滴`);
    console.log(`两次水滴雨任务是否全部完成：${$.farmTask.waterRainInit.f ? '是' : '否'}`);
    if ($.farmTask.waterRainInit.lastTime) {
      if (Date.now() < ($.farmTask.waterRainInit.lastTime + 3 * 60 * 60 * 1000)) {
        executeWaterRain = false;
        // message += `【第${$.farmTask.waterRainInit.winTimes + 1}次水滴雨】未到时间，请${new Date($.farmTask.waterRainInit.lastTime + 3 * 60 * 60 * 1000).toLocaleTimeString()}再试\n`;
        console.log(`\`【第${$.farmTask.waterRainInit.winTimes + 1}次水滴雨】未到时间，请${new Date($.farmTask.waterRainInit.lastTime + 3 * 60 * 60 * 1000).toLocaleTimeString()}再试\n`);
      }
    }
    if (executeWaterRain) {
      console.log(`开始水滴雨任务,这是第${$.farmTask.waterRainInit.winTimes + 1}次，剩余${2 - ($.farmTask.waterRainInit.winTimes + 1)}次`);
      await waterRainForFarm();
      console.log('水滴雨waterRain');
      if ($.waterRain.code === '0') {
        console.log('水滴雨任务执行成功，获得水滴：' + $.waterRain.addEnergy + 'g');
        console.log(`【第${$.farmTask.waterRainInit.winTimes + 1}次水滴雨】获得${$.waterRain.addEnergy}g水滴\n`);
        // message += `【第${$.farmTask.waterRainInit.winTimes + 1}次水滴雨】获得${$.waterRain.addEnergy}g水滴\n`;
      }
    }
  } else {
    // message += `【水滴雨】已全部完成，获得20g💧\n`;
  }
}
//打卡领水活动
async function clockInIn() {
  console.log('开始打卡领水活动（签到，关注，领券）');
  await clockInInitForFarm();
  if ($.clockInInit.code === '0') {
    // 签到得水滴
    if (!$.clockInInit.todaySigned) {
      console.log('开始今日签到');
      await clockInForFarm();
      console.log(`打卡结果${JSON.stringify($.clockInForFarmRes)}`);
      if ($.clockInForFarmRes.code === '0') {
        // message += `【第${$.clockInForFarmRes.signDay}天签到】获得${$.clockInForFarmRes.amount}g💧\n`;
        console.log(`【第${$.clockInForFarmRes.signDay}天签到】获得${$.clockInForFarmRes.amount}g💧\n`)
        if ($.clockInForFarmRes.signDay === 7) {
          //可以领取惊喜礼包
          console.log('开始领取--惊喜礼包38g水滴');
          await gotClockInGift();
          if ($.gotClockInGiftRes.code === '0') {
            // message += `【惊喜礼包】获得${$.gotClockInGiftRes.amount}g💧\n`;
            console.log(`【惊喜礼包】获得${$.gotClockInGiftRes.amount}g💧\n`);
          }
        }
      }
    }
    if ($.clockInInit.todaySigned && $.clockInInit.totalSigned === 7) {
      console.log('开始领取--惊喜礼包38g水滴');
      await gotClockInGift();
      if ($.gotClockInGiftRes.code === '0') {
        // message += `【惊喜礼包】获得${$.gotClockInGiftRes.amount}g💧\n`;
        console.log(`【惊喜礼包】获得${$.gotClockInGiftRes.amount}g💧\n`);
      }
    }
    // 限时关注得水滴
    if ($.clockInInit.themes && $.clockInInit.themes.length > 0) {
      for (let item of $.clockInInit.themes) {
        if (!item.hadGot) {
          console.log(`关注ID${item.id}`);
          await clockInFollowForFarm(item.id, "theme", "1");
          console.log(`themeStep1--结果${JSON.stringify($.themeStep1)}`);
          if ($.themeStep1.code === '0') {
            await clockInFollowForFarm(item.id, "theme", "2");
            console.log(`themeStep2--结果${JSON.stringify($.themeStep2)}`);
            if ($.themeStep2.code === '0') {
              console.log(`关注${item.name}，获得水滴${$.themeStep2.amount}g`);
            }
          }
        }
      }
    }
    // 限时领券得水滴
    if ($.clockInInit.venderCoupons && $.clockInInit.venderCoupons.length > 0) {
      for (let item of $.clockInInit.venderCoupons) {
        if (!item.hadGot) {
          console.log(`领券的ID${item.id}`);
          await clockInFollowForFarm(item.id, "venderCoupon", "1");
          console.log(`venderCouponStep1--结果${JSON.stringify($.venderCouponStep1)}`);
          if ($.venderCouponStep1.code === '0') {
            await clockInFollowForFarm(item.id, "venderCoupon", "2");
            if ($.venderCouponStep2.code === '0') {
              console.log(`venderCouponStep2--结果${JSON.stringify($.venderCouponStep2)}`);
              console.log(`从${item.name}领券，获得水滴${$.venderCouponStep2.amount}g`);
            }
          }
        }
      }
    }
  }
  console.log('开始打卡领水活动（签到，关注，领券）结束\n');
}
//
async function getAwardInviteFriend() {
  await friendListInitForFarm();//查询好友列表
//  console.log(`查询好友列表数据：${JSON.stringify($.friendList)}\n`)
  if ($.friendList) {
    console.log(`\n今日已邀请好友${$.friendList.inviteFriendCount}个 / 每日邀请上限${$.friendList.inviteFriendMax}个`);
    console.log(`开始删除${$.friendList.friends && $.friendList.friends.length}个好友,可拿每天的邀请奖励`);
    if ($.friendList.friends && $.friendList.friends.length > 0) {
      for (let friend of $.friendList.friends) {
        console.log(`\n开始删除好友 [${friend.shareCode}]`);
        const deleteFriendForFarm = await request('deleteFriendForFarm', { "shareCode": `${friend.shareCode}`,"version":8,"channel":1 });
        if (deleteFriendForFarm && deleteFriendForFarm.code === '0') {
          console.log(`删除好友 [${friend.shareCode}] 成功\n`);
        }
      }
    }
    await receiveFriendInvite();//为他人助力,接受邀请成为别人的好友
    if ($.friendList.inviteFriendCount > 0) {
      if ($.friendList.inviteFriendCount > $.friendList.inviteFriendGotAwardCount) {
        console.log('开始领取邀请好友的奖励');
        await awardInviteFriendForFarm();
        console.log(`领取邀请好友的奖励结果：：${JSON.stringify($.awardInviteFriendRes)}`);
      }
    } else {
      console.log('今日未邀请过好友')
    }
  } else {
    console.log(`查询好友列表失败\n`);
  }
}
//给好友浇水
async function doFriendsWater() {
  await friendListInitForFarm();
  console.log('开始给好友浇水...');
  await taskInitForFarm();
  const { waterFriendCountKey, waterFriendMax } = $.farmTask.waterFriendTaskInit;
  console.log(`今日已给${waterFriendCountKey}个好友浇水`);
  if (waterFriendCountKey < waterFriendMax) {
    let needWaterFriends = [];
    if ($.friendList.friends && $.friendList.friends.length > 0) {
      $.friendList.friends.map((item, index) => {
        if (item.friendState === 1) {
          if (needWaterFriends.length < (waterFriendMax - waterFriendCountKey)) {
            needWaterFriends.push(item.shareCode);
          }
        }
      });
      //TODO ,发现bug,github action运行发现有些账号第一次没有给3个好友浇水
      console.log(`需要浇水的好友列表shareCodes:${JSON.stringify(needWaterFriends)}`);
      let waterFriendsCount = 0, cardInfoStr = '';
      for (let index = 0; index < needWaterFriends.length; index ++) {
        await waterFriendForFarm(needWaterFriends[index]);
        console.log(`为第${index+1}个好友浇水结果:${JSON.stringify($.waterFriendForFarmRes)}\n`)
        if ($.waterFriendForFarmRes.code === '0') {
          waterFriendsCount ++;
          if ($.waterFriendForFarmRes.cardInfo) {
            console.log('为好友浇水获得道具了');
            if ($.waterFriendForFarmRes.cardInfo.type === 'beanCard') {
              console.log(`获取道具卡:${$.waterFriendForFarmRes.cardInfo.rule}`);
              cardInfoStr += `水滴换豆卡,`;
            } else if ($.waterFriendForFarmRes.cardInfo.type === 'fastCard') {
              console.log(`获取道具卡:${$.waterFriendForFarmRes.cardInfo.rule}`);
              cardInfoStr += `快速浇水卡,`;
            } else if ($.waterFriendForFarmRes.cardInfo.type === 'doubleCard') {
              console.log(`获取道具卡:${$.waterFriendForFarmRes.cardInfo.rule}`);
              cardInfoStr += `水滴翻倍卡,`;
            } else if ($.waterFriendForFarmRes.cardInfo.type === 'signCard') {
              console.log(`获取道具卡:${$.waterFriendForFarmRes.cardInfo.rule}`);
              cardInfoStr += `加签卡,`;
            }
          }
        } else if ($.waterFriendForFarmRes.code === '11') {
          console.log('水滴不够,跳出浇水')
        }
      }
      // message += `【好友浇水】已给${waterFriendsCount}个好友浇水,消耗${waterFriendsCount * 10}g水\n`;
      console.log(`【好友浇水】已给${waterFriendsCount}个好友浇水,消耗${waterFriendsCount * 10}g水\n`);
      if (cardInfoStr && cardInfoStr.length > 0) {
        // message += `【好友浇水奖励】${cardInfoStr.substr(0, cardInfoStr.length - 1)}\n`;
        console.log(`【好友浇水奖励】${cardInfoStr.substr(0, cardInfoStr.length - 1)}\n`);
      }
    } else {
      console.log('您的好友列表暂无好友,快去邀请您的好友吧!')
    }
  } else {
    console.log(`今日已为好友浇水量已达${waterFriendMax}个`)
  }
}
//领取给3个好友浇水后的奖励水滴
async function getWaterFriendGotAward() {
  await taskInitForFarm();
  const { waterFriendCountKey, waterFriendMax, waterFriendSendWater, waterFriendGotAward } = $.farmTask.waterFriendTaskInit
  if (waterFriendCountKey >= waterFriendMax) {
    if (!waterFriendGotAward) {
      await waterFriendGotAwardForFarm();
      console.log(`领取给${waterFriendMax}个好友浇水后的奖励水滴::${JSON.stringify($.waterFriendGotAwardRes)}`)
      if ($.waterFriendGotAwardRes.code === '0') {
        // message += `【给${waterFriendMax}好友浇水】奖励${$.waterFriendGotAwardRes.addWater}g水滴\n`;
        console.log(`【给${waterFriendMax}好友浇水】奖励${$.waterFriendGotAwardRes.addWater}g水滴\n`);
      }
    } else {
      console.log(`给好友浇水的${waterFriendSendWater}g水滴奖励已领取\n`);
      // message += `【给${waterFriendMax}好友浇水】奖励${waterFriendSendWater}g水滴已领取\n`;
    }
  } else {
    console.log(`暂未给${waterFriendMax}个好友浇水\n`);
  }
}
//接收成为对方好友的邀请
async function receiveFriendInvite() {
  for (let code of newShareCodes) {
    if (code === $.farmInfo.farmUserPro.shareCode) {
      console.log('自己不能邀请自己成为好友噢\n')
      continue
    }
    await inviteFriend(code);
    // console.log(`接收邀请成为好友结果:${JSON.stringify($.inviteFriendRes.helpResult)}`)
    if ($.inviteFriendRes.helpResult.code === '0') {
      console.log(`接收邀请成为好友结果成功,您已成为${$.inviteFriendRes.helpResult.masterUserInfo.nickName}的好友`)
    } else if ($.inviteFriendRes.helpResult.code === '17') {
      console.log(`接收邀请成为好友结果失败,对方已是您的好友`)
    }
  }
  // console.log(`开始接受6fbd26cc27ac44d6a7fed34092453f77的邀请\n`)
  // await inviteFriend('6fbd26cc27ac44d6a7fed34092453f77');
  // console.log(`接收邀请成为好友结果:${JSON.stringify($.inviteFriendRes.helpResult)}`)
  // if ($.inviteFriendRes.helpResult.code === '0') {
  //   console.log(`您已成为${$.inviteFriendRes.helpResult.masterUserInfo.nickName}的好友`)
  // } else if ($.inviteFriendRes.helpResult.code === '17') {
  //   console.log(`对方已是您的好友`)
  // }
}
async function duck() {
  for (let i = 0; i < 10; i++) {
    //这里循环十次
    await getFullCollectionReward();
    if ($.duckRes.code === '0') {
      if (!$.duckRes.hasLimit) {
        console.log(`小鸭子游戏:${$.duckRes.title}`);
        // if ($.duckRes.type !== 3) {
        //   console.log(`${$.duckRes.title}`);
        //   if ($.duckRes.type === 1) {
        //     message += `【小鸭子】为你带回了水滴\n`;
        //   } else if ($.duckRes.type === 2) {
        //     message += `【小鸭子】为你带回快速浇水卡\n`
        //   }
        // }
      } else {
        console.log(`${$.duckRes.title}`)
        break;
      }
    } else if ($.duckRes.code === '10') {
      console.log(`小鸭子游戏达到上限`)
      break;
    }
  }
}
// ========================API调用接口========================
//鸭子，点我有惊喜
async function getFullCollectionReward() {
  return new Promise(resolve => {
    const body = {"type": 2, "version": 6, "channel": 2};
    $.post(taskUrl("getFullCollectionReward", body), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东农场: API查询请求失败 ‼️‼️');
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            $.duckRes = JSON.parse(data);
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

/**
 * 领取10次浇水奖励API
 */
async function totalWaterTaskForFarm() {
  const functionId = arguments.callee.name.toString();
  $.totalWaterReward = await request(functionId);
}
//领取首次浇水奖励API
async function firstWaterTaskForFarm() {
  const functionId = arguments.callee.name.toString();
  $.firstWaterReward = await request(functionId);
}
//领取给3个好友浇水后的奖励水滴API
async function waterFriendGotAwardForFarm() {
  const functionId = arguments.callee.name.toString();
  $.waterFriendGotAwardRes = await request(functionId, {"version": 4, "channel": 1});
}
// 查询背包道具卡API
async function myCardInfoForFarm() {
  const functionId = arguments.callee.name.toString();
  $.myCardInfoRes = await request(functionId, {"version": 5, "channel": 1});
}
//使用道具卡API
async function userMyCardForFarm(cardType) {
  const functionId = arguments.callee.name.toString();
  $.userMyCardRes = await request(functionId, {"cardType": cardType});
}
/**
 * 领取浇水过程中的阶段性奖励
 * @param type
 * @returns {Promise<void>}
 */
async function gotStageAwardForFarm(type) {
  $.gotStageAwardForFarmRes = await request(arguments.callee.name.toString(), {'type': type});
}
//浇水API
async function waterGoodForFarm() {
  await $.wait(1000);
  console.log('等待了1秒');

  const functionId = arguments.callee.name.toString();
  $.waterResult = await request(functionId);
}
// 初始化集卡抽奖活动数据API
async function initForTurntableFarm() {
  $.initForTurntableFarmRes = await request(arguments.callee.name.toString(), {version: 4, channel: 1});
}
async function lotteryForTurntableFarm() {
  await $.wait(2000);
  console.log('等待了2秒');
  $.lotteryRes = await request(arguments.callee.name.toString(), {type: 1, version: 4, channel: 1});
}

async function timingAwardForTurntableFarm() {
  $.timingAwardRes = await request(arguments.callee.name.toString(), {version: 4, channel: 1});
}

async function browserForTurntableFarm(type, adId) {
  if (type === 1) {
    console.log('浏览爆品会场');
  }
  if (type === 2) {
    console.log('天天抽奖浏览任务领取水滴');
  }
  const body = {"type": type,"adId": adId,"version":4,"channel":1};
  $.browserForTurntableFarmRes = await request(arguments.callee.name.toString(), body);
  // 浏览爆品会场8秒
}
//天天抽奖浏览任务领取水滴API
async function browserForTurntableFarm2(type) {
  const body = {"type":2,"adId": type,"version":4,"channel":1};
  $.browserForTurntableFarm2Res = await request('browserForTurntableFarm', body);
}
/**
 * 天天抽奖拿好礼-助力API(每人每天三次助力机会)
 */
async function lotteryMasterHelp() {
  $.lotteryMasterHelpRes = await request(`initForFarm`, {
    imageUrl: "",
    nickName: "",
    shareCode: arguments[0] + '-3',
    babelChannel: "3",
    version: 4,
    channel: 1
  });
}

//领取5人助力后的额外奖励API
async function masterGotFinishedTaskForFarm() {
  const functionId = arguments.callee.name.toString();
  $.masterGotFinished = await request(functionId);
}
//助力好友信息API
async function masterHelpTaskInitForFarm() {
  const functionId = arguments.callee.name.toString();
  $.masterHelpResult = await request(functionId);
}
//接受对方邀请,成为对方好友的API
async function inviteFriend() {
  $.inviteFriendRes = await request(`initForFarm`, {
    imageUrl: "",
    nickName: "",
    shareCode: arguments[0] + '-inviteFriend',
    version: 4,
    channel: 2
  });
}
// 助力好友API
async function masterHelp() {
  $.helpResult = await request(`initForFarm`, {
    imageUrl: "",
    nickName: "",
    shareCode: arguments[0],
    babelChannel: "3",
    version: 2,
    channel: 1
  });
}
/**
 * 水滴雨API
 */
async function waterRainForFarm() {
  const functionId = arguments.callee.name.toString();
  const body = {"type": 1, "hongBaoTimes": 100, "version": 3};
  $.waterRain = await request(functionId, body);
}
/**
 * 打卡领水API
 */
async function clockInInitForFarm() {
  const functionId = arguments.callee.name.toString();
  $.clockInInit = await request(functionId);
}

// 连续签到API
async function clockInForFarm() {
  const functionId = arguments.callee.name.toString();
  $.clockInForFarmRes = await request(functionId, {"type": 1});
}

//关注，领券等API
async function clockInFollowForFarm(id, type, step) {
  const functionId = arguments.callee.name.toString();
  let body = {
    id,
    type,
    step
  }
  if (type === 'theme') {
    if (step === '1') {
      $.themeStep1 = await request(functionId, body);
    } else if (step === '2') {
      $.themeStep2 = await request(functionId, body);
    }
  } else if (type === 'venderCoupon') {
    if (step === '1') {
      $.venderCouponStep1 = await request(functionId, body);
    } else if (step === '2') {
      $.venderCouponStep2 = await request(functionId, body);
    }
  }
}

// 领取连续签到7天的惊喜礼包API
async function gotClockInGift() {
  $.gotClockInGiftRes = await request('clockInForFarm', {"type": 2})
}

//定时领水API
async function gotThreeMealForFarm() {
  const functionId = arguments.callee.name.toString();
  $.threeMeal = await request(functionId);
}
/**
 * 浏览广告任务API
 * type为0时, 完成浏览任务
 * type为1时, 领取浏览任务奖励
 */
async function browseAdTaskForFarm(advertId, type) {
  const functionId = arguments.callee.name.toString();
  if (type === 0) {
    $.browseResult = await request(functionId, {advertId, type});
  } else if (type === 1) {
    $.browseRwardResult = await request(functionId, {advertId, type});
  }
}
// 被水滴砸中API
async function gotWaterGoalTaskForFarm() {
  $.goalResult = await request(arguments.callee.name.toString(), {type: 3});
}
//签到API
async function signForFarm() {
  const functionId = arguments.callee.name.toString();
  $.signResult = await request(functionId);
}
/**
 * 初始化农场, 可获取果树及用户信息API
 */
async function initForFarm() {
  return new Promise(resolve => {
    const option =  {
      url: `${JD_API_HOST}?functionId=initForFarm`,
      body: `body=${escape(JSON.stringify({"version":4}))}&appid=wh5&clientVersion=9.1.0`,
      headers: {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "cookie": cookie,
        "origin": "https://home.m.jd.com",
        "pragma": "no-cache",
        "referer": "https://home.m.jd.com/myJd/newhome.action",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      timeout: 10000,
    };
    $.post(option, (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东农场: API查询请求失败 ‼️‼️');
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            $.farmInfo = JSON.parse(data)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

// 初始化任务列表API
async function taskInitForFarm() {
  console.log('\n初始化任务列表')
  const functionId = arguments.callee.name.toString();
  $.farmTask = await request(functionId);
}
//获取好友列表API
async function friendListInitForFarm() {
  $.friendList = await request('friendListInitForFarm', {"version": 4, "channel": 1});
  // console.log('aa', aa);
}
// 领取邀请好友的奖励API
async function awardInviteFriendForFarm() {
  $.awardInviteFriendRes = await request('awardInviteFriendForFarm');
}
//为好友浇水API
async function waterFriendForFarm(shareCode) {
  const body = {"shareCode": shareCode, "version": 6, "channel": 1}
  $.waterFriendForFarmRes = await request('waterFriendForFarm', body);
}
async function showMsg() {

  if (1) {
    $.msg($.name, subTitle, message, option);

  } else {
    $.log(`\n${message}\n`);
  }
}

function timeFormat(time) {
  let date;
  if (time) {
    date = new Date(time)
  } else {
    date = new Date();
  }
  return date.getFullYear() + '-' + ((date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)) + '-' + (date.getDate() >= 10 ? date.getDate() : '0' + date.getDate());
}
function readShareCode() {
  return new Promise(async resolve => {
    $.get({url: `http://jd.turinglabs.net/api/v2/jd/farm/read/${randomCount}/`, timeout: 10000,}, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (data) {
            console.log(`随机取个${randomCount}码放到您固定的互助码后面(不影响已有固定互助)`)
            data = JSON.parse(data);
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
    await $.wait(10000);
    resolve()
  })
}
function shareCodesFormat() {
  return new Promise(async resolve => {
    // console.log(`第${$.index}个京东账号的助力码:::${jdFruitShareArr[$.index - 1]}`)
    newShareCodes = [];
    if (jdFruitShareArr[$.index - 1]) {
      newShareCodes = jdFruitShareArr[$.index - 1].split('@');
    } else {
      console.log(`由于您第${$.index}个京东账号未提供shareCode,将采纳本脚本自带的助力码\n`)
      const tempIndex = $.index > shareCodes.length ? (shareCodes.length - 1) : ($.index - 1);
      newShareCodes = shareCodes[tempIndex].split('@');
    }
    console.log(`第${$.index}个京东账号将要助力的好友${JSON.stringify(newShareCodes)}`)
    resolve();
  })
}


function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      "url": `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
      "headers": {
        "Accept": "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Cookie": cookie,
        "Referer": "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
        "User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1"
      },
      "timeout": 10000,
    }
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data['retcode'] === 13) {
              $.isLogin = false; //cookie过期
              return
            }
            $.nickName = data['base'].nickname;
          } else {
            console.log(`京东服务器返回空数据`)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
function request(function_id, body = {}, timeout = 1000){
  return new Promise(resolve => {
    setTimeout(() => {
      $.get(taskUrl(function_id, body), (err, resp, data) => {
        try {
          if (err) {
            console.log('\n东东农场: API查询请求失败 ‼️‼️')
            console.log(JSON.stringify(err));
            console.log(`function_id:${function_id}`)
            $.logErr(err);
          } else {
            if (safeGet(data)) {
              data = JSON.parse(data);
            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve(data);
        }
      })
    }, timeout)
  })
}
function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}
function taskUrl(function_id, body = {}) {
  return {
    url: `${JD_API_HOST}?functionId=${function_id}&appid=wh5&body=${escape(JSON.stringify(body))}`,
    headers: {
      Cookie: cookie,
      UserAgent:"Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1",
    },
    timeout: 10000,
  }
}

function getCookies() {
  if ($.isNode()) {
      cookieArr[0]= jdcookies;
     cookieArr[1]= jdcookies1;
     cookieArr[2]= jdcookies2;  
  } else {
//    cookieArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
    // cookieArr[1] =COOKIES1;
    // cookieArr[2] =COOKIES2;
  }
  if (!cookieArr) {
      $.msg(
          $.name,
          "【?提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取",
          "https://bean.m.jd.com/",
          { "open-url": "https://bean.m.jd.com/", }
      );
      return false;
  }
  console.log(`共${cookieArr.length}个京东账号\n`)
  return true;
}
// prettier-ignore
function Env(t, e) {
  class s {
      constructor(t) {
          this.env = t
      }
      send(t, e = "GET") {
          t = "string" == typeof t ? {
              url: t
          } : t;
          let s = this.get;
          return "POST" === e && (s = this.post), new Promise((e, i) => {
              s.call(this, t, (t, s, r) => {
                  t ? i(t) : e(s)
              })
          })
      }
      get(t) {
          return this.send.call(this.env, t)
      }
      post(t) {
          return this.send.call(this.env, t, "POST")
      }
  }
  return new class {
      constructor(t, e) {
          this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date)
              .getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
      }
      isNode() {
          return "undefined" != typeof module && !!module.exports
      }
      isQuanX() {
          return "undefined" != typeof $task
      }
      isSurge() {
          return "undefined" != typeof $httpClient && "undefined" == typeof $loon
      }
      isLoon() {
          return "undefined" != typeof $loon
      }
      toObj(t, e = null) {
          try {
              return JSON.parse(t)
          } catch {
              return e
          }
      }
      toStr(t, e = null) {
          try {
              return JSON.stringify(t)
          } catch {
              return e
          }
      }
      getjson(t, e) {
          let s = e;
          const i = this.getdata(t);
          if (i) try {
              s = JSON.parse(this.getdata(t))
          } catch { }
          return s
      }
      setjson(t, e) {
          try {
              return this.setdata(JSON.stringify(t), e)
          } catch {
              return !1
          }
      }
      getScript(t) {
          return new Promise(e => {
              this.get({
                  url: t
              }, (t, s, i) => e(i))
          })
      }
      runScript(t, e) {
          return new Promise(s => {
              let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
              i = i ? i.replace(/\n/g, "")
                  .trim() : i;
              let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
              r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
              const [o, h] = i.split("@"), a = {
                  url: `http://${h}/v1/scripting/evaluate`,
                  body: {
                      script_text: t,
                      mock_type: "cron",
                      timeout: r
                  },
                  headers: {
                      "X-Key": o,
                      Accept: "*/*"
                  }
              };
              this.post(a, (t, e, i) => s(i))
          })
              .catch(t => this.logErr(t))
      }
      loaddata() {
          if (!this.isNode()) return {}; {
              this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
              const t = this.path.resolve(this.dataFile),
                  e = this.path.resolve(process.cwd(), this.dataFile),
                  s = this.fs.existsSync(t),
                  i = !s && this.fs.existsSync(e);
              if (!s && !i) return {}; {
                  const i = s ? t : e;
                  try {
                      return JSON.parse(this.fs.readFileSync(i))
                  } catch (t) {
                      return {}
                  }
              }
          }
      }
      writedata() {
          if (this.isNode()) {
              this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
              const t = this.path.resolve(this.dataFile),
                  e = this.path.resolve(process.cwd(), this.dataFile),
                  s = this.fs.existsSync(t),
                  i = !s && this.fs.existsSync(e),
                  r = JSON.stringify(this.data);
              s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
          }
      }
      lodash_get(t, e, s) {
          const i = e.replace(/\[(\d+)\]/g, ".$1")
              .split(".");
          let r = t;
          for (const t of i)
              if (r = Object(r)[t], void 0 === r) return s;
          return r
      }
      lodash_set(t, e, s) {
          return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString()
              .match(/[^.[\]]+/g) || []), e.slice(0, -1)
                  .reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
      }
      getdata(t) {
          let e = this.getval(t);
          if (/^@/.test(t)) {
              const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
              if (r) try {
                  const t = JSON.parse(r);
                  e = t ? this.lodash_get(t, i, "") : e
              } catch (t) {
                  e = ""
              }
          }
          return e
      }
      setdata(t, e) {
          let s = !1;
          if (/^@/.test(e)) {
              const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
              try {
                  const e = JSON.parse(h);
                  this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
              } catch (e) {
                  const o = {};
                  this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
              }
          } else s = this.setval(t, e);
          return s
      }
      getval(t) {
          return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
      }
      setval(t, e) {
          return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
      }
      initGotEnv(t) {
          this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
      }
      get(t, e = (() => { })) {
          t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
              "X-Surge-Skip-Scripting": !1
          })), $httpClient.get(t, (t, s, i) => {
              !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
          })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
              hints: !1
          })), $task.fetch(t)
              .then(t => {
                  const {
                      statusCode: s,
                      statusCode: i,
                      headers: r,
                      body: o
                  } = t;
                  e(null, {
                      status: s,
                      statusCode: i,
                      headers: r,
                      body: o
                  }, o)
              }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t)
                  .on("redirect", (t, e) => {
                      try {
                          if (t.headers["set-cookie"]) {
                              const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse)
                                  .toString();
                              s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                          }
                      } catch (t) {
                          this.logErr(t)
                      }
                  })
                  .then(t => {
                      const {
                          statusCode: s,
                          statusCode: i,
                          headers: r,
                          body: o
                      } = t;
                      e(null, {
                          status: s,
                          statusCode: i,
                          headers: r,
                          body: o
                      }, o)
                  }, t => {
                      const {
                          message: s,
                          response: i
                      } = t;
                      e(s, i, i && i.body)
                  }))
      }
      post(t, e = (() => { })) {
          if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
              "X-Surge-Skip-Scripting": !1
          })), $httpClient.post(t, (t, s, i) => {
              !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
          });
          else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
              hints: !1
          })), $task.fetch(t)
              .then(t => {
                  const {
                      statusCode: s,
                      statusCode: i,
                      headers: r,
                      body: o
                  } = t;
                  e(null, {
                      status: s,
                      statusCode: i,
                      headers: r,
                      body: o
                  }, o)
              }, t => e(t));
          else if (this.isNode()) {
              this.initGotEnv(t);
              const {
                  url: s,
                  ...i
              } = t;
              this.got.post(s, i)
                  .then(t => {
                      const {
                          statusCode: s,
                          statusCode: i,
                          headers: r,
                          body: o
                      } = t;
                      e(null, {
                          status: s,
                          statusCode: i,
                          headers: r,
                          body: o
                      }, o)
                  }, t => {
                      const {
                          message: s,
                          response: i
                      } = t;
                      e(s, i, i && i.body)
                  })
          }
      }
      time(t) {
          let e = {
              "M+": (new Date)
                  .getMonth() + 1,
              "d+": (new Date)
                  .getDate(),
              "H+": (new Date)
                  .getHours(),
              "m+": (new Date)
                  .getMinutes(),
              "s+": (new Date)
                  .getSeconds(),
              "q+": Math.floor(((new Date)
                  .getMonth() + 3) / 3),
              S: (new Date)
                  .getMilliseconds()
          };
          /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date)
              .getFullYear() + "")
              .substr(4 - RegExp.$1.length)));
          for (let s in e) new RegExp("(" + s + ")")
              .test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s])
                  .substr(("" + e[s])
                      .length)));
          return t
      }
      msg(e = t, s = "", i = "", r) {
          const o = t => {
              if (!t) return t;
              if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                  "open-url": t
              } : this.isSurge() ? {
                  url: t
              } : void 0;
              if ("object" == typeof t) {
                  if (this.isLoon()) {
                      let e = t.openUrl || t.url || t["open-url"],
                          s = t.mediaUrl || t["media-url"];
                      return {
                          openUrl: e,
                          mediaUrl: s
                      }
                  }
                  if (this.isQuanX()) {
                      let e = t["open-url"] || t.url || t.openUrl,
                          s = t["media-url"] || t.mediaUrl;
                      return {
                          "open-url": e,
                          "media-url": s
                      }
                  }
                  if (this.isSurge()) {
                      let e = t.url || t.openUrl || t["open-url"];
                      return {
                          url: e
                      }
                  }
              }
          };
          if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
              let t = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
              t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
          }
      }
      log(...t) {
          t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
      }
      logErr(t, e) {
          const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
          s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
      }
      wait(t) {
          return new Promise(e => setTimeout(e, t))
      }
      done(t = {}) {
          const e = (new Date)
              .getTime(),
              s = (e - this.startTime) / 1e3;
          this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
      }
  }(t, e)
}

function MD5() {
  //创建并实例化MD5对象并让他可以调用自身方法
  function MD5(string) {
      this._this = this;
      return this;
  }
  this.MD5 = new MD5;
  MD5.prototype.createMD5String = function (string) {
      var x = Array();
      var k, AA, BB, CC, DD, a, b, c, d;
      var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
      var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
      var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
      var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
      string = uTF8Encode(string);
      x = convertToWordArray(string);
      a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
      for (k = 0; k < x.length; k += 16) {
          AA = a; BB = b; CC = c; DD = d;
          a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
          d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
          c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
          b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
          a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
          d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
          c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
          b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
          a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
          d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
          c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
          b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
          a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
          d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
          c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
          b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
          a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
          d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
          c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
          b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
          a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
          d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
          c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
          b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
          a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
          d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
          c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
          b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
          a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
          d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
          c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
          b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
          a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
          d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
          c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
          b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
          a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
          d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
          c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
          b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
          a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
          d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
          c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
          b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
          a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
          d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
          c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
          b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
          a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
          d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
          c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
          b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
          a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
          d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
          c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
          b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
          a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
          d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
          c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
          b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
          a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
          d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
          c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
          b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
          a = addUnsigned(a, AA);
          b = addUnsigned(b, BB);
          c = addUnsigned(c, CC);
          d = addUnsigned(d, DD);
      }
      var tempValue = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
      return tempValue.toLowerCase();
  }
  var rotateLeft = function (lValue, iShiftBits) {
      return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
  }
  var addUnsigned = function (lX, lY) {
      var lX4, lY4, lX8, lY8, lResult;
      lX8 = (lX & 0x80000000);
      lY8 = (lY & 0x80000000);
      lX4 = (lX & 0x40000000);
      lY4 = (lY & 0x40000000);
      lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
      if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
      if (lX4 | lY4) {
          if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
          else return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
      } else {
          return (lResult ^ lX8 ^ lY8);
      }
  }
  var F = function (x, y, z) {
      return (x & y) | ((~x) & z);
  }
  var G = function (x, y, z) {
      return (x & z) | (y & (~z));
  }
  var H = function (x, y, z) {
      return (x ^ y ^ z);
  }
  var I = function (x, y, z) {
      return (y ^ (x | (~z)));
  }
  var FF = function (a, b, c, d, x, s, ac) {
      a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
      return addUnsigned(rotateLeft(a, s), b);
  };
  var GG = function (a, b, c, d, x, s, ac) {
      a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
      return addUnsigned(rotateLeft(a, s), b);
  };
  var HH = function (a, b, c, d, x, s, ac) {
      a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
      return addUnsigned(rotateLeft(a, s), b);
  };
  var II = function (a, b, c, d, x, s, ac) {
      a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
      return addUnsigned(rotateLeft(a, s), b);
  };
  var convertToWordArray = function (string) {
      var lWordCount;
      var lMessageLength = string.length;
      var lNumberOfWordsTempOne = lMessageLength + 8;
      var lNumberOfWordsTempTwo = (lNumberOfWordsTempOne - (lNumberOfWordsTempOne % 64)) / 64;
      var lNumberOfWords = (lNumberOfWordsTempTwo + 1) * 16;
      var lWordArray = Array(lNumberOfWords - 1);
      var lBytePosition = 0;
      var lByteCount = 0;
      while (lByteCount < lMessageLength) {
          lWordCount = (lByteCount - (lByteCount % 4)) / 4;
          lBytePosition = (lByteCount % 4) * 8;
          lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
          lByteCount++;
      }
      lWordCount = (lByteCount - (lByteCount % 4)) / 4;
      lBytePosition = (lByteCount % 4) * 8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
      lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
      lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
      return lWordArray;
  };
  var wordToHex = function (lValue) {
      var WordToHexValue = "", WordToHexValueTemp = "", lByte, lCount;
      for (lCount = 0; lCount <= 3; lCount++) {
          lByte = (lValue >>> (lCount * 8)) & 255;
          WordToHexValueTemp = "0" + lByte.toString(16);
          WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2);
      }
      return WordToHexValue;
  };
  var uTF8Encode = function (string) {
      string = string.toString().replace(/\x0d\x0a/g, "\x0a");
      var output = "";
      for (var n = 0; n < string.length; n++) {
          var c = string.charCodeAt(n);
          if (c < 128) {
              output += String.fromCharCode(c);
          } else if ((c > 127) && (c < 2048)) {
              output += String.fromCharCode((c >> 6) | 192);
              output += String.fromCharCode((c & 63) | 128);
          } else {
              output += String.fromCharCode((c >> 12) | 224);
              output += String.fromCharCode(((c >> 6) & 63) | 128);
              output += String.fromCharCode((c & 63) | 128);
          }
      }
      return output;
  };
}
