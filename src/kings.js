var g;

function aa(a) {
    var b = 0;
    return function() {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        }
    }
}

function ba(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : {
        next: aa(a)
    }
}
var ca = "function" == typeof Object.create ? Object.create : function(a) {
        function b() {}
        b.prototype = a;
        return new b
    },
    da;
if ("function" == typeof Object.setPrototypeOf) da = Object.setPrototypeOf;
else {
    var ea;
    a: {
        var fa = {
                fn: !0
            },
            ha = {};
        try {
            ha.__proto__ = fa;
            ea = ha.fn;
            break a
        } catch (a) {}
        ea = !1
    }
    da = ea ? function(a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a
    } : null
}
var ia = da;

function k(a, b) {
    a.prototype = ca(b.prototype);
    a.prototype.constructor = a;
    if (ia) ia(a, b);
    else
        for (var c in b)
            if ("prototype" != c)
                if (Object.defineProperties) {
                    var d = Object.getOwnPropertyDescriptor(b, c);
                    d && Object.defineProperty(a, c, d)
                } else a[c] = b[c]
}
var ja = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
    ka = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    };

function na() {
    na = function() {};
    ja.Symbol || (ja.Symbol = oa)
}

function pa(a, b) {
    this.b = a;
    ka(this, "description", {
        configurable: !0,
        writable: !0,
        value: b
    })
}
pa.prototype.toString = function() {
    return this.b
};
var oa = function() {
    function a(c) {
        if (this instanceof a) throw new TypeError("Symbol is not a constructor");
        return new pa("jscomp_symbol_" + (c || "") + "_" + b++, c)
    }
    var b = 0;
    return a
}();

function qa() {
    na();
    var a = ja.Symbol.iterator;
    a || (a = ja.Symbol.iterator = ja.Symbol("Symbol.iterator"));
    "function" != typeof Array.prototype[a] && ka(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function() {
            return ra(aa(this))
        }
    });
    qa = function() {}
}

function ra(a) {
    qa();
    a = {
        next: a
    };
    a[ja.Symbol.iterator] = function() {
        return this
    };
    return a
}

function sa(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
}

function ta(a, b) {
    if (b) {
        var c = ja;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            e in c || (c[e] = {});
            c = c[e]
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && ka(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}
ta("WeakMap", function(a) {
    function b(p) {
        this.b = (n += Math.random() + 1).toString();
        if (p) {
            p = ba(p);
            for (var q; !(q = p.next()).done;) q = q.value, this.set(q[0], q[1])
        }
    }

    function c() {}

    function d(p) {
        var q = typeof p;
        return "object" === q && null !== p || "function" === q
    }

    function e(p) {
        if (!sa(p, h)) {
            var q = new c;
            ka(p, h, {
                value: q
            })
        }
    }

    function f(p) {
        var q = Object[p];
        q && (Object[p] = function(u) {
            if (u instanceof c) return u;
            e(u);
            return q(u)
        })
    }
    if (function() {
            if (!a || !Object.seal) return !1;
            try {
                var p = Object.seal({}),
                    q = Object.seal({}),
                    u = new a([
                        [p, 2],
                        [q, 3]
                    ]);
                if (2 != u.get(p) || 3 != u.get(q)) return !1;
                u.delete(p);
                u.set(q, 4);
                return !u.has(p) && 4 == u.get(q)
            } catch (w) {
                return !1
            }
        }()) return a;
    var h = "$jscomp_hidden_" + Math.random();
    f("freeze");
    f("preventExtensions");
    f("seal");
    var n = 0;
    b.prototype.set = function(p, q) {
        if (!d(p)) throw Error("Invalid WeakMap key");
        e(p);
        if (!sa(p, h)) throw Error("WeakMap key fail: " + p);
        p[h][this.b] = q;
        return this
    };
    b.prototype.get = function(p) {
        return d(p) && sa(p, h) ? p[h][this.b] : void 0
    };
    b.prototype.has = function(p) {
        return d(p) && sa(p, h) && sa(p[h],
            this.b)
    };
    b.prototype.delete = function(p) {
        return d(p) && sa(p, h) && sa(p[h], this.b) ? delete p[h][this.b] : !1
    };
    return b
});
ta("Map", function(a) {
    function b() {
        var n = {};
        return n.Hd = n.next = n.head = n
    }

    function c(n, p) {
        var q = n.b;
        return ra(function() {
            if (q) {
                for (; q.head != n.b;) q = q.Hd;
                for (; q.next != q.head;) return q = q.next, {
                    done: !1,
                    value: p(q)
                };
                q = null
            }
            return {
                done: !0,
                value: void 0
            }
        })
    }

    function d(n, p) {
        var q = p && typeof p;
        "object" == q || "function" == q ? f.has(p) ? q = f.get(p) : (q = "" + ++h, f.set(p, q)) : q = "p_" + p;
        var u = n.c[q];
        if (u && sa(n.c, q))
            for (n = 0; n < u.length; n++) {
                var w = u[n];
                if (p !== p && w.key !== w.key || p === w.key) return {
                    id: q,
                    list: u,
                    index: n,
                    Qb: w
                }
            }
        return {
            id: q,
            list: u,
            index: -1,
            Qb: void 0
        }
    }

    function e(n) {
        this.c = {};
        this.b = b();
        this.size = 0;
        if (n) {
            n = ba(n);
            for (var p; !(p = n.next()).done;) p = p.value, this.set(p[0], p[1])
        }
    }
    if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var n = Object.seal({
                        x: 4
                    }),
                    p = new a(ba([
                        [n, "s"]
                    ]));
                if ("s" != p.get(n) || 1 != p.size || p.get({
                        x: 4
                    }) || p.set({
                        x: 4
                    }, "t") != p || 2 != p.size) return !1;
                var q = p.entries(),
                    u = q.next();
                if (u.done || u.value[0] != n || "s" != u.value[1]) return !1;
                u = q.next();
                return u.done || 4 != u.value[0].x ||
                    "t" != u.value[1] || !q.next().done ? !1 : !0
            } catch (w) {
                return !1
            }
        }()) return a;
    qa();
    var f = new WeakMap;
    e.prototype.set = function(n, p) {
        n = 0 === n ? 0 : n;
        var q = d(this, n);
        q.list || (q.list = this.c[q.id] = []);
        q.Qb ? q.Qb.value = p : (q.Qb = {
            next: this.b,
            Hd: this.b.Hd,
            head: this.b,
            key: n,
            value: p
        }, q.list.push(q.Qb), this.b.Hd.next = q.Qb, this.b.Hd = q.Qb, this.size++);
        return this
    };
    e.prototype.delete = function(n) {
        n = d(this, n);
        return n.Qb && n.list ? (n.list.splice(n.index, 1), n.list.length || delete this.c[n.id], n.Qb.Hd.next = n.Qb.next, n.Qb.next.Hd = n.Qb.Hd,
            n.Qb.head = null, this.size--, !0) : !1
    };
    e.prototype.clear = function() {
        this.c = {};
        this.b = this.b.Hd = b();
        this.size = 0
    };
    e.prototype.has = function(n) {
        return !!d(this, n).Qb
    };
    e.prototype.get = function(n) {
        return (n = d(this, n).Qb) && n.value
    };
    e.prototype.entries = function() {
        return c(this, function(n) {
            return [n.key, n.value]
        })
    };
    e.prototype.keys = function() {
        return c(this, function(n) {
            return n.key
        })
    };
    e.prototype.values = function() {
        return c(this, function(n) {
            return n.value
        })
    };
    e.prototype.forEach = function(n, p) {
        for (var q = this.entries(),
                u; !(u = q.next()).done;) u = u.value, n.call(p, u[1], u[0], this)
    };
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var h = 0;
    return e
});
ta("Set", function(a) {
    function b(c) {
        this.b = new Map;
        if (c) {
            c = ba(c);
            for (var d; !(d = c.next()).done;) this.add(d.value)
        }
        this.size = this.b.size
    }
    if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var c = Object.seal({
                        x: 4
                    }),
                    d = new a(ba([c]));
                if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                        x: 4
                    }) != d || 2 != d.size) return !1;
                var e = d.entries(),
                    f = e.next();
                if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                f = e.next();
                return f.done || f.value[0] == c || 4 != f.value[0].x ||
                    f.value[1] != f.value[0] ? !1 : e.next().done
            } catch (h) {
                return !1
            }
        }()) return a;
    qa();
    b.prototype.add = function(c) {
        c = 0 === c ? 0 : c;
        this.b.set(c, c);
        this.size = this.b.size;
        return this
    };
    b.prototype.delete = function(c) {
        c = this.b.delete(c);
        this.size = this.b.size;
        return c
    };
    b.prototype.clear = function() {
        this.b.clear();
        this.size = 0
    };
    b.prototype.has = function(c) {
        return this.b.has(c)
    };
    b.prototype.entries = function() {
        return this.b.entries()
    };
    b.prototype.values = function() {
        return this.b.values()
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function(c, d) {
        var e = this;
        this.b.forEach(function(f) {
            return c.call(d, f, f, e)
        })
    };
    return b
});
ta("Array.prototype.fill", function(a) {
    return a ? a : function(b, c, d) {
        var e = this.length || 0;
        0 > c && (c = Math.max(0, e + c));
        if (null == d || d > e) d = e;
        d = Number(d);
        0 > d && (d = Math.max(0, e + d));
        for (c = Number(c || 0); c < d; c++) this[c] = b;
        return this
    }
});

function ua() {
    this.w = [];
    this.pc = [];
    this.qc = [];
    this.jg = []
}

function va() {
    this.c = 0
}

function wa(a) {
    var b = xa,
        c = b.c = 0;
    window.LangsMap.forEach(function(d) {
        d[0] == a && (b.c = c);
        c++
    })
}
va.prototype.yc = function(a) {
    this.i = new Map;
    this.b = a;
    var b = 0;
    a.forEach(function(c) {
        xa.i.set(c[0], b++)
    })
};
var xa = new va;

function l(a) {
    a = xa.i.get(a);
    if (void 0 == a) return "???";
    if (xa.c >= xa.b[a].length) return xa.b[a][1];
    var b = xa.b[a][xa.c + 1];
    return m(b) ? xa.b[a][1] : b
}

function r(a) {
    return l(a).toUpperCase()
}

function t(a, b, c) {
    a.bi = b;
    c.push(a);
    return a
}

function ya(a) {
    a.w.forEach(function(b) {
        return b.textContent = l(b.bi)
    });
    a.pc.forEach(function(b) {
        return b.textContent = r(b.bi)
    });
    a.jg.forEach(function(b) {
        return b.placeholder = l(b.bi)
    });
    a.qc.forEach(function(b) {
        return b.value = r(b.bi)
    })
};
var za = 0,
    Aa = za++,
    Ba = za++,
    Ca = za++,
    Ea = za++,
    Fa = za++,
    Ga = za++,
    Ha = za++,
    Ia = za++,
    Ja = za++,
    Ka = za++,
    La = za++,
    Ma = za++,
    Na = za++,
    Oa = za++,
    Pa = za++,
    Qa = za++,
    Ra = za++,
    Sa = za++,
    Ta = za++,
    Ua = za++,
    Va = za++,
    Wa = za++,
    Xa = za++,
    Ya = za++,
    Za = za++,
    $a = za++,
    bb = za++,
    cb = za++,
    db = za++;
za++;
var eb = za++;

function v(a, b) {
    this.y = this.x = 0;
    void 0 === a ? this.set(0, 0) : this.set(a, b)
}
v.prototype.set = function(a, b) {
    this.x = a;
    this.y = b
};
v.prototype.offset = function(a, b) {
    this.x += a;
    this.y += b
};
v.prototype.duplicate = function() {
    return new v(this.x, this.y)
};
v.prototype.We = function(a) {
    return this.x == a.x && this.y == a.y
};

function fb(a, b) {
    this.ba = this.M = 0;
    void 0 === a ? this.set(0, 0) : this.set(a, b)
}
fb.prototype.set = function(a, b) {
    this.M = a;
    this.ba = b
};
fb.prototype.duplicate = function() {
    return new fb(this.M, this.ba)
};

function gb(a, b, c, d) {
    this.left = void 0 === a ? 0 : a;
    this.top = void 0 === b ? 0 : b;
    this.right = void 0 === c ? 0 : c;
    this.bottom = void 0 === d ? 0 : d
}
g = gb.prototype;
g.set = function(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.right = c;
    this.bottom = d
};
g.duplicate = function() {
    return new gb(this.left, this.top, this.right, this.bottom)
};

function hb(a, b, c) {
    a.left = b.x;
    a.top = b.y;
    a.right = a.left + c.M;
    a.bottom = a.top + c.ba
}
g.offset = function(a, b) {
    this.left += a;
    this.right += a;
    this.top += b;
    this.bottom += b
};

function ib(a) {
    return a.top + a.height() / 2
}

function jb(a) {
    return a.left + a.width() / 2
}
g.width = function() {
    return this.right - this.left
};
g.height = function() {
    return this.bottom - this.top
};

function kb(a, b, c) {
    a.left -= b;
    a.right += b;
    a.top -= c;
    a.bottom += c
}

function lb(a) {
    kb(a, -.05 * a.width(), -.05 * a.height())
}

function mb(a) {
    return new v(a.left, a.top)
}

function nb(a) {
    return new v(a.left, a.bottom)
}

function ob(a) {
    return new v(a.right, a.bottom)
}

function pb(a) {
    return new v(jb(a), ib(a))
}
g.size = function() {
    return new fb(this.width(), this.height())
};

function qb(a) {
    this.data = a;
    this.next = null
}

function rb() {
    this.c = this.b = null;
    this.size = 0
}
rb.prototype.enqueue = function(a) {
    a = new qb(a);
    this.b ? this.c.next = a : this.b = a;
    this.c = a;
    this.size += 1;
    return a
};
var sb = 1,
    tb = 1;

function y(a, b) {
    b || (1 != sb && (a *= sb), 1 != tb && (a = Math.round(a / tb)));
    var c = 0 > a,
        d = a = Math.abs(a),
        e = 0;
    b || (e = a % 100, d = (a - e) / 100);
    a = "";
    c && (a += "-");
    a = 0 == d ? a + "0" : a + d.toLocaleString();
    9 < e ? a += "." + e : 0 < e && (a += ".0" + e);
    return a
}

function ub(a, b, c) {
    return a <= b ? b : a >= c ? c : a
}

function vb(a, b) {
    return b == (a & b)
}

function wb(a, b, c) {
    void 0 == c && (c = !0);
    return c ? a | b : a & ~b
}
var z = !1,
    xb = !1,
    yb = "",
    zb = 0;

function m(a) {
    return !a || 0 === a.length
}

function Ab(a) {
    for (; a.lastChild;) a.removeChild(a.lastChild)
}

function Bb(a, b, c, d, e) {
    b = document.createElement(b);
    m(c) || (b.id = c);
    m(d) || (b.className = d);
    m(e) || (b.textContent = e);
    a && a.appendChild(b);
    return b
}

function Cb(a, b) {
    a.style.visibility = b ? "visible" : "hidden"
}

function A(a, b) {
    Db(a, b.left, b.top);
    Eb(a, b.width(), b.height())
}

function B(a, b) {
    Db(a, b.x, b.y)
}

function Db(a, b, c) {
    a.style.left = b + "px";
    a.style.top = c + "px"
}

function Eb(a, b, c) {
    a.style.width = b + "px";
    a.style.height = c + "px"
}

function Fb(a) {
    var b = Math.floor(a / 3600);
    a -= 3600 * b;
    var c = Math.floor(a / 60);
    a -= 60 * c;
    var d = "";
    10 > b && (d += "0");
    d = d + b + ":";
    10 > c && (d += "0");
    d = d + c + ":";
    10 > a && (d += "0");
    return d += a
}

function Gb(a, b) {
    var c = a.replace(/[^\d\.]/g, "");
    a = parseInt(c);
    isNaN(a) ? a = 0 : b || (a *= 100);
    b = c.indexOf("."); - 1 != b && (b = c.substr(b + 1, 2), 0 < b.length && (c = parseInt(b), a = 10 <= c ? a + c : 1 < b.length ? a + c : a + 10 * c));
    return a
}
var Ib = null,
    Jb;

function Kb() {
    Jb.style.display = "none";
    Ib && (Ib.style.display = "none", Ib = null)
}

function Lb(a) {
    var b = a.currentTarget.Mj;
    b.Rp = a.currentTarget;
    a = a.currentTarget.getBoundingClientRect();
    Jb.style.display = "block";
    b.style.display = "flex";
    Ib = b;
    var c = b.getBoundingClientRect();
    b.style.right = "";
    b.style.left = "";
    b.style.top = "";
    a.right + 100 > window.innerWidth ? b.style.right = window.innerWidth - a.right + "px" : b.style.left = Math.max(0, a.left - 10) + "px";
    b.style.top = a.bottom + c.height > window.innerHeight ? Math.max(0, a.top - c.height) + "px" : a.bottom + "px"
}

function Mb(a) {
    var b = C(a, "style_menu_bars", "./images/menu.png");
    a.appendChild(b);
    b.addEventListener("click", Lb);
    return b
}
var Nb = 5;

function Ob(a, b, c) {
    a.nb = Bb(document.body, "div", "", "fullscreen_mask");
    a.nb.style.zIndex = 1E3 * Nb;
    a.style.zIndex = 1E3 * Nb + 1;
    a.nb.style.display = "block";
    b ? a.style.display = b : a.style.display = "flex";
    Nb++;
    c && (z ? a.nb.addEventListener("touchstart", c.bind(a)) : a.nb.addEventListener("click", c.bind(a)));
    Pb(a)
}

function Qb(a) {
    this.style.display = "none";
    this.nb.remove();
    Nb--;
    a && a.preventDefault()
}

function Rb(a, b) {
    for (var c = 0; c < b.length; c++) null !== b[c] && (a.children[c].textContent = b[c])
}

function Sb(a, b) {
    return Tb(a, "password", b)
}

function Ub(a, b, c) {
    a = Bb(a, "select", void 0, void 0, void 0);
    a.className = c;
    if (b)
        for (c = 0; c < b.length; c += 2) Vb(a, b[c + 1], b[c], void 0);
    return a
}

function Wb(a, b, c, d, e) {
    a = Bb(a, "label", void 0, void 0, void 0);
    var f = Tb(a, "checkbox");
    f.style.transform = "scale(1.5)";
    f.style.verticalAlign = "middle";
    a.style.whiteSpace = "nowrap";
    c && f.addEventListener("click", c);
    e && (a.Cf = e);
    c = document.createTextNode("\u00a0\u00a0");
    a.appendChild(c);
    d ? c = t(document.createTextNode(""), b, d) : c = document.createTextNode(b);
    f.hb = c;
    a.appendChild(c);
    return f
}

function Xb(a, b) {
    a.checked = b;
    Yb(a)
}

function Yb(a) {
    a.Xd.firstChild.style.visibility = a.checked ? "visible" : "hidden"
}

function Zb(a) {
    a.ej.forEach(function(b) {
        return Xb(b, !1)
    });
    Xb(a, !0)
}

function $b(a, b, c) {
    var d = D(a, "style_cb_outer");
    c && d.classList.add(c);
    d.Xd = D(d, "style_cb_box");
    D(d.Xd, "style_cb_button");
    d.hb = D(d, "style_cb_text");
    d.hb.textContent = b;
    d.addEventListener("click", function() {
        d.checked = !d.checked;
        Yb(d)
    });
    Xb(d, !1);
    return d
}

function ac(a, b) {
    a = D(a, "style_status_bar");
    b ? a.style.justifyContent = "space-around" : (D(a, "style_flex_row"), D(a, "style_flex_row"), a.style.justifyContent = "space-between");
    return a
}

function bc(a, b) {
    a = E(a, "style_status_bar_pane");
    b || (a.style.marginLeft = "20px", a.style.marginRight = "30px");
    return a
}

function E(a, b, c) {
    a = Bb(a, "span", null, b, c);
    a.Nf = b;
    return a
}

function cc(a) {
    a = bc(a, void 0);
    a.classList.add("style_online_indicator");
    return a
}

function dc() {
    var a = ec,
        b = F,
        c = D(document.body, "style_landing_page noselect");
    c.wl = C(c, "style_landing_logo", "./site/logo.png");
    c.wl.alt = "LOGIN";
    var d = D(c, "noselect style_landing_controls");
    d = D(d, "style_flex_column");
    c.Ge = Tb(d, "text", "style_landing_control");
    c.Ge.autocomplete = "on";
    c.Ge.autofocus = !0;
    b ? t(c.Ge, "_tUserId", b.jg) : c.Ge.placeholder = "User Id";
    c.$d = Sb(d, "style_landing_control");
    b ? t(c.$d, "_tPassword", b.jg) : c.$d.placeholder = "Password";
    c.Ih = b ? Wb(d, "_tRememberMe", null, b.w) : Wb(d, "Remember Me");
    c.Ih.parentElement.style.textAlign =
        "left";
    c.Ih.parentElement.style.marginBottom = "1em";
    c.rj = Tb(d, "text", "style_landing_control");
    b ? t(c.rj, "_tGAuthCode", b.jg) : c.rj.placeholder = "Auth Code";
    d = E(c, "style_login_button", "Log In");
    d.addEventListener("click", a);
    c.Fo = d;
    b && t(d, "_tLogIn", b.w);
    c.wl.addEventListener("load", function() {
        return Pb(c)
    });
    Pb(c);
    c.addEventListener("keypress", function(e) {
        13 == e.which && a()
    }, !1);
    return c
}
var fc = 0,
    gc = null,
    hc = null;

function H(a) {
    gc.insertRule(a, fc);
    fc++;
    return fc - 1
}

function D(a, b, c, d) {
    var e = document.createElement("div");
    a && a.appendChild(e);
    b && (e.className = b);
    c && (e.textContent = c);
    m(d) || (e.id = d);
    return e
}

function ic(a) {
    var b = document.createElement("div");
    a && a.appendChild(b);
    return b
}

function Tb(a, b, c) {
    var d = document.createElement("input");
    d.type = b;
    a && a.appendChild(d);
    c && (d.className = c);
    return d
}

function C(a, b, c) {
    var d = document.createElement("img");
    a && a.appendChild(d);
    c && (d.src = c);
    b && (d.className = b);
    return d
}

function jc(a, b) {
    a.textContent = y(b);
    a.style.color = 0 > b ? "pink" : 0 < b ? "lightgreen" : ""
}

function kc(a) {
    return 10 <= a ? "" + a : "0" + a
}

function lc(a) {
    return a[5] + 100 * a[4] + 1E4 * a[3] + 1E6 * a[1] + 1E8 * (a[0] - 2E3)
}

function mc(a) {
    return a.toLocaleString("default", {
        month: "short"
    }) + " " + a.getDate() + ", " + kc(a.getHours()) + ":" + kc(a.getMinutes())
}

function nc(a) {
    return new Date(Date.UTC(a[0], a[1] - 1, a[3], a[4], a[5], a[6], 0))
}

function oc(a, b, c, d) {
    var e = ic(a);
    e.style.padding = "10px 0px";
    e.style.flex = "0 0 auto";
    a.Sp = e;
    e = D(a, "style_button_bar");
    for (var f = 0; f < b.length; f += 2) {
        if (d) {
            var h = E(e, c);
            t(h, b[f], d)
        } else h = E(e, c, b[f]);
        null != b[f + 1] && h.addEventListener("click", b[f + 1].bind(a));
        h.style.margin = "0px 10px"
    }
    return e
}

function Vb(a, b, c, d) {
    var e = document.createElement("option");
    a.appendChild(e);
    e.textContent = b;
    e.value = c;
    d && t(e, b, d);
    return e
}

function pc(a) {
    32 > a.which || /^[0-9]*\.?[0-9]*$/.test(a.currentTarget.value + String.fromCharCode(a.which)) || a.preventDefault()
}

function qc(a, b) {
    a = Math.ceil(a);
    b = Math.floor(b);
    return Math.floor(Math.random() * (b - a)) + a
}

function rc(a) {
    return window.localStorage.getItem(a)
}

function K(a, b) {
    window.localStorage.setItem(a, b)
}

function sc(a) {
    window.localStorage.removeItem(a, void 0)
}

function tc(a, b) {
    var c = 0;
    b.forEach(function(d) {
        d && (a.children[c].style.textAlign = d);
        c++
    })
}

function uc(a, b) {
    var c = 0;
    b.forEach(function(d) {
        d && (a.children[c].style.width = d);
        c++
    })
}

function vc(a, b, c) {
    a = a == b ? 0 : a > b ? -1 : 1;
    c || (a = -a);
    return a
}
var Bc = new Intl.Collator("en-US", {
    sensitivity: "base"
});

function Cc(a, b, c) {
    a = Bc.compare(a, b);
    c || (a = -a);
    return a
}

function Pb(a) {
    a.style.top = (window.innerHeight - a.clientHeight) / 2 + "px";
    a.style.left = (window.innerWidth - a.clientWidth) / 2 + "px"
}

function Dc(a, b) {
    b.parentNode.insertBefore(a, b.nextSibling)
}

function Ec(a, b) {
    a = Bb(a, "label", "", "", "");
    var c = Tb(a, "checkbox");
    c.style.transform = "scale(1.5)";
    c.style.verticalAlign = "middle";
    a.style.whiteSpace = "nowrap";
    a.className = "style_tag_cb";
    b = document.createTextNode("\u00a0\u00a0" + b);
    a.appendChild(b);
    c.hb = b;
    return c
};

function Fc(a) {
    this.B = this.s = this.K = this.G = this.P = this.b = 0;
    a.addEventListener("pointerdown", this.U.bind(this));
    a.addEventListener("pointerup", this.L.bind(this));
    a.addEventListener("pointermove", this.N.bind(this));
    this.i = a.parentElement;
    this.c = a;
    this.c.style.cursor = "grab"
}
Fc.prototype.U = function(a) {
    var b = this.i.getBoundingClientRect();
    this.c.style.cursor = "grabbing";
    this.G = b.left;
    this.K = b.top;
    this.b = a.screenX;
    this.P = a.screenY;
    this.s = document.documentElement.clientWidth - b.width;
    this.B = document.documentElement.clientHeight - b.height;
    a.currentTarget.setPointerCapture(a.pointerId)
};
Fc.prototype.L = function(a) {
    a.currentTarget.releasePointerCapture(a.pointerId);
    this.b = 0;
    this.c.style.cursor = "grab"
};
Fc.prototype.N = function(a) {
    if (0 != this.b) {
        var b = this.G + (a.screenX - this.b);
        a = this.K + (a.screenY - this.P);
        b = Math.max(0, b);
        a = Math.max(0, a);
        b = Math.min(this.s, b);
        a = Math.min(this.B, a);
        this.i.style.left = b + "px";
        this.i.style.top = a + "px"
    }
};

function Gc(a, b, c) {
    H(".style_resizer\n\t\t\t{\n\t\t\t\tdisplay: block;\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 100%;\n\t\t\t\ttop: 100%;\n\t\t\t\ttransform: translate(-100%, -100%);\n\t\t\t\twidth: 15px;\n\t\t\t\theight: 15px;\n\t\t\t\tcursor: nwse-resize;\n\t\t\t}");
    var d = C(a, "style_resizer", "./images/resizer.png");
    d.addEventListener("pointerdown", this.L.bind(this));
    d.addEventListener("pointerup", this.K.bind(this));
    d.addEventListener("pointermove", this.P.bind(this));
    this.c = this.i = this.B = this.G =
        this.s = this.b = 0;
    this.U = b;
    this.N = c;
    a.style.width = Math.min(document.documentElement.clientWidth, b) + "px";
    a.style.height = Math.min(document.documentElement.clientHeight, c) + "px"
}
Gc.prototype.L = function(a) {
    var b = a.currentTarget.parentElement.getBoundingClientRect();
    this.G = b.width;
    this.B = b.height;
    this.b = a.screenX;
    this.s = a.screenY;
    this.i = document.documentElement.clientWidth - b.left;
    this.c = document.documentElement.clientHeight - b.top;
    a.currentTarget.setPointerCapture(a.pointerId)
};
Gc.prototype.K = function(a) {
    a.currentTarget.releasePointerCapture(a.pointerId);
    this.b = 0
};
Gc.prototype.P = function(a) {
    var b = a.currentTarget.parentElement;
    if (0 != this.b) {
        var c = a.screenX - this.b;
        a = a.screenY - this.s;
        c += this.G;
        a += this.B;
        c = Math.min(c, this.i);
        a = Math.min(a, this.c);
        c = Math.max(c, this.U);
        a = Math.max(a, this.N);
        b.style.width = c + "px";
        b.style.height = a + "px"
    }
};
var L = 0,
    Hc = L++;
L++;
L++;
var Ic = L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
var Jc = L++;
L = 0;
var Kc = L++,
    Lc = L++,
    Mc = L++,
    Nc = L++,
    Oc = L++,
    Pc = L++,
    Qc = L++,
    Rc = L++,
    Sc = L++;
L = 0;
L++;
var Tc = L++,
    Uc = L++;
L = 0;
L++;
L++;
L++;
L++;
L = 0;
var Vc = L++,
    Wc = L++,
    Xc = L++,
    Yc = L++,
    $c = L++,
    ad = L++,
    bd = L++,
    cd = L++,
    dd = L++,
    ed = L++,
    fd = L++,
    gd = L++,
    hd = L++,
    id = L++,
    jd = L++,
    kd = L++,
    ld = L++,
    md = L++;
L++;
var nd = L++,
    od = L++,
    pd = L++,
    qd = L++,
    rd = L++;
L = 0;
var sd = L++,
    td = L++,
    ud = L++,
    vd = L++,
    wd = L++,
    xd = L++,
    yd = L++;
L++;
L++;
var zd = L++;
L++;
L++;

function Ad(a) {
    switch (a) {
        case ud:
        case wd:
        case vd:
        case xd:
            return !0;
        default:
            return !1
    }
}
var Bd = "Announced;Registering;Seating;Late Registration;Running;Completed;Cancelled;Archived;Closed;Suspended;Pending Start;Error".split(";");
L = 0;
var Cd = L++;
L++;
L++;
L++;
L++;
L++;
L = 0;
L++;
L++;
L++;
L++;
L = 0;
L++;
L++;
L++;
L++;
L++;
L++;
L = 0;
L++;
L++;
L++;
L = 0;
var Dd = L++,
    Ed = L++,
    Fd = L++,
    Id = L++;
L++;
L++;
var Jd = L++,
    Kd = L++;
L++;
L++;
L++;
var Ld = L++,
    Md = L++,
    Nd = L++,
    Od = L++,
    Pd = L++;
L++;
L = 0;
var Qd = L++,
    Rd = L++,
    Sd = L++,
    Td = L++,
    Ud = L++;
L++;
L = 0;
var Vd = L++,
    Wd = L++,
    Xd = L++,
    Yd = L++,
    Zd = L++,
    $d = L++,
    ae = L++,
    be = L++,
    ce = L++,
    de = L++,
    ee = L++,
    fe = L++,
    ge = L++,
    he = L++,
    ie = L++,
    je = L++,
    ke = L++,
    le = L++,
    me = L++,
    ne = L++,
    oe = L++,
    pe = L++,
    qe = L++,
    ve = L++,
    we = L++,
    xe = L++,
    ye = L++,
    ze = L++,
    Ae = L++,
    Be = L++,
    Ce = L++,
    De = L++,
    Ee = L++,
    Fe = L++,
    Ge = L++,
    He = L++,
    Ie = L++,
    Je = L++,
    Ke = L++,
    Le = L++,
    Me = L++,
    Ne = L++,
    Oe = L++,
    Pe = L++,
    Qe = L++,
    Re = L++,
    Se = L++,
    Te = L++,
    Ue = {};
L = 0;
L++;
L++;
L++;
L = 1;
L++;
var Ve = L++;
L++;
L = 1;
L++;
L++;
L++;
L++;
L++;
var We = ["", "Regular", "Turbo", "Hyper", "Lightning"];
L = 1;
var Xe = L++,
    Ye = L++,
    Ze = L++,
    $e = L++,
    af = L++,
    bf = L++,
    cf = L++;
L = 1;
var df = L++,
    ff = L++;
L++;
var lf = L++;
L++;
L = 0;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L = 1;
L++;
L++;
L++;
L++;
L++;
var mf = L++,
    nf = L++;
L++;
var of = L++;
L++;
L++;
L++;
L++;
var pf = L++;
L++;
var qf = L++,
    rf = L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
var sf = L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
var tf = L++,
    uf = L++;
L++;
L++;
L++;
var vf = L++,
    wf = L++;
L++;
L++;
L++;
var xf = L++;
L++;
L++;
var yf = L++,
    zf = L++;
L++;
L++;
var Af = L++;
L++;
var Bf = L++,
    Cf = L++,
    Df = L++,
    Ef = L++,
    Ff = L++,
    Gf = L++,
    Hf = L++;
L = 0;
L++;
var If = L++;
L++;
var Jf = L++,
    Kf = L++,
    Lf = L++,
    Mf = L++,
    Nf = L++,
    Of = L++,
    Pf = L++,
    Qf = L++,
    Rf = L++,
    Sf = L++,
    Tf = L++,
    Uf = L++;
L++;
var Vf = L++,
    Wf = L++,
    Xf = L++,
    Yf = L++,
    Zf = L++,
    $f = L++,
    ag = L++,
    bg = L++,
    cg = L++,
    dg = L++;
L++;
var eg = L++,
    fg = L++;
L++;
var gg = L++,
    hg = L++,
    ig = L++,
    jg = L++,
    kg = L++,
    lg = L++,
    mg = L++,
    ng = L++,
    og = L++,
    pg = L++,
    qg = L++;
L++;
var rg = L++,
    sg = L++;
L++;
var tg = L++;
L++;
L++;
var ug = L++,
    vg = L++,
    wg = L++,
    xg = L++,
    Og = L++,
    Pg = L++;
L++;
var Qg = L++;
L++;
L++;
L++;
var Rg = L++,
    Sg = L++,
    Tg = L++,
    Ug = L++,
    Vg = L++,
    Wg = L++,
    Xg = L++,
    Yg = L++,
    Zg = L++;
L++;
var $g = L++,
    ah = L++,
    bh = L++,
    ch = L++,
    dh = L++,
    eh = L++,
    fh = L++,
    gh = L++,
    hh = L++,
    ih = L++,
    jh = L++,
    kh = L++;
L++;
L++;
L++;
L++;
L++;
L++;
var lh = L++;
L++;
var mh = L++;
L++;
var nh = L++,
    oh = L++;
L++;
L++;
L++;
var ph = L++;
L++;
var qh = L++,
    rh = L++;
L++;
L++;
L++;
L++;
L++;
var sh = L++;
L++;
L++;
L++;
L++;
var th = L++;
L++;
L++;
var uh = L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
var vh = L++;
L++;
L++;
L++;
L++;
var wh = L++,
    xh = L++;
L++;
L++;
var yh = L++,
    zh = L++;
L++;
var Ah = L++;
L++;
var Bh = L++;
L++;
var Ch = L++;
L++;
L++;
L++;
var Dh = L++,
    Eh = L++,
    Fh = L++;
L++;
L++;
L++;
L++;
var Gh = L++;
L++;
L++;
L++;
var Hh = L++,
    Ih = L++,
    Jh = L++,
    Kh = L++;
L++;
var Lh = L++,
    Mh = L++,
    Nh = L++,
    Oh = L++,
    Ph = L++,
    Qh = L++,
    Rh = L++,
    Sh = L++,
    Th = L++;
L++;
L++;
var Uh = L++,
    Vh = L++,
    Wh = L++,
    Xh = L++,
    Yh = L++,
    Zh = L++,
    $h = L++,
    ai = L++;
L = 500;
var bi = L++;
L = 1E3;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L = 2E3;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L = 4E3;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L = 0;
L++;
L++;
L++;
var ci = L++;
L = 0;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L = 1;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L++;
L = 0;
L++;
L++;
L++;
L++;
L++;

function di(a) {
    switch (a) {
        case mf:
            return "You have registered for the tournament";
        case of:
            return "You have already registered for this tournament";
        case pf:
            return "Cannot obtain chips";
        case Hf:
            return "You have no more re-entries available"
    }
    return ""
};
var ei = 1,
    fi = ei++,
    gi = ei++,
    hi = ei++,
    ii = ei++,
    ji = ei++,
    ki = ei++,
    li = ei++,
    mi = ei++,
    ni = ei++,
    oi = ei++,
    pi = ei++,
    qi = ei++,
    ri = ei++,
    si = ei++,
    ti = ei++,
    ui = ei++,
    vi = ei++,
    wi = ei++,
    xi = ei++,
    yi = ei++,
    zi = ei++,
    Ai = ei++;
ei++;
var Bi = ei++,
    Ci = ei++,
    Di = ei++,
    Ei = ei++,
    Fi = ei++,
    Gi = ei++,
    Hi = ei++,
    Ii = ei++,
    Ji = ei++,
    Ki = ei++;

function Li() {
    this.b = new Set
}
Li.prototype.W = function(a, b) {
    !1 !== b ? this.b.add(a) : this.b.delete(a)
};
Li.prototype.le = function(a) {
    return this.b.has(a)
};

function Mi(a) {
    this.b = new DataView(a);
    this.ta = 0;
    this.Pa = a
}

function Pi(a) {
    return a.Pa.byteLength - a.ta
}

function Qi(a) {
    a.b.setInt32(0, a.ta, !0);
    return a.Pa.slice(0, a.ta)
}
Mi.prototype.data = function() {
    return Qi(this)
};

function M(a, b) {
    a.b.setInt32(a.ta, b, !0);
    a.ta += 4;
    return a
}

function N(a) {
    return 0 != a.r()
}

function Ri(a, b) {
    a.b.setUint8(a.ta, b);
    a.ta++;
    return a
}

function Si(a, b) {
    Ri(a, b ? 1 : 0);
    return a
}

function Ti(a, b) {
    for (var c = b.length, d = 0; d < c; d++) {
        var e = a;
        e.b.setUint16(e.ta, b.charCodeAt(d), !0);
        e.ta += 2
    }
    a.b.setUint16(a.ta, 0, !0);
    a.ta += 2;
    return a
}

function Ui(a) {
    var b = "",
        c = a.b.getUint16(a.ta, !0);
    for (a.ta += 2; 0 != c;) b += String.fromCharCode(c), c = a.b.getUint16(a.ta, !0), a.ta += 2;
    return b
}

function O(a) {
    var b = a.b.getInt32(a.ta, !0);
    a.ta += 4;
    return b
}

function lj(a) {
    var b = a.b.getInt16(a.ta, !0);
    a.ta += 2;
    return b
}

function mj(a) {
    return [lj(a), lj(a), lj(a), lj(a), lj(a), lj(a), lj(a), lj(a)]
}

function nj(a, b) {
    var c = b % 4294967296,
        d = (b - c) / 4294967296;
    0 > b && d--;
    M(a, c);
    M(a, d);
    return a
}

function P(a) {
    var b = a.b.getUint32(a.ta, !0);
    a.ta += 4;
    a = O(a);
    if (0 == a) return b;
    if (0 < a) return 4294967296 * a + b;
    if (0 > a) return -(4294967296 * -(a + 1) + (4294967296 - b))
}
Mi.prototype.r = function() {
    var a = this.b.getUint8(this.ta, !0);
    this.ta++;
    return a
};

function oj(a) {
    for (var b = [], c = O(a); c--;) b.push(a.r());
    return b
};

function pj() {
    this.b = null;
    this.c = 0;
    this.i = -1;
    this.G = 0;
    this.s = 1;
    this.B = 3E3
}
g = pj.prototype;
g.Mi = function(a) {
    console.log("socket [online]: " + a)
};
g.ck = function() {
    var a = this;
    this.c = 0;
    0 <= this.i ? (this.c = this.i, this.i = -1) : 1 < this.s && (this.c = Math.floor(10 * Math.random()), this.c %= this.s);
    this.b = new WebSocket("wss://" + this.K + ":" + (this.G + this.c) + "/cake");
    this.b.addEventListener("open", function(b) {
        return a.Di(b)
    });
    this.b.addEventListener("message", function(b) {
        var c = new Mi(b.data),
            d = c.r(),
            e = c.r();
        120 == d && 156 == e ? (c = window.pako.ungzip(b.data), c = new Mi(c.buffer), a.Ii(c, !0, b)) : (c.ta = 0, a.Ii(c, !1, b))
    });
    this.b.addEventListener("close", function() {
        a.Mi(!1);
        setTimeout(a.ck.bind(a),
            a.B)
    });
    this.b.binaryType = "arraybuffer"
};
g.Di = function() {
    this.i = this.c;
    this.Mi(!0)
};
g.Ii = function() {
    console.log("process message binary")
};
g.ne = function() {
    console.log("process message")
};

function qj(a, b) {
    var c = null;
    z ? rj(a) ? 2 == b ? c = sj : 3 == b && (c = tj) : uj(a) ? 2 == b ? c = vj : 4 == b && (c = wj) : 2 == b ? c = xj : 3 == b ? c = yj : 4 == b ? c = zj : 6 == b ? c = Aj : 7 == b ? c = Bj : 8 == b ? c = Cj : 9 == b && (c = Dj) : rj(a) ? 2 == b ? c = Ej : 3 == b && (c = Fj) : uj(a) ? 2 == b ? c = Gj : 4 == b && (c = Hj) : 2 == b ? c = Ij : 3 == b ? c = Jj : 4 == b ? c = Kj : 6 == b ? c = Lj : 7 == b ? c = Mj : 8 == b ? c = Nj : 9 == b ? c = Oj : 10 == b && (c = Pj);
    return {
        Ed: c,
        Le: z ? Qj : Rj
    }
}
var zj = {
        Ga: [
            [0, .44],
            [-.4, -.27],
            [0, -.39],
            [.4, -.27]
        ]
    },
    Ej = {
        Ga: [
            [.49, 0],
            [-.49, 0]
        ],
        Ui: [
            [.02, -.27],
            [-.4, -.2]
        ],
        Ti: [
            [.38, -.41],
            [-.53, -.4]
        ]
    },
    Fj = {
        Ga: [
            [.49, 0],
            [-.42, .07],
            [-.42, -.35]
        ],
        Ui: [
            [.02, -.27],
            [-.3, 0],
            [-.3, -.4]
        ],
        Ti: [
            [.38, -.41],
            [-.55, .25],
            [-.55, -.15]
        ]
    },
    Ij = {
        Ga: [
            [.45, 0],
            [-.45, 0]
        ]
    },
    Jj = {
        Ga: [
            [.239, .362],
            [-.239, .362],
            [-.254, -.35]
        ]
    },
    wj = {
        Ga: [
            [0, .49],
            [-.38, -.15],
            [0, -.4],
            [.38, -.15]
        ],
        oh: [
            [0, .17],
            [-.25, .04],
            [0, -.25],
            [.25, .04]
        ],
        Yh: [0, .28]
    },
    vj = {
        Ga: [
            [0, .49],
            [0, -.4]
        ],
        oh: [
            [0, .17],
            [0, -.25]
        ],
        Yh: [0, .28]
    },
    Hj = {
        Ga: [
            [.45, .23],
            [-.45, .23],
            [-.45, -.25],
            [.45, -.25]
        ],
        oh: [
            [.22, .1],
            [-.22, .1],
            [-.22, -.2],
            [.22, -.2]
        ],
        Yh: [.35, .28]
    },
    Gj = {
        Ga: [
            [.45, .23],
            [-.45, .23]
        ],
        oh: [
            [.22, .1],
            [-.22, .1]
        ],
        Yh: [.35, .28]
    },
    Kj = {
        Ga: [
            [.239, .362],
            [-.239, .362],
            [-.254, -.35],
            [.239, -.35]
        ]
    },
    Lj = {
        Ga: [
            [.239, .36],
            [-.239, .36],
            [-.45, -.013],
            [-.25, -.35],
            [.25, -.35],
            [.45, -.013]
        ]
    },
    Mj = {
        Ga: [
            [.3, .36],
            [0, .36],
            [-.3, .36],
            [-.45, 0],
            [-.25, -.35],
            [.25, -.35],
            [.45, 0]
        ]
    },
    Nj = {
        Ga: [
            [.24, .36],
            [-.24, .36],
            [-.45, .08],
            [-.38, -.25],
            [-.15, -.35],
            [.15, -.35],
            [.38, -.25],
            [.45, .08]
        ]
    },
    Oj = {
        Ga: [
            [.32, .36],
            [0, .36],
            [-.34, .32],
            [-.45, 0],
            [-.38, -.28],
            [-.15, -.36],
            [.15, -.36],
            [.38, -.28],
            [.45, 0]
        ]
    },
    Pj = {
        Ga: [
            [.35, .33],
            [.12, .36],
            [-.12, .36],
            [-.35, .33],
            [-.45, .06],
            [-.4, -.2],
            [-.2, -.36],
            [.2, -.36],
            [.4, -.2],
            [.45, .06]
        ]
    },
    xj = {
        Ga: [
            [0, .44],
            [-0, -.39]
        ]
    },
    sj = {
        Ga: [
            [0, .49],
            [0, -.4]
        ],
        Ui: [
            [0, .2],
            [0, -.2]
        ],
        Ti: [
            [0, 0],
            [0, -.07]
        ]
    },
    tj = {
        Ga: [
            [0, .49],
            [-.22, -.4],
            [.22, -.4]
        ],
        Ui: [
            [0, .15],
            [-.2, -.2],
            [.2, -.2]
        ],
        Ti: [
            [-.45, .15],
            [-.2, -.07],
            [.2, -.07]
        ]
    },
    yj = {
        Ga: [
            [0, .44],
            [-.4, -.27],
            [.4, -.27]
        ]
    },
    Aj = {
        Ga: [
            [0, .44],
            [-.45, .2],
            [-.4, -.27],
            [-0, -.39],
            [.4, -.27],
            [.45, .2]
        ]
    },
    Bj = {
        Ga: [
            [0, .44],
            [-.45, .27],
            [-.44, -0],
            [-.35, -.28],
            [.35, -.28],
            [.44, -0],
            [.45, .27]
        ]
    },
    Cj = {
        Ga: [
            [0, .44],
            [-.45, .27],
            [-.45, 0],
            [-.45, -.28],
            [-0, -.4],
            [.45, -.28],
            [.45, 0],
            [.45, .27]
        ]
    },
    Dj = {
        Ga: [
            [0, .44],
            [-.45, .27],
            [-.45, 0],
            [-.45, -.25],
            [-.16, -.43],
            [.16, -.43],
            [.45, -.25],
            [.45, 0],
            [.45, .27]
        ]
    },
    Qj = {
        Ol: new v(0, -.27),
        Nl: new v(0, -.45),
        Pj: new v(0, -.18),
        no: new v(0, -.275),
        Oj: new v(0, -.05),
        Ml: new v(0, 0),
        Sk: new v(-.18, -.52),
        Pd: new v(-.18, -.4),
        oa: [
            [.007, .11],
            [.152, .19],
            [-.138, .19],
            [.181, .065],
            [-.167, .065],
            [-.558, -.485],
            [-.558, -.485],
            [-.558, -.485]
        ],
        Pl: new v(.46, -.47)
    },
    Rj = {
        Ol: new v(0, -.26),
        Nl: new v(0, -.45),
        Pj: new v(0, -.3),
        no: new v(0, -.22),
        Oj: new v(0, -0),
        Tp: new v(.35, .25),
        Ml: new v(0, .04),
        Sk: new v(-.18, -.52),
        Pd: new v(-.09, -.31),
        oa: [
            [0, .12],
            [.152, .19],
            [-.138, .19],
            [.181, .065],
            [-.167, .065],
            [-.558, -.485],
            [-.558, -.485],
            [-.558, -.48]
        ],
        Pl: new v(.46, -.47)
    };

function Sj(a) {
    function b(d, e) {
        var f = (d & 65535) + (e & 65535);
        return (d >> 16) + (e >> 16) + (f >> 16) << 16 | f & 65535
    }

    function c(d, e) {
        return d >>> e | d << 32 - e
    }
    a = function(d) {
        d = d.replace(/\r\n/g, "\n");
        for (var e = "", f = 0; f < d.length; f++) {
            var h = d.charCodeAt(f);
            128 > h ? e += String.fromCharCode(h) : (127 < h && 2048 > h ? e += String.fromCharCode(h >> 6 | 192) : (e += String.fromCharCode(h >> 12 | 224), e += String.fromCharCode(h >> 6 & 63 | 128)), e += String.fromCharCode(h & 63 | 128))
        }
        return e
    }(a);
    return function(d) {
        for (var e = "", f = 0; f < 4 * d.length; f++) e += "0123456789abcdef".charAt(d[f >>
            2] >> 8 * (3 - f % 4) + 4 & 15) + "0123456789abcdef".charAt(d[f >> 2] >> 8 * (3 - f % 4) & 15);
        return e
    }(function(d, e) {
        var f = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051,
                2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
            ],
            h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
            n = Array(64),
            p, q;
        d[e >> 5] |= 128 << 24 - e % 32;
        d[(e + 64 >> 9 << 4) + 15] = e;
        for (p = 0; p < d.length; p += 16) {
            e = h[0];
            var u = h[1];
            var w = h[2];
            var x = h[3];
            var I =
                h[4];
            var J = h[5];
            var G = h[6];
            var Z = h[7];
            for (q = 0; 64 > q; q++) {
                var ma = q;
                if (16 > q) var la = d[q + p];
                else {
                    la = n[q - 2];
                    la = c(la, 17) ^ c(la, 19) ^ la >>> 10;
                    la = b(la, n[q - 7]);
                    var Da = n[q - 15];
                    Da = c(Da, 7) ^ c(Da, 18) ^ Da >>> 3;
                    la = b(b(la, Da), n[q - 16])
                }
                n[ma] = la;
                ma = I;
                ma = c(ma, 6) ^ c(ma, 11) ^ c(ma, 25);
                ma = b(b(b(b(Z, ma), I & J ^ ~I & G), f[q]), n[q]);
                Z = e;
                Z = c(Z, 2) ^ c(Z, 13) ^ c(Z, 22);
                la = b(Z, e & u ^ e & w ^ u & w);
                Z = G;
                G = J;
                J = I;
                I = b(x, ma);
                x = w;
                w = u;
                u = e;
                e = b(ma, la)
            }
            h[0] = b(e, h[0]);
            h[1] = b(u, h[1]);
            h[2] = b(w, h[2]);
            h[3] = b(x, h[3]);
            h[4] = b(I, h[4]);
            h[5] = b(J, h[5]);
            h[6] = b(G, h[6]);
            h[7] = b(Z,
                h[7])
        }
        return h
    }(function(d) {
        for (var e = [], f = 0; f < 8 * d.length; f += 8) e[f >> 5] |= (d.charCodeAt(f / 8) & 255) << 24 - f % 32;
        return e
    }(a), 8 * a.length))
};

function Tj() {
    this.Fa = this.H = -1
}
Tj.prototype.F = function(a) {
    this.H = O(a);
    this.Fa = O(a)
};

function Uj(a, b) {
    b = b.split(":");
    a.H = parseInt(b[0]);
    a.Fa = parseInt(b[1])
}
Tj.prototype.toString = function() {
    return Vj(this)
};
Tj.prototype.J = function(a) {
    M(a, this.H);
    M(a, this.Fa)
};

function Wj(a) {
    return -1 != a.H
}

function Xj(a) {
    var b = new Tj;
    Uj(b, a);
    return b
}

function Yj(a) {
    var b = new Tj;
    b.F(a);
    return b
}

function Vj(a) {
    return a.H + ":" + a.Fa
}

function Zj(a, b) {
    return a && b ? a.H == b.H && a.Fa == b.Fa : !1
}
var ak = new Tj;

function bk() {
    this.hc = this.He = this.Ic = this.Lb = this.ib = this.Bd = 0
}

function ck(a) {
    return 0 == a.Bd && 0 == a.ib && 0 == a.Lb && 0 == a.Ic && 0 == a.He && 0 == a.hc
}
bk.prototype.F = function(a) {
    this.Bd = P(a);
    this.ib = P(a);
    this.Lb = P(a);
    this.Ic = P(a);
    this.hc = P(a);
    this.He = P(a)
};
bk.prototype.We = function(a) {
    return this.Lb == a.Lb && this.Bd == a.Bd && this.ib == a.ib && this.Ic == a.Ic && this.hc == a.hc
};
bk.prototype.Rf = function(a) {
    nj(nj(nj(nj(nj(nj(a, this.Bd), this.ib), this.Lb), this.Ic), this.hc), this.He)
};

function dk() {
    this.O = new bk;
    this.rh = new bk;
    this.sh = new bk;
    this.Kf = this.Ff = 0
}
dk.prototype.Rf = function(a) {
    var b = !ck(this.rh) || !ck(this.sh);
    Si(a, b);
    this.O.Rf(a);
    M(M(a, this.Ff), this.Kf);
    b && (this.rh.Rf(a), this.sh.Rf(a))
};
dk.prototype.construct = function(a) {
    var b = N(a);
    this.O.F(a);
    this.Ff = O(a);
    this.Kf = O(a);
    b && (this.rh.F(a), this.sh.F(a))
};

function ek(a) {
    var b = new bk;
    b.F(a);
    return b
}

function fk() {
    this.Ke = 0;
    this.Kb = [];
    this.Td = []
}
fk.prototype.F = function(a) {
    this.Ke = a.r();
    for (var b = 0; 2 > b; b++) {
        for (var c = {
                Z: O(a),
                D: []
            }, d = O(a), e = 0; e < d; e++) c.D.push(a.r());
        this.Kb.push(c);
        c = {
            Z: O(a),
            D: []
        };
        d = O(a);
        for (e = 0; e < d; e++) c.D.push(a.r());
        this.Td.push(c)
    }
};

function gk(a) {
    var b = new dk;
    b.construct(a);
    return b
}

function hk() {
    this.h = new Tj;
    this.O = new bk;
    this.Vi = 0;
    this.Sb = "";
    this.Ok = this.Dj = this.Mh = this.v = 0;
    this.Bh = !1;
    this.Nh = 2;
    this.gj = !1;
    this.S = new ik;
    this.X = new ik;
    this.Vb = 0;
    this.kg = [];
    this.Dc = []
}
hk.prototype.F = function(a) {
    this.h.F(a);
    this.Sb = Ui(a);
    this.v = a.r();
    this.Vi = O(a);
    this.Tk = O(a);
    a.r();
    this.Mh = P(a);
    this.Dj = P(a);
    this.S.F(a);
    this.O.F(a);
    this.X.F(a);
    a.r();
    this.Ok = a.r();
    this.aj = a.r();
    this.Vb = a.r();
    this.gj = N(a);
    this.Bh = N(a);
    this.Nh = a.r();
    O(a);
    for (var b = O(a), c = 0; c < b; c++) this.kg.push(ek(a));
    b = O(a);
    for (c = 0; c < b; c++) this.Dc.push(jk(a));
    this.qn = vb(this.X.Ka, 2);
    this.rn = vb(this.X.Ka, 4);
    this.Pc = vb(this.X.Ka, 16);
    this.Fn = vb(this.X.Ka, 32);
    this.jj = vb(this.X.Ka, 128)
};

function kk(a) {
    a = rj(a.S) || uj(a.S) ? a.O.hc : vb(a.S.Ka, 16) ? a.O.Lb : a.S.l == Ne ? a.O.Ic : a.O.ib;
    0 == a && (a = 100);
    return a
}

function lk(a) {
    var b = a.X;
    return Vd != b.l && Qd != b.Qa ? a.X : a.S
}

function mk(a, b, c, d) {
    a = "" + y(a, d) + "/" + y(b, d);
    0 != c && (a += " " + l("_tAnte") + " " + y(c, d));
    return a
}

function nk(a, b, c, d) {
    var e = "";
    if (rj(a)) e = y(b.hc, d) + "/" + l("_tPoint");
    else if (uj(a)) e = y(b.hc, d) + "/" + l("_tPoint");
    else if (a.l == Ne) e = l("_tAnte") + " " + y(b.Lb, d) + " " + l("_tBringIn") + " " + y(b.Ic, d);
    else {
        var f = b.Lb;
        Sd == a.Qa ? e = mk(b.ib, 2 * b.ib, f, d) : c ? e = l("_tAnte") + " " + y(b.Lb, d) : ok(a) ? e = l("_tAnte") + " " + y(b.Lb, d) + " " + l("_tBringIn") + " " + y(b.Ic, d) : e = mk(b.Bd, b.ib, f, d)
    }
    return e
}

function pk() {
    this.ec = [];
    this.Xk = [];
    this.uh = [];
    this.Wk = []
};

function ik(a, b) {
    void 0 != a ? this.l = a : this.l = Vd;
    void 0 != b ? this.Qa = b : this.Qa = Qd;
    this.Ka = 0
}
ik.prototype.F = function(a) {
    this.l = a.r();
    this.Qa = a.r();
    this.Ka = O(a)
};
ik.prototype.J = function(a) {
    M(Ri(Ri(a, this.l), this.Qa), this.Ka)
};
ik.prototype.assign = function(a) {
    this.l = a.l;
    this.Qa = a.Qa;
    this.Ka = a.Ka
};
ik.prototype.We = function(a) {
    return this.l == a.l && this.Qa == a.Qa
};

function qk(a) {
    switch (a.l) {
        case Wd:
        case ve:
        case Xd:
        case Ee:
        case Yd:
        case Zd:
        case Re:
        case Oe:
        case Qe:
        case $d:
        case je:
        case ge:
        case he:
        case ie:
        case Se:
        case pe:
        case ye:
        case Le:
        case le:
        case ne:
        case Pe:
        case me:
        case qe:
        case oe:
        case Me:
        case ze:
        case Ce:
        case De:
        case Ke:
        case Ge:
        case He:
            return !0
    }
    return !1
}

function ok(a) {
    switch (a.l) {
        case fe:
        case ee:
        case ke:
        case Fe:
        case Te:
        case Be:
            return !0
    }
    return !1
}

function uj(a) {
    switch (a.l) {
        case Ie:
        case Je:
            return !0
    }
    return !1
}

function rj(a) {
    switch (a.l) {
        case ae:
        case be:
        case ce:
        case Ae:
        case de:
            return !0
    }
    return !1
}

function rk(a) {
    switch (a.l) {
        case le:
        case ne:
        case Pe:
        case me:
        case oe:
        case Me:
        case qe:
        case pe:
        case ye:
        case Le:
        case ze:
        case Ce:
        case De:
        case Ke:
        case Be:
            return !0
    }
    return !1
}

function sk(a) {
    switch (a.l) {
        case we:
        case xe:
            return !0
    }
    return !1
}

function tk(a) {
    switch (a.l) {
        case Xd:
        case Ee:
        case Yd:
        case Zd:
        case Re:
        case Oe:
        case ge:
        case he:
        case ie:
        case Se:
        case Qe:
        case Wd:
        case ve:
        case $d:
        case je:
        case Ge:
        case He:
            return !0
    }
    return !1
}

function uk(a) {
    switch (a.l) {
        case Wd:
            return l("_tHoldem");
        case ve:
            return l("_tShortDeckHoldem");
        case Xd:
            return l("_tOmaha");
        case Ee:
            return l("_tShortDeckOmaha");
        case Yd:
            return l("_tOmaha5Card");
        case Zd:
            return l("_tOmaha6Card");
        case Re:
            return l("_tOmaha7Card");
        case Oe:
            return vb(a.Ka, 64) ? l("_tOmaha456?Card") : l("_tOmaha456Card");
        case Qe:
            return vb(a.Ka, 64) ? l("_tOmahaHiLo456?Card") : l("_tOmahaHiLo456Card");
        case ae:
            return "Chinese";
        case be:
            return l("_tChineseOpenFace");
        case ce:
            return l("_tPineappleOpenFace");
        case Ae:
            return l("_tUltimateProgressiveOFC");
        case de:
            return l("_tPineappleOpenFace") + " 2-7";
        case ee:
            return l("_t7CardStud");
        case fe:
            return l("_t7CardStud") + " 8/O";
        case Be:
            return l("_t7SuperStud") + " 8/O";
        case Ce:
            return l("_tDramaha");
        case Ke:
            return l("_tDramadugi");
        case De:
            return l("_t27Dramaha");
        case ge:
            return l("_tOmahaHiLo");
        case je:
            return l("_tCourchevelHiLo");
        case $d:
            return l("_tCourchevel");
        case he:
            return l("_tOmahaHiLo5Card");
        case ie:
            return l("_tOmahaHiLo6Card");
        case Se:
            return l("_tOmahaHiLo7Card");
        case ke:
            return l("_tRazz");
        case Fe:
            return l("_t27Razz");
        case Te:
            return l("_tActionRazz");
        case le:
            return l("_tBadugi");
        case ne:
            return l("_tBadeucey");
        case Pe:
            return l("_tBadeuceySD");
        case me:
            return l("_tBadacey");
        case oe:
            return l("_t5CardDraw");
        case Me:
            return l("_t5CardDoubleDraw");
        case Ne:
            return l("_tMataAces");
        case qe:
            return l("_t27SingleDraw");
        case pe:
            return l("_t27TripleDraw");
        case ye:
            return l("_tA5TripleDraw");
        case Le:
            return l("_tA5SingleDraw");
        case we:
            return l("_tMixed");
        case xe:
            return l("_tMixed") +
                " DC";
        case ze:
            return l("_tArchie");
        case Ge:
            return l("_tHomaha");
        case He:
            return l("_tHomahaHiLo");
        case Ie:
            return l("_tBig2");
        case Je:
            return l("_tBig2Fat")
    }
    return ""
}

function vk(a) {
    var b = uk(a);
    switch (a.l) {
        case ae:
        case be:
        case ce:
        case Ae:
        case de:
        case we:
        case xe:
        case Ie:
        case Je:
            return b
    }
    return 0 != b.length ? wk(a.Qa) + " " + b : ""
}

function xk(a) {
    var b = "";
    Sd == a.Qa ? Wd == a.l ? b = "HOLD'EM" : ee == a.l ? b = "STUD" : fe == a.l ? b = "STUD 8/B" : ge == a.l ? b = "OMAHA 8/B" : he == a.l ? b = "BIG O" : Xd == a.l ? b = "OMAHA" : pe == a.l ? b = "2 - 7 TD" : ye == a.l ? b = "A - 5 TD" : ke == a.l ? b = "RAZZ" : Fe == a.l ? b = "2 - 7 RAZZ" : Te == a.l ? b = "ACTION RAZZ" : le == a.l ? b = "BADUGI" : me == a.l ? b = "BADACEY" : ne == a.l ? b = "BADEUCEY" : Be == a.l ? b = "SUPER STUD 8/B" : Ce == a.l ? b = "DRAMAHA" : De == a.l ? b = "2 - 7 DRAMAHA" : Ke == a.l ? b = "DRAMADUGI" : je == a.l ? b = "COURCHEVEL 8/B" : oe == a.l ? b = "5 CARD DRAW" : ie == a.l && (b = "BIG EASY") : Rd == a.Qa ? Wd == a.l ?
        b = "NO LIMIT HOLD'EM" : qe == a.l ? b = "NL 2 - 7" : Pe == a.l && (b = "BADEUCEY SD") : Td == a.Qa && (Xd == a.l ? b = "PLO" : he == a.l ? b = "PL BIG O" : ie == a.l && (b = "PL BIG EASY"));
    m(b) && (b = vk(a));
    vb(a.Ka, 32) && tk(a) && (b += " DBL BOARD");
    return b
}

function yk(a) {
    var b = uk(a);
    switch (a.l) {
        case ae:
        case be:
        case ce:
        case Ae:
        case de:
        case we:
        case xe:
        case Ie:
        case Je:
            return b
    }
    return 0 != b.length ? zk(a.Qa) + " " + b : ""
}

function Ak(a) {
    switch (a) {
        case Be:
        case fe:
        case ge:
        case he:
        case ie:
        case Se:
        case je:
        case He:
        case Qe:
            return !0
    }
    return !1
}

function wk(a) {
    switch (a) {
        case Rd:
            return l("_tNoLimit");
        case Sd:
            return l("_tLimit");
        case Td:
            return l("_tPotLimit");
        case Ud:
            return l("_tMixed")
    }
    return ""
}

function zk(a) {
    switch (a) {
        case Rd:
            return l("_tNL");
        case Sd:
            return l("_tLimit");
        case Td:
            return l("_tPL");
        case Ud:
            return l("_tMixed")
    }
    return ""
}

function jk(a) {
    var b = new ik;
    b.F(a);
    return b
}
var Bk = new ik(Wd, Rd);

function Ck() {
    this.be = this.ra = this.T = this.f = 0;
    this.b = new ik;
    this.qb = this.Ud = this.dl = !1;
    this.u = [];
    this.Jb = Array(17);
    this.Jb.fill(254);
    this.za = 0;
    this.td = this.ec = !1;
    this.Rg = this.j = 0;
    this.pg = this.ij = this.yb = !1;
    this.pa = new fk;
    this.kf = this.ye = !1;
    this.pb = [];
    this.nc = [];
    this.Qd = this.Sd = null;
    this.Bc = [];
    this.jf = !1;
    this.th = null;
    this.mf = 255;
    this.lj = this.Vd = 0
}
Ck.prototype.F = function(a) {
    this.f = O(a);
    this.T = P(a);
    this.be = P(a);
    this.ra = P(a);
    this.b.F(a);
    this.Ud = N(a);
    this.qb = N(a);
    this.za = P(a);
    this.ec = N(a);
    this.td = N(a);
    this.j = a.r();
    this.Rg = lj(a);
    P(a);
    this.yb = N(a);
    this.ij = N(a);
    this.ye = N(a);
    this.kf = N(a);
    this.dl = N(a);
    for (var b = O(a), c = 0; c < b; c++) this.Bc.push(a.r());
    this.jf = N(a);
    this.rg = N(a);
    this.mf = a.r();
    this.Vd = a.r();
    this.lj = a.r();
    this.u = oj(a);
    this.pb = oj(a);
    this.nc = oj(a);
    for (b = 0; 17 > b; b++) this.Jb[b] = a.r();
    this.pa.F(a);
    this.c = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 13, 14, 15, 16]
};

function Dk(a) {
    for (var b = [], c = 0, d = ba(a.c), e = d.next(); !e.done && (e = e.value, 254 != a.Jb[e] || (b.push(e), c++, c != a.u.length)); e = d.next());
    return b
}

function Ek(a) {
    var b = !1;
    a.u.forEach(function(c) {
        0 <= c && 54 > c && (b = !0)
    });
    return b
}

function Fk(a, b) {
    var c = !1;
    a.u.forEach(function(d) {
        b == d && (c = !0)
    });
    return c
}

function Gk() {
    this.o = new hk;
    this.I = null;
    this.Pd = this.ob = 0;
    this.Zf = 255;
    this.Ea = [];
    this.lc = this.g = 0;
    this.oa = [];
    this.ue = null;
    this.Xa = -1;
    this.$b = 255;
    this.v = [];
    this.Qh = 99;
    this.Gf = this.Oh = 0
}
g = Gk.prototype;
g.Sa = function() {
    this.lc = Dd;
    this.Xa = -1;
    this.Zf = 255;
    this.v = []
};
g.F = function(a) {
    this.o.F(a);
    this.I = Hk(a);
    this.ob = P(a);
    this.Pd = P(a);
    this.Zf = a.r();
    this.cg = a.r();
    this.g = a.r();
    this.lc = a.r();
    this.Xa = O(a);
    this.$b = a.r();
    this.Ij = a.r();
    this.Aj = a.r();
    this.Ea = [];
    for (var b = O(a), c = 0; c < b; c++) this.Ea[c] = a.r();
    this.oa = [];
    b = O(a);
    for (c = 0; c < b; c++) this.oa[c] = P(a);
    this.ue = Ik(a);
    this.Oh = O(a);
    this.Gf = P(a);
    this.v = [];
    b = O(a);
    for (c = 0; c < b; c++) this.v.push(new Ck);
    this.v.forEach(function(d) {
        return d.F(a)
    })
};
g.ya = function() {
    return this.o.h
};

function Jk(a, b) {
    if (0 == b) return null;
    for (var c = 0; c < a.v.length; c++)
        if (b == a.v[c].f) return a.v[c];
    return null
}

function Kk(a, b) {
    b = ba(b.R);
    for (var c = b.next(); !c.done; c = b.next()) {
        c = c.value;
        var d = a.v[c.j];
        d.T -= c.V;
        d.za += c.V
    }
}

function Lk(a, b) {
    if (255 != b.eg) {
        var c = a.v[b.eg];
        c.T -= b.$i;
        c.za += b.$i;
        a.ob += b.$i
    }
    255 != b.Yf && (c = a.v[b.Yf], c.T -= b.Si, c.za += b.Si, a.ob += b.Si)
}
g.ih = function(a, b) {
    this.Pd = b.Pd;
    this.oa = b.oa.slice(0);
    this.ob = 0;
    a = ba(this.v);
    for (b = a.next(); !b.done; b = a.next()) b = b.value, b.za = 0, b.qb = !1
};
g.jh = function(a, b) {
    this.Ea = b.D
};
g.kh = function(a, b) {
    a.kj = !1;
    a = ba(b.D);
    for (b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        for (var c = this.v[b.j]; c.u.length < b.Be + 1;) c.u.push(254);
        b.al ? (c.pb.push(b.qa), c.nc.push(b.Be)) : c.u[b.Be] = b.qa;
        254 != b.Kn && (c.qb = !0)
    }
};
g.ne = function(a, b, c) {
    switch (b) {
        case Xg:
            this.lh(a, c);
            break;
        case Tf:
            Mk(this, a, c);
            break;
        case Wf:
            Lk(this, c);
            break;
        case dh:
            this.v[c.j].T += c.V;
            break;
        case Xf:
            Kk(this, c);
            break;
        case Yf:
            this.kh(a, c);
            break;
        case cg:
            this.jh(a, c);
            break;
        case dg:
            Nk(this, c);
            break;
        case $f:
            this.ih(a, c);
            break;
        case Gh:
            Ok(this, c);
            break;
        case Wg:
            this.nh(a, c);
            break;
        case ch:
            this.mh(a, c);
            break;
        case bh:
            Pk(this, c);
            break;
        case nh:
            Qk(this, c);
            this.I = null;
            break;
        case oh:
            Rk(this, c);
            break;
        case Qh:
            this.wk(c);
            break;
        case $g:
            Sk(this, c);
            break;
        case Rh:
            this.v.forEach(function(d) {
                d.jf = !1;
                d.Bc.length = 0
            })
    }
};

function Sk(a, b) {
    a.g = b.Wb;
    a.Gf = b.Gf
}
g.lh = function(a, b) {
    a = ba(b.oa);
    for (b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        var c = this.v[b.j];
        c.T += b.V;
        c.za += b.V
    }
    0 < this.oa.length && this.oa.length--
};
g.mh = function(a, b) {
    this.Zf = b.ml
};

function Mk(a, b, c) {
    switch (c.fc) {
        case cd:
            a.v[c.j].qb = !0;
            break;
        case bd:
            a.v[c.j].qb = !0;
            break;
        case nd:
            Tk(a, c);
            a.I = null;
            break;
        case Vc:
            a.Hi(b, c);
            a.I = null;
            break;
        case Wc:
        case Xc:
            a.Gi(c);
            a.I = null;
            break;
        case Yc:
        case $c:
            a.Fi(c);
            a.I = null;
            break;
        case ad:
            var d = a.v[c.j];
            d.T -= c.V;
            d.za = c.V;
            a.ob += c.V;
            d.qb = !0;
            a.I = null;
            break;
        case od:
            d = a.v[c.j];
            d.T -= c.V;
            d.za = c.V;
            a.ob += c.V;
            break;
        case dd:
            d = a.v[c.j];
            d.Ud = !0;
            d.u.length = 0;
            a.I = null;
            break;
        case ld:
        case jd:
            Uk(a, c);
            break;
        case kd:
            a.v[c.j].T -= c.V;
            a.ob += c.V;
            break;
        case md:
            Uk(a, c), a.cg =
                c.j
    }
    b.yb = !1;
    b.Uc = !1;
    a.$b = c.tg
}

function Q(a) {
    return Jk(a, R.f)
}

function Vk(a) {
    a = Q(a);
    return null != a ? a.j : 255
}

function Wk(a) {
    var b = Vk(a);
    return 255 != b ? b == a.$b : !1
}
g.nh = function(a, b) {
    a = this.v[b.j];
    a.za = b.za;
    a.f = b.f;
    a.T = b.T;
    a.be = b.be;
    a.td = b.td;
    a.ye = b.ye;
    a.kf = b.kf;
    a.rg = b.rg;
    a.mf = b.mf;
    a.Vd = b.Vd
};
g.Fi = function(a) {
    var b = this.v[a.j],
        c = a.V - b.za;
    b.T -= c;
    b.za = a.V;
    this.ob += c;
    b.qb = !0
};

function Uk(a, b) {
    var c = a.v[b.j];
    c.T -= b.V;
    c.za += b.V;
    a.ob += b.V
}
g.Gi = function(a) {
    var b = this.v[a.j];
    if (0 != a.V) {
        var c = a.V - b.za;
        b.T -= c;
        this.ob += c;
        b.za = a.V
    }
    b.qb = !0
};

function Tk(a, b) {
    a = a.v[b.j];
    a.Bc = b.D.slice();
    if (0 < b.D.length)
        if (Xk(a.f)) {
            var c = new Set;
            b.D.forEach(function(e) {
                return c.add(e)
            });
            var d = [];
            a.u.forEach(function(e) {
                c.has(e) || d.push(e)
            });
            a.u = d
        } else a.u.length -= b.D.length;
    else a.jf = !0;
    a.qb = !0
}
g.Hi = function(a, b) {
    a = this.v[b.j];
    a.ec = !1;
    a.qb = !0;
    a.u.length = 0
};

function Nk(a, b) {
    5 >= a.Ea.length ? a.Qh = a.Ea.length : 6 == a.Ea.length ? a.Qh = 3 : 8 == a.Ea.length && (a.Qh = 4);
    a.Ea = b.D
}

function Pk(a, b) {
    a = a.v[b.j];
    Xk(a.f) ? a.pg = !0 : (a.u = b.u, a.pb = b.pb, a.nc = b.nc, -1 == b.u.indexOf(255) ? a.pg = !0 : a.ij = !0)
}

function Ok(a, b) {
    a = Jk(a, b.f);
    null != a && (a.u = b.D, a.qb = !0)
}

function Qk(a, b) {
    a = a.v[b.j];
    for (var c = 0; 17 > c; c++) a.Jb[c] = b.D[c];
    a.u.length = 0;
    a.Sd = [];
    a.Qd = [];
    for (c = 0; 3 > c; c++) a.Sd.push(b.Sd[c]), a.Qd.push(b.Qd[c])
}

function Rk(a, b) {
    var c = b.cf;
    a.th = b.cf;
    a.Pd = c.Pd;
    for (b = 0; b < a.v.length; b++) c.ec[b] && (a.v[b].Ud = c.uh[b].Ud)
}
g.wk = function(a) {
    this.ue = a.cf
};

function Yk(a, b) {
    if (0 < a.Ra.size) {
        var c = new Set;
        b.u.forEach(function(e) {
            return c.add(e)
        });
        var d = !0;
        a.Ra.forEach(function(e) {
            c.has(e) || (d = !1)
        });
        d || a.Ra.clear()
    }
}

function Zk(a, b) {
    a = Q(a);
    if (null == a) return !1;
    if (b.ca == Yf)
        for (var c = 0; c < b.D.length; c++) {
            var d = b.D[c];
            if (d.j == a.j && 255 == d.qa) return !0
        } else if (b.ca == Gh) {
            if (a.f == b.f && b.Jn) return !0
        } else if (b.ca == nh)
        for (c = 0; c < b.D.length; c++)
            if (d = b.D[c], b.j == a.j && 255 == d) return !0;
    return !1
}

function $k() {
    Gk.apply(this, arguments)
}
k($k, Gk);
g = $k.prototype;
g.ih = function(a, b) {
    b.Pk && al(a) && bl(this, a);
    Gk.prototype.ih.call(this, a, b);
    cl(a)
};
g.jh = function(a, b) {
    var c = 0;
    5 <= this.Ea.length && 254 != this.Ea[4] ? c = 5 : 4 <= this.Ea.length && 254 != this.Ea[3] ? c = 4 : 3 <= this.Ea.length && 254 != this.Ea[2] && (c = 3);
    Gk.prototype.jh.call(this, a, b);
    if (al(a)) {
        b = c;
        ++dl;
        a.Jd();
        el(a);
        c = a.g;
        var d = c.o,
            e = b,
            f = fl,
            h = {
                Ug: a,
                cp: b,
                cb: f,
                kd: dl
            };
        if (vb(d.X.Ka, 32) && tk(lk(d))) e = !1, 0 == b && 8 <= c.Ea.length && (gl(0, h), gl(1, h), gl(2, h), gl(5, h), gl(6, h), gl(7, h), b = 3, e = !0), 3 == b && 9 <= c.Ea.length && (e && (h.cb += hl), gl(3, h), gl(8, h), b = 4, e = !0), 4 == b && 10 <= c.Ea.length && (e && (h.cb += hl), gl(4, h), gl(9, h));
        else {
            d = !1;
            var n = 10 == c.Ea.length;
            n && (f += il, a.df.textContent = r("_tRunningItTwice"), a.df.style.display = "block", setTimeout(jl, f, a));
            0 == b && 3 <= c.Ea.length && (gl(0, h), lk(c.o).l == Ne ? gl(1, h, !0) : gl(1, h), gl(2, h), b = 3, d = !0);
            3 == b && 4 <= c.Ea.length && (d && (h.cb += hl), gl(3, h), b = 4, d = !0);
            4 == b && 5 <= c.Ea.length && (d && (h.cb += hl), gl(4, h), d = !0);
            n && (b = e, h.cb += kl, 0 == b && 8 <= c.Ea.length && (gl(5, h), gl(6, h), gl(7, h), b = 3, d = !0), 3 == b && 9 <= c.Ea.length && (d && (h.cb += hl), gl(8, h), b = 4, d = !0), 4 == b && 10 <= c.Ea.length && (d && (h.cb += hl), gl(9, h)));
            h.cb += ll;
            n && (h.cb +=
                3E3)
        }
        a.rb = !0;
        setTimeout(a.bd.bind(a), h.cb, a)
    }
};
g.kh = function(a, b) {
    Gk.prototype.kh.call(this, a, b);
    al(a) && ml(b, a)
};
g.ne = function(a, b, c) {
    switch (b) {
        case Xg:
            this.lh(a, c);
            break;
        case Qh:
            Gk.prototype.wk.call(this, c);
            break;
        case Rh:
            a.rb = !0;
            a.Pe = "End Of Round";
            a.Jd() && el(a);
            setTimeout(a.fm.bind(a), 2E3);
            break;
        case ah:
            this.lc = c.Wb;
            break;
        case Tf:
            Mk(this, a, c);
            break;
        case dh:
            this.v[c.j].T += c.V;
            break;
        case Wf:
            Lk(this, c);
            break;
        case Xf:
            Kk(this, c);
            break;
        case Yf:
            this.kh(a, c);
            break;
        case qh:
            a.Ib.clear();
            a.we = [];
            break;
        case th:
            if (c = Q(this)) c.u.length = 0, c.pb.length = 0, c.nc.length = 0;
            c = ba(a.mc.Db);
            for (b = c.next(); !b.done; b = c.next()) b = b.value,
                b.Ie = -1, b.Hf = -1;
            a.dd = null;
            break;
        case cg:
            this.jh(a, c);
            break;
        case dg:
            Nk(this, c);
            break;
        case $f:
            this.ih(a, c);
            break;
        case Zf:
            a = Jk(this, c.f);
            null != a && (a.u = c.u, a.pb = c.pb, a.nc = c.nc);
            break;
        case Gh:
            Ok(this, c);
            break;
        case Wg:
            this.nh(a, c);
            break;
        case bg:
            this.I = c.I;
            this.$b = c.I.tg;
            255 != this.$b && (b = this.v[this.$b], b.qb = !1, uj(lk(this.o)) && (b.Bc.length = 0, b.jf = !1));
            if (Wk(this)) {
                b = Q(this); - 1 != b.u.indexOf(255) && S((new T(R.f, c.h, rh)).J());
                Yk(a, b);
                c = this.o.X;
                if (a.sc != this.Xa) cl(a), c = !1;
                else {
                    b = !1;
                    var d = this.I;
                    if (d.cl && a.nf.checked) {
                        if (c.l !=
                            Be || 2 == a.Ra.size) b = nl(a)
                    } else if (d.fl && a.ug.checked) b = ol(a, !1);
                    else if (a.Eh.checked) b = 0 < d.ld ? pl(a, d) : ql(a);
                    else if (0 != d.rc) a.ud.checked ? b = a.Vf() : vb(c.Ka, 1024) ? a.jd.checked && (b = pl(a, d)) : a.jd.checked ? d.Ae || (b = ql(a)) : a.hd.checked && (d.Ae || a.hd.V + Q(a.g).za == d.rc && (b = ql(a)));
                    else if (a.ud.checked || a.jd.checked) b = ql(a);
                    cl(a);
                    c = b
                }
                c || (a.hj = !1, a.Uc = !1, a.zb = this.I.Ab, 0 == a.Wc && a.Xf.bind(a)(this.$b), R.b.ef ? a.yb = !0 : this.I.yb && (a.yb = !0), 0 == this.I.Ab && a.yb && (a.Uc = !0, a.zb = this.I.Sg), rl(U.ja, !0))
            }
            break;
        case ch:
            this.mh(a,
                c);
            break;
        case hh:
            sl(this.o.h);
            R.b.ff ? a.Li.bind(a)() : a.dd = c;
            break;
        case bh:
            Pk(this, c);
            break;
        case $g:
            Sk(this, c);
            break;
        case nh:
            Qk(this, c);
            this.I = null;
            break;
        case oh:
            Rk(this, c);
            break;
        case Ug:
            Wk(this) || (a.zb = c.Ab, 0 == a.Wc && a.Xf.bind(a)(c.j), a.Uc = !0);
            break;
        case Fh:
            a.zb = c.Ab, 0 == a.Wc && (a.Wc = setTimeout(a.dk.bind(a), 1E3, a))
    }
};
g.lh = function(a, b) {
    Gk.prototype.lh.call(this, a, b);
    al(a) && tl(b, a)
};
g.mh = function(a, b) {
    Gk.prototype.mh.call(this, a, b);
    al(a) && ul(b, this, a)
};
g.nh = function(a, b) {
    if (!(b.j >= this.v.length)) {
        var c = this.v[b.j],
            d = !1;
        0 == c.f && 0 != b.f && b.f == R.f && al(a) && (d = !0);
        Gk.prototype.nh.call(this, a, b);
        Xk(c.f) && (c.td && (a.La = wb(a.La, 1, !0)), al(a) && a.Kd.bind(a)(), z ? vl(a.pf, b.rg) : a.pf.checked = b.rg);
        d && wl(a)
    }
};
g.Fi = function(a) {
    Gk.prototype.Fi.call(this, a);
    var b = Q(this);
    !z || null != b && a.j == b.j || rl(U.c)
};
g.Gi = function(a) {
    Gk.prototype.Gi.call(this, a);
    var b = Q(this);
    !z || null != b && a.j == b.j || rl(U.K)
};
g.Hi = function(a, b) {
    Gk.prototype.Hi.call(this, a, b);
    al(a) && Vk(this) == b.j && rl(U.P)
};

function xl() {
    this.rd = rd;
    this.Lg = 0;
    this.Hf = this.Ie = -1
}

function yl(a) {
    this.Db = [];
    this.C = a
}

function zl(a, b) {
    255 != b.eg && (a.Db[b.eg].rd = ed, setTimeout(a.C.Tf.bind(a.C), 1500, b.eg));
    255 != b.Yf && (a.Db[b.Yf].rd = fd, setTimeout(a.C.Tf.bind(a.C), 1500, b.Yf))
}

function Al(a, b) {
    switch (b.ca) {
        case Tf:
            a = a.Db[b.j], b.fc == bd ? (a.Ie = b.D.length, a.Lg = b.D.length) : b.fc == nd && (a.Lg = b.D.length)
    }
}
yl.prototype.ne = function(a, b) {
    switch (a.ca) {
        case Wf:
            zl(this, a);
            break;
        case $f:
            lk(b.o).l == Ne ? 2 != b.g && 4 != b.g && 6 != b.g || this.Db.forEach(function(c) {
                return c.Hf = -1
            }) : 2 != b.g && 4 != b.g || this.Db.forEach(function(c) {
                return c.Ie = -1
            });
            break;
        case nh:
            this.Db[a.j].rd = cd;
            setTimeout(this.C.Tf.bind(this.C), 1500, a.j);
            break;
        case Xf:
            for (b = 0; b < a.R.length; b++) this.Db[a.R[b].j].rd = gd;
            setTimeout(this.C.Tf.bind(this.C), 1500, 255);
            break;
        case Tf:
            b = this.Db[a.j], b.rd = a.fc, a.fc == bd ? (b.Ie = a.D.length, b.Lg = a.D.length) : a.fc == nd ? b.Lg = a.D.length :
                a.fc == pd ? b.Hf = 0 : a.fc == qd && (b.Hf = 1), setTimeout(this.C.Tf.bind(this.C), 1500, a.j)
    }
};

function V(a) {
    this.Od = 0;
    this.ca = void 0 === a ? 0 : a
}
V.prototype.J = function() {
    var a = new ArrayBuffer(8);
    a = new Mi(a);
    this.b(a);
    return Qi(a)
};
V.prototype.b = function(a) {
    M(M(a, 0), this.ca)
};
V.prototype.F = function(a) {
    a.ta = 0;
    this.Od = O(a);
    this.ca = O(a)
};

function Bl(a, b) {
    V.call(this, a);
    this.ph = b
}
k(Bl, V);
Bl.prototype.J = function() {
    var a = new ArrayBuffer(256);
    a = new Mi(a);
    V.prototype.b.call(this, a);
    M(a, this.ph);
    return Qi(a)
};

function W(a, b) {
    V.call(this, b);
    a ? this.h = a : this.h = new Tj
}
k(W, V);
W.prototype.b = function(a) {
    V.prototype.b.call(this, a);
    this.h.J(a)
};
W.prototype.J = function() {
    var a = new ArrayBuffer(256);
    a = new Mi(a);
    this.b(a);
    return Qi(a)
};
W.prototype.F = function(a) {
    V.prototype.F.call(this, a);
    this.h = new Tj;
    this.h.F(a)
};

function Cl() {
    V.call(this, yh);
    this.R = []
}
k(Cl, V);
Cl.prototype.J = function() {
    var a = new Mi(new ArrayBuffer(256));
    V.prototype.b.call(this, a);
    M(a, this.R.length);
    this.R.forEach(function(b) {
        return M(a, b)
    });
    return Qi(a)
};

function T(a, b, c) {
    W.call(this, b, c);
    this.f = a
}
k(T, W);
T.prototype.F = function(a) {
    W.prototype.F.call(this, a);
    this.f = O(a)
};
T.prototype.J = function() {
    var a = new Mi(new ArrayBuffer(256));
    this.b(a);
    return Qi(a)
};
T.prototype.b = function(a) {
    W.prototype.b.call(this, a);
    M(a, this.f)
};

function Dl(a, b, c, d) {
    T.call(this, a, b, d);
    this.xa = c
}
k(Dl, T);
Dl.prototype.J = function() {
    var a = new Mi(new ArrayBuffer(256));
    T.prototype.b.call(this, a);
    M(a, this.xa);
    return Qi(a)
};

function El(a, b) {
    V.call(this, b);
    this.f = a
}
k(El, V);
El.prototype.J = function() {
    var a = new Mi(new ArrayBuffer(256));
    this.b(a);
    return Qi(a)
};
El.prototype.b = function(a) {
    V.prototype.b.call(this, a);
    M(a, this.f)
};
El.prototype.F = function(a) {
    V.prototype.F.call(this, a);
    this.f = O(a)
};

function Fl(a, b, c) {
    var d = new Mi(new ArrayBuffer(256));
    Ti(M(M(M(M(M(M(M(d, 0), kg), b), a), c.H), c.Fa), Cd), "");
    return Qi(d)
}

function Gl(a, b) {
    T.call(this, a, b, eg)
}
k(Gl, T);
Gl.prototype.J = function() {
    var a = new Mi(new ArrayBuffer(1024));
    this.b(a);
    Si(a, !1);
    return Qi(a)
};

function Hl(a, b, c) {
    T.call(this, b, c, gg);
    this.Yg = a;
    this.bl = !1;
    this.nl = 0
}
k(Hl, T);
Hl.prototype.J = function() {
    var a = new Mi(new ArrayBuffer(1024));
    this.b(a);
    M(Si(Ti(a, this.Yg), this.bl), this.nl);
    return Qi(a)
};

function Il(a, b, c, d) {
    T.call(this, b, a, Sh);
    this.Cd = d;
    this.Th = c
}
k(Il, T);
Il.prototype.J = function() {
    var a = new Mi(new ArrayBuffer(1024));
    this.b(a);
    M(M(a, this.Th), this.Cd);
    return Qi(a)
};

function Jl(a, b, c) {
    T.call(this, a, b, uh);
    this.c = c
}
k(Jl, T);
Jl.prototype.J = function() {
    var a = new Mi(new ArrayBuffer(256));
    this.b(a);
    Si(a, this.c);
    return Qi(a)
};

function Kl(a, b, c, d) {
    T.call(this, a, b, ph);
    this.j = c;
    this.c = d
}
k(Kl, T);
Kl.prototype.J = function() {
    var a = new Mi(new ArrayBuffer(256));
    this.b(a);
    Si(Ri(a, this.j), this.c);
    return Qi(a)
};

function Hk(a) {
    return {
        rc: P(a),
        za: P(a),
        ld: P(a),
        Kc: P(a),
        El: P(a),
        yl: P(a),
        oo: P(a),
        Ab: lj(a),
        Sg: lj(a),
        yb: N(a),
        tg: a.r(),
        og: N(a),
        cl: N(a),
        fl: N(a),
        Dn: N(a),
        Ae: N(a),
        kl: a.r()
    }
}

function Ll() {
    this.gd = this.bb = this.Fa = 0
}

function Ml(a) {
    var b = new Ll;
    b.Fa = O(a);
    b.bb = a.r();
    b.gd = a.r();
    return b
}

function Nl(a, b, c) {
    T.call(this, a, b, kh);
    this.Xa = c
}
k(Nl, T);
Nl.prototype.J = function() {
    var a = new Mi(new ArrayBuffer(256));
    this.b(a);
    M(a, this.Xa);
    return Qi(a)
};

function Ol(a, b, c) {
    T.call(this, a, b, ih);
    this.Xa = c;
    this.D = []
}
k(Ol, T);
Ol.prototype.J = function() {
    var a = new Mi(new ArrayBuffer(256));
    this.b(a);
    M(a, this.Xa);
    M(a, this.D.length);
    this.D.forEach(function(b) {
        return Ri(a, b)
    });
    return Qi(a)
};

function Pl(a, b, c) {
    T.call(this, a, b, jh);
    this.Xa = c
}
k(Pl, T);
Pl.prototype.J = function() {
    var a = new Mi(new ArrayBuffer(256));
    this.b(a);
    M(a, this.Xa);
    return Qi(a)
};

function Ql(a, b, c, d) {
    d = void 0 === d ? 0 : d;
    W.call(this, a, Sf);
    this.K = b;
    this.B = c;
    this.G = d;
    this.s = [];
    this.i = [];
    this.Kj = this.Kf = this.c = 0;
    this.yb = !1;
    this.zl = 0
}
k(Ql, W);
Ql.prototype.J = function() {
    var a = new Mi(new ArrayBuffer(256));
    this.b(a);
    M(M(Si(M(M(Ri(nj(Ri(Ri(a, this.B), this.K), this.G), this.c), this.Kf), this.Kj), this.yb), this.zl), this.s.length);
    this.s.forEach(function(b) {
        return Ri(a, b)
    });
    M(a, this.i.length);
    this.i.forEach(function(b) {
        return Ri(a, b)
    });
    return Qi(a)
};

function Rl() {
    V.call(this, Lf);
    this.i = this.Yc = "";
    this.G = 0;
    this.s = !1;
    this.K = "";
    this.B = this.sb = 0
}
k(Rl, V);
Rl.prototype.J = function() {
    var a = new Mi(new ArrayBuffer(256));
    V.prototype.b.call(this, a);
    M(Ti(Si(M(M(Ti(Ti(a, this.Yc), this.i), this.G), this.sb), this.s), this.K), this.B);
    return Qi(a)
};

function Sl(a) {
    W.call(this, a, Rf);
    this.V = this.f = 0;
    this.j = 255;
    this.c = !1;
    this.i = !0
}
k(Sl, W);
Sl.prototype.J = function() {
    var a = new Mi(new ArrayBuffer(256));
    W.prototype.b.call(this, a);
    Ti(Si(M(M(Si(nj(Ri(M(a, R.f), this.j), this.V), this.c), 0), 0), !0), this.i);
    return Qi(a)
};

function Ik(a) {
    for (var b = {
            vh: []
        }, c = a.r(); 0 < c--;) {
        for (var d = {
                f: O(a),
                Ph: O(a),
                V: P(a),
                D: []
            }, e = O(a); 0 < e--;) d.D.push(a.r());
        b.vh.push(d)
    }
    return b
}

function Tl(a, b, c) {
    T.call(this, a, b, Vg);
    this.V = c;
    this.c = !1
}
k(Tl, T);
Tl.prototype.J = function() {
    var a = new Mi(new ArrayBuffer(256));
    this.b(a);
    Si(nj(a, this.V), this.c);
    return Qi(a)
};

function Ul(a, b, c) {
    El.call(this, a, ai);
    this.i = b;
    this.c = c
}
k(Ul, El);
Ul.prototype.J = function() {
    var a = new Mi(new ArrayBuffer(2 * (this.i.length + this.c.length) + 20));
    this.b(a);
    Ti(Ti(a, this.i), this.c);
    return Qi(a)
};

function Vl(a, b) {
    El.call(this, a, Uf);
    this.ea = b
}
k(Vl, El);
Vl.prototype.J = function() {
    var a = new Mi(new ArrayBuffer(256));
    this.b(a);
    M(a, this.ea);
    return Qi(a)
};

function Wl(a) {
    if (!a.ia) return "";
    var b = a.ia.kb;
    switch (a.ia.Ia) {
        case wd:
        case vd:
        case zd:
            b = a.ia.zd + "/" + a.ia.kb;
            break;
        case td:
            df == a.va.Lc && (b = a.ia.kb + " of " + a.va.Cl);
            break;
        case sd:
            b = ""
    }
    return b
}

function Xl(a) {
    return {
        Jg: O(a),
        kb: O(a),
        eo: O(a),
        zd: O(a),
        Df: O(a),
        yp: O(a),
        Qo: O(a),
        mg: mj(a),
        xn: mj(a),
        Uk: mj(a),
        Ia: a.r(),
        Je: P(a),
        xj: P(a),
        Sh: P(a),
        So: P(a),
        Fp: O(a),
        Bp: O(a),
        Ul: P(a),
        Mp: O(a),
        ip: O(a),
        Ip: O(a),
        Kp: O(a),
        zo: N(a),
        Up: mj(a),
        Lp: O(a),
        od: gk(a),
        xe: gk(a),
        Lh: O(a),
        Hj: a.r()
    }
}

function Yl(a) {
    var b = mj(a),
        c = jk(a),
        d = a.r(),
        e = O(a),
        f = O(a),
        h = O(a),
        n = O(a),
        p = O(a),
        q = a.r(),
        u = P(a),
        w = P(a),
        x = P(a),
        I = a.r(),
        J = Ui(a),
        G = a.r(),
        Z = O(a),
        ma = a.r(),
        la = O(a),
        Da = O(a),
        Ni = O(a),
        yg = a.r(),
        Zc = O(a),
        re = O(a);
    var Oi = {
        jp: O(a),
        fp: O(a),
        rp: O(a),
        qp: O(a)
    };
    b = {
        Mf: b,
        X: c,
        Lc: d,
        Jg: e,
        sb: f,
        Vo: h,
        pp: n,
        Sh: p,
        On: q,
        Za: u,
        Ya: w,
        ra: x,
        uo: I,
        ka: J,
        lg: G,
        kp: Z,
        to: ma,
        Cl: la,
        Nh: Da,
        Bl: Ni,
        yn: yg,
        zp: Zc,
        ap: re,
        vo: Oi,
        Gp: O(a),
        Bh: N(a),
        op: P(a),
        xp: O(a),
        mp: O(a),
        Ao: N(a),
        hl: N(a),
        el: N(a),
        xo: N(a),
        Ah: N(a),
        vp: P(a),
        wp: P(a),
        up: O(a),
        lp: O(a),
        Oo: P(a),
        Po: P(a),
        No: O(a),
        Wo: O(a),
        sp: P(a),
        Ro: P(a),
        Jp: P(a),
        Vb: a.r(),
        Jf: O(a),
        Dh: N(a),
        Dl: O(a),
        Fj: a.r(),
        Ap: O(a),
        Dc: []
    };
    c = O(a);
    for (d = 0; d < c; d++) b.Dc.push(jk(a));
    return b
}

function Zl(a, b) {
    var c = new Mi(new ArrayBuffer(256));
    M(M(M(c, 0), b), a);
    return Qi(c)
}

function $l(a) {
    V.call(this, Jf);
    this.i = a
}
k($l, V);
$l.prototype.J = function() {
    var a = new Mi(new ArrayBuffer(2 * this.i.length + 50));
    V.prototype.b.call(this, a);
    Ri(Ti(M(M(a, 0), 0), this.i), this.c);
    return Qi(a)
};

function am(a, b, c) {
    El.call(this, a, Zh);
    this.Jf = b;
    this.ge = c
}
k(am, El);
am.prototype.J = function() {
    var a = new Mi(new ArrayBuffer(2 * this.ge.length + 50));
    El.prototype.b.call(this, a);
    Ti(M(a, this.Jf), this.ge);
    return Qi(a)
};

function bm(a, b, c) {
    El.call(this, a, vh);
    this.c = b;
    this.i = c
}
k(bm, El);
bm.prototype.J = function() {
    var a = new Mi(new ArrayBuffer(512));
    this.b(a);
    Ti(a, this.c);
    M(a, this.i);
    return Qi(a)
};

function cm(a, b, c) {
    El.call(this, a, lh);
    this.i = b;
    this.c = c
}
k(cm, El);
cm.prototype.J = function() {
    var a = new Mi(new ArrayBuffer(512));
    this.b(a);
    Ti(a, this.i);
    Ti(a, this.c);
    return Qi(a)
};

function dm(a) {
    if (4 > Pi(a)) return null;
    var b = null;
    switch (O(a)) {
        case Yh:
            for (b = {
                    ca: Yh,
                    R: []
                }; 1 < Pi(a);) {
                var c = {
                    Jg: O(a),
                    Sj: Ui(a)
                };
                b.R.push(c)
            }
            break;
        case Mh:
            for (b = {
                    ca: pg,
                    H: O(a),
                    R: []
                }; 1 < Pi(a);) c = {
                f: O(a),
                Fa: O(a),
                T: P(a),
                Bj: O(a),
                j: a.r(),
                Mg: O(a),
                Ig: O(a),
                wj: O(a),
                V: P(a),
                ra: P(a),
                yj: P(a),
                Gj: O(a)
            }, b.R.push(c);
            break;
        case Oh:
            for (b = {
                    ca: ug,
                    R: []
                }; 1 < Pi(a);) b.R.push({
                Fa: O(a),
                bb: a.r(),
                gd: a.r()
            });
            break;
        case Nh:
            for (b = {
                    ca: Nh,
                    R: []
                }; 1 < Pi(a);) c = new hk, c.F(a), b.R.push(c);
            break;
        case Ph:
            for (b = {
                    ca: Ph,
                    R: []
                }; 1 < Pi(a);) c = {}, c.$k = Yl(a),
                c.An = Xl(a), b.R.push(c)
    }
    return b
}

function em(a) {
    if (8 > Pi(a)) return null;
    var b = O(a),
        c = O(a);
    if (b > a.Pa.byteLength) return null;
    a.ta = 0;
    var d = null;
    switch (c) {
        case tg:
            O(a);
            d = {
                ca: O(a),
                h: Yj(a),
                f: O(a),
                tb: O(a),
                xh: {
                    Mg: O(a),
                    Ig: O(a),
                    wj: O(a),
                    V: P(a)
                },
                En: N(a)
            };
            break;
        case $h:
            O(a);
            d = {
                ca: O(a),
                ge: Ui(a)
            };
            break;
        case Lh:
            O(a);
            for (var e = {
                    ca: O(a),
                    h: Yj(a),
                    R: []
                }, f = O(a); 0 < f--;) e.R.push({
                f: O(a),
                ra: P(a),
                xl: P(a)
            });
            d = e;
            break;
        case Ih:
            for (var h = {
                    Od: O(a),
                    ca: O(a),
                    H: O(a),
                    R: []
                }, n = O(a); 0 < n--;) h.R.push(O(a));
            d = h;
            break;
        case pg:
            for (var p = {
                    Od: O(a),
                    ca: O(a),
                    H: O(a),
                    R: []
                }, q = O(a); 0 <
                q--;) {
                var u = {
                    f: O(a),
                    Fa: O(a),
                    T: P(a),
                    Bj: O(a),
                    j: a.r(),
                    Mg: O(a),
                    Ig: O(a),
                    wj: O(a),
                    V: P(a),
                    ra: P(a),
                    yj: P(a),
                    Gj: O(a)
                };
                p.R.push(u)
            }
            d = p;
            break;
        case Vh:
            var w = new V;
            w.F(a);
            w.h = Yj(a);
            for (w.Lk = []; 0 < Pi(a);) w.Lk.push(O(a));
            d = w;
            break;
        case Eh:
            var x = new V;
            x.F(a);
            x.ph = O(a);
            d = x;
            break;
        case eh:
            var I = new T;
            I.pa = new fk;
            I.F(a);
            I.j = a.r();
            I.pa.F(a);
            d = I;
            break;
        case xh:
            var J = new T;
            J.F(a);
            J.V = P(a);
            J.Ab = O(a);
            d = J;
            break;
        case Fh:
            var G = new W;
            G.F(a);
            G.j = a.r();
            G.Ab = O(a);
            d = G;
            break;
        case gh:
            var Z = new W;
            Z.F(a);
            d = Z;
            break;
        case Ug:
            var ma = new W;
            ma.F(a);
            ma.j = a.r();
            ma.Ab = O(a);
            d = ma;
            break;
        case mh:
            var la = new El;
            la.F(a);
            la.s = N(a);
            d = la;
            break;
        case Qg:
            var Da = new V;
            Da.F(a);
            Da.R = [];
            Da.F(a);
            Da.f = O(a);
            for (var Ni = O(a), yg = 0; yg < Ni; yg++) {
                var Zc = {
                    h: Yj(a),
                    ka: Ui(a),
                    X: jk(a)
                };
                Wj(Zc.h) ? (Zc.Za = P(a), Zc.Ya = P(a)) : (Zc.X = jk(a), Zc.O = ek(a));
                Da.R.push(Zc)
            }
            d = Da;
            break;
        case zh:
            var re = new V;
            re.F(a);
            re.R = [];
            for (var Oi = O(a), Km = 0; Km < Oi; Km++) {
                var ss = {
                    f: O(a),
                    Jc: O(a),
                    Yc: Ui(a)
                };
                re.R.push(ss)
            }
            d = re;
            break;
        case xg:
            return {
                Od: O(a), ca: O(a), H: O(a), f: O(a), Kg: O(a), h: Yj(a)
            };
        case rg:
            return {
                Od: O(a),
                    ca: O(a), f: O(a), h: Yj(a), Yk: Yj(a), ka: Ui(a), X: jk(a), Za: P(a), Ya: P(a)
            };
        case Tg:
            var Vi = new V;
            Vi.F(a);
            Vi.Qc = {
                Il: O(a),
                bp: O(a),
                ho: O(a),
                Yo: O(a),
                Pp: O(a),
                Uk: P(a),
                bo: O(a)
            };
            d = Vi;
            break;
        case jg:
            var Wi = new V;
            Wi.F(a);
            Wi.Cc = Yl(a);
            d = Wi;
            break;
        case Kh:
            O(a);
            for (var Lm = {
                    ca: O(a),
                    H: O(a),
                    R: []
                }, ts = O(a); 0 < ts--;) Lm.R.push({
                f: O(a),
                T: P(a)
            });
            d = Lm;
            break;
        case sg:
            for (var Mm = {
                    Od: O(a),
                    ca: O(a),
                    H: O(a),
                    xh: {
                        $o: P(a),
                        ra: P(a),
                        Je: P(a),
                        Xo: P(a),
                        R: []
                    }
                }, us = O(a); 0 < us--;) {
                var vs = {
                    Mg: O(a),
                    Ig: O(a),
                    wj: O(a),
                    V: P(a)
                };
                Mm.xh.R.push(vs)
            }
            d = Mm;
            break;
        case og:
            var Xi =
                new V;
            Xi.F(a);
            Xi.Cc = Xl(a);
            d = Xi;
            break;
        case qg:
            for (var Nm = {
                    Od: O(a),
                    ca: O(a),
                    H: O(a),
                    R: []
                }, ws = O(a); 0 < ws--;) Nm.R.push(gk(a));
            d = Nm;
            break;
        case Tf:
            var wc = new W;
            wc.F(a);
            wc.D = [];
            wc.U = N(a);
            wc.j = a.r();
            wc.fc = a.r();
            wc.V = P(a);
            for (var xs = O(a), Om = 0; Om < xs; Om++) wc.D.push(a.r());
            wc.tg = a.r();
            d = wc;
            break;
        case nh:
            var xc = new T;
            xc.F(a);
            xc.j = a.r();
            xc.D = Array(17);
            xc.Sd = Array(3);
            xc.Qd = Array(3);
            for (var Yi = 0; 17 > Yi; Yi++) xc.D[Yi] = a.r();
            for (var Zi = 0; 3 > Zi; Zi++) xc.Qd[Zi] = a.r();
            for (var $i = 0; 3 > $i; $i++) xc.Sd[$i] = a.r();
            d = xc;
            break;
        case Wf:
            var yc =
                new W;
            yc.F(a);
            yc.L = N(a);
            yc.P = N(a);
            yc.eg = a.r();
            yc.Yf = a.r();
            yc.$i = P(a);
            yc.Si = P(a);
            yc.N = P(a);
            d = yc;
            break;
        case Xf:
            var zg = new W;
            zg.F(a);
            zg.R = [];
            for (var ys = a.r(), Pm = 0; Pm < ys; Pm++) {
                var zs = {
                    j: a.r(),
                    V: P(a),
                    wo: N(a)
                };
                zg.R.push(zs)
            }
            d = zg;
            break;
        case Mf:
            var zc = new V;
            zc.F(a);
            zc.f = O(a);
            zc.Jc = O(a);
            zc.he = Ui(a);
            zc.Gg = P(a);
            zc.Ub = P(a);
            zc.gg = {
                un: a.r(),
                so: a.r(),
                Zo: O(a),
                yo: N(a),
                Cn: N(a)
            };
            zc.ja = Ui(a);
            d = zc;
            break;
        case Yf:
            var ef = new W;
            ef.F(a);
            ef.D = [];
            ef.f = O(a);
            for (var As = a.r(), Qm = 0; Qm < As; Qm++) ef.D.push({
                j: a.r(),
                qa: a.r(),
                Kn: a.r(),
                Be: a.r(),
                al: N(a)
            });
            d = ef;
            break;
        case bh:
            var se = new W;
            se.F(a);
            se.j = a.r();
            se.u = oj(a);
            se.pb = oj(a);
            se.nc = oj(a);
            d = se;
            break;
        case cg:
        case dg:
            var Ag = new W;
            Ag.F(a);
            Ag.D = [];
            for (var Bs = O(a), Rm = 0; Rm < Bs; Rm++) Ag.D.push(a.r());
            d = Ag;
            break;
        case $f:
            var te = new W;
            te.F(a);
            te.oa = [];
            te.Pd = P(a);
            te.Pk = N(a);
            for (var Cs = a.r(), Sm = 0; Sm < Cs; Sm++) te.oa.push(P(a));
            d = te;
            break;
        case Vf:
            var Bg = new W;
            Bg.F(a);
            Bg.g = fm ? new Gk : new $k;
            Bg.g.F(a);
            d = Bg;
            break;
        case Ah:
            var Cg = new V;
            Cg.F(a);
            Cg.Cc = new hk;
            Cg.Cc.F(a);
            d = Cg;
            break;
        case fh:
            d = {
                Od: O(a),
                ca: O(a),
                H: O(a)
            };
            break;
        case Wg:
            var ab = new T;
            ab.F(a);
            ab.j = a.r();
            ab.td = N(a);
            ab.i = N(a);
            ab.ye = N(a);
            ab.kf = N(a);
            ab.T = P(a);
            ab.za = P(a);
            ab.be = P(a);
            ab.ra = P(a);
            ab.Vd = a.r();
            ab.rg = N(a);
            ab.mf = a.r();
            d = ab;
            break;
        case Nf:
            var ue = new W;
            ue.bc = [];
            ue.cc = [];
            ue.F(a);
            O(a);
            for (var Ds = a.r(), Tm = 0; Tm < Ds; Tm++) {
                var Es = {
                    f: O(a),
                    j: a.r(),
                    T: P(a),
                    ll: a.r()
                };
                ue.bc.push(Es)
            }
            for (var Fs = O(a), Um = 0; Um < Fs; Um++) ue.cc.push(O(a));
            d = ue;
            break;
        case hg:
            var Dg = new V;
            Dg.F(a);
            Dg.R = [];
            for (var Gs = O(a), Vm = 0; Vm < Gs; Vm++) {
                var Eg = {
                    Jg: O(a),
                    Yg: Ui(a),
                    bl: N(a),
                    nl: O(a),
                    Io: P(a),
                    Jo: P(a)
                };
                Eg.h = new Tj;
                Eg.h.F(a);
                Eg.f = O(a);
                Dg.R.push(Eg)
            }
            d = Dg;
            break;
        case Th:
            var Fg = new T;
            Fg.F(a);
            Fg.Th = O(a);
            Fg.Cd = O(a);
            d = Fg;
            break;
        case Zf:
            var gf = new T;
            gf.F(a);
            gf.u = oj(a);
            gf.pb = oj(a);
            gf.nc = oj(a);
            d = gf;
            break;
        case Hh:
            var aj = new V;
            aj.F(a);
            aj.ph = O(a);
            d = aj;
            break;
        case Gh:
            var hf = new T;
            hf.F(a);
            hf.Jn = N(a);
            var Wm = O(a);
            hf.D = Array(Wm);
            for (var bj = 0; bj < Wm; bj++) hf.D[bj] = a.r();
            d = hf;
            break;
        case ug:
            var Gg = new V;
            Gg.F(a);
            Gg.R = [];
            for (var Hs = O(a), Xm = 0; Xm < Hs; Xm++) Gg.R.push(Ml(a));
            d = Gg;
            break;
        case Zg:
            var Hg = new T;
            Hg.F(a);
            Hg.j =
                a.r();
            Hg.Ab = O(a);
            d = Hg;
            break;
        case Wh:
            d = new T;
            d.F(a);
            break;
        case ch:
            var Ig = new W;
            Ig.F(a);
            Ig.Nn = a.r();
            Ig.ml = a.r();
            d = Ig;
            break;
        case ah:
            var cj = new W;
            cj.F(a);
            cj.Wb = O(a);
            d = cj;
            break;
        case Sg:
            var dj = new El;
            dj.F(a);
            dj.tn = {
                To: P(a),
                io: P(a),
                ao: P(a),
                ee: P(a)
            };
            d = dj;
            break;
        case Ch:
            var ej = new El;
            ej.F(a);
            ej.ee = P(a);
            d = ej;
            break;
        case ag:
            var fj = new W;
            fj.F(a);
            fj.sc = O(a);
            d = fj;
            break;
        case $g:
            var Jg = new W;
            Jg.F(a);
            Jg.Wb = O(a);
            Jg.Gf = P(a);
            d = Jg;
            break;
        case wh:
            var gj = new W;
            gj.F(a);
            gj.xa = O(a);
            d = gj;
            break;
        case vg:
            var hj = new T;
            hj.F(a);
            hj.xa =
                O(a);
            d = hj;
            break;
        case Uh:
            var ij = new W;
            ij.F(a);
            ij.sc = O(a);
            d = ij;
            break;
        case wg:
            var Kg = new V;
            Kg.F(a);
            Kg.ge = Ui(a);
            Kg.Kg = O(a);
            d = Kg;
            break;
        case bg:
            var jj = new W;
            jj.F(a);
            jj.I = Hk(a);
            d = jj;
            break;
        case oh:
            var Lg = new W;
            Lg.F(a);
            Lg.cf = new pk;
            var Gd = Lg.cf;
            Gd.kb = a.r();
            Gd.b = P(a);
            a.r();
            Gd.Fl = P(a);
            for (var Ym = 0; 4 > Ym; Ym++) Gd.ec.push(N(a));
            for (var Zm = 0; 4 > Zm; Zm++) Gd.Xk.push(a.r());
            for (var $m = 0; 4 > $m; $m++) {
                var Mg = {
                    tp: O(a),
                    jo: O(a),
                    lo: O(a),
                    ko: O(a),
                    Ud: N(a),
                    j: a.r(),
                    Op: P(a),
                    Dp: O(a),
                    Ep: O(a),
                    Cp: O(a),
                    D: []
                };
                Mg.ig = new Map;
                for (var Is = O(a); 0 <
                    Is--;) {
                    var Js = a.r(),
                        Ks = a.r();
                    Mg.ig.set(Js, Ks)
                }
                for (var an = 0; 13 > an; an++) Mg.D.push(a.r());
                Gd.uh.push(Mg)
            }
            for (var bn = 0; 6 > bn; bn++) {
                var Ls = {
                    Ln: a.r(),
                    Mn: a.r(),
                    Lo: P(a),
                    Mo: P(a),
                    hp: O(a),
                    np: O(a),
                    Uo: O(a),
                    Qp: O(a),
                    Hp: O(a),
                    Ko: O(a),
                    Np: O(a),
                    V: P(a)
                };
                Gd.Wk.push(Ls)
            }
            d = Lg;
            break;
        case Qh:
            var kj = new W;
            kj.F(a);
            kj.cf = Ik(a);
            d = kj;
            break;
        case dh:
            var Ng = new W;
            Ng.F(a);
            Ng.j = a.r();
            Ng.V = P(a);
            d = Ng;
            break;
        case Og:
            var Ac = new W;
            Ac.F(a);
            Ac.R = [];
            Ac.Fl = P(a);
            Ac.fo = P(a);
            Ac.aa = P(a);
            Ac.ea = O(a);
            Ac.fa = O(a);
            for (var Ms = a.r(), cn = 0; cn < Ms; cn++) Ac.R.push({
                T: P(a),
                Sh: P(a),
                co: P(a),
                $n: P(a),
                j: a.r(),
                gp: a.r(),
                f: O(a),
                Fl: O(a)
            });
            d = Ac;
            break;
        case Xg:
            var jf = new W;
            jf.F(a);
            jf.oa = [];
            jf.ce = a.r();
            for (var Ns = a.r(), dn = 0; dn < Ns; dn++) jf.oa.push({
                j: a.r(),
                V: P(a)
            });
            d = jf;
            break;
        case qh:
        case Rh:
        case th:
            d = new W;
            d.F(a);
            break;
        case hh:
            var Hd = new T;
            Hd.F(a);
            Hd.Gn = N(a);
            Hd.Hn = N(a);
            Hd.s = N(a);
            Hd.B = O(a);
            Hd.sc = O(a);
            d = Hd;
            break;
        case sh:
            var kf = new V;
            kf.F(a);
            kf.H = O(a);
            kf.f = O(a);
            kf.tb = O(a);
            d = kf;
            break;
        case bi:
            var Hb = new V;
            Hb.F(a);
            Hb.H = O(a);
            Hb.Df = O(a);
            Hb.Pg = O(a);
            Hb.Ia = a.r();
            Hb.od = gk(a);
            Hb.xe = gk(a);
            Hb.xj =
                P(a);
            Hb.kb = O(a);
            Hb.zd = O(a);
            d = Hb
    }
    return d
};

function gm() {
    this.sa = hm("av_ring_2.png");
    this.L = [];
    this.G = [];
    this.s = [];
    this.B = [];
    this.U = [];
    this.N = new Image;
    this.N.src = "./images/decks/joker.png";
    this.md = hm("button.png");
    for (var a = 0; 18 > a; a++) {
        var b = new Image;
        b.src = "./images/chips/c" + a + ".png";
        this.L.push(b)
    }
    im(this.B, "simple");
    im(this.G, "std");
    im(this.s, "std_4c");
    im(this.U, "mobile");
    this.b = [hm("cardbacks/yellow.png"), hm("cardbacks/tan.png"), hm("cardbacks/wine.png")];
    this.K = jm("check.mp3");
    this.P = jm("muck.mp3");
    this.c = jm("raise.mp3");
    this.ja = jm("toact.mp3");
    this.Ba = jm("login.mp3");
    this.fa = jm("pullchips.mp3");
    this.ua = jm("call.mp3");
    this.ea = jm("timeout.mp3");
    this.aa = jm("dealcard.mp3");
    this.ma = jm("winchips.mp3");
    this.i = jm("seatready.mp3")
}

function im(a, b) {
    for (var c = 0; 52 > c; c++) {
        var d = new Image;
        d.src = "./images/decks/" + b + "/" + c + ".png";
        a.push(d)
    }
}

function jm(a) {
    var b = new Audio;
    b.src = "./sounds/" + a;
    return b
}

function hm(a) {
    var b = new Image;
    b.src = "./images/" + a;
    return b
};

function km(a) {
    this.bc = this.o = null;
    this.cc = [];
    var b = this.h = new Tj;
    b.H = a.H;
    b.Fa = a.Fa
}

function lm(a) {
    return a.o ? a.o : a.C && a.C.g ? a.C.g.o : null
}

function mm(a) {
    this.H = a;
    this.Rd = this.va = null;
    this.bc = []
}

function nm(a) {
    a.play();
    a.pause()
}

function rl(a, b) {
    (1 == R.b.de || 2 == R.b.de && b) && 4 == a.readyState && a.play()
}

function om() {
    return sl(R.c)
}

function pm(a) {
    return R.G.get(Vj(a))
}

function qm(a) {
    return R.s.get(a)
}

function sl(a) {
    return a ? R.i.get(Vj(a)) : null
};

function rm(a, b, c, d, e) {
    var f = this;
    this.m = D(d ? d : document.body, "style_modal_dialog_client");
    this.Bf = t(E(this.m, "style_dialog_title"), a, e ? e : F.w);
    new Fc(this.Bf);
    this.b = D(this.m, "style_flex_column");
    b && (this.G = D(this.b, "style_flex_row"), this.G.style.justifyContent = "space-between", this.K = [D(this.G, "style_flex_column"), D(this.G, "style_flex_column")], this.s = this.K[1], this.Lj = [], b.forEach(function(h) {
        m(h) ? f.Lj.push(D(f.K[0], "style_label", "\u00a0")) : f.Lj.push(D(f.K[0], "style_label", l(h) + ":"))
    }));
    c && (this.i =
        oc(this.m, c, "style_button light_gradient", e ? e : F.w))
}
rm.prototype.Sa = function() {
    Qb.bind(this.m)()
};

function sm(a) {
    "flex" != a.m.style.display && a.W()
}
rm.prototype.le = function() {
    return "flex" == this.m.style.display
};
rm.prototype.W = function(a) {
    Ob(this.m, null, a)
};

function tm(a) {
    a.i && (a.m.insertBefore(a.i.previousSibling, null), a.m.insertBefore(a.i, null))
};
var fm = !1;

function um() {
    this.$ = new fb;
    this.fi = new fb;
    this.c = 0;
    this.gi = new fb;
    this.pn = new fb(8, 8);
    this.ti = !1;
    this.Lk = [];
    this.zi = new v;
    this.se = new v;
    this.ma = null;
    this.Pe = "";
    this.mc = new yl(this);
    this.Ra = new Set;
    this.Ib = new Set;
    this.Rc = new Set;
    this.kj = !1;
    this.P = 254;
    this.ui = !1
}

function vm(a) {
    var b = a.g.o.X;
    if (rj(b) || uj(b) || b.l == Ne || Sd != b.Qa) wm(a) ? (R.b.Tc = !R.b.Tc, K("stack_as_bb_tourney", (R.b.Tc ? 1 : 0).toString())) : (R.b.Sc = !R.b.Sc, K("stack_as_bb_ring", (R.b.Sc ? 1 : 0).toString())), a.ui = !0, a.$a()
}

function xm(a) {
    a.Y = D(document.body, "noselect");
    a.Y.style.display = "none";
    a.Y.style.touchAction = "none";
    a.Wa = D(a.Y, "div_controls noselect");
    a.md = C(a.Y, "button_div", U.md.src);
    a.fa = D(a.Y, "s_kill table_font_bold", "K");
    a.Ja = [];
    a.sd = [];
    a.gb = [];
    a.Zb = [];
    a.oa = [];
    a.Kk = [];
    a.di = [];
    a.li = [];
    a.Id = [];
    a.ub = [];
    a.oi = [];
    a.Pb = [];
    a.hn = D(a.Y, "");
    a.Ba = [];
    for (var b = 0; 10 > b; b++) a.Ba.push(D(a.Y, ""));
    a.i = D(a.Y, "");
    a.ci = D(a.i, "style_big2_border");
    D(a.i, z ? "m_big2_suits" : "style_big2_suits");
    ["./images/cards-club.png", "./images/cards-heart.png",
        "./images/cards-diamond.png", "./images/cards-spade.png"
    ].forEach(function(h) {
        C(a.K, "style_big2_suit", h)
    });
    a.K = D(a.i, z ? "m_big2_suits" : "style_big2_suits");
    ["./images/cards-diamond.png", "./images/cards-club.png", "./images/cards-heart.png", "./images/cards-spade.png"].forEach(function(h) {
        C(a.K, "style_big2_suit", h)
    });
    a.af = [];
    a.Ca = [];
    a.zg = [];
    for (b = 0; 10 > b; b++) {
        var c = C(a.hn, "card");
        c.style.zIndex = 60;
        a.af.push(c);
        a.Ca.push(new gb);
        a.zg.push(C(a.i, "card_cover"))
    }
    b = 10;
    for (c = 0; c < b - 1; c++) a.oa.push(null);
    a.ua = D(a.Y,
        "gamestate_info table_font");
    for (c = 0; c < b; c++) {
        var d = D(a.i, "player_avatar_div");
        C(d, "player_avatar");
        C(d, "player_avatar_overlay", U.sa.src);
        D(d, "player_avatar_underlay");
        var e = D(a.i, "style_player_info table_font");
        D(e, "s_player_name");
        var f = D(e, "player_stack");
        f.style.color = "rgb(192, 248, 181)";
        d.Vc = D(e, "player_avatar_bounty");
        d.Qn = C(d.Vc, "", "./images/target_2.png");
        d.oj = D(d.Vc, "target_text");
        a.sd.push(d);
        a.gb.push(e);
        z || f.addEventListener("click", function() {
            return vm(a)
        })
    }
    for (c = 0; c < b; c++) a.Zb.push(null),
        a.Ja.push([]), a.Id.push([]), a.ub.push(D(a.i, "big2_pass")), a.Kk.push(D(a.i, "style_discard_info table_font_bold")), a.di.push(D(a.i, "style_discard_info table_font_bold")), a.li.push(D(a.i, "style_discard_info table_font_bold")), a.oi.push(D(a.i, "style_last_card table_font_bold", "LAST CARD")), a.Pb.push(D(a.i, "style_missed_blind  table_font_bold", "MB"));
    a.ub.forEach(function(h) {
        return h.style.display = "none"
    });
    a.Pb.forEach(function(h) {
        return h.title = "Missed Blind"
    });
    b = 3;
    a.qd = [];
    a.pd = [];
    a.vb = [];
    a.Md = [];
    for (c =
        0; c < b; c++) {
        a.vb.push([]);
        a.Md.push(D(a.i, "style_chinese_foul", "FOUL"));
        a.qd.push([]);
        for (d = 0; 17 > d; d++) a.qd[c].push(C(a.i, "card"));
        for (d = 0; 17 > d; d++) a.vb[c].push(D(a.i, "style_chinese_placeholder"));
        a.pd.push([]);
        for (d = 0; 3 > d; d++) a.pd[c].push(D(a.i, "style_chinese_bonus"))
    }
    a.Hk = C(a.Y, "style_table_logo", "./site/table_logo.png");
    a.s = C(a.Y, "style_table_image");
    a.fb = D(a.Wa, "kill_info table_font_bold");
    a.ri = D(a.Y, "total_pot table_font_bold");
    ym && void 0 != ym.background && (a.Qf = C(a.Y, "style_background", "./images/" +
        ym.background))
}

function zm(a) {
    var b = Am(a, new v(-.38, -.38)),
        c = Am(a, new v(.38, .28));
    A(a.ci, new gb(b.x, b.y, c.x, c.y));
    a.K.style.top = b.y + "px";
    a.K.style.left = z ? Am(a, new v(0, 0)).x + "px" : c.x + "px";
    B(a.Hk, pb(a.Aa));
    a.Hk.style.height = (z ? a.Aa.width() : a.Aa.height()) / 2 + "px"
}
g = um.prototype;
g.Tf = function(a) {
    if (this.g)
        if (255 == a)
            for (a = 0; a < this.mc.Db.length; a++) this.mc.Db[a].rd = rd, this.Dk.bind(this)(a);
        else this.mc.Db[a].rd = rd, this.Dk.bind(this)(a)
};
g.$a = function() {
    this.rb || (this.Jd() && el(this), this.nn = !1)
};

function Bm(a, b) {
    a.fi.set(b, 10 * b / 11);
    b = a.md;
    var c = a.Aa.height() * (R.b.Rk / 10);
    c = new fb(c, 10 * c / 11);
    Eb(b, c.M, c.ba);
    b = a.fi;
    Eb(hc[Cm], b.M, b.ba);
    hc[Dm].style.fontSize = a.c + "px";
    hc[Em].style.fontSize = a.c + "px"
}

function Fm(a, b) {
    a.$.set(5 * b / 7, b);
    hc[Gm].style.width = a.$.M + "px";
    hc[Gm].style.height = a.$.ba + "px"
}

function wm(a) {
    return a.g ? -1 != a.g.o.h.H : !1
}
g.Vm = function(a) {
    Q(this.g) && 254 != this.B && (Hm(this, this.B, a.currentTarget.tb), this.B = this.P = 254, a.currentTarget.style.border = "", this.$a())
};

function Im(a, b, c) {
    var d = Jm(a, b),
        e = pb(d.da),
        f = pb(a.Aa),
        h = 1 * d.da.height();
    d = f.x - e.x;
    f = f.y - e.y;
    h /= Math.sqrt(d * d + f * f);
    e = e.duplicate();
    e.x += d * h;
    e.y += f * h;
    z ? 0 != b && (e.y += a.$.M) : 7 != c.v.length && 9 != c.v.length || 1 != b ? (b = pb(Jm(a, b).da), 0 <= pb(a.Aa).y - b.y && (e.y += .5 * a.$.M)) : (e.x -= a.$.M, e.y += a.$.M);
    return e
}

function en(a, b) {
    var c = Jm(a, b),
        d = pb(c.da),
        e = pb(a.Aa);
    a = e.x - d.x;
    e = e.y - d.y;
    d = d.duplicate();
    d.x = 0 <= a ? d.x + .75 * c.da.width() : d.x - .75 * c.da.width();
    d.y = 0 <= e ? d.y + .25 * c.da.width() : d.y - .25 * c.da.width();
    z && 0 == b && (d.y += .25 * c.da.width());
    return d
}

function fn(a, b) {
    if (255 != b.Zf) {
        var c = en(a, gn(b, b.Zf)),
            d = 1;
        b = lk(b.o);
        rj(b) || ok(b) && Sd != b.Qa || b.l != Ne && (qk(b) || (d = .5));
        B(a.md, c);
        a.md.style.display = "block";
        a.md.style.opacity = d
    }
}

function hn(a, b) {
    var c = b.o,
        d = lk(c);
    z ? a.Ue(b) : (a.ja.textContent = yk(c.S), c.jj && (a.ja.textContent += " (w/Jokers)"), a.Bb.textContent = " " + nk(c.X, c.O, c.Pc, Wj(c.h)), a.ja.style.color = Ak(c.S.l) ? "rgb(255,128,255)" : "", a.Vp.textContent = c.Sb, a.sa.style.display = "none", we == b.o.S.l && (a.sa.Zd.style.color = Ak(d.l) ? "pink" : "", wm(a) ? a.sa.Zd.textContent = xk(d) + " " + nk(d, b.o.O, !1, !0) : a.sa.Zd.textContent = xk(d), a.sa.ul.textContent = "(" + (b.Aj + 1) + "/" + b.Ij + ")", a.sa.style.display = "flex"))
}

function jn(a, b) {
    var c = lk(b.o),
        d = a.Cb.Le,
        e = 1.1,
        f = a.g.o,
        h = 5;
    c.l == Ne && (h = 3);
    if (z) {
        var n = 2;
        switch (c.l) {
            case Xd:
            case Ge:
            case He:
            case Ee:
            case ge:
                n = 4;
                break;
            case Yd:
            case he:
            case $d:
            case je:
            case Ce:
            case De:
            case Ke:
            case Ne:
                n = 5;
                break;
            case Zd:
            case ie:
            case Oe:
            case Qe:
                n = 6;
                break;
            case Re:
            case Se:
                n = 7
        }
        n = (window.innerWidth - 2 * (.4 * (n - 1) + 1.2) * a.$.M - a.$.M) / (h - 1);
        6 < f.v && (e = n / a.$.M, e = Math.min(e, 1.1))
    }
    n = ((h - 1) * e + 1) * a.$.M;
    h = .1 * a.$.ba;
    2 < f.v && (h = .3 * -a.$.ba);
    d = Am(a, d.Ml);
    d = new v(d.x - n / 2, d.y - (a.$.ba + h / 2));
    for (f = 0; 5 > f; f++) {
        n = a.Ca[f];
        var p = a.Ca[5 + f];
        hb(n, d, a.$);
        hb(p, d, a.$);
        n.offset(0, -(a.$.ba + h) / 2);
        p.offset(0, (a.$.ba + h) / 2);
        d.x += a.$.M * e
    }
    c.l == Ne && (a.Ca[0].offset(.3 * -a.$.M, 0), a.Ca[2].offset(.3 * a.$.M, 0));
    for (e = 0; 10 > e; e++) h = a.af[e], h.qa = 254, e < b.Ea.length && (h.qa = b.Ea[e], h.src = kn(h.qa), h.alt = ln(h.qa)), A(h, a.Ca[e]), h.style.display = "none";
    for (e = 0; 10 > e; e++) d = 254, h = a.af[e], e < b.Ea.length && (d = b.Ea[e], 254 != d && (h.src = kn(d), h.alt = ln(d))), 254 == d ? h.style.display = "none" : (2 == b.o.v ? 5 > e && (e + 5 >= b.Ea.length || 254 == b.Ea[e + 5]) ? (d = a.Ca[e].duplicate(), d.offset(0,
        a.$.ba / 2), A(h, d)) : A(h, a.Ca[e]) : A(h, a.Ca[e]), h.style.display = "block"), h.style.opacity = e % 5 < b.Qh ? 1 : .3;
    2 <= b.Ea.length && (a.af[1].style.transform = c.l == Ne ? "rotate(45deg)" : "")
}

function mn(a) {
    a.ti || (a.kn && (a.kn.style.display = "none"), a.Md.forEach(function(b) {
        return b.style.display = "none"
    }), a.qd.forEach(function(b) {
        return b.forEach(function(c) {
            return c.style.display = "none"
        })
    }), a.vb.forEach(function(b) {
        return b.forEach(function(c) {
            return c.style.display = "none"
        })
    }), a.pd.forEach(function(b) {
        return b.forEach(function(c) {
            return c.style.display = "none"
        })
    }), a.ti = !0)
}

function nn(a, b) {
    return Am(a, {
        x: b[0],
        y: b[1]
    })
}

function Am(a, b) {
    b = new v(jb(a.Aa) + a.Aa.width() * b.x, ib(a.Aa) + a.Aa.height() * b.y);
    b.offset(-a.G.left, 0);
    return b
}

function on(a) {
    if (.615 > a.width() / a.height()) {
        var b = a.width() / .615,
            c = b;
        .5 <= b - c && c++;
        b = (a.height() - b) / 2;
        return new gb(a.left, a.top + b, a.left + a.width(), a.top + b + c)
    }
    c = .615 * a.height();
    b = (a.width() - c) / 2;
    return new gb(a.left + b, a.top, a.left + b + c, a.top + a.height())
}

function pn(a, b) {
    if (null == b || 0 == b.length)
        for (b = 0; b < a.oa.length; b++) null != a.oa[b] && (a.oa[b].remove(), a.oa[b] = null);
    else {
        for (var c = b.length; c < a.oa.length; c++) null != a.oa[c] && (a.oa[c].remove(), a.oa[c] = null);
        for (c = 0; c < b.length; c++) {
            var d = b[c],
                e = a.oa[c];
            e && (e.V != d || a.ui) && (e.remove(), e = a.oa[c] = null);
            e || 0 == d || (e = qn(a, d, !0), e.style.transform = "translate(-50%, -100%)", a.oa[c] = e);
            if (e) {
                var f = Am(a, rn(a, c));
                B(e, f);
                a.nn && (e.children[1].textContent = sn(a, d))
            }
        }
    }
}

function rn(a, b) {
    a = a.Cb.Le.oa[b];
    a = new v(a[0], a[1]);
    return 0 == b ? new v(a.x, a.y + (z ? .03 : .07)) : a
}

function tn(a, b) {
    var c = a.Zb[b.j];
    null == c || c.V == b.za && 0 != b.za && !a.ui || (c.remove(), c = a.Zb[b.j] = null);
    null == c && 0 != b.za && (c = qn(a, b.za), a.Zb[b.j] = c)
}

function un(a, b, c, d) {
    if (0 == b) return "";
    a = y(Math.round(100 * a / b)); - 1 != a.indexOf(".") && "0" == a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1));
    d || (a += " " + c);
    return a
}

function sn(a, b, c) {
    var d = y(b, wm(a));
    if (wm(a) ? R.b.Tc : R.b.Sc) {
        a = a.g.o;
        var e = a.X;
        if (rj(e) || uj(e)) d = un(b, a.O.hc, "PTS", c);
        else {
            var f;
            if (!(f = e.l == Ne)) a: {
                switch (e.l) {
                    case ve:
                    case Ee:
                        f = !0;
                        break a
                }
                f = !1
            }
            f ? d = un(b, a.O.Lb, "A", c) : Sd == e.Qa || (d = un(b, a.O.ib, "BB", c))
        }
    }
    return d
}

function vn(a) {
    for (var b = [], c = wn.length - 1; 0 <= c; c--) {
        for (var d = wn[c]; d <= a;) a -= d, b.push(c);
        if (0 == a) break
    }
    return b
}

function xn(a, b, c) {
    wm(a) ? b *= 100 : (1 != sb && (b *= sb), 1 != tb && (b = Math.round(b / tb)));
    var d = [];
    if (c) {
        var e = null;
        vn(b).forEach(function(h) {
            e && e[0] == h ? e.push(h) : (e = [h], d.push(e))
        });
        return d
    }
    c = lk(a.g.o);
    var f = !1;
    c.l != Ne && c.Qa == Sd && 0 < a.g.Gf && (f = !0);
    if (f && (a = a.g.Gf, b <= 4 * a)) {
        for (; 0 < b;) c = vn(Math.min(b, a)), b -= a, d.push(c);
        return d
    }
    b = vn(b);
    b.reverse();
    for (a = 0; a < b.length; a += 12) d.push(b.slice(a, a + 12).reverse());
    return d
}

function qn(a, b, c) {
    var d = xn(a, b, c),
        e = D(a.Y, "chip_stack"),
        f = D(e, "chip_stack_area");
    d = ba(d);
    for (var h = d.next(); !h.done; h = d.next()) {
        h = h.value;
        for (var n = D(f, "chip_column"), p = 0; p < h.length; p++) {
            var q = C(n, "", U.L[h[p]].src);
            0 != p && (q.style.transform = "translate(0, " + 90 * p + "%)")
        }
    }
    f = D(e, "chip_stack_text table_font_bold", sn(a, b));
    z || f.addEventListener("click", function() {
        return vm(a)
    });
    c && (f.style.color = "gold");
    e.V = b;
    return e
}

function yn(a, b) {
    return a.ma && b == a.P ? !0 : a.Ib.has(b) ? !0 : !1
}

function zn(a, b, c, d) {
    var e = a.di[c.j];
    e.style.display = "none";
    var f = a.oi[c.j];
    f.style.display = "none";
    var h = a.Kk[c.j];
    h.style.display = "none";
    if (c.u && 0 != c.u.length) {
        var n = lk(b.o),
            p = Q(b);
        if (uj(n) && p && 0 == d) {
            n = An(a, p);
            d = a.Ja[c.j];
            for (h = 0; h < c.u.length; h++) e = c.u[h], p = d[h], p.style.display = "block", p.style.visibility = "visible", p.style.filter = a.Ra.has(e) ? "brightness(70%)" : "", A(p, n[h]);
            1 == c.u.length && (c = Jm(a, gn(b, c.j)), B(f, new v(jb(c.da), c.da.top)), f.style.display = "block")
        } else if (rj(n))
            if (Q(b) && 0 == d)
                for (b = a.Ja[0],
                    f = 0; f < c.u.length; f++) n = b[f], d = c.u[f], yn(a, d) || (n.src = kn(d), n.style.display = "block", n.style.visibility = "visible", n.qa = d, n.style.filter = d == a.B ? "brightness(70%)" : "");
            else
                for (b = Dk(c), f = 0; f < c.u.length; f++) n = a.qd[d][b[f]], n.src = kn(c.u[f]), n.style.display = "block", n.style.visibility = "visible";
        else {
            d = a.Ja[c.j];
            p = ba(d);
            for (var q = p.next(); !q.done; q = p.next()) q.value.style.display = "block";
            p = a.mc.Db[c.j];
            if (Ek(c)) {
                var u = Bn(a, gn(b, c.j), c.u.length, n, b),
                    w = [];
                0 < c.pb.length && c.nc.forEach(function(G) {
                    var Z = u[G].duplicate();
                    Z.offset(0, .2 * Z.height());
                    u[G].offset(0, .2 * -Z.height());
                    w.push(Z)
                });
                a.Ni(u, c.u);
                f = 15;
                if (Xk(c.f)) f = 30;
                else if (c.ec && Fd != b.lc) f = 30;
                else if (c.pg || c.ij) f = 30;
                for (h = 0; h < c.u.length; h++) e = d[h], e.style.display = "block", e.style.opacity = "", e.style.zIndex = "", e.style.filter = "", n.l == Ne ? (e.style.zIndex = f++, h == c.mf && 255 != c.u && (p = a.zg[c.j], A(p, u[h]), p.style.display = "block", p.style.zIndex = f++)) : e.style.zIndex = f, p = c.u[h], (rk(n) || n.l == Be) && a.Ra.has(p) && (a.kj ? e.style.display = "none" : e.style.filter = "brightness(0.6)"), c.ec ?
                    Fd != b.lc && Xk(c.f) && !c.pg && (e.style.filter = a.Rc.has(e.qa) ? "brightness(100%)" : "brightness(0.6)") : e.style.filter = a.Rc.has(e.qa) ? "brightness(100%)" : "brightness(0.6)", A(e, u[h]);
                for (a = 0; a < c.pb.length; a++) b = d[c.u.length + a], b.style.display = "block", b.style.opacity = "", Xk(c.f) || (b.style.zIndex = d[0].style.zIndex), b.style.filter = "", A(b, w[a])
            } else {
                var x = Math.min(c.u.length, 5);
                switch (n.l) {
                    case Oe:
                    case Qe:
                        x = Math.min(c.u.length, 6);
                        break;
                    case Zd:
                    case ie:
                    case Re:
                    case Se:
                        x = c.u.length
                }
                q = Cn(a, gn(b, c.j), x);
                for (var I = 0; I <
                    x; I++) {
                    var J = d[I];
                    A(J, q[I]);
                    J.style.zIndex = "";
                    J.style.opacity = ""
                }
                for (; x < c.u.length; x++) d[x].style.display = "none";
                for (x = 0; x < c.pb.length; x++) I = d[x + c.u.length], A(I, q[c.nc[x]]), I.style.zIndex = "", I.style.opacity = "";
                if (rk(n)) f = "", 0 <= p.Ie && (f = 0 == p.Ie ? "P" : p.Ie, h.textContent = f, h.style.display = "block", c = Jm(a, gn(b, c.j)), B(h, new v(c.da.right, c.da.top)));
                else if (n.l == Ne) 0 <= p.Hf && (h.textContent = 0 == p.Hf ? "0" : "1", h.style.display = "block", c = Jm(a, gn(b, c.j)), B(h, new v(c.da.right, c.da.top)));
                else if (uj(n)) e.style.display =
                    "block", a = Jm(a, gn(b, c.j)), B(e, new v(a.da.right, a.da.top)), e.textContent = c.u.length, 1 == c.u.length && (B(f, new v(jb(a.da), a.da.top)), f.style.display = "block");
                else if (n.l == Oe || n.l == Qe) e.textContent = c.u.length, e.style.display = "block", a = Jm(a, gn(b, c.j)), B(e, new v(a.da.right, a.da.top)), vb(n.Ka, 64) ? e.textContent = "?" : e.textContent = c.u.length
            }
        }
    }
}

function An(a, b) {
    var c = [];
    var d = (7.5 * a.$.M - a.$.M) / (b.u.length - 1) / a.$.M;
    d = Math.min(d, 1);
    var e = a.$.M + d * a.$.M * (b.u.length - 1);
    var f = nn(a, a.Cb.Ed.Yh);
    f.x = z ? f.x - e / 2 : f.x - e;
    for (e = 0; e < b.u.length; e++) {
        var h = new gb;
        hb(h, f, a.$);
        a.Ra.has(b.u[e]) && h.offset(0, .1 * -h.height());
        c.push(h);
        f.x += d * a.$.M
    }
    return c
}

function Dn(a, b) {
    for (var c = [], d = 0, e = 0; e < b.u.length; e++) yn(a, b.u[e]) || d++;
    var f = a.$.M;
    e = 1;
    1 < d && (e = ((z ? window.innerWidth - a.$.M : 7.5 * a.$.M) - a.$.M) / (d - 1) / a.$.M, e = Math.min(e, 1), f = a.$.M + e * a.$.M * (d - 1));
    d = null;
    z ? d = Am(a, {
        x: 0,
        y: .34
    }) : d = {
        x: jb(a.Rb[0][11]) - .3 * a.$.M,
        y: a.Rb[0][10].bottom + 15
    };
    d.x -= f / 2;
    for (f = 0; f < b.u.length; f++)
        if (!yn(a, b.u[f])) {
            var h = new gb;
            hb(h, d, a.$);
            c.push(h);
            d.x += e * a.$.M
        } return c
}
g.Qi = function(a, b) {
    for (var c = 0; c < a.v; c++) {
        var d = Jm(this, gn(b, c)),
            e = this.sd[c],
            f = this.gb[c];
        B(e, mb(d.da));
        B(f, mb(d.Ne));
        (c == b.cg || 0 != b.Oh && b.v[c].f == b.Oh) && B(this.fa, mb(d.Ne));
        f.style.minWidth = d.Ne.width() + "px";
        ob(d.da);
        B(this.Pb[c], ob(d.da));
        f = new gb(0, 0, d.da.width(), d.da.height());
        A(e.children[1], f);
        lb(f);
        A(e.children[0], f);
        A(e.children[2], f);
        d = d.da.size();
        e.oj.style.fontSize = .195 * d.ba + "px";
        e.Qn.style.height = .24 * d.ba + "px";
        e.Vc.style.left = .5 * d.M + "px";
        e.Vc.style.top = .9 * d.ba + "px";
        e.Vc.style.borderRadius =
            .15 * d.ba + "px"
    }
    for (a = a.v; 10 > a; a++) this.sd[a].style.display = "none", this.gb[a].style.display = "none", (b = this.Ja[a]) && 0 < b.length && (b.forEach(function(h) {
        return h.remove()
    }), this.Ja[a] = [])
};
g.ni = function(a) {
    return C(a, "card")
};
g.Sf = function(a) {
    if (!a || Dd == a.lc) return this.gh(), !1;
    if (a.v.length < a.o.v) return !1;
    fn(this, a);
    hn(this, a);
    var b = a.o;
    jn(this, a);
    this.fa.style.display = "none";
    this.zg.forEach(function(p) {
        return p.style.display = "none"
    });
    var c = kn(255);
    this.zg.forEach(function(p) {
        return p.src = c
    });
    var d = Q(a);
    if (rj(lk(b))) {
        this.ti = !1;
        d && d.u.length == this.Ja[0].length || (this.Ja[0].forEach(function(p) {
            return p.remove()
        }), this.Ja[0] = []);
        if (d && d.u.length != this.Ja[0].length) {
            this.Ja[0] = [];
            for (var e = 0; e < d.u.length; e++) {
                var f = this.ni(this.Ba[d.j]);
                this.Ja[0].push(f)
            }
        }
        if (d && 0 < d.u.length) {
            e = Dn(this, d);
            for (var h = f = 0; h < d.u.length; h++) yn(this, d.u[h]) || A(this.Ja[0][h], e[f++])
        }
        this.Ja[0].forEach(function(p) {
            return p.style.visibility = "hidden"
        });
        for (d = 0; 3 > d; d++) {
            this.Md[d].style.display = "none";
            for (e = 0; 17 > e; e++) f = this.vb[d][e], this.qd[d][e].style.display = "none", f.style.display = "none";
            for (e = 0; 3 > e; e++) this.pd[d][e].style.display = "none"
        }
        for (d = 0; d < b.v; d++) {
            e = this.pd[d];
            f = this.Md[d];
            h = this.$f[d];
            A(f, h);
            f.style.lineHeight = h.height() + "px";
            for (f = 0; 17 > f; f++) {
                h =
                    this.qd[d][f];
                var n = this.vb[d][f];
                A(h, this.Rb[d][f]);
                A(n, this.Rb[d][f]);
                h.style.display = "none";
                n.style.display = "block"
            }
            for (f = 0; 3 > f; f++) e[f].style.display = "none";
            B(e[0], nb(this.Rb[d][0]));
            B(e[1], nb(this.Rb[d][3]));
            B(e[2], nb(this.Rb[d][8]))
        }
    } else mn(this);
    for (d = 0; d < b.v; d++) this.ek(a.v[d], a);
    this.Qi(b, a);
    pn(this, a.oa);
    En(this);
    return !0
};

function el(a) {
    null == a.Aa && a.Yb(new gb(0, 0, window.innerWidth, window.innerHeight));
    var b = null;
    a.g ? b = a.g.o : a.Ac && (b = a.Ac.o);
    if (b && a.Cb.Ed) {
        a.Sf(a.g);
        var c = a.g,
            d = a.Cb.Le;
        var e = 0;
        for (var f = ba(c.oa), h = f.next(); !h.done; h = f.next()) e += h.value;
        e += c.ob;
        a.ri.textContent = 0 < e ? r("_tPot") + " " + sn(a, e) : "";
        255 == c.cg ? a.fb.style.display = "none" : (a.fb.textContent = r("_tKillPot"), e = Am(a, d.Ol), B(a.fb, e), a.fb.style.display = "block");
        if (rj(lk(b))) {
            a: {
                for (b = 0; b < c.o.v; b++)
                    if (c.v[b].dl) {
                        c = !0;
                        break a
                    } c = !1
            }
            c ? z || (a.fb.textContent =
                r("_tFantasyland"), d = Am(a, d.Nl), B(a.fb, d), a.fb.style.display = "block") : a.fb.style.display = "none"
        }
    }
}

function Jm(a, b) {
    b = nn(a, a.Cb.Ed.Ga[b]);
    var c = a.Aa.height() * R.b.qh * .4,
        d = a.Aa.height() * R.b.qh,
        e = a.Aa.height() * R.b.qh * .3;
    a = new gb(b.x, b.y, b.x + 2 * e, b.y + 2 * e);
    a.offset(-a.width() / 2, -a.height() / 2);
    c = new gb(b.x, b.y, b.x + d, b.y + c);
    c.offset(0, -c.height() / 2);
    c.offset(0, .7 * a.height());
    d = .6 * e;
    return {
        da: a,
        Ne: c,
        Wg: new gb(b.x, b.y, b.x + 2 * d, b.y + 2 * d)
    }
}
g.Dk = function(a) {
    var b = this.gb[a];
    a = Fn(this, this.g.v[a], b);
    b.children[0].textContent = a.ka;
    b.children[1].textContent = a.Tl
};

function Gn(a, b, c, d, e) {
    a = Fn(a, c, e);
    d.style.display = "flex";
    e.style.display = "flex";
    e.f = c.f;
    d = e.f + "_color";
    var f = window.localStorage.hasOwnProperty(e.f + "_notes"),
        h = e.firstChild;
    f = f ? "dimgrey" : "";
    var n = rc(d);
    m(n) || (f = Hn(rc(d)));
    h.style.background = f;
    e.children[0].textContent = a.ka;
    e.children[1].textContent = a.Tl;
    In(b, c, e)
}

function In(a, b, c) {
    a.lc == Fd ? c.style.opacity = b.ec ? "" : .6 : b.td ? c.style.opacity = .6 : c.style.opacity = ""
}

function Jn(a, b, c) {
    c.f = b.f;
    var d = Kn(b.f);
    d && (c.children[0].src = d.src);
    In(a, b, c)
}

function Ln(a, b) {
    var c = "";
    switch (a) {
        case oe:
        case qe:
        case Le:
        case Pe:
            1 >= b && (c = "1 Draw Remaining");
            break;
        case ye:
        case pe:
        case le:
        case ne:
        case me:
        case ze:
            1 >= b ? c = "3 Draws Remaining" : 3 >= b ? c = "2 Draws Remaining" : 5 >= b && (c = "1 Draw Remaining");
            break;
        case Me:
            1 >= b ? c = "2 Draws Remaining" : 3 >= b && (c = "1 Draw Remaining")
    }
    return c
}

function Mn(a, b, c) {
    if (uj(lk(c.o))) {
        var d = nn(a, a.Cb.Ed.oh[gn(c, b.j)]);
        if (0 >= b.Bc.length) b.jf && (b = a.ub[b.j], b.style.display = "block", b.textContent = r("_tPass"), b.style.fontSize = 1.5 * a.c + "px", B(b, d));
        else {
            b = a.Id[b.j];
            b.forEach(function(f) {
                return f.style.display = "block"
            });
            var e = a.$.M;
            2 < b.length && (e *= .38);
            d.x -= (a.$.M + (b.length - 1) * e) / 2;
            d.y -= a.$.ba / 2;
            b.forEach(function(f) {
                var h = new gb;
                hb(h, d, a.$);
                A(f, h);
                d.x += e
            })
        }
    }
}

function Nn(a, b, c) {
    var d = lk(c.o);
    if (rj(d)) {
        var e = gn(c, b.j),
            f = a.qd[e],
            h = a.pd[e];
        f.forEach(function(p) {
            return p.style.display = "none"
        });
        if (c.th && !b.Ud && b.Sd)
            for (var n = 0; 3 > n; n++) 1 == n && de == d.l ? On(h[n], b.Sd[n], b.Qd[n]) : Pn(h[n], b.Sd[n], b.Qd[n]);
        d = a.Md[e];
        d.style.display = "none";
        b.Ud && (d.style.display = "block");
        for (d = 0; 17 > d; d++)
            if (h = b.Jb[d], !a.ma || h != a.P)
                if (e = f[d], e.qa = h, e.style.opacity = "", void 0 != h && 254 != h && (e.src = kn(h), e.alt = ln(h), e.style.display = "block", e.style.filter = h == a.B ? "brightness(70%)" : "", e.style.border =
                        "", c.th && (n = c.th.uh[b.j])))
                    if (h = n.ig.get(h)) e.src = kn(h), e.style.opacity = .5
    }
}

function Qn(a) {
    if (a.b && a.g && Wj(a.g.o.h) && a.b.od && a.b.xe) {
        a.b.Eo.textContent = l("_tLevel") + " " + a.b.Df;
        var b = mk(a.b.od.O.Bd, a.b.od.O.ib, a.b.od.O.Lb, !0),
            c = mk(a.b.xe.O.Bd, a.b.xe.O.ib, a.b.xe.O.Lb, !0);
        rj(a.g.o.X) && (b = y(a.b.od.O.hc, !0) + "/" + l("_tPoint"), c = y(a.b.xe.O.hc, !0) + "/" + l("_tPoint"));
        a.b.Co.textContent = b;
        a.b.Go.textContent = c;
        a.b.Un.textContent = Fb(a.b.Pg);
        a: switch (a.b.Ia) {
            case wd:
            case vd:
                b = !0;
                break a;
            default:
                b = !1
        }
        b && !a.b.Uh && (a.b.Uh = setInterval(function() {
            a.b.Pg--;
            0 > a.b.Pg && (a.b.Pg = 0);
            a.b.Un.textContent =
                Fb(a.b.Pg)
        }, 1E3));
        a.b.xd.textContent = a.b.zd + "/" + a.b.kb;
        a.b.Bo.textContent = y(a.b.xj, !0);
        a.b && (a.b.Ho.textContent = (0 == a.b.tb ? "-" : a.b.tb) + "/" + a.b.zd.toLocaleString())
    }
}

function Fn(a, b, c) {
    var d = !0;
    if (b.ec && 0 == b.T) var e = r("_tAllIn");
    else b.ye ? e = r("_tDisconnected") : b.td ? e = r("_tSittingOut") : (e = sn(a, b.T), 0 < b.be && (e += " (" + sn(a, b.T + b.be) + ")"), d = !1);
    d ? (d = sn(a, b.T), 0 < b.be && (d += " (" + sn(a, b.T + b.be) + ")"), c.title = d) : c.title = "";
    a = a.mc.Db[b.j];
    b = rd != a.rd ? Rn(a.rd, a.Lg).toUpperCase() : b.kf ? r("_tReserved") : Sn(b.f);
    return {
        Tl: e,
        ka: b
    }
}

function Cn(a, b, c) {
    var d = [];
    a = Jm(a, b);
    a = new gb(jb(a.da), a.da.top, a.da.right, a.da.top + .4 * a.da.height());
    a.left = a.right - 5 * a.height() / 7;
    for (b = 0; b < c; b++) d.push(a.duplicate()), a.offset(-a.width() / 3, -a.height() / 8);
    return d
}

function Bn(a, b, c, d, e) {
    var f = new v,
        h = [],
        n = a.$.M,
        p = a.$.ba,
        q = 0;
    if (2 == c && d.l != Ge && d.l != He) q = n;
    else if (z)
        if (0 == b) {
            var u = 1;
            1 < c && (u = Math.min((n + 3.2 * n - n) / (c - 1) / n, 1));
            q = n * u
        } else q = .4 * n;
    else q = .38 * n;
    u = n + (c - 1) * q;
    for (var w = 0; w < c; w++) h[w] = new gb(f.x, f.y, f.x + n, f.y + p), ok(d) && (d.l != Be || 10 != e.g && 0 != e.g ? 2 <= w && 5 >= w && h[w].offset(0, .1 * -p) : 2 == w && h[w].offset(0, .1 * -p)), f.x += q;
    c = Jm(a, b);
    var x = jb(c.da) - u / 2,
        I = c.da.top + .55 * c.da.height() - h[0].bottom;
    d = a.Cb.Ed;
    n *= 1.38;
    0 > d.Ga[b][0] ? x = jb(c.da) + n / 2 - u : 0 < d.Ga[b][0] && (x = jb(c.da) - n /
        2);
    h.forEach(function(J) {
        return J.offset(x, I)
    });
    b = h[0].duplicate();
    for (n = 1; n < h.length; n++) b.left = Math.min(b.left, h[n].left), b.top = Math.min(b.top, h[n].top), b.right = Math.max(b.right, h[n].right), b.bottom = Math.max(b.bottom, h[n].bottom);
    x = I = 0;
    0 > b.top && (I = -b.top);
    0 > b.left ? x = -b.left : b.right > a.G.right && (x = a.G.right - b.right);
    b.offset(x, I);
    h.forEach(function(J) {
        return J.offset(x, I)
    });
    return h
}

function En(a) {
    var b = a.g;
    if (b.ue && 0 != b.ue.vh.length && !a.jc) {
        var c = D(a.Y, "style_flex_row style_big2_result");
        a.jc = c;
        c.style.fontSize = a.c + "px";
        B(c, pb(a.Aa));
        c.style.border = "2px solid grey";
        c.style.backgroundColor = "rgba(0, 0, 0,0.75)";
        var d = D(c, "");
        d.style.display = "table";
        c = D(d, "row");
        var e = 2.5 * a.c + "px";
        c.style.lineHeight = e;
        D(c, "style_cell", "Player");
        D(c, "style_cell", "Cards");
        D(c, "style_cell", "Points");
        var f = [null, null, "center"];
        tc(c, f);
        b.ue.vh.forEach(function(h) {
            var n = D(d, "row");
            n.style.lineHeight =
                e;
            D(n, "style_cell", Sn(h.f));
            if (0 == h.D.length) {
                var p = D(n, "style_cell", "Winner");
                p.style.color = "greenyellow";
                p = D(n, "style_cell", "+" + h.Ph);
                p.style.color = "greenyellow"
            } else {
                var q = D(n, "style_cell"),
                    u = 2 * a.c,
                    w = 5 * u / 7,
                    x = 0;
                h.D.forEach(function(I) {
                    I = C(q, "style_card", "./images/decks/preview/" + I + ".png");
                    I.style.height = u + "px";
                    I.style.width = w + "px";
                    2 < h.D.length && (I.style.transform = "translateX(-" + 33 * x++ + "%)")
                });
                p = D(n, "style_cell", h.Ph);
                0 < h.Ph ? p.style.color = "greenyellow" : 0 > h.Ph && (p.style.color = "salmon");
                q.style.maxWidth =
                    (2 >= h.D.length ? w * h.D.length : w + (h.D.length - 1) * w * .67) + "px";
                q.style.overflow = "visible"
            }
            tc(n, f)
        })
    } else b.ue && 0 != b.ue.vh.length || !a.jc || (a.jc.remove(), a.jc = null)
}
var Tn = "2c 2d 2h 2s 3c 3d 3h 3s 4c 4d 4h 4s 5c 5d 5h 5s 6c 6d 6h 6s 7c 7d 7h 7s 8c 8d 8h 8s 9c 9d 9h 9s Tc Td Th Ts Jc Jd Jh Js Qc Qd Qh Qs Kc Kd Kh Ks Ac Ad Ah As".split(" ");

function ln(a) {
    return 0 <= a && 52 > a ? Tn[a] : "X"
}

function gn(a, b) {
    if (!a) return b;
    var c = Q(a);
    c && (b -= c.j, 0 > b && (b += a.v.length));
    return b
}
var wn = [1, 5, 25, 100, 500, 2500, 1E4, 5E4, 1E5, 5E5, 25E5, 1E7, 5E7, 1E8, 5E8, 25E8, 1E10, 5E10],
    Un = " _tStraightFlush _tQuads _tFullHouse _tFlush _tStraight _tTrips _tTwoPair _tOnePair".split(" ");

function Vn(a, b) {
    return b ? 6185 < a ? Kc : 3325 < a ? Lc : 2467 < a ? Mc : 1609 < a ? Nc : 1599 < a ? Oc : 1443 < a ? Qc : 166 < a ? Pc : 10 < a ? Rc : Sc : 6185 < a ? Kc : 3325 < a ? Lc : 2467 < a ? Mc : 1609 < a ? Nc : 1599 < a ? Oc : 322 < a ? Pc : 166 < a ? Qc : 10 < a ? Rc : Sc
}
var Wn = "Two Three Four Five Six Seven Eight Nine Ten Jack Queen King Ace".split(" ");

function Xn(a) {
    return 1 == a ? "9 Low" : 2 == a ? "8 Low" : 3 == a ? "7 Low" : ""
}

function On(a, b, c) {
    0 >= b || (a.style.display = "block", a.textContent = Xn(c) + " +" + b)
}

function Pn(a, b, c) {
    0 >= b || (a.style.display = "block", a.textContent = (c < Un.length ? l(Un[c]) : "") + " +" + b)
}

function Xk(a) {
    return 0 != a && R.f == a
}

function Rn(a, b) {
    switch (a) {
        case jd:
            return "Post Blind";
        case Vc:
            return l("_tFold");
        case Wc:
            return l("_tCheck");
        case Xc:
            return l("_tCall");
        case Yc:
            return l("_tBet");
        case $c:
            return l("_tRaise");
        case ed:
            return l("_tSmallBlind");
        case fd:
            return l("_tBigBlind");
        case ld:
            return l("_tStraddle");
        case md:
            return l("_tKillBlind");
        case gd:
            return l("_tAnte");
        case ad:
            return l("_tBringIn");
        case od:
            return l("_tBringIn");
        case hd:
            return l("_tRebuy");
        case id:
            return l("_tAddOn");
        case dd:
            return l("_tFoul");
        case cd:
            return l("_tPlace");
        case nd:
            return b ? l("_tPlace") + " " + b : l("_tPass");
        case bd:
            return b ? l("_tDiscard") + " " + b : l("_tStandPat");
        case pd:
            return l("_tFlip");
        case qd:
            return l("_tTwist")
    }
    return "Error"
}

function Yn(a, b, c) {
    var d = lk(c.o);
    c = Sn(c.v[a.j].f);
    switch (d.l) {
        case Wd:
        case Xd:
        case Ge:
        case Ee:
        case ve:
        case Yd:
        case Zd:
        case Re:
        case Oe:
        case $d:
        case ee:
        case oe:
        case Me:
        case Ne:
            var e = !1;
            if (Ee == d.l || ve == d.l) e = !0;
            var f = a.pa.Kb[0];
            d = "";
            if (0 != f.Z) {
                var h = Zn(f.Z, f.D, e);
                f = $n(f.D);
                2 == a.pa.Ke && (d = l("_tRun") + " 1: ");
                b.push(ao(l("_tHas"), d, c, f, h));
                2 == a.pa.Ke && (f = a.pa.Kb[1], h = Zn(f.Z, f.D, e), f = $n(f.D), b.push(ao(l("_tHas"), l("_tRun") + " 2: ", c, f, h)))
            }
            break;
        case ge:
        case he:
        case ie:
        case Se:
        case Qe:
        case fe:
        case Be:
        case je:
        case He:
            f =
                a.pa.Kb[0];
            e = a.pa.Td[0];
            d = "";
            2 == a.pa.Ke && (d = l("_tRun") + " 1: ");
            0 != f.Z && (h = Zn(f.Z, f.D, !1), f = $n(f.D), b.push(ao(l("_tHasHand"), d, c, "high", f, h)), 0 != e.Z && (h = bo(e.Z), b.push(ao(l("_tHasLowHand"), d, c, "low", h))));
            2 == a.pa.Ke && (d = l("_tRun") + " 2: ", f = a.pa.Kb[1], a = a.pa.Td[1], 0 != f.Z && (h = Zn(f.Z, f.D, !1), f = $n(f.D), b.push(ao(l("_tHasHand"), d, c, "high", f, h))), 0 != a.Z && (h = bo(a.Z), b.push(ao(l("_tHasLowHand"), d, c, "low", h))));
            break;
        case ke:
        case Te:
        case ye:
        case Le:
            f = a.pa.Kb[0];
            h = bo(f.Z);
            b.push(ao(l("_tHasLow"), c, h));
            break;
        case pe:
        case Fe:
            a = a.pa.Kb[0];
            a.D.sort(function(n, p) {
                return p - n
            });
            f = $n(a.D);
            b.push(ao(l("_tHasLowballHand"), c, f));
            break;
        case qe:
            d = "";
            2 == a.pa.Ke && (d = l("_tRun") + " 1: ");
            h = a.pa.Kb[0];
            h.D.sort(function(n, p) {
                return p - n
            });
            b.push(d + ao(l("_tHasLowballHand"), c, $n(h.D)));
            2 == a.pa.Ke && (d = l("_tRun") + " 2: ", a = a.pa.Kb[1], a.D.sort(function(n, p) {
                return p - n
            }), b.push(d + ao(l("_tHasLowballHand"), c, $n(a.D))));
            break;
        case le:
            f = a.pa.Kb[0];
            f = co(f.D);
            b.push(ao(l("_tHasBadugiHand"), c, f));
            break;
        case Ce:
            h = a.pa.Kb[0];
            d = Zn(h.Z, h.D,
                !1);
            h = $n(h.D);
            b.push(ao(l("_tHasHand"), "", c, "Omaha", h, d));
            h = a.pa.Td[0];
            d = Zn(h.Z, h.D, !1);
            h = $n(h.D);
            b.push(ao(l("_tHasHand"), "", c, "5 Card", h, d));
            break;
        case De:
            h = a.pa.Kb[0];
            d = Zn(h.Z, h.D, !1);
            h = $n(h.D);
            b.push(ao(l("_tHasHand"), "", c, "Omaha", h, d));
            h = a.pa.Td[0];
            h.D.sort(function(n, p) {
                return p - n
            });
            h = $n(h.D);
            b.push(ao(l("_tHasLowballHand"), c, h));
            break;
        case Ke:
            h = a.pa.Kb[0];
            d = Zn(h.Z, h.D, !1);
            h = $n(h.D);
            b.push(ao(l("_tHasHand"), "", c, "Omaha", h, d));
            h = a.pa.Td[0];
            h.D.sort(function(n, p) {
                return p - n
            });
            h = $n(h.D);
            b.push(ao(l("_tHasLowHand"),
                "", c, l("_tBadugi"), h));
            break;
        case ze:
            d = a.pa.Kb[0], a = a.pa.Td[0], 0 != d.Z && (h = Zn(d.Z, d.D, !1), d = $n(d.D), b.push(ao(l("_tHasHand"), "", c, "high", d, h)), 0 != a.Z && (a = bo(a.Z), b.push(ao(l("_tHasLowHand"), "", c, "low", a))))
    }
}

function eo(a, b) {
    for (var c = 0; c < a.length; c++) {
        var d = b.get(a[c]);
        d && (a[c] = d)
    }
}

function fo(a, b, c) {
    a = a.cf;
    for (var d = 0; d < c.v.length; d++) {
        var e = c.v[d];
        if (e.ec) {
            var f = a.uh[d];
            if (f.Ud) f = Sn(e.f) + " has foul hand";
            else {
                var h = f.D.slice(0, 3);
                eo(h, f.ig);
                h = go(f.ko, h, !1);
                var n = f.D.slice(3, 8);
                eo(n, f.ig);
                n = de == c.o.S.l ? Xn(e.Qd[1]) : go(f.lo, n, !1);
                var p = f.D.slice(8, 13);
                eo(p, f.ig);
                f = go(f.jo, p, !1);
                f = Sn(e.f) + " has [ " + h + " / " + n + " / " + f + " ]"
            }
            b.push(f)
        }
    }
    d = 2 == a.kb ? 1 : 3 == a.kb ? 3 : 4 == a.kb ? 6 : 0;
    for (e = 0; e < d; e++) f = a.Wk[e], h = c.v[f.Ln], n = c.v[f.Mn], 0 > f.V ? (f = Sn(h.f) + " pays " + Sn(n.f) + " " + y(-f.V, void 0), b.push(f)) :
        0 < f.V && (f = Sn(n.f) + " pays " + Sn(h.f) + " " + y(f.V, void 0), b.push(f));
    for (d = 0; d < c.v.length; d++) switch (e = c.v[d], a.Xk[d]) {
        case Tc:
            f = Sn(e.f) + " cannot participate in Fantasyland, no actionable chips";
            b.push(f);
            break;
        case Uc:
            f = Sn(e.f) + " cannot enter Fantasyland, no actionable chips", b.push(f)
    }
}

function ho(a, b, c) {
    for (var d = 0; d < a.oa.length; d++) {
        var e = a.oa[d],
            f = y(e.V, Wj(c.ya()));
        e = Sn(c.v[e.j].f);
        1 == a.oa.length ? 0 == a.ce ? b.push(ao(l("_tWinsPot"), e, f)) : b.push(ao(l("_tWinsSidePot"), e, a.ce, f)) : 0 == a.ce ? b.push(ao(l("_tWinsFromPot"), e, f)) : b.push(ao(l("_tWinsFromSidePot"), e, f, a.ce))
    }
}

function ao(a, b, c, d, e, f) {
    void 0 != b && (a = a.replace("%1", b), void 0 != c && (a = a.replace("%2", c), void 0 != d && (a = a.replace("%3", d), void 0 != e && (a = a.replace("%4", e), void 0 != f && (a = a.replace("%5", f))))));
    return a
}

function co(a) {
    for (var b = [], c = "", d = 0; d < a.length; d++) {
        var e = parseInt(a[d] / 4);
        12 == e ? e = 0 : e++;
        b.push(e)
    }
    b.sort(function(f, h) {
        return h - f
    });
    for (d = 0; d < b.length; d++) m(c) || (c += " "), c += io.charAt(b[d]);
    return c
}

function $n(a) {
    for (var b = "", c = 0; c < a.length; c++) {
        m(b) || (b += " ");
        var d = a[c];
        b += 255 == d ? "X" : 254 == d ? "-" : 0 > d || 51 < d ? "?" : jo.charAt(parseInt(d / 4)) + ko.charAt(d % 4)
    }
    return b
}
var io = "A23456789TJQK",
    jo = "23456789TJQKA",
    ko = "cdhs";

function bo(a) {
    for (var b = "", c = 0, d = 12; 0 <= d; d--) {
        var e = 1 << d;
        e == (a & e) && (0 != c && (b += " "), b += io[d], c++)
    }
    return 5 > c ? "" : b
}

function Zn(a, b, c) {
    var d = "";
    a = Vn(a, c);
    if (Kc == a) d = l("_tHighCard") + ", " + Wn[lo(b)];
    else if (Oc == a) d = lo(b), b = mo(b), Hc == b && Jc == d && (d = Ic), d = l("_tStraight") + ", " + Wn[d] + " " + l("_tHigh");
    else if (Pc == a) d = l("_tFlush") + ", " + Wn[lo(b)] + " " + l("_tHigh");
    else if (Sc == a) d = lo(b), b = mo(b), Hc == b && Jc == d && (d = Ic), d = l("_tStraightFlush") + ", " + Wn[d] + " " + l("_tHigh");
    else if (b = no(b), Lc == a)
        for (a = 0; 12 >= a; a++) {
            if (2 == b[a]) return l("_tOnePair") + ", " + Wn[a] + "s"
        } else {
            if (Mc == a) {
                d = [];
                for (a = 12; 0 <= a; a--) 2 == b[a] && d.push(a);
                return l("_tTwoPair") +
                    ", " + jo.charAt(d[0]) + "s & " + jo.charAt(d[1]) + "s"
            }
            if (Nc == a)
                for (a = 12; 0 <= a; a--) {
                    if (3 == b[a]) return l("_tTrips") + ", " + jo.charAt(a) + "s"
                } else {
                    if (Qc == a) {
                        c = d = 0;
                        for (a = 12; 0 <= a; a--) 2 == b[a] ? c = a : 3 == b[a] && (d = a);
                        return l("_tFullHouse") + ", " + jo.charAt(d) + "s & " + jo.charAt(c) + "s"
                    }
                    if (Rc == a)
                        for (a = 12; 0 <= a; a--)
                            if (4 == b[a]) return l("_tQuads") + ", " + jo.charAt(a) + "s"
                }
        }
    return d
}

function go(a, b, c) {
    var d = "";
    a = Vn(a, c);
    if (Kc == a) d = l("_tHighCard") + " " + jo.charAt(lo(b));
    else if (Oc == a) d = l("_tStraight");
    else if (Pc == a) d = l("_tFlush");
    else if (Sc == a) d = l("_tStraightFlush");
    else if (b = no(b), Lc == a)
        for (a = 0; 12 >= a; a++) {
            if (2 == b[a]) return l("_tOnePair") + ", " + jo.charAt(a) + "s"
        } else {
            if (Mc == a) {
                d = [];
                for (a = 12; 0 <= a; a--) 2 == b[a] && d.push(a);
                return l("_tTwoPair") + ", " + jo.charAt(d[0]) + "s & " + jo.charAt(d[1]) + "s"
            }
            if (Nc == a) return l("_tTrips");
            if (Qc == a) return l("_tFullHouse");
            if (Rc == a) return l("_tQuads")
        }
    return d
}

function lo(a) {
    for (var b = 0, c = 0; c < a.length; c++) {
        var d = Math.floor(a[c] / 4);
        if (d == Jc) return Jc;
        d > b && (b = d)
    }
    return b
}

function mo(a) {
    for (var b = Jc, c = 0; c < a.length; c++) {
        var d = Math.floor(a[c] / 4);
        if (d == Hc) return Hc;
        d < b && (b = d)
    }
    return b
}

function no(a) {
    for (var b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], c = 0; c < a.length; c++) b[Math.floor(a[c] / 4)]++;
    return b
}

function oo() {
    rm.call(this, "_tPlayerNotes", null, ["_tCancel", Qb, "_tSave", function() {
        var h = a.m,
            n = h.f + "_notes",
            p = h.f + "_color",
            q = h.f + "_bc",
            u = h.Gh.value.trim();
        m(u) ? sc(n) : K(n, u);
        m(h.Zh) ? sc(p) : K(p, h.Zh);
        h.rl.checked ? K(q, "1") : sc(q);
        Qb.bind(h)();
        po();
        S((new Ul(h.f, u, h.Zh)).J())
    }]);
    var a = this,
        b = this.m;
    b.Gh = Bb(b, "textarea", void 0, void 0, void 0);
    b.Gh.className = "style_player_notes_textarea table_font";
    b.Rn = D(b, "style_player_notes_colors");
    var c = " blue red orange green yellow brown magenta".split(" ");
    b.cj = [];
    for (var d = null, e = {}, f = 0; f < c.length; e = {
            je: e.je
        }, f++) 0 == f % 4 && (d = D(b.Rn, "style_flex_row"), d.style.justifyContent = "space-between"), e.je = D(d, "style_player_notes_color_button"), e.je.style.backgroundColor = c[f], e.je.addEventListener("click", function(h) {
        return function() {
            b.cj.forEach(function(n) {
                return n.style.borderColor = ""
            });
            h.je.style.borderColor = "gold";
            b.Zh = h.je.style.backgroundColor
        }
    }(e)), b.cj.push(e.je);
    b.rl = $b(b, "Block Chat", "style_dialog_control");
    new Gc(b, 250, 350);
    tm(this)
}
k(oo, rm);

function Hn(a) {
    if (m(a)) return "";
    0 == qo.size && [
        ["blue", "rgba(0,0,255,0.8)"],
        ["red", "rgba(255,0,0,0.8"],
        ["orange", "rgba(255,165,0,0.8)"],
        ["green", "rgba(0,128,0,0.8)"],
        ["yellow", "rgba(255,255,0,0.8)"],
        ["brown", "rgba(165,42,42,0.8)"],
        ["magenta", "rgba(255,0,255, 0.8)"]
    ].forEach(function(b) {
        return qo.set(b[0], b[1])
    });
    return (a = qo.get(a)) ? a : ""
}
oo.prototype.ga = function(a) {
    var b = this.m;
    b.f = a;
    Xb(b.rl, null != rc(a + "_bc"));
    var c = a + "_color";
    a = rc(a + "_notes");
    null != a ? b.Gh.value = a : b.Gh.value = "";
    var d = rc(c);
    m(d) && (d = "");
    b.Zh = d;
    b.cj.forEach(function(e) {
        e.style.borderColor = e.style.backgroundColor == d ? "gold" : ""
    });
    Ob(b)
};
var qo = new Map;

function ro() {
    um.call(this);
    this.B = 254;
    this.La = 0;
    this.Xj = this.dd = null;
    this.Uc = this.yb = this.xb = this.rb = !1;
    this.zb = this.Wc = 0;
    this.sg = 255;
    this.Da = 0;
    this.jn = new Li;
    this.Na = this.Ma = this.dg = 0;
    this.ab = [];
    this.we = [];
    this.uk = 0;
    this.Wi = new rb;
    this.hj = !1;
    this.Xi = 255;
    this.ei = !1
}
k(ro, um);
g = ro.prototype;
g.gh = function() {
    z || (this.sa.Zd.textContent = "", this.sa.ul.textContent = "", this.sa.style.display = "none", this.b && (this.b.display = "none"));
    this.ua.textContent = "";
    this.ua.style.display = "none";
    for (var a = 0; a < this.Ja.length; a++) {
        var b = this.Ja[a];
        b && (b.forEach(function(c) {
            return c.remove()
        }), this.Ja[a] = [])
    }
    this.Id.forEach(function(c) {
        c.forEach(function(d) {
            return d.remove()
        });
        c.length = 0
    });
    this.ub.forEach(function(c) {
        return c.style.display = "none"
    });
    this.di.forEach(function(c) {
        return c.style.display = "none"
    });
    this.af.forEach(function(c) {
        return c.style.display = "none"
    });
    this.Nd.forEach(function(c) {
        return c.style.display = "none"
    });
    this.sd.forEach(function(c) {
        return c.style.display = "none"
    });
    this.gb.forEach(function(c) {
        return c.style.display = "none"
    });
    this.cd.forEach(function(c) {
        return c.style.display = "none"
    });
    this.Pb.forEach(function(c) {
        return c.style.display = "none"
    });
    this.oi.forEach(function(c) {
        return c.style.display = "none"
    });
    a = ba(this.Zb);
    for (b = a.next(); !b.done; b = a.next())
        if (b = b.value) b.style.display = "none";
    this.U.style.display = "none";
    this.md.style.display = "none";
    this.jc && (this.jc.style.display = "none");
    this.qe.style.display = "none"
};
g.Qi = function(a, b) {
    um.prototype.Qi.call(this, a, b);
    for (var c = 0; c < a.v; c++) {
        var d = Jm(this, gn(b, c)),
            e = this.Nd[c],
            f = this.cd[c],
            h = this.bj[c],
            n = pb(d.da),
            p = pb(this.Aa),
            q = p.y - n.y;
        n.x += .3 * (p.x - n.x);
        n.y += .3 * q;
        B(h, n);
        B(e, mb(d.Wg));
        B(f, mb(d.Wg));
        h = d.Wg.width();
        Eb(e, d.Wg.width(), d.Wg.height());
        e.style.fontSize = h + "px";
        e.style.lineHeight = h + "px";
        Eb(f, h, h);
        f.style.fontSize = h + "px";
        f.style.lineHeight = h + "px"
    }
    for (a = a.v; 10 > a; a++) this.Nd[a].style.display = "none", this.cd[a].style.display = "none"
};
g.Jd = function() {
    var a = this.g;
    if (!a) return this.gh(), !1;
    var b = a.o;
    if (rj(b.S)) this.s.src = "./images/chinese_horizontal.jpg", b.S.l == Ae ? this.s.style.filter = "hue-rotate(255deg)" : b.S.l == de && (this.s.style.filter = "hue-rotate(25deg)");
    else if (uj(b.S)) {
        this.s.src = "./images/chinese_horizontal.jpg";
        this.ci.style.display = "block";
        this.K.style.display = "flex";
        var c = b.S,
            d = 0;
        c.l == Ie ? (this.K.children[d++].src = "./images/cards-diamond.png", this.K.children[d++].src = "./images/cards-club.png", this.K.children[d++].src = "./images/cards-heart.png",
            this.K.children[d++].src = "./images/cards-spade.png") : c.l == Je && (this.K.children[d++].src = "./images/cards-club.png", this.K.children[d++].src = "./images/cards-heart.png", this.K.children[d++].src = "./images/cards-diamond.png", this.K.children[d++].src = "./images/cards-spade.png")
    } else this.s.src = z ? "./images/table_vertical_1.png" : "./images/table_horizontal_1.png";
    c = lk(a.o);
    d = "";
    Fd == a.lc && (d = Ln(c.l, a.g).toUpperCase());
    this.ua.textContent = d;
    this.ua.style.display = m(d) ? "none" : "block";
    c = "";
    if (R.Ca)
        if (m(this.Pe)) switch (a.lc) {
            case Dd:
                c =
                    "THIS TABLE IS CLOSED";
                break;
            case Pd:
                c = r("_tHandForHand");
                break;
            case Ed:
                c = r("_tWaitingForPlayers");
                2 < b.Nh && (c += " (MIN " + b.Nh + ")");
                break;
            case Ld:
                c = "SEATING PLAYERS";
                break;
            case Od:
                c = "TABLE IS PAUSED";
                break;
            case Id:
                c = "SELECTING GAME";
                break;
            case Kd:
                c = "THE TOURNAMENT IS ON A BREAK";
                break;
            case Jd:
                c = "THE TOURNAMENT WILL GO ON BREAK WHEN ALL HANDS HAVE COMPLETED ON OTHER TABLES";
                break;
            case Md:
                c = "WAITING FOR TOURNAMENT ADD-ONS TO BE COMPLETED";
                break;
            case Nd:
                c = "THE REBUY PERIOD WILL END WHEN HANDS HAVE COMPLETED ON OTHER TABLES"
        } else c =
            this.Pe.toUpperCase();
        else c = r("_tDisconnected");
    this.df.textContent = c;
    this.df.style.display = m(c) ? "none" : "block";
    return !0
};
g.Sf = function(a) {
    if (!um.prototype.Sf.call(this, a)) return !1;
    var b = a.$b;
    if (10 > b) {
        var c = Jm(this, gn(a, b));
        this.kc.textContent = this.zb;
        A(this.U, c.da);
        this.U.style.display = 0 < this.zb ? "flex" : "none";
        var d = c = "white",
            e = Q(a);
        null == a.I || null == e || e.j != b || this.Uc ? this.Oa.style.display = "none" : (this.yb && (c = "greenyellow"), 0 < a.I.Sg ? (this.Oa.style.display = "block", this.Oa.textContent = "" + a.I.Sg) : this.Oa.style.display = "none");
        a.v[b].ye && (d = c = "lightsalmon");
        null != a.I && this.Uc && (d = c = "greenyellow");
        this.U.style.color = d;
        this.U.style.borderColor =
            c
    } else this.U.style.display = "none";
    so(this);
    return !0
};

function to(a, b) {
    var c = Q(a.g);
    if (c && !a.rb) {
        var d = c.u.slice();
        c.u.sort(b);
        if (JSON.stringify(d) != JSON.stringify(c.u)) {
            a.Ma = 0;
            var e = a.Ja[0],
                f = Dn(a, c);
            b = new Map;
            for (var h = new Map, n = 0, p = 0; p < d.length; p++) h.set(d[p], e[p]), yn(a, d[p]) || (b.set(d[p], f[n]), n++);
            e.length = 0;
            c.u.forEach(function(x) {
                x = h.get(x);
                x.parentElement.appendChild(x);
                e.push(x)
            });
            d = Dn(a, c);
            n = f = 0;
            p = {};
            for (var q = 0; q < c.u.length; p = {
                    vc: p.vc,
                    Zg: p.Zg
                }, q++) {
                var u = c.u[q];
                if (!yn(a, u)) {
                    if (!mb(b.get(u)).We(mb(d[n]))) {
                        p.vc = h.get(u);
                        p.Zg = function(x) {
                            return function() {
                                m(x.vc.Oe) ||
                                    (uo(x.vc), x.vc.removeEventListener("animationend", x.Zg), vo(x.vc), a.Ma--, 0 == a.Ma && 0 != a.Na && (clearTimeout(a.Na), a.bd()))
                            }
                        }(p);
                        p.vc.addEventListener("animationend", p.Zg);
                        u = wo[n];
                        var w = mb(d[n]);
                        xo(u, ["0% { left: " + p.vc.style.left + "; top: " + p.vc.style.top + "; } ", "100% { left: " + w.x + "px; top: " + w.y + "px; } "]);
                        yo(p.vc, w);
                        p.vc.style.animationDelay = "";
                        f++;
                        zo(p.vc, "style_anim_" + n)
                    }
                    n++
                }
            }
            a.Ma = f;
            a.rb = !0;
            a.Na = setTimeout(function() {
                a.Na = 0;
                a.bd()
            }, 1E3)
        }
    }
}

function Ao(a) {
    if (!a.rb) {
        a.Ma = 0;
        for (var b = Q(a.g), c = a.Ja[b.j], d = An(a, b), e = new Map, f = new Map, h = 0; h < b.u.length; h++) e.set(b.u[h], d[h]), f.set(b.u[h], c[h]);
        a.ei = !a.ei;
        lk(a.g.o).l == Ie ? a.ei ? b.u.sort(Bo) : b.u.sort(Co) : a.ei ? b.u.sort(Do) : b.u.sort(Eo);
        c.length = 0;
        b.u.forEach(function(w) {
            w = f.get(w);
            w.parentElement.appendChild(w);
            c.push(w)
        });
        d = An(a, b);
        h = 0;
        for (var n = {}, p = 0; p < b.u.length; n = {
                wc: n.wc,
                $g: n.$g
            }, p++) {
            var q = b.u[p];
            if (!mb(e.get(q)).We(mb(d[p]))) {
                n.wc = f.get(q);
                n.$g = function(w) {
                    return function() {
                        m(w.wc.Oe) ||
                            (uo(w.wc), w.wc.removeEventListener("animationend", w.$g), vo(w.wc), a.Ma--, 0 == a.Ma && 0 != a.Na && (clearTimeout(a.Na), a.bd()))
                    }
                }(n);
                n.wc.addEventListener("animationend", n.$g);
                q = wo[p];
                var u = mb(d[p]);
                xo(q, ["0% { left: " + n.wc.style.left + "; top: " + n.wc.style.top + "; } ", "100% { left: " + u.x + "px; top: " + u.y + "px; } "]);
                yo(n.wc, u);
                n.wc.style.animationDelay = "";
                h++;
                zo(n.wc, "style_anim_" + p)
            }
        }
        a.Ma = h;
        a.rb = !0;
        a.Na = setTimeout(function() {
            a.Na = 0;
            a.bd()
        }, 1E3)
    }
}
g.dk = function() {
    this.zb--;
    0 < this.zb && (this.Wc = setTimeout(this.dk.bind(this), 1E3));
    this.kc.textContent = this.zb
};

function Fo(a) {
    var b = Jm(a, 0).da.width();
    a.kc.style.fontSize = 2.2 * a.c + "px";
    a.kc.style.lineHeight = 2.2 * a.c * .9 + "px";
    a.U.style.borderRadius = .5 * b + "px";
    a.U.style.fontSize = a.c + "px";
    a.Oa.style.fontSize = 1.3 * a.c + "px";
    a.Oa.style.lineHeight = 1.3 * a.c * .9 + "px"
}
g.ek = function(a, b) {
    var c = this,
        d = this.Cb.Ed,
        e = a.j,
        f = gn(b, a.j),
        h = this.Nd[e],
        n = this.sd[e],
        p = this.gb[e],
        q = this.cd[e];
    [h, n, p, q, this.ub[e], this.di[e], this.Pb[e], this.li[e]].forEach(function(la) {
        return la.style.display = "none"
    });
    var u = Q(b),
        w = this.Ja[e],
        x = this.Id[e];
    a.Bc.length != x.length && (x.forEach(function(la) {
        return la.remove()
    }), x.length = 0, a.Bc.forEach(function() {
        return x.push(C(c.Ba[e], "card"))
    }));
    var I = 0;
    a.Bc.forEach(function(la) {
        var Da = x[I++];
        Da.src = kn(la);
        Da.alt = ln(la);
        Da.qa = la;
        Da.style.display = "none"
    });
    var J = lk(b.o);
    if (!rj(J)) {
        if (a.u.length + a.pb.length != w.length) {
            w.forEach(function(la) {
                return la.remove()
            });
            for (var G = w.length = 0; G < a.u.length; G++) {
                var Z = C(this.Ba[a.j], "card");
                w.push(Z);
                u && a.j == u.j && Z.addEventListener("click", this.Pm.bind(this))
            }
            for (G = 0; G < a.pb.length; G++) {
                Z = C(this.Ba[a.j], "card");
                var ma = w[a.nc[G]];
                ma.parentElement.insertBefore(Z, ma.nextSibling);
                w.push(Z)
            }
        }
        w = this.Ja[e];
        for (G = 0; G < a.u.length; G++) Z = w[G], ma = a.u[G], Z.src = kn(ma), Z.alt = ln(ma), Z.qa = ma, Z.style.display = "none", Z.style.className =
            "card";
        for (G = 0; G < a.pb.length; G++) Z = w[G + a.u.length], ma = a.pb[G], Z.src = kn(ma), Z.alt = ln(ma), Z.qa = ma, Z.style.display = "none", Z.style.className = "card"
    }
    f = Jm(this, f);
    if (0 != a.f) {
        Nn(this, a, b);
        Mn(this, a, b);
        h = gn(b, a.j);
        zn(this, b, a, h);
        if (R.b.hf && u && 0 < this.we.length) {
            q = Bn(this, 0, this.we.length, J, b);
            for (this.Ni(q, this.we); this.we.length > this.ab.length;) J = C(this.Ba[u.j], "card"), J.style.filter = "brightness(50%)", this.ab.push(J);
            for (u = 0; u < this.ab.length; u++) J = this.ab[u], J.src = kn(this.we[u]), J.style.display = "block", A(J,
                q[u])
        } else 0 < this.ab.length && (this.ab.forEach(function(la) {
            return la.remove()
        }), this.ab = []);
        Jn(b, a, n);
        Gn(this, b, a, n, p);
        0 < a.lj && (p = this.li[e], p.style.display = "block", p.textContent = +a.lj, B(p, new v(f.da.right, f.da.top)));
        0 < a.Vd && (p = this.Pb[e], p.style.display = "block", 3 == a.Vd ? (p.textContent = "SB", p.title = "Must post small blind to re-enter game") : 2 == a.Vd ? (p.textContent = "BB", p.title = "Must post both blinds to re-enter game") : (p.textContent = "MB", p.title = "Must post big blind to enter game"));
        0 == a.ra ? n.Vc.style.display =
            "none" : (n.Vc.style.display = "flex", n.oj.textContent = y(a.ra, void 0), n.Vc.title = "Knocking out this player pays a bounty of " + y(a.ra, void 0));
        e == b.cg ? (this.fa.style.display = "block", this.fa.style.backgroundColor = "", this.fa.style.color = "", this.fa.title = "") : a.f == b.Oh && (this.fa.style.display = "block", this.fa.style.backgroundColor = "dimgrey", this.fa.style.color = "lightgrey", this.fa.title = "Can be the Kill next hand");
        tn(this, a);
        a = this.Zb[a.j];
        null != a && (b = Im(this, h, b), B(a, b), 0 < d.Ga[h][0] ? a.style.transform = "translate(-100%,-100%)" :
            0 > d.Ga[h][0] && (a.style.transform = "translate(0%,-100%)"))
    } else(d = this.Zb[a.j], null != d && (d.remove(), this.Zb[a.j] = null), wm(this)) || (a.kf ? (q.textContent = "R", q.style.display = "block") : u ? z || (q.textContent = "", q.style.display = "block") : h.style.display = "block")
};
g.Ni = function(a, b) {
    for (var c = 0; c < b.length; c++) this.Ra.has(b[c]) && a[c].offset(0, .1 * -a[0].height())
};
g.nm = function() {
    if (Wk(this.g)) this.yb = !0, this.$a();
    else {
        var a = this.g.$b;
        10 > a && (a = this.g.v[a], Q(this.g) ? X.Da.ga(a.f) : X.U.ga(a.f))
    }
};

function Hm(a, b, c) {
    var d = Q(a.g);
    if (d) {
        var e = d.Jb[c];
        if (Fk(d, e) || 254 == e) {
            var f = Go(d, b); - 1 != f ? d.Jb[f] = e : a.Ib.delete(e);
            d.Jb[c] = b;
            a.Ib.add(b)
        }
    }
}
g.Hm = function() {
    Ho(this, new Ql(this.ya(), Vk(this.g), nd, 0));
    return !0
};

function nl(a) {
    var b = new Ql(a.ya(), Vk(a.g), bd, 0);
    0 != a.Ra.size && (a.Ra.forEach(function(c) {
        return b.s.push(c)
    }), a.kj = !0, a.Ra.clear());
    uj(lk(a.g.o)) && (b.B = nd);
    Ho(a, b);
    return !0
}

function ol(a, b) {
    var c = Q(a.g);
    if (c) {
        c.u.length = 0;
        var d = new Ql(a.ya(), c.j, cd, 0);
        b && (d.c = 1);
        d.i = Array(13);
        for (b = 0; 13 > b; b++) {
            var e = c.Jb[b];
            a.Ib.has(e) ? d.i[b] = e : d.i[b] = 254
        }
        Ho(a, d);
        Io(a);
        return !0
    }
}

function Io(a) {
    a.Ib.clear();
    a.B = 254;
    a.P = 254;
    a.ma && (a.ma.remove(), a.ma = null)
}
g.Wm = function(a) {
    this.La = wb(this.La, 8, a.currentTarget.checked);
    this.Ve();
    this.Kd()
};
g.wm = function() {
    var a = Q(this.g);
    if (a) {
        var b = this.g.o;
        a.T < (rj(b.S) ? Math.min(50, b.ro) * b.O.hc : b.S.l == Ie ? 39 * b.O.hc : b.S.l == Je ? 240 * b.O.hc : 1) ? this.te.ga(a.T) : (this.La = wb(this.La, 2, !1), this.La = wb(this.La, 1, !1), this.Ve(), this.Kd())
    }
};
g.Ai = function() {
    ql(this)
};

function ql(a) {
    var b = a.g,
        c = Wc;
    0 != b.I.rc && (c = Xc);
    Ho(a, new Ql(a.ya(), Vk(b), c));
    rl(U.K);
    return !0
}
g.Vf = function() {
    Ho(this, new Ql(this.ya(), Vk(this.g), Vc, 0));
    Jo(this, !0);
    al(this) && (rl(U.P), this.$a());
    return !0
};
g.vm = function() {
    0 != this.g.I.rc || this.g.I.Ae ? this.Vf() : this.ln.ga()
};
g.$m = function(a) {
    S((new Jl(R.f, this.ya(), a.currentTarget.checked)).J())
};
g.um = function() {
    var a = new Ql(this.ya(), Vk(this.g), pd, 0);
    a.s.push(Q(this.g).u[0]);
    Ho(this, a)
};
g.Ym = function() {
    Ho(this, new Ql(this.ya(), Vk(this.g), qd, 0))
};
g.pm = function() {
    (lk(this.g.o).l == Be ? 2 == this.Ra.size : 1) && nl(this)
};
g.Um = function(a) {
    var b = Q(this.g);
    b && (a.currentTarget.checked || 0 != b.T ? (this.La = wb(this.La, 1, a.currentTarget.checked), this.La = wb(this.La, 2, !1), this.Ve(), this.Kd()) : this.te.ga(0))
};
g.Tm = function(a) {
    this.La = wb(this.La, 2, a.currentTarget.checked);
    this.Ve();
    this.Kd()
};
g.Om = function(a) {
    this.La = wb(this.La, 4, a.currentTarget.checked);
    this.Ve();
    this.Kd()
};
g.Ve = function() {
    S((new Dl(R.f, this.ya(), this.La, Bh)).J())
};

function Jo(a, b) {
    a.Ra.clear();
    var c = Q(a.g);
    c && (b && (a.we = c.u.slice()), c.u.length = 0)
}
g.Li = function() {
    var a = this.g;
    S((new Nl(R.f, a.o.h, a.Xa)).J())
};

function Ko(a) {
    if (a.dd) {
        var b = new Ol(R.f, a.g.o.h, a.dd.sc);
        a.Rc.forEach(function(c) {
            return b.D.push(c)
        });
        S(b.J())
    }
}

function Lo(a) {
    0 != a.Xj && (clearTimeout(a.Xj), a.Xj = 0)
}
g.sk = function() {
    this.dd = null;
    Jo(this);
    this.Li();
    Lo(this);
    this.$a()
};
g.Lm = function() {
    S((new Pl(R.f, this.ya(), this.g.Xa)).J());
    this.dd = null;
    Lo(this);
    this.$a()
};
g.Rm = function() {
    Ko(this);
    this.Li();
    this.dd = null;
    Lo(this);
    this.$a()
};
g.Kd = function() {
    this.vg.checked = vb(this.La, 1);
    this.wg.checked = vb(this.La, 2);
    this.Fh.checked = vb(this.La, 4);
    this.xg.checked = vb(this.La, 8)
};
g.ya = function() {
    return this.g ? this.g.o.h : null
};
g.km = function() {
    var a = this.g;
    Ho(this, new Ql(this.ya(), Vk(a), ad, a.o.O.Ic))
};
g.im = function() {
    var a = this.g;
    Ho(this, new Ql(this.ya(), Vk(a), Yc, a.I.Kc));
    rl(U.c)
};
g.$l = function() {
    this.zb--;
    var a = this.g;
    a && (8 == this.zb && Wk(a) && rl(U.ea, !0), 0 < this.zb ? this.Xf(this.sg) : (this.Wc = 0, this.sg = 255, Wk(a) && (this.Uc ? Mo(this) : this.yb ? (this.zb = a.I.Sg, this.Uc = !0, S((new T(R.f, this.ya(), fg)).J()), this.Xf(Vk(a))) : Mo(this))), this.kc.textContent = this.zb)
};

function Mo(a) {
    var b = a.g;
    b.I && (b.I.fl ? ol(a, !0) : (S((new Gl(R.f, a.ya())).J()), cl(a), a.xb = !1, a.yb = !1, a.Uc = !1))
}
g.Xf = function(a) {
    this.sg = a;
    this.Wc = setTimeout(this.$l.bind(this), 1E3)
};

function No(a) {
    0 != a.Wc && (clearTimeout(a.Wc), a.Wc = 0, a.zb = 0, a.sg = 255)
}

function Ho(a, b) {
    var c = a.g;
    a.yb && a.Uc ? (b.Kf = a.zb, b.Kj = 0) : c.I && (b.Kf = c.I.Sg, b.Kj = a.zb);
    b.yb = a.yb;
    b.zl = zb;
    S(b.J());
    a.g.I = null;
    cl(a);
    a.xb = !1;
    a.yb = !1;
    a.Uc = !1;
    al(a) && a.$a();
    No(a)
}

function pl(a, b) {
    var c = Yc;
    0 != b.rc && (c = $c);
    Ho(a, new Ql(a.ya(), Vk(a.g), c, b.ld));
    rl(U.c);
    return !0
}
g.mk = function() {
    z && this.nb && (this.nb.style.display = "none");
    var a = this.g,
        b = Yc;
    0 != a.I.rc && (b = $c);
    Ho(this, new Ql(this.ya(), Vk(a), b, this.Da));
    rl(U.c)
};

function Oo(a, b, c, d, e) {
    z || (a.Jk.style.display = "none");
    if (rj(d)) 0 != c.u.length && (b.W(Ji), 0 < a.Ib.size && b.W(ki), Po(a, c) ? a.$e.style.backgroundColor = "#18472D" : a.$e.style.backgroundColor = "red");
    else if (uj(d) && (0 < a.Ra.size && b.W(Gi), b.W(Ii)), e.I.cl) Qo(a), uj(d) ? (0 < a.Ra.size && b.W(fi), Ro(a)) : d.l == Ne ? b.W(Ki) : b.W(fi);
    else if (vb(d.Ka, 1024)) So(a, e.I.Kc, e, c), b.W(hi), b.W(gi);
    else switch (d.Qa) {
        case Rd:
        case Td:
            e.I.og ? (a.Ye.value = r("_tBringIn") + " " + sn(a, e.I.rc), b.W(pi)) : 0 == e.I.rc ? To(a, 0) : To(a, e.I.rc - c.za);
            if (e.I.rc < e.I.Kc) {
                if (!a.hj) {
                    z &&
                        (a.xb = !1);
                    var f = e.o;
                    c = 0 == R.b.ae ? f.O.Bd : f.O.ib;
                    ok(d) ? c = Math.floor(f.O.Lb / 2) : f.Pc ? c = f.O.Lb : d.l == Ne && (c = f.O.Ic);
                    0 == c && (c = 1);
                    f = e.I.Kc - e.I.ld;
                    var h = Math.floor(f / c);
                    0 < f % c && h++;
                    a.N && Uo(a.N, e.I.ld, e.I.Kc, c, e.I.ld);
                    a.Da = e.I.ld;
                    Vo(a);
                    c = 0 == e.g;
                    d = Td == d.Qa ? 8 : 0;
                    d += c ? 0 : 4;
                    for (f = 0; 4 > f; f++) h = a.Vj[f], h.Fd = R.b.bf[d + f], z && (h.Fd = R.xb[d + f]), h.In = c, m(h.Fd) ? (h.value = "", h.disabled = !0) : (h.disabled = !1, h.value = Wo(h.Fd, c));
                    a.hj = !0
                }
                z ? a.xb ? (b.W(hi), b.W(oi)) : (e.I.og || (e.I.Ae || b.W(ji), b.W(gi)), b.W(Ai)) : (e.I.og || (e.I.Ae || b.W(ji), b.W(gi)),
                    b.W(hi), b.W(oi))
            } else e.I.Ae || b.W(ji), e.I.og || b.W(gi);
            break;
        case Sd:
            e.I.og ? (a.Ye.value = r("_tBringIn") + " " + sn(a, e.o.O.Ic), So(a, e.I.Kc, e, c), b.W(hi), b.W(pi)) : (0 == e.I.rc ? To(a, 0) : To(a, e.I.rc - c.za), e.I.Ae || b.W(ji), b.W(gi), e.I.rc < e.I.Kc && (So(a, e.I.Kc, e, c), b.W(hi), ee == d.l && e.I.Dn && (b.W(ii), So(a, e.I.ld, e, c), b = e.I.Kc, b = Math.min(c.T, b), b >= c.T ? a.Xe.value = r("_tAllIn") : a.Xe.value = r("_tBigBet") + " " + sn(a, b))))
    }
}

function Xo(a, b) {
    if (!wm(a)) {
        var c = a.g;
        if (c) {
            var d = a.Ac,
                e = c.o.v;
            c = {
                Cj: -1,
                tb: -1,
                Vh: -1
            };
            if (d.cc) {
                c.Vh = d.cc.length;
                for (var f = 0; f < d.cc.length; f++)
                    if (R.f == d.cc[f]) {
                        c.tb = f;
                        break
                    }
            }
            d.bc && (c.Cj = e - d.bc.length);
            0 == c.Cj && (-1 != c.tb ? (d = "YOU ARE NUMBER " + (c.tb + 1) + " ON THE WAITING LIST", e = "LEAVE WAITING LIST") : (d = 0 == c.Vh ? "THERE ARE NO PLAYERS WAITING" : 1 == c.Vh ? "THERE IS 1 PLAYER IN LINE" : "THERE ARE " + c.Vh + " PLAYERS IN  LINE", e = "JOIN WAITING LIST"), a.hi.value = e, a.si.textContent = d);
            a = c
        } else a = void 0;
        a && 0 == a.Cj && b.W(Ci)
    }
}

function so(a) {
    var b = a.jn;
    b.b.clear();
    var c = a.g,
        d = c.o,
        e = d.X,
        f = d.S,
        h = d.h,
        n = Q(c);
    if (n) {
        var p = vb(d.X.Ka, 2),
            q = vb(d.X.Ka, 32); - 1 != h.H || !tk(e) && e.l != qe || Sd == e.Qa || p || q || b.W(ui); - 1 == h.H && 0 != c.o.aj && b.W(Di);
        b.W(li);
        f.l == xe && b.W(si);
        n.td ? b.W(mi) : (-1 == h.H && qk(e) && b.W(ti), !d.Pc && 0 < n.Vd && (n.ec && z || b.W(vi)), Fd == c.lc && (rj(e) ? (0 < a.Ib.size && b.W(ki), 5 < n.u.length && b.W(Fi)) : uj(e) && 1 < n.u.length && b.W(Hi), d = c.$b, 255 != d && (c.I && d == n.j ? Oo(a, b, n, e, c) : Yo(a, b, n, e, c))))
    } else Xo(a, b);
    a.dd && (b.W(qi, a.dd.Gn), b.W(ri, a.dd.Hn), a.Pf.value =
        0 < a.Rc.size ? "SHOW " + a.Rc.size : "SHOW", rj(e) && b.W(ni, !0));
    a.gn.forEach(function(u) {
        return Cb(u, b.le(u.Cf))
    });
    Cb(a.si, b.le(Ci));
    Cb(a.hi, b.le(Ci));
    Cb(a.Nk, b.le(Ci));
    e = b.le(oi);
    for (d = 0; 4 > d; d++) Cb(a.Vj[d], e);
    z ? (Cb(a.pe, e), a.nb.style.display = e ? "block" : "none") : Cb(a.N.Hc, e);
    z || Cb(a.wb, e);
    e = !1;
    n && n.ec && a.uk == c.Xa && (e = !0);
    R.b.ze || (e = !1);
    Cb(a.pa, e);
    if (z) {
        e = "none";
        c = c.o;
        if (sk(c.S) || rj(c.S) || ze == c.S.l || ve == c.S.l || Oe == c.S.l || Qe == c.S.l || c.S.l == Ne || uj(c.S)) e = "block";
        a.na.style.display = e;
        a.oe.style.display = n ? "block" :
            "none"
    }
    a.qe.style.display = n ? "block" : "none"
}

function al(a) {
    return Zj(a.ya(), R.c)
}

function Po(a, b) {
    for (var c = 0, d = 0; 13 > d; d++) a.Ib.has(b.Jb[d]) && c++;
    a = c;
    return 13 <= b.u.length ? 13 == a : 5 == b.u.length ? 5 == a : 3 == b.u.length ? 2 == a : 1 == b.u.length ? 1 == a : !1
}

function Yo(a, b, c, d, e) {
    z || (a.Jk.style.display = rj(d) ? "none" : "flex");
    if (null != e.I && c.ec)
        if (rj(d)) Po(a, c) ? b.W(Ei) : a.ug.checked = !1;
        else if (uj(d)) z || (a.Jk.style.display = "none");
    else {
        if (d.l == Ne) switch (e.g) {
            case 1:
            case 3:
            case 5:
                return
        }
        if (rk(d))
            if (d.l == Ce || d.l == Be || d.l == Ke || d.l == De) switch (e.g) {
                case 10:
                    c.qb || (Zo(a.nf, $o(a)), b.W(xi));
                    return
            } else switch (e.g) {
                case 1:
                case 3:
                case 5:
                    c.qb || (Zo(a.nf, $o(a)), b.W(xi));
                    return
            }
        0 != c.T && (b.W(yi), b.W(wi), vb(d.Ka, 1024) ? (Zo(a.jd, r("_tAllIn")), Zo(a.ud, r("_tFold"))) : (Sd == d.Qa &&
            b.W(Bi), d = e.I.yl - c.za, d = Math.min(d, c.T), d = Math.max(d, 0), 0 == d ? z ? (Zo(a.jd, r("_tCheck") + " / " + r("_tCallAny")), Zo(a.ud, r("_tCheck") + " / " + r("_tFold"))) : (Zo(a.jd, r("_tCheck") + "/" + r("_tCallAny")), Zo(a.ud, r("_tCheck") + "/" + r("_tFold"))) : (Zo(a.jd, r("_tCallAny")), Zo(a.ud, r("_tFold"))), 0 != d && (b.W(zi), Zo(a.hd, r("_tCall") + " " + sn(a, d)), d != a.hd.V && (z ? vl(a.hd, !1) : a.hd.checked = !1, a.hd.V = d))))
    }
}

function Zo(a, b) {
    z ? a.tj.textContent = b : a.hb.textContent = b
}
g.ym = function(a) {
    var b = a.currentTarget,
        c = this.g;
    a = c.I;
    var d = 0;
    m(b.Fd) || ("min" == b.Fd ? d = a.ld : "max" == b.Fd ? d = a.Kc : "pot" == b.Fd ? d = a.El : b.In ? (b = Gb(b.Fd, !1), d = (lk(this.g.o).l == Ne ? c.o.O.Ic : c.o.Pc ? c.o.O.Lb : c.o.O.ib) * b / 100) : (c = Gb(b.Fd, !1), d = a.El * c / 100));
    d = Math.floor(d);
    this.Da = ub(d, a.ld, a.Kc);
    Vo(this)
};

function Vo(a, b) {
    b = void 0 === b ? !1 : b;
    So(a, a.Da, a.g, Q(a.g));
    b || (b = sn(a, a.Da, !0).replace(/[^\d\.]/, ""), a.wb.value = b);
    a.N && ap(a.N, a.Da)
}

function So(a, b, c, d) {
    d = d.za + d.T;
    b = Math.min(b, d);
    b = Math.min(b, c.I.Kc);
    b = Math.max(b, c.I.ld);
    var e = sn(a, b);
    a.Of.value = b == d ? "ALL IN " + e : 0 != c.I.yl ? r("_tRaiseTo") + " " + e : "BET " + e;
    a.Da = b
}

function To(a, b) {
    0 != b ? a.Ze.value = r("_tCall") + " " + sn(a, b) : a.Ze.value = r("_tCheck")
}

function bp(a, b, c, d, e) {
    a = Tb(a.Wa, "button", "div_button action_button action_button_font");
    a.value = r(b);
    a.Cf = c;
    a.style.backgroundColor = "#18472D";
    a.addEventListener(z ? "touchstart" : "click", d);
    e && t(a, b, e);
    return a
}

function cp(a) {
    a.Nd = [];
    a.cd = [];
    a.bj = [];
    for (var b = 0; 10 > b; b++) {
        a.cd.push(D(a.i, "seat_div", "null_" + b));
        var c = D(a.i, "seat_div active", "+", "seat_" + b);
        c.Ad = b;
        a.Nd.push(c);
        c.addEventListener("click", a.Sm.bind(a));
        a.bj.push(D(a.i, "table_font chat_div"))
    }
    a.sd.forEach(function(d) {
        d.addEventListener("click", dp)
    });
    a.wi = D(a.Wa, "style_flex_row");
    a.wi.style.position = "absolute";
    a.Vj = [];
    for (b = 0; 4 > b; b++) c = Tb(a.wi, "button", "minibet action_button_font"), c.addEventListener("click", a.ym.bind(a)), a.Vj.push(c);
    a.wb = Tb(a.Wa,
        "text", "betedit");
    a.wb.addEventListener("input", a.jm.bind(a));
    a.wb.addEventListener("keypress", a.cm.bind(a), !1);
    a.wb.onpaste = function() {
        return !1
    };
    a.pa = D(a.Wa, "style_hand_evaluation table_font");
    a.si = D(a.Wa, "style_waiting_list_info table_font_bold");
    a.hi = bp(a, "_tJoinWaitingList", Ci, a.em.bind(a), a.la.qc);
    a.Nk = bp(a, "_tOpenSameTable", Ci, function() {
        ep(a.g.ya())
    }, a.la.qc);
    a.Yj = bp(a, "_tReset", Gi, a.Nm.bind(a), a.la.qc);
    a.Yj.style.backgroundColor = "dimgrey";
    a.Wj = bp(a, "_tPass", Ii, a.Hm.bind(a), a.la.qc);
    a.Wj.style.backgroundColor =
        "red";
    a.Uj = bp(a, "_tFold", gi, a.vm.bind(a), a.la.qc);
    a.Ze = bp(a, "_tCheck", ji, a.Ai.bind(a));
    a.Of = bp(a, "_tBet", hi, a.mk.bind(a));
    a.Va = bp(a, "_tDiscard", fi, a.pm.bind(a));
    a.lk = bp(a, "_tFlip", Ki, a.um.bind(a));
    a.Ik = bp(a, "_tTwist", Ki, a.Ym.bind(a));
    a.Ye = bp(a, "_tBringIn", pi, a.km.bind(a));
    a.Xe = bp(a, "_tBetButton2", ii, a.im.bind(a));
    a.xk = bp(a, "_tImBack", mi, a.wm.bind(a), a.la.qc);
    a.Pf = bp(a, "_tShow", ri, a.Rm.bind(a), a.la.qc);
    a.yk = bp(a, "_tMuck", ri, a.sk.bind(a), a.la.qc);
    a.Ak = bp(a, "_tRabbit", qi, a.Lm.bind(a), a.la.qc);
    a.zk = bp(a,
        "_tNextGame", ni, a.sk.bind(a), a.la.qc);
    a.$e = bp(a, "_tConfirm", Ji, a.Im.bind(a), a.la.qc);
    a.Bk = bp(a, "_tRecall", ki, a.Mm.bind(a));
    a.Uj.style.backgroundColor = "red";
    a.Of.style.backgroundColor = "darkorange";
    a.te = new fp(a);
    a.ln = new gp(a.Y, a);
    a.zn = new hp(a.Y, a);
    D(a.Y, "")
}

function Qo(a) {
    a.Va.style.backgroundColor = (lk(a.g.o).l == Be ? 2 == a.Ra.size : 1) ? "#18472D" : "red";
    a.Va.value = $o(a)
}

function Ro(a) {
    var b = a.g;
    if (b.I)
        if (0 < b.I.kl) a.Va.style.backgroundColor = a.Ra.size != b.I.kl ? "red" : "#18472D";
        else switch (a.Ra.size) {
            case 1:
            case 2:
            case 3:
            case 5:
                a.Va.style.backgroundColor = "#18472D";
                break;
            default:
                a.Va.style.backgroundColor = "red"
        }
}

function $o(a) {
    var b = lk(a.g.o);
    return b.l == Be ? r("_tDiscard") + " 2" : uj(b) ? r("_tPlay") + " " + a.Ra.size : 0 != a.Ra.size ? r("_tDiscard") + " " + a.Ra.size : r("_tStandPat")
}

function ip(a) {
    for (; null != a.Wi.b;) {
        var b = a.Wi;
        if (b.b) {
            var c = b.b;
            b.b == b.c && (b.c = null);
            b.b = b.b.next;
            --b.size;
            b = c
        } else b = null;
        jp(b.data);
        if (a.rb) break
    }
}
g.fm = function() {
    this.g.v.forEach(function(a) {
        a.jf = !1;
        a.Bc.length = 0
    });
    this.Pe = "";
    this.rb = !1;
    this.$a();
    ip(this)
};
g.bd = function() {
    this.rb && (this.rb = !1, this.$a(), ip(this))
};
g.bn = function(a) {
    var b = a.pa.Kb[0];
    if (0 != b.Z) {
        var c = this.g;
        if (c) {
            var d = lk(c.o);
            this.uk = c.Xa;
            var e = a.pa.Td[0],
                f = this.pa;
            switch (d.l) {
                case ve:
                case Wd:
                case Xd:
                case Ee:
                case Yd:
                case Zd:
                case Re:
                case Oe:
                case $d:
                case ee:
                case oe:
                case Me:
                case Ge:
                case Ne:
                    e = !1;
                    if (Ee == d.l || ve == d.l) e = !0;
                    vb(c.o.X.Ka, 32) ? (a = a.pa.Kb[1], kp(f, go(b.Z, b.D, e), go(a.Z, a.D, e))) : kp(f, go(b.Z, b.D, e));
                    break;
                case ge:
                case he:
                case ie:
                case Se:
                case Qe:
                case fe:
                case je:
                case Be:
                case He:
                    kp(f, go(b.Z, b.D, !1), 0 == e.Z ? null : bo(e.Z));
                    break;
                case ke:
                case Te:
                case ye:
                case Le:
                    kp(f,
                        0 == e.Z ? null : bo(b.Z));
                    break;
                case Ce:
                    kp(f, go(b.Z, b.D, !1), go(e.Z, e.D, !1));
                    break;
                case Ue.po:
                    kp(f, go(b.Z, b.D, !1), null)
            }
        }
    }
};

function lp(a) {
    a = a.g;
    var b = Q(a);
    if (!b || Fd != a.lc) return !1;
    switch (lk(a.o).l) {
        case Ie:
        case Je:
            return !0;
        case Pe:
        case oe:
        case qe:
        case Le:
            if (1 > a.g || 1 == a.g && !b.qb) return !0;
            break;
        case Me:
            if (3 > a.g || 3 == a.g && !b.qb) return !0;
            break;
        case pe:
        case ye:
        case le:
        case me:
        case ne:
        case ze:
            if (5 > a.g || 5 == a.g && !b.qb) return !0;
            break;
        case Be:
            if (0 == a.g || 10 == a.g && !b.qb) return !0;
            break;
        case Ce:
        case De:
        case Ke:
            if (0 == a.g || 1 == a.g || 10 == a.g && !b.qb) return !0
    }
    return !1
}
g.Sm = function(a) {
    this.pi(a.currentTarget.Ad)
};
g.pi = function(a) {
    if (vb(lk(this.g.o).Ka, 1024)) {
        var b = new Sl(this.ya());
        b.f = R.f;
        b.j = a;
        S(b.J())
    } else this.Xi = a, S((new Kl(R.f, this.ya(), a, !0)).J()), this.te.ga(0, !0)
};
g.ak = function() {
    this.Pe = "";
    al(this) && po()
};
g.jm = function() {
    var a = this.wb.value;
    var b = Gb(a, wm(this));
    if (wm(this) ? R.b.Tc : R.b.Sc) {
        var c = this.g.o;
        qk(c.X) && 0 != c.O.ib && (Gb(a, !1), b = b * c.O.ib / 100, b = Math.round(b))
    }
    a = b;
    1 != sb && 0 < sb && (a /= sb);
    1 != tb && (a *= tb);
    this.Da = ub(a, this.N.gc, this.N.yd);
    Vo(this, !0)
};
g.bm = function() {
    var a = Q(this.g);
    a && this.te.ga(a.T)
};

function mp(a, b, c) {
    var d = 0,
        e = [];
    switch (b.ca) {
        case wh:
            1 == b.xa && (e.push("Table closing after this hand"), d = 2);
            break;
        case gh:
            e.push("Deck reshuffled from discards");
            break;
        case Ug:
            e.push(ao(l("_tTimebankActivated"), Sn(c.v[b.j].f)));
            break;
        case Fh:
            e.push(ao(l("_tDCExtraTime"), Sn(c.v[b.j].f), "" + b.Ab));
            break;
        case eh:
            0 == b.f && Yn(b, e, c);
            break;
        case Xg:
            ho(b, e, c);
            break;
        case oh:
            fo(b, e, c);
            break;
        case Lh:
            np(b, e);
            break;
        case Tf:
            bd == b.fc ? 0 == b.D.length ? e.push(ao(l("_tStandsPat"), Sn(c.v[b.j].f))) : e.push(ao(l("_tDraws"),
                Sn(c.v[b.j].f), b.D.length)) : jd == b.fc ? e.push(ao(l("_tPostsBlind"), Sn(c.v[b.j].f), y(b.V))) : kd == b.fc ? e.push(ao(l("_tPostsDeadSmallBlind"), Sn(c.v[b.j].f), y(b.V))) : ld == b.fc ? e.push(ao(l("_tStraddles"), Sn(c.v[b.j].f), y(b.V))) : md == b.fc && e.push(ao(l("_tPostsKillBlind"), Sn(c.v[b.j].f), y(b.V)))
    }
    e.forEach(function(f) {
        var h = "#" + c.Xa + ": " + f;
        z ? op(a.nd, -1, h) : (2 == d && (h = f), op(a.nd, -1, h))
    })
}
g.Mm = function() {
    for (var a = Q(this.g), b = 0; 13 > b; b++) this.Ib.has(a.Jb[b]) && (a.Jb[b] = 254);
    this.Ib.clear();
    this.$a()
};
g.Nm = function() {
    this.Ra.clear();
    this.$a()
};
g.Im = function() {
    Po(this, Q(this.g)) ? (ol(this, !1), this.$a()) : alert("You have not made a valid placing")
};
g.cm = function(a) {
    13 == a.which ? this.mk() : pc(a)
};
g.Pm = function(a) {
    a = a.currentTarget;
    if (lp(this)) {
        var b = this.g,
            c = lk(b.o),
            d;
        if (!(d = c.l != Be)) {
            a: {
                b = Q(b);
                for (d = 0; d < b.u.length; d++)
                    if (a.qa == b.u[d]) {
                        b = d;
                        break a
                    } b = -1
            }
            d = 2 != b
        }
        d && (b = a.getBoundingClientRect(), d = .1 * b.height, this.Ra.has(a.qa) ? (this.Ra.delete(a.qa), a.style.top = b.top + d + "px", a.style.filter = "") : (this.Ra.add(a.qa), a.style.filter = "brightness(70%)", a.style.top = b.top - d + "px"), Qo(this), uj(c) && Ro(this), so(this))
    } else c = Q(this.g), c.ec && Fd == this.g.lc || c.pg || (this.Rc.has(a.qa) ? (a.style.filter = "brightness(0.6)",
        this.Rc.delete(a.qa)) : (a.style.filter = "brightness(100%)", this.Rc.add(a.qa)), this.Pf.value = 0 < this.Rc.size ? "SHOW " + this.Rc.size : "SHOW")
};

function jp(a) {
    var b = sl(a.h);
    if (b)
        if (a.ca == ah && Dd == a.Wb) {
            b = Vj(a.h);
            if (z && (b = R.i.get(b)) && b.C) {
                var c = b.C.g;
                c.Sa.bind(c)();
                b.C.$a()
            }
            if (!Wj(a.h)) {
                a = a.h.Fa;
                if (b = pp.get(a)) b.remove(), pp.delete(a);
                qp(Y, Y.ha);
                rp()
            }
        } else if (b = b.C)
        if (b.rb) b.Wi.enqueue(a);
        else {
            c = b.g;
            var d = !1;
            if (a.ca == Vf) {
                b.Ra.clear();
                b.Rc.clear();
                c = null == b.g;
                if (!c && al(b)) {
                    d = a.g.o.O;
                    var e = a.g.o.X,
                        f = !b.g.o.X.We(e),
                        h = !b.g.o.O.We(d),
                        n = f || h,
                        p = "";
                    h && !f ? p = l("_tStakesChanging") + ": " + nk(e, d, !1, Wj(b.g.o.h)) : n && (p = l("_tGameChanging") + ": " + vk(e));
                    m(p) ||
                        (b.Pe = p, op(b.nd, -1, p), setTimeout(b.ak.bind(b), 4E3))
                }
                b.g && a.g.Xa != b.g.Xa && (b.dg = b.g.Xa);
                b.g = a.g;
                3 == b.g.o.Ok && (b.nd.Fc.readOnly = !0, b.nd.Fc.style.backgroundColor = "lightgrey");
                for (d = 0; d < b.g.v.length; d++) b.mc.Db[d] = new xl;
                d = !0;
                Io(b);
                (e = Q(b.g)) && -1 != e.u.indexOf(255) && S((new T(R.f, a.h, rh)).J());
                c && Qn(b);
                al(b) && c && (rp(), e && e.td && (b.La = wb(b.La, 1), b.Kd()));
                e || -1 == sp || (b.pi.bind(b)(sp), sp = -1)
            } else if (a.ca == Uh) b.Pe = "Hand Aborted", op(b.nd, -1, "#" + c.Xa + ": Hand Aborted"), setTimeout(b.ak.bind(b), 2E3), d = !0;
            else if (a.ca ==
                vg) switch (a.xa) {
                case uf:
                    alert("Cannot obtain chips.");
                    break;
                case Gf:
                    alert("Password is incorrect.");
                    break;
                case sf:
                    alert("A player with the same IP address is already at the table.");
                    break;
                case tf:
                    alert("You must buy in for the amount of chips you previously left the table with.");
                    break;
                case yf:
                    alert("Your account is suspended. Please contact your agent.");
                    break;
                case Cf:
                    alert("You are restricted from playing at this table. Please contact your agent.");
                    break;
                case Ef:
                    alert("You must play the same number of cards.");
                    break;
                case Ff:
                    alert("You must play your best card.")
            } else a.ca == xh ? tp(b.te, a.Ab, a.V) : a.ca == eh && Xk(a.f) ? b.bn.bind(b)(a) : c && !Zk(c, a) && (c.ne(b, a.ca, a), al(b) ? (d = !0, b.mc.ne(a, c), mp(b, a, c)) : d = !0, Al(b.mc, a));
            al(b) && (c = b.g) && (c.I && c.I.tg == c.$b && 255 != c.$b && c.I.tg == b.sg || No(b), 0 == b.Wc && c.I && 255 != c.$b && (a = c.$b, c.v[a].ye || (e = Math.floor((new Date).getTime() / 1E3) - c.I.oo, e += R.vb, c = c.I.Ab - e, 0 < c && (b.zb = Math.floor(c), b.Xf(a)))));
            d && !b.rb && b.$a();
            z && up()
        }
}

function Go(a, b) {
    for (var c = 0; 13 > c; c++)
        if (b == a.Jb[c]) return c;
    return -1
}

function np(a, b) {
    a.R.forEach(function(c) {
        c = 0 < c.xl ? Sn(c.f) + " collects " + y(c.ra, void 0) + " bounty and has " + y(c.xl, void 0) + " added to their own bounty" : Sn(c.f) + " collects " + y(c.ra, void 0) + " bounty";
        b.push(c)
    })
}

function kp(a, b, c) {
    m(c) ? a.textContent = b : (a.textContent = "", a.appendChild(document.createTextNode(b)), a.appendChild(document.createElement("br")), a.appendChild(document.createTextNode(c)))
}

function fp(a) {
    rm.call(this, "_tBuyIn", null, ["_tBuyIn", function() {
        b.Sa();
        var f = b.m,
            h = b.C,
            n = Gb(f.Yd.value);
        1 != sb && 0 < sb && (n /= sb);
        1 != tb && (n *= tb);
        var p = h.g.o;
        Q(h.g) ? (n = new Tl(R.f, h.ya(), n), n.c = f.Ce.checked, S(n.J()), h.La = wb(h.La, 2, !1), h.La = wb(h.La, 1, !1), h.Ve.bind(h)(), h.Kd.bind(h)()) : (n = Math.max(n, p.Dj), n = Math.min(n, p.Mh), 0 != n && (p = new Sl(h.ya()), p.f = R.f, p.V = n, p.j = h.Xi, p.c = f.Ce.checked, f = f.$d.value.trim(), m(f) || (p.i = Sj(f)), S(p.J())))
    }], a.Y, a.la.w);
    var b = this;
    this.C = a;
    var c = this.m;
    c.style.minWidth = "200px";
    var d = this.b;
    c.Fe = this.i.firstChild;
    var e = D(this.b, "style_flex_row style_buyin_row");
    t(E(e, "", l("_tAvailable")), "_tAvailable", a.la.w);
    c.Ec = E(e);
    D(d, "style_10px_spacer");
    e = D(d, "style_flex_row style_buyin_row");
    t(E(e, "", l("_tBuyIn")), "_tBuyIn", a.la.w);
    c.Yd = Tb(e, "text", "style_buyin_edit");
    c.Yd.addEventListener("input", function() {
        var f = b.m,
            h = Gb(f.Yd.value);
        1 != sb && 0 < sb && (h /= sb);
        1 != tb && (h *= tb);
        h = ub(h, f.ac.gc, f.ac.yd);
        ap(f.ac, h);
        vp(b)
    });
    D(d, "style_10px_spacer");
    e = D(d, "style_flex_row style_buyin_row");
    c.pj =
        t(E(e, "style_sitdown_button", l("_tMin")), "_tMin", a.la.w);
    c.pj.style.marginRight = "1em";
    c.ql = t(E(e, "style_sitdown_button", l("_tMax")), "_tMax", a.la.w);
    c.pj.onclick = function() {
        var f = b.m,
            h = f.ac.gc;
        ap(f.ac, h);
        f.Yd.value = y(h, !1);
        vp(b)
    };
    c.ql.onclick = function() {
        var f = b.m,
            h = f.ac.yd;
        ap(f.ac, h);
        f.Yd.value = y(h, !1);
        vp(b)
    };
    wp(c.Yd);
    D(d, "style_10px_spacer");
    c.ac = new xp(this.b, function() {
        var f = b.m;
        f.Yd.value = y(f.ac.Z, !1);
        ap(f.ac, f.ac.Z);
        vp(b)
    }, !1);
    c.ac.Hc.style.height = "25px";
    c.ac.Hc.style.position = "relative";
    D(d,
        "style_10px_spacer");
    c.Hh = D(d, "style_rathole_info");
    D(d, "style_10px_spacer");
    c.Ce = $b(d, l("_tAutoTopup"));
    t(c.Ce.hb, "_tAutoTopup", a.la.w);
    c.Dg = D(d, "style_ofc_buyin_info");
    c.Eg = D(d, "style_flex_column");
    D(c.Eg, "style_10px_spacer");
    D(c.Eg, "style_10px_spacer");
    e = D(c.Eg, "style_flex_row style_buyin_row");
    e.style.width = "100%";
    t(E(e, "", l("_tPassword")), "_tPassword", a.la.w);
    c.$d = Sb(e, "style_input")
}
k(fp, rm);

function vp(a) {
    a.m.Fe.textContent = l("_tBuyIn") + " (" + y(a.m.ac.Z) + ")"
}
fp.prototype.ga = function(a, b) {
    var c = this,
        d = this.m,
        e = this.C.g.o;
    if (a >= e.Mh) return alert("Your stack already exceeds the maximum for this table."), !1;
    d.Ec.textContent = y(R.Ub);
    d.Ng = 0;
    d.If = 0;
    d.Hh.style.visibility = "hidden";
    this.c = a;
    yp(this);
    d.$d.value = "";
    d.Eg.style.display = "none";
    b && e.Bh && (d.Eg.style.display = "flex");
    rj(lk(e)) ? (a = 50, Ae == lk(e).l && (a = 150), d.Dg.textContent = "Min " + a + " pts to play non-FL OFC hand. Enable to top up to table min when below " + a + " pts.", d.Dg.style.display = "block", d.Ce.checked = !0) :
        uj(lk(e)) ? (a = 80, 4 == e.v && (a = 240), lk(e).l == Ie && (a = 39), d.Dg.textContent = "Min " + a + " pts to play a Big 2 hand. Enable to top up to table min when below " + a + " pts.", d.Dg.style.display = "block", d.Ce.checked = !0) : (d.Dg.style.display = "none", d.Ce.checked = !1);
    Yb(d.Ce);
    this.W(function() {
        c.Sa();
        b && S((new Kl(R.f, c.C.ya(), c.C.Xi, !1)).J())
    })
};

function yp(a) {
    var b = a.m,
        c = a.C.g.o,
        d = c.Dj;
    b.If > d && (d = b.If);
    var e = c.Mh;
    d >= e && (e = d);
    d -= a.c;
    d = Math.max(d, kk(c));
    e -= a.c;
    Uo(b.ac, d, e, kk(c), d);
    b.Yd.value = y(d, !1);
    b.ql.value = l("_tMax") + " (" + y(e) + ")";
    b.pj.value = l("_tMin") + " (" + y(d) + ")";
    0 != b.If && zp(a);
    vp(a)
}

function Ap(a) {
    var b = a.m;
    b.Ng--;
    0 >= b.Ng ? (b.If = 0, yp(a)) : setTimeout(function() {
        return Ap(a)
    }, 1E3);
    zp(a)
}

function zp(a) {
    a = a.m;
    0 <= a.Ng ? (a.Hh.textContent = "Min Buy In: " + y(a.If) + " ( " + Fb(a.Ng) + ")", a.Hh.style.visibility = "visible") : a.Hh.style.visibility = "hidden"
}

function tp(a, b, c) {
    var d = a.m;
    d.Ng = b;
    d.If = c;
    yp(a);
    zp(a);
    setTimeout(function() {
        return Ap(a)
    }, 1E3)
}

function Bp(a, b) {
    var c = Math.floor(a / 4),
        d = Math.floor(b / 4);
    return c == d ? a % 4 - b % 4 : c - d
}

function Cp(a) {
    a = Math.floor(a / 4);
    0 == a ? a = 12 : a--;
    return a
}
var Dp = [1, 0, 2, 3],
    Ep = [0, 2, 1, 3];

function Co(a, b) {
    var c = Cp(a),
        d = Cp(b);
    return c != d ? c - d : Dp[a % 4] - Dp[b % 4]
}

function Bo(a, b) {
    var c = Dp[a % 4],
        d = Dp[b % 4];
    return c != d ? c - d : Cp(a) - Cp(b)
}

function Eo(a, b) {
    var c = Cp(a),
        d = Cp(b);
    return c != d ? c - d : Ep[a % 4] - Ep[b % 4]
}

function Do(a, b) {
    var c = Ep[a % 4],
        d = Ep[b % 4];
    return c != d ? c - d : Cp(a) - Cp(b)
}

function Fp(a, b) {
    var c = Math.floor(a / 4),
        d = Math.floor(b / 4);
    a %= 4;
    b %= 4;
    return a == b ? c - d : a - b
}

function Gp(a) {
    for (var b = D(document.body, "noselect style_popup_menu"), c = 0; c < a.length; c++) {
        0 < b.children.length && D(b, "style_menu_spacer");
        var d = a[c];
        if (!m(d)) {
            var e = a[++c],
                f = a[++c],
                h = D(b, "style_popup_menu_item");
            h.addEventListener("click", e);
            f ? C(h, "style_menu_image").src = f : D(h, "style_menu_noimage");
            t(E(h), d, F.pc)
        }
    }
    return b
}

function dp(a) {
    a = a.currentTarget.f;
    Xk(a) || (Q(om().C.g) ? X.Da.ga(a) : X.U.ga(a))
};

function Hp(a, b) {
    var c = Jm(a, 0),
        d = Jm(a, 1),
        e = (c.da.top - (d.Ne.bottom + 10)) / (6.8 + 4 / 30 + 4 / 7);
    Fm(a, e);
    7 * a.$.M + 4 * a.$.ba / 7 + 8 / 30 * a.$.ba > window.innerWidth && (e = window.innerWidth / (7 + 6 / 7 * 1.4 + 8 / 30 * 1.4) * 7 / 5, Fm(a, e));
    if (!a.Rb || b.v != a.Rb.length) {
        a.Rb = [];
        for (e = 0; e < b.v; e++) {
            a.Rb.push([]);
            for (var f = 0; 17 > f; f++) a.Rb[e].push(new gb)
        }
        a.$f = [];
        for (e = 0; e < b.v; e++) a.$f.push(new gb)
    }
    e = a.$.duplicate();
    e.M *= .7;
    e.ba *= .7;
    f = a.$.ba / 30;
    var h = 4 * f,
        n = a.Rb[0],
        p = a.$,
        q = c.da.top - (h + p.ba + h) - (2 * f + 3 * p.ba);
    a.pd[0].forEach(function(x) {
        return x.style.fontSize =
            p.ba / 3 + "px"
    });
    c = 5 * p.M + 4 * f;
    c = new v(jb(a.Aa) - c / 2, q);
    c.x += p.M + f;
    for (q = 0; 13 > q; q++) {
        var u = 0,
            w = 0;
        3 > q ? (u = c.x + (1 + q) * (p.M + f), w = c.y) : 8 > q ? (u = c.x + (q - 3) * (p.M + f), w = c.y + p.ba + f) : 13 > q && (u = c.x + (q - 8) * (p.M + f), w = c.y + 2 * (p.ba + f));
        n[q].set(u, w, u + p.M, w + p.ba)
    }
    a.zf && (q = 2 * e.M + f, Db(a.zf, n[8].left - h, n[12].top), Db(a.Fg, n[8].left - h, n[12].top + p.ba / 2), a.zf.style.width = q + "px", a.Fg.style.width = q + "px");
    u = a.$f[0];
    u.set(n[3].left, n[0].top, n[7].right, n[12].bottom);
    kb(u, 3, 3);
    c.y = n[0].top;
    c.x = n[3].left - (2 * e.M + h);
    q = 13;
    u = n[q++];
    hb(u, c, e);
    u =
        n[q++];
    c.x += e.M + f;
    hb(u, c, e);
    u = n[q++];
    c.x -= e.M + f;
    c.y += e.ba + f;
    hb(u, c, e);
    u = n[q++];
    c.x += e.M + f;
    hb(u, c, e);
    n = a.Rb[1];
    p = e;
    a.pd[1].forEach(function(x) {
        return x.style.fontSize = p.ba / 3 + "px"
    });
    c = 5 * p.M + 4 * f;
    q = d.Ne.bottom + h + 10;
    c = 3 == b.v ? new v(jb(a.Aa) - (c + h), q) : new v(jb(a.Aa) - c / 2, q);
    for (d = 0; 13 > d; d++) w = u = 0, 3 > d ? (u = c.x + (1 + d) * (p.M + f), w = c.y) : 8 > d ? (u = c.x + (d - 3) * (p.M + f), w = c.y + p.ba + f) : 13 > d && (u = c.x + (d - 8) * (p.M + f), w = c.y + 2 * (p.ba + f)), n[d].set(u, w, u + p.M, w + p.ba);
    u = a.$f[1];
    u.set(n[3].left, n[0].top, n[7].right, n[12].bottom);
    kb(u, 3, 3);
    c.x = n[8].left;
    c.y = n[8].bottom + f;
    for (d = 13; 17 > d; d++) hb(n[d], c, e), c.x += e.M + f;
    if (3 == b.v) {
        a.pd[2].forEach(function(x) {
            return x.style.fontSize = p.ba / 3 + "px"
        });
        n = a.Rb[2];
        c = new v(jb(a.Aa) + h, q);
        for (b = 0; 13 > b; b++) h = d = 0, 3 > b ? (d = c.x + (1 + b) * (p.M + f), h = c.y) : 8 > b ? (d = c.x + (b - 3) * (p.M + f), h = c.y + p.ba + f) : 13 > b && (d = c.x + (b - 8) * (p.M + f), h = c.y + 2 * (p.ba + f)), n[b].set(d, h, d + p.M, h + p.ba);
        u = a.$f[2];
        u.set(n[3].left, n[0].top, n[7].right, n[12].bottom);
        kb(u, 3, 3);
        c.x = n[8].left;
        c.y = n[8].bottom + f;
        for (a = 13; 17 > a; a++) hb(n[a], c, e), c.x += e.M + f
    }
}

function Ip(a) {
    var b = a.currentTarget;
    vl(b, !b.checked);
    b.Vk && b.Vk(a)
}

function Jp(a, b, c, d, e) {
    a = D(a, "m_checkbox gradient_background action_button_font");
    a.Tn = D(a, "m_checkbox_hole");
    a.tj = D(a, "m_checkbox_text");
    e ? t(a.tj, b, e) : a.tj.textContent = b;
    vl(a, !1);
    a.Vk = c;
    a.addEventListener("touchstart", Ip);
    void 0 != d && (a.Cf = d);
    return a
}

function Kp(a) {
    function b() {
        a.removeEventListener("animationend", b);
        a.classList.remove("style_slide_up");
        a.style.transform = "translateY(-100%)"
    }
    a.style.display = "flex";
    a.style.transform = "translateY(0%)";
    a.addEventListener("animationend", b);
    zo(a, "style_slide_up")
}

function Lp(a) {
    function b() {
        a.removeEventListener("animationend", b);
        a.classList.remove("style_slide_down");
        a.style.transform = "";
        a.style.display = ""
    }
    a.style.display = "flex";
    a.style.transform = "translateY(0%)";
    a.addEventListener("animationend", b);
    zo(a, "style_slide_down")
}

function Mp(a) {
    function b() {
        a.removeEventListener("animationend", b);
        a.classList.remove("style_slide_out");
        a.style.display = "none"
    }
    a.addEventListener("animationend", b);
    zo(a, "style_slide_out")
}

function Np(a) {
    function b() {
        a.removeEventListener("animationend", b);
        a.classList.remove("style_slide_in");
        a.style.transform = ""
    }
    a.style.transform = "translateX(100%)";
    a.style.display = "flex";
    a.addEventListener("animationend", b);
    zo(a, "style_slide_in")
}

function Op(a) {
    ro.call(this);
    var b = this;
    this.Ac = a;
    a.C = this;
    this.G = new gb;
    this.fi.set(22, 20);
    this.L = null;
    this.la = new ua;
    Pp();
    Qp(this);
    this.ea = Rp(this);
    var c = D(this.Y, "style_header_table_mobile");
    c.style.zIndex = 10;
    var d = D(c, "style_back");
    d = C(d, "style_back");
    d.src = "./images/agent_back_white.png";
    d.addEventListener("click", this.Am.bind(this));
    d = D(c, "style_table_info_column");
    this.kk = D(d, "style_table_name_mobile");
    d = D(d, "style_flex_row");
    this.ja = D(d, "style_table_game_mobile");
    this.Bb = D(d, "style_table_game_mobile");
    this.Bb.style.paddingLeft = "0.5em";
    d = D(c, "style_back");
    c = C(d, "style_back");
    c.src = "./images/leave_table.png";
    c.addEventListener("click", this.qk.bind(this));
    this.pe = D(this.Wa, "style_bet_wrapper");
    this.$j = D(this.pe, "style_bet_button_wrapper");
    this.Mk = D(this.$j, "style_bet_button", "+");
    this.Mk.style.marginBottom = "5px";
    this.Mk.addEventListener("click", function() {
        return Sp(b.N)
    });
    this.on = D(this.$j, "style_bet_button", "-");
    this.on.addEventListener("click", function() {
        return Tp(b.N)
    });
    this.N = new xp(this.pe, this.dn.bind(this),
        !0);
    this.N.Hc.style.position = "relative";
    this.nb = D(document.body, "fullscreen_mask");
    this.nb.style.zIndex = 600;
    this.nb.addEventListener("touchstart", this.Xm.bind(this));
    this.vi = C(this.Wa, "m_button", "./images/chat_1.png");
    this.vi.addEventListener("click", function() {
        return Np(b.nd)
    });
    this.qe = C(this.Wa, "m_button", "./images/smiley.png");
    this.qe.addEventListener("click", function() {
        return X.Ta.ga()
    });
    this.yi = C(this.Wa, "m_button", "./images/tables_1.png");
    this.yi.addEventListener("touchstart", Up);
    this.aa = D(this.Wa,
        "style_open_tables");
    this.aa.style.position = "absolute";
    this.aa.style.transform = "translate(-75%, -25%)";
    this.df = D(this.Y, "status_text table_font");
    this.U = D(this.Y, "style_timer_wrapper");
    z && (this.U.style.fontWeight = "normal");
    this.kc = ic(this.U);
    this.Oa = ic(this.U);
    this.Oa.style.color = "greenyellow";
    this.U.addEventListener("click", this.nm.bind(this));
    this.vg = this.ea.vg;
    this.wg = this.ea.wg;
    this.Fh = this.ea.Fh;
    this.xg = this.ea.xg;
    this.pf = Jp(this.Wa, "_tWaitForBB", this.$m.bind(this), vi, this.la.pc);
    c = this.pf.style;
    c.transform = "translate(-50%, -50%)";
    c.width = "auto";
    c.whiteSpace = "nowrap";
    this.ud = Jp(this.Wa, r("_tCheck") + "/" + r("_tFold"), this.Te.bind(this), wi);
    this.hd = Jp(this.Wa, r("_tCallAmount"), this.Te.bind(this), zi);
    this.jd = Jp(this.Wa, r("_tCallAny"), this.Te.bind(this), yi);
    this.Eh = Jp(this.Wa, "_tRaiseAny", this.Te.bind(this), Bi, this.la.pc);
    this.nf = Jp(this.Wa, r("_tDiscard"), this.Te.bind(this), xi);
    this.ug = Jp(this.Wa, "_tConfirm", this.Te.bind(this), Ei, this.la.pc);
    this.gn = [this.Uj, this.Ze, this.Of, this.Va, this.lk, this.Ik,
        this.Ye, this.Xe, this.xk, this.Pf, this.yk, this.$e, this.Bk, this.Ak, this.zk, this.Zj, this.zf, this.Fg, this.re, this.Yj, this.Wj, this.ud, this.hd, this.jd, this.Eh, this.nf, this.ug, this.ea.wg.parentElement, this.ea.vg.parentElement, this.ea.xg.parentElement, this.ea.Fh.parentElement, this.pf
    ];
    this.G = new gb;
    this.Aa = null;
    if (c = a.o) this.kk.textContent = a.o.Sb, this.ja.textContent = vk(c.S), this.Bb.textContent = nk(c.X, c.O, !1, Wj(c.h));
    this.Y.addEventListener("touchstart", function(e) {
        1 == e.touches.length && (e = e.touches[0], Vp = new v(e.pageX,
            e.pageY))
    });
    this.Y.addEventListener("touchend", function(e) {
        Vp && 1 == e.changedTouches.length && (e = e.changedTouches[0], e = (new v(e.pageX, e.pageY)).x - Vp.x, 50 <= e ? Wp() : -50 >= e && Xp(), Vp = null)
    });
    ya(this.la)
}
k(Op, ro);
g = Op.prototype;
g.dn = function(a) {
    this.Da = a;
    Vo(this)
};
g.bk = function() {
    this.g = null;
    this.Y.remove();
    this.nb.remove();
    this.te.m.remove();
    this.nd.remove()
};
g.Dm = function() {
    Ob(this.ea, null, Qb)
};
g.Am = function() {
    var a = this.g;
    a && Q(a) ? Yp() : this.qk()
};
g.qk = function() {
    if (Wj(this.ya())) {
        var a = this.g;
        if (a && Q(a)) {
            Yp();
            return
        }
    }
    a = this.g;
    S((new W(this.ya(), Qf)).J());
    a && (Q(a) && (S((new T(R.f, this.ya(), Pf)).J()), No(this)), this.g = null, up());
    this.Ac.C = null;
    this.bk();
    Yp()
};
g.Cm = function() {
    var a = lm(om());
    switch (a.S.l) {
        case we:
        case xe:
            X.vb.ga(a.Dc, a.kg);
            break;
        case ze:
            Zp(X.ea);
            break;
        case ve:
            Zp(X.Ba);
            break;
        case Oe:
        case Qe:
            Zp(X.ua);
            break;
        case Ie:
        case Je:
            Zp(X.ja);
            break;
        case Ne:
            Zp(X.ma);
            break;
        case ae:
        case be:
        case ce:
        case Ae:
        case de:
            Zp(X.sa)
    }
};

function cl(a) {
    vl(a.ud, !1);
    vl(a.hd, !1);
    vl(a.jd, !1);
    vl(a.Eh, !1);
    vl(a.nf, !1);
    vl(a.ug, !1)
}
g.Te = function(a) {
    this.sc = this.g.Xa;
    var b = a.currentTarget.checked;
    cl(this);
    vl(a.currentTarget, b)
};
g.Yb = function() {
    var a = new gb(0, 0, window.innerWidth, window.innerHeight),
        b = this.Ac.o;
    b || (b = this.g.o);
    var c = new gb(a.left, a.bottom - 100, a.right, a.bottom),
        d = .06 * window.innerWidth;
    d = new gb(d, 45, a.right - d, c.top);
    this.G.set(a.left, 45, a.right, c.top);
    this.Qf && A(this.Qf, this.G);
    this.Aa = on(d);
    zm(this);
    A(this.s, this.Aa);
    this.mn && A(this.s, this.G);
    B(this.df, pb(this.Aa));
    if (!b) return !1;
    this.Cb = qj(lk(b), b.v);
    if (!this.Cb.Ed) return !1;
    var e = this.Cb.Le;
    rj(b.S) && A(this.s, this.G);
    rj(b.S) ? Hp(this, b) : Fm(this, this.Aa.height() *
        R.b.Yi);
    this.c = .35 * Jm(this, 0).Ne.height();
    Fo(this);
    var f = new gb;
    f.left = c.width() / 2;
    f.top = c.top;
    f.bottom = c.bottom;
    f.right = c.right;
    this.gi.set(Math.floor(.75 * f.height()), Math.floor(.3 * f.height()));
    Bm(this, this.Aa.height() * R.b.Zi / 10);
    hc[$p].style.fontSize = .4 * this.gi.ba + "px";
    var h = Math.floor(.15 * this.gi.ba);
    f = (a.width() - (2 * h + 10)) / 3;
    f = new fb(f, 40);
    var n = new gb,
        p = a.bottom - (5 + f.ba);
    hb(n, new v(a.left + 5, a.bottom - (5 + f.ba)), f);
    var q = new gb,
        u = n.duplicate();
    [this.Wj, this.Ik, this.Uj, this.Pf, this.xk, this.ud].forEach(function(G) {
        return A(G,
            n)
    });
    n.offset(f.M + h, 0);
    [this.Ze, this.lk, this.Ye, this.Va, this.yk, this.Bk, this.hd, this.nf].forEach(function(G) {
        return A(G, n)
    });
    var w = n.right;
    pb(n);
    var x = n.duplicate();
    x.left = a.left + 5;
    x.right = a.right - 5;
    this.pf.style.height = n.height() + "px";
    B(this.pf, pb(x));
    n.offset(f.M + h, 0);
    [this.Yj, this.Of, this.zk, this.Ak, this.$e, this.Zj, this.jd, this.ug].forEach(function(G) {
        return A(G, n)
    });
    x = (x.width() - h) / 2;
    u.right = u.left + x;
    A(this.Nk, u);
    u.offset(x + h, 0);
    A(this.hi, u);
    c = pb(c);
    c.y = n.top - .25 * f.ba;
    B(this.si, c);
    q.bottom = n.top -
        20;
    q.right = n.right;
    q.top = ib(a);
    q.left = q.right - .5 * n.width();
    this.pe.style.top = ib(a) + "px";
    this.pe.style.left = n.right + "px";
    this.N.Hc.style.width = q.width() + "px";
    this.N.Hc.style.height = q.height() + "px";
    n.offset(0, -(f.ba + h));
    A(this.Xe, n);
    A(this.Eh, n);
    var I = 2 * this.c,
        J = .4 * this.c;
    c = I + 2 * J;
    h = new v(this.c, n.top - (I + this.c));
    [this.vi, this.yi, this.oe, this.Ta, this.na, this.xi, this.qe].forEach(function(G) {
        G.style.height = I + "px";
        G.style.padding = J + "px"
    });
    B(this.vi, h);
    h.x = this.c + c + this.c;
    B(this.yi, h);
    this.aa.style.left =
        h.x + c + "px";
    this.aa.style.top = h.y + "px";
    this.aa.style.fontSize = 1.25 * this.c + "px";
    h.x += this.c + c;
    B(this.qe, h);
    this.Ta.style.left = this.c + "px";
    this.Ta.style.top = this.G.top + this.c + "px";
    h.x = this.G.right - (this.c + c);
    B(this.na, h);
    this.na.style.top = this.G.top + this.c + "px";
    B(this.oe, h);
    h.x = this.G.right - (2 * this.c + 2 * c);
    B(this.xi, h);
    A(this.wi, new gb(a.left + 5, p, w, p + f.ba));
    a = new v(a.right - this.pn.M, h.y - this.c);
    B(this.pa, a);
    B(this.ri, Am(this, e.Pj));
    B(this.ua, Am(this, e.Oj));
    uj(b.S) && Db(this.re, d.right, d.bottom);
    this.re.style.transform =
        "translate(-100%, -210%)";
    return !0
};

function Qp(a) {
    xm(a);
    cp(a);
    a.nd = aq(a.Y, a);
    a.mi = D(a.Y, "style_m_hand_number table_font");
    a.zf = D(a.i, "style_fl_button table_font_bold", "RANK");
    a.Fg = D(a.i, "style_fl_button table_font_bold", "SUIT");
    a.zf.Cf = Fi;
    a.Fg.Cf = Fi;
    a.re = D(a.i, "style_big2_button table_font_bold", "SORT");
    a.re.Cf = Hi;
    a.zf.addEventListener("click", function() {
        return to(a, Bp)
    });
    a.Fg.addEventListener("click", function() {
        return to(a, Fp)
    });
    a.re.addEventListener("click", function() {
        return Ao(a)
    });
    for (var b = 0; 13 > b; b++) {
        var c = a.qd[0][b];
        bq(a, c);
        c.tb = b
    }
    for (b = 0; 13 > b; b++) c = a.vb[0][b], c.tb = b, c.addEventListener("mousedown", a.Vm.bind(a));
    a.s.src = "./images/table_vertical_1.png";
    a.Ta = C(a.Wa, "m_button", "./images/replay_1.png");
    a.Ta.addEventListener("touchstart", cq.bind(a));
    a.na = C(a.Wa, "m_button", "./images/info.png");
    a.na.addEventListener("click", a.Cm.bind(a));
    a.na.id = "info";
    a.oe = C(a.Wa, "m_button", "./images/agent_rebuy.png");
    a.oe.addEventListener("touchstart", a.bm.bind(a));
    a.oe.id = "add";
    a.xi = C(a.Wa, "m_button", "./images/menu_more.png");
    a.xi.addEventListener("touchstart",
        a.Dm.bind(a));
    a.Zj = bp(a, "_tRaise", Ai, a.Qm.bind(a), a.la.qc);
    a.Zj.style.backgroundColor = "darkorange"
}

function Rp(a) {
    var b = D(a.Y, "style_m_table_options table_font"),
        c = D(b, "style_flex_row");
    c.style.borderBottom = "1px solid grey";
    c.style.paddingBottom = "1em";
    c.style.marginBottom = "1em";
    var d = D(c, "style_flex_column"),
        e = D(d, "style_hand_number");
    e.textContent = r("_tHandNumber");
    e.style.paddingBottom = "1em";
    t(e, "_tHandNumber", a.la.pc);
    e = D(d, "style_hand_number");
    e.textContent = r("_tPreviousHandNumber");
    t(e, "_tPreviousHandNumber", a.la.pc);
    c = D(c, "style_flex_column");
    b.sj = D(c, "style_hand_number");
    b.sj.style.paddingBottom =
        "1em";
    b.sj.style.paddingLeft = "1em";
    b.vl = D(c, "style_hand_number");
    b.vl.style.paddingLeft = "1em";
    b.vg = Wb(b, "_tSitout", a.Um.bind(a), a.la.pc, li);
    b.vg.parentElement.style.marginBottom = "1em";
    b.wg = Wb(b, "_tSkipNextBB", a.Tm.bind(a), a.la.pc, ti);
    b.wg.parentElement.style.marginBottom = "1em";
    b.xg = Wb(b, "_tStraddle", a.Wm.bind(a), a.la.pc, Di);
    b.xg.parentElement.style.marginBottom = "1em";
    b.Fh = Wb(b, "_tRunItTwice", a.Om.bind(a), a.la.pc, ui);
    return b
}
g.Sf = function(a) {
    ro.prototype.Sf.call(this, a) && (-1 != a.Xa && (this.mi.textContent = a.Xa, this.ea.sj.textContent = a.Xa), this.Ta.style.display = "none", this.dg && void 0 != R.aa.get(this.dg) && (this.Ta.style.display = "block", this.ea.vl.textContent = this.dg))
};
g.em = function() {
    S((new T(R.f, this.ya(), Yg)).J())
};
g.ni = function(a) {
    a = ro.prototype.ni.call(this, a);
    bq(this, a);
    return a
};

function bq(a, b) {
    b.addEventListener("touchstart", function(c) {
        if (1 == c.touches.length) {
            c.stopPropagation();
            var d = c.touches[0];
            c = c.currentTarget;
            var e = Q(a.g);
            if (e && Fk(e, c.qa)) {
                if (a.B == c.qa) a.B = 254;
                else if (254 == a.B) a.B = c.qa;
                else {
                    var f = Go(e, a.B),
                        h = Go(e, c.qa); - 1 == f && -1 == h ? a.B = c.qa : (-1 != f ? (e.Jb[f] = c.qa, a.Ib.add(c.qa)) : a.Ib.delete(c.qa), -1 != h ? (e.Jb[h] = a.B, a.Ib.add(a.B)) : a.Ib.delete(a.B), a.B = 254)
                }
                a.P = c.qa;
                a.zi.set(d.pageX, d.pageY);
                c = c.getBoundingClientRect();
                a.se.set(d.pageX - c.left, d.pageY - c.top);
                a.$a()
            }
        }
    });
    b.addEventListener("touchmove", function(c) {
        if (1 == c.touches.length)
            if (c.stopPropagation(), c = c.touches[0], a.ma) Db(a.ma, c.clientX - a.se.x, c.clientY - a.se.y), (c = dq(a, c.clientX, c.clientY)) ? null == a.L ? (a.L = c, a.L.style.border = "0.2em solid orange") : a.L.tb != c.tb && (a.L.style.border = "", a.L = c, a.L.style.border = "0.2em solid orange") : null != a.L && (a.L.style.border = "", a.L = null);
            else if (254 != a.P) {
            var d = Math.abs(a.zi.y - c.pageY);
            if (!(1 >= Math.abs(a.zi.x - c.pageX) && 1 >= d)) {
                a.B = 254;
                d = C(a.i, "style_card", kn(a.P));
                var e = a.$;
                Eb(d,
                    e.M, e.ba);
                d.style.zIndex = 1E3;
                d.style.position = "absolute";
                d.style.margin = "";
                d.style.display = "block";
                Db(d, c.pageX - a.se.x, c.pageY - a.se.y);
                a.ma = d;
                a.$a()
            }
        }
    });
    b.addEventListener("touchend", function(c) {
        if (1 == c.changedTouches.length) {
            var d = c.changedTouches[0];
            if (a.ma) {
                a.ma.remove();
                a.ma = null;
                d = dq(a, d.clientX, d.clientY);
                null != a.L && (a.L.style.border = "", a.L = null);
                if (d && void 0 != d.tb) Hm(a, a.P, d.tb);
                else {
                    d = Q(a.g);
                    var e = Go(d, a.P); - 1 != e && (a.Ib.delete(a.P), d.Jb[e] = 254)
                }
                a.P = 254;
                a.$a();
                c.stopPropagation()
            } else 254 !=
                a.P && (a.P = 254, a.$a(), c.stopPropagation())
        }
    })
}

function dq(a, b, c) {
    b = new v(b, c);
    for (c = 0; 13 > c; c++) {
        var d = a.Rb[0][c];
        if (d.left <= b.x && b.x <= d.right && d.top <= b.y && b.y <= d.bottom) return a.vb[0][c]
    }
    return null
}
g.Xm = function(a) {
    this.nb.style.display = "none";
    this.xb = !1;
    so(this);
    a.preventDefault()
};
g.Qm = function(a) {
    a.preventDefault();
    this.xb = !0;
    this.nb.style.display = "block";
    so(this)
};
g.Ue = function(a) {
    var b = a ? a.o : this.Ac.o;
    if (b) {
        var c = lk(b),
            d = "",
            e = "";
        if (Wj(this.Ac.h)) {
            if (a = qm(this.Ac.h.H)) {
                var f = a.va;
                e = "T" + a.H + " ";
                a = f.Za + f.Ya;
                e = 0 == a ? e + "Freeroll" : e + y(a, void 0);
                e = e + " " + yk(b.S)
            }
            f = nk(b.X, b.O, !1, !0);
            d = vk(c)
        } else e = b.Sb, f = nk(b.X, b.O, !1, !1), we == b.S.l ? a && (d = vk(c) + " (" + (a.Aj + 1) + "/" + a.Ij + ")") : (d = vk(c), b.jj && (d += " (w/Jokers)"));
        this.kk.textContent = e;
        this.Bb.textContent = f;
        this.ja.textContent = d;
        c && (this.ja.style.color = Ak(c.l) ? "rgb(255,128,255)" : "")
    }
};
var Vp = null;

function eq(a) {
    a = a.currentTarget;
    a.removeEventListener("animationend", eq);
    uo(a);
    a.style.transform = "";
    fq--
}

function gq(a) {
    a = a.currentTarget;
    a.removeEventListener("animationend", gq);
    uo(a);
    a.style.transform = "";
    a.style.display = "none";
    fq--
}
var fq = 0;

function Wp() {
    if (!(0 < fq)) {
        var a = om(),
            b = [],
            c = -1;
        R.i.forEach(function(f) {
            f.C && (Zj(f.h, R.c) && (c = b.length), b.push(f.h))
        });
        if (!(1 >= b.length)) {
            var d = c + 1;
            d >= b.length && (d = 0);
            var e = b[d];
            d = sl(e);
            R.c = e;
            e = d.C;
            e.Y.style.transform = "translateX(-100%)";
            e.Y.style.display = "block";
            e.Ue.bind(e)();
            rp();
            po();
            fq = 2;
            d.C.Y.addEventListener("animationend", eq);
            zo(d.C.Y, "style_swipe_right");
            a.C.Y.addEventListener("animationend", gq);
            zo(a.C.Y, "style_swipe_right_out")
        }
    }
}

function Xp() {
    if (!(0 < fq)) {
        var a = om(),
            b = [],
            c = -1;
        R.i.forEach(function(f) {
            f.C && (Zj(f.h, R.c) && (c = b.length), b.push(f.h))
        });
        if (!(1 >= b.length)) {
            var d = c - 1;
            0 > d && (d = b.length - 1);
            var e = b[d];
            d = sl(e);
            R.c = e;
            e = d.C;
            e.Y.style.transform = "translateX(100%)";
            e.Y.style.display = "block";
            e.Ue.bind(e)();
            rp();
            po();
            fq = 2;
            d.C.Y.addEventListener("animationend", eq);
            zo(d.C.Y, "style_swipe_left");
            a.C.Y.addEventListener("animationend", gq);
            zo(a.C.Y, "style_swipe_left_out")
        }
    }
}

function hq() {
    this.m = D(document.body, "style_player_details")
}

function iq(a, b, c) {
    var d = a.m,
        e = F.w,
        f = D(d, "style_header_mobile_2"),
        h = C(f, "style_back");
    h.src = "./images/agent_back_white.png";
    c && (h.addEventListener("click", c), h.qo = d);
    f.Bf = t(D(f, "style_active_agent"), b, e);
    a.Bf = f.Bf;
    b = C(f, "style_back");
    b.src = "./images/agent_back_white.png";
    b.style.visibility = "hidden";
    a.N = f;
    d.addEventListener("touchstart", a.B);
    d.addEventListener("touchend", a.B)
}

function jq(a) {
    a = a.m;
    a.style.background = "none";
    a.style.paddingLeft = "20%";
    a.style.boxSizing = "border-box";
    a.style.paddingTop = "45px"
}
hq.prototype.B = function(a) {
    a.stopPropagation()
};

function Zp(a) {
    function b() {
        c.removeEventListener("animationend", b);
        c.classList.remove("style_slide_in");
        c.style.transform = ""
    }
    var c = a.m;
    c.style.transform = "translateX(100%)";
    c.style.display = "flex";
    c.addEventListener("animationend", b);
    zo(c, "style_slide_in")
}
hq.prototype.b = function() {
    function a() {
        b.removeEventListener("animationend", a);
        b.classList.remove("style_slide_out");
        b.style.display = "none"
    }
    var b = this.m;
    b.addEventListener("animationend", a);
    zo(b, "style_slide_out")
};

function kq() {
    hq.call(this);
    var a = this;
    iq(this, "_tTournament", function() {
        return a.Sa()
    });
    var b = this.m;
    b.style.backgroundColor = "black";
    this.c = new Map;
    this.H = 0;
    this.N.children[1].style.color = "white";
    var c = D(b, "style_m_category_bar");
    this.dc = [];
    ["_tInfo", "_tStructure", "_tGames", "_tPlayers", "_tPrizes"].forEach(function(f) {
        var h = t(D(c, "button unchecked", ""), f, F.w);
        h.style.width = "20%";
        h.addEventListener("click", function() {
            return lq(h)
        });
        a.dc.push(h)
    });
    var d = this.dc[0];
    this.P = this.dc[2];
    H(".style_bet_wrapper\n\t\t{\n\t\t\tvisibility: hidden;\n\t\t\tdisplay: flex;\n\t\t\tposition: absolute;\n\t\t\ttransform: translateX(-100%);\n\t\t} ");
    H(".style_bet_button_wrapper\n\t\t{ \n\t\t\tpadding: 10px;\n\t\t\tbackground: rgba(0, 0, 0, 0.65);\n\t\t\tborder: 1px solid dimgrey; \n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\talign-self: center;\n\t\t\tborder-top-left-radius: 5px; \n\t\t\tborder-bottom-left-radius: 5px; \n\t\t\tborder-right: none;\n\t\t} ");
    H(".style_bet_button\n\t\t{ \n\t\t\tdisplay: flex; \n\t\t\talign-items: center; \n\t\t\tjustify-content: center; \n\t\t\tcolor: white; \n\t\t\tfont: 26px Roboto, Arial; \n\t\t\tborder-radius: 5px; \n\t\t\tpadding: 2px 13px; \n\t\t\tbackground-color: rgba(32,32,32,1); \n\t\t\tbackground-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.0)); \n\t\t} ");
    H(".style_m_tinfo\n\t\t{\n\t\t\tcolor: white;\n\t\t\tpadding: 10px;\n\t\t\tflex: 1 1 auto;\n\t\t\tfont: 14px/26px Roboto, Arial;\n\t\t\tjustify-content: space-between;\n\t\t}");
    H(".style_m_tinfo_left\n\t\t{\n\t\t\tcolor: gold;\n\t\t\twidth: 50%;\n\t\t}");
    H(".style_m_tinfo_right\n\t\t{\n\t\t\twidth: 50%;\n\t\t}");
    var e = D(b, "style_flex_column style_m_tinfo");
    d.Fb = e;
    this.na = D(e, "style_flex_column");
    this.i = D(e, "style_button", l("_tRegister"));
    this.i.addEventListener("click", mq);
    this.i.style.marginTop =
        "10px";
    this.i.style.alignSelf = "center";
    this.s = D(e, "style_button", l("_tUnregister"));
    this.s.addEventListener("click", nq);
    this.s.style.marginTop = "10px";
    this.s.style.alignSelf = "center";
    d = d.nextSibling;
    e = D(b, "style_m_table_wrapper");
    e.style.padding = "10px";
    this.G = d.Fb = e;
    d = d.nextSibling;
    e = D(b, "style_m_table_wrapper");
    e.style.padding = "10px";
    this.K = d.Fb = e;
    d = d.nextSibling;
    e = D(b, "style_m_table_wrapper");
    e.style.padding = "10px";
    this.xd = d.Fb = e;
    d = d.nextSibling;
    e = D(b, "style_m_table_wrapper");
    e.style.padding = "10px";
    this.L = d.Fb = e
}
k(kq, hq);
kq.prototype.Sa = function() {
    S(Zl(this.H, ng));
    hq.prototype.b.call(this)
};

function lq(a) {
    for (var b = a.parentElement.firstChild; b; b = b.nextSibling) b.classList.add("unchecked"), b.Fb.style.display = "none";
    a.classList.remove("unchecked");
    a.Fb.style.display = "flex"
}

function oq(a) {
    Ab(a.K);
    var b = R.s.get(a.H);
    b && b.va && (b = b.va, 1 >= b.Dc.length ? a.P.style.display = "none" : (a.P.style.display = "block", b.Dc.forEach(function(c) {
        D(a.K, "style_m_payout_row").textContent = yk(c)
    })))
}

function pq(a) {
    var b = qq(a.H);
    a.i.style.display = "none";
    a.s.style.display = "none";
    1 == b ? a.i.style.display = "flex" : 2 == b && (a.s.style.display = "flex");
    if ((b = R.s.get(a.H)) && b.ia) {
        var c = rq(b.va, b.ia, b.vn);
        Ab(a.na);
        var d = 0;
        c[0].forEach(function(e) {
            var f = D(a.na, "style_flex_row");
            D(f, "style_m_tinfo_left", e);
            D(f, "style_m_tinfo_right", c[1][d]);
            d++
        })
    }
}
kq.prototype.ga = function(a) {
    Ab(this.xd);
    this.c.clear();
    this.H = a;
    this.Bf.textContent = l("_tTournament") + " " + a;
    pq(this);
    oq(this)
};

function sq(a) {
    var b = Y.L,
        c = R.s.get(a.H),
        d = new ik(Wd, Rd),
        e = null == c.va ? d : c.va.X;
    if (a.ca == pg) {
        var f = 0 == b.c.size;
        a.R.forEach(function(u) {
            var w = null;
            f || (w = b.c.get(u.f));
            if (!w) {
                w = D(b.xd, "style_m_lobby_row");
                var x = D(w, "style_subrow_upper");
                w.wd = D(x, "", "");
                D(x, "", "");
                x = D(w, "style_subrow_lower");
                w.Xn = D(x, "", "");
                w.Wn = D(x, "", "");
                b.c.set(u.f, w)
            }
            w.A = u;
            x = Sn(u.f);
            0 < u.Gj && (x += " [" + (u.Gj + 1) + "]");
            w.wd.textContent = x;
            x = "";
            0 < u.T ? (x = y(u.T, !0), 0 < u.ra && (x += " (" + y(u.ra, void 0) + ")")) : 0 < u.V ? x = y(u.V, void 0) : Ad(c.ia.Ia) && 0 ==
                u.T && (x = "Finished", 0 < u.yj && (x += " (" + y(u.yj, void 0) + ")"));
            w.Xn.textContent = x
        });
        var h = 1;
        a = [];
        for (var n = b.xd.firstChild; n; n = n.nextSibling) a.push(n);
        a.sort(tq);
        a.forEach(function(u) {
            b.xd.appendChild(u);
            u.A.tb = h++
        });
        for (a = b.xd.firstChild; a; a = a.nextSibling)
            if (0 == a.A.T) switch (c.ia.Ia) {
                case vd:
                case wd:
                case zd:
                    a.style.opacity = .5;
                    break;
                case xd:
                    a.style.opacity = ""
            } else a.Wn.textContent = "Rank: " + a.A.tb, a.style.opacity = ""
    } else if (a.ca == Ih) a.R.forEach(function(u) {
        var w = b.c.get(u);
        w && (w.remove(), b.c.delete(u))
    });
    else if (a.ca == sg) Ab(b.L), a.xh.R.forEach(function(u) {
        var w = D(b.L, "style_m_payout_row"),
            x = u.Ig;
        u.Ig != u.Mg && (x += "-" + u.Mg);
        D(w, "", x);
        D(w, "", y(u.V, void 0))
    });
    else if (a.ca == qg) {
        Ab(b.G);
        c.vn = a.R;
        var p = new ik(Wd, Sd),
            q = new ik(ee, Sd);
        a.R.forEach(function(u) {
            var w = D(b.G, "style_m_lobby_row"),
                x = D(w, "style_subrow_upper");
            D(x, "", vk(e));
            var I = u.Ff / 60,
                J = "" + I;
            D(x, "", 1 == I ? J + " min" : J + " mins");
            x = D(w, "style_subrow_lower");
            sk(e) ? (D(x, "", nk(d, u.O, !1, !0) + " (NL/PL)"), x = D(x, "", ""), 0 < u.Rg && (x.textContent = "+" + u.Rg + " secs"), x =
                D(w, "style_subrow_lower"), D(x, "", nk(p, u.rh, !1, !0) + " (Limit)"), x = D(w, "style_subrow_lower"), D(x, "", nk(q, u.sh, !1, !0) + " (Stud\t)")) : (D(x, "", nk(e, u.O, !1, !0)), w = D(x, "", ""), 0 < u.Rg && (w.textContent = "+" + u.Rg + " secs"))
        })
    }
}

function uq() {
    hq.call(this);
    var a = this;
    iq(this, "_tCashier", function() {
        return a.b()
    });
    var b = this.m;
    H(".style_cashier_item_mobile { display: flex; height: 40px; justify-content: space-between; padding: 0px 20px;\talign-items: center; }");
    H(".style_cashier_item_mobile_2 { font: 16px Roboto, Arial; color: black; }");
    H(".style_cashier_value_mobile {  font: 16px Roboto, Arial; color: dimgrey;}");
    b.wa = D(b, "style_m_table_wrapper");
    var c = D(b.wa, "style_cashier_item_mobile"),
        d = D(c, "style_cashier_item_mobile_2");
    b.Ec = D(c, "style_cashier_value_mobile");
    t(d, "_tBalance", F.w);
    c = D(b.wa, "style_cashier_item_mobile");
    d = D(c, "style_cashier_item_mobile_2");
    b.Bg = D(c, "style_cashier_value_mobile");
    t(d, "_tInPlay", F.w);
    b = D(b.wa, "style_cashier_item_mobile");
    b.style.justifyContent = "center";
    b.style.height = "auto";
    b.style.flexDirection = "column";
    b = t(E(b, "style_button"), "_tChangePassword", F.w);
    b.style.marginTop = "1em";
    b.addEventListener("click", function() {
        return vq()
    })
}
k(uq, hq);
uq.prototype.Oi = function() {
    var a = this.m;
    a.Ec.textContent = y(R.Ub);
    a.Bg.textContent = y(R.ee)
};

function wq() {
    hq.call(this);
    var a = this;
    iq(this, "_tHandHistory", function() {
        return a.b()
    });
    var b = this.m;
    H(".m_history_row { display: flex; flex-direction: row; padding: 5px 8px; border-bottom: solid 1px dimgray; font: 12px Roboto, Arial; color: white; }");
    H(".m_history_column { flex: 1; display: flex; flex-direction: column; justify-content: space-between; width: 10px; overflow-x: hidden; }");
    H(".m_history_cell { \n\t\t\tflex: 3;\n\t\t\twidth: 10px;\n\t\t\toverflow-x: hidden;\n\t\t}");
    b.style.backgroundColor =
        "black";
    b.C = D(b, "style_m_table_wrapper")
}
k(wq, hq);

function xq(a, b) {
    var c = a.m;
    a = D(c.C, "m_history_row");
    c.C.insertBefore(a, c.C.firstChild);
    c = D(a, "m_history_column");
    c.style.flex = "4";
    D(c, "", b.Rj);
    D(c, "", b.sc);
    c = D(a, "m_history_cell", "");
    for (var d = 0; d < b.u.length; d++) {
        var e = C(c, "style_card", "./images/decks/preview/" + b.u[d] + ".png");
        2 < b.u.length && (e.style.transform = "translateX(-" + 33 * d + "%)")
    }
    c = D(a, "m_history_column");
    c.style.textAlign = "right";
    c.style.flex = "2";
    D(c, "", b.fj.join(","));
    c = D(c);
    jc(c, b.Ej);
    a.addEventListener("click", function() {
        var f = b.sc,
            h = Y;
        h.B.Y.style.display =
            "block";
        h.b.style.display = "none";
        yq(h, f);
        h.B.Yb.bind(h.B)();
        h.b.style.display = "none";
        h.fb.m.style.display = "none"
    })
}

function zq() {
    hq.call(this);
    var a = this;
    iq(this, "_tChooseAvatar", function() {
        return a.b()
    });
    var b = this.m;
    b.wa = D(b, "style_m_table_wrapper");
    for (var c = null, d = 0; d < R.K.length; d++) {
        0 == d % 5 && (c = D(b.wa, "row"));
        var e = C(c, "mobile_picker", R.K[d].src);
        e.addEventListener("click", function(f) {
            Aq(f.currentTarget.Jc);
            X.N.m.Wd.src = Bq(R.ea);
            a.b()
        });
        e.Jc = d
    }
}
k(zq, hq);

function Cq() {
    hq.call(this);
    var a = this;
    iq(this, "_tSettings", function() {
        return a.Sa()
    });
    var b = this.m;
    b.wa = D(b, "style_m_table_wrapper");
    var c = D(b.wa, "style_settings_row");
    t(D(c, ""), "_tAvatar", F.w);
    b.Wd = C(c, "style_m_avatar");
    c.addEventListener("click", function() {
        return Zp(X.Na)
    });
    c.style.padding = "5px 10px";
    c = D(b.wa, "style_settings_row");
    c.style.height = "fit-content";
    c.style.padding = "5px 10px";
    t(ic(c), "_tCardBack", F.w);
    b.ve = [];
    c = D(c, "style_flex_row");
    for (var d = {}, e = 0; e < U.b.length; d = {
            ke: d.ke
        }, e++) d.ke =
        C(c, "style_deck_option_image"), d.ke.src = U.b[e].src, d.ke.tc = e, d.ke.addEventListener("click", function(h) {
            return function() {
                b.Mb = h.ke.tc;
                Dq(a)
            }
        }(d)), b.ve.push(d.ke);
    c.children[2].style.marginRight = "0px";
    c.children[0].style.filter = "brightness(100%)";
    b.vf = Eq(b.wa, "_tDisplayCurrentHandValue");
    b.rf = Eq(b.wa, "_tAutoMuckCards");
    b.qf = Eq(b.wa, "_tAutoEnableTimeBank");
    b.uf = Eq(b.wa, "_tDisplayFoldedCards");
    b.yf = Eq(b.wa, "_tRunItTwice");
    b.sf = Eq(b.wa, "_tBlockAnimations");
    b.wf = Eq(b.wa, "_tDisplayStackBBRing");
    b.Ee = Eq(b.wa,
        "_tDisplayStackBBTourney");
    b.ol = Fq(b.wa);
    var f = [];
    window.LangsMap.forEach(function(h) {
        f.push(h[0]);
        f.push(h[2])
    });
    b.Gc = Gq(b.wa, "_tLanguage", f);
    b.Af = Gq(b.wa, "_tSounds", Hq)
}
k(Cq, hq);
Cq.prototype.Sa = function() {
    this.b();
    var a = this.m;
    R.b.Mb = a.Mb;
    R.b.ze = a.vf.fd;
    R.b.ff = a.rf.fd;
    R.b.de = a.Af.value;
    R.b.qg = a.yf.fd;
    R.b.ef = a.qf.fd;
    R.b.hf = a.uf.fd;
    R.b.gf = a.sf.fd;
    R.b.Sc = a.wf.fd;
    R.b.Tc = a.Ee.fd;
    a: {
        var b = a.ol;
        for (var c = 0; c < b.length; c++)
            if (b[c].checked) {
                b = c;
                break a
            } b = 0
    }
    R.b.ae = b;
    a = a.Gc.value;
    R.b.lb != a && (wa(a), R.b.lb = a, Iq(), Y.Gc.value = a, (a = om()) && a.C.Ue.bind(a.C)());
    po();
    K("bet_increment", R.b.ae.toString());
    Jq()
};

function Dq(a) {
    a = a.m;
    a.ve.forEach(function(b) {
        return b.style.filter = ""
    });
    a.ve[a.Mb].style.filter = "brightness(100%)"
}
Cq.prototype.ga = function() {
    var a = X.N.m;
    a.Mb = R.b.Mb;
    Dq(this);
    Kq(a.vf, R.b.ze, !0);
    Kq(a.rf, R.b.ff, !0);
    a.Af.value = R.b.de;
    Kq(a.yf, R.b.qg, !0);
    Kq(a.qf, R.b.ef, !0);
    Kq(a.uf, R.b.hf, !0);
    Kq(a.sf, R.b.gf, !0);
    for (var b = a.ol, c = R.b.ae, d = 0; d < b.length; d++) {
        var e = b[d];
        e.checked = d == c;
        Yb(e)
    }
    a.Wd.src = Bq(R.ea);
    Kq(a.wf, R.b.Sc, !0);
    Kq(a.Ee, R.b.Tc, !0);
    a.Gc.value = R.b.lb;
    Zp(this)
};

function Lq(a, b, c) {
    var d = D(a, "style_cb_outer_2");
    a = D(d, "style_cb_text_2");
    d.Xd = D(d, "style_radio_box_2");
    D(d.Xd, "style_radio_button_2");
    a.textContent = b;
    t(a, b, c);
    d.addEventListener("click", function() {
        return Zb(d)
    });
    Xb(d, !1);
    return d
}

function Fq(a) {
    var b = ["_tSmallBlind", "_tBigBlind"],
        c = F.w;
    a = D(a, "style_settings_row");
    var d = D(a, "");
    t(d, "_tBetStep", c);
    a = D(a, "style_flex_column");
    a.style.alignItems = "flex-end";
    d = [];
    for (var e = 0; e < b.length; e++) {
        var f = Lq(a, b[e], c);
        0 != e && (f.style.marginTop = "6px");
        f.ej = d;
        d.push(f)
    }
    return d
}

function Gq(a, b, c) {
    a = D(a, "style_settings_row");
    var d = D(a, "");
    t(d, b, F.w);
    return Ub(a, c, "style_m_settings_combo")
}

function Eq(a, b) {
    var c = F.w;
    a = D(a, "style_settings_row");
    t(D(a, ""), b, c);
    b = D(a, "style_cb_back");
    c = D(b, "style_cb_settings_button");
    a.addEventListener("click", Mq);
    c.addEventListener("transitionend", Nq);
    return b
}

function Oq(a) {
    a.fd ? (a.style.borderColor = "rgb(80,195,110)", a.style.background = "rgb(80,195,110)") : (a.style.background = "", a.style.borderColor = "")
}

function Nq(a) {
    Oq(a.currentTarget.parentElement)
}

function Kq(a, b, c) {
    a.fd = b;
    a.firstChild.className = b ? "style_cb_settings_button style_cb_settings_button_on" : "style_cb_settings_button";
    (void 0 === c ? 0 : c) && Oq(a)
}

function Mq(a) {
    a = a.currentTarget.children[1];
    a.fd ? Kq(a, !1) : Kq(a, !0)
}

function op(a, b, c) {
    var d = a.wa.lastChild;
    if (d && d.f == b) var e = d.lastChild;
    else {
        d = D(a.wa, "style_chat_block");
        if (b == R.f) e = D(d, "style_my_chat_column");
        else if (-1 != b) {
            e = C(d, "style_chat_image");
            var f = Kn(b);
            f && (e.src = f.src);
            e = D(d, "style_flex_column");
            E(e, "style_chat_name", Sn(b))
        } else C(d, "style_chat_image", "./images/dealer.png"), e = D(d, "style_flex_column"), E(e, "style_chat_name", "Dealer");
        d.f = b
    }
    D(e, b == R.f ? "style_m_chat" : "style_m_player_chat", c);
    a.wa.scrollTop = a.wa.scrollHeight
}

function aq(a, b) {
    var c = D(a, "style_player_details");
    c.addEventListener("click", function(d) {
        d.target != c.Fc && d.target != c.qj && Mp(c)
    });
    c.style.background = "none";
    c.style.paddingLeft = "20%";
    c.style.boxSizing = "border-box";
    c.style.paddingTop = "45px";
    c.wa = D(c, "style_m_table_wrapper");
    c.wa.style.background = "rgba(0, 0, 0, 0.5)";
    c.wa.style.display = "flex";
    c.wa.style.flexDirection = "column";
    D(c.wa, "style_m_chat_spacer");
    a = D(c, "style_m_chat_bar");
    c.Fc = Tb(a, "text", "style_chat_input");
    c.Fc.maxLength = 50;
    c.Fc.placeholder =
        l("_tEnterChat");
    t(c.Fc, "_tEnterChat", b.la.jg);
    c.qj = C(a, "style_back");
    c.qj.src = "./images/agent_enter_text.png";
    c.qj.addEventListener("click", function() {
        return Pq(c)
    });
    c.addEventListener("touchend", function(d) {
        return d.stopPropagation()
    });
    return c
}

function Pq(a) {
    var b = a.Fc.value.trim();
    if (!m(b)) {
        var c = om();
        S((new Hl(b, R.f, c.h)).J());
        a.Fc.readOnly = !0;
        a.Fc.style.backgroundColor = "lightgrey";
        setTimeout(function() {
            a.Fc.readOnly = !1;
            a.Fc.style.backgroundColor = ""
        }, 3E3);
        Mp(a)
    }
    a.Fc.value = ""
}

function vl(a, b) {
    void 0 != b && (a.checked = b);
    b = a.Tn.style;
    a.checked ? (b.border = "0.1em solid rgba(0,0,0,0.6)", b.backgroundColor = "lightgreen") : (b.border = "none", b.backgroundColor = "rgba(0,0,0,0.6)")
}

function cq() {
    Y.B.Y.style.display = "block";
    this.Y.style.display = "none";
    yq(Y, this.dg);
    Y.B.Yb.bind(Y.B)();
    Y.B.zh = this.g.ya()
};

function Qq() {
    um.call(this);
    this.la = new ua;
    Pp();
    this.Ji();
    this.G = new gb;
    this.Aa = null;
    this.aa = 0;
    this.N = [];
    this.L = [];
    this.xb = this.U = null;
    this.Da = 0
}
k(Qq, um);
g = Qq.prototype;
g.Ji = function() {
    var a = this;
    xm(this);
    H(".style_replay { position: absolute; color: gainsboro; font: bold 32pt Roboto,Arial; z-index: 50; }");
    this.Ta = D(this.Y, "style_replay", "R");
    D(this.Y, "info_section table_font");
    this.ea = D(this.i, "style_button_group");
    Rq(this, this.ea);
    var b = D(this.ea, "style_flex_row");
    b.style.marginTop = "12px";
    [
        ["replayer_start.png", this.Ei.bind(this)],
        ["replayer_previous.png", this.hm.bind(this)],
        ["replayer_play.png", this.Jm.bind(this)],
        ["replayer_next.png", this.Ci.bind(this)],
        ["replayer_end.png",
            this.rm.bind(this)
        ]
    ].forEach(function(c) {
        var d = D(b, "style_replayer_button");
        d.style.height = "38px";
        d.addEventListener("click", c[1]);
        C(d, "", "./images/" + c[0]).style.height = "28px"
    });
    this.Oa = b.children[2];
    this.Ma = [];
    b = D(this.ea, "style_flex_row");
    b.style.marginTop = "1px";
    [
        ["FLOP", this.Oc.bind(this)],
        ["TURN", this.Oc.bind(this)],
        ["RIVER", this.Oc.bind(this)]
    ].forEach(function(c) {
        var d = D(b, "style_replayer_button", c[0]);
        d.style.height = "22px";
        d.style.flex = "1";
        d.addEventListener("click", c[1]);
        a.Ma.push(d)
    });
    this.Va =
        b;
    b = D(this.ea, "style_flex_row");
    b.style.marginTop = "1px";
    [
        ["3RD", this.Oc.bind(this)],
        ["4TH", this.Oc.bind(this)],
        ["5TH", this.Oc.bind(this)],
        ["6TH", this.Oc.bind(this)],
        ["7TH", this.Oc.bind(this)]
    ].forEach(function(c) {
        var d = D(b, "style_replayer_button", c[0]);
        d.style.height = "22px";
        d.style.flex = "1";
        d.addEventListener("click", c[1]);
        a.Ma.push(d)
    });
    this.na = b;
    b = D(this.ea, "style_flex_row");
    b.style.marginTop = "1px";
    [
        ["1ST DRAW", this.Oc.bind(this)],
        ["2ND DRAW", this.Oc.bind(this)],
        ["3RD DRAW", this.Oc.bind(this)]
    ].forEach(function(c) {
        var d =
            D(b, "style_replayer_button", c[0]);
        d.style.height = "22px";
        d.style.flex = "1";
        d.addEventListener("click", c[1]);
        a.Ma.push(d)
    });
    this.Na = b
};
g.Jm = function() {
    0 != this.Da ? 0 != this.Da && (clearTimeout(this.Da), this.Da = 0, this.Oa.firstChild.src = "./images/replayer_play.png") : (this.aa == this.L.length - 1 ? this.Ei() : this.Ci(), this.Da = setTimeout(this.vk.bind(this), 1E3), this.Oa.firstChild.src = "./images/replayer_pause.png")
};
g.vk = function() {
    this.Da = 0;
    this.Ci();
    this.aa < this.L.length - 1 ? this.Da = setTimeout(this.vk.bind(this), 1E3) : this.Oa.firstChild.src = "./images/replayer_play.png"
};
g.rm = function() {
    Sq(this, this.aa + 1, this.L.length - 1)
};
g.Ci = function() {
    for (var a = ba(this.N), b = a.next(); !b.done; b = a.next())
        if (b = b.value, b > this.aa) {
            Sq(this, this.aa + 1, b);
            break
        }
};
g.hm = function() {
    for (var a = this.N.length - 1; 0 <= a; a--) {
        var b = this.N[a];
        if (b < this.aa) {
            Sq(this, 0, b);
            break
        }
    }
};
g.Ei = function() {
    Sq(this, 0, this.N[0])
};
g.Oc = function(a) {
    a = a.currentTarget.uc; - 1 != a && (this.aa < a ? Sq(this, this.aa + 1, a) : Sq(this, 0, a))
};

function Sq(a, b, c) {
    if (0 == b) {
        fm = !0;
        var d = new Mi(a.xb);
        d = em(d);
        fm = !1;
        if (d) {
            a.g = d.g;
            for (d = 0; d < a.g.v.length; d++) a.mc.Db[d] = new xl;
            a.Yb()
        }
    }
    for (; b <= c; b++) {
        d = a;
        var e = a.L[b];
        if (e.ca == Vf) {
            d.g = e.g;
            for (e = 0; e < d.g.v.length; e++) d.mc.Db[e] = new xl;
            rp()
        } else {
            var f = d.g;
            f.ne(d, e.ca, e);
            d.mc.ne(e, f);
            Al(d.mc, e)
        }
    }
    a.$a();
    a.aa = c
}
g.jk = function() {};
g.yc = function(a) {
    this.ab = a.index;
    this.cd = a.hands;
    this.Mc = a.table_id;
    var b = a.data;
    this.mi.textContent = a.game_id;
    this.L = [];
    this.U = null;
    a = ba(b.messages);
    for (b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        fm = !0;
        var c = new Mi(b);
        c = em(c);
        fm = !1;
        c && (c.ca == Vf ? (this.xb = b.slice(0), b = c.g.o, this.U = b.X, this.jk(b)) : this.L.push(c))
    } [this.Na, this.na, this.Va].forEach(function(d) {
        return d.style.display = "none"
    });
    this.N = [];
    for (a = 0; a < this.L.length; a++)
        if (b = this.L[a], 0 != this.N.length || b.ca == Yf) switch (b.ca) {
            case Yf:
            case nh:
            case Xg:
            case dg:
            case Qh:
            case oh:
                this.N.push(a);
                break;
            case $f:
                b.Pk && this.N.push(a);
                break;
            case Tf:
                b.fc == bd && a + 1 < this.L.length && this.L[a + 1].ca == Yf || this.N.push(a)
        }
    this.Ma.forEach(function(d) {
        return d.uc = -1
    });
    this.U && (tk(this.U) ? this.Va.style.display = "flex" : ok(this.U) ? (this.na.style.display = "flex", this.na.children[0].uc = this.N[0]) : rk(this.U) && (this.Na.style.display = "flex"));
    for (a = 0; a < this.L.length; a++) b = this.L[a], b.ca == $g && (rk(this.U) ? 2 == b.Wb ? this.Na.children[0].uc = a : 4 == b.Wb ? this.Na.children[1].uc = a : 6 == b.Wb && (this.Na.children[2].uc = a) : tk(this.U) ?
        1 == b.Wb ? this.Va.children[0].uc = a : 2 == b.Wb ? this.Va.children[1].uc = a : 3 == b.Wb && (this.Va.children[2].uc = a) : ok(this.U) && (1 == b.Wb ? this.na.children[1].uc = a : 2 == b.Wb ? this.na.children[2].uc = a : 3 == b.Wb ? this.na.children[3].uc = a : 4 == b.Wb && (this.na.children[4].uc = a)));
    this.Ma.forEach(function(d) {
        return d.style.filter = -1 == d.uc ? "brightness(50%)" : ""
    })
};
g.gh = function() {
    z || (this.sa.Zd.textContent = "", this.sa.ul.textContent = "", this.sa.style.display = "none", this.b.display = "none");
    this.ua.textContent = "";
    this.ua.style.display = "none";
    for (var a = 0; a < this.Ja.length; a++) this.Ja[a] && (this.Ja[a].forEach(function(b) {
        return b.remove()
    }), this.Ja[a] = []);
    this.sd.forEach(function(b) {
        return b.style.display = "none"
    });
    this.gb.forEach(function(b) {
        return b.style.display = "none"
    });
    this.ub.forEach(function(b) {
        return b.style.display = "none"
    });
    this.Zb.forEach(function(b) {
        b && (b.style.display =
            "none")
    });
    this.md.style.display = "none"
};
g.Jd = function() {
    var a = this.g;
    if (!a) return this.gh(), !1;
    var b = a.o;
    this.ci.style.display = "";
    this.K.style.display = "";
    b = lk(b);
    rj(b) ? (this.s.src = "./images/chinese_horizontal.jpg", b.l == Ae ? this.s.style.filter = "hue-rotate(255deg)" : b.l == de && (this.s.style.filter = "hue-rotate(25deg)")) : uj(b) ? (this.s.src = "./images/chinese_horizontal.jpg", this.ci.style.display = "block", this.K.style.display = "flex") : (this.s.src = z ? "./images/table_vertical_1.png" : "./images/table_horizontal_1.png", this.s.style.filter = "");
    var c = "";
    Fd ==
        a.lc && (c = Ln(b.l, a.g).toUpperCase());
    this.ua.textContent = c;
    this.ua.style.display = m(c) ? "none" : "block";
    return !0
};
g.ek = function(a, b) {
    var c = this,
        d = this.Cb.Ed,
        e = a.j,
        f = gn(b, a.j),
        h = this.sd[e];
    h.style.display = "none";
    var n = this.gb[e];
    n.style.display = "none";
    this.Zb[e] && (this.Zb[e].style.display = "none");
    this.ub[e].style.display = "none";
    var p = this.Ja[e],
        q = this.Id[e];
    a.Bc.length != q.length && (q.forEach(function(J) {
        return J.remove()
    }), q.length = 0, a.Bc.forEach(function() {
        return q.push(C(c.Ba[a.j], "card"))
    }));
    var u = 0;
    a.Bc.forEach(function(J) {
        var G = q[u++];
        G.src = kn(J);
        G.alt = ln(J);
        G.qa = J;
        G.style.display = "none"
    });
    if (!rj(lk(b.o))) {
        if (a.u.length +
            a.pb.length != p.length) {
            p.forEach(function(J) {
                return J.remove()
            });
            p.length = 0;
            a.u.forEach(function() {
                return p.push(C(c.Ba[a.j], "card"))
            });
            for (var w = 0; w < a.pb.length; w++) {
                var x = C(this.Ba[a.j], "card"),
                    I = p[a.nc[w]];
                I.parentElement.insertBefore(x, I.nextSibling);
                p.push(x)
            }
        }
        u = 0;
        a.u.forEach(function(J) {
            var G = p[u++];
            G.src = kn(J);
            G.alt = ln(J);
            G.qa = J;
            G.style.display = "none"
        });
        a.pb.forEach(function(J) {
            var G = p[u++];
            G.src = kn(J);
            G.alt = ln(J);
            G.qa = J;
            G.style.display = "none"
        })
    }
    Jm(this, f);
    0 != a.f && (Nn(this, a, b), Mn(this, a, b),
        f = gn(b, a.j), zn(this, b, a, f), Jn(b, a, h), Gn(this, b, a, h, n), 0 == a.ra ? h.Vc.style.display = "none" : (h.Vc.style.display = "flex", h.oj.textContent = y(a.ra, void 0), h.Vc.title = "Knocking out this player pays a bounty of " + y(a.ra, void 0)), e == b.cg && (this.fa.style.display = "block"), tn(this, a), e = this.Zb[a.j]) && (b = Im(this, f, b), B(e, b), 0 < d.Ga[f].x ? e.style.transform = "translate(-100%,-100%)" : 0 > d.Ga[f].x && (e.style.transform = "translate(0%,-100%)"), e.style.display = "flex")
};
g.Ni = function() {};

function Tq() {
    Qq.call(this);
    this.G = new gb;
    this.Aa = null;
    this.fi.set(22, 20);
    this.mi = D(this.Y, "style_m_hand_number table_font");
    var a = D(this.Y, "style_header_table_mobile");
    a.style.zIndex = 10;
    var b = C(a, "style_back");
    b.src = "./images/agent_back_white.png";
    b.addEventListener("click", this.sm.bind(this));
    b = D(a, "style_table_info_column");
    this.wb = D(b, "style_table_name_mobile");
    b = D(b, "style_flex_row");
    this.ja = D(b, "style_table_game_mobile");
    this.Bb = D(b, "style_table_game_mobile");
    this.Bb.style.paddingLeft = "0.5em";
    C(a, "style_back").style.visibility = "hidden";
    ya(this.la);
    this.zh = null
}
k(Tq, Qq);
g = Tq.prototype;
g.sm = function() {
    this.Y.style.display = "none";
    this.zh ? Y.Ob(this.zh) : (Yp(), Y.fb.m.style.display = "block");
    this.zh = null
};
g.jk = function(a) {
    this.wb.textContent = a.Sb;
    this.ja.textContent = vk(a.S) + " " + nk(a.X, a.O, !1, Wj(a.h))
};
g.yc = function(a) {
    Qq.prototype.yc.call(this, a);
    this.kc.textContent = this.ab + 1 + " / " + this.cd;
    this.Ei()
};
g.Yb = function() {
    var a = new gb(0, 0, window.innerWidth, window.innerHeight);
    if (this.g) {
        var b = this.g.o,
            c = new gb(a.left, a.bottom - 100, a.right, a.bottom);
        Db(this.ea, .5 * c.right, c.bottom);
        var d = new gb(0, 45, a.right, c.top);
        this.G.set(a.left, 45, a.right, c.top);
        this.Qf && A(this.Qf, this.G);
        this.Aa = on(d);
        zm(this);
        A(this.s, this.Aa);
        if (!b) return !1;
        this.Cb = qj(lk(b), b.v);
        if (!this.Cb.Ed) return !1;
        a = this.Cb.Le;
        rj(b.S) && A(this.s, this.G);
        Fm(this, this.Aa.height() * R.b.Yi);
        this.c = .35 * Jm(this, 0).Ne.height();
        c = Math.floor(c.bottom -
            c.top);
        this.gi.set(.75 * c, .3 * c);
        Bm(this, this.Aa.height() * R.b.Zi / 10);
        B(this.ri, Am(this, a.Pj));
        B(this.ua, Am(this, a.Oj));
        this.Ta.style.fontSize = 4 * this.c + "pt";
        B(this.Ta, Am(this, a.Pl));
        rj(lk(b)) && Hp(this, b);
        return !0
    }
};

function Rq(a, b) {
    var c = D(b, "style_flex_row");
    c.style.justifyContent = "flex-end";
    a.kc = D(c, "style_hand_index");
    c = D(b, "style_flex_row");
    c.style.justifyContent = "center";
    H(".style_replayer_button { flex: 1; margin: 0px 1px; display: flex; justify-content: center; align-items: center; border-radius: 2px; background-color: rgb(32,32,32); height: 24px; font: bold 14px Arial; color: gainsboro; background-image: linear-gradient(hsla(0,0%,100%,.4), hsla(0,0%,100%,0)); \toutline: none;\t} ");
    c = D(a.ea, "style_flex_row");
    c.style.justifyContent = "space-between";
    var d = D(c, "style_flex_row");
    d.style.width = "33%";
    [
        ["replayer_first_game.png", a.tm.bind(a)],
        ["replayer_prev_game.png", a.Km.bind(a)]
    ].forEach(function(e) {
        var f = D(d, "style_replayer_button");
        f.style.height = "24px";
        f.addEventListener("click", e[1]);
        C(f, "", "./images/" + e[0]).style.height = "20px"
    });
    d = D(c, "style_flex_row");
    d.style.width = "33%";
    [
        ["replayer_next_game.png", a.Gm.bind(a)],
        ["replayer_last_game.png", a.xm.bind(a)]
    ].forEach(function(e) {
        var f = D(d, "style_replayer_button");
        f.style.height = "24px";
        f.addEventListener("click", e[1]);
        C(f, "", "./images/" + e[0]).style.height = "20px"
    })
}
g.Ji = function() {
    Qq.prototype.Ji.call(this);
    H(".style_hand_index { color: orange; margin: 2px 0px; font: bold 14px Arial; width: 33%; text-align: center; } ");
    H(".style_button_group { width: 95%; display: flex; flex-direction: column; position: absolute; z-index: 10; transform: translate(-50%, -100%); } ")
};
g.tm = function() {
    var a = R.fk.bind(R)(this.Mc);
    a && this.yc(a)
};
g.xm = function() {
    var a = R.gk.bind(R)(this.Mc);
    a && this.yc(a)
};
g.Gm = function() {
    var a = R.hk.bind(R)(this.g.Xa, this.ab, this.Mc);
    a && this.yc(a)
};
g.Km = function() {
    var a = R.ik.bind(R)(this.g.Xa, this.ab, this.Mc);
    a && this.yc(a)
};
g.Ue = function(a) {
    var b = a.o;
    if (b) {
        var c = lk(b),
            d = "";
        if (Wj(a.ya())) {
            var e = "T" + a.ya().H + " ";
            e += yk(b.S);
            var f = nk(b.X, b.O, !1, !0);
            d = vk(c)
        } else e = b.Sb, f = nk(b.X, b.O, !1, !1), we == b.S.l ? a && (d = vk(c) + " (" + (a.Aj + 1) + "/" + a.Ij + ")") : d = vk(c);
        this.wb.textContent = e;
        this.Bb.textContent = f;
        this.ja.textContent = d;
        c && (this.ja.style.color = Ak(c.l) ? "rgb(255,128,255)" : "")
    }
};
/*
 TableMode && */
function Uq(a) {
    var b = R.s.get(a.H);
    b && (b.bc = a.R, Vq(Y, a.H))
}

function Wq(a, b) {
    (a = pm(a)) && !a.closed && a.postMessage(b, "*")
}

function Xq(a, b) {
    var c = R.s.get(a.H);
    c && (c.tb = a.tb, z || Wq(c.Rd, b.Pa))
}

function Yq(a) {
    a.R.forEach(function(b) {
        R.fb.ng.set(b.f, b);
        K("t" + b.f, b.Yc + ":" + b.Jc)
    });
    z ? (a = om()) && a.C && a.C.$a() : (Zq(Y, this.ha, this.Ag), Zq(Y, this.zc, this.mj))
}

function $q(a, b) {
    if (b.f == R.f) {
        R.fa.set(b.h.H, -1);
        var c = qm(b.h.H);
        c && (c.Rd = null)
    }
    z ? b.f == R.f && (a = sl(b.h)) && a.C && a.C.zn.ga(b.tb, b.xh.V, b.En, b.h) : (b.f == R.f && (c = qm(b.h.H)) && (c.Rd = null), Wq(b.h, a.Pa))
}

function ar(a, b) {
    R.fa.set(b.h.H, b.h.Fa);
    if (z) {
        if (!Zj(R.c, b.h)) {
            var c = sl(b.h);
            c || (c = new km(b.h), R.i.set(Vj(b.h), c));
            c.C || new Op(c, document.body);
            br.b.send((new W(b.h, Kf)).J());
            Up()
        }
    } else {
        c = !1;
        var d = qm(b.h.H);
        d && (d.Rd = b.h);
        d = pm(b.h);
        if (!d || d.closed) d = pm(b.Yk), !d || d.closed ? c = !0 : (d.postMessage(a.Pa, "*"), a = Vj(b.h), R.G.delete(Vj(b.Yk)), R.G.set(a, d)), c && (X.s.yc([{
            h: b.h,
            ka: b.ka,
            X: b.X,
            Za: b.Za,
            Ya: b.Ya
        }]), "flex" != X.s.m.style.display && (X.s.W(), rl(U.i, !0)))
    }
}

function cr(a, b) {
    console.log(a.ge);
    z ? dr(a.ge) : (dr(a.ge), er(b.Pa))
}

function fr(a) {
    R.fa.clear();
    0 != a.R.length && null == R.c && (z ? a.R.forEach(function(b) {
        R.fa.set(b.h.H, b.h.Fa);
        if (-1 != b.h.Fa) {
            var c = sl(b.h);
            c || (c = new km(b.h), R.i.set(Vj(b.h), c));
            c.C || new Op(c, document.body);
            br.b.send((new W(b.h, Kf)).J())
        }
    }) : (a.R.forEach(function(b) {
        -1 != b.h.H && R.fa.set(b.h.H, b.h.Fa);
        if (-1 != b.h.Fa) {
            var c = sl(b.h);
            c || (c = new km(b.h), R.i.set(Vj(b.h), c), br.b.send((new W(b.h, Kf)).J()))
        }
    }), a.R.forEach(function(b) {
        if (Wj(b.h)) {
            var c = qm(b.h.H);
            c || (c = new mm(b.h.H), R.s.set(b.h.H, c));
            0 <= b.h.Fa ? c.Rd = b.h :
                c.Rd = null
        }
    }), X.s.yc(a.R), 0 < gr(X.s) && sm(X.s), rp()))
}

function er(a) {
    R.G.forEach(function(b) {
        b.postMessage(a, "*")
    })
}

function hr(a) {
    R.B.forEach(function(b) {
        b.postMessage(a, "*")
    })
}

function ir(a, b) {
    if (z) {
        if (!R.b.gf && null == rc(a.f + "_bc")) {
            b = a.Cd;
            var c = om(),
                d = c.C.g;
            if (0 == a.Th) {
                var e = jr[b];
                if (a = Jk(d, a.f)) a = Jm(c.C, gn(d, a.j)), c = D(c.C.Wa, "style_smiley"), a = a.da, kb(a, .25 * a.width(), .25 * a.height()), A(c, a), c.Hg = 0, c.style.backgroundImage = "url('./images/" + e.Xb + "')", c.Xc = 0, c.Cd = b, requestAnimationFrame(kr.bind(c))
            } else {
                e = lr[b];
                var f = Jk(d, a.Th);
                if (f) {
                    f = Jm(c.C, gn(d, f.j));
                    var h = D(c.C.Wa, "style_smiley");
                    f = f.da;
                    kb(f, .25 * f.width(), .25 * f.height());
                    A(h, f);
                    h.Nj = mb(f);
                    h.Hg = 0;
                    h.style.backgroundImage =
                        "url('./images/" + e.Xb + "')";
                    h.Xc = 0;
                    h.Cd = b;
                    if (f = Jk(d, a.f)) b = Jm(c.C, gn(d, f.j)).da, kb(b, .25 * b.width(), .25 * b.height()), h.Vg = mb(b);
                    e.il = !1;
                    requestAnimationFrame(mr.bind(h))
                }
            }
        }
    } else Wq(a.h, b.Pa)
}

function nr(a, b) {
    z ? or(a) : (pr(a), -1 == a.R[0].f ? er(b.Pa) : Wq(a.R[0].h, b.Pa))
}

function qr() {
    var a = X.B.m;
    "flex" == a.style.display && (a.Ab--, 0 >= a.Ab ? rr.bind(a)() : (a.Fe.textContent = r("_tTakeSeat") + " (" + a.Ab + ")", setTimeout(qr, 1E3)))
}

function sr(a) {
    if (!X.na.le()) {
        var b = "???",
            c = "???",
            d = sl(a.h);
        d && d.o && (c = d.o, b = c.Sb, c = vk(c.S) + " " + nk(c.X, c.O));
        X.na.ga(a.h, b, c)
    }
}

function tr(a) {
    if ("flex" != X.B.m.style.display) {
        var b = "",
            c = "",
            d = a.h,
            e = a.j,
            f = a.Ab,
            h = sl(a.h);
        h && h.o && (c = h.o, b = c.Sb, c = vk(c.S) + " " + nk(c.X, c.O));
        h = X.B.m;
        h.wd.textContent = b;
        h.Zd.textContent = c;
        h.h = d;
        h.Ad = e;
        h.Ab = f;
        h.Fe.textContent = r("_tTakeSeat") + " (" + h.Ab + ")";
        Ob(h);
        setTimeout(qr, 1E3);
        rl(U.i, !0);
        z || er({
            name: b,
            game: c,
            command_type: Ka,
            table_id: Vj(a.h),
            seat: a.j,
            seconds: a.Ab
        })
    }
}

function ur(a, b) {
    a = a.tn;
    R.Gg = a.ao;
    R.Ub = a.io;
    R.ee = a.ee;
    vr();
    Y.Da.Oi();
    (a = om()) && a.C && (a.C.te.m.Ec.textContent = y(R.Ub, void 0));
    wr.m.Ec.textContent = y(R.Ub, void 0);
    er(b.Pa);
    hr(b.Pa)
}

function xr() {
    Kb();
    Ob(X.gb.m)
}

function yr() {
    var a = parseInt(rc("cards_check"));
    if (isNaN(a) || 0 == a) K("cards_check", 1), xr()
}

function zr(a, b) {
    z || Ar(Y);
    z && null != R.c ? br.b.send((new W(R.c, Kf)).J()) : Yp();
    Br && X.aa ? (X.aa.style.display = "flex", Br = !1) : yr();
    X.b && (X.b.style.display = "none");
    br.b.send((new El(a.f, Pg)).J());
    R.f = a.f;
    R.ea = a.Jc;
    R.he = a.he;
    R.Gg = a.Gg;
    R.Ub = a.Ub;
    R.Gl = a.Gl;
    R.gg = a.gg;
    vr();
    Y.b.Wd.src = Bq(R.ea);
    a = {
        f: R.f,
        Jc: R.ea,
        Yc: R.he
    };
    R.fb.ng.set(a.f, a);
    K("t" + a.f, a.Yc + ":" + a.Jc);
    br.b.send((new V(If)).J());
    br.b.send((new V(ig)).J());
    X.P && (ci != R.gg.un && (X.P.lastChild.previousSibling.style.display = "none"), R.gg.Cn || (X.P.lastChild.style.display =
        "none"));
    z || er(b.Pa)
}

function Yp() {
    Y.b.style.display = "flex";
    var a = om();
    a && a.C ? a.C.Y.style.display = "none" : Y.B && (Y.B.Y.style.display = "none");
    R.c = null;
    Y.Yb()
}

function Cr(a) {
    var b = qm(a);
    if (!b) return null;
    if (0 < b.ia.Ul) {
        var c = b.ia.Ul - (new Date).getTime() / 1E3;
        c -= R.vb;
        0 > c && (c = 0)
    } else c = b.ia.od.Ff;
    var d = new V(bi),
        e = new ArrayBuffer(1024);
    e = new Mi(e);
    d.b(e);
    M(e, a);
    M(e, b.ia.Df);
    M(e, c);
    Ri(e, b.ia.Ia);
    b.ia.od.Rf(e);
    b.ia.xe.Rf(e);
    nj(e, b.ia.xj);
    M(e, b.ia.kb);
    M(e, b.ia.zd);
    return Qi(e)
}

function Dr(a) {
    var b = null,
        c = new Tj;
    R.G.forEach(function(d, e) {
        Uj(c, e);
        c.H == a && (b || (b = Cr(a)), b && d.postMessage(b, "*"))
    })
}

function Er(a) {
    var b = a.h.toString();
    R.ab.set(b, {
        sc: a.sc,
        messages: [],
        u: [],
        Ej: 0,
        ce: 0,
        fj: [],
        Mc: b,
        Rj: "",
        gl: !1,
        g: null
    })
}

function Fr(a, b) {
    var c = a.h.toString(),
        d = R.ab.get(c);
    if (d) {
        if (d.gl) switch (a.ca) {
            case dg:
            case bh:
                d.messages.push(b.slice(0));
                break;
            default:
                return
        }
        if (a.ca == Yf && 0 == d.u.length && d.g) {
            var e = Q(d.g);
            if (e)
                for (var f = ba(a.D), h = f.next(); !h.done; h = f.next()) h = h.value, e.j == h.j && d.u.push(h.qa)
        }
        if (a.ca == qh) e = R.ja.get(c), e || (e = {
            mb: []
        }, R.ja.set(c, e)), e.mb.push(d.sc), R.U.push(d), R.aa.set(d.sc, R.U.length - 1), Y.Ki(d), d.gl = !0;
        else if (a.ca == th) {
            R.ab.delete(c);
            return
        }
        if (a.ca == Og)
            for (d.ce = a.fo, c = ba(a.R), e = c.next(); !e.done; e =
                c.next()) e = e.value, e.f == R.f && (d.Ej = e.co), 0 < e.$n && d.fj.push(Sn(e.f));
        else a.ca == Vf && (d.Rj = a.g.o.Sb, d.Mc = c, d.g = a.g);
        if (!d.g || !Zk(d.g, a)) switch (a.ca) {
            case Tf:
            case Xf:
            case Wf:
            case nh:
            case Xg:
            case ch:
            case Yf:
            case cg:
            case $f:
            case Vf:
            case Gh:
            case $g:
            case bh:
            case eh:
            case Rh:
            case Qh:
            case oh:
                d.messages.push(b.slice(0))
        }
    }
};
var ll = 200,
    Gr = 100,
    hl = 1E3,
    kl = 2E3,
    fl = 500,
    il = 500;

function wl(a) {
    dl++;
    a.Jd();
    el(a);
    for (var b = a.g, c = {}, d = 0; d < b.v.length; c = {
            ad: c.ad,
            ah: c.ah
        }, d++)
        if (0 != b.v[d].f) {
            var e = gn(b, d);
            c.ad = a.sd[d];
            c.ah = function(n) {
                return function() {
                    uo(n.ad);
                    n.ad.removeEventListener("animationend", n.ah);
                    n.ad.kd == dl && vo(n.ad)
                }
            }(c);
            c.ad.addEventListener("animationend", c.ah);
            c.ad.kd = dl;
            var f = Jm(a, d),
                h = mb(f.da);
            f = Jm(a, e);
            e = mb(f.da);
            xo(wo[d], ["0% { left: " + h.x + "px; top: " + h.y + "px; } ", "100% { left: " + e.x + "px; top: " + e.y + "px; } "]);
            yo(c.ad);
            zo(c.ad, "style_anim_" + d)
        } a.rb = !0;
    setTimeout(a.bd.bind(a),
        400, a)
}

function jl(a) {
    a.df.style.display = "none"
}
var dl = 0;

function gl(a, b, c) {
    function d() {
        uo(e);
        e.removeEventListener("animationend", d);
        e.style.animationDelay = "";
        e.kd == dl && (vo(e), e.style.opacity = 1, e.style.transform = "scale(1)", c && (e.style.transform += " rotate(45deg)"))
    }
    var e = b.Ug.af[a];
    e.kd = b.kd;
    e.addEventListener("animationend", d);
    e.style.animationDelay = b.cb + "ms";
    e.style.opacity = 0;
    zo(e, "style_anim_community_card");
    yo(e);
    b.cb += Gr + ll
}

function bl(a, b) {
    ++dl;
    for (var c = {}, d = 0; d < a.v.length; c = {
            Nc: c.Nc,
            bh: c.bh
        }, d++)
        if (0 != a.v[d].za) {
            var e = gn(a, d);
            c.Nc = b.Zb[d];
            c.bh = function(h) {
                return function() {
                    uo(h.Nc);
                    h.Nc.removeEventListener("animationend", h.bh);
                    h.Nc.kd == dl && vo(h.Nc)
                }
            }(c);
            c.Nc.addEventListener("animationend", c.bh);
            c.Nc.kd = dl;
            e = Im(b, e, a);
            var f = Am(b, rn(b, 0));
            xo(wo[d], ["0% { left: " + e.x + "px; top: " + e.y + "px; transform: " + c.Nc.style.transform + "; } ", "100% { left: " + f.x + "px; top: " + f.y + "px; transform: translate(-50%,-100%); } "]);
            yo(c.Nc,
                f);
            zo(c.Nc, "style_anim_" + d)
        } b.rb = !0;
    setTimeout(b.bd.bind(b), 400, b);
    rl(U.fa)
}

function vo(a) {
    a.style.left = a.Rl;
    a.style.top = a.Sl
}

function yo(a, b) {
    b ? (a.Rl = b.x + "px", a.Sl = b.y + "px") : (a.Rl = a.style.left, a.Sl = a.style.top)
}

function ul(a, b, c) {
    function d() {
        uo(e);
        e.removeEventListener("animationend", d);
        vo(e)
    }
    var e = c.md,
        f = en(c, gn(b, a.Nn));
    a = en(c, gn(b, a.ml));
    xo(wo[0], ["0% { left: " + f.x + "px; top: " + f.y + "px; } ", "100% { left: " + a.x + "px; top: " + a.y + "px; } "]);
    yo(e, a);
    e.addEventListener("animationend", d);
    zo(e, "style_anim_0");
    c.rb = !0;
    setTimeout(c.bd.bind(c), 400, c)
}

function ml(a, b) {
    b.Jd();
    el(b);
    for (var c = Am(b, b.Cb.Le.Sk), d = b.g, e = Q(d), f = 0, h = 0, n = new Map, p = {}, q = 0; q < a.D.length; p = {
            eb: p.eb,
            dh: p.dh
        }, q++) {
        var u = a.D[q],
            w = d.v[u.j];
        u.Be == w.mf && (b.zg[w.j].style.display = "none");
        p.eb = null;
        if (rj(d.o.S))
            if (e && e.j == u.j) p.eb = b.Ja[0][u.Be];
            else {
                var x = n.get(u.j);
                x || (x = Dk(w), n.set(u.j, x));
                p.eb = b.qd[gn(d, u.j)][x[u.Be]]
            }
        else x = b.Ja[u.j], u.al ? (p.eb = x[f + w.u.length], f++) : p.eb = x[u.Be];
        p.eb && (p.dh = function(I) {
            return function() {
                uo(I.eb);
                I.eb.style.animationDelay = "";
                I.eb.removeEventListener("animationend",
                    I.dh);
                I.eb.kd == dl && vo(I.eb)
            }
        }(p), p.eb.addEventListener("animationend", p.dh), p.eb.style.animationDelay = h + "ms", p.eb.kd = dl, p.eb.src = kn(u.qa), xo(wo[q], ["0% { left: " + c.x + "px; top: " + c.y + "px; opacity: 0; } ", "100% { left: " + p.eb.style.left + "; top: " + p.eb.style.top + "; opacity: 1; } "]), yo(p.eb), B(p.eb, new v(-1E3, -1E3)), zo(p.eb, "style_anim_" + q), h += 50)
    }
    b.rb = !0;
    setTimeout(b.bd.bind(b), h + 400, b);
    rl(U.aa)
}

function uo(a) {
    m(a.Oe) || a.classList.remove(a.Oe);
    a.Oe = ""
}

function tl(a, b) {
    b.Jd();
    el(b);
    for (var c = b.Cb.Le, d = {}, e = 0; e < a.oa.length; d = {
            xc: d.xc,
            eh: d.eh
        }, e++) {
        var f = a.oa[e].j;
        d.xc = b.Zb[f];
        d.eh = function(n) {
            return function() {
                uo(n.xc);
                n.xc.removeEventListener("animationend", n.eh);
                n.xc.kd == dl && vo(n.xc)
            }
        }(d);
        d.xc.addEventListener("animationend", d.eh);
        var h = nn(b, c.oa[a.ce]);
        xo(wo[f], ["0% { left: " + h.x + "px; top: " + h.y + "px; transform: translate(-50%,-100%); } ", "100% { left: " + d.xc.style.left + "; top: " + d.xc.style.top + "; transform: " + d.xc.style.transform + "; } "]);
        yo(d.xc);
        zo(d.xc, "style_anim_" + f)
    }
    b.rb = !0;
    setTimeout(b.bd.bind(b), 1400, b);
    rl(U.ma)
}

function xo(a, b) {
    a = Hr[a];
    a.deleteRule("0%");
    a.deleteRule("100%");
    a.appendRule(b[0]);
    a.appendRule(b[1])
}

function zo(a, b) {
    m(a.Oe) || a.classList.remove(a.Oe);
    a.Nf ? (a.className = a.Nf, a.classList.add(b), void 0) : a.classList.add(b);
    a.Oe = b
};
var jr = [],
    lr = [];
[
    ["s_angry.png", 70, 33, 1],
    ["s_tears_of_joy.png", 60, 33, 1],
    ["s_monkey.png", 60, 50, 1],
    ["s_party.png", 30, 33, 2, 1],
    ["s_serious.png", 30, 75, 1],
    ["s_cold.png", 30, 33, 1],
    ["s_sleep.png", 30, 75, 1],
    ["s_sick.png", 60, 50, 1],
    ["s_money.png", 60, 50, 1],
    ["s_shush.png", 80, 33, 1],
    ["s_thumbsup.png", 60, 33, 1]
].forEach(function(a) {
    return jr.push({
        Xb: a[0],
        Gb: a[1],
        Nb: a[2],
        Rh: a[3]
    })
});
lr = [{
    Xb: "send_bomb.png",
    Gb: 54,
    Nb: 50
}, {
    Xb: "send_poop.png",
    Gb: 37,
    Nb: 75
}, {
    Xb: "send_nuke.png",
    Gb: 68,
    Nb: 50
}, {
    Xb: "send_beer.png",
    Gb: 38,
    Nb: 75,
    Gd: "send_beer.mp3"
}, {
    Xb: "send_egg.png",
    Gb: 51,
    Nb: 75,
    Qg: 36,
    Gd: "send_egg.mp3"
}, {
    Xb: "send_donkey.png",
    Gb: 37,
    Nb: 75,
    Qg: 5,
    Gd: "send_donkey.mp3"
}, {
    Xb: "send_fish.png",
    Gb: 75,
    Nb: 50,
    Qg: 12,
    Gd: "send_fish.mp3"
}, {
    Xb: "send_ghost.png",
    Gb: 64,
    Nb: 50,
    Qg: 3,
    Gd: "send_ghost.mp3"
}, {
    Xb: "send_rocket.png",
    Gb: 75,
    Nb: 60,
    Gd: "send_rocket.mp3"
}, {
    Xb: "send_clown.png",
    Gb: 51,
    Nb: 100,
    Gd: "send_clown.mp3"
}, {
    Xb: "send_seal.png",
    Gb: 51,
    Nb: 100,
    Gd: "send_seal.mp3"
}];
lr.forEach(function(a) {
    void 0 != a.Gd && (a.Zk = jm(a.Gd))
});

function Ir(a) {
    var b = this;
    Jr || (Jr = !0, H(".style_smiley_dialog\n\t\t{\n\t\t\tdisplay: flex;\n\t\t\tposition: absolute;\n\t\t\tflex-direction: column;\n\t\t\tfont: 16px Roboto, Arial;\n\t\t\tbackground: rgba(0,0,0,0.5);\n\t\t\tborder: 0.1em solid dimgray;\n\t\t\tborder-radius: 0.5em;\n\t\t\tdisplay: none;\n\t\t\tz-index: 900;\n\t\t}"), H(".style_smiley_table\n\t\t{\n\t\t\tz-index: 45;\n\t\t\toverflow-y: auto;\n\t\t\tleft: 0px;\n\t\t\tfont-family: Roboto, Arial;\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 14px;\n\t\t\twhite-space: nowrap;\n\t\t\toverflow-x: hidden;\n\t\t\tflex-direction: column;\n\t\t\tflex: 1 1 auto;\n\t\t\t}"), H(".smiley_picker {\n\t\t\tbox-sizing: border-box;\n\t\t\twidth: 70px;\n\t\t\theight: 70px;\n\t\t\tbackground-position: 0% 0%;\n\t\t\tbackground-size: cover;\n\t\t}"),
        H(".style_smiley {\n\t\t\tposition: absolute;\n\t\t\tbackground-position: 0% 0%;\n\t\t\tbackground-size: cover;\n\t\t}"));
    var c = D(document.body, "style_smiley_dialog");
    this.m = c;
    c.wa = D(c, "style_smiley_table");
    var d = null;
    this.yh = [];
    var e = 0;
    a.forEach(function(f) {
        (new Image).src = "./images/" + f.Xb;
        0 == e % 5 && (d = D(c.wa, "style_flex_row"));
        var h = D(d, "smiley_picker", "");
        h.Hg = 0;
        h.wn = f;
        h.style.backgroundImage = "url('./images/" + f.Xb + "')";
        h.Cd = e++;
        h.addEventListener("click", function() {
            var n = h.Cd;
            cancelAnimationFrame(b.Uh);
            Qb.bind(b.m)();
            var p = om();
            S((new Il(p.h, R.f, b.b, n)).J())
        });
        b.yh.push(h);
        b.b = 0
    })
}
Ir.prototype.ga = function(a) {
    var b = this;
    void 0 != a && (this.b = a);
    Ob(this.m, null, Qb);
    this.Xc = 0;
    this.yh.forEach(function(c) {
        c.style.backgroundPosition = "0% 0%";
        c.Hg = 0
    });
    this.Uh = requestAnimationFrame(function(c) {
        return Kr(b, c)
    })
};

function Kr(a, b) {
    a.Xc || (a.Xc = b);
    var c = b - a.Xc;
    a.yh.forEach(function(d) {
        var e = d.wn,
            f = Math.floor(c / e.Nb);
        f %= e.Gb;
        Lr(d, f, e)
    });
    a.Uh = requestAnimationFrame(function(d) {
        return Kr(a, d)
    })
}
var Jr = !1;

function Mr() {
    Ir.call(this, jr)
}
k(Mr, Ir);

function Nr() {
    Ir.call(this, lr);
    var a = this,
        b = this.m,
        c = D(b, "");
    c.style.margin = "0.5em 0.5em";
    c.style.borderTop = "1px solid grey";
    H(".style_clear_button {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tcolor: white;\n\t\t\tfont: 14px Roboto, Arial;\n\t\t\tmargin: 0.5em 1em 1em 1em;\n\t\t\talign-self: flex-end;\n\t\t} ");
    c = D(b, "style_clear_button");
    t(c, "_tPlayerNotes", F.w);
    c.addEventListener("click", function() {
        Qb.bind(b)();
        X.U.ga(a.b)
    })
}
k(Nr, Ir);

function kr(a) {
    var b = jr[this.Cd];
    0 == this.Xc && (this.Xc = a);
    var c = b.Nb * b.Gb;
    b.Rh && (c *= b.Rh);
    a -= this.Xc;
    if (a >= c) this.remove();
    else {
        var d = Math.floor(a / b.Nb);
        d %= b.Gb;
        Lr(this, d, b);
        this.style.opacity = 100 > a ? a / 100 : 100 > c - a ? (c - a) / 100 : 1;
        requestAnimationFrame(kr.bind(this))
    }
}

function mr(a) {
    var b = lr[this.Cd];
    0 == this.Xc && (this.Xc = a);
    var c = b.Nb * b.Gb;
    b.Rh && (c *= b.Rh);
    c += 1E3;
    a -= this.Xc;
    if (a >= c) this.remove();
    else {
        var d = 0,
            e = a - 1E3;
        0 < e ? (d = Math.floor(e / b.Nb), d %= b.Gb, !b.il && b.Zk && (rl(b.Zk), b.il = !0)) : void 0 != b.Qg && (d = b.Qg);
        Lr(this, d, b);
        this.style.opacity = 100 > a ? a / 100 : 100 > c - a ? (c - a) / 100 : 1;
        b = this.Vg;
        1E3 <= a ? b = this.Nj : 200 <= a && (b = (a - 200) / 800, c = b * b, b = c / (2 * (c - b) + 1), b = new v(this.Vg.x + (this.Nj.x - this.Vg.x) * b, this.Vg.y + (this.Nj.y - this.Vg.y) * b));
        B(this, b);
        requestAnimationFrame(mr.bind(this))
    }
}

function Lr(a, b, c) {
    b != a.Hg && (a.style.backgroundPosition = 100 / (c.Gb - 1) * b + "% 0%", a.Hg = b)
}

function Or() {
    var a = X.sa.m,
        b = a.oc[0],
        c = D(b, "style_info_title");
    c.textContent = "Introduction:";
    c = D(b, "style_info_content");
    c.textContent = "Open Face Chinese / Pineapple (OFC/p) is played with 2 or 3 players. Each player has to make 3 individual hands from a set of 13 cards. The hands are set as back (5 cards), middle (5 cards), and front (3 cards). The hands must be set in order of strength with the back hand having the highest value. Hands that are out of order of strength are foul hands. Players receive 5 cards initially and have to place all 5 on the board. After this each player receives 3 cards with 2 to be placed and 1 to be discarded. This continues for 4 turns until each player has placed 13 cards in total. The cards are dealt in a group with all players in the hand receiving their set of 3/5 cards at the same time. Play proceeds from the left of the dealer in a clockwise direction just like most regular forms of poker. Players further from the dealer have the advantage of seeing their opponents place their cards first to help them decide how they should place theirs. Discarded cards are not made visible until the end of the hand.";
    c =
        D(b, "style_info_title");
    c.textContent = "Fantasyland (FL):";
    c = D(b, "style_info_content");
    c.textContent = "Any player achieving a pair of queens or better in their front hand without fouling sends the table into Fantasyland (FL). FL is an extension of the previous hand in which the player or players with qualifying FL hands receive all their cards in a single turn. All players from the previous hand must continue to play until the table comes out of FL or they run out of actionable chips (described in Payouts). The FL player will receive all of their cards with an extra card making 14, while other players in the hand will received their cards in the normal sequence. The FL player has the advantage of being able to place all their cards at once thus maximising the value of their set of hands. Also, they get to place after the other non-FL players in the hand place their cards and so will have considerably more time to decide their best placing. Note that more than 1 player can achieve the minimum hand strength for FL at the same time, thus more than 1 player can receive all their cards in the following FL hand. The table will continue to stay in FL if any player has a qualifying hand. A player can repeat their FL by achieving trips in the front or quads or better in the back hand.";
    c = D(b, "style_info_title");
    c.textContent = l("_tPineappleOpenFace27") + ":";
    c = D(b, "style_info_content");
    c.textContent = "This version is played with 2-7 in the middle. To avoid fouling the back hand must be better than the front hand and the middle hand must be at least a 10-low. 9-low or better in the middle earns bonus points. FL is achieved with KK+ in the front or a nut 2-7 hand in the middle. Having both gives a 'super' FL with 15 cards.";
    c = D(b, "style_info_title");
    c.textContent = "Minimum Stacks:";
    c =
        D(b, "style_info_content");
    c.textContent = "Players must have a minimum of 50 pts in the their stack to enter a non-FL hand. This is to ensure they and their opponents have an incentive to fight for FL. As actionable chips decrease during a sequence of FL hands, a reasonable starting stack is necessary to ensure a fair game. When sitting down there is an auto-topup option, on by default, which will top up a players stack to the table minimum when it goes below 50 pts. If this is not enabled, a player is automatically sat out when their stack falls below 50 pts.";
    c = D(b, "style_info_title");
    c.textContent = "Ultimate Progressive OFC";
    c = D(b, "style_info_content");
    c.textContent = "In this version, a player receives 14-17 cards on entering FL depending on the strength of their front hand: QQ = 14 cards, KK = 15 cards, AA = 16 cards, Trips = 17 cards. If the player repeats FL they receive the same number of cards as when first entered FL. There is a limit of 3 consecutive FLs for a player (initial FL and 2 repeats). The minimum stack to enter a Non-FL hand is 100 points.";
    c = D(b, "style_info_title");
    c.textContent = "Jokers";
    c = D(b, "style_info_content");
    c.textContent = "Ultimate Progressive OFC can be optionally played with 2 jokers. Jokers are used to make the best possible hand without fouling and without duplicating an existing card in that row (front, middle or back). Jokers can represent the same card in different rows.";
    b = b.nextSibling;
    c = D(b, "style_info_title");
    c.textContent = "Scoring:";
    c = D(b, "style_info_content");
    c.textContent = "Hands are compared between players with a point being awared for the best back, middle and front hands. If a player wins all 3 sub hands, they get an extra 3 points. This is known as a scoop and results in a transfer of 6 points. This is before bonuses are taken into account. If a player has fouled their hand then they will lose 6 points to an opponent that hasn't fouled their hand. ";
    c = D(b, "style_info_title");
    c.textContent = "Bonuses/Royalties:";
    c = D(b, "style_info_content");
    c.textContent = "Certain types of strong hands qualify for bonus points. Bonus points are awarded as follows: ";
    c = D(b, "style_flex_row");
    c.style.width = "100%";
    var d = D(c, "style_flex_column style_ofc_column");
    E(d, "style_ofc_column_title", "Front");
    var e = D(d, "style_flex_row style_ofc_row"),
        f = D(e, "style_flex_column style_ofc_hand_column"),
        h = "66 77 88 99 TT JJ QQ KK AA".split(" ");
    Pr(f, h);
    f = D(e, "style_flex_column style_ofc_bonus_column");
    h = "+1 +2 +3 +4 +5 +6 +7 +8 +9".split(" ");
    Pr(f, h);
    f = D(e, "style_flex_column style_ofc_hand_column");
    h = "222 333 444 555 666 777 888 999 TTT JJJ QQQ KKK AAA".split(" ");
    Pr(f, h);
    f = D(e, "style_flex_column style_ofc_bonus_column");
    h = "+10 +11 +12 +13 +14 +15 +16 +17 +18 +19 +20 +21 +22".split(" ");
    Pr(f, h);
    d = D(c, "style_flex_column style_ofc_column");
    E(d, "style_ofc_column_title", "Middle");
    e = D(d, "style_flex_row style_ofc_row");
    f = D(e, "style_flex_column style_ofc_hand_column");
    h = "Trips;Straight;Flush;Full House;Quads;Straight Flush;Royal Flush".split(";");
    Pr(f, h);
    f = D(e, "style_flex_column style_ofc_bonus_column");
    h = "+2 +4 +8 +12 +20 +30 +50".split(" ");
    Pr(f, h);
    E(d, "style_ofc_column_title", "Middle 2-7");
    e = D(d, "style_flex_row style_ofc_row");
    f = D(e, "style_flex_column style_ofc_hand_column");
    h = ["9 Low", "8 Low", "7 Low"];
    Pr(f, h);
    f = D(e, "style_flex_column style_ofc_bonus_column");
    h = ["+1", "+2", "+4"];
    Pr(f, h);
    E(d, "style_ofc_column_title", "Back");
    e = D(d, "style_flex_row style_ofc_row");
    f = D(e, "style_flex_column style_ofc_hand_column");
    h = "Straight;Flush;Full House;Quads;Straight Flush;Royal Flush".split(";");
    Pr(f, h);
    f = D(e, "style_flex_column style_ofc_bonus_column");
    h = "+2 +4 +6 +10 +15 +25".split(" ");
    Pr(f, h);
    b = b.nextSibling;
    c = D(b, "style_info_title");
    c.textContent = "Order of Settlement:";
    c = D(b, "style_info_content");
    c.textContent = "Given a 3 handed game, with players A, B and C in clockwise order with C being the dealer, hand comparisons are carried out in the following order: A vs B, A vs C, B vs C. Players settle individually with each other. Rake is calculated only on the overall net win or loss for a player in a hand. For example, if A wins 10 pts from B and loses 4 pts to C, rake for player A is calculated on the net win of 6 pts.";
    c = D(b, "style_info_title");
    c.textContent = "Actionable Chips:";
    c = D(b, "style_info_content");
    c.textContent = "Chips can only be used once in a given hand for settlements. If A has a stack of 20pts and wins 12 pts from player B, they will have only 8 pts remaining to settle with C. These are known as 'actionable chips' - a chip can be used only once to either win or lose to an opponent at the end of a hand. It is possible that a player will run out of actionable chips to settle with before settlements have been completed. This is part of the game. For example, if A wins 8 pts from B from a stack of 20 pts and then loses 22 pts to C, A will only be able to pay 12 pts to C as they have run out of chips to settle with.";
    c = D(b, "style_info_title");
    c.textContent = "Actionable Chips and Fantasyland:";
    c = D(b, "style_info_content");
    c.textContent = "**UPDATE - Rule Suspended** Chips in your stack can be used only once during a hand to either receive chips for or pay chips to an opponent. A table continuing into FL is considered a continuation of the previous hand. Chips available for settlement decrease as the table continues through 1 or more FLs. For example, if in the initial hand, you used 10pts to gain 10pts from one opponent and 3pts to pay off another opponent, you will have 13pts less of 'actionable chips' to be used in the following FL hand. These chips in your stack are out of play until the sequence of FL hands ends. To make things clearer during play, as a table progresses through 1 or more FLs, every player stack will have a second value in brackets indicating the actionable chips available for payouts for the current FL hand and future FL hands until the table comes out of FL. If a player's actionable chip stack falls to 0 they will not be allowed to continue into the next hand if FL continues at the table. Once a table comes out of FL, actionable chips are reset to be equal to a players current stack, and so the value in brackets is unnecessary and disappears.";
    Qr(a.oc, a.dc, 0)
}

function Rr(a, b, c) {
    a = D(a, "style_legend_icon", b);
    a.style.backgroundColor = c;
    z || (a.style.fontWeight = "bold");
    return a
}

function Sr(a) {
    return Rr(a, "D", "forestgreen")
}

function Tr(a, b, c) {
    for (var d = 0; d < b.length; d++) {
        var e = b[d],
            f = null;
        d < c.length && (f = c[d]);
        var h = z ? D(a, "style_table_row_100pc") : D(a, "style_notify_row"),
            n = z ? D(h, "style_cell") : D(h, "style_notify_cell");
        n = D(n, "style_flex_row");
        var p = D(n, "", vk(e));
        Ak(e.l) && (p.style.color = z ? "rgb(255,128,255)" : "magenta");
        p.style.paddingRight = "10px";
        n = D(n, "style_flex_row");
        vb(e.Ka, 2) && Rr(n, "2x", "orange");
        f && 0 < f.He && Rr(n, "C", "red");
        vb(e.Ka, 4) && Rr(n, "K", "brown");
        vb(e.Ka, 32) && Sr(n);
        vb(e.Ka, 128) && Rr(n, "J", "fuchsia");
        h = D(h, "style_cell");
        f && (h.textContent = nk(e, f))
    }
}

function Ur() {
    rm.call(this, "_tRotationGames", null, ["_tClose", Qb]);
    new Gc(this.m, 300, 200);
    var a = D(this.m, "style_open_table_wrapper");
    a.style.flex = "1 1 auto";
    a.style.height = "10px";
    this.m.tl = D(a, "style_open_table_list");
    tm(this)
}
k(Ur, rm);
Ur.prototype.ga = function(a, b, c) {
    a = a + " - " + l("_tRotationGames");
    this.Bf.textContent = a;
    Ab(this.m.tl);
    Tr(this.m.tl, b, c);
    Ob(this.m)
};

function Vr(a, b) {
    b.forEach(function(c) {
        return c.style.backgroundColor = ""
    });
    a.forEach(function(c) {
        return c.style.display = "none"
    })
}

function Qr(a, b, c) {
    Vr(a, b);
    b[c].style.backgroundColor = "rgb(28,90,77)";
    a[c].style.display = "flex"
}

function Wr(a) {
    Qr(this.oc, this.dc, a.currentTarget.tc)
}

function Xr(a, b) {
    var c = D(a, "style_cb_outer");
    c.Xd = D(c, "style_radio_box");
    D(c.Xd, "style_radio_button");
    t(D(c, "style_cb_text"), b, F.w);
    c.addEventListener("click", function() {
        return Zb(c)
    });
    Xb(c, !1);
    Yb(c);
    return c
}

function Yr() {
    rm.call(this, "_tBetSettings", null, ["_tClose", function() {
        return a.Sa()
    }]);
    var a = this,
        b = this.m,
        c = D(this.b, "style_flex_row");
    t(E(c, "style_settings_dialog_label"), "_tBetStep", F.w).style.marginRight = "10px";
    b.yg = Xr(c, "_tSmallBlind");
    b.yg.style.marginRight = "10px";
    b.nj = Xr(c, "_tBigBlind");
    c = [b.yg, b.nj];
    b.yg.ej = c;
    b.nj.ej = c;
    D(this.b, "style_10px_spacer");
    D(this.b, "style_10px_spacer");
    D(this.b, "", "Mini-bet Buttons");
    D(this.b, "style_10px_spacer");
    t(ic(this.b), "_tNoLimit", F.w);
    D(this.b, "style_10px_spacer");
    var d = [
        ["Off", ""],
        ["Min", "min"],
        ["Pot", "pot"],
        ["Max", "max"]
    ];
    c = [
        ["Off", ""],
        ["Min", "min"],
        ["Pot", "pot"]
    ];
    b.wh = [];
    for (var e = 0; 2 > e; e++) {
        for (var f = D(this.b, "style_select_row"), h = {}, n = 0; 4 > n; h = {
                $c: h.$c
            }, n++) h.$c = Ub(f, null, "style_combo_box"), d.forEach(function(p) {
            return function(q) {
                return Vb(p.$c, q[0], q[1])
            }
        }(h)), h.$c.De = Vb(h.$c, "", ""), Vb(h.$c, "Edit...", ""), h.$c.addEventListener("change", function(p) {
            return function() {
                return Zr(p.$c, 5)
            }
        }(h)), b.wh.push(h.$c), h.$c.Ch = 0 == e;
        D(this.b, "style_10px_spacer")
    }
    D(this.b,
        "style_10px_spacer");
    t(ic(this.b), "_tPotLimit", F.w);
    D(this.b, "style_10px_spacer");
    for (d = 0; 2 > d; d++) {
        e = D(this.b, "style_select_row");
        f = {};
        for (h = 0; 4 > h; f = {
                Zc: f.Zc
            }, h++) f.Zc = Ub(e, null, "style_combo_box"), c.forEach(function(p) {
            return function(q) {
                return Vb(p.Zc, q[0], q[1])
            }
        }(f)), f.Zc.De = Vb(f.Zc, "", ""), Vb(f.Zc, "Edit...", ""), f.Zc.addEventListener("change", function(p) {
            return function() {
                return Zr(p.Zc, 4)
            }
        }(f)), b.wh.push(f.Zc), f.Zc.Ch = 0 == d;
        D(this.b, "style_10px_spacer")
    }
}
k(Yr, rm);
Yr.prototype.ga = function() {
    var a = this.m;
    $r(R);
    var b = this.m;
    0 == R.b.ae ? Zb(b.yg) : Zb(b.nj);
    for (b = 0; 16 > b; b++) {
        var c = a.wh[b];
        c.De.text = Wo(R.b.hg[b], c.Ch);
        c.De.value = R.b.hg[b];
        c.value = R.b.bf[b];
        c.Ql = c.value
    }
    Ob(a)
};
Yr.prototype.Sa = function() {
    var a = this.m;
    Qb.bind(this.m)();
    for (var b = 0; 16 > b; b++) {
        var c = a.wh[b];
        R.b.bf[b] = c.value;
        R.b.hg[b] = c.De.value
    }
    R.b.ae = a.yg.checked ? 0 : 1;
    a = R;
    K("bet_increment", a.b.ae.toString());
    for (b = 0; b < a.b.bf.length; b++) K("betbutton" + b, a.b.bf[b].toString()), K("betbutton_custom" + b, a.b.hg[b])
};
var Hq = [0, "Off", 1, "On", 2, "Alerts Only"];

function as() {
    rm.call(this, "_tSettings", null, ["_tClose", function() {
        return a.Sa()
    }]);
    var a = this,
        b = this.m,
        c = D(this.b, "style_flex_row"),
        d = D(c, "style_table");
    d.style.borderSpacing = "0px 10px";
    var e = D(d, "style_table_row");
    b.Do = e;
    t(Bb(e, "label", "", "style_settings_dialog_label", "Deck Style"), "_tDeckStyle", F.w);
    b.dj = [];
    var f = [U.G, U.s, U.B];
    e = ic(e);
    e.style.display = "table-cell";
    for (var h = {}, n = 0; n < f.length; h = {
            Re: h.Re
        }, n++) h.Re = C(e, "style_deck_option_image", f[n][44].src), h.Re.tc = n, h.Re.addEventListener("mousedown",
        function(q) {
            return function() {
                b.Kh = q.Re.tc;
                bs(b.dj, b.Kh)
            }
        }(h)), b.dj.push(h.Re);
    e = ic(d);
    e.style.display = "table-row";
    b.ve = [];
    f = Bb(e, "label", "", "", "Cardback");
    f.className = "style_settings_dialog_label";
    t(f, "_tCardBack", F.w);
    e = ic(e);
    e.style.display = "table-cell";
    f = {};
    for (h = 0; h < U.b.length; f = {
            Qe: f.Qe
        }, h++) f.Qe = C(e, "style_deck_option_image", U.b[h].src), f.Qe.addEventListener("mousedown", function(q) {
        return function() {
            b.Mb = q.Qe.tc;
            bs(b.ve, b.Mb)
        }
    }(f)), f.Qe.tc = h, b.ve.push(f.Qe);
    e = D(d, "style_table_row");
    t(E(e, "style_settings_dialog_label"),
        "_tLanguage", F.w);
    var p = [];
    window.LangsMap.forEach(function(q) {
        p.push(q[0]);
        p.push(q[2])
    });
    b.Gc = Ub(e, p, "style_combo_box");
    b.Gc.style.display = "table-cell";
    e = D(d, "style_table_row");
    t(E(e, "style_settings_dialog_label"), "_tSounds", F.w);
    b.Af = Ub(e, Hq, "style_combo_box");
    b.Af.style.display = "table-cell";
    c = D(c, "style_flex_column");
    c.style.paddingTop = "10px";
    c.style.paddingLeft = "1em";
    b.vf = $b(c, "", "style_dialog_control");
    t(b.vf.hb, "_tDisplayCurrentHandValue", F.w);
    b.rf = $b(c, "", "style_dialog_control");
    t(b.rf.hb,
        "_tAutoMuckCards", F.w);
    b.qf = $b(c, "", "style_dialog_control");
    t(b.qf.hb, "_tAutoEnableTimeBank", F.w);
    b.uf = $b(c, "", "style_dialog_control");
    t(b.uf.hb, "_tDisplayFoldedCards", F.w);
    b.yf = $b(c, "", "style_dialog_control");
    t(b.yf.hb, "_tRunItTwice", F.w);
    b.sf = $b(c, "", "style_dialog_control");
    t(b.sf.hb, "_tBlockAnimations", F.w);
    b.wf = $b(c, "", "style_dialog_control");
    t(b.wf.hb, "_tDisplayStackBBRing", F.w);
    b.Ee = $b(c, "", "style_dialog_control");
    t(b.Ee.hb, "_tDisplayStackBBTourney", F.w);
    b.Ee.style.marginBottom = "0px"
}
k(as, rm);
as.prototype.Sa = function() {
    Qb.bind(this.m)();
    var a = this.m;
    R.b.Ef = a.Kh;
    R.b.Mb = a.Mb;
    R.b.ze = a.vf.checked;
    R.b.ff = a.rf.checked;
    R.b.de = a.Af.value;
    R.b.qg = a.yf.checked;
    R.b.ef = a.qf.checked;
    R.b.hf = a.uf.checked;
    R.b.gf = a.sf.checked;
    R.b.Sc = a.wf.checked;
    R.b.Tc = a.Ee.checked;
    a = a.Gc.value;
    R.b.lb != a && (wa(a), R.b.lb = a, cs(X.K), Iq());
    Jq();
    po();
    er({
        command_type: Ja
    })
};
as.prototype.ga = function() {
    var a = this.m;
    $r(R);
    a.Mb = R.b.Mb;
    bs(a.ve, a.Mb);
    a.Kh = R.b.Ef;
    bs(a.dj, a.Kh);
    Xb(a.vf, R.b.ze);
    Xb(a.rf, R.b.ff);
    Xb(a.wf, R.b.Sc);
    Xb(a.Ee, R.b.Tc);
    a.Af.value = R.b.de;
    Xb(a.yf, R.b.qg);
    Xb(a.qf, R.b.ef);
    Xb(a.uf, R.b.hf);
    Xb(a.sf, R.b.gf);
    a.Gc.value = R.b.lb;
    Ob(a)
};

function Zr(a, b) {
    b == a.selectedIndex ? (X.i.tf = a, X.i.ep = void 0, X.i.xf.value = a.De.value, Ob(X.i.m), X.i.xf.focus(), X.i.xf.select(), X.i.Lj[0].textContent = a.Ch ? "Big Blinds (0.1 - 100)" : "x Pot (0.1 - 100)") : a.Ql = a.value
}

function bs(a, b) {
    a.forEach(function(c) {
        c.style.filter = "";
        c.style.cursor = ""
    });
    a = a[b];
    a.style.filter = "brightness(100%)";
    a.style.cursor = "default"
}

function Wo(a, b) {
    if ("min" == a || "max" == a || "pot" == a) return a.toUpperCase();
    a = Gb(a);
    a = y(a, void 0); - 1 != a.indexOf(".") && "0" == a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1));
    0 == a.indexOf("0") && (a = a.substr(1));
    return a + (b ? " BB" : "")
}

function dr(a) {
    var b = D(document.body, "admin_announce", a);
    b.addEventListener("animationend", function() {
        return b.remove()
    });
    setTimeout(function() {
        return zo(b, "style_chat_fade")
    }, 2E3, null)
}

function pr(a) {
    a = a.R[0]; - 1 == a.f && dr(a.Yg)
}
var ds = null,
    Hr = null;

function es(a) {
    ds.insertRule(a, Hr.length);
    return Hr.length - 1
}
var wo = [];

function wp(a) {
    a.addEventListener("keypress", pc, !1);
    a.onpaste = function() {
        return !1
    }
}

function gp(a, b) {
    rm.call(this, "_tFreeToCheckTitle", null, ["_tFold", function() {
        return c.Vf()
    }, "_tCheck", function() {
        c.Sa();
        c.Ug.Ai()
    }], a, b.la.w);
    var c = this;
    this.Ug = b;
    t(ic(this.b), "_tFreeToCheck", b.la.w).style.whiteSpace = "nowrap"
}
k(gp, rm);
gp.prototype.Vf = function() {
    this.Sa();
    this.Ug.Vf()
};
gp.prototype.ga = function() {
    var a = this;
    Ob(this.m, null, function() {
        a.Sa();
        a.Ug.Ai()
    })
};

function fs() {
    rm.call(this, "_tSeatedAtTable", null, ["_tOpenTable", function() {
        Y.Ob(a.h);
        a.Sa()
    }, "_tRejectSeat", function() {
        a.Sa()
    }]);
    var a = this;
    D(this.m, "", "You have been auto seated at:");
    D(this.m, "style_10px_spacer");
    this.wd = D(this.m, "style_take_seat_name");
    this.Zd = D(this.m, "style_take_seat_game");
    this.i.firstChild.nextSibling.style.backgroundColor = "red";
    tm(this)
}
k(fs, rm);
fs.prototype.ga = function(a, b, c) {
    this.wd.textContent = b;
    this.Zd.textContent = c;
    this.h = a;
    sm(this);
    rl(U.i, !0)
};

function gs() {
    var a = D(document.body, "style_modal_dialog_client noselect dialog_font");
    this.m = a;
    t(E(a, "style_dialog_title"), "_tSeatAvailable", F.w);
    a.wd = D(a, "style_take_seat_name");
    a.Zd = D(a, "style_take_seat_game");
    var b = oc(a, ["_tTakeSeat", hs, "_tRejectSeat", rr], "style_button_take_seat", F.pc);
    a.Fe = b.firstChild;
    a.Fe.nextSibling.style.backgroundColor = "red"
}

function Pr(a, b) {
    b.forEach(function(c) {
        return E(a, "style_ofc_value", c)
    })
}

function is() {
    var a = X.Ba.m.oc[0];
    b = D(a, "style_info_title");
    b.textContent = "Introduction:";
    var b = D(a, "style_info_content");
    b.textContent = "Short-deck holdem is a variant of regular holdem where the ranks 2 to 5 are removed from the deck. Aces are high but can play at both ends of a straight. \tFor example, the lowest possible straight is (9x-8x-7x-6x-Ax). The removal of cards from the deck makes certain types of hands relatively harder to achieve than with a full deck. \tHand rankings are the same as in regular holdem except that a flush beats a full house."
}

function js() {
    var a = X.ua.m.oc[0];
    D(a, "style_info_title", "Introduction:");
    D(a, "style_info_content", "Omaha 456 (or PLO 456) plays with the same rules as regular PLO. The only difference is that you get dealt 4, 5 or 6 hole cards, determined at random, with an equal 1/3 chance of each occurence. \t\tEach individual player in the hand may get dealt a different number of hole cards.")
}

function ks() {
    var a = X.ja.m.oc[0],
        b = D(a, "style_info_title");
    b.textContent = "Introduction:";
    b = D(a, "style_info_content");
    b.textContent = "\n\t\tBig Two is a game where you try to get rid of all your cards faster than your opponents.\n\t\tIt can be played 2, 3 or 4 handed.Each player is dealt 13 cards to start.\n\t\tThe player to start a round is either the winner of the previous hand or, if the previous winner has left or it is a new table, the player with the lowest card in their hand. In the case of a heads-up table, anytime a new player sits the lowest card rule is used even if the previous winner hasn't left the table.\n\t\tThe first player to act in a round can decide to play a single card, a pair, trips, or a 5 card hand (straight, flush, quads w/kicker, straight flush).Play processed in a clockwise direction as with regular poker.\n\t\tOther players in this round must match the number of cards and play a better hand. \n\t\t";
    b = D(a, "style_info_content");
    b.textContent = "\n\t\tDeuces are high in this game.Also suits count when determining the value of a hand. Suits are ranked from low to high depending on the variant of Big 2 in play. The order of suits are as displayed on the table. Ranks are 3 to deuce.Therefore, the lowest card in the deck is 3c, and the highest card is 2s.\n\t\tAs deuces are high, the highest possible straight is a wheel A2345, second highest, 23456, followed by AKQJT and so on down.\n\t\tPlayers can choose to pass if they don\u2019t want to play, and must pass if they cannot play.When all other players have passed, the last player to successfully make a play has possession and can begin a new round with whatever play they wish.\n\t\t";
    b = D(a, "style_info_title");
    b.textContent = "Scoring:";
    b = D(a, "style_info_content");
    b.textContent = "\n\t\tThe hand ends when someone successfully plays their last card. That player is declared the winner, and scores one point for each card in every other player\u2019s hand.\n\t\tIf a losing player has 10 or more cards remaining in their hand then they must pay 20 points.Finally, if a player has any deuces left in their hand it will double the\n\t\tamount of points they have to pay out.A maximum of 2 deuces (ie 4x) can be used when multiplying.The maximum any player can owe another player is 20 * 4 (2 deuces) = 80 points.\n\t\tAt the end of the hand, each player settles individually with every other player in the hand.The most a player can lose in a hand at a 4 handed table is 3 * 80 = 240 points. For that reason all players\n\t\tmust start a hand with a minimum stack of 240 points. For heads-up tables the min starting stack is 80 points.\n\t\t";
    b = D(a, "style_info_title");
    b.textContent = "Hand Rankings:";
    b = D(a, "style_info_content");
    b.textContent = "\n\t\tSingle card hands are ranked in order. Pairs are ranked based on rank first then suit. Trips use rank only. Straights and straight flushes use the suit of the highest card to determine ranking.\n\t\t";
    b = D(a, "style_info_title");
    b.textContent = "Disconnects and Timeouts:";
    b = D(a, "style_info_content");
    b.textContent = "\n\t\tIf a player disconnects on their turn, or simply times out while thinking about what to play, their best possible valid hand is automatically played for them. This reduces the amount of points they may owe at the end of a hand. It also means that the player cannot participate further in that round of action. A timeout or DC will result in the player being sat out until they reconnect or click the I'm Back button. At the end of a hand a player has up to 10 seconds to press the Next Game button else they will be dealt out of the next hand.\n\t\t";
    b = D(a, "style_info_title");
    b.textContent = "Leaving table after losing hand:";
    b = D(a, "style_info_content");
    b.textContent = "\n\t\tIn the case of a heads-up Big 2 table, if a player leaves the table after losing a hand they may be liable to pay a penalty, currently 4 pts, to the other player to compensate them for not being able to play out a hand with the lead.Having the lead in a hand has a certain amount of value.After a set number of hands, currently 10, this penalty won't apply. The purpose of the penalty is to prevent a player playing a short number of hands then leaving the table when they lose their first hand thus denying the opponent the privilege of being first to act in the next hand. If a player loses a hands and sits out, the other player must wait until the losing player is removed from the table by the system (sit-out removal delay is 5 mins) before receiving the penalty. This allows players to agree to a pause in the game before resuming later.\n\t\t"
}

function ls() {
    var a = X.ma.m.oc[0];
    D(a, "style_info_title", "Introduction:");
    D(a, "style_info_content").textContent = "\n\t\tSome Matases content...\n\t\t"
}

function ms() {
    var a = X.ea.m.oc[0];
    b = D(a, "style_info_title");
    b.textContent = "Introduction:";
    var b = D(a, "style_info_content");
    b.textContent = "Archie is a triple draw high/ low split pot game. The pot is split between the best high hand and the best A-5 low. However, in order to take any part of the pot a hand must first qualify. A qualifying high hand is 66+ and a qualifying low hand is an 8 low or better.\tQualifying low hands will scoop the entire pot if no qualifying high hand is made. If there are no high or low qualifying hands then the pot is awarded to the best non qualifying high hand. The game is played with blinds and is capped at 6 players otherwise the deck would run regularly out of cards."
}

function hp(a, b) {
    rm.call(this, "_tTournamentResult", null, ["_tClose", Qb, "_tReenter", function() {
        Qb.bind(c.m)();
        S(Fl(R.f, c.h.H, c.h))
    }], a, b.la.w);
    var c = this;
    this.i.children[1].style.display = "none";
    this.c = D(this.b, "", "[Summary]");
    a.appendChild(this.m);
    this.h = null
}
k(hp, rm);
hp.prototype.ga = function(a, b, c, d) {
    a = "You have finished in " + a + " place.";
    0 < b && (a += " You have won " + y(b, void 0) + ".");
    this.c.textContent = a;
    this.i.children[1].style.display = c ? "flex" : "none";
    this.h = d;
    Ob(this.m)
};

function ns() {
    rm.call(this, "_tEditCustomBet", ["Big Blinds (0.1 - 100)"], ["_tOK", function() {
        var b = y(Gb(a.xf.value), void 0);
        a.tf.De.text = Wo(b, a.tf.Ch);
        a.tf.De.value = b;
        a.tf.value = b;
        Qb.bind(a.m)()
    }, "_tCancel", function() {
        Qb.bind(a.m)();
        a.tf.value = a.tf.Ql
    }]);
    var a = this;
    this.xf = Tb(this.s, "text", "style_settings_edit");
    this.xf.style.width = "4em";
    this.xf.style.textAlign = "right";
    this.G.style.justifyContent = "space-between"
}
k(ns, rm);

function os() {
    rm.call(this, "_tBuyIn", null, ["_tBuyIn", function() {
        Qb.bind(a)();
        S(Fl(a.f, a.H, a.h))
    }, "_tCancel", Qb]);
    var a = this.m,
        b = D(this.b, "style_flex_row style_buyin_row");
    t(E(b, "", l("_tAvailable")), "_tAvailable", F.w);
    a.Ec = E(b);
    a.Ec.textContent = y(R.Ub, void 0);
    D(this.b, "style_10px_spacer");
    b = D(this.b, "style_flex_row style_buyin_row");
    t(E(b, "", l("_tBuyIn")), "_tBuyIn", F.w);
    a.Sn = E(b);
    a.Fe = this.i.firstChild;
    D(this.b, "style_10px_spacer")
}
k(os, rm);
os.prototype.ga = function(a, b, c, d, e) {
    c = this.m;
    c.f = a;
    c.H = b;
    c.Ec.textContent = y(R.Ub, void 0);
    c.h = e;
    a = d.Za + d.Ya + d.ra;
    c.Fe.textContent = l("_tBuyIn") + " (" + y(a, void 0) + ")";
    c.Sn.textContent = ps(d);
    Ob(c)
};
var wr = null;

function Iq() {
    Y && Y.Ck();
    ya(F);
    R.i.forEach(function(a) {
        a.C && ya(a.C.la)
    })
}

function qs() {
    this.lf = !1;
    this.jb = 0;
    this.Tb = !1;
    this.Ta = [];
    this.Na = "";
    this.ub = !1
}

function rs(a) {
    if (1 >= a.Dc.length) {
        var b = nk(a.X, a.O, a.Pc);
        vb(a.X.Ka, 1024) && 0 < a.O.He && 0 < a.O.ib && (b += " (" + a.O.He / a.O.ib + " BB)");
        return b
    }
    for (b = 0; b < a.Dc.length; b++) {
        var c = a.Dc[b];
        if (c.Qa == Sd) return nk(c, a.kg[b])
    }
    return nk(a.Dc[0], a.kg[0])
}

function Os(a, b) {
    a = D(a, "style_flex_row");
    1 == b.aj ? Rr(a, "S", "darkblue") : 2 == b.aj && Rr(a, "BS", "blue");
    b.qn && Rr(a, "2x", "orange");
    0 < b.O.He && Rr(a, "C", "red");
    b.rn && Rr(a, "K", "brown");
    b.Fn && Sr(a);
    b.jj && Rr(a, "J", "fuchsia");
    b.Bh && (C(a, "style_lobby_image", "./images/lock.png").title = "Password Protected");
    vb(b.S.Ka, 1024) && Rr(a, "AoF", "Teal");
    a.firstChild && (a.firstChild.style.marginLeft = "0px");
    return a
}

function Ps() {
    var a = Y,
        b = null,
        c = rc("lobby_filter");
    c && (b = c.split("|"));
    if (b && b.length == a.G.length) {
        var d = 0;
        a.G.forEach(function(n) {
            "1" != b[d++] && n.classList.add("unchecked")
        })
    } else a.G.forEach(function(n) {
        return n.classList.add("unchecked")
    });
    if (c = rc("lobby_options")) b = c.split("|"), 2 == b.length && (R.sa = "1" == b[0], R.ua = "1" == b[1]);
    z ? (R.sa || a.na[0].classList.add("unchecked"), R.ua || a.na[1].classList.add("unchecked")) : (Xb(a.gb, R.ua), Xb(a.vb, R.sa));
    b = null;
    (c = rc("lobby_sng_filter")) && (b = c.split("|"));
    if (b && b.length ==
        a.ea.length) {
        var e = 0;
        a.ea.forEach(function(n) {
            "1" != b[e++] && n.classList.add("unchecked")
        })
    } else a.ea.forEach(function(n) {
        return n.classList.add("unchecked")
    });
    b = null;
    (c = rc("lobby_t_filter")) && (b = c.split("|"));
    if (b && b.length == a.P.length) {
        var f = 0;
        a.P.forEach(function(n) {
            "1" != b[f++] && n.classList.add("unchecked")
        })
    } else a.P.forEach(function(n) {
        return n.classList.add("unchecked")
    });
    b = null;
    (c = rc("lobby_aof_filter")) && (b = c.split("|"));
    if (b && b.length == a.U.length) {
        var h = 0;
        a.U.forEach(function(n) {
            "1" != b[h++] &&
                n.classList.add("unchecked")
        })
    } else a.U.forEach(function(n) {
        return n.classList.add("unchecked")
    })
}
g = qs.prototype;
g.nk = function(a) {
    a.currentTarget.classList.toggle("unchecked");
    Qs(this);
    Rs(this);
    z ? Ss(this, this.c) : (Ss(this, this.c.Ha), this.c.Ld())
};

function Ts(a, b) {
    b.currentTarget.classList.toggle("unchecked");
    Us(a);
    Rs(a);
    z ? Vs(a, a.zc) : (Vs(a, a.zc.Ha), a.zc.Ld())
}
g.Se = function(a) {
    a.currentTarget.classList.toggle("unchecked");
    Ws(this);
    Xs(this);
    Ys(this);
    Rs(this);
    z ? Zs(this, this.i) : (Zs(this, this.i.Ha), this.i.Ld())
};
g.me = function(a) {
    a.currentTarget.classList.toggle("unchecked");
    this.Pi();
    $s(this);
    at(this);
    bt(this);
    Rs(this);
    z ? qp(this, this.ha) : (qp(this, this.ha.Ha), this.ha.Ld())
};

function Rs(a) {
    var b = [];
    a.G.forEach(function(c) {
        return b.push(c.classList.contains("unchecked") ? "0" : "1")
    });
    K("lobby_filter", b.join("|"));
    b = [];
    a.ea.forEach(function(c) {
        return b.push(c.classList.contains("unchecked") ? "0" : "1")
    });
    K("lobby_sng_filter", b.join("|"));
    b = [];
    a.P.forEach(function(c) {
        return b.push(c.classList.contains("unchecked") ? "0" : "1")
    });
    K("lobby_t_filter", b.join("|"));
    b = [];
    a.U.forEach(function(c) {
        return b.push(c.classList.contains("unchecked") ? "0" : "1")
    });
    K("lobby_aof_filter", b.join("|"));
    b = [];
    z ? a.na.forEach(function(c) {
        return b.push(c.classList.contains("unchecked") ? "0" : "1")
    }) : (b.push(a.vb.checked ? "1" : "0"), b.push(a.gb.checked ? "1" : "0"));
    K("lobby_options", b.join("|"))
}

function Ws(a) {
    R.Oa.clear();
    a.ua.forEach(function(b) {
        b.classList.contains("unchecked") || R.Oa.add(b.xa)
    })
}

function Xs(a) {
    R.ub.clear();
    a.Ba.forEach(function(b) {
        b.classList.contains("unchecked") || R.ub.add(b.xa)
    })
}

function Qs(a) {
    R.Na.clear();
    a.ja.forEach(function(b) {
        b.classList.contains("unchecked") || R.Na.add(b.xa)
    })
}

function $s(a) {
    R.Va.clear();
    a.ma.forEach(function(b) {
        b.classList.contains("unchecked") || R.Va.add(b.xa)
    })
}

function at(a) {
    R.Ma.clear();
    a.K.forEach(function(b) {
        b.classList.contains("unchecked") || R.Ma.add(b.xa)
    })
}

function ct(a) {
    a.add(Xd);
    a.add(Ee);
    a.add(Yd);
    a.add(Zd);
    a.add(Re);
    a.add(Oe);
    a.add(Qe);
    a.add($d);
    a.add(ge);
    a.add(he);
    a.add(ie);
    a.add(Se);
    a.add(je);
    a.add(Ge);
    a.add(He)
}

function Us(a) {
    R.Ta.clear();
    a.aa.forEach(function(b) {
        if (!b.classList.contains("unchecked")) switch (b.xa) {
            case Xe:
                b = R.Ta;
                b.add(Wd);
                b.add(ve);
                break;
            case Ye:
                ct(R.Ta)
        }
    })
}

function Ys(a) {
    R.Da.clear();
    a.sa.forEach(function(b) {
        if (!b.classList.contains("unchecked")) switch (b.xa) {
            case Xe:
                b = R.Da;
                b.add(Wd);
                b.add(ve);
                break;
            case Ye:
                ct(R.Da)
        }
    })
}

function bt(a) {
    R.P.clear();
    a.fa.forEach(function(b) {
        if (!b.classList.contains("unchecked")) switch (b.xa) {
            case Xe:
                b = R.P;
                b.add(Wd);
                b.add(ve);
                break;
            case Ye:
                ct(R.P);
                break;
            case Ze:
                b = R.P;
                b.add(ee);
                b.add(fe);
                b.add(ke);
                b.add(Fe);
                b.add(Te);
                b.add(Be);
                b.add(Ne);
                break;
            case $e:
                b = R.P;
                b.add(le);
                b.add(me);
                b.add(ne);
                b.add(Pe);
                b.add(oe);
                b.add(Me);
                b.add(pe);
                b.add(qe);
                b.add(ye);
                b.add(Le);
                b.add(ze);
                b.add(Ce);
                b.add(De);
                b.add(Ke);
                break;
            case af:
                b = R.P;
                b.add(we);
                b.add(xe);
                break;
            case bf:
                b = R.P;
                b.add(ce);
                b.add(de);
                b.add(ae);
                b.add(be);
                b.add(Ae);
                break;
            case cf:
                b = R.P, b.add(Ie), b.add(Je)
        }
    })
}

function Ar(a) {
    a.ub || (a.ub = !0, setTimeout(function() {
        a.ub = !1;
        a.Nd.style.borderColor = R.Ca ? "greenyellow" : "crimson";
        var b = 0;
        if (z)
            for (var c = a.ha.firstChild; c; c = c.nextSibling) "none" != c.style.display && 0 < c.A.Ua.bb && b++;
        else
            for (c = a.ha.Ha.firstChild; c; c = c.nextSibling) "none" != c.style.display && 0 < c.A.Ua.bb && b++;
        c = new Date;
        c = c.toLocaleString("default", {
            month: "short"
        }) + " " + c.getDate() + ", " + kc(c.getHours()) + ":" + kc(c.getMinutes());
        z ? (a.se.textContent = c, R.Qc && (a.pe.textContent = R.Qc.Il, a.re.textContent = b), a.Xe.textContent =
            "v" + a.Na) : (Rb(X.c.firstChild, [null, (null != R.Qc ? R.Qc.Il : 0) + " " + l("_tPlayers"), b + " " + l("_tTables"), (null != R.Qc ? R.Qc.ho : 0) + " " + l("_tTournaments")]), Rb(X.c.firstChild.nextSibling, [c]), a.cd.textContent = l("_tVersion") + " " + a.Na)
    }, 500))
}

function dt(a, b) {
    var c = "";
    0 == b.Za + b.ra + b.Ya ? c = "greenyellow" : 0 < b.ra && (c = "gold");
    a.style.color = c
}
g.Wf = function(a) {
    var b = sl(a.h);
    b && (b.bc = a.bc, b.cc = a.cc, b.C && so(b.C))
};

function qp(a, b) {
    for (b = b.firstChild; b; b = b.nextSibling) et(a, b)
}

function et(a, b) {
    var c = !0,
        d = b.A;
    c && R.ua && d.Og == d.Ua.bb && (c = !1);
    c && R.sa && 0 == d.Ua.bb && (c = !1);
    c && 0 < R.Va.size && !R.Va.has(b.Lf.Vb) && (c = !1);
    c && 0 < R.P.size && !R.P.has(b.Lf.l) && (c = !1);
    c && 0 < R.Ma.size && !R.Ma.has(b.Lf.Qa) && (c = !1);
    c && 0 < R.Pb.size && !R.Pb.has(b.Lf.v) && (c = !1);
    b.style.display = c ? z ? "block" : "table-row" : "none";
    Ar(a)
}

function Vs(a, b) {
    for (b = b.firstChild; b; b = b.nextSibling) {
        var c = a,
            d = b,
            e = !0,
            f = d.A;
        e && R.ua && f.Og == f.Ua.bb && (e = !1);
        e && R.sa && 0 == f.Ua.bb && (e = !1);
        e && 0 < R.Ta.size && !R.Ta.has(d.Lf.l) && (e = !1);
        d.style.display = e ? z ? "block" : "table-row" : "none";
        Ar(c)
    }
}

function Zs(a, b) {
    for (b = b.firstChild; b; b = b.nextSibling) ft(a, b)
}

function ft(a, b) {
    var c = !0,
        d = b.A;
    c && 0 < R.Oa.size && !R.Oa.has(d.Vb) && (c = !1);
    c && 0 < R.ub.size && !R.ub.has(d.Hl) && (c = !1);
    c && 0 < R.Da.size && !R.Da.has(b.A.Al) && (c = !1);
    b.style.display = c ? z ? "block" : "table-row" : "none";
    Ar(a)
}

function Ss(a, b) {
    for (b = b.firstChild; b; b = b.nextSibling) gt(a, b)
}

function gt(a, b) {
    var c = !0,
        d = b.A;
    c && 0 < R.Na.size && !R.Na.has(d.Vb) && (c = !1);
    b.style.display = c ? z ? "block" : "table-row" : "none";
    Ar(a)
}

function ht(a, b, c) {
    var d = "",
        e = "";
    switch (c.Ia) {
        case sd:
        case td:
            df == c.Lc ? e = Bd[c.Ia] : (b = Math.floor((c.mg - b) / 6E4), e = c.Qj, 0 > b || (1 > b ? e = "in < 1 min" : 2 > b ? e = "in 1 min" : 60 > b && (e = "in " + b + " mins")));
            break;
        case zd:
            e = Bd[c.Ia];
            d = "gold";
            break;
        case yd:
            e = Bd[c.Ia];
            d = "lightsalmon";
            break;
        case xd:
            e = Bd[c.Ia];
            d = "darkgrey";
            break;
        case vd:
        case wd:
        case ud:
            e = Bd[c.Ia], d = "lime"
    }
    a.style.color = d;
    a.textContent = e
}
g.Uf = function() {
    Y.fh();
    this.classList.remove("unchecked");
    this.Fb.style.display = "flex";
    K("active_category", this.tc);
    Y.Ma = this.tc
};

function it(a, b) {
    a.lf || (b.lf = !0, setTimeout(a.cn.bind(a), 500))
}
g.Wl = function(a, b) {
    return vc(a.A.Ua.bb, b.A.Ua.bb, !0)
};
g.Yl = function(a, b) {
    return vc(a.A.kb, b.A.zd, !0)
};

function jt(a, b) {
    for (var c = [], d = a.firstChild; d; d = d.nextSibling) c.push(d);
    c.sort(b.bind(b));
    c.forEach(function(e) {
        return a.appendChild(e)
    })
}
g.cn = function() {
    z ? (this.ha.lf && jt(this.ha, this.Wl), this.c.lf && jt(this.c, this.Yl)) : this.Ta.forEach(function(a) {
        a.lf && (kt(a), a.lf = !1)
    })
};

function cs(a) {
    if (a) {
        var b = window.LangsMap.get(R.b.lb);
        b && (a.style.backgroundImage = "url(./images/" + b[3] + ")")
    }
}

function lt(a) {
    Kb();
    a = a.currentTarget.lb;
    R.b.lb != a && (wa(a), R.b.lb = a, Jq(), cs(X.K), cs(X.ub), Iq(), er({
        command_type: db,
        language: a
    }))
}

function mt() {
    var a = D(document.body, "noselect style_popup_menu");
    window.LangsMap.forEach(function(b) {
        var c = D(a, "style_popup_menu_item");
        D(c, "style_lang_item").style.backgroundImage = "url(./images/" + b[3] + ")";
        c.lb = b[0];
        c.addEventListener("click", lt);
        E(c, "", b[2])
    });
    return a
}

function nt(a) {
    Kb();
    if (a = sl(a.currentTarget.h)) a = lm(a), 0 < a.Dc.length && X.Ma.ga(a.Sb, a.Dc, a.kg)
}

function ot(a) {
    return {
        v: a.v,
        l: a.S.l,
        Qa: a.S.Qa,
        Vb: a.Vb
    }
};

function up() {
    var a = 0,
        b = 0;
    R.i.forEach(function(c) {
        c.C && c.C.g && Q(c.C.g) && (a++, Wk(c.C.g) && b++)
    });
    pt(a, b);
    R.i.forEach(function(c) {
        if (c.C) {
            c = c.C;
            var d = a,
                e = b;
            0 < d ? (c.aa.style.display = "block", c.aa.textContent = d, 0 < e ? (c.aa.style.backgroundColor = "crimson", c.aa.style.borderColor = "crimson") : (c.aa.style.backgroundColor = "", c.aa.style.borderColor = "")) : c.aa.style.display = "none"
        }
    })
}

function pt(a, b) {
    var c = Y.Qf;
    0 < a ? (c.style.display = "block", c.textContent = a, 0 < b ? (c.style.backgroundColor = "crimson", c.style.borderColor = "crimson") : (c.style.backgroundColor = "", c.style.borderColor = "")) : c.style.display = "none"
}

function qt() {
    window.confirm(l("_tMobileLogout")) && location.reload()
}

function rt(a) {
    a = a.currentTarget.value;
    R.b.lb != a && (wa(a), R.b.lb = a, Jq(), Iq())
}

function st() {
    qs.call(this);
    var a = this;
    H(".style_card { display: inline-block; padding: 2px 1px; height: 30px; vertical-align: middle; } ");
    H(".style_legend_bar_mobile { display: flex; align-items: center; height: 30px; background-color: black; font: 12px Roboto, Arial; padding: 0px 5px; color: white; white-space: nowrap; border-top: 1px solid dimgrey; flex: 0 0 auto; }");
    H(".style_status_pane_mobile { display: flex; align-items: center; }");
    H(".style_status_pane_image { \twidth: 20px; height: 20px; margin-right: 3px; }");
    H(".m_checkbox { \n\t\t\tvisibility: hidden; \n\t\t\tdisplay: flex; \n\t\t\tjustify-content: space-between; \n\t\t\talign-items: center; \n\t\t\tpadding-left: 1em; \n\t\t\tpadding-right: 0.5em; \n\t\t\tbox-sizing: border-box; \n\t\t\twhite-space: normal; \n\t\t\tposition: absolute; \n\t\t\tcolor: white; \n\t\t\tborder-radius: 8px; \n\t\t\tbackground-color: #18472D; \n\t\t}");
    H(".m_checkbox_hole { width: 1.2em; height: 1.2em; border-radius: 0.6em; box-sizing: border-box; flex: 0 0 auto; }");
    H(".m_checkbox_text { flex: 1 1 auto; margin-right: 0.5em; width: auto; margin-left: 1em; }");
    H(".gradient_background { background-image: linear-gradient(hsla(0,0%,100%,.4), hsla(0,0%,100%,0)); }");
    H(".style_m_lobby_wrapper { display: none; flex-direction: column; width: 100%; height: 100%; background-color: black; }");
    H(".style_main_avatar { margin-right: 10px; margin-left: 10px; margin-top: 5px; width: 80px; height: 80px; background-color: transparent;\tborder-radius: 10px; }");
    H(".style_main_avatar:hover { filter: brightness(140%); }");
    H(".style_m_table_wrapper { \n\t\t\tz-index: 45; \n\t\t\toverflow-y: auto; \n\t\t\tleft: 0px; \n\t\t\tfont-family: Roboto, Arial; \n\t\t\tfont-weight: bold; \n\t\t\tfont-size: 14px; \n\t\t\twhite-space: nowrap; \n\t\t\toverflow-x: hidden;\n\t\t\tflex: 1 1 auto;\n\t\t\t-webkit-overflow-scrolling: touch;\n\t\t\tflex-direction: column; \n\t\t}");
    H(".style_m_lobby_row { flex: 0 0 auto; display: flex; flex-direction: column; padding: 5px 8px; border-bottom: solid 1px dimgray; font: 12px Roboto, Arial; }");
    H(".style_subrow_upper { display: flex; justify-content: space-between; color: white; padding-bottom: 3px; }");
    H(".style_subrow_lower { display: flex; color: lightgrey; justify-content: space-between; }");
    H(".style_m_payout_row { \n\t\t\tflex: 0 0 auto; \n\t\t\tdisplay: flex; \n\t\t\tpadding: 5px 8px; \n\t\t\tborder-bottom: solid 1px dimgray; \n\t\t\tfont: 12px Roboto, Arial; \n\t\t\tline-height: 31px;\n\t\t\tcolor: whitesmoke;\n\t\t\tjustify-content: space-between;\n\t\t}");
    H(".style_m_dialog_base { display: none; background-color: rgba(0,0,0,0.85); box-shadow: 5px 5px 20px black; color: white; font: 16px Arial; padding: 10px; z-index = 2147483647; position: absolute; border: 1px solid dimgray; border-radius: 10px; }");
    H(".style_m_dialog_options { transform: translate(0, -100%); }");
    H(".style_m_lobby { display: none; flex-direction: column; width: 100%; height: 100%; background: black; }");
    H(".style_header_mobile_2 { background-image: linear-gradient(rgb(80, 80, 80), rgb(32, 32, 32)); background-color: rgb(48,48,48); height: 45px; padding: 0px 10px; align-items: center; display: flex; flex-wrap: nowrap; justify-content: space-between; flex: 0 0 auto; }");
    H(".style_active_agent { color: gold; font: 18px Roboto, Arial; }");
    H(".style_control_bar { padding: 0px 0px; background-color: rgb(48,48,48); color: white; display: flex; flex: 0 0 auto; font: 12px Roboto, Arial; height: 50px; justify-content: space-between; border-top: 1px solid lightgrey; width: 100%; } ");
    H(".style_control_bar_item { justify-content: space-evenly; display: flex; flex-direction: column; align-items: center; flex: 1 1 auto; width: 1px; } ");
    H(".style_control_bar_image { width: 28px; height: 28px; } ");
    H(".style_control_bar_text { font: 12px Roboto, Arial; } ");
    H(".style_player_details { font: 16px Roboto, Arial; color: black; background: white; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; z-index: 800; display: none; flex-direction: column; }");
    H(".style_open_tables { \n\t\t\tdisplay: none; \n\t\t\twidth: 1.3em; \n\t\t\theight: 1.3em; \n\t\t\tline-height: 1.3em; \n\t\t\tfont: 18px Roboto, Arial; \n\t\t\tborder-radius: 0.65em; \n\t\t\tbackground-color: black; \n\t\t\tcolor: white; \n\t\t\tborder: 1px solid dimgrey; \n\t\t\ttext-align: center; \n\t\t}");
    H(".style_tables_placeholder { pointer-events: none; top: 0px; position: absolute; width: 100%; display: flex; justify-content: center; }");
    H(".style_table_info { font: 16px Roboto, Arial; color: white; }");
    H(".style_filter_mask { position: fixed; left: 0; top: 0; width: 100%; height: 100%; z-index: 70; }");
    H(".style_m_filter { width: 100%; z-index: 75; font: 16px Roboto, Arial; color: white; background: rgba(0,0,0,0.75); position: absolute; left: 0px; top: 100%; display: none; flex-direction: column; }");
    this.b = D(document.body, "style_m_lobby");
    this.B = new Tq;
    var b = D(this.b, "style_header_mobile_2"),
        c = [];
    window.LangsMap.forEach(function(f) {
        c.push(f[0]);
        c.push(f[1])
    });
    this.Gc = Ub(b, c, "style_m_header_combo noselect");
    this.Gc.style.flex = "1";
    this.Gc.style.textAlign = "start";
    this.Gc.addEventListener("change", rt);
    this.b.Jh = D(b, "style_active_agent");
    this.b.Jh.style.flex = "1";
    this.b.Jh.style.textAlign = "center";
    b = t(E(b, "style_header_button", r("_tLogout")), "_tLogout", F.pc);
    b.style.flex = "1";
    b.style.textAlign = "end";
    b.addEventListener("click", qt);
    b = D(this.b, "style_m_category_bar");
    this.s = [t(D(b, "button unchecked", ""), "_tRingGames", F.w), t(D(b, "button unchecked", ""), "_tTournaments", F.w), t(D(b, "button unchecked", ""), "_tSNGs", F.w), t(D(b, "button unchecked", ""), "_tAOF", F.w)];
    this.s[3].style.display = "none";
    var d = 0;
    this.s.forEach(function(f) {
        f.addEventListener("click", a.Uf.bind(f));
        f.tc = d++;
        f.style.width = "33.4%"
    });
    D(this.b, "style_m_controls_wrapper").style.display = "flex";
    this.ha = D(this.b, "style_m_table_wrapper");
    this.i =
        D(this.b, "style_m_table_wrapper");
    this.c = D(this.b, "style_m_table_wrapper");
    this.zc = D(this.b, "style_m_table_wrapper");
    this.Ta.push(this.ha);
    this.Ta.push(this.i);
    this.Ta.push(this.c);
    this.Ta.push(this.zc);
    this.s[0].Fb = this.ha;
    this.s[1].Fb = this.i;
    this.s[2].Fb = this.c;
    this.s[3].Fb = this.zc;
    this.fh();
    this.jb = 3;
    this.Tb = !1;
    b = [{
        fg: "_tTables",
        bg: "./images/agent_tables.png",
        ag: this.Em.bind(this)
    }, {
        fg: "_tFilter",
        bg: "./images/agent_filter.png",
        ag: this.rk.bind(this)
    }, {
        fg: "_tCashier",
        bg: "./images/agent_cashier.png",
        ag: function() {
            tt(a);
            ut();
            Zp(a.Da)
        }
    }, {
        fg: "_tSettings",
        bg: "./images/___agent_settings.png",
        ag: this.Bm.bind(this)
    }, {
        fg: "_tMore",
        bg: "./images/menu_more.png",
        ag: this.Fm.bind(this)
    }];
    X.c = ac(this.b, !0);
    X.c.style.borderTop = "1px solid dimgrey";
    vt(this);
    var e = D(X.c, "style_status_pane_mobile");
    this.Nd = D(e, "style_online_indicator");
    this.pe = wt("./images/players.png");
    this.re = wt("./images/tables.png");
    this.oe = wt("./images/network.png");
    this.Xe = D(X.c, "");
    this.se = D(X.c, "");
    X.c.style.background = "black";
    b = xt(this.b,
        b);
    b.style.zIndex = 100;
    this.ab = b;
    b = b.children[0];
    b.style.position = "relative";
    b = D(b, "style_tables_placeholder");
    this.Qf = D(b, "style_open_tables");
    this.b.Wd = C(this.b, "style_main_avatar");
    this.b.Wd.style.display = "none";
    this.b.Ec = ic(this.b);
    this.b.Ec.style.display = "none";
    this.b.Bg = ic(this.b);
    this.b.Bg.style.display = "none";
    X.L = ic(this.b);
    X.L.style.display = "none";
    X.vb = new yt;
    X.sa = new zt(["RULES", "SCORING", "PAYOUTS"], "_tOpenFaceChineseRules");
    Or();
    X.ja = new zt(["BIG TWO RULES"], "_tBig2Rules");
    ks();
    X.ma = new zt(["MATASES RULES"],
        "_tMatasesRules");
    ls();
    X.ea = new zt(["ARCHIE RULES"], "_tArchieRules");
    ms();
    X.Ba = new zt(["SHORT DECK HOLDEM RULES"], "_tSDHoldemRules");
    is();
    X.ua = new zt(["OMAHA 456 RULES"], "_tOmaha456Rules");
    js();
    X.N = new Cq;
    X.Na = new zq;
    X.Ta = new Mr;
    X.Da = new Nr;
    At(this);
    Bt(this);
    Ct(this);
    Dt(this);
    X.Ca = new Et;
    this.Da = new uq;
    this.fb = new wq;
    this.L = new kq;
    this.Ca = null;
    this.Oa = !1
}
k(st, qs);
g = st.prototype;
g.fh = function() {
    this.s.forEach(function(a) {
        a.classList.add("unchecked");
        a.Fb.style.display = "none"
    })
};
g.Bm = function() {
    tt(this);
    X.N.ga()
};
g.zm = function(a) {
    this.Ca.remove();
    this.Ca = null;
    this.rk.bind(this)();
    a.preventDefault()
};
g.rk = function() {
    tt(this);
    var a = null;
    0 == Y.Ma ? a = this.wb : 1 == Y.Ma ? a = this.xb : 2 == Y.Ma ? a = this.Pb : 3 == Y.Ma && (a = this.Bb);
    if (a) {
        if (this.Oa) Lp(a), this.Ca && (this.Ca.remove(), this.Ca = null);
        else {
            var b = this.ab.getBoundingClientRect();
            a.style.top = b.top + "px";
            Kp(a);
            this.Ca = D(document.body, "style_filter_mask");
            this.Ca.addEventListener("touchstart", this.zm.bind(this))
        }
        this.Oa = !this.Oa
    }
};
g.Em = function() {
    tt(this);
    Up()
};

function vt(a) {
    H(".style_lobby_menu_item { \n\t\t\tborder-top: 1px solid grey;\n\t\t\tpadding: 0.75em 0em;\n\t\t\tbackground: rgb(48, 48, 48);\n\t\t\tcolor: white;\n\t\t}");
    H(".style_control_bar_vertical {\n\t\t\tposition: absolute; \n\t\t\tdisplay: none; \n\t\t\tfont: 12pt Roboto, Arial;\n\t\t\ttext-align: center;\n\t\t\twidth: 100%;\n\t\t\tflex-direction: column;\n\t\t\tz-index: 95;\n\t\t} ");
    var b = D(a.b, "style_control_bar_vertical");
    [
        ["_tHistory", function() {
            tt(a);
            Zp(a.fb)
        }],
        ["_tReconnect", function() {
            tt(a);
            br.b.close()
        }],
        ["_tCardsCheck", function() {
            tt(a);
            xr()
        }]
    ].forEach(function(c) {
        var d = D(b, "style_lobby_menu_item");
        t(d, c[0], F.w);
        d.addEventListener("click", c[1])
    });
    b.nb = D(document.body, "fullscreen_mask_clear");
    b.nb.style.zIndex = 90;
    b.nb.addEventListener("click", function() {
        return tt(a, !0)
    });
    a.N = b
}
g.Fm = function() {
    if ("flex" == this.N.style.display) tt(this, !0);
    else {
        var a = this.N,
            b = this.ab.getBoundingClientRect();
        this.N.style.top = b.top + "px";
        this.N.style.display = "block";
        this.N.nb.style.display = "block";
        this.N.style.clip = "rect(0px," + window.innerWidth + "px," + b.top + "px,0px)";
        Kp(a)
    }
};

function tt(a, b) {
    b ? Lp(a.N) : a.N.style.display = "none";
    a.N.nb.style.display = "none"
}
g.Ob = function(a) {
    "flex" == Y.L.m.style.display && (Y.L.m.style.display = "none");
    var b = sl(a);
    b.C || (b.C = new Op(b));
    var c = null;
    b.o ? c = b.o : b.C.g && (c = b.C.g.o);
    c && rj(c.S) && (c = b.C, c.s.src = "./images/chinese_horizontal.jpg", c.mn = !0);
    c = b.C;
    c.g || br.b.send((new W(a, Kf)).J());
    b = sl(R.c);
    R.c = a;
    rp();
    c.Y.style.display = "block";
    c.Ue.bind(c)();
    this.b.style.display = "none";
    po();
    b && !Zj(b.h, a) && ((a = b.C) && a.g && Q(a.g) ? a.Y.style.display = "none" : (S((new W(b.h, Qf)).J()), a.bk.bind(a)(), b.C = null))
};
g.Yb = function() {
    var a = .8 * window.innerWidth * .2;
    X.Ta.yh.forEach(function(b) {
        b.style.width = a + "px";
        b.style.height = a + "px"
    })
};

function Ft(a) {
    var b = a.A.Ua;
    a.children[1].children[1].textContent = l("_tPlayers") + ": " + b.bb + "/" + a.A.Og
}
g.Wf = function(a) {
    qs.prototype.Wf.call(this, a);
    var b = pp.get(a.h.Fa);
    b && (b.A.Ua.gd = a.cc.length, b.A.Ua.bb = a.bc.length, Ft(b))
};
g.Gk = function(a, b) {
    if (a = pp.get(a)) {
        var c = a.A.Ua.bb != b.bb;
        a.A.Ua = b;
        Ft(a);
        c && it(this, this.ha);
        et(this, a)
    }
};
g.Ck = function() {
    for (var a = this.ha.firstChild; a; a = a.nextSibling) {
        var b = a,
            c = b.A;
        b.children[0].children[1].textContent = yk(c.X);
        b.children[1].children[0].textContent = nk(c.X, c.O, c.Pc);
        Ft(b)
    }
};
g.ki = function(a) {
    var b = this;
    a = a.o;
    var c = {
            ka: a.Sb,
            ic: vk(a.S),
            Jj: a.O.ib,
            Og: a.v,
            kb: 0,
            Jf: a.Tk,
            h: a.h,
            S: a.S,
            X: a.X,
            O: a.O,
            Pc: a.Pc,
            Ua: new Ll
        },
        d = D(this.ha, "style_m_lobby_row");
    d.A = c;
    c = D(d, "style_subrow_upper");
    D(c, "", a.Sb);
    var e = D(c, "style_flex_row");
    c = Os(e, a);
    e = D(e, "", vk(a.S));
    Ak(a.S.l) && (e.style.fontWeight = "bold", e.style.color = "rgb(255,128,255)");
    c.firstChild && (e.style.marginLeft = "5px");
    c = D(d, "style_subrow_lower");
    D(c, "", rs(a));
    D(c);
    d.addEventListener("click", function() {
        return b.Ob(d.A.h)
    });
    d.Lf = ot(a);
    pp.set(a.h.Fa,
        d);
    et(this, d);
    it(this, this.ha)
};

function Gt(a, b, c) {
    b.A.Ia = c.ia.Ia;
    Ht(b, c);
    a.L.H == c.va.sb && pq(a.L);
    df == c.va.Lc ? it(a, a.c) : it(a, a.i)
}
g.Ek = function(a) {
    var b = It.get(a);
    b && (a = R.s.get(a)) && a.ia && (Gt(this, b, a), Ht(b, a))
};
g.ii = function(a) {
    var b = a.va,
        c = b.sb;
    if (!It.get(c)) {
        var d = {
            H: c,
            ai: lc(b.Mf),
            Qj: mc(nc(b.Mf)),
            ic: yk(b.X),
            Dd: b.Za + b.Ya,
            Ia: 0,
            Lc: b.Lc,
            Vb: b.Vb,
            zd: 0
        };
        0 == b.Za + b.Ya + b.ra ? d.$h = "Freeroll" : d.$h = ps(b);
        var e = D(this.c, "style_m_lobby_row");
        e.A = d;
        var f = D(e, "style_subrow_upper");
        e.wd = D(f);
        d.ka = b.ka;
        m(b.ka) || (d.ka += ", ");
        d.ka += d.ic;
        e.wd.textContent = d.ka;
        e.vj = D(f);
        b = D(e, "style_subrow_lower");
        e.pl = D(b, "", "");
        e.xd = D(b, "", 0);
        Ht(e, a);
        e.addEventListener("click", function() {
            return Jt(c)
        });
        It.set(c, e);
        a.ia && Gt(this, e, a);
        gt(this,
            e);
        it(this, this.c)
    }
};
g.ji = function(a) {
    var b = a.va,
        c = b.sb;
    if (!It.get(c)) {
        var d = nc(b.Mf);
        d = {
            H: c,
            ka: b.ka,
            ai: lc(b.Mf),
            Qj: mc(d),
            ic: yk(b.X),
            Dd: b.Za + b.ra + b.Ya,
            Ia: 0,
            Vb: b.Vb,
            Hl: b.Dh ? 2 : 0 == b.Za + b.Ya ? 1 : 0,
            Al: b.X.l,
            mg: d,
            Lc: b.Lc
        };
        var e = b.Za + b.Ya;
        b.Ah || (e += b.ra);
        if (0 == e) d.$h = "Freeroll";
        else {
            var f = y(e, void 0);
            b.Za != e && (f += " (" + y(b.Za, void 0), 0 == b.ra || b.Ah || (f += " + " + y(b.ra, void 0)), 0 != b.Ya && (f += " + " + y(b.Ya, void 0)), f += ")");
            d.$h = f
        }
        e = D(this.i, "style_m_lobby_row");
        e.A = d;
        f = D(e, "style_subrow_upper");
        e.wd = D(f, "", d.ka);
        e.vj = D(f, "", "");
        d = D(e,
            "style_subrow_lower");
        e.pl = D(d, "", "");
        e.xd = D(d, "", "");
        dt(e.wd, b);
        Ht(e, a);
        e.addEventListener("click", function() {
            return Jt(c)
        });
        It.set(c, e);
        a.ia && Gt(this, e, a);
        ft(this, e);
        it(this, this.i)
    }
};

function Ht(a, b) {
    ht(a.vj, new Date, a.A);
    a.pl.textContent = a.A.$h;
    a.xd.textContent = Wl(b)
}
g.Fk = function() {
    for (var a = new Date, b = this.i.firstChild; b; b = b.nextSibling) ht(b.vj, a, b.A)
};
g.Ki = function(a) {
    xq(this.fb, a)
};

function yq(a, b) {
    var c = R.dm.bind(R)(b);
    if (c) {
        var d = {
                command_type: Sa,
                user_id: R.f,
                data: c,
                index: 0,
                hands: 0,
                table_id: "",
                game_id: b
            },
            e = R.ja.get(c.Mc);
        if (e)
            for (var f = 0; f < e.mb.length; f++) e.mb[f] == b && (d.hands = e.mb.length, d.index = f, d.table_id = c.Mc);
        a.B.yc(d)
    }
}
g.Ld = function() {};

function Jt(a) {
    Y.L.ga(a);
    lq(Y.L.dc[0]);
    Zp(Y.L);
    S(Zl(a, mg))
}

function Ct(a) {
    a.P = [];
    var b = D(document.body, "style_m_filter");
    b.Nf = "style_m_filter";
    var c = ic(b),
        d = D(c, "style_m_filter_bar");
    a.Ba = [t(D(d, "button", ""), "_tFreezeout", F.w), t(D(d, "button", ""), "_tFreeroll", F.w), t(D(d, "button", ""), "_tRe-entry", F.w)];
    var e = 0;
    a.Ba.forEach(function(f) {
        return f.xa = e++
    });
    a.Ba.forEach(function(f) {
        return f.addEventListener("click", a.Se.bind(a))
    });
    a.Ba.forEach(function(f) {
        return f.style.width = "34%"
    });
    a.Ba.forEach(function(f) {
        return a.P.push(f)
    });
    d = D(c, "style_m_filter_bar");
    a.ua = [t(D(d, "button micro_stakes", ""), "_tMicro", F.w), t(D(d, "button low_stakes", ""), "_tLow", F.w), t(D(d, "button mid_stakes", ""), "_tMid", F.w), t(D(d, "button high_stakes", ""), "_tHighStakes", F.w)];
    e = 0;
    a.ua.forEach(function(f) {
        return f.addEventListener("click", a.Se.bind(a))
    });
    a.ua.forEach(function(f) {
        return f.style.width = "25%"
    });
    a.ua.forEach(function(f) {
        return f.xa = e++
    });
    a.ua.forEach(function(f) {
        return a.P.push(f)
    });
    d = D(c, "style_m_filter_bar");
    a.sa = [D(d, "button", "Holdem"), D(d, "button", "Omaha")];
    e = Xe;
    a.sa.forEach(function(f) {
        return f.xa =
            e++
    });
    a.sa.forEach(function(f) {
        return f.addEventListener("click", a.Se.bind(a))
    });
    a.sa.forEach(function(f) {
        return f.style.width = "50%"
    });
    a.sa.forEach(function(f) {
        return a.P.push(f)
    });
    a.P.forEach(function(f) {
        f.style.lineHeight = "50px"
    });
    a.xb = b
}

function Dt(a) {
    a.U = [];
    var b = D(document.body, "style_m_filter");
    b.Nf = "style_m_filter";
    var c = ic(b),
        d = 0;
    c = D(c, "style_m_filter_bar");
    a.aa = [D(c, "button", "Holdem"), D(c, "button", "Omaha")];
    d = Xe;
    a.aa.forEach(function(e) {
        return e.xa = d++
    });
    a.aa.forEach(function(e) {
        return e.addEventListener("click", function(f) {
            return Ts(a, f)
        })
    });
    a.aa.forEach(function(e) {
        return e.style.width = "50%"
    });
    a.aa.forEach(function(e) {
        return a.U.push(e)
    });
    a.U.forEach(function(e) {
        return e.style.lineHeight = "50px"
    });
    a.Bb = b
}

function Bt(a) {
    a.ea = [];
    var b = D(document.body, "style_m_filter");
    b.Nf = "style_m_filter";
    var c = ic(b);
    c = D(c, "style_m_filter_bar");
    a.ja = [t(D(c, "button micro_stakes", ""), "_tMicro", F.w), t(D(c, "button low_stakes", ""), "_tLow", F.w), t(D(c, "button mid_stakes", ""), "_tMid", F.w), t(D(c, "button high_stakes", ""), "_tHighStakes", F.w)];
    a.ja.forEach(function(e) {
        return e.addEventListener("click", a.nk.bind(a))
    });
    a.ja.forEach(function(e) {
        return e.style.width = "25%"
    });
    var d = 0;
    a.ja.forEach(function(e) {
        return e.xa = d++
    });
    a.ja.forEach(function(e) {
        return a.ea.push(e)
    });
    a.ea.forEach(function(e) {
        e.style.lineHeight = "50px"
    });
    a.Pb = b
}

function At(a) {
    a.G = [];
    var b = D(document.body, "style_m_filter");
    b.Nf = "style_m_filter";
    var c = ic(b),
        d = D(c, "style_m_filter_bar");
    a.na = [t(D(d, "button", ""), "_tHideEmptyTables", F.w), t(D(d, "button", ""), "_tHideFullTables", F.w)];
    a.na.forEach(function(h) {
        return h.addEventListener("click", a.me.bind(a))
    });
    a.na.forEach(function(h) {
        h.style.width = "50%";
        h.style.lineHeight = "50px"
    });
    d = D(c, "style_m_filter_bar");
    a.K = [t(D(d, "button", ""), "_tNoLimit", F.w), t(D(d, "button", ""), "_tPotLimit", F.w), t(D(d, "button", ""), "_tLimit",
        F.w)];
    a.K[0].xa = Rd;
    a.K[1].xa = Td;
    a.K[2].xa = Sd;
    a.K.forEach(function(h) {
        return h.addEventListener("click", a.me.bind(a))
    });
    a.K.forEach(function(h) {
        return a.G.push(h)
    });
    for (d = 0; 3 > d; d++) a.K[d].style.width = "33.4%";
    d = D(c, "style_m_filter_bar");
    a.ma = [t(D(d, "button micro_stakes", ""), "_tMicro", F.w), t(D(d, "button low_stakes", ""), "_tLow", F.w), t(D(d, "button mid_stakes", ""), "_tMid", F.w), t(D(d, "button high_stakes", ""), "_tHighStakes", F.w)];
    a.ma.forEach(function(h) {
        return h.addEventListener("click", a.me.bind(a))
    });
    a.ma.forEach(function(h) {
        return h.style.width = "25%"
    });
    var e = 0;
    a.ma.forEach(function(h) {
        return h.xa = e++
    });
    a.ma.forEach(function(h) {
        return a.G.push(h)
    });
    d = D(c, "style_m_filter_bar");
    a.fa = [D(d, "button", "Holdem"), D(d, "button", "Omaha"), D(d, "button", "Stud"), D(d, "button", "Draw"), D(d, "button", "Mixed"), D(d, "button", "OFC"), D(d, "button", "Big Two")];
    e = Xe;
    a.fa.forEach(function(h) {
        return h.xa = e++
    });
    a.fa.forEach(function(h) {
        return h.addEventListener("click", a.me.bind(a))
    });
    var f = 100 / 7;
    a.fa.forEach(function(h) {
        return h.style.width =
            f + "%"
    });
    a.fa.forEach(function(h) {
        return a.G.push(h)
    });
    a.G.forEach(function(h) {
        h.style.lineHeight = "50px"
    });
    a.wb = b
}
g.Pi = function() {
    R.sa = !this.na[0].classList.contains("unchecked");
    R.ua = !this.na[1].classList.contains("unchecked")
};

function wt(a) {
    var b = D(X.c, "style_status_pane_mobile");
    C(b, "style_status_pane_image", a);
    return D(b, "")
}

function xt(a, b) {
    var c = F.w,
        d = D(a, "style_control_bar");
    b.forEach(function(e) {
        var f = e.fg,
            h = e.bg;
        e = e.ag;
        var n = D(d, "style_control_bar_item");
        h = C(n, "style_control_bar_image", h);
        n = D(n, "style_control_bar_text", l(f));
        t(n, f, c);
        e && h.addEventListener("click", e)
    });
    return d
}

function Et() {
    rm.call(this, "_tMyTables", null, ["_tClose", Qb]);
    var a = this.m;
    a.Ac = D(this.b, "style_m_table_wrapper");
    a.Ac.style.backgroundColor = "black"
}
k(Et, rm);

function Up() {
    var a = X.Ca.m,
        b = 0;
    Ab(a.Ac);
    R.i.forEach(function(c) {
        if (!Zj(R.c, c.h) && c.C) {
            var d = D(a.Ac, "style_m_lobby_row"),
                e = D(d, "style_subrow_upper"),
                f = D(e);
            e = D(e);
            var h = D(d, "style_subrow_lower"),
                n = D(h, "", "");
            D(h, "", "");
            d.addEventListener("click", Kt.bind(a));
            d.h = c.h;
            Wj(c.h) ? (n = qm(c.h.H)) && n.va && (n = n.va, f.textContent = "T" + c.h.H, e.textContent = n.ka + ", " + yk(n.X)) : (e = sl(c.h)) && e.o && (c = c.o, f.textContent = c.Sb, n.textContent = vk(c.S) + " " + rs(c));
            b++
        }
    });
    0 < b && Ob(X.Ca.m, null, Qb)
}

function qq(a) {
    var b = 0,
        c = qm(a);
    c && c.ia && (R.fa.has(a) ? (a = R.fa.get(a), 2 == c.ia.Hj ? b = 2 : 0 < c.ia.Hj && -1 == a && (b = 1)) : 0 < c.ia.Hj && (b = 1));
    return b
}

function mq() {
    Lt(Y.L.H)
}

function nq() {
    Mt(Y.L.H)
}

function Kt(a) {
    a = a.currentTarget.h;
    Qb.bind(this)();
    Y.Ob(a)
}

function Nt(a) {
    Y.L.H == a.H && sq(a)
};
var Ot = !1,
    Pt = [];

function Qt(a, b, c, d, e, f) {
    var h = this;
    Ot || (Ot = !0, H(".lc_rounded_all {\n\t\tborder-radius: 5px;\n\t\toverflow: hidden;\n\t}"), H(".lc_rounded_bottom {\n\t\tborder-bottom-left-radius: 5px;\n\t\t\t\t\tborder-bottom-right-radius: 5px;\n\t\t\toverflow: hidden;\n\t}"), H(".lc_header\n\t{\n\t\twidth: 100%; // actually this has to be set to the 1 below\n\t\tleft: 0px;\n\t\t\twhite-space: nowrap;\n\t\tdisplay: table;\n\t\t\ttable-layout: fixed;\n\t\tflex: 0 0 auto;\n\t\t\ttext-align: center;\n\t}"), H(".lc_header_row\n\t{\n\t\tdisplay: table-row;\n\t\t\tbackground-color: dimgrey;\n\t\ttransition: background 0.15s ease 0s;\n\t\theight: 22px;\n\t\t\tline-height: 22px;\n\t\tcolor: white;\n\t}"),
        H(".lc_gradient\n\t{\n\t\t\tbackground-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));\n\t}"), H(".lc_spacer\n\t\t{\n\t\t\tbackground-color: dimgrey;\n\t\t}"), H(".lc_header_cell\n\t\t{\n\t\t\tpadding: 0px 5px;\n\t\t\ttext-overflow: ellipsis;\n\t\t\toverflow: hidden;\n\t\t\tdisplay: table-cell; }\n\t\t\t"), H(".lc_cell\n\t\t{\n\t\t\tpadding: 0px 5px;\n\t\t\ttext-overflow: ellipsis;\n\t\t\toverflow: hidden;\n\t\t\tdisplay: table-cell; }\n\t\t\t"), H(".lc_list\n\t\t{\n\t\t\twidth: 100%;\n\t\t\twhite-space: nowrap;\n\t\t\ttable-layout: fixed;\n\t\t\tcursor: pointer;\n\t\t\tcolor: black;\n\t\t\toverflow-y: auto;\n\t\t\toverflow-x: hidden;\n\t\t\tdisplay: table;\n\t\t} "),
        H(".lc_wrapper\n\t\t{\n\t\t\tdisplay: block;\n\t\t\toverflow-y: scroll;\n\t\t\toverflow-x: hidden;\n\t\t\tleft: 0px;\n\t\t\twhite-space: nowrap;\n\t\t\tbackground-color: whitesmoke;\n\t\t\tflex: 1 1 auto;\n\t\t\theight: 10px;\n\t\t}"), H(".lc_arrow {\n\t\t\twidth: 0px;\n\t\t\theight: 0px;\n\t\t\tborder-left: 5px solid transparent;\n\t\t\tborder-right: 5px solid transparent;\n\t\t\tmargin-top: 8px;\n\t\t\tvisibility: hidden;\n\t\t}"), H(".lc_down {\n\t\t\tborder-top: 5px solid whitesmoke;\n\t\t}"), H(".lc_up {\n\t\t\tborder-bottom: 5px solid whitesmoke;\n\t\t}"),
        H(".lc_outer {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\talign-content: center;\n\t\t}"));
    this.N = "rgb(236,236,236)";
    a = D(a, "style_flex_column");
    a.style.flex = "1";
    this.L = "lightsteelblue";
    this.P = null;
    var n = D(a, "style_flex_row");
    n.style.flex = "0 0 auto";
    var p = D(n, "lc_header"),
        q = D(p, "lc_header_row lc_gradient");
    n = D(n, "lc_spacer lc_gradient");
    this.i = [];
    this.jb = -1;
    var u = 0;
    b.forEach(function(J) {
        var G = D(q, "lc_header_cell");
        G = D(G, "lc_outer");
        D(G, "lc_arrow lc_up");
        F ? t(D(G, ""), J, F.w) :
            D(G, "", J);
        J = D(G, "lc_arrow lc_up");
        h.i.push(J);
        G.tc = u++
    });
    this.b = q;
    e && Rt(this, e);
    for (var w = D(a, "lc_wrapper"), x = D(w, "lc_list"), I = q.firstChild; I != q.lastChild; I = I.nextSibling) I.style.borderRight = "1px solid darkslategrey";
    Pt.push(this);
    this.Ha = x;
    this.Tg = p;
    this.fe = w;
    this.Kl = n;
    this.U = a;
    this.Hb = null;
    this.B = c;
    this.c = d;
    this.G = e;
    this.aa = f;
    this.c && uc(q, this.c);
    this.fa = b.length;
    this.U.classList.add("lc_rounded_all");
    this.K = D(this.U, "style_flex_row");
    this.K.style.display = "none";
    this.K.style.flex = "0 0 auto";
    this.Me =
        D(this.K, "lc_header");
    this.s = D(this.Me, "row");
    this.Ll = D(this.K, "lc_spacer");
    this.s.style.backgroundColor = "gainsboro";
    this.s.style.color = "black";
    this.Ll.style.backgroundColor = "gainsboro";
    for (b = 0; b < this.fa; b++) D(this.s, "style_cell");
    this.B && tc(this.s, this.B);
    this.c && uc(this.s, this.c)
}

function Rt(a, b) {
    a.G = b;
    for (b = a.b.firstChild; null != b; b = b.nextSibling) {
        b.style.cursor = "pointer";
        var c = b.firstChild;
        c.children[0].style.display = "block";
        c.children[2].style.display = "block";
        c.addEventListener("click", a.ea.bind(a))
    }
}

function St(a, b) {
    for (var c = [], d = a.Ha.firstChild; d; d = d.nextSibling) c.push(d);
    c.sort(b.bind(b));
    c.forEach(function(e) {
        return a.Ha.appendChild(e)
    });
    a.Ld()
}

function kt(a) {
    0 <= a.jb ? (a.G.Eb = a.Tb, a.G.zj = a.jb, St(a, a.G), Tt(a)) : a.Ld()
}
Qt.prototype.Ld = function() {
    for (var a = !0, b = this.Ha.firstChild; b; b = b.nextSibling) "none" != b.style.display && (b.Bn = a, b.style.backgroundColor = a ? this.N : "", a = !a);
    this.Hb && (this.Hb.style.backgroundColor = this.L)
};
Qt.prototype.ea = function(a) {
    a = a.currentTarget.tc;
    this.Tb = this.jb == a ? !this.Tb : !0;
    this.jb = a;
    kt(this);
    this.aa && this.aa(this, this.jb, this.Tb)
};

function Tt(a) {
    a.i.forEach(function(b) {
        return b.style.visibility = "hidden"
    });
    a.i[a.jb].className = a.Tb ? "lc_arrow lc_down" : "lc_arrow lc_up";
    a.i[a.jb].style.visibility = "visible"
}
Qt.prototype.hh = function(a) {
    a = a.currentTarget;
    if (a != this.Hb) {
        var b = this.Hb;
        this.Hb = null;
        b && (b.style.backgroundColor = b.Bn ? this.N : "");
        this.Hb = a;
        a.style.backgroundColor = this.L
    }
};

function Ut(a, b, c, d) {
    for (var e = D(a.Ha, "row"), f = 0; f < a.fa; f++) D(e, "style_cell");
    if (a.P)
        for (f = e.firstChild; f != e.lastChild; f = f.nextSibling) f.style.borderRight = "1px solid " + a.P;
    a.B && tc(e, a.B);
    a.c && uc(e, a.c);
    c ? e.addEventListener("mousedown", c.bind(a)) : e.addEventListener("mousedown", a.hh.bind(a));
    d && e.addEventListener("dblclick", d);
    b && a.Ha.insertBefore(e, a.Ha.firstChild);
    return e
}

function Vt() {
    Pt.forEach(function(a) {
        return a.Tg.style.width = ""
    });
    Pt.forEach(function(a) {
        return a.Me.style.width = ""
    });
    Pt.forEach(function(a) {
        a.Tg.style.width = "";
        if (0 < a.fe.clientWidth) {
            a.Tg.style.width = a.fe.clientWidth + "px";
            var b = a.fe.offsetWidth - a.fe.clientWidth;
            a.Kl.style.width = b + "px";
            a.Tg.style.width = a.fe.offsetWidth - b + "px";
            a.Me && (a.Me.style.width = a.fe.clientWidth + "px", a.Ll.style.width = b + "px", a.Me.style.width = a.fe.offsetWidth - b + "px")
        } else a.Tg.style.width = "100%", a.Me && (a.Me.style.width = "100%")
    })
};

function Wt() {
    qs.call(this);
    var a = this;
    this.jc = "rgb(255,128,255)";
    this.Va = new Map;
    H(".style_filter_bar { \n\t\t\tmargin: 5px 0px;\n\t\t\tbackground-color: rgb(32,32,32);\n\t\t\tborder-radius: 6px;\n\t\t\tpadding: 3px 5px;\n\t\t\tmargin: 3px 5px;\n\t\t\tflex: 0 0 auto;\n\t\t} ");
    H(" .style_cb_box_lobby { \n\t\t\tpointer-events: none; \n\t\t\tmargin-right: 0.5em; \n\t\t\tborder-radius: 5px; \n\t\t\tborder: 1.5px solid dimgrey; \n\t\t\tbox-sizing: border-box; \n\t\t}");
    H(" .style_cb_outer_lobby {\n\t\t\tfont: 13px Roboto, Arial; \n\t\t\tcursor: pointer; \n\t\t\tdisplay: flex; \n\t\t\talign-items: center; \n\t\t}");
    H(".style_lobby_button { \n\t\t\tdisplay: flex; \n\t\t\tjustify-content: center; \n\t\t\tcolor: white; \n\t\t\tfont: 14px/30px Roboto, Arial; \n\t\t\tborder-radius: 5px; \n\t\t\tcursor: pointer; \n\t\t\tmin-width: 100px;\n\t\t\tmargin-right: 10px;\n\t\t\tmargin-bottom: 10px;\n\t\t} ");
    H(".style_tables_button { \n\t\t\tbackground-color: rgb(32,32,32); \n\t\t} ");
    H(".style_tables_button:hover { \n\t\t\tbackground-color: rgb(64,64,64);\n\t\t} ");
    H(".style_cashier_button { \n\t\t\tbackground-color: darkgoldenrod;\n\t\t} ");
    H(".style_cashier_button:hover { \n\t\t\tbackground-color: goldenrod;\n\t} ");
    H(".style_open_table_button { \n\t\t\tdisplay: flex; \n\t\t\tjustify-content: center; \n\t\t\tcolor: lightgrey; \n\t\t\tfont: 14px/25px Roboto, Arial; \n\t\t\tborder-radius: 5px; \n\t\t\tcursor: pointer; \n\t\t\tbackground-color: rgb(32, 32, 32); \n\t\t\tpadding: 0px 10px;\n\t\t\tmargin: 2px 0px;\n\t\t} ");
    H(".style_open_table_button:hover { \n\t\t\tfilter: brightness(120%); \n\t\t\tcolor: white; \n\t\t} ");
    H(".light_gradient\n\t\t{ \n\t\t\tbackground-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));\n\t\t}");
    H(".heavy_gradient\n\t\t{\n\t\t\tbackground-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));\n\t\t}");
    H(".style_tables_wrapper {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n//\t\t\tbackground-color: dimgrey;\n//\t\t\tmargin: 0px 5px;\n\t\t}");
    H(".style_details_content {\n\t\t\ttext-align: center;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tfont: 14px Roboto, Arial;\n\t\t\tpadding-top: 8px;\n\t\t}");
    H(".style_right_button { \n\t\t\tborder-top-right-radius: 5px;\n\t\t\tborder-bottom-right-radius: 5px;\n\t\t}");
    H(".style_left_button { \n\t\t\tborder-top-left-radius: 5px;\n\t\t\tborder-bottom-left-radius: 5px;\n\t\t}");
    H(".arrow {\n\t\t\twidth: 0px;\n\t\t\theight: 0px;\n\t\t\tborder-left: 5px solid transparent;\n\t\t\tborder-right: 5px solid transparent;\n\t\t\tmargin-top: 10px;\n\t\t\tvisibility: hidden;\n\t\t}");
    H(".down {\n\t\t\tborder-top: 5px solid white;\n\t\t}");
    H(".up {\n\t\t\tborder-bottom: 5px solid white;\n\t\t}");
    H(".style_table_cell { display: table-cell; padding: 0px 5px 0px 5px; overflow: hidden; text-overflow: ellipsis; border-right: 1px solid darkgrey; }");
    H(".style_workspace { \n\t\t\tdisplay: none; \n\t\t\tflex-direction: column; \n\t\t\twidth: 100%; \n\t\t\theight: 100%; \n\t\t\tbackground-color: black;\n\t\t}");
    H(".style_lobby_wrapper { \n\t\t\tbackground-color: rgb(32,32,32); \n\t\t\tdisplay: flex; flex-grow: 1; \n\t\t\tfont: 14px/30px Roboto, Arial;\n\t\t}");
    H(".style_header_gradient { \n\t\t\tbackground-color: dimgrey;\n\t\t\tbackground-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));\n\t\t\ttransition: background 0.15s ease 0s;\n\t\t}");
    H(".style_lobby_table_header { \n\t\t\tz-index: 45; \n\t\t\toverflow-y: auto; \n\t\t\tleft: 0px; \n\t\t\twidth: 500px; \n\t\t\twhite-space: nowrap; \n\t\t\tdisplay: table; \n\t\t\ttable-layout: fixed; \n\t\t\tflex: 0 0 auto; \n//\t\t\ttext-transform: uppercase; \n\t\t}");
    H(".style_table_wrapper { \n\t\t\tz-index: 45; \n\t\t\tdisplay: block; \n\t\t\toverflow-y: scroll; \n\t\t\toverflow-x: hidden; \n\t\t\tleft: 0px; \n\t\t\tmin-width: 300px;\t\n\t\t\twhite-space: nowrap; \n\t\t\tbackground-color: black; \n\t\t\tflex: 1 1 auto; \n\t\t\theight: 100px; \n\t\t\tborder-bottom: 1px solid lightgray; \n\t\t}");
    H(".style_lobby_table { \n\t\t\tz-index: 45; \n\t\t\tdisplay: table; \n\t\t\ttop: 0px; \n\t\t\tleft: 0px; \n\t\t\twidth: 100%; \n\t\t\twhite-space: nowrap; \n\t\t\ttable-layout: fixed; \n\t\t\tcursor: pointer; \n\t\t}");
    H(".style_player_table_wrapper { \n\t\t\tdisplay: flex; \n\t\t\tflex-direction: column; \n\t\t\tbackground-color: black; \n\t\t\tflex: 0 0 auto; \n\t\t\twidth: 200px; \n\t\t\tcolor: white; \n//\t\t\tmargin-right: 5px;\n\t\t}");
    H(".style_details { \n\t\t\tcolor: white; \n\t\t\ttext-align: center; \n\t\t\twidth: 200px; \n\t\t\tbackground-color: dimgray;\n\t\t\ttext-transform: uppercase;\n\t\t\tfont-weight: bold;\n\t\t}");
    H(".style_main_avatar { \n\t\t\tmargin-right: 10px; \n\t\t\tmargin-left: 10px; \n\t\t\tmargin-top: 5px; \n\t\t\twidth: 80px; \n\t\t\theight: 80px;\n\t\t\tbackground-color: transparent; \n\t\t\tborder-radius: 10px; \n\t\t}");
    H(".style_player_info_item { padding: 4px 10px 4px 10px; display: inline-flex; line-height: 25px; white-space: nowrap;  }");
    H(".style_player_info_item_value {margin-left: 10px; color: gold; }");
    H(".style_list_header_row { \n\t\t\tdisplay: table-row; \n\t\t\tcolor: white; \n\t\t}");
    H(".style_list_header_cell { display: table-cell; padding: 0px 5px 0px 5px; overflow: hidden; text-overflow: ellipsis; cursor: pointer; border-right: 1px solid darkgrey; }");
    H(".style_player_info_bar { \n\t\t\tcolor: white; \n\t\t\tfont: 16px Roboto, Arial; \n\t\t\tcursor: pointer; \n\t\t\ttext-align: right; \n\t\t\tflex: 0 0 auto; \n\t\t}");
    H(".style_info_bar { \n\t\t\tdisplay: flex; \n\t\t\tflex: 0 0 auto; \n\t\t\tjustify-content: space-between; \n\t\t\tbackground-image: linear-gradient(rgb(64, 64, 64), rgb(0, 0, 0)); \n\t\t}");
    H(".style_news_overlay { display: flex; padding: 2px 10px; background: url('felt.jpg'); background-size: contain;justify-content: space-between; min-height: 80px; }");
    H(".style_news_close_button { font: bold 14px Roboto, Arial; border-radius: 5px; background-color: grey; padding: 3px 6px; margin: 4px; cursor: pointer; }");
    H(".style_news_close_button:hover { filter: brightness(150%); }");
    H(" .news_content { margin: 5px 20px; overflow: hidden; color: whitesmoke; font: 16px Roboto, Arial; display: flex; justify-content: space-around; flex-direction: column; } ");
    H(" .news_content_line { margin: 0px; background: rgba(0,0,0,0.5); border-radius: 13px; padding: 0px 5px; } ");
    H(".style_right_div { \n\t\t\tpadding-top: 20px;\n\t\t\tdisplay: flex; \n\t\t\tflex-direction: column; \n\t\t\tjustify-content: flex-end; \n\t\t}");
    H(".style_legend_bar { \n\t\t\tdisplay: flex; \n\t\t\talign-items: center; \n\t\t\theight: 30px; \n\t\t\tbackground-color: black; \n\t\t\tfont: 13px Roboto, Arial; \n\t\t\tpadding: 0px 5px; \n\t\t\tcolor: white; \n\t\t\tflex: 0 0 auto;\n\t\t\twhite-space: nowrap;\n\t\t\tjustify-content: space-between;\n\t\t}");
    H(".t_legend_item { \n\t\t\tmargin-right: 2em; \n\t\t}");
    H(".style_details_row { display: flex; justify-content: space-between; padding: 0px 10px; }");
    H(".style_details_table { font: 14px Roboto, Arial; white-space: nowrap; line-height: 25px; }");
    H(".style_details_spacer { height: 0px; border-bottom: 1px solid lightgrey; }");
    H(".style_details_button_row { display: flex; justify-content: center; }");
    H(".style_control_bar \n\t\t{ \n\t\t\tflex: 0 0 auto;\n\t\t\tdisplay: flex; \n\t\t\talign-items: center; \n\t\t\tfont: 14px Roboto, Arial; \n\t\t\tcolor: white; \n\t\t\tjustify-content: space-between;\n\t\t\tbackground-color: rgb(32,32,32);\n\t\t\tmargin: 0px 5px;\n\t\t    border-radius: 6px;\n\t\t\tpadding: 5px;\n\t\t}");
    H(".style_control_bar .button \n\t\t{ \n\t\t\theight: 25px; \n\t\t\tline-height: 25px; \n\t\t\twhite-space: nowrap; \n\t\t\tmin-width: 50px; \n\t\t\ttext-align: center; \n\t\t\tcolor: white; \n\t\t\tpadding: 2px 15px; \n\t\t\tfont: 14px Roboto, Arial; \n\t\t\tbackground-color: rgb(28, 90, 77); \n\t\t\tbackground-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));\n\t\t\ttransition: background 0.15s ease 0s;\n\t\t}");
    H(".style_control_bar .unchecked \n\t\t{ \n\t\t\tcursor: pointer; \n\t\t\tcolor: lightgrey;\n\t\t\tborder-color: rgb(48,48,48); background-color: black; \n\t\t}");
    H(".style_control_bar .unchecked:hover \n\t\t{ \n\t\t\tcursor: pointer; \n\t\t\tbackground-color: rgb(32,32,32);\n\t\t}");
    H(".style_control_bar_2\n\t\t{ \n\t\t\tdisplay: flex; \n\t\t\talign-items: center; \n\t\t\tfont: 14px Roboto, Arial; \n\t\t\tcolor: white; \n\t\t\tmargin: 0px;\n\t\t\tflex\n\t\t}");
    H(".style_control_bar_2 .button \n\t\t{ \n\t\t\theight: 25px; \n\t\t\tline-height: 25px; \n\t\t\twhite-space: nowrap; \n\t\t\tmin-width: 60px; \n\t\t\ttext-align: center; \n\t\t\tcolor: white; \n\t\t\tpadding: 0px 15px; \n\t\t\tfont: 14px Roboto, Arial; \n\t\t\tbackground-color: rgb(28, 90, 77); \n\t\t\tbackground-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));\n//\t\t\ttransition: background 0.15s ease 0s;\n\t}");
    H(".style_control_bar_2 .micro_stakes\n\t\t{ \n\t\tbackground-color: darkgreen;\n\t}");
    H(".style_control_bar_2 .mid_stakes\n\t\t{ \n//\t\tbackground-color: rgb(255,165,0);\n\t\tbackground-color: saddlebrown;\n//background-color: rgb(96,48,0);\n\t}");
    H(".style_control_bar_2 .low_stakes\n\t\t{ \n//\t\tbackground-color: rgb(255,165,0);\n\t\tbackground-color: darkgoldenrod;\n//background-color: rgb(96,48,0);\n\t}");
    H(".style_control_bar_2 .high_stakes\n\t\t{ \n//\t\tbackground-color: rgb(255,165,0);\n\t\tbackground-color: darkred;\n//background-color: rgb(96,48,0);\n\t}");
    H(".style_control_bar_2 .unchecked \n\t\t{ \n\t\t\tcursor: pointer; \n\t\t\tborder-color: rgb(48,48,48); background-color: black; \n\t\t\tcolor: lightgrey; \n\t\t}");
    H(".style_control_bar_2 .unchecked:hover \n\t\t{ \n\t\t\tcursor: pointer; \n\t\t\tbackground-color: rgb(32,32,32);\n\t\t}");
    H(".style_list_header_div\n\t\t{ \n\t\t\tdisplay: flex; \n\t\t\tjustify-content: space-between;\n\t\t\talign-content: center;\n\t\t}");
    this.b = D(document.body, "style_workspace");
    Xt(this, this.b);
    Yt(this, this.b);
    Zt(this,
        this.b);
    $t(this, this.b);
    var b = au(this, ["_tTable", "_tStakes", "_tGame", "_tPlayers", "_tWait"], [null, null, null, "center", "center"], [null, "20%", null, "15%", "10%"], this.Vl);
    this.Ze = b.Xh;
    this.ha = b.Ha;
    bu(this, b.mo);
    var c = cu(this.b);
    this.Ag = b.Wh;
    b = au(this, "_tGame _tBuyIn _tSpeed _tType _tStatus _tPlayers".split(" "), [null, "right", "center", "center", "center", "center"], null, this.Xl);
    this.$e = b.Xh;
    this.c = b.Ha;
    this.Bb = b.Wh;
    b = au(this, "_tStart _tName _tGame _tBuyIn _tPlayers _tPrizepool".split(" "), ["center", null, null,
        "right", "center", "right"
    ], null, this.Zl);
    this.Pf = b.Xh;
    this.i = b.Ha;
    this.wb = b.Wh;
    b = au(this, ["_tTable", "_tStakes", "_tGame", "_tPlayers", "_tWait"], [null, null, null, "center", "center"], [null, "20%", null, "15%", "10%"], null);
    this.Ye = b.Xh;
    this.zc = b.Ha;
    this.mj = b.Wh;
    b = D(this.b, "style_info_bar");
    this.b.insertBefore(b, this.b.firstChild);
    var d = ic(b);
    d.style.marginLeft = "10px";
    C(d, null, "./site/logo.png").style.height = "90px";
    d = ic(b);
    d.style.display = "flex";
    var e = D(d, "style_right_div");
    e.style.justifyContent = "flex-end";
    var f = D(e, "style_flex_row");
    f.style.justifyContent = "flex-end";
    t(E(f, "style_lobby_button style_tables_button light_gradient"), "_tMyTables", F.w).addEventListener("click", function() {
        Ab(X.s.m.Ha);
        br.b.send((new El(R.f, Pg)).J())
    });
    t(E(f, "style_lobby_button style_cashier_button light_gradient"), "_tCashier", F.w).addEventListener("click", function() {
        return a.am.bind(a)()
    });
    e = D(e, "style_player_info_bar");
    f = D(e, "style_player_info_item");
    f = E(f);
    f.className = "style_player_info_item_value";
    this.b.Jh = f;
    f = D(e, "style_player_info_item");
    t(E(f), "_tBalance", F.w);
    f = E(f);
    this.b.Ec = f;
    f.className = "style_player_info_item_value";
    e = D(e, "style_player_info_item");
    t(E(e), "_tInPlay", F.w);
    f = E(e);
    this.b.Bg = f;
    f.className = "style_player_info_item_value";
    d = ic(d);
    d = C(d, "style_main_avatar", "./images/av/a0.png");
    this.b.Wd = d;
    d.addEventListener("click", du);
    if (this.N = eu(this, this.b))(d = rc("display_news")) || (d = "1"), this.N.style.display = "1" == d ? "flex" : "none";
    this.Ca = D(this.b, "style_control_bar");
    this.b.insertBefore(this.Ca, b.nextSibling);
    b = D(this.Ca, "style_flex_row");
    b.style.alignSelf = "center";
    this.s = [t(D(b, "button style_left_button"), "_tRingGames", F.w), t(D(b, "button"), "_tTournaments", F.w), t(D(b, "button"), "_tSNGs", F.w), t(D(b, "button style_right_button"), "_tAOF", F.w)];
    this.s[3].style.display = "none";
    this.s[2].classList.add("style_right_button");
    var h = 0;
    this.s.forEach(function(n) {
        n.style.lineHeight = "25px";
        n.addEventListener("click", a.Uf.bind(n));
        n.tc = h++
    });
    this.s[0].vd = this.vd;
    this.s[0].Fb = this.Ze;
    this.s[1].vd = this.Pb;
    this.s[1].Fb = this.Pf;
    this.s[2].vd = this.Md;
    this.s[2].Fb =
        this.$e;
    this.s[3].vd = this.Id;
    this.s[3].Fb = this.Ye;
    this.fh();
    b = D(this.Ca, "style_flex_row");
    b.style.alignSelf = "center";
    d = D(b, "style_lang_flag");
    d.Mj = mt();
    d.addEventListener("click", Lb);
    X.K = d;
    cs(X.K);
    X.L = Mb(b);
    X.L.src = "./images/menu_green.png";
    X.P = Gp(["_tCardsCheck", xr, "", "_tSettings", function() {
            Kb();
            X.Oa.ga()
        }, "./images/menu_settings.png", "_tBetSettings", function() {
            Kb();
            X.fb.ga()
        }, "./images/bet_settings.png", "_tArchive", this.gm.bind(this), "./images/archive.png", "_tHandHistory", fu, "./images/menu_history.png",
        "_tSelfRestrict", gu, "./images/menu_restrict.png", "_tChangePassword", vq, "./images/menu_password.png", "_tNews", this.Zm.bind(this), "./images/menu_news.png", "_tLogout", hu, "./images/menu_leave.png", "_tReconnect", iu, "./images/menu_reconnect.png", "_tAgentAdmin", ju, null, "_tAnnounce",
        function() {
            Kb();
            a.kc.ga()
        },
        null
    ]);
    X.L.Mj = X.P;
    this.s[0].Cg = c;
    this.s[1].Cg = ku(this.b);
    X.c = ac(this.b);
    c = X.c.children[0];
    b = X.c.children[1];
    this.Nd = cc(c);
    for (d = 0; 3 > d; d++) bc(c);
    this.qe = bc(c);
    this.cd = bc(c);
    bc(b);
    this.ha.Tb = !0;
    this.ha.jb =
        3;
    this.c.Tb = !1;
    this.c.jb = 0;
    this.i.Tb = !0;
    this.i.jb = 0;
    if (c = rc("lobby_sort")) c = c.split(":"), 6 == c.length && (this.ha.jb = parseInt(c[0]), this.ha.Tb = 1 == parseInt(c[1]), this.i.jb = parseInt(c[2]), this.i.Tb = 1 == parseInt(c[3]), this.c.jb = parseInt(c[4]), this.c.Tb = 1 == parseInt(c[5]));
    Tt(this.ha);
    Tt(this.c);
    Tt(this.i);
    this.Da = new lu;
    this.kc = new mu
}
k(Wt, qs);
g = Wt.prototype;
g.Vl = function(a, b) {
    switch (this.zj) {
        case 0:
            return Cc(a.A.ka, b.A.ka, this.Eb);
        case 1:
            return vc(a.A.Jj, b.A.Jj, this.Eb);
        case 2:
            return Cc(a.A.ic, b.A.ic, this.Eb);
        case 3:
            return vc(a.A.Ua.bb, b.A.Ua.bb, this.Eb);
        case 4:
            return vc(a.A.Ua.gd, b.A.Ua.gd, this.Eb)
    }
    return 0
};
g.Xl = function(a, b) {
    switch (this.zj) {
        case 0:
            return Cc(a.A.ic, b.A.ic, this.Eb);
        case 1:
            return vc(a.A.Dd, b.A.Dd, this.Eb);
        case 2:
            return vc(a.A.lg, b.A.lg, this.Eb);
        case 3:
            return Cc(a.A.Tj, b.A.Tj, this.Eb);
        case 4:
            return vc(a.A.Ia, b.A.Ia, this.Eb);
        case 5:
            return vc(a.A.kb, b.A.kb, this.Eb)
    }
    return 0
};
g.Zl = function(a, b) {
    switch (this.zj) {
        case 0:
            return vc(a.A.ai, b.A.ai, !this.Eb);
        case 1:
            return Cc(a.A.ka, b.A.ka, this.Eb);
        case 2:
            return Cc(a.A.ic, b.A.ic, this.Eb);
        case 3:
            return vc(a.A.Dd, b.A.Dd, this.Eb);
        case 4:
            return vc(a.A.kb, b.A.kb, this.Eb);
        case 5:
            return vc(a.A.Je, b.A.Je, this.Eb)
    }
    return 0
};
g.fh = function() {
    this.s.forEach(function(a) {
        a.classList.add("unchecked");
        a.Fb.style.display = "none";
        a.vd.style.display = "none";
        a.Cg && (a.Cg.style.display = "none")
    })
};

function au(a, b, c, d, e) {
    var f = D(a.b, "style_lobby_wrapper"),
        h = D(f, "style_tables_wrapper");
    b = new Qt(h, b, c, d, e, a.en);
    b.b.style.lineHeight = "30px";
    b.b.classList.remove("lc_gradient");
    b.Kl.classList.remove("lc_gradient");
    b.b.style.fontWeight = "bold";
    b.b.style.textTransform = "uppercase";
    b.P = "darkgrey";
    b.i.forEach(function(n) {
        return n.style.marginTop = "12px"
    });
    b.U.style.borderBottom = "1px solid darkgrey";
    for (c = b.b.firstChild; c != b.b.lastChild; c = c.nextSibling) c.style.borderRight = "1px solid darkgrey";
    b.fe.style.backgroundColor =
        "black";
    b.Ha.style.color = "white";
    b.L = "rgb(28,90,77)";
    b.N = "rgb(32,32,32)";
    a.Ta.push(b);
    a = D(f, "style_player_table_wrapper");
    t(D(a, "style_details"), "_tDetails", F.w);
    a = ic(a);
    a.style.overflowY = "hidden";
    a.style.display = "flex";
    a.style.flex = "1 1 auto";
    a.style.height = "10px";
    a = D(a, "");
    a.style.textAlign = "center";
    a.style.width = "100%";
    return {
        Xh: f,
        Ha: b,
        Wh: a,
        mo: h
    }
}
g.om = function() {
    this.N.style.display = "none";
    K("display_news", "0")
};

function eu(a, b) {
    if (!window.LoadNews) return null;
    var c = window.LoadNews();
    b = D(b, "style_news_overlay");
    var d = D(b, "");
    E(d, "style_news_close_button", "X").style.visibility = "hidden";
    d = D(b, "news_content");
    c.forEach(function(e) {
        return E(d, "news_content_line", e)
    });
    d = D(b, "");
    E(d, "style_news_close_button", "X").addEventListener("click", a.om.bind(a));
    return b
}
g.Uf = function() {
    qs.prototype.Uf.call(this);
    this.vd.style.display = "flex";
    this.Cg && (this.Cg.style.display = "flex");
    Y.Yb()
};

function nu(a) {
    var b = [];
    if (!a.ia) return b;
    switch (a.ia.Ia) {
        case xd:
            return b.push(a.va.ka), b.push(""), b.push("Tournament Completed"), b;
        case yd:
            return b.push("Tournament Cancelled"), b;
        case zd:
            return b.push(a.va.ka), b.push(""), b.push("Tournament is suspended"), b;
        case sd:
            return b.push(a.va.ka), b;
        case td:
            b.push(a.va.ka);
            b.push("");
            b.push("Registration Open");
            break;
        case vd:
            return [a.va.ka, "Tournament is running", "", "Late Registration Open"];
        case wd:
            return [a.va.ka, "Tournament is running", "", "Registration Closed"];
        case ud:
            return [a.va.ka, "", "Seating"]
    }
    if (a.va.Lc == ff && !Ad(a.ia.Ia)) {
        b.push("Starts in");
        a = a.va.Mf;
        a = Math.floor((new Date(Date.UTC(a[0], a[1] - 1, a[3], a[4], a[5], 0, 0)) - new Date) / 6E4);
        if (0 == a) a = "< 1 min";
        else if (1 == a) a = "1 min";
        else {
            var c = "",
                d = Math.floor(a / 1440);
            0 < d && (c = 1 < d ? d + " days " : "1 day ", a -= 1440 * d);
            d = Math.floor(a / 60);
            0 < d && (c = 1 == d ? c + "1 hour " : c + (d + " hours "), a -= 60 * d);
            1 == a ? c += "1 min" : 1 < a && (c += a + " mins");
            a = c
        }
        b.push(a)
    }
    return b
}

function ou(a, b) {
    a.A.Ia = b.ia.Ia;
    a.A.kb = b.ia.zd;
    a.A.Xg = Wl(b);
    a.A.Je = b.ia.Je;
    b.va.Lc == df ? (a.children[5].textContent = a.A.Xg, pu(a)) : (a.children[4].textContent = a.A.Xg, ht(a.children[0], new Date, a.A), a.children[5].textContent = y(a.A.Je, void 0))
}
g.Ek = function(a) {
    var b = It.get(a);
    if (b) {
        var c = R.s.get(a);
        c && c.ia && ou(b, c)
    }
    Vq(this, a)
};

function Vq(a, b) {
    a.wb.H == b ? qu(a, b, a.wb) : a.Bb.H == b && qu(a, b, a.Bb)
}

function qu(a, b, c) {
    Ab(c);
    var d = qm(b);
    if (d) {
        c.H = b;
        nu(d).forEach(function(h) {
            m(h) ? D(c, "", h) : (D(c, "", h), c.style.padding = "3px 0px")
        });
        D(c, "style_10px_spacer");
        D(c, "style_details_spacer");
        D(c, "style_10px_spacer");
        if (d.ia) {
            if (10 >= d.va.Cl) {
                var e = D(c, "style_details_table");
                D(c, "style_10px_spacer");
                D(c, "style_details_spacer");
                D(c, "style_10px_spacer");
                if (0 == d.bc.length) {
                    var f = D(e, "style_details_row");
                    f.style.justifyContent = "space-around";
                    E(f, "", "No Players")
                } else d.bc.forEach(function(h) {
                    var n = D(e, "style_details_row");
                    E(n, "", Sn(h.f));
                    Ad(d.ia.Ia) ? E(n, "", y(h.T, !0)) : n.style.justifyContent = "space-around"
                })
            }
            f = qq(b);
            1 == f ? E(c, "style_open_table light_gradient", l("_tRegister")).addEventListener("click", function() {
                return Lt(b)
            }) : 2 == f && E(c, "style_open_table light_gradient", l("_tUnregister")).addEventListener("click", function() {
                Mt(b)
            })
        }
        D(c, "style_10px_spacer");
        E(c, "style_button_details light_gradient", l("_tOpenLobby")).addEventListener("click", a.tk.bind(a, b));
        D(c, "style_10px_spacer");
        d.Rd && E(c, "style_open_table light_gradient",
            l("_tMyTable")).addEventListener("click", a.an.bind(a, d.Rd))
    }
}

function Zq(a, b, c) {
    Ab(c);
    if (b.Hb) {
        var d = b.Hb.A,
            e = sl(d.h);
        if (e && e.bc) {
            var f = D(c, "style_details_table");
            D(c, "style_10px_spacer");
            var h = E(c, "style_open_table light_gradient", l("_tOpenTable"));
            h.addEventListener("click", function() {
                a.Ob(b.Hb.A.h)
            });
            D(c, "style_10px_spacer");
            for (var n = 0; n < e.o.v; n++) D(f, "style_details_row");
            var p = !1;
            e.bc.forEach(function(x) {
                var I = f.children[x.j],
                    J = "";
                if (vb(x.ll, 2)) var G = l("_tReserved");
                else R.f == x.f && (p = !0), G = Sn(x.f), vb(x.ll, 1) && (I.style.textDecoration = "line-through"), J =
                    y(x.T);
                E(I, "", G);
                E(I, "", J)
            });
            n = 0;
            for (var q = {
                    ie: 0
                }; q.ie < e.o.v; q = {
                    ie: q.ie
                }, q.ie++) h = f.children[q.ie], 0 == h.children.length && (n++, h.style.justifyContent = "center", p ? E(h, "", l("_tSeatOpen")) : (h = E(h, "style_button_details light_gradient", l("_tTakeSeat")), h.Ad = q.ie, h.addEventListener("click", function(x) {
                return function() {
                    return a.Ob(d.h, x.ie)
                }
            }(q))));
            0 == n && (D(c, "style_details_spacer"), D(c, "style_10px_spacer"));
            var u = !1,
                w = D(c, "style_details_table");
            0 < e.cc.length && (e.cc.forEach(function(x) {
                e.o.gj || D(w, null, Sn(x));
                x == R.f && (u = !0)
            }), e.o.gj && D(w, null, 1 == e.cc.length ? "1 Player Waiting" : e.cc.length + " Players Waiting"));
            p || 0 != n || (D(a.Ag, "style_10px_spacer"), n = E(c, "style_open_table light_gradient", l("_tOpenSameTable")), n.addEventListener("click", function() {
                    return ep(d.h)
                }), c.insertBefore(n, w), n = D(c, "style_10px_spacer"), c.insertBefore(n, w), n = E(c, "style_button_details light_gradient"), c.insertBefore(n, w), n.addEventListener("click", function() {
                    return S((new T(R.f, d.h, Yg)).J())
                }), n.h = d.h, n.textContent = u ? l("_tLeaveWaitingList") :
                l("_tJoinWaitingList"))
        }
    }
}
g.Wf = function(a) {
    qs.prototype.Wf.call(this, a);
    this.ha.Hb && Zj(a.h, this.ha.Hb.A.h) ? Zq(this, this.ha, this.Ag) : this.zc.Hb && Zj(a.h, this.zc.Hb.A.h) && Zq(this, this.zc, this.mj);
    var b = pp.get(a.h.Fa);
    b && (b.A.Ua.gd = a.cc.length, b.A.Ua.bb = a.bc.length, ru(b));
    it(this, this.ha)
};
g.lm = function(a) {
    this.ha.hh(a);
    S((new W(this.ha.Hb.A.h, Of)).J());
    Zq(this, this.ha, this.Ag)
};
g.pk = function(a) {
    this.i.hh(a);
    qu(this, this.i.Hb.A.H, this.wb)
};
g.mm = function(a) {
    this.c.hh(a);
    S(Zl(this.c.Hb.A.H, Jh));
    qu(this, this.c.Hb.A.H, this.Bb)
};
g.qm = function(a) {
    this.Ob(a.currentTarget.A.h)
};
g.Bi = function(a) {
    this.tk(a.currentTarget.A.H)
};
g.Ob = function(a, b) {
    b = void 0 === b ? -1 : b;
    var c = Vj(a);
    if (a = pm(a))
        if (a.closed) R.G.delete(c);
        else return a.focus(), -1 !== b && a.postMessage({
            command_type: Pa,
            seat: b
        }, "*"), !1;
    a = {
        Mc: c,
        Ad: b
    };
    sp = b;
    if (b = window.open(("file:" == window.location.protocol ? "table_dev.html" : "table.html") + ("?token=" + c), "_blank", "menubar=no, toolbar=no, personalbar=no, resizable=yes, height=550, width=800")) this.Va.set(c, a), R.G.set(c, b);
    return !0
};
g.an = function(a) {
    this.Ob(a)
};
g.tk = function(a) {
    var b = R.B.get(a);
    if (b)
        if (b.closed) R.B.delete(a);
        else {
            b.focus();
            return
        }(b = window.open(("file:" == window.location.protocol ? "tlobby_dev.html" : "tlobby.html") + ("?token=" + a), "_blank", "menubar=no, toolbar=no, personalbar=no, resizable=yes, height=550, width=800")) && R.B.set(a, b)
};
g.Ck = function() {
    for (var a = this.ha.Ha.firstChild; a; a = a.nextSibling) {
        var b = a,
            c = b.A;
        b.children[1].textContent = nk(c.S, c.O, c.Pc);
        b.children[2].textContent = yk(c.S)
    }
    this.cd.textContent = l("_tVersion") + " " + this.Na;
    Zq(this, this.ha, this.Ag);
    Zq(this, this.zc, this.mj);
    Ar(this);
    su()
};
g.ki = function(a) {
    a = a.o;
    var b = {
            ka: a.Sb,
            ic: yk(a.S),
            Jj: a.O.ib,
            Og: a.v,
            Jf: a.Tk,
            h: a.h,
            S: a.S,
            O: a.O,
            Pc: a.Pc,
            Ua: new Ll
        },
        c = Ut(this.ha, null, this.lm.bind(this), this.qm.bind(this));
    c.A = b;
    b = c.children[0];
    b.textContent = a.Sb;
    b = c.children[1];
    b.textContent = rs(a);
    b = D(c.children[2], "style_flex_row");
    b.style.lineHeight = "1.5em";
    var d = D(b, "", yk(a.S));
    Os(b, a).firstChild && (d.style.marginRight = "5px");
    Ak(a.S.l) ? d.style.color = this.jc : we == a.S.l && (b = E(d, "info_cell", "i"), b.addEventListener("click", nt), b.h = a.h);
    c.Lf = ot(a);
    et(this,
        c);
    pp.set(a.h.Fa, c);
    it(this, this.ha)
};

function ru(a) {
    var b = a.A.Ua;
    a.children[3].textContent = b.bb + "/" + a.A.Og;
    a.children[3].style.fontWeight = 0 < b.bb ? "bold" : "normal";
    a.children[4].textContent = 0 < b.gd ? b.gd : ""
}
g.Fk = function() {
    for (var a = new Date, b = this.i.Ha.firstChild; b; b = b.nextSibling) ht(b.children[0], a, b.A)
};
g.ji = function(a) {
    var b = a.va,
        c = b.sb;
    if (!It.get(c)) {
        var d = b.Mf;
        d = {
            H: c,
            ka: b.ka,
            ai: lc(d),
            Qj: mc(nc(d)),
            ic: yk(b.X),
            Dd: b.Za + b.ra + b.Ya,
            Ia: 0,
            Vb: b.Vb,
            Hl: b.Dh ? 2 : 0 == b.Za + b.Ya ? 1 : 0,
            Al: b.X.l,
            mg: nc(d),
            Je: 0
        };
        var e = Ut(this.i, null, this.pk.bind(this), this.Bi.bind(this));
        Rb(e, [null, d.ka, d.ic, y(d.Dd, void 0), d.Xg]);
        dt(e.children[1], b);
        e.A = d;
        e.addEventListener("mousedown", this.pk.bind(this));
        e.addEventListener("dblclick", this.Bi.bind(this));
        Ak(b.X.l) && (e.children[2].style.color = this.jc);
        It.set(c, e);
        ht(e.children[0], new Date,
            e.A);
        a.ia && ou(e, a);
        ft(this, e);
        it(this, this.i)
    }
};

function pu(a) {
    var b = a.A;
    Rb(a, [b.ic, y(b.Dd, void 0), We[b.lg], b.Tj, null, b.Xg]);
    b = a.children[4];
    a = a.A;
    var c = "";
    switch (a.Ia) {
        case zd:
            c = "gold";
            break;
        case yd:
            c = "lightsalmon";
            break;
        case xd:
            c = "darkgrey";
            break;
        case vd:
        case wd:
        case ud:
            c = "lime"
    }
    b.style.color = c;
    b.textContent = Bd[a.Ia]
}
g.ii = function(a) {
    var b = a.va,
        c = b.sb,
        d = It.get(c);
    if (!d) {
        d = "";
        b.hl && (d = "Shootout");
        Ve == b.yn && (m(d) || (d += " "), d += "50/50");
        var e = {
            H: c,
            Tj: d,
            ic: yk(b.X),
            Ia: 0,
            Dd: b.Za + b.Ya,
            lg: b.lg,
            kb: b.kb,
            Xg: "",
            Vb: b.Vb
        };
        d = Ut(this.c);
        d.A = e;
        d.addEventListener("mousedown", this.mm.bind(this));
        d.addEventListener("dblclick", this.Bi.bind(this));
        Ak(b.X.l) && (d.firstChild.style.color = this.jc);
        pu(d);
        It.set(c, d);
        a.ia && ou(d, a);
        it(this, this.c);
        gt(this, d)
    }
};
g.en = function() {
    K("lobby_sort", [Y.ha.jb, Y.ha.Tb ? 1 : 0, Y.i.jb, Y.i.Tb ? 1 : 0, Y.c.jb, Y.c.Tb ? 1 : 0].join(":"))
};
g.Yb = function() {
    Vt();
    X.G && tu()
};
g.Gk = function(a, b) {
    if (a = pp.get(a)) {
        var c = a.A.Ua.bb != b.bb,
            d = a.A.Ua.gd != b.gd;
        a.A.Ua = b;
        ru(a);
        (c && 3 == Y.jb || d && 4 == Y.jb) && it(this, this.ha);
        et(this, a)
    }
};

function Yt(a, b) {
    a.Pb = D(b, "style_flex_column style_filter_bar");
    a.P = [];
    a.xb = D(a.Pb, "style_control_bar_2");
    a.xb.style.marginBottom = "2px";
    b = D(a.xb, "style_flex_row");
    b.style.alignSelf = "center";
    a.Ba = [t(D(b, "button style_left_button", ""), "_tFreezeout", F.w), t(D(b, "button", ""), "_tFreeroll", F.w), t(D(b, "button style_right_button", ""), "_tRe-entry", F.w)];
    var c = 0;
    a.Ba.forEach(function(d) {
        return d.xa = c++
    });
    a.Ba.forEach(function(d) {
        return a.P.push(d)
    });
    a.Ba.forEach(function(d) {
        return d.addEventListener("click",
            a.Se.bind(a))
    });
    b = D(a.xb, "style_flex_row");
    b.style.alignSelf = "center";
    a.ua = [t(D(b, "button micro_stakes style_left_button", ""), "_tMicro", F.w), t(D(b, "button low_stakes", ""), "_tLow", F.w), t(D(b, "button mid_stakes", ""), "_tMid", F.w), t(D(b, "button high_stakes style_right_button", ""), "_tHighStakes", F.w)];
    c = 0;
    a.ua.forEach(function(d) {
        return d.xa = c++
    });
    a.ua.forEach(function(d) {
        return a.P.push(d)
    });
    a.ua.forEach(function(d) {
        return d.addEventListener("click", a.Se.bind(a))
    });
    a.Oa = D(a.Pb, "style_control_bar_2");
    b = D(a.Oa, "style_flex_row");
    b.style.alignSelf = "center";
    a.sa = [D(b, "button style_left_button", "Holdem"), D(b, "button style_right_button", "Omaha")];
    c = Xe;
    a.sa.forEach(function(d) {
        return d.xa = c++
    });
    a.sa.forEach(function(d) {
        return d.addEventListener("click", a.Se.bind(a))
    });
    a.sa.forEach(function(d) {
        return a.P.push(d)
    });
    a.P.forEach(function(d) {
        d.style.lineHeight = "25px";
        d.style.height = "25px";
        d.style.marginRight = "1px"
    })
}

function $t(a, b) {
    a.Id = D(b, "style_flex_column style_filter_bar");
    a.U = [];
    b = D(a.Id, "style_control_bar_2");
    b = D(b, "style_flex_row");
    b.style.alignSelf = "center";
    a.aa = [D(b, "button style_left_button", "Holdem"), D(b, "button style_right_button", "Omaha")];
    var c = Xe;
    a.aa.forEach(function(d) {
        return d.xa = c++
    });
    a.aa.forEach(function(d) {
        return d.addEventListener("click", function(e) {
            return Ts(a, e)
        })
    });
    a.aa.forEach(function(d) {
        return a.U.push(d)
    });
    a.U.forEach(function(d) {
        d.style.lineHeight = "25px";
        d.style.height = "25px";
        d.style.marginRight = "1px"
    })
}

function Zt(a, b) {
    a.Md = D(b, "style_flex_column style_filter_bar");
    a.ea = [];
    a.Of = D(a.Md, "style_control_bar_2");
    b = D(a.Of, "style_flex_row");
    b.style.alignSelf = "center";
    a.ja = [t(D(b, "button micro_stakes style_left_button", ""), "_tMicro", F.w), t(D(b, "button low_stakes", ""), "_tLow", F.w), t(D(b, "button mid_stakes", ""), "_tMid", F.w), t(D(b, "button high_stakes style_right_button", ""), "_tHighStakes", F.w)];
    var c = 0;
    a.ja.forEach(function(d) {
        return d.xa = c++
    });
    a.ja.forEach(function(d) {
        return a.ea.push(d)
    });
    a.ja.forEach(function(d) {
        return d.addEventListener("click",
            a.nk.bind(a))
    });
    a.ea.forEach(function(d) {
        d.style.lineHeight = "25px";
        d.style.height = "25px";
        d.style.marginRight = "1px"
    })
}

function Xt(a, b) {
    a.vd = D(b, "style_flex_column style_filter_bar");
    a.G = [];
    a.ab = D(a.vd, "style_control_bar_2");
    a.ab.style.marginBottom = "2px";
    b = D(a.ab, "style_flex_row");
    b.style.alignSelf = "center";
    a.K = [t(D(b, "button style_left_button", ""), "_tNoLimit", F.w), t(D(b, "button", ""), "_tPotLimit", F.w), t(D(b, "button style_right_button", ""), "_tLimit", F.w)];
    a.K[0].xa = Rd;
    a.K[1].xa = Td;
    a.K[2].xa = Sd;
    a.K.forEach(function(d) {
        return d.addEventListener("click", a.me.bind(a))
    });
    a.K.forEach(function(d) {
        return a.G.push(d)
    });
    b = D(a.ab,
        "style_flex_row");
    b.style.alignSelf = "center";
    a.ma = [t(D(b, "button micro_stakes style_left_button", ""), "_tMicro", F.w), t(D(b, "button low_stakes", ""), "_tLow", F.w), t(D(b, "button mid_stakes", ""), "_tMid", F.w), t(D(b, "button high_stakes style_right_button", ""), "_tHighStakes", F.w)];
    var c = 0;
    a.ma.forEach(function(d) {
        return d.addEventListener("click", a.me.bind(a))
    });
    c = 0;
    a.ma.forEach(function(d) {
        return d.xa = c++
    });
    a.ma.forEach(function(d) {
        return a.G.push(d)
    });
    a.Oa = D(a.vd, "style_control_bar_2");
    b = D(a.Oa, "style_flex_row");
    b.style.alignSelf = "center";
    a.fa = [D(b, "button style_left_button", "Holdem"), D(b, "button", "Omaha"), D(b, "button", "Stud"), D(b, "button", "Draw"), D(b, "button", "Mixed"), D(b, "button", "OFC"), D(b, "button style_right_button", "Big Two")];
    c = Xe;
    a.fa.forEach(function(d) {
        return d.xa = c++
    });
    a.fa.forEach(function(d) {
        return d.addEventListener("click", a.me.bind(a))
    });
    a.fa.forEach(function(d) {
        return a.G.push(d)
    });
    a.G.forEach(function(d) {
        d.style.lineHeight = "25px";
        d.style.height = "25px";
        d.style.marginRight = "1px"
    })
}
g.gm = function() {
    Kb();
    if (!R.Ba || R.Ba.closed) {
        if ("file:" == window.location.protocol) {
            var a = window.location.href;
            a = a.slice(0, a.lastIndexOf("/"));
            a += "/archive_dev.html"
        } else a = window.location.origin + "/archive.html";
        R.Ba = window.open(a, "_blank", "menubar=no, toolbar=no, personalbar=no, resizable=yes, height=550, width=800")
    }
    R.Ba.focus()
};
g.am = function() {
    Kb();
    this.Da.ga()
};
g.Ki = function(a) {
    R.L && !R.L.closed && R.L.postMessage({
        command_type: Ua,
        a: [
            [a.sc, a.ce, a.Mc, a.fj.join(","), a.Rj, a.u, a.Ej]
        ]
    }, "*")
};

function ku(a) {
    var b = D(a, "style_legend_bar");
    a.insertBefore(b, null);
    a = D(b, "t_legend_item", "Regular");
    a.style.marginLeft = "1em";
    a = D(b, "t_legend_item", "Freeroll");
    a.style.color = "greenyellow";
    a = D(b, "t_legend_item", "Bounty");
    a.style.color = "gold";
    return b
}

function uu(a, b, c) {
    var d = D(b, "style_cb_outer_lobby");
    d.Xd = D(d, "style_cb_box_lobby");
    D(d.Xd, "style_cb_button").style.padding = "2px";
    d.hb = D(d, "style_cb_text");
    t(d.hb, c, F.w);
    d.addEventListener("click", function() {
        d.checked = !d.checked;
        Yb(d);
        a.Pi();
        Rs(a);
        qp(a, a.ha.Ha);
        a.ha.Ld()
    });
    return d
}

function bu(a, b) {
    b = D(b, "style_legend_bar");
    D(b, "style_flex_row");
    b = D(b, "style_flex_row");
    a.gb = uu(a, b, "_tHideFullTables");
    a.gb.style.marginRight = "1em";
    a.vb = uu(a, b, "_tHideEmptyTables")
}
g.Pi = function() {
    R.ua = this.gb.checked;
    R.sa = this.vb.checked
};

function cu(a) {
    var b = D(a, "style_legend_bar");
    a.insertBefore(b, null);
    var c = D(b, "style_flex_row");
    D(b, "style_flex_row");
    var d = "_tStraddle _tButtonStraddle _tKillGame _tAlwaysRunTwice _tCAPGame _tDoubleBoard _tJokers".split(" "),
        e = 0;
    [Rr(c, "S", "darkblue"), Rr(c, "BS", "blue"), Rr(c, "K", "brown"), Rr(c, "2x", "orange"), Rr(c, "C", "red"), Sr(c), Rr(c, "J", "fuchsia")].forEach(function(f) {
        f.style.marginRight = "8px";
        f.style.marginLeft = 0 != e ? "15px" : "0";
        Dc(t(E(c), d[e++], F.w), f)
    });
    a = Rr(c, "AoF", "Teal");
    a.style.marginRight = "8px";
    a.style.marginLeft = "15px";
    Dc(t(E(c), "_tAOF", F.w), a);
    return b
}
g.Zm = function() {
    Kb();
    this.N.style.display = "flex";
    K("display_news", "1")
};

function Lt(a) {
    (a = R.s.get(a)) && a.va && (a = a.va, wr.ga(R.f, a.sb, R.Ub, a, ak))
}

function mu() {
    rm.call(this, "_tAnnounce", null, ["_tAnnounce", function() {
        var d;
        a: {
            for (d = 0; d < a.c.length; d++)
                if (a.c[d].checked) {
                    d = a.c[d].Jf;
                    break a
                } d = 0
        }
        S((new am(R.f, d, a.hb.value)).J());
        a.Sa()
    }, "_tCancel", function() {
        return a.Sa()
    }]);
    var a = this;
    new Gc(this.m, 400, 300);
    this.hb = Bb(this.m, "textarea", void 0, void 0, void 0);
    this.hb.className = "style_announce_textarea";
    this.hb.placeholder = "Enter message here";
    this.B = D(this.m, "style_tag_wrapper");
    var b = D(this.m, "style_flex_row");
    b.style.marginTop = "0.3em";
    var c = D(b,
        "style_button", "All");
    b = D(b, "style_button", "None");
    c.style.backgroundColor = "darkgreen";
    b.style.backgroundColor = "darkred";
    c.addEventListener("click", function() {
        return a.c.forEach(function(d) {
            return d.checked = !0
        })
    });
    b.addEventListener("click", function() {
        return a.c.forEach(function(d) {
            return d.checked = !1
        })
    });
    [c, b].forEach(function(d) {
        d.style.marginLeft = 0;
        d.style.minWidth = "5em"
    });
    this.c = [];
    tm(this)
}
k(mu, rm);

function vu(a) {
    var b = Y.kc;
    Ab(b.B);
    b.c = [];
    var c = [D(b.B, "style_flex_column"), D(b.B, "style_flex_column"), D(b.B, "style_flex_column")],
        d = [];
    a.forEach(function(u) {
        return d.push(u)
    });
    d.sort(function(u, w) {
        return Cc(u.Sj, w.Sj, !0)
    });
    a = Math.floor(d.length / 3);
    3 * a < d.length && a++;
    for (var e = 0, f = 0; 3 > f; f++)
        for (var h = c[f], n = 0; n < a && !(e >= d.length); n++) {
            var p = d[e++],
                q = Ec(h, p.Sj);
            q.Jf = p.Jg;
            b.c.push(q);
            q.parentElement.style.marginBottom = "0px"
        }
}
mu.prototype.ga = function() {
    0 == this.c.length && S((new El(R.f, Xh)).J());
    this.W();
    this.hb.focus()
};

function lu() {
    rm.call(this, "_tCashier", ["_tBalance"], ["_tClose", function() {
        return a.Sa()
    }, "_tRefresh", ut]);
    var a = this,
        b = this.m;
    this.b.style.alignItems = "center";
    b.Yn = E(this.s, "style_label");
    b.Pn = E(b, "", "2-factor authentication enabled");
    b.jl = t(D(this.b, "style_button"), "_tEnable2Factor", F.w);
    b.jl.addEventListener("click", function() {
        return X.fa.ga()
    })
}
k(lu, rm);
lu.prototype.ga = function() {
    ut();
    this.Oi();
    this.W()
};
lu.prototype.Oi = function() {
    this.m.Yn.textContent = y(R.Ub);
    this.m.Vn && (this.m.Vn.textContent = y(R.Gg, !1));
    this.m.Pn.style.display = R.Bb ? "flex" : "none";
    this.m.jl.style.display = R.Bb ? "none" : "flex"
};
var Gm = 0,
    Cm = 0,
    Dm = 0,
    Em = 0,
    $p = 0,
    wu = !1,
    xu = !1;

function Pp() {
    xu || (xu = !0, H(".player_chat{ color: blue;\t}"), H(".admin_chat { color: red; } "), H(".diagnostic_chat { color: green; } "), H(".style_checkbox_wrapper { display: flex; position: absolute; z-index: 15; color: white; white-space: nowrap; }"), H(".style_checkbox_column { display: flex; flex-direction: column; margin-left: 1em; margin-right: 1em; flex: 1 1 0; }"), H(".style_vertical_checkbox_group { display: flex; flex-direction: column; z-index: 500; outline: 0 none; position: absolute; color: white; transform: translate(0, -100%); }"), H(".s_horizontal_checkbox_group { display: flex; z-index: 500; outline: 0 none; position: absolute; color: white; }"),
        H(".style_wait_for_bb_checkbox { transform: translate(-50%, -50%); position: absolute; visibility: hidden; color: white; cursor: pointer; z-index: 16; }"), H(".style_hand_evaluation { transform: translate(-100%,-100%); position: absolute; color: white; white-space: nowrap;} "), H(".total_pot { \n\t\twhite-space: nowrap; \n\t\tposition: absolute; \n\t\tcolor: gold; \n\t\topacity: 0.9; \n\t\ttransform: translate(-50%, -50%);\n\t\tbackground: rgba(0, 0, 0, 0.5);\n\t\tborder-radius: 5px;\n\t\tpadding: 0px 5px;\n\t\tz-index: 20;\n\t} "),
        H(".kill_info { white-space: nowrap; position: absolute; color: white; opacity: 0.9; transform: translate(-50%, -50%); display: none; } "), H(".center_table_info {\n\t\tposition: absolute;\n\t\tz-index: 21;\n\t\talign-items: center;\n\t\ttransform: translate(-50%, -50%);\n\t\tcolor: whitesmoke;\n\t\tbackground: rgba(0, 0, 0, 0.6);\n\t\tpadding: 0.2em 0.5em;\n\t\tborder-radius: 0.3em;\n\t\tfont-weight: bold;\n\t\ttext-transform: uppercase;\n\t\tflex-direction: column;\n\t\tfont-size: 0.8em;\n\t} "),
        H(".gamestate_info { \n\t\tposition: absolute; \n\t\tz-index: 21; \n\t\ttransform: translate(-50%, -50%); \n\t\tcolor: whitesmoke; \n//\t\topacity: 0.9;\n\t\tbackground: rgba(0, 0, 0, 0.6);\n\t\tpadding: 0.2em 0.5em;\n\t    border-radius: 0.3em;\t\n\t} "), H(".style_player_notes_textarea {\n\t\twidth: 100%;\n\t\tbox-sizing: border-box;\n\t\tborder: none;\n\t\tpadding: 2px 5px;\n\t\tmargin-bottom: 2px;\n\t\tborder-radius: 5px;\n\t\tfont: 14px Roboto, Arial;\n\t\tflex: 1 1 auto;\n\t\tresize: none;\n\t}"),
        H(".dealer_chat_wrapper {\n\t\tposition: absolute;\n\t\tdisplay: block;\n\t\tbox-sizing: border-box;\n\t\tborder: none;\n\t\tresize: none;\n\t\tpadding: 2px 5px;\n\t\tmargin-bottom: 2px;\n\t\toutline: 0 none;\n\t\toverflow-y: scroll;\n\t\toverflow-x: hidden;\n\t\tbackground-color: whitesmoke;\n\t}"), H(".dealer_chat_table {\n\t\tz-index: 45;\n\t\tdisplay: table;\n\t\ttop: 0px;\n\t\tleft: 0px;\n\t\twidth: 100%;\n\t\tfont-family: Arial;\n\t\twhite-space: nowrap;\n\t\ttable-layout: fixed;\n\t\tcursor: pointer;\n\t}"))
};

function yu() {
    this.ng = new Map;
    this.b = new Set;
    this.c = 0
}

function Sn(a) {
    return 1E8 <= a ? "P" + a : (a = zu(R.fb, a)) ? a.Yc : "?"
}

function zu(a, b) {
    var c = a.ng.get(b);
    if (!c) {
        c = null;
        var d = rc("t" + b);
        d && (d = d.split(":"), 2 == d.length && (c = {
            f: b,
            Jc: parseInt(d[1], 10),
            Yc: d[0]
        }, m(c.Yc) && (c = null)));
        a.ng.set(b, c);
        c || Au(a, b)
    }
    return c
}

function Bu(a) {
    a.c = 0;
    if (0 != a.b.size) {
        var b = new Cl;
        a.b.forEach(function(c) {
            return b.R.push(c)
        });
        S(b.J());
        a.b.clear()
    }
}

function Au(a, b) {
    a.b.add(b);
    0 == a.c && (a.c = setTimeout(function() {
        return Bu(a)
    }, 1E3))
};

function Cu() {
    this.f = 0;
    this.gb = "";
    this.fb = new yu;
    this.wb = new Map;
    this.s = new Map;
    this.kc = 48;
    ym && ym.avatars && (this.kc = ym.avatars);
    this.K = [];
    for (var a = 0; a < this.kc; a++) {
        var b = new Image;
        b.src = Bq(a);
        this.K.push(b)
    }
}

function Bq(a) {
    return "./images/av/a" + a + ".png"
}

function kn(a) {
    var b = R;
    return 52 == a || 53 == a ? U.N.src : 255 == a ? U.b[b.b.Mb].src : void 0 == a || 52 <= a || 0 > a || 254 == a ? "" : z ? U.U[a].src : 1 == b.b.Ef ? U.s[a].src : 2 == b.b.Ef ? U.B[a].src : U.G[a].src
}

function Kn(a) {
    var b = R;
    a = 1E8 <= a ? 0 : (a = zu(b.fb, a)) ? a.Jc : 0;
    if (0 <= a) {
        if (a < b.K.length) return b.K[a];
        if (100 <= a) {
            var c = b.wb.get(a);
            c || (c = new Image, c.src = Bq(a), b.wb.set(a, c));
            return c
        }
        if (0 < b.K.length) return a %= b.K.length, b.K[a]
    }
    return null
};

function Du() {
    Cu.call(this);
    this.fa = new Map;
    this.Bb = !1;
    this.i = new Map;
    this.na = this.he = this.ma = "";
    this.Qc = this.c = this.gg = null;
    this.Gl = this.ee = this.Ub = this.Gg = 0;
    this.G = new Map;
    this.B = new Map;
    this.jc = this.Ca = !1;
    this.vb = 0;
    this.Na = new Set;
    this.Oa = new Set;
    this.ub = new Set;
    this.Da = new Set;
    this.Ta = new Set;
    this.sa = this.ua = !1;
    this.Va = new Set;
    this.P = new Set;
    this.Pb = new Set;
    this.Ma = new Set;
    this.sb = qc(0, 1E5);
    this.L = this.N = null;
    this.aa = new Map;
    this.U = [];
    this.ja = new Map;
    this.ab = new Map;
    this.b = {
        Mb: 0,
        Ef: 0,
        ae: 0,
        ze: !0,
        Sc: !1,
        Tc: !1
    };
    this.xb = "min 2 3 max min 0.5 pot max min 2 3 pot min 0.33 0.66 pot".split(" ");
    $r(this)
}
k(Du, Cu);
g = Du.prototype;
g.fk = function(a) {
    var b = R.ja.get(a);
    if (b && 0 < b.mb.length) {
        var c = b.mb[0],
            d = R.aa.get(c);
        if (void 0 != d) return {
            user_id: R.f,
            data: R.U[d],
            index: 0,
            table_id: a,
            hands: b.mb.length,
            game_id: c
        }
    }
    return null
};
g.gk = function(a) {
    var b = R.ja.get(a);
    if (b && 0 < b.mb.length) {
        var c = b.mb.length - 1,
            d = b.mb[c],
            e = R.aa.get(d);
        if (void 0 != e) return {
            user_id: R.f,
            data: R.U[e],
            index: c,
            table_id: a,
            hands: b.mb.length,
            game_id: d
        }
    }
    return null
};
g.ik = function(a, b, c) {
    if (0 < b && (a = this.ja.get(c))) {
        b--;
        var d = a.mb[b],
            e = this.aa.get(d);
        if (void 0 != e) return {
            user_id: R.f,
            data: this.U[e],
            index: b,
            table_id: c,
            hands: a.mb.length,
            game_id: d
        }
    }
    return null
};
g.hk = function(a, b, c) {
    if ((a = this.ja.get(c)) && b + 1 < a.mb.length) {
        b++;
        var d = a.mb[b],
            e = this.aa.get(d);
        if (void 0 != e) return {
            user_id: R.f,
            data: this.U[e],
            index: b,
            table_id: c,
            hands: a.mb.length,
            game_id: d
        }
    }
    return null
};
g.dm = function(a) {
    a = this.aa.get(a);
    return void 0 != a ? this.U[a] : null
};

function Eu(a, b, c) {
    a = parseInt(rc(a));
    return isNaN(a) || a > b || 0 > a ? c : a
}

function Fu(a, b) {
    return (a = rc(a)) ? a : b
}

function $r(a) {
    a.b.de = 1;
    a.b.Mb = Eu("cardback", 2, 0);
    a.b.Ef = Eu("deckstyle", 2, 0);
    a.b.ae = Eu("bet_increment", 1, 0);
    var b = "1 2 2 2 2 2 2 2 2 2 2 3 0.25 0.5 0.66 0.75".split(" ");
    a.b.bf = [];
    a.b.hg = [];
    for (var c = 0; 16 > c; c++) a.b.bf.push(Fu("betbutton" + c, a.xb[c])), a.b.hg.push(Fu("betbutton_custom" + c, b[c]));
    a.b.ze = 1 == Eu("display_hand_value", 1, 1);
    a.b.ff = 1 == Eu("auto_muck", 1, 1);
    a.b.de = Eu("sounds", 2, 1);
    a.b.qg = 1 == Eu("run_it_twice", 1, 1);
    a.b.ef = 1 == Eu("auto_enable_time_bank", 1, 1);
    a.b.hf = 1 == Eu("display_folded_cards", 1, 0);
    a.b.gf = 1 == Eu("block_animations", 1, 0);
    a.b.Sc = 1 == Eu("stack_as_bb_ring", 1, 0);
    a.b.Tc = 1 == Eu("stack_as_bb_tourney", 1, 0);
    a.b.lb = rc("language");
    (b = m(a.b.lb)) || (b = null == window.LangsMap.get(a.b.lb));
    b && (a.b.lb = "eng");
    wa(a.b.lb);
    K("language", a.b.lb)
}

function Jq() {
    var a = R;
    K("cardback", a.b.Mb.toString());
    K("deckstyle", a.b.Ef.toString());
    K("display_hand_value", (a.b.ze ? 1 : 0).toString());
    K("auto_muck", (a.b.ff ? 1 : 0).toString());
    K("stack_as_bb_ring", (a.b.Sc ? 1 : 0).toString());
    K("stack_as_bb_tourney", (a.b.Tc ? 1 : 0).toString());
    K("sounds", a.b.de);
    K("run_it_twice", (a.b.qg ? 1 : 0).toString());
    K("auto_enable_time_bank", (a.b.ef ? 1 : 0).toString());
    K("display_folded_cards", (a.b.hf ? 1 : 0).toString());
    K("block_animations", (a.b.gf ? 1 : 0).toString());
    K("language", a.b.lb)
};

function Gu() {
    pj.call(this);
    this.B = 1E3
}
k(Gu, pj);
Gu.prototype.Mi = function(a) {
    R.Ca != a && (R.Ca = a, z ? null == R.c ? Ar(Y) : po() : (er({
        command_type: Ea,
        online: a
    }), Ar(Y)), Hu = 0)
};

function Iu() {
    var a = parseInt(rc("device_id"));
    isNaN(a) && (a = qc(1E7, 99999999), K("device_id", a));
    return a
}
Gu.prototype.Di = function(a) {
    pj.prototype.Di.call(this, a);
    a = new $l(yb);
    a.c = z ? 1 : 0;
    this.b.send(a.J());
    pp.clear();
    z ? Ab(Y.ha) : (Ab(Y.ha.Ha), Ab(Y.i.Ha), Ab(Y.c.Ha), Ab(Y.zc.Ha), It.clear());
    z || R.i.clear();
    0 != R.f ? (a = new Rl, a.Yc = R.na, a.i = R.ma, a.sb = R.sb, a.G = 0, a.s = !0, a.K = R.gb, a.B = Iu(), this.b.send(a.J())) : null != Ju && (this.b.send(Ju.J()), Ju = null)
};
Gu.prototype.Ii = function(a, b, c) {
    var d = this,
        e = null;
    e = b ? dm(a) : em(a);
    if (null != e) {
        if (e.ca == ah && Dd == e.Wb && !Wj(e.h)) {
            var f = e.h.Fa,
                h = pp.get(f);
            h && (h.remove(), pp.delete(f));
            qp(Y, Y.ha);
            rp()
        }
        switch (e.ca) {
            case mh:
                R.jc = !0;
                window.location.reload();
                break;
            case hg:
                nr(e, a);
                break;
            case Th:
                ir(e, a);
                break;
            case Eh:
                Ku(e);
                break;
            case Vh:
                z || Wq(e.h, a.Pa);
                break;
            case Nf:
                Y.Wf(e);
                Wq(e.h, a.Pa);
                break;
            case Qg:
                fr(e);
                break;
            case Yh:
                z || vu(e.R);
                break;
            case $h:
                cr(e, a);
                break;
            case rg:
                ar(a, e);
                break;
            case tg:
                $q(a, e);
                break;
            case zh:
                Yq(e);
                er(a.Pa);
                hr(a.Pa);
                break;
            case Hh:
                R.Bb = !0;
                break;
            case wg:
                switch (e.Kg) {
                    case qf:
                        R.ma = e.ge;
                        alert("Password has been changed");
                        break;
                    case rf:
                        alert("Password has not been changed");
                        break;
                    case xf:
                        alert("The User ID (nickname) and/or password you entered are incorrect. Please try again.");
                        break;
                    case Df:
                        alert("You cannot log in from this location. Please contact your agent.");
                        break;
                    case Bf:
                        alert("The specified player does not belong to this skin.");
                        break;
                    case yf:
                        alert("Your account has been suspended. Please contact your agent.");
                        break;
                    case zf:
                        alert("Your account is inactive. Please contact your agent.");
                        break;
                    case vf:
                        alert("2-factor authentication is now active.");
                        break;
                    case wf:
                        alert("An error occured. 2-factor authentication has not been enabled.");
                        break;
                    case Af:
                        alert("Invalid auth code")
                }
                break;
            case Tg:
                R.Qc = e.Qc;
                R.vb = e.Qc.Uk - (new Date).getTime() / 1E3;
                Y.Na = "1." + e.Qc.bo;
                Ar(Y);
                Y.Fk();
                break;
            case Mf:
                zr(e, a);
                break;
            case Sg:
                ur(e, a);
                break;
            case Ch:
                R.ee = e.ee;
                vr();
                break;
            case Kh:
                Uq(e);
                break;
            case sh:
                Xq(e, a);
                break;
            case Zg:
                tr(e);
                break;
            case Wh:
                sr(e);
                break;
            case Ah:
                a = sl(e.Cc.h);
                a || (a = new km(e.Cc.h), R.i.set(Vj(e.Cc.h), a));
                a.o = e.Cc;
                Y.ki(a);
                z && Zj(e.Cc.h, R.c) && this.b.send((new W(R.c, Kf)).J());
                break;
            case Nh:
                e.R.forEach(function(n) {
                    var p = sl(n.h);
                    p || (p = new km(n.h), R.i.set(Vj(n.h), p));
                    p.o = n;
                    Y.ki(p);
                    z && Zj(n.h, R.c) && d.b.send((new W(R.c, Kf)).J())
                });
                break;
            case og:
                b = e.Cc.Jg;
                if (c = qm(b)) c.ia = e.Cc;
                Y.Ek(b);
                z || ((e = R.B.get(b)) && e.postMessage(a.Pa, "*"), Dr(b));
                break;
            case xg:
                switch (e.Kg) {
                    case nf:
                        R.fa.delete(e.H);
                        break;
                    case mf:
                    case of:
                        R.fa.set(e.H, -1)
                }
                switch (e.Kg) {
                    case mf:
                    case pf:
                    case of:
                    case Hf:
                        b =
                            null, z || (-1 != e.h.H && -1 != e.h.Fa ? b = pm(e.h) : -1 != e.h.H && (b = R.B.get(e.h.H))), b ? b.postMessage(a.Pa, "*") : alert(di(e.Kg))
                }
                z || Vq(Y, e.H);
                break;
            case fh:
                R.s.delete(e.H);
                if (a = It.get(e.H)) a.remove(), It.delete(e.H);
                Zs(Y, Y.i);
                break;
            case Ph:
                e.R.forEach(function(n) {
                    var p = n.$k.sb,
                        q = qm(p);
                    q || (q = new mm(p), R.s.set(p, q));
                    q.va = n.$k;
                    q.ia = n.An;
                    q.va.Lc == df ? Y.ii(q) : Y.ji(q)
                });
                break;
            case jg:
                b = e.Cc.sb;
                c = qm(b);
                c || (c = new mm(b), R.s.set(b, c));
                c.va = e.Cc;
                c.va.Lc == df ? Y.ii(c) : Y.ji(c);
                z || (e = R.B.get(b)) && e.postMessage(a.Pa, "*");
                break;
            case sg:
                z ?
                    Nt(e) : z || (e = R.B.get(e.H)) && e.postMessage(a.Pa, "*");
                break;
            case qg:
                z ? Nt(e) : (e = R.B.get(e.H)) && e.postMessage(a.Pa, "*");
                break;
            case ug:
                e.R.forEach(function(n) {
                    Y.Gk(n.Fa, n)
                });
                break;
            case ag:
                Er(e);
                break;
            case pg:
            case Ih:
                z ? Nt(e) : (e = R.B.get(e.H)) && (b ? e.postMessage(c.data, "*") : e.postMessage(a.Pa, "*"));
                break;
            case eh:
            case Ug:
            case Fh:
            case Tf:
            case Xf:
            case Wf:
            case nh:
            case hh:
            case Xg:
            case $g:
            case bg:
            case oh:
            case ah:
            case ch:
            case Yf:
            case bh:
            case cg:
            case dg:
            case Vf:
            case $f:
            case Wg:
            case Zf:
            case Gh:
            case xh:
            case qh:
            case th:
            case Og:
            case Lh:
            case Qh:
            case Rh:
            case gh:
            case wh:
            case dh:
            case Uh:
                Fr(e,
                    a.Pa);
                z ? jp(e) : Wq(e.h, a.Pa);
                break;
            case vg:
                (b = pm(e.h)) ? b.postMessage(a.Pa, "*"): jp(e)
        }
    }
};

function iu() {
    Kb();
    br.b.close()
}
var F = new ua,
    pp = new Map,
    It = new Map;

function vq() {
    Kb();
    X.Va.ga()
}
var sp = -1;

function hs() {
    var a = X.B.m;
    Qb.bind(this)();
    if (z)
        if (Zj(a.h, R.c)) {
            var b = om();
            b.C.pi.bind(b.C)(a.Ad)
        } else sp = a.Ad, Y.Ob(a.h);
    else b = {
        command_type: Oa
    }, Y.Ob(a.h, a.Ad), er(b)
}

function rr() {
    Qb.bind(this)();
    var a = X.B.m;
    S((new Kl(R.f, a.h, a.Ad, !1)).J());
    z || er({
        command_type: Oa
    })
}

function gu() {
    Kb()
}
var Lu = !1;

function ju() {
    Kb();
    if ("file:" == window.location.protocol) {
        var a = window.location.href;
        a = a.slice(0, a.lastIndexOf("/"));
        a += "/agent_dev.html"
    } else a = window.location.origin + "/agent.html";
    Lu = !0;
    window.open(a)
}

function fu() {
    Kb();
    if (!R.L || R.L.closed) {
        if ("file:" == window.location.protocol) {
            var a = window.location.href;
            a = a.slice(0, a.lastIndexOf("/"));
            a += "/handhistory_dev.html"
        } else a = window.location.origin + "/handhistory.html";
        R.L = window.open(a, "_blank", "menubar=no, toolbar=no, personalbar=no, resizable=yes, height=550, width=800")
    }
    R.L.focus()
}

function Mu() {
    rm.call(this, "_tSeatedAtTables", null, ["_tClose", Qb]);
    var a = D(this.b, "style_open_table_wrapper");
    a.style.maxWidth = "500px";
    this.m.Ha = D(a, "style_open_table_list")
}
k(Mu, rm);
Mu.prototype.yc = function(a) {
    var b = this;
    Ab(this.m.Ha);
    a.forEach(function(c) {
        -1 != c.h.Fa && Nu(b, c)
    })
};

function Nu(a, b) {
    var c = D(a.m.Ha, "style_notify_row");
    c.style.color = "black";
    c.A = b;
    var d = D(c, "style_notify_cell", b.ka);
    Wj(b.h) && (d.textContent = "T" + b.h.H + " " + b.ka);
    var e = yk(b.X) + " ";
    e = Wj(b.h) ? e + ("(" + y(b.Za, void 0) + " + " + y(b.Ya, void 0) + ")") : e + nk(b.X, b.O, !1, !1);
    d.style.color = "black";
    d = D(c, "style_notify_cell", e);
    d.style.margin = "0px 5px";
    d = D(c, "style_notify_cell");
    d = D(d, "style_flex_row");
    d.style.justifyContent = "flex-end";
    d = D(d, "style_open_table_button light_gradient", "Open");
    d.addEventListener("click", function() {
        Y.Ob(b.h);
        0 == gr(a) && a.Sa()
    });
    c.Jl = d
}

function gr(a) {
    var b = 0;
    for (a = a.m.Ha.firstChild; a; a = a.nextSibling) {
        var c = pm(a.A.h);
        !c || c.closed ? (a.Jl.style.backgroundColor = "maroon", b++) : a.Jl.style.backgroundColor = ""
    }
    return b
}

function Ou() {
    this.sc = -1;
    this.B = new gs;
    this.na = new fs;
    this.U = new oo;
    this.Va = new Pu;
    this.gb = new Qu;
    this.i = new ns;
    this.fa = new Ru;
    z || (this.Ma = new Ur, this.Oa = new as, this.fb = new Yr);
    this.s = new Mu;
    wr = new os
}

function Su(a) {
    a = a.currentTarget;
    this.ed.forEach(function(b) {
        b.style.background = "";
        b.Qk.style.display = "none"
    });
    a.style.backgroundColor = "rgb(28, 90, 77)";
    a.Qk.style.display = "flex"
}

function Tu() {
    this.style.display = "none";
    yr()
}

function Uu() {
    if (!window.LoadLandingData) return null;
    var a = window.LoadLandingData(),
        b = D(document.body, "style_skin_landing_page noselect");
    b.style.display = "none";
    var c = D(b, "style_info_bar noselect");
    c.style.padding = "0px 10px";
    var d = C(c, null, "./site/logo.png");
    d.alt = "";
    d.style.height = "90px";
    c = D(c, "style_flex_row");
    c.style.alignItems = "center";
    c = [E(c, "style_landing_button", "LOGOUT"), E(c, "style_landing_button", "PLAY")];
    c.forEach(function(q) {
        q.style.fontSize = "20px";
        q.style.height = "30px"
    });
    c[0].style.backgroundColor =
        "grey";
    c[1].style.backgroundColor = "green";
    c[1].addEventListener("click", Tu.bind(b));
    c[0].addEventListener("click", hu);
    c = D(b, "style_landing_tab_row");
    c = D(c, "style_flex_row");
    d = D(b, "style_landing_tab_wrapper");
    d.style.paddingLeft = "0.5em";
    b.oc = [];
    b.ed = [];
    for (var e = 0; e < a.length; e++) {
        var f = a[e],
            h = D(d, "style_info_page");
        b.oc.push(h);
        var n = E(c, "style_landing_tab_button light_gradient", f.title);
        b.ed.push(n);
        n.Qk = h;
        f = f.data;
        for (n = 0; n < f.length; n += 2) {
            var p = D(h, "style_landing_info_title");
            p.textContent = f[n];
            p = D(h, "style_landing_info_content");
            p.textContent = f[n + 1]
        }
    }
    b.ed[0].style.borderTopLeftRadius = "5px";
    b.ed[0].style.borderBottomLeftRadius = "5px";
    b.ed[b.ed.length - 1].style.borderTopRightRadius = "5px";
    b.ed[b.ed.length - 1].style.borderBottomRightRadius = "5px";
    b.oc.forEach(function(q) {
        return q.style.display = "none"
    });
    b.oc[0].style.display = "block";
    b.ed.forEach(function(q) {
        q.style.background = "";
        q.addEventListener("click", Su.bind(b))
    });
    b.ed[0].style.backgroundColor = "rgb(28, 90, 77)";
    return b
}

function Ru() {
    rm.call(this, "_tEnable2Factor", null, ["_tEnable", function() {
        S((new bm(R.f, a.c, a.m.sl.value)).J());
        a.Sa()
    }, "_tCancel", function() {
        return a.Sa()
    }]);
    var a = this;
    this.b.style.alignItems = "center";
    var b = this.m;
    E(this.b, "", "Scan the QR code below into your autheticator application");
    H(".style_gauth_qrcode { width: 250px; height: 250px; margin-top: 1em; }");
    b.Zn = C(this.b, "style_gauth_qrcode");
    D(this.b, "style_10px_spacer");
    var c = D(this.b, "style_flex_row");
    E(c, "", "Secret Code:");
    b.uj = E(c);
    b.uj.style.marginLeft =
        "1em";
    b.uj.style.userSelect = "all";
    D(this.b, "style_10px_spacer");
    b.sl = Tb(this.b, "text", "style_input mobile_input");
    b.sl.placeholder = "Enter Code"
}
k(Ru, rm);
Ru.prototype.ga = function() {
    var a = X.fa.m;
    this.c = "";
    for (var b = 0; 16 > b; b++) this.c += "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charAt(Math.floor(32 * Math.random()));
    a.Zn.src = "https://chart.googleapis.com/chart?cht=qr&chl=otpauth://totp/" + (R.he + "@pokerclub?secret=" + this.c) + "&choe=UTF-8&chs=400x400";
    a.uj.textContent = this.c;
    this.W()
};

function yt() {
    hq.call(this);
    var a = this;
    jq(this);
    var b = D(this.m, "m_dialog_outer");
    D(b, "style_10px_spacer");
    D(b, "style_info_title", "Rotation Games:");
    this.wa = D(b, "style_game_list");
    this.m.addEventListener("click", function() {
        return a.b()
    })
}
k(yt, hq);
yt.prototype.ga = function(a, b) {
    Ab(this.wa);
    Tr(this.wa, a, b);
    Zp(this)
};

function zt(a) {
    hq.call(this);
    var b = this;
    jq(this);
    var c = this.m;
    c.addEventListener("click", function() {
        return b.b()
    });
    var d = D(c, "m_dialog_outer"),
        e = D(d, "style_tab_bar");
    c.dc = [];
    if (1 == a.length) c.dc.push(E(e, "style_single_tab_button", a[0]));
    else {
        for (var f = 0; f < a.length; f++) c.dc.push(E(e, "style_tab_button", a[f]));
        z || (c.dc[0].classList.add("style_left_tab_button"), c.dc[a.length - 1].classList.add("style_right_tab_button"))
    }
    D(d, "style_10px_spacer");
    d = D(d, "style_tab_wrapper");
    d.style.paddingLeft = "0.5em";
    c.oc = [];
    for (e = 0; e < a.length; e++) c.oc.push(D(d, "style_info_page"));
    for (d = 0; d < a.length; d++) c.dc[d].style.padding = "5px 0px", 1 < a.length && (c.dc[d].tc = d, c.dc[d].addEventListener("click", function(h) {
        Wr.bind(c)(h);
        h.stopImmediatePropagation()
    }))
}
k(zt, hq);

function Qu() {
    rm.call(this, "_tCardsCheck", null, ["_tClose", Qb]);
    this.b.style.alignItems = "center";
    H(".style_card_check_info { margin-top: 0.5em; color: white; font: 14px Roboto, Arial; white-space: normal; }");
    var a;
    if (z) {
        H(".style_card_check { height: 30px; }");
        for (a = 0; 4 > a; a++)
            for (var b = D(this.b, "style_flex_row"), c = 0; 13 > c; c++) C(b, "style_card_check", "./images/decks/mobile/" + (a + 4 * c) + ".png");
        a = 273
    } else H(".style_card_check { height: 40px; }"), Vu(this, "std"), Vu(this, "simple"), Vu(this, "std_4c"), a = 728;
    C(this.b,
        "style_card_check", "./images/decks/joker.png");
    b = D(this.b, "style_card_check_info", "When all cards are visible you are ready to play!");
    b.style.width = a + "px";
    b = D(this.b, "style_card_check_info", "If the cards do not load promptly please restart the client.");
    b.style.width = a + "px"
}
k(Qu, rm);

function Vu(a, b) {
    for (var c = 0, d = 0; 2 > d; d++) {
        for (var e = D(a.b, "style_flex_row"), f = 0; 13 > f; f++) C(e, "style_card_check", "./images/decks/" + b + "/" + (c + 4 * f) + ".png");
        c++;
        for (f = 0; 13 > f; f++) C(e, "style_card_check", "./images/decks/" + b + "/" + (c + 4 * f) + ".png");
        c++
    }
    D(a.b).style.height = "5px"
}

function Pu() {
    rm.call(this, "_tChangePassword", ["_tCurrentPassword", "_tNewPassword", "_tRepeatPassword"], ["_tChange", function() {
        var b = a.c.value.trim(),
            c = a.B.value.trim(),
            d = a.P.value.trim();
        m(c) ? alert("New password cannot be empty") : c != d ? alert("Confirm password must match") : (b = Sj(b), c = Sj(c), S((new cm(R.f, b, c)).J()), a.Sa())
    }, "_tCancel", function() {
        return a.Sa()
    }]);
    var a = this;
    this.c = Sb(this.s, "style_input");
    this.B = Sb(this.s, "style_input");
    this.P = Sb(this.s, "style_input")
}
k(Pu, rm);
Pu.prototype.ga = function() {
    this.c.value = "";
    this.B.value = "";
    this.P.value = "";
    this.W()
};

function vr() {
    Y.b.Jh.textContent = R.he;
    Y.b.Ec.textContent = y(R.Ub);
    Y.b.Bg.textContent = y(R.ee)
}

function hu() {
    Kb();
    window.location.reload()
}

function ut() {
    S((new El(R.f, Rg)).J())
}

function Wu() {
    var a = {
        command_type: Fa
    };
    er(a);
    hr(a);
    R.B.clear();
    R.G.clear();
    R.L && !R.L.closed && R.L.postMessage(a, "*");
    R.N && !R.N.closed && R.N.postMessage(a, "*");
    R.Ba && !R.Ba.closed && R.Ba.postMessage(a, "*")
}

function tu() {
    var a = X.G,
        b = Y.b.Wd,
        c = b.getBoundingClientRect();
    b.getBoundingClientRect();
    b = window.innerHeight - (c.bottom + 40);
    Db(a, c.right - a.getBoundingClientRect().width, c.bottom);
    a.Ri.style.maxHeight = b + "px";
    z && (a.Ri.style.overflowY = "scroll")
}

function du() {
    Ob(X.G, null, Qb);
    tu()
}

function Xu() {
    R.i.forEach(function(a) {
        if (a.C && a.C.g) {
            var b = a.C.g;
            b && (null != Q(b) && S((new T(R.f, b.o.h, Pf)).J()), S((new W(a.h, Qf)).J()))
        }
    });
    z || Wu()
}

function Yu() {
    X.b && "none" != X.b.style.display && Pb(X.b);
    rp();
    po()
}
var Ju = null;

function ec() {
    nm(U.K);
    nm(U.P);
    nm(U.c);
    nm(U.ja);
    nm(U.Ba);
    nm(U.fa);
    nm(U.ua);
    nm(U.ea);
    nm(U.aa);
    nm(U.ma);
    nm(U.i);
    var a = X.b.Ge.value,
        b = X.b.$d.value,
        c = new Rl;
    c.G = X.b.rj.value;
    c.K = R.gb;
    c.Yc = a;
    c.c = z ? 1 : 0;
    c.B = Iu();
    if ("########" == b) {
        var d = rc("client_password_hash");
        null == d && (d = Sj(b))
    } else d = Sj(b);
    c.i = d;
    var e = X.b.Ih.checked;
    e ? (K("client_user_id", a), K("client_password_hash", d)) : (sc("client_user_id"), sc("client_password_hash"), "########" == b && (X.b.$d.value = ""));
    K("client_save_credentials", e.toString());
    R.na = a;
    R.ma =
        c.i;
    c.s = !1;
    1 == br.b.readyState ? (Ju = null, S(c.J())) : Ju = c
}

function po() {
    if (null != R.c && null != R.c) {
        var a = om();
        a && a.C && (a = a.C, a.rb || a.Jd() && el(a))
    }
}

function rp() {
    if (z) {
        if (null != R.c) {
            var a = om();
            a && a.C && a.C.Yb()
        }
        Y.Yb();
        Y.B.g && (Y.B.Yb.bind(Y.B)(), Y.B.$a.bind(Y.B)())
    } else null != Y && Y.Yb(), null == R.c || om().C.Yb()
}

function or(a) {
    pr(a);
    z && -1 != a.R[0].f && a.R.forEach(function(b) {
        if (null == rc(b.f + "_bc")) {
            var c = sl(b.h);
            if (c && (c = c.C)) {
                op(c.nd, b.f, b.Yg);
                var d = Jk(c.g, b.f);
                if (d) {
                    var e = c.bj[d.j];
                    e.textContent = b.Yg;
                    e.style.display = "block";
                    setTimeout(function() {
                        return e.style.display = "none"
                    }, 3E3)
                }
            }
        }
    })
}

function S(a) {
    1 == br.b.readyState && br.b.send(a)
}

function Zu() {
    var a = D(Y.b, "avatar_dialog noselect");
    a.Ri = ic(a);
    for (var b = D(a.Ri, "style_table"), c = null, d = 0; d < R.K.length; d++) {
        0 == d % 5 && (c = D(b, "row"));
        var e = C(c, "picker", R.K[d].src);
        e.addEventListener("click", $u.bind(a));
        e.Jc = d
    }
    return a
}
var br = null,
    av = "",
    bv = null;

function cv(a) {
    null != a.currentTarget.opener && (bv = a.currentTarget.opener, bv.postMessage({
        command_type: La
    }, "*"))
}
var ym = null,
    dv = null,
    Br = !0,
    ev = 0,
    fv = !1,
    gv = 0,
    hv = 0;

function iv() {
    R.Ca && (0 != hv && (jv = 999999, su()), 5 < Hu ? (Hu = 0, br.b.close()) : (gv = (new Date).getTime(), hv = qc(1, 1E4), S((new Bl(Dh, hv)).J()), Hu++));
    setTimeout(iv, 5E3)
}
var jv = 0,
    Hu = 0;

function Ku(a) {
    var b = (new Date).getTime();
    a.ph == hv && (jv = b - gv, hv = 0, su());
    Hu = 0
}

function su() {
    var a = z ? Y.oe : Y.qe,
        b = "> 5s";
    999999 != jv && (b = Math.floor(jv / 1E3) + "." + ("00" + jv % 1E3).slice(-3) + "s");
    z || (b += " " + l("_tNetworkLatency"));
    a.textContent = b
}
window.InitMain = function() {
    if (window.UAParser) {
        var a = (new window.UAParser("" + (navigator.userAgent || navigator.vendor || window.opera))).getResult(),
            b = a.device.type,
            c = a.browser.name;
        if (m(b)) {
            b = !1;
            var d = navigator.userAgent || navigator.vendor || window.opera;
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(d) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(d.substr(0,
                    4))) b = !0;
            z = b
        } else z = "mobile" == b || "tablet" == b;
        xb = "Firefox" == c;
        d = [a.device.type ? a.device.type : "", a.device.vendor ? a.device.vendor : "", a.device.model ? a.device.model : "", a.os.name ? a.os.name : "", a.os.version ? a.os.version : "", a.browser.name ? a.browser.name : "", a.browser.major ? a.browser.major : ""];
        yb = d.join("|");
        if (d && 7 == d.length) {
            b = c = a = 0;
            var e = d[0];
            "mobile" == e ? (b = 3, "Apple" == d[1] ? c = 4 : "Android" == d[3] && (c = 5)) : "tablet" == e ? (b = 2, "Apple" == d[1] ? c = 4 : "Android" == d[3] && (c = 5)) : "Windows" == d[3] ? b = c = 1 : "Mac OS" == d[3] ? (c = 3, b = 1) :
                "Linux" == d[3] && (c = 2, b = 1);
            d = d[5];
            m(d) || ("Chrome" == d ? a = 1 : "Firefox" == d ? a = 2 : "Opera" == d ? a = 3 : "Safari" == d ? a = 4 : "Vivaldi" == d ? a = 5 : "Mobile Safari" == d ? a = 6 : "Edge" == d ? a = 7 : "Silk" == d ? a = 8 : "WebKit" == d ? a = 9 : "Samsung Browser" == d ? a = 10 : "IE" == d && (a = 11));
            zb = b + (c << 4) + (a << 8)
        } else zb = 0
    }
    K("cards_check", 0);
    window.addEventListener("DOMContentLoaded", cv, !1);
    a = document.createElement("style");
    a.appendChild(document.createTextNode(""));
    document.head.appendChild(a);
    gc = a.sheet;
    hc = gc.cssRules || gc.rules;
    H(" .style_flex_row { display: flex; }");
    H(" .style_flex_column { display: flex; flex-direction: column; }");
    H(" .style_table_cell { display: table-cell; }");
    H(".style_row { display: table-row; width: 100% }");
    H(".style_row { display: table-row; width: 100% }");
    H(".style_status_bar { \n\t\tbackground-color: #353B40; \n\t\tdisplay: flex; \n\t\tflex: 0 0 auto; \n\t\tfont: 12px Roboto, Arial; \n\t\tcolor: whitesmoke; \n\t\theight: 30px; \n\t\talign-items: center; \n\t\tmargin-top: 5px;\n\t}");
    H(".style_status_bar_pane { line-height: 30px; white-space: nowrap; } ");
    H(".style_online_indicator { border: 6px solid crimson; margin-top: 9px; margin-bottom: 9px; border-radius: 50%; } ");
    H(".style_menu_bars { \n\t\tcursor: pointer;\n\t\tpadding: 2px;\n\t\theight: 22px;\n\t}");
    H(".style_side_menu { font: 14px Roboto, Arial; color: black; white-space: nowrap; s.overflow-y: auto; overflow-x: hidden; background-color: whitesmoke; } ");
    H(".style_sub_menu { font: 14px Roboto, Arial; padding: 10px 5px 10px 25px; border: none; background-color: whitesmoke; margin: 1px 0px; width: 150px; border-bottom: solid 1px lightgrey; } ");
    H(".style_sub_menu:hover { background-color: white; } ");
    H(".style_menu { font: bold 14px Roboto, Arial; padding: 10px 5px 10px 15px; border-bottom: solid 1px lightgrey; } ");
    H(".popup_menu_mobile { position: absolute; flex-direction: column; display: none; background-color: white; color: black; font: 16px Roboto, Arial; z-index: 10000; border: none; box-shadow: 1px 1px 2px black; white-space: nowrap; }");
    H(".popup_menu_mobile div { padding: 7px 15px; }");
    H(".style_screen_list { \n\t\twidth: 100%; \n\t\tfont: 14px Roboto, Arial; \n\t\twhite-space: nowrap; \n\t\ttable-layout: fixed; \n\t\tline-height: 25px; \n\t\tcursor: pointer; \n\t\tcolor: black; \n\t\toverflow-y: auto; \n\t\toverflow-x: hidden; \n\t\tdisplay: table; \n\t} ");
    H(".style_cell { padding: 0px 5px; text-overflow: ellipsis; overflow: hidden; display: table-cell; vertical-align: middle; } ");
    H(".style_screen { flex-direction: column; height: 100%; display: none; } ");
    H(".style_screen_header { height: 25px; width: 100%; font: 14px Roboto, Arial; white-space: nowrap; display: table; table-layout: fixed; border-bottom: 1px solid lightgrey; color: black; } ");
    H(".style_screen_header_row { display: table-row; line-height: 25px; } ");
    H(".style_banner { white-space: nowrap; display: flex; height: 30px; flex: 0 0 auto; align-items: center; margin-bottom: 10px; } ");
    H(".style_banner_title { margin: 0 10px 0 5px; font: bold 18px Roboto, Arial; align-self: center; } ");
    H(".style_button_bar { display: flex; align-items: center; justify-content: space-around; flex: 0 0 auto; } ");
    H(".style_login_button { color: black; background-color: lightgrey; border-radius: 7px; font: 14px Roboto, Arial; align-self: center; display: flex; justify-content: center; padding: 5px 0px; width: 7em; } ");
    H(".style_login_button:hover { background-color: white; } ");
    H(".style_landing_page { position: fixed; display: flex; flex-direction: column; } ");
    H(".style_landing_logo { margin-bottom: 20px; width: 300px; } ");
    H(".style_landing_control { border: none; color: black; height: 25px; line-height: 25px; outline: 0 none; padding: 0px 5px 0px 5px; border-radius: 2px; background-color: #DFDFDF; font: 14px Roboto, Arial; margin-bottom: 8px; } ");
    H(".style_landing_controls { font: 14px Arial; color: white; justify-content: space-around; margin-bottom: 20px; display: flex; }");
    H(".style_cb_outer { font: 14px Roboto, Arial; cursor: pointer; display: flex; margin-right: 0.5em; align-items: center; }");
    H(".style_cb_box { pointer-events: none; margin-right: 1em; border-radius: 2px; border: 1px solid dimgrey; box-sizing: border-box; }");
    H(".style_cb_button { pointer-events: none; border-radius: 6px; width: 10px; height: 10px; border: none; padding: 4px; background-clip: content-box; background-color: lime; background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));  }");
    H(".style_cb_text { pointer-events: none; color:white; }");
    H(".style_cb_text_2 { pointer-events: none; color:dimgrey; }");
    H(".style_cb_outer_2 { font: 16px Roboto, Arial; cursor: pointer; display: flex; align-items: center; }");
    H(".style_label { height: 25px; padding-right: 10px; text-align: right; margin-bottom: 8px; white-space: nowrap; font: 14px Roboto, Arial; line-height: 25px; }");
    H(".style_text_value { height: 25px; text-align: left; margin-bottom: 8px; white-space: nowrap; font: 14px Roboto, Arial; line-height: 25px; }");
    H(".row { display: table-row; \twhite-space: nowrap; }");
    H(".cell { display: table-cell; }");
    H(".noselect \n\t{\n\t\t-webkit-touch-callout: none; /* iOS Safari */\n\t\t-webkit-user-select: none; /* Safari */\n\t\t-khtml-user-select: none; /* Konqueror HTML */\n\t\t-moz-user-select: none; /* Firefox */\n\t\t-ms-user-select: none; /* Internet Explorer/Edge */\n\t\tuser-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */\n\t}");
    H("html, body \n\t{\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tmargin: 0px;\n\t\tborder: 0;\n\t\tbackground-color: black;\n\t\toverflow: hidden; /*  Disable scrollbars */\n\t\tdisplay: block; /* No floating content on sides */\n\t\tposition: fixed;\n\t\toverflow: hidden;\n\t\t-webkit-tap-highlight-color: transparent; /* Disable the annoying flicker on iOS when pressing a div */\n\t\toverscroll-behavior-y: contain; /* iOS 12 allows you to refresh a page by pulling down */\n//\t\ttouch-action: pan-x pan-y;\n//\t\ttouch-action: none; doesn't work, an attempt to stop double click zooming on iOS\n\t}");
    H("input[type=checkbox]{\n\t\tcursor: pointer;\n\t}");
    xb ? H("input:-moz-read-only { background-color: lightgrey; }") : H("input:read-only { background-color: lightgrey; }");
    H(" .style_legend_icon { padding: 0px 2px; border-radius: 3px; color: white; margin-left: 5px; }");
    a = 1;
    c = 5080;
    ym = window.SiteSpecificInit();
    null != ym && (void 0 != ym.multiplier && (sb = Number(ym.multiplier)), void 0 != ym.chip_scaling && (tb = parseInt(ym.chip_scaling)), void 0 != ym.nologin && (fv = ym.nologin), void 0 != ym.title && (document.title = ym.title));
    dv = window.ConnectionInit();
    null != dv && (void 0 != dv.connection && (av = dv.connection), void 0 != dv.ports && (a = dv.ports), void 0 != dv.base_port && (c = dv.base_port));
    Jb = Bb(document.body, "div", "menu_mask");
    Jb.addEventListener("click", Kb);
    window.addEventListener("resize", Yu);
    window.addEventListener("message", kv, !1);
    window.addEventListener("beforeunload", lv, !1);
    window.addEventListener("unload", mv, !1);
    U = new gm;
    R = new Du;
    xa.yc(window.strings);
    X = new Ou;
    H(".style_modal_dialog_client {\n\t\t\tdisplay: none;\n\t\t\tbackground-color: rgb(32,32,32);\n\t\t\tbox-shadow: 5px 5px 20px black;\n\t\t\tcolor: white;\n\t\t\tfont: 14px Roboto, Arial;\n\t\t\tpadding: 10px;\n\t\t\tz-index: 2147483647;\n\t\t\tposition: absolute;\n\t\t\tborder: 1px solid dimgray;\n\t\t\tborder-radius: 10px;\n\t\t\twhite-space: nowrap;\n\t\t\tflex-direction: column;\n\t\t\tbox-sizing: border-box;\n\t\t} ");
    window.name = "pkr_l_" + R.sb;
    wu || (wu = !0, H(".div_controls {\n\t\toutline: 0 none;\n\t\tposition: absolute; \n\t    z-index: 700; \n\t\ttop: 0px; \n\t\tleft: 0px;\n\t}"), H(".style_tag_wrapper {\n\t\t\theight: 100px;\n\t\t\toverflow-y: scroll;\n\t\t\tdisplay: flex;\n\t\t\tbackground: white;\n\t\t\tborder-radius: 5px;\n\t\tcolor: black;\n\t\tfont: 14px / 25px Roboto, Arial;\n\t}"), H(".style_tag_cb {\n\t\t//\t\tfont: 14px / 25px Roboto, Arial;\n\t\theight: 25px;\n\t\tpadding: 0px 5px;\n\t\tborder-radius: 5px;\n\t\tborder: none;\n\t\twhite-space: nowrap;\n\t\t//\t\tmargin-bottom: 8px;\n\t}"),
        H(".style_announce_textarea {\n\t\twidth: 100%;\n\t\tbox-sizing: border-box;\n\t\tborder: none;\n\t\tpadding: 2px 5px;\n\t\tmargin-bottom: 0.5em;\n\t\tborder-radius: 5px;\n\t\tfont: 14px Roboto, Arial;\n\t\tflex: 1 1 auto;\n\t\tresize: none;\n\t}"), H(".status_text {\n\t\tborder-radius: 5px;\n\t\tcolor: white;\n\t\talign-self: center;\n\t\tbackground: rgba(0, 0, 0, 0.8);\n\t\tpadding: 5px 10px;\n\t\tz-index: 60;\n\t\tposition: absolute;\n\t\ttransform: translate(-50%, -50%); /* this may cause fuzziness, check if we can remove, replace with pixel pos */\n\t\twhite-space: nowrap;\n\t}"),
        H(".avatar_dialog {\n\t\tdisplay: none;\n\t\tbackground-color: rgba(0,0,0,0.85);\n\t\tbox-shadow: 5px 5px 20px black;\n\t\tcolor: white;\n\t\tfont-family: Arial;\n\t\tpadding: 5px;\n\t\tz-index: 2147483647;\n\t\tposition: fixed;\n\t\tborder: 1px solid dimgray;\n\t\tborder-radius: 5px;\n\t}"), H(".avatar_dialog .row {\n\t\tdisplay: table-row;\n\t\twhite-space: nowrap;\n\t\tline-height: 0px;\n\t}"), H(".chip_column {\n\t\tdisplay: flex;\n\t\tflex-direction: column-reverse;\n\t}"), H(".card {\n\t\tposition: absolute;\n\t\tz-index: 30; /* Display visible cards above the avatar but below the timer */\n\t\tborder-radius: 5px;\n\t}"),
        H(" .style_lobby_image{ height: 16px; vertical-align: middle; } "), H(".card_cover {\n\t\tposition: absolute;\n\t\tborder-radius: 5px;\n\t\t-webkit-mask-image: linear-gradient(to bottom right, transparent 25%, black 45%);\n\t}"), H(".chat_edit {\n\t\tposition: absolute;\n\t\tdisplay: none; \n\t\tbox-sizing: border-box;  \n\t\tborder:none;\n\t\tpadding: 2px 5px;\n\t\toutline: 0 none;\n\t\tbackground-color: whitesmoke;\n\t}"), H(".info_cell {\n\t\tmargin-left: 5px;\n\t\tpadding: 2px 8px;\n\t\tborder-radius: 10px;\n\t\tfont: bold 13px Georgia, Times New Roman, Times, serif;\n\t}"),
        H(".info_cell:hover { background-color: lightgray;\t}"), H(".betedit { \n\t\tbackground: white;\n\t\ttext-align: right;\n\t\tposition: absolute;\n\t\tvertical-align: middle;\n\t\tmargin: 0px; \n\t\tborder: none; \n\t\tpadding: 2px 5px;\n\t\tbox-sizing: border-box;\n\t\toutline: 0 none;\n\t\tvisibility: hidden;\n\t}"), H(".chat_div {\n\t\tposition: absolute;\n\t\tz-index: 100;\n\t\tbackground: beige;\n\t\tborder: 5px;\n\t\tpadding: 5px;\n\t\tborder-radius: 5px;\n\t\tmax-width: 150px;\n\t\tborder: 1px solid dimgray;\n\t\tdisplay: none;\n\t\ttransform: translate(-50%, -50%);/* this may cause fuzziness, check if we can remove, replace with pixel pos */\n\t}"),
        H(".s_debug {\n\t\tborder: 2px solid blue;\n\t\tposition: absolute;\n\t\tz-index: 200;\n\t}"), H(".action_button {\n\t\twhite-space: normal;\n\t\tfont-weight: bold;\n\t\tborder-radius: 8px;\n\t\tbackground-color: #18472D;\n\t\tvisibility:hidden;\n\t}"), H(".div_button {\n\t\twidth: 100%; \n\t\theight: 100%; \n\t\tmargin: 0px; \n\t\tborder: none; \n\t\tpadding: 0px;\n\t\tfont-family: Arial;\n\t\tcolor: white;\n\t\tbackground-image: linear-gradient(hsla(0,0%,100%,.4), hsla(0,0%,100%,0));\n\t\toutline: none;\n\t\tposition: absolute;\n\t\tfont-weight: bold;\n\t}"),
        H(".div_button:hover {\n\t\tfilter: brightness(120%);\n\t}"), H(".tinfo_section {\n\t\tdisplay: flex;\n\t\tposition: absolute;\n\t\tz-index: 200;\n\t\tflex-direction: column;\n\t\talign-items: flex-start;\n\t\tleft: 0px;\n\t\ttop: 30px;\n\t\tbackground: rgba(0, 0, 0, 0.75);\n\t\tborder-radius: 5px;\n\t\tbox-sizing: border-box;\n\t}"), H(".t_info {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: flex-start;\n\t\tcolor: whitesmoke;\n\t\tpadding: 3px;\n\t\tfont-size: 1.1em;\n/*\t\tborder: 2px solid darkslategrey;*/\n\t}"),
        H(".style_tinfo_label {\n\t\tcolor: gold;\n\t\tfont-size: 0.85em;\n\t}"), H(".style_tinfo_spacer {\n\t\theight: 0.3em;\n\t}"), H(".style_tinfo_column {\n\t\tflex-direction: column;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t}"), H(".style_tinfo_timer {\n\t\tflex-direction: column;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tpadding: 0 1em;\n\t\tborder: 2px solid grey;\n\t\tborder-radius: 1em;\n\t\tmargin:0 0.5em;\n\t}"), H(".style_tinfo_row {\n\t\tflex-direction: row;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tpadding: 0.1em 0;\n\t}"),
        H(".table_info {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\talign-items: flex-start;\n\t\tcolor: whitesmoke;\n\t\tleft: 50px;\n\t\ttop: 50px;\n\t\tposition: absolute;\n\t\tz-index: 10;\n\t\topacity: 0.5;\n\t\ttransform: translateX(-50%);\n\t\tbackground: rgba(0, 0, 0, 0.25);\n\t\tpadding: 0.1em 0.5em;\n\t\tborder-radius: 0.5em;\n\t}"), H(".player_avatar_div {\n\t\tdisplay: none;\n\t\tz-index: 25;\n\t\tposition: absolute;\n\t\tcursor: pointer;\n\t}"), H(".button_div {\n\t\tdisplay: none;\n\t\tposition: absolute;\n\t\tz-index: 26;\n\t\ttransform: translate(-50%, -50%);\n\t}"),
        H(".seat_div {\n\t\tdisplay: none;\n\t\tposition: absolute;\n\t\tborder-radius: 100%;\n\t\tz-index: 25;\n\t\tborder: solid 0.125em dimgray;\n\t\tcursor: pointer;\n\t\tcolor: white;\n\t\tbackground: rgba(0, 0, 0, 0.5);\n\t\ttext-align: center;\n\t\tvertical-align: middle;\n\t\tfont: bold 10px Arial;\n\t\ttransform: translate(-50%, -50%);/* this may cause fuzziness, check if we can remove, replace with pixel pos */\n\t}"), H(".seat_div:hover {\n\t\tfilter: brightness(150%);\n\t}"), H(".style_lang_item {\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: contain;\n\t\twidth: 40px;\n\t\tbackground-image: url(./images/flag_us.png);\n\t\theight: 15px;\n\t}"),
        H(" .style_table_row_100pc { display: table-row; width: 100%; }"), H(" .style_m_settings_combo { font: 12pt Roboto, Arial; color: dimgrey; -webkit-appearance: none; -moz-appearance: none; appearance: none; border: none; background-color: transparent; }"), H(" .style_m_header_combo { outline: none; font: 12pt Roboto, Arial; color: rgb(128,128,128); -webkit-appearance: none; -moz-appearance: none; appearance: none; border: none; background-color: transparent; }"), H(".style_lang_flag { align-self: center; background-repeat: no-repeat; background-size: contain; height: 15px; width: 30px; vertical-align: middle; margin-right: 10px; cursor: pointer; }"),
        H(".style_table_row { display: table-row; color: white; }"), H(".style_skin_landing_page { width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; display: none; background: black; flex-direction: column; z-index: 2000; } "), H(".style_table_image { z-index: 5; position: absolute; } "), H(".style_table_logo { \n\t\tz-index: 10; \n\t\tposition: absolute; \n\t\topacity: 0.15;\n\t\ttransform: translate(-50%, -50%);\n\t\tfilter: grayscale(100%);\n\t} "), H(".style_background { z-index: 4; position: absolute; width: 100%; height: 100%; } "),
        H(".style_ofc_value { margin: 2px 0px; } "), H(".style_ofc_bonus_column { margin: 0px 5px; color: white; text-align: right; } "), H(".style_ofc_hand_column { margin: 0px 5px; color: mediumaquamarine; text-align: left; } "), H(".style_ofc_column_title { margin-bottom: 0.25em; margin-top: 0.5em; font-size: 16px; } "), H(".style_ofc_column { width: 10px; flex: 1 1 auto; text-align: center; padding: 0px 10px; } "), H(".style_ofc_row { justify-content: space-between; } "), H(" .admin_announce { display: block; color: white; z-index: 5000; position: fixed; top: 50%; left: 50%; background: black; padding: 10px 10px; transform: translate(-50%,-50%); border-radius: 5px; border: 2px solid yellow; font: 16px Roboto, Arial; }"),
        H(".style_buyin_edit { text-align: right; font: 14px Roboto, Arial; height: 24px; border-radius: 5px; color: white; outline: none; border: 1px solid dimgrey; padding: 0px 5px; background-color: rgb(32,32,32); margin: 0px 0px; width: 70px; } "), H(".style_range_additions { width: 100%; height: 35px; vertical-align: middle; } "), H(".style_info_page { width: 100%; white-space: normal; padding-right: 0.5em; box-sizing: border-box; flex-direction: column; } "), H(".style_dialog_outer { \n\t\tdisplay: flex; \n\t\tflex-direction: column;\n\t\theight: 10px;\n\t\tflex: 1 1 auto;\n\t}"),
        H(".m_dialog_outer { height: 100%; display: flex; flex-direction: column; background: rgba(0,0,0,0.75); color: white; padding-bottom: 0.5em; } "), H(".style_tab_bar { flex: 0 0 auto; display: flex; }"), H(".style_tab_wrapper { flex: 1 1 auto; overflow-y: scroll; }"), H(".style_info_content { margin-bottom: 1em; font: 14px Roboto, Arial; color: white; }"), H(".style_info_title { margin-bottom: 0.2em; font: 16px Roboto, Arial; color: mediumaquamarine; }"), H(".style_landing_info_content { margin-bottom: 1em; font: 15px Roboto, Arial; color: white; }"),
        H(".style_landing_info_title { margin-bottom: 0.2em; font: 17px Roboto, Arial; color: mediumaquamarine; }"), H(".player_avatar_bounty { \n/*\t\tposition: absolute; */\n\t\tz-index: 27; \n\t\tcolor: gold;\n\t\tborder: 2px solid grey;\n\t\tbackground-color: black;\n/*\t\ttransform: translate(-50%, -100%);*/\n\t\tfont-family: Roboto, Arial;\n\t\tdisplay: flex;\n\t\toverflow: hidden;\n\t} "), H(".style_big2_border {\n\t\tborder: 0.2em solid rgba(255,255,255,0.25);\n\t\tborder-radius: 0.5em;\n\t\tposition: absolute;\n\t\tdisplay: none;\n\t\tz-index: 10;\n\t\tbox-sizing: border-box;\n\t} "),
        H(".style_big2_suit {\n\t\theight: 3em;\n\t} "), H(".style_big2_suits {\n\t\tz-index: 25;\n\t\tmargin-top: 1em;\n\t\tpadding-right: 1em;\n\t\tposition: absolute;\n\t\theight: 3em;\n\t\topacity: 0.25;\n\t\ttransform: translateX(-100%);\n\t\tdisplay: none;\n\t} "), H(".m_big2_suits {\n\t\tz-index: 25;\n\t\tmargin-top: 1em;\n\t\tposition: absolute;\n\t\theight: 3em;\n\t\topacity: 0.25;\n\t\tleft: 50%;\n\t\ttransform: translateX(-50%);\n\t\tdisplay: none;\n\t} "), H(".target_text {\n\t    padding-left: 0.2em;\n\t    padding-right: 0.2em;\n\t    font-weight: bold;\n\t\talign-self: center;\n\t} "),
        H(".style_card { \n\t\tdisplay: inline-block; \n\t\theight: 40px; \n\t\tvertical-align: middle;\n\t} "), H(".style_big2_result {\n\t\ttransform: translate(-50%, -50%);\n\t\tposition: absolute;\n\t\tz-index: 50;\n\t\tcolor: white;\n\t\tfont: 16px Roboto, Arial;\n\t\tborder-radius: 1em;\n\t\tpadding: 0.5em;\n\t\tborder: 2px solid grey;\n\t\tbackground-color: rgba(0, 0, 0, 0.75);\n\t} "), H(".big2_pass {\n\t\ttransform: translate(-50%, -50%);\n\t\tposition: absolute;\n\t    border-radius: 0.5em;\n\t\tpadding: 0.5em;\n\t\tborder: 2px solid grey;\n\t\tbackground-color: rgba(0, 0, 0, 0.75);\n\t\tcolor: gainsboro;\n\t\tz-index: 40;\n\t\tfont: 16px Roboto, Arial;\n\t} "),
        H(".player_avatar_underlay { \n\t\tposition: absolute; \n\t\tz-index: 24;\n\t\tborder-radius: 100%;\n\t\tbackground-color: rgba(0, 0, 0, 0.5);\n\t} "), H(".player_avatar {\n\t\tposition: absolute;\n\t\tborder-radius: 100%;\n\t\tz-index: 25;\n\t} "), H(".player_avatar_overlay { left: 0px; top: 0px; position: absolute; z-index: 26; }"), H(".chip_stack { position: absolute; left: 50px; top: 50px; display: flex; flex-direction: column; z-index: 60; transform: translate(-50%,-100%); }"), H(".chip_stack_area { display: flex; flex-direction: row; justify-content: center; }"),
        Cm = H(".chip_stack img { width: 25px; height: 50px; }"), H(".s_player_name {\n\t\tcolor: white;\n\t\ttext-align: center;\n\t\tbackground: rgba(0, 0, 0, 0.8);\n\t\tborder-radius: 0.5em;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tmin-width: 5em;\n\t\tpadding: 0.2em 0.4em;\n\t} "), H(".player_stack {\n\t\tcolor: white;\n\t\tborder-top: 1px solid rgb(64,64,64);\n\t\ttext-align: center;\n\t\tbackground: rgba(0, 0, 0, 0.8);  \n\t\tborder-radius: 0.5em;\n\t\tborder-top-left-radius: 0em;\n\t\tborder-top-right-radius: 0em;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tmin-width: 3em;\n\t\tpadding: 0.1em 0.4em;\n\t} "),
        H(".player_stack:hover {\n\t\tbackground: rgba(64,64,64, 0.6);  \n\t} "), H(".style_table_top_bar {\n\t\tdisplay: flex;\n\t\tbackground-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 90%, rgba(0, 0, 0, 0));\n\t\tbox-sizing: border-box;\n\t\twidth: 100%;\n\t\tposition: absolute;\n\t\tleft: 0px;\n\t\ttop: 0px;\n\t\tz-index: 10;\n\t\talign-items: center;\n\t} "), H(".style_table_top_bar:hover {\n\t\tz-index: 100;\n\t} "), H(".style_table_toolbar {\n\t\tdisplay: flex;\n\t\tbox-sizing: border-box;\n\t\twidth: 100%;\n\t\topacity: 0.5;\n\t\tjustify-content: space-between;\n\t\tpadding: 0.2em 1em;\n\t\ttransition: opacity 0.15s;\n\t} "),
        H(".style_table_toolbar:hover {\n\t\topacity: 1;\n\t} "), H(".style_table_toolbar_image {\n\t\tfilter: brightness(75%);\n\t\theight: 1.6em;\n\t\tcursor: pointer;\n\t\tborder-radius: 0.5em;\n\t\tpadding: 0.1em 0.5em;\n\t} "), H(".style_table_toolbar_image:hover {\n\t\tfilter: brightness(100%);\n\t\tbackground-color: rgb(96,96,96);\n\t} "), H(".chip_stack_text {\n\t\tborder-radius: 5px;\n\t\tpadding: 0px 5px;\n\t\tbackground-color: rgba(0, 0, 0, 0.5);\n\t\tcolor: white;\n\t\talign-self: center;\n\t\twidth: fit-content;\n\t\tcursor: pointer;\n\t} "),
        H(".chip_stack_text:hover {\n\t\tbackground: rgba(64,64,64, 0.5);\n\t} "), Dm = H(".table_font { font: 10px Roboto, Arial; }"), Em = H(".table_font_bold { font: bold 10px Roboto, Arial; }"), $p = H(".action_button_font { font: bold 10px Roboto, Arial; }"), H(".picker { width: 50px; height: 50px; padding: 1px 1px 1px 1px; border-radius: 7px; object-fit: scale-down;}"), H(".picker:hover { filter: brightness(120%); }"), H(".m_button {\n\t\t\tcolor: white;\n\t\t\tborder-radius: 100%; background-color: rgba(32,32,32,1);\n\t\t\tpadding: 5px;\n\t\t\tbackground-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(254, 255, 255, 0.0));\n\t\t\tposition: absolute;\n\t\t} "),
        H(".style_smiley_button {\n\t\t\tborder-radius: 100%;\n\t\t\tbackground-color: rgba(0, 0, 0, 0.5);\n\t\t\tcursor: pointer;\n\t\tposition: absolute;\n\t\tdisplay: none;\n\t\t} "), H(".mobile_picker { box-sizing: border-box; width: 20%; padding: 1px 1px 1px 1px; border-radius: 7px; object-fit: scale-down;}"), H(" .style_control_group { border: 1px solid grey; border-radius: 5px; padding: 5px; margin-top: 10px }"), H(" .style_player_notes_colors { display: flex; width: 100%; flex-direction: column; margin-bottom: 10px; }"),
        H(" .style_player_notes_color_button { height: 20px; width: 55px; margin: 2px 0px; border: 2px solid black; box-sizing: border-box; }"), H(" .style_player_notes_color_button:hover {\n\t\tborder-color: green;\n\t}"), H(" .style_notify_cell { padding: 0px 5px; display: table-cell; overflow-x: hidden; text-overflow: ellipsis; }"), H(" .style_notify_row {\n\t\tpadding: 2px 0px;\n\t\twhite-space: nowrap; \n\t\tdisplay: table-row; \n\t\tcolor: black;\n\t\talign-items: center;\n\t}"), H(".style_notify_row:nth-child(odd)\n\t\t{\n\t\t\tbackground: gainsboro;\n\t\t} "),
        H(" .style_deck_option_image { width: 52px; height: 71px; border-radius: 10px; filter: brightness(50%); margin-right: 8px; cursor: pointer; }"), H(" .style_deck_option_image:hover { filter: brightness(75%); }"), H(" .style_settings_dialog_label { display: table-cell; vertical-align: middle; padding-right: 10px; }"), H(" .style_m_avatar { height: 71px; border-radius: 10px; }"), H(" .style_control_group_title { height: 15px; font-weight: bold; cursor: pointer; }"), H(" .style_control_group_row { display: flex; margin-top: 10px; }"),
        H(" .style_select_row { display: flex; width: 100%; justify-content: space-between; }"), H(".s_kill { \n\t\tdisplay: none; \n\t\tposition: absolute; \n\t\tz-index: 26; \n\t\tbackground-color: rgba(165,42,42,1.0); \n\t\tborder: 1px solid dimgrey; \n\t\tcolor: white; \n\t\ttext-align: center; \n\t\tpadding: 1px 3px; \n\t\tborder-radius: 3px; \n\t}"), H(".style_missed_blind {\n\t\tdisplay: none; \n\t\tposition: absolute; \n\t\tz-index: 26; \n\t\tbackground-color: blue; \n\t\tborder: 1px solid dimgrey; \n\t\tcolor: gainsboro; \n\t\ttext-align: center; \n\t\tpadding: 1px 3px; \n\t\tborder-radius: 3px;\n\t\ttransform: translate(0, -100%);\n\t}"),
        H(" .style_m_filter_bar { align-items: center; height: 50px; background-color: rgb(24,24,24); flex: 0 0 auto; display: flex; justify-content: space-between; padding: 0px 0px; width: 100% }"), H(".style_m_category_bar \n\t{ \n\t\talign-items: center; \n\t\tbackground-color: rgb(24,24,24); \n\t\tflex: 0 0 auto; \n\t\tdisplay: flex; \n\t\tjustify-content: space-between; \n\t\tpadding: 0px 0px; \n\t\twidth: 100%;\n\t}"), H(".style_m_category_bar .button\n\t\t{\n\t\t\twhite-space: nowrap;\n\t\t\ttext-align: center;\n\t\t\tcolor: white;\n\t\tfont: 14px/40px Roboto, Arial;\n\t\t\tbackground-color: rgb(28, 90, 77);\n\t\t\tbackground-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));\n\t}"),
        H(".style_m_category_bar .unchecked\n\t\t{\n\t\tcolor: lightgrey;\n\t\t\tborder-color: rgb(48,48,48); background-color: black;\n\t\t}"), H(".style_m_filter_bar .button\n\t\t{\n\t\t\theight: 50px;\n\t\t\tline-height: 50px;\n\t\t\twhite-space: nowrap;\n\t\t\ttext-align: center;\n\t\t\tcolor: lightgrey;\n\t\t\tfont: 14px Roboto, Arial;\n\t\t\tbackground-color: rgb(28, 90, 77);\n\t\t\tbackground-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));\n\t}"), H(".style_m_filter_bar .micro_stakes\n\t\t{\n\t\tbackground-color: darkgreen;\n\t}"),
        H(".style_m_filter_bar .mid_stakes\n\t\t{\n\t\tbackground-color: saddlebrown;\n\t}"), H(".style_m_filter_bar .low_stakes\n\t\t{\n\t\tbackground-color: darkgoldenrod;\n\t}"), H(".style_m_filter_bar .high_stakes\n\t\t{\n\t\tbackground-color: darkred;\n\t}"), H(".style_m_filter_bar .unchecked\n\t\t{\n\t\t\tcursor: pointer;\n\t\t\tborder-color: rgb(48,48,48); background-color: black;\n\t\t}"), H(" .style_waiting_list_info { position: absolute; color: whitesmoke; transform: translate(-50%, -50%); white-space: nowrap; }"),
        H(".style_timer_wrapper\n\t{\n\t\tborder: 0.4em solid white;\n\t\tposition: absolute;\n\t\tz-index: 50;\n\t\tcolor: white;\n\t\tbackground-color: rgba(0, 0, 0, 0.75);\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tbox-sizing: border-box;\n\t\tfont: bold 12px Roboto, Arial;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}"), H(".style_fl_sort { display: none; transform: translate(-50%, -50%); border-radius: 2px; background-color: rgba(0,0,0,0.75); color: white; position: absolute; z-index: 50; padding: 0.1em 0.5em; border-radius: 0.5em; }"),
        H(".style_fl_sort:hover { background-color: dimgrey; }"), H(".style_discard_info { width: 1.3em; height: 1.3em; line-height: 1.3em; border-radius: 0.65em; background-color: black; color: white; position: absolute; z-index: 100; border: 1px solid dimgrey; transform: translate(-100%, -50%); display: none; text-align: center; }"), H(".style_dialog_control { margin-bottom: 10px; }"), H(".style_last_card { \n\t\tline-height: 1.3em; \n\t\tborder-radius: 0.65em; \n\t\tbackground-color: red; \n\t\tcolor: white; \n\t\tposition: absolute; \n\t\tz-index: 100; \n\t\tborder: 1px solid dimgrey; \n\t\ttransform: translate(-50%, -150%); \n\t\tdisplay: none; \n\t\ttext-align: center;\n\t    white-space: nowrap;\n\t\tpadding: 0.1em 0.5em;\n\t    border-radius: 0.5em;\n\t\tfont-size: 0.8em;\n\t}"),
        H(".style_radio_box { margin-right: 0.3em; border-radius: 50%; border: 1px solid dimgrey; box-sizing: border-box;  }"), H(".style_radio_button { border-radius: 50%; width: 10px; height: 10px; border: none; padding: 4px; background-clip: content-box; background-color: lime; background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));  }"), H(".style_radio_box_2 { margin-left: 0.5em; border-radius: 50%; border: 1px solid dimgrey; box-sizing: border-box;  }"), H(".style_radio_button_2 { border-radius: 50%; width: 14px; height: 14px; border: none; padding: 4px; background-clip: content-box; background-color: lime; background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));  }"),
        H(".style_settings_edit { font: 14px Roboto, Arial; height: 25px; padding: 0px 5px; border-radius: 5px; margin-right: 5px; color: white; background: rgba(48,48,48,1); border: 1px solid dimgray; outline: dimgray; background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)); }"), H(".style_combo_box { cursor: pointer; font: 14px Roboto, Arial; height: 25px; padding: 0px 5px; border-radius: 5px; margin-right: 5px; color: white; background: rgba(48,48,48,1); border: 1px solid dimgray; outline: dimgray; background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)); }"),
        H(".style_combo_box:hover { background-color: rgb(64,64,64); } "), H(".style_button { display: flex; align-items: center; justify-content: center; color: white; min-width: 100px; max-width: 150px; font: 14px Roboto, Arial; border-radius: 5px; cursor: pointer; background-color: rgba(32,32,32,1); padding: 5px; margin: 0px 10px; background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.0)); } "), H(".style_button:hover { background-color: rgb(64,64,64); } "), H(".style_landing_button { transition: background 0.15s ease; display: flex; align-items: center; justify-content: center; color: white; height: 30px; min-width: 100px; max-width: 150px; font: 20px Roboto, Arial; border-radius: 5px; cursor: pointer; background-color: rgba(32,32,32,1); padding: 5px; margin: 0px 10px; background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.0)); } "),
        H(".style_landing_button:hover { filter: brightness(120%); } "), H(".style_landing_tab_row {\n\t\tfont: 16px Roboto, Arial;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-around;\n\t\tcolor: white;\n\t\tmargin: 20px 10px;\n\t\tborder-bottom: 1px solid dimgrey;\n\t\tflex: 0 0 auto;\n\t} "), H(".style_landing_tab_button { transition: background 0.15s ease; border-radius: 0px; background-color: rgb(0,0,0); margin: 2px 0px; padding: 5px 0px; min-width: 150px; text-align: center; cursor: pointer; } "),
        H(".style_landing_tab_button:hover { background-color: rgb(32,32,32); } "), H(".style_landing_tab_wrapper { flex: 1 1 auto; overflow-y: auto; }"), H(".style_button_details { display: inline-block; margin: auto; color: white;  font: 14px Roboto, Arial; border-radius: 5px; cursor: pointer; background-color: rgba(32,32,32,1); padding: 3px 20px; margin: 2px 10px; } "), H(".style_button_details:hover { background-color: rgb(64,64,64); } "), H(".style_open_table { display: inline-block; margin: auto; color: white;  font: 14px Roboto, Arial; border-radius: 5px; cursor: pointer; background-color: rgb(28, 90, 77); padding: 3px 20px; margin: 2px 10px; } "),
        H(".style_open_table:hover { filter: brightness(120%); } "), H(".style_sitdown_button { display: flex; align-items: center; justify-content: center; color: white; min-width: 70px; max-width: 150px; font: 14px Roboto, Arial; border-radius: 5px; cursor: pointer; background-color: rgba(32,32,32,1); padding: 5px; background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(254, 255, 255, 0.0)); } "), H(".style_sitdown_button:hover { background-color: rgb(64,64,64); } "), H(".style_buyin_row { justify-content: space-between; align-items: baseline; } "),
        H(".style_rathole_info { line-height: 25px; color: white; visibility: hidden; } "), H(".style_single_tab_button { flex: 1 1 auto; display: flex; align-items: center; justify-content: center; color: white; min-width: 100px; font: 14px Roboto, Arial; background: rgb(28,90,77); padding: 5px 0px; background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.0)); border-radius: 5px; } "), H(".style_tab_button { flex: 1 1 auto; display: flex; align-items: center; justify-content: center; color: white; min-width: 80px; font: 14px Roboto, Arial; cursor: pointer; background-color: rgba(32,32,32,1); padding: 5px 0px; background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(254, 255, 255, 0.0)); } "),
        H(".style_left_tab_button { border-radius: 5px 0px 0px 5px; } "), H(".style_right_tab_button { border-radius: 0px 5px 5px 0px; } "), H(".style_tab_button:hover { background-color: rgba(64,64,64,1); } "), H(".style_input { outline: none; border: 1px solid dimgrey; background-color: rgba(32,32,32,1); color: white; font: 14px Roboto, Arial; height: 25px; padding: 0px 5px; border-radius: 5px; margin-bottom: 8px; width: 100px; } "), H(".style_flter_cb_input { white-space: nowrap; font: 14px Roboto, Arial; line-height: 25px; height: 25px; padding: 0px 5px; border-radius: 5px; border: none;  } "),
        H(".style_10px_spacer { height: 10px; flex: 0 0 auto; }"), H(".style_5px_spacer { height: 5px }"), H(".style_1em_spacer { height: 1em; flex: 0 0 auto; }"), H(".style_player_info {\n\t\tdisplay: none;\n\t\tz-index: 55;\n\t\tposition: absolute;\n\t\twhite-space: nowrap;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tcursor: pointer;\n\t\tbox-sizing: border-box;\n\t\ttransform: translateX(-50%);\n\t} "), H(".style_player_info:hover { filter: brightness(120%); } "), H(".style_menu_spacer { width: 100%; height: 1px; background-color: black; padding: 0px 0px;  }"),
        H(".style_popup_menu { position: absolute; flex-direction: column; display: none; color: white; background-color: rgba(47,51,60,1); border: 1px solid green; font: 14px Roboto, Arial; white-space: nowrap; z-index: 10000; }"), H(".style_popup_menu_item { padding: 7px 10px; display: flex; align-items: center; }"), H(".style_menu_image { padding-right: 10px }"), H(".style_menu_noimage { padding-right: 10px; width: 25px; height: 25px; }"), H(".style_popup_menu_item:hover {background-color: dimgrey; }"), H(".style_popup_menu:after { content: ''; display: block;  position: absolute; right: 8px; top: -3px; background-color: rgba(47,51,60,1); width: 5px; height: 5px; border-bottom: 1px solid green; border-right: 1px solid green; transform:rotate(-135deg); }"),
        H(".style_chinese_placeholder { box-sizing: border-box; border: none; border-radius: 5px; position: absolute; z-index: 11; background-color: rgba(0,0,0,0.3); }"), H(".style_chinese_bonus { \n\t\tposition: absolute; \n\t\tbackground-color: rgba(0, 0, 0, 0.75); \n\t\tborder-radius: 2px; \n\t\tfont-family: Roboto, Arial; \n\t\tcolor: gold; \n\t\tz-index: 40; \n\t\twhite-space: nowrap; \n\t\tdisplay: block; \n\t\ttransform: translate(0, -100%); \n\t\tpadding: 0.2em;\n\t\tfont-size: 1.2em; // seems this is desktop only, mobile uses a calculated font size based on card height\n\t}"),
        H(".style_table { display: table; }"), H(".style_chinese_result { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgba(0, 0, 0, 0.75); border-radius: 5px; color: whitesmoke; z-index: 20; padding: 1em; white-space: nowrap; }"), H(".style_chinese_foul { position: absolute; z-index: 35; display: none; font: bold 3em Roboto, Arial; color: whitesmoke; background-color: rgba(0, 0, 0, 0.5); text-align: center; border-radius: 5px; }"), Gm = H(".style_large_card { width: 10px; height: 10px; } "),
        H(".style_game_number {\n\t\tbackground-color: rgba(0, 0, 0, 0.75);\n\t\tborder-radius: 0.5em;\n\t\tcolor: white;\n\t\tcursor: pointer;\n\t\tpadding: 0.2em 0.4em;\n\t}"), H(".style_game_number { color: white; cursor: pointer; } "), H(".style_previous_hand { margin-top: 0.5em; opacity: 0.75; } "), H(".style_previous_hand:hover { opacity: 1.0; } "), H(".style_previous_hand_2 {\n\t\tcolor: gainsboro;\n\t\tpadding: 0.2em 0.4em;\n\t\tfont-weight: bold;\n\t\tbackground-image: linear-gradient(to bottom, black 90%, rgba(0, 0, 0, 0));\n\t}"),
        H(".style_button_take_seat { display: flex; align-items: center; justify-content: center; cursor: pointer; white-space: nowrap; font: bold 14px Roboto, Arial; border-radius: 8px; background-color: #18472D; background-image: linear-gradient(hsla(0,0%,100%,.4), hsla(0,0%,100%,0)); font-family: Roboto, Arial; color: white; border: none; margin: 0px 10px; padding: 10px 15px; } "), H(".style_dialog_title {\n\t\twhite-space: nowrap;\n\t\ttext-align: center;\n\t\tdisplay: block;\n\t\tmargin-bottom: 0.75em;\n\t\tcursor: pointer;\n        background-color: slategrey;\n        border-radius: 5px;\n\t\tpadding: 5px;\n\t\tbox-sizing: border-box;\n\t\twidth: 100%;\n\t\tcursor: pointer;\n\t"),
        H(".style_open_table_wrapper\n\t\t{\n\t\t\tdisplay: block;\n\t\t\toverflow-y: scroll;\n\t\t\toverflow-x: hidden;\n\t\t\tleft: 0px;\n\t\t\twhite-space: nowrap;\n\t\t\tbackground-color: whitesmoke;\n\t\t\tflex: 1 1 auto;\n\t\t\theight: 100%;\n\t\t\tfont: 14px/30px Roboto, Arial;\n\t\t}"), H(".style_open_table_list\n\t\t{\n\t\t\twidth: 100%;\n\t\t\twhite-space: nowrap;\n\t\t\ttable-layout: fixed;\n\t\t\tcursor: pointer;\n\t\t\tcolor: black;\n\t\t\toverflow-y: auto;\n\t\t\toverflow-x: hidden;\n\t\t\tdisplay: table;\n\t\t} "),
        H(".style_take_seat_name { white-space: nowrap; text-align: center; color: gold; "), H(".style_take_seat_game { white-space: nowrap; text-align: center; color: white; "), H(".style_dialog_subtitle { white-space: nowrap; text-align: center; display: block; margin-bottom: 1em; "), H(".style_game_list { display: table; border-spacing: 0px 10px; white-space: nowrap; } "), H(".style_fl_button { \n\t\tposition: absolute; \n\t\tborder-radius: 2px; \n\t\tcolor: white;  \n\t\tpadding: 5px 0px; \n\t\tz-index: 50;\n\t\ttext-align: center;\n\t\tbackground-image: linear-gradient(hsla(0, 0%, 100%, .4), hsla(0, 0%, 100%, 0));\n\t\ttransform: translateX(-100%);\n\t} "),
        H(".style_big2_button {\n\t\tbackground-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.0));\n\t\tposition: absolute;\n\t\tborder-radius: 0.3em;\n\t\tcolor: white;\n\t\tpadding: 0.5em 1em;\n\t\tz-index: 50;\n\t\ttext-align: center;\n\t\tbackground-color: dimgrey;\n\t\ttransform: translate(-100%, -100%);\n\t} "), H(".style_fl_button:hover { filter: brightness(120%); } "), H(".style_chinese_cell { display: table-cell; padding: 0.2em 0.5em; text-align: center; } "), H(".style_ofc_buyin_info { margin-top: 10px; width: 200px; white-space: normal; } "),
        H(".minibet {\n\t\twidth: 100%;\n\t\tbackground-color: #18472D;\n\t\tborder-radius: 2px;\n\t\tvisibility: hidden;\n\t\tmargin: 0 1px 0 0;\n\t\tborder: none;\n\t\tpadding: 0px;\n\t\tcolor: white;\n\t\tbackground-image: linear-gradient(hsla(0,0%,100%,.4), hsla(0,0%,100%,0));\n\t\toutline: none;\n\t} "), H(".minibet:last-child {\n\t\tmargin: 0;\n\t} "), H(".minibet:disabled { background-color: black; border-radius: 2px; } "), H(".minibet:disabled:hover { filter: brightness(100%); } "), H(".minibet:hover {\n\t\tfilter: brightness(120%);\n\t}"),
        H(".fl_sort_button {\n\t\tpadding: 0px;\n\t\ttext-align: center;\n\t\tbackground-image: linear-gradient(hsla(0, 0%, 100%, .5), hsla(0, 0%, 100%, 0.1));\n\t\tborder-radius: 2px;\n\t    font-family: Roboto, Arial;\n\t\tcolor: white;\n\t\toutline: none;\n\t\tposition: absolute;\n\t    font-weight: bold;\n\t} "), H(".fl_sort_button:hover {\n\t\tbackground-image: linear-gradient(hsla(0, 0%, 100%, .7), hsla(0, 0%, 100%, 0.2));\n\t}"), H(".style_gradient\n\t\t{\n\t\t\tbackground-image: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));\n\t\t}"),
        H(".style_heavy_gradient\n\t\t{\n\t\t\tbackground-image: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));\n\t\t}"), z && (H(".style_m_hand_number {\n\t\t\tposition: absolute;\n\t\t\tz-Index: 100;\n\t\t\tcolor: white;\n\t\t\tleft: 5px;\n\t\t\ttop: 43px;\n\t\t}"), H(".style_hand_number { color: white; }"), H(".style_tables_button_wrapper { width: 50px; height: 50px; z-index: 1; pointer-events: none; top: 0px; position: absolute; display: flex; justify-content: center; }"), H(".style_settings_row { color: dimgrey; border-bottom: 1px solid whitesmoke; padding: 12px 10px; font: 16px Roboto, Arial; display: flex; align-items: center; justify-content: space-between; }"),
            H(".style_cb_back { border-radius: 100px; border: 1px solid darkgrey; height: 24px; width: 40px; background: white; position: relative; padding: 0px; box-sizing: border-box; }"), H(".style_cb_settings_button { left: -1px; top: -1px; border-radius: 100px; border: 1px solid darkgrey; height: 24px; width: 24px; background-color: white; position: absolute; padding: 0px; transition: .3s; box-sizing: border-box; }"), H(".style_cb_settings_button_on { transform: translateX(20px); } "), H(".fullscreen_mask_mobile { display: none; background-color: rgba(0,0,0,0.4); position: fixed; left: 0px; top: 45px; width: 100%; height: 100%; } "),
            H(".chat_mask_mobile { \n\t\t\tdisplay: none; \n\t\t\tposition: fixed; \n\t\t\tleft: 0px; \n\t\t\ttop: 45px; \n\t\t\twidth: 100%; \n\t\t\theight: 100%;\n\t\t}"), H(".style_m_player_chat { width: fit-content; white-space: normal; margin-left: 5px; margin-right: 30px; margin-top: 5px; margin-bottom: 0px; border-radius: 5px; padding: 5px; font: 16px Roboto, Arial; border: none; background-color: rgb(242,246,249); color: black; }"), H(".style_m_chat_spacer { flex: 1 1 auto; }"), H(".style_m_chat { white-space: normal; margin-left: 80px; margin-right: 5px; margin-top: 5px; margin-bottom: 0px; border-radius: 5px; padding: 5px; font: 16px Roboto, Arial; border: none; background-color: rgb(219,244,253); color: black; }"),
            H(".style_chat_image { width: 48px; height: 48px; border-radius: 100%; }"), H(".style_chat_name { font: 14px Roboto, Arial; color: aliceblue; margin-left: 5px; }"), H(".style_chat_block { \n\t\t\tmargin-bottom: 20px; \n\t\t\tmargin-right: 10px; \n\t\t\tdisplay: flex;\n\t\t\tflex: 0 0 auto;\n\t\t}"), H(".style_my_chat_column { display: flex; flex-direction: column; align-items: flex-end; width: 100%; }"), H(".style_chat_input { \n\t\t\twidth: 100%; \n\t\t\tmargin: 0px 10px; \n\t\t\tborder-radius: 0.75em; \n\t\t\tpadding: 0px 10px; \n\t\t\tfont: 16px Roboto, Arial; \n\t\t\tborder: 1px solid lightgrey; \n\t\t\toutline: none; \n\t\t\theight: 30px; \n\t\t}"),
            H(".style_m_chat_bar { \n\t\t\tbackground: rgb(0, 0 ,0, 0.5); \n\t\t\theight: 45px; \n\t\t\talign-items: center; \n\t\t\tdisplay: flex; \n\t\t\tflex-wrap: nowrap; \n\t\t\tjustify-content: space-between; \n\t\t\tflex: 0 0 auto;\n\t\t    border-top: 1px solid grey;\n\t\t    box-sizing: border-box;\n\t\t}"), H(".style_m_table_options { \n\t\t\tposition: absolute; \n\t\t\tcolor: white; \n\t\t\tbackground: rgba(0,0,0,0.9); \n\t\t\tz-index: 1000; \n\t\t\tdisplay: none; \n\t\t\tflex-direction: column; \n\t\t\tpadding: 10px 10px; \n\t\t\tborder: none;\n\t\t\toutline: none;\n\t\t\tleft: 0px; top: 100px;\n\t\t\tborder-radius: 5px;\n\t\t}"),
            H(".style_m_hand_numbers { position: absolute; color: white; background: rgba(0,0,0,0.9); z-index: 1000; display: none; padding: 10px 10px; border: none; outline: none; left: 0px; border-radius: 0px 5px 5px 0px; }"), H(".style_header_table_mobile { background-image: linear-gradient(rgb(80, 80, 80), rgb(32, 32, 32)); height: 45px; z-index: 10; display: flex; flex-wrap: nowrap; justify-content: space-between; flex: 0 0 auto; position: absolute; width: 100%; box-sizing: border-box; padding: 0px 10px; align-items: center; }"),
            H(".style_table_name_mobile { \n\t\t\tcolor: gold;\n\t\t\tfont: 18px Roboto, Arial; \n\t\t\ttext-align: center;\n\t\t\toverflow: hidden;\n\t\t    text-overflow: ellipsis;\n\t\t\twidth: 100%;\n\t\t\twhite-space: nowrap; }"), H(".style_table_game_mobile { \n\t\t\tcolor: white; \n\t\t\tfont: 14px Roboto, Arial; \n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t    white-space: nowrap;\n\t\t\ttext-align: center; }"), H(".style_table_info_column { \n\t\t\talign-items: center; \n\t\t\tdisplay: flex; \n\t\t\tflex-direction: column; \n\t\t\tfont: 12px Roboto, Arial; \n\t\t\tcolor: white; \n\t\t\tflex: 1;\n\t\t\twidth: 28px; }"),
            H(".style_back { \n\t\t\theight: 28px; \n\t\t\twidth: 28px; \n\t\t\tflex: 0; }"), H(".style_header_button { font: 12pt Roboto, Arial; color: rgb(128,128,128); }"), H(".style_slide_up { animation: slide_up 0.25s forwards; } "), H("@keyframes slide_up { 0% { transform : translateY(0%);\t} 100% { transform : translateY(-100%);\t} }"), H(".style_slide_down { animation: slide_down 0.25s forwards; } "), H("@keyframes slide_down { 0% { transform : translateY(-100%);\t} 100% { transform : translateY(0%);\t} }"),
            H(".style_slide_in { animation: slide_in 0.25s forwards; } "), H("@keyframes slide_in { 0% { transform : translateX(100%);\t} 100% { transform : translateX(0%);\t} }"), H(".style_slide_out { animation: slide_out 0.25s forwards; } "), H("@keyframes slide_out { 0% { transform : translateX(0%);\t} 100% { transform : translateX(100%);\t} }"), H(".style_swipe_right { animation: swipe_right 0.25s forwards; } "), H("@keyframes swipe_right { 0% { transform : translateX(-100%);\t} 100% { transform : translateX(0%);\t} }"),
            H(".style_swipe_right_out { animation: swipe_right_out 0.25s forwards; } "), H("@keyframes swipe_right_out { 0% { transform : translateX(0%);\t} 100% { transform : translateX(100%);\t} }"), H(".style_swipe_left { animation: swipe_left 0.25s forwards; } "), H("@keyframes swipe_left { 0% { transform : translateX(100%);\t} 100% { transform : translateX(0%);\t} }"), H(".style_swipe_left_out { animation: swipe_left_out 0.25s forwards; } "), H("@keyframes swipe_left_out { 0% { transform : translateX(0%);\t} 100% { transform : translateX(-100%);\t} }"),
            H(".style_slide_out { animation: slide_out 0.25s forwards; } "), H("@keyframes slide_out { 0% { transform : translateX(0%);\t} 100% { transform : translateX(100%);\t} }")), b = R.b, z ? (b.Yi = .11, b.Zi = .35, b.qh = .16, b.sn = 15, b.Rk = .45) : (b.Yi = .17, b.Zi = .45, b.qh = .24, b.sn = 15, b.Rk = .6));
    b = document.createElement("style");
    b.appendChild(document.createTextNode(""));
    document.head.appendChild(b);
    ds = b.sheet;
    Hr = ds.cssRules || ds.rules;
    for (b = 0; 54 > b; b++) es(".style_anim_" + b + " { animation: anim_" + b + " 400ms forwards; animation-timing-function: ease-in-out; } "),
        wo.push(es("@keyframes anim_" + b + " { 0% { } }"));
    es(".style_anim_community_card { animation: anim_community_card 0.2s forwards; } ");
    es("@keyframes anim_community_card { 0% { opacity: 0; } 100% { opacity: 1; } }");
    es(".style_anim_zoom { animation: anim_zoom 0.2s forwards; } ");
    es("@keyframes anim_zoom { 0% { transform: scale(0); } 100% { transform: scale(1); } }");
    es(".style_chat_fade { animation: chat_fade 0.5s forwards; } ");
    es("@keyframes chat_fade { 0% { opacity:1; } 100% { opacity: 0; } }");
    ym &&
        ym.skin && (R.gb = ym.skin);
    z ? (Y = new st, X.G = Zu(), rp()) : (Y = new Wt, X.G = Zu());
    b = 0;
    (d = rc("active_category")) && !isNaN(d) && (b = ub(parseInt(d), 0, 2));
    Y.Uf.bind(Y.s[b])();
    Ps();
    $s(Y);
    at(Y);
    bt(Y);
    Qs(Y);
    Ws(Y);
    Xs(Y);
    Ys(Y);
    Us(Y);
    b = br = new Gu;
    d = av;
    b.s = a;
    b.G = c;
    b.K = d;
    br.ck();
    setTimeout(iv, 5E3);
    fv || (a = X, c = dc(), D(c, "style_1em_spacer"), b = D(c, "style_lang_flag"), b.Mj = mt(), b.addEventListener("click", Lb), cs(b), X.ub = b, a.b = c);
    z || (X.aa = Uu());
    X.b && (a = rc("client_user_id"), c = rc("client_password_hash"), m(a) || (X.b.Ge.value = a), m(c) || (X.b.$d.value =
        "########"), a = rc("client_save_credentials"), X.b.Ih.checked = !m(a) && "true" == a, X.b.style.display = "flex", z || X.b.Ge.focus());
    Yu();
    a = !0;
    void 0 != ym.service_worker && (a = ym.service_worker);
    a && "serviceWorker" in navigator && navigator.serviceWorker.register("./client_sw.js");
    Iq();
    z && (Y.Gc.value = R.b.lb)
};

function $u(a) {
    Aq(a.currentTarget.Jc);
    Y.b.Wd.src = Bq(R.ea);
    Qb.bind(this)()
}

function Aq(a) {
    R.ea = a;
    S((new Vl(R.f, a)).J());
    var b = R.fb.ng.get(R.f);
    null != b && (b.Jc = a, z || er({
        command_type: Ga,
        image_id: a
    }))
}

function nv(a, b) {
    void 0 != R.aa.get(a) && (!R.N || R.N.closed ? (ev = a, "file:" == window.location.protocol ? (a = window.location.href, a = a.slice(0, a.lastIndexOf("/")), a += "/replayer_dev.html") : a = window.location.origin + "/replayer.html", R.N = window.open(a, "_blank", "menubar=no, toolbar=no, personalbar=no, resizable=yes, height=550, width=800")) : (b.source.postMessage({
        command_type: cb,
        window_id: "pkr_r_" + R.sb
    }, "*"), ov(a)), R.N.focus())
}

function ep(a) {
    var b = sl(a);
    if (b && b.o) {
        var c = b.o.v,
            d = c,
            e = null;
        R.i.forEach(function(f) {
            if (f.o && f.o.Vi == b.o.Vi && !Zj(b.o.h, f.o.h)) {
                var h = pp.get(f.o.h.Fa);
                h && (h = c - h.A.Ua.bb, 0 < h && (!e || h < d) && (d = h, e = f.o.h))
            }
        });
        e && Y.Ob(e)
    }
}

function kv(a) {
    var b = Object.prototype.toString.call(a.data).slice(8, -1);
    if ("Object" == b) {
        var c = a.data;
        b = c.command_type;
        switch (b) {
            case eb:
                ep(Xj(c.table_id));
                break;
            case Pa:
                a = c.seat;
                b = Xj(c.table_id);
                Y.Ob(b, a);
                break;
            case cb:
                b = c.table_id;
                c = new Tj;
                Uj(c, b);
                Y.Ob(c, -1) || a.source.postMessage({
                    command_type: cb,
                    window_id: "pkr_t_" + R.sb + "_" + b
                }, "*");
                break;
            case Oa:
                "flex" == X.B.m.style.display && Qb.bind(X.B.m)();
                b = {
                    command_type: Oa
                };
                er(b);
                break;
            case Ja:
                $r(R);
                cs(X.K);
                Iq();
                er(a.data);
                po();
                break;
            case Ga:
                er(a.data);
                break;
            case Na:
                br.b.close();
                break;
            case Qa:
                nv(c.game_id, a);
                break;
            case Ra:
                ov(parseInt(c.game_id));
                break;
            case Ya:
            case Za:
                a = c.table_id;
                if (a = b == Ya ? R.fk.bind(R)(a) : R.gk.bind(R)(a)) a.command_type = Sa, R.N.postMessage(a, "*");
                break;
            case Xa:
            case Wa:
                a = parseInt(c.game_id);
                var d = parseInt(c.index);
                c = c.table_id;
                if (a = b == Xa ? R.ik.bind(R)(a, d, c) : R.hk.bind(R)(a, d, c)) a.command_type = Sa, R.N.postMessage(a, "*");
                break;
            case Ta:
                a = ba(R.U);
                for (b = a.next(); !b.done; b = a.next()) Y.Ki(b.value);
                break;
            case Ha:
                a = screen.availWidth;
                b = screen.availHeight;
                c = R.G.size;
                d = 790 / 648;
                for (var e = [0, 0], f = new fb, h = 1; h <= c; h++) {
                    var n = Math.ceil(c / h),
                        p = a / n,
                        q = 1 / d * p;
                    q * h > b && (q = b / h, p = q * d);
                    p > f.M && (f.M = p, f.ba = q, e[0] = h, e[1] = n)
                }
                var u = (a - f.M * e[1]) / 2,
                    w = (b - f.ba * e[0]) / 2,
                    x = 0;
                R.G.forEach(function(I) {
                    var J = {
                        command_type: Ia,
                        x: u + x % e[1] * f.M,
                        y: w + Math.floor(x / e[1]) * f.ba,
                        width: f.M,
                        height: f.ba
                    };
                    x++;
                    I.postMessage(J, "*")
                });
                break;
            case Ma:
                R.na = c.user_id;
                R.ma = c.password_hash;
                a = new Rl;
                a.G = 0;
                a.K = R.gb;
                a.Yc = R.na;
                a.c = z ? 1 : 0;
                a.i = R.ma;
                a.B = Iu();
                a.s = !1;
                1 == br.b.readyState ? (Ju = null, S(a.J())) : Ju = a;
                break;
            case La:
                Lu && (Lu = !1, b = {
                    command_type: Ma,
                    password_hash: R.ma,
                    user_id: R.na
                }, a.source.postMessage(b, "*"));
                break;
            case $a:
                a.source.postMessage({
                    command_type: Ma,
                    password_hash: R.ma,
                    user_id: R.na
                }, "*");
                break;
            case Va:
                0 < ev && ov(ev);
                ev = 0;
                break;
            case bb:
                0 != R.f && a.source.postMessage({
                    command_type: Ga,
                    user_id: R.f,
                    balance_usd: R.Ub,
                    instance_id: R.sb
                }, "*");
                break;
            case Ca:
                c = c.token;
                if (b = Y.Va.get(c)) Y.Va.delete(c), b = {
                    command_type: Aa,
                    user_id: R.f,
                    user: R.he,
                    online: R.Ca,
                    offset_seconds: R.vb,
                    table_id: c,
                    seat: b.Ad,
                    chinese_table: !1,
                    instance_id: R.sb
                }, c = Xj(c), (d = sl(c)) && d.o && (rj(d.o.S) || uj(d.o.S)) && (b.chinese_table = !0), a.source.postMessage(b, "*"), 0 != R.f && a.source.postMessage({
                    command_type: Ga,
                    token: {
                        user: R.he,
                        user_id: R.f,
                        image_id: R.ea
                    },
                    balance_usd: R.Ub
                }, "*"), Wj(c) && (b = Cr(c.H)) && a.source.postMessage(b, "*");
                break;
            case Ba:
                a = c.table_id, (b = R.i.get(a)) && b.C && (b.C.g = null), R.G.delete(a), po()
        }
    } else "ArrayBuffer" == b && br.b.send(a.data)
}

function ov(a) {
    var b = R.aa.get(a);
    if (void 0 != b) {
        b = R.U[b];
        var c = {
                command_type: Sa,
                user_id: R.f,
                instance_id: R.sb,
                data: b,
                index: 0,
                hands: 0,
                table_id: "",
                game_id: a
            },
            d = R.ja.get(b.Mc);
        if (d)
            for (var e = 0; e < d.mb.length; e++) d.mb[e] == a && (c.hands = d.mb.length, c.index = e, c.table_id = b.Mc);
        R.N.postMessage(c, "*")
    }
}
var Y = null,
    U = null,
    R = null,
    X = null;

function lv(a) {
    if (0 != R.f && !R.jc && !z) return a.returnValue = "Dialog text here"
}

function mv() {
    Xu()
};
var pv = !1;

function xp(a, b, c) {
    var d = this;
    pv || (H(".style_thumb_grip {\n//\t\tmargin: 0px 5px;\n\t\tborder-top: 1px solid whitesmoke;\n\t\tbox-sizing: border-box;\n\t} "), H(".m_slider_thumb {\n\t\t\twidth: 40px;\n\t\t\ttop: 100%;\n\t\t\tbackground-color: grey;\n\t\t    border-radius: 5px;\n\t\t\tpadding: 7px 5px;\n\t\t\tposition: absolute;\n\t\t\theight: 24px;\n\t\t\ttransform: translateY(-50%);\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tbox-sizing: border-box;\n\t\t\tjustify-content: space-around;\n\t\t} "), H(".m_slider_track {\n\t\t\tdisplay: flex;\n\t\t    justify-content: center;\n\t\t\tposition: absolute;\n\t\t\theight: 80%;\n\t\t\ttop: 10%;\n\t\t\tbackground-color: orange;\n\t\t\tbackground-image: linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));\n\t\t    border-radius: 5px;\n\t\t\twidth: 14%;\n\t\t} "),
        H(".m_slider {\n\t\t\tdisplay: flex;\n\t\t\tposition: absolute;\n\t\t\tpadding: 15px 0px;\n\t\t\tbox-sizing: border-box;\n\t\t\tjustify-content: center;\n\t\t\tbackground: rgba(0,0,0,0.65);\n\t\t\tborder: 1px solid gray;\n\t\t    border-radius: 5px;\n\t} "), H(".slider_thumb {\n\t\t\tleft: 0%;\n\t\t    border-radius: 100%;\n\t\t\tbackground-color: slategrey;\n\t\t\tposition: absolute;\n\t\t\theight: 20px;\n\t\t\twidth: 20px;\n\t\t\ttransform: translateX(-50%);\n\t\t} "), H(".slider_track {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t    justify-content: center;\n\t\t\tposition: absolute;\n\t\t\theight: 20%;\n\t\t\twidth: 90%;\n\t\t\ttop: 40%;\n\t\t\tbackground-color: dimgrey;\n\t\t    border-radius: 5px;\n\t\t} "),
        H(".slider {\n\t\t\tdisplay: flex;\n\t\t\tposition: absolute;\n\t\t\tbox-sizing: border-box;\n\t\t\tjustify-content: center;\n\t\t\tbackground: none;\n\t\t\tborder: none;\n\t\t} "), pv = !0);
    this.yd = this.gc = this.Z = 0;
    this.B = 1;
    this.G = b;
    this.i = this.i = 1;
    if (this.c = c)
        for (this.Hc = D(a, "m_slider"), this.s = D(this.Hc, "m_slider_track"), this.b = D(this.s, "m_slider_thumb style_gradient"), a = [], b = 0; 3 > b; b++) a.push(D(this.b, "style_thumb_grip"));
    else this.Hc = D(a, "slider"), this.s = D(this.Hc, "slider_track style_gradient"), this.b =
        D(this.s, "slider_thumb style_heavy_gradient");
    z ? (this.b.addEventListener("touchstart", function(e) {
        e.preventDefault()
    }), this.b.addEventListener("touchend", function(e) {
        e.preventDefault()
    }), this.b.addEventListener("touchmove", this.N.bind(this)), this.b.addEventListener("click", this.L), this.Hc.addEventListener("click", this.K.bind(this))) : (this.Hc.addEventListener("wheel", function(e) {
        0 > e.deltaY ? Sp(d) : Tp(d)
    }), this.Hc.addEventListener("mousedown", this.K.bind(this)), this.b.addEventListener("mousedown", this.P.bind(this)))
}
xp.prototype.P = function(a) {
    a.currentTarget.getBoundingClientRect();
    a.stopPropagation()
};

function Uo(a, b, c, d, e) {
    a.gc = b;
    a.yd = c;
    a.B = d;
    ap(a, e);
    a.i = a.yd - a.gc;
    0 == a.i && (a.i = 1)
}
xp.prototype.L = function(a) {
    a.stopPropagation()
};

function ap(a, b) {
    b = ub(b, a.gc, a.yd);
    var c = (b - a.gc) / a.i;
    c *= 100;
    a.c ? a.b.style.top = 100 - c + "%" : a.b.style.left = c + "%";
    a.Z = b
}
xp.prototype.N = function(a) {
    a.preventDefault();
    if (1 == a.touches.length) {
        var b = this.s.getBoundingClientRect(),
            c = this.c ? b.bottom - b.top : b.right - b.left;
        0 != c && (a = a.touches[0], b = this.c ? (a.pageY - b.top) / c : (a.pageX - b.left) / c, this.c && (b = 1 - b), b = this.gc + b * this.i, this.Z = b = this.gc + this.B * Math.round((b - this.gc) / this.B), this.Z = ub(b, this.gc, this.yd), this.G(this.Z))
    }
};
xp.prototype.K = function(a) {
    var b = this.s.getBoundingClientRect(),
        c = this.c ? b.bottom - b.top : b.right - b.left;
    0 != c && (a = this.c ? (a.pageY - b.top) / c : (a.pageX - b.left) / c, this.c && (a = 1 - a), this.gc + a * this.i > this.Z ? Sp(this) : Tp(this))
};

function Sp(a) {
    a.Z += a.B;
    a.Z = ub(a.Z, a.gc, a.yd);
    a.G(a.Z)
}

function Tp(a) {
    a.Z -= a.B;
    a.Z = ub(a.Z, a.gc, a.yd);
    a.G(a.Z)
};

function Mt(a) {
    var b = R.f,
        c = new Mi(new ArrayBuffer(256));
    M(M(M(M(c, 0), lg), a), b);
    a = Qi(c);
    S(a)
}

function ps(a) {
    var b = y(a.Za, void 0);
    if (0 != a.Ya || 0 != a.ra) b += " (" + y(a.Za, void 0), 0 != a.ra && (b += " + " + y(a.ra, void 0)), 0 != a.Ya && (b += " + " + y(a.Ya, void 0)), b += ")";
    return b
}

function qv(a) {
    return 2 == a ? "Heads Up" : 6 >= a ? a + "-max" : "Full Ring (" + a + "-Handed)"
}

function rv(a) {
    switch (a) {
        case df:
            return "Sit and Go";
        case ff:
            return "Regular";
        case lf:
            return "On Demand"
    }
    return ""
}

function sv(a) {
    var b = a.Za + a.Ya;
    a.Ah || (b += a.ra);
    if (0 == b) return "Freeroll";
    var c = y(b, void 0);
    a.Za != b && (c += " (" + y(a.Za, void 0), 0 == a.ra || a.Ah || (c += " + " + y(a.ra, void 0) + " Bounty"), 0 != a.Ya && (c += " + " + y(a.Ya, void 0) + " Entry Fee"), c += ")");
    return c
}

function tv(a) {
    return 0 == a ? "None" : 1 == a ? "1 Level" : a + " Levels"
}

function rq(a, b, c) {
    var d = [],
        e = [];
    d.push("Status:");
    e.push(Bd[b.Ia]);
    var f = "",
        h = "";
    0 < a.ra && (0 < a.Fj ? (f = "Progressive Bounty:", h = "There is a bounty of " + y(a.ra, void 0) + " on each player. Knockouts pay " + (100 - a.Fj) + "% of this, with " + a.Fj + "% being added to the winning player bounty") : (f = "Bounty:", h = "Knockouts pay a " + y(a.ra, void 0) + " bounty"));
    var n = "";
    if (c) {
        var p = -1,
            q = !1;
        c.forEach(function(w) {
            -1 == p ? p = w.Ff : p != w.Ff && (q = !0)
        });
        n = q ? "Variable" : p / 60 + " mins per level"
    }
    switch (b.Ia) {
        case sd:
        case ud:
        case td:
            d.push("Game Type:");
            e.push(yk(a.X));
            d.push("Seats:");
            e.push(qv(a.On));
            b = rv(a.Lc);
            a.hl && (b = "Shootout");
            d.push("Type:");
            e.push(b);
            d.push("Buy In:");
            e.push(sv(a));
            m(f) || (d.push(f), e.push(h));
            d.push("Starting Stack:");
            e.push(y(a.Sh, !0));
            d.push("Late Registration:");
            e.push(tv(a.Bl));
            d.push("Re-entries:");
            f = "";
            f = a.Dh ? 0 == a.Dl ? "Unlimited" : "Max " + a.Dl + " re-entries" : "None";
            e.push(f);
            d.push("Speed:");
            e.push(n);
            d.push("Breaks:");
            e.push(a.el ? "None" : "5 mins before the hour");
            break;
        case xd:
            d.push("Started:");
            e.push(mc(nc(b.mg)));
            d.push("Ended:");
            e.push(mc(nc(b.xn)));
            break;
        case vd:
        case wd:
            d.push("Started:");
            e.push(mc(nc(b.mg)));
            d.push("Current Level " + (b.Df + 1) + ":");
            e.push(nk(Bk, b.od.O, !1, !0));
            var u = "None";
            0 < b.Lh && (c && c.length >= b.Df + 1 ? u = nk(Bk, c[b.Df + 1].O, !1, !0) : u = "?", u += " in ", u = 60 > b.Lh ? u + "< 1 min" : 120 > b.Lh ? u + "1 min" : u + (Math.floor(b.Lh / 60) + " mins"));
            d.push("Next Level:");
            e.push(u);
            d.push("Entrants:");
            e.push(b.kb + ", currently " + b.zd + " players on " + b.eo + " tables");
            d.push("Buy In:");
            e.push(sv(a));
            m(f) || (d.push(f), e.push(h));
            d.push("Starting Stack:");
            e.push(y(a.Sh, !0));
            d.push("Late Registration:");
            e.push(tv(a.Bl));
            d.push("Re-entry Allowed:");
            e.push(a.Dh ? "Yes" : "No");
            d.push("Speed:");
            e.push(n);
            d.push("Breaks:");
            e.push(a.el ? "None" : "5 mins before the hour")
    }
    return [d, e]
}

function tq(a, b) {
    a = a.A;
    b = b.A;
    return 0 == a.T && 0 == b.T ? vc(a.Bj, b.Bj, !0) : a.T == b.T ? vc(a.f, b.f, !0) : vc(a.T, b.T, !0)
};