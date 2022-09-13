/**
 * /*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 * -----------------------------------------------------------------------------
 *
 * @format
 */

define('vs/language/json/jsonMode', ['require', 'require'], (require) => {
  var moduleExports = (() => {
    var Tn = Object.create;
    var X = Object.defineProperty;
    var bn = Object.getOwnPropertyDescriptor;
    var Cn = Object.getOwnPropertyNames;
    var wn = Object.getPrototypeOf,
      In = Object.prototype.hasOwnProperty;
    var Te = (e) =>
      X(e, '__esModule', {
        value: !0
      });
    var xn = ((e) =>
      typeof require != 'undefined'
        ? require
        : typeof Proxy != 'undefined'
        ? new Proxy(e, {
            get: (t, i) => (typeof require != 'undefined' ? require : t)[i]
          })
        : e)(function (e) {
      if (typeof require != 'undefined') return require.apply(this, arguments);
      throw new Error('Dynamic require of "' + e + '" is not supported');
    });
    var En = (e, t) => () => (
        t ||
          e(
            (t = {
              exports: {}
            }).exports,
            t
          ),
        t.exports
      ),
      _n = (e, t) => {
        for (var i in t)
          X(e, i, {
            get: t[i],
            enumerable: !0
          });
      },
      Y = (e, t, i, r) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let n of Cn(t))
            !In.call(e, n) &&
              (i || n !== 'default') &&
              X(e, n, {
                get: () => t[n],
                enumerable: !(r = bn(t, n)) || r.enumerable
              });
        return e;
      },
      be = (e, t) =>
        Y(
          Te(
            X(
              e != null ? Tn(wn(e)) : {},
              'default',
              !t && e && e.__esModule
                ? {
                    get: () => e.default,
                    enumerable: !0
                  }
                : {
                    value: e,
                    enumerable: !0
                  }
            )
          ),
          e
        ),
      An = (
        (e) => (t, i) =>
          (e && e.get(t)) || ((i = Y(Te({}), t, 1)), e && e.set(t, i), i)
      )(typeof WeakMap != 'undefined' ? new WeakMap() : 0);
    var we = En((gr, Ce) => {
      var Pn = be(xn('vs/editor/editor.api'));
      Ce.exports = Pn;
    });
    var dr = {};
    _n(dr, {
      CompletionAdapter: () => ie,
      DefinitionAdapter: () => tn,
      DiagnosticsAdapter: () => te,
      DocumentColorAdapter: () => ce,
      DocumentFormattingEditProvider: () => se,
      DocumentHighlightAdapter: () => rn,
      DocumentLinkAdapter: () => un,
      DocumentRangeFormattingEditProvider: () => ue,
      DocumentSymbolAdapter: () => oe,
      FoldingRangeAdapter: () => le,
      HoverAdapter: () => ae,
      ReferenceAdapter: () => on,
      RenameAdapter: () => sn,
      SelectionRangeAdapter: () => de,
      WorkerManager: () => V,
      fromPosition: () => S,
      fromRange: () => ke,
      setupMode: () => cr,
      toRange: () => C,
      toTextEdit: () => M
    });
    var l = {};
    Y(l, be(we()));
    var Sn = 2 * 60 * 1e3,
      V = class {
        _defaults;
        _idleCheckInterval;
        _lastUsedTime;
        _configChangeListener;
        _worker;
        _client;
        constructor(t) {
          (this._defaults = t),
            (this._worker = null),
            (this._client = null),
            (this._idleCheckInterval = window.setInterval(
              () => this._checkIfIdle(),
              30 * 1e3
            )),
            (this._lastUsedTime = 0),
            (this._configChangeListener = this._defaults.onDidChange(() =>
              this._stopWorker()
            ));
        }
        _stopWorker() {
          this._worker && (this._worker.dispose(), (this._worker = null)),
            (this._client = null);
        }
        dispose() {
          clearInterval(this._idleCheckInterval),
            this._configChangeListener.dispose(),
            this._stopWorker();
        }
        _checkIfIdle() {
          if (!this._worker) return;
          Date.now() - this._lastUsedTime > Sn && this._stopWorker();
        }
        _getClient() {
          return (
            (this._lastUsedTime = Date.now()),
            this._client ||
              ((this._worker = l.editor.createWebWorker({
                moduleId: 'vs/language/json/jsonWorker',
                label: this._defaults.languageId,
                createData: {
                  languageSettings: this._defaults.diagnosticsOptions,
                  languageId: this._defaults.languageId,
                  enableSchemaRequest:
                    this._defaults.diagnosticsOptions.enableSchemaRequest
                }
              })),
              (this._client = this._worker.getProxy())),
            this._client
          );
        }
        getLanguageServiceWorker(...t) {
          let i;
          return this._getClient()
            .then((r) => {
              i = r;
            })
            .then((r) => {
              if (this._worker) return this._worker.withSyncedResources(t);
            })
            .then((r) => i);
        }
      };
    var Ie;
    (function (e) {
      (e.MIN_VALUE = -2147483648), (e.MAX_VALUE = 2147483647);
    })(Ie || (Ie = {}));
    var G;
    (function (e) {
      (e.MIN_VALUE = 0), (e.MAX_VALUE = 2147483647);
    })(G || (G = {}));
    var _;
    (function (e) {
      function t(r, n) {
        return (
          r === Number.MAX_VALUE && (r = G.MAX_VALUE),
          n === Number.MAX_VALUE && (n = G.MAX_VALUE),
          {
            line: r,
            character: n
          }
        );
      }
      e.create = t;
      function i(r) {
        var n = r;
        return (
          s.objectLiteral(n) && s.uinteger(n.line) && s.uinteger(n.character)
        );
      }
      e.is = i;
    })(_ || (_ = {}));
    var k;
    (function (e) {
      function t(r, n, a, o) {
        if (s.uinteger(r) && s.uinteger(n) && s.uinteger(a) && s.uinteger(o))
          return {
            start: _.create(r, n),
            end: _.create(a, o)
          };
        if (_.is(r) && _.is(n))
          return {
            start: r,
            end: n
          };
        throw new Error(
          'Range#create called with invalid arguments[' +
            r +
            ', ' +
            n +
            ', ' +
            a +
            ', ' +
            o +
            ']'
        );
      }
      e.create = t;
      function i(r) {
        var n = r;
        return s.objectLiteral(n) && _.is(n.start) && _.is(n.end);
      }
      e.is = i;
    })(k || (k = {}));
    var ge;
    (function (e) {
      function t(r, n) {
        return {
          uri: r,
          range: n
        };
      }
      e.create = t;
      function i(r) {
        var n = r;
        return (
          s.defined(n) &&
          k.is(n.range) &&
          (s.string(n.uri) || s.undefined(n.uri))
        );
      }
      e.is = i;
    })(ge || (ge = {}));
    var xe;
    (function (e) {
      function t(r, n, a, o) {
        return {
          targetUri: r,
          targetRange: n,
          targetSelectionRange: a,
          originSelectionRange: o
        };
      }
      e.create = t;
      function i(r) {
        var n = r;
        return (
          s.defined(n) &&
          k.is(n.targetRange) &&
          s.string(n.targetUri) &&
          (k.is(n.targetSelectionRange) ||
            s.undefined(n.targetSelectionRange)) &&
          (k.is(n.originSelectionRange) || s.undefined(n.originSelectionRange))
        );
      }
      e.is = i;
    })(xe || (xe = {}));
    var pe;
    (function (e) {
      function t(r, n, a, o) {
        return {
          red: r,
          green: n,
          blue: a,
          alpha: o
        };
      }
      e.create = t;
      function i(r) {
        var n = r;
        return (
          s.numberRange(n.red, 0, 1) &&
          s.numberRange(n.green, 0, 1) &&
          s.numberRange(n.blue, 0, 1) &&
          s.numberRange(n.alpha, 0, 1)
        );
      }
      e.is = i;
    })(pe || (pe = {}));
    var Ee;
    (function (e) {
      function t(r, n) {
        return {
          range: r,
          color: n
        };
      }
      e.create = t;
      function i(r) {
        var n = r;
        return k.is(n.range) && pe.is(n.color);
      }
      e.is = i;
    })(Ee || (Ee = {}));
    var _e;
    (function (e) {
      function t(r, n, a) {
        return {
          label: r,
          textEdit: n,
          additionalTextEdits: a
        };
      }
      e.create = t;
      function i(r) {
        var n = r;
        return (
          s.string(n.label) &&
          (s.undefined(n.textEdit) || P.is(n)) &&
          (s.undefined(n.additionalTextEdits) ||
            s.typedArray(n.additionalTextEdits, P.is))
        );
      }
      e.is = i;
    })(_e || (_e = {}));
    var D;
    (function (e) {
      (e.Comment = 'comment'), (e.Imports = 'imports'), (e.Region = 'region');
    })(D || (D = {}));
    var Ae;
    (function (e) {
      function t(r, n, a, o, u) {
        var c = {
          startLine: r,
          endLine: n
        };
        return (
          s.defined(a) && (c.startCharacter = a),
          s.defined(o) && (c.endCharacter = o),
          s.defined(u) && (c.kind = u),
          c
        );
      }
      e.create = t;
      function i(r) {
        var n = r;
        return (
          s.uinteger(n.startLine) &&
          s.uinteger(n.startLine) &&
          (s.undefined(n.startCharacter) || s.uinteger(n.startCharacter)) &&
          (s.undefined(n.endCharacter) || s.uinteger(n.endCharacter)) &&
          (s.undefined(n.kind) || s.string(n.kind))
        );
      }
      e.is = i;
    })(Ae || (Ae = {}));
    var he;
    (function (e) {
      function t(r, n) {
        return {
          location: r,
          message: n
        };
      }
      e.create = t;
      function i(r) {
        var n = r;
        return s.defined(n) && ge.is(n.location) && s.string(n.message);
      }
      e.is = i;
    })(he || (he = {}));
    var O;
    (function (e) {
      (e.Error = 1), (e.Warning = 2), (e.Information = 3), (e.Hint = 4);
    })(O || (O = {}));
    var Pe;
    (function (e) {
      (e.Unnecessary = 1), (e.Deprecated = 2);
    })(Pe || (Pe = {}));
    var Se;
    (function (e) {
      function t(i) {
        var r = i;
        return r != null && s.string(r.href);
      }
      e.is = t;
    })(Se || (Se = {}));
    var Q;
    (function (e) {
      function t(r, n, a, o, u, c) {
        var h = {
          range: r,
          message: n
        };
        return (
          s.defined(a) && (h.severity = a),
          s.defined(o) && (h.code = o),
          s.defined(u) && (h.source = u),
          s.defined(c) && (h.relatedInformation = c),
          h
        );
      }
      e.create = t;
      function i(r) {
        var n,
          a = r;
        return (
          s.defined(a) &&
          k.is(a.range) &&
          s.string(a.message) &&
          (s.number(a.severity) || s.undefined(a.severity)) &&
          (s.integer(a.code) || s.string(a.code) || s.undefined(a.code)) &&
          (s.undefined(a.codeDescription) ||
            s.string(
              (n = a.codeDescription) === null || n === void 0 ? void 0 : n.href
            )) &&
          (s.string(a.source) || s.undefined(a.source)) &&
          (s.undefined(a.relatedInformation) ||
            s.typedArray(a.relatedInformation, he.is))
        );
      }
      e.is = i;
    })(Q || (Q = {}));
    var K;
    (function (e) {
      function t(r, n) {
        for (var a = [], o = 2; o < arguments.length; o++)
          a[o - 2] = arguments[o];
        var u = {
          title: r,
          command: n
        };
        return s.defined(a) && a.length > 0 && (u.arguments = a), u;
      }
      e.create = t;
      function i(r) {
        var n = r;
        return s.defined(n) && s.string(n.title) && s.string(n.command);
      }
      e.is = i;
    })(K || (K = {}));
    var P;
    (function (e) {
      function t(a, o) {
        return {
          range: a,
          newText: o
        };
      }
      e.replace = t;
      function i(a, o) {
        return {
          range: {
            start: a,
            end: a
          },
          newText: o
        };
      }
      e.insert = i;
      function r(a) {
        return {
          range: a,
          newText: ''
        };
      }
      e.del = r;
      function n(a) {
        var o = a;
        return s.objectLiteral(o) && s.string(o.newText) && k.is(o.range);
      }
      e.is = n;
    })(P || (P = {}));
    var W;
    (function (e) {
      function t(r, n, a) {
        var o = {
          label: r
        };
        return (
          n !== void 0 && (o.needsConfirmation = n),
          a !== void 0 && (o.description = a),
          o
        );
      }
      e.create = t;
      function i(r) {
        var n = r;
        return (
          n !== void 0 &&
          s.objectLiteral(n) &&
          s.string(n.label) &&
          (s.boolean(n.needsConfirmation) || n.needsConfirmation === void 0) &&
          (s.string(n.description) || n.description === void 0)
        );
      }
      e.is = i;
    })(W || (W = {}));
    var T;
    (function (e) {
      function t(i) {
        var r = i;
        return typeof r == 'string';
      }
      e.is = t;
    })(T || (T = {}));
    var A;
    (function (e) {
      function t(a, o, u) {
        return {
          range: a,
          newText: o,
          annotationId: u
        };
      }
      e.replace = t;
      function i(a, o, u) {
        return {
          range: {
            start: a,
            end: a
          },
          newText: o,
          annotationId: u
        };
      }
      e.insert = i;
      function r(a, o) {
        return {
          range: a,
          newText: '',
          annotationId: o
        };
      }
      e.del = r;
      function n(a) {
        var o = a;
        return P.is(o) && (W.is(o.annotationId) || T.is(o.annotationId));
      }
      e.is = n;
    })(A || (A = {}));
    var Z;
    (function (e) {
      function t(r, n) {
        return {
          textDocument: r,
          edits: n
        };
      }
      e.create = t;
      function i(r) {
        var n = r;
        return s.defined(n) && ee.is(n.textDocument) && Array.isArray(n.edits);
      }
      e.is = i;
    })(Z || (Z = {}));
    var H;
    (function (e) {
      function t(r, n, a) {
        var o = {
          kind: 'create',
          uri: r
        };
        return (
          n !== void 0 &&
            (n.overwrite !== void 0 || n.ignoreIfExists !== void 0) &&
            (o.options = n),
          a !== void 0 && (o.annotationId = a),
          o
        );
      }
      e.create = t;
      function i(r) {
        var n = r;
        return (
          n &&
          n.kind === 'create' &&
          s.string(n.uri) &&
          (n.options === void 0 ||
            ((n.options.overwrite === void 0 ||
              s.boolean(n.options.overwrite)) &&
              (n.options.ignoreIfExists === void 0 ||
                s.boolean(n.options.ignoreIfExists)))) &&
          (n.annotationId === void 0 || T.is(n.annotationId))
        );
      }
      e.is = i;
    })(H || (H = {}));
    var J;
    (function (e) {
      function t(r, n, a, o) {
        var u = {
          kind: 'rename',
          oldUri: r,
          newUri: n
        };
        return (
          a !== void 0 &&
            (a.overwrite !== void 0 || a.ignoreIfExists !== void 0) &&
            (u.options = a),
          o !== void 0 && (u.annotationId = o),
          u
        );
      }
      e.create = t;
      function i(r) {
        var n = r;
        return (
          n &&
          n.kind === 'rename' &&
          s.string(n.oldUri) &&
          s.string(n.newUri) &&
          (n.options === void 0 ||
            ((n.options.overwrite === void 0 ||
              s.boolean(n.options.overwrite)) &&
              (n.options.ignoreIfExists === void 0 ||
                s.boolean(n.options.ignoreIfExists)))) &&
          (n.annotationId === void 0 || T.is(n.annotationId))
        );
      }
      e.is = i;
    })(J || (J = {}));
    var B;
    (function (e) {
      function t(r, n, a) {
        var o = {
          kind: 'delete',
          uri: r
        };
        return (
          n !== void 0 &&
            (n.recursive !== void 0 || n.ignoreIfNotExists !== void 0) &&
            (o.options = n),
          a !== void 0 && (o.annotationId = a),
          o
        );
      }
      e.create = t;
      function i(r) {
        var n = r;
        return (
          n &&
          n.kind === 'delete' &&
          s.string(n.uri) &&
          (n.options === void 0 ||
            ((n.options.recursive === void 0 ||
              s.boolean(n.options.recursive)) &&
              (n.options.ignoreIfNotExists === void 0 ||
                s.boolean(n.options.ignoreIfNotExists)))) &&
          (n.annotationId === void 0 || T.is(n.annotationId))
        );
      }
      e.is = i;
    })(B || (B = {}));
    var me;
    (function (e) {
      function t(i) {
        var r = i;
        return (
          r &&
          (r.changes !== void 0 || r.documentChanges !== void 0) &&
          (r.documentChanges === void 0 ||
            r.documentChanges.every(function (n) {
              return s.string(n.kind) ? H.is(n) || J.is(n) || B.is(n) : Z.is(n);
            }))
        );
      }
      e.is = t;
    })(me || (me = {}));
    var $ = (function () {
        function e(t, i) {
          (this.edits = t), (this.changeAnnotations = i);
        }
        return (
          (e.prototype.insert = function (t, i, r) {
            var n, a;
            if (
              (r === void 0
                ? (n = P.insert(t, i))
                : T.is(r)
                ? ((a = r), (n = A.insert(t, i, r)))
                : (this.assertChangeAnnotations(this.changeAnnotations),
                  (a = this.changeAnnotations.manage(r)),
                  (n = A.insert(t, i, a))),
              this.edits.push(n),
              a !== void 0)
            )
              return a;
          }),
          (e.prototype.replace = function (t, i, r) {
            var n, a;
            if (
              (r === void 0
                ? (n = P.replace(t, i))
                : T.is(r)
                ? ((a = r), (n = A.replace(t, i, r)))
                : (this.assertChangeAnnotations(this.changeAnnotations),
                  (a = this.changeAnnotations.manage(r)),
                  (n = A.replace(t, i, a))),
              this.edits.push(n),
              a !== void 0)
            )
              return a;
          }),
          (e.prototype.delete = function (t, i) {
            var r, n;
            if (
              (i === void 0
                ? (r = P.del(t))
                : T.is(i)
                ? ((n = i), (r = A.del(t, i)))
                : (this.assertChangeAnnotations(this.changeAnnotations),
                  (n = this.changeAnnotations.manage(i)),
                  (r = A.del(t, n))),
              this.edits.push(r),
              n !== void 0)
            )
              return n;
          }),
          (e.prototype.add = function (t) {
            this.edits.push(t);
          }),
          (e.prototype.all = function () {
            return this.edits;
          }),
          (e.prototype.clear = function () {
            this.edits.splice(0, this.edits.length);
          }),
          (e.prototype.assertChangeAnnotations = function (t) {
            if (t === void 0)
              throw new Error(
                'Text edit change is not configured to manage change annotations.'
              );
          }),
          e
        );
      })(),
      Le = (function () {
        function e(t) {
          (this._annotations = t === void 0 ? Object.create(null) : t),
            (this._counter = 0),
            (this._size = 0);
        }
        return (
          (e.prototype.all = function () {
            return this._annotations;
          }),
          Object.defineProperty(e.prototype, 'size', {
            get: function () {
              return this._size;
            },
            enumerable: !1,
            configurable: !0
          }),
          (e.prototype.manage = function (t, i) {
            var r;
            if (
              (T.is(t) ? (r = t) : ((r = this.nextId()), (i = t)),
              this._annotations[r] !== void 0)
            )
              throw new Error('Id ' + r + ' is already in use.');
            if (i === void 0)
              throw new Error('No annotation provided for id ' + r);
            return (this._annotations[r] = i), this._size++, r;
          }),
          (e.prototype.nextId = function () {
            return this._counter++, this._counter.toString();
          }),
          e
        );
      })(),
      yr = (function () {
        function e(t) {
          var i = this;
          (this._textEditChanges = Object.create(null)),
            t !== void 0
              ? ((this._workspaceEdit = t),
                t.documentChanges
                  ? ((this._changeAnnotations = new Le(t.changeAnnotations)),
                    (t.changeAnnotations = this._changeAnnotations.all()),
                    t.documentChanges.forEach(function (r) {
                      if (Z.is(r)) {
                        var n = new $(r.edits, i._changeAnnotations);
                        i._textEditChanges[r.textDocument.uri] = n;
                      }
                    }))
                  : t.changes &&
                    Object.keys(t.changes).forEach(function (r) {
                      var n = new $(t.changes[r]);
                      i._textEditChanges[r] = n;
                    }))
              : (this._workspaceEdit = {});
        }
        return (
          Object.defineProperty(e.prototype, 'edit', {
            get: function () {
              return (
                this.initDocumentChanges(),
                this._changeAnnotations !== void 0 &&
                  (this._changeAnnotations.size === 0
                    ? (this._workspaceEdit.changeAnnotations = void 0)
                    : (this._workspaceEdit.changeAnnotations =
                        this._changeAnnotations.all())),
                this._workspaceEdit
              );
            },
            enumerable: !1,
            configurable: !0
          }),
          (e.prototype.getTextEditChange = function (t) {
            if (ee.is(t)) {
              if (
                (this.initDocumentChanges(),
                this._workspaceEdit.documentChanges === void 0)
              )
                throw new Error(
                  'Workspace edit is not configured for document changes.'
                );
              var i = {
                  uri: t.uri,
                  version: t.version
                },
                r = this._textEditChanges[i.uri];
              if (!r) {
                var n = [],
                  a = {
                    textDocument: i,
                    edits: n
                  };
                this._workspaceEdit.documentChanges.push(a),
                  (r = new $(n, this._changeAnnotations)),
                  (this._textEditChanges[i.uri] = r);
              }
              return r;
            } else {
              if ((this.initChanges(), this._workspaceEdit.changes === void 0))
                throw new Error(
                  'Workspace edit is not configured for normal text edit changes.'
                );
              var r = this._textEditChanges[t];
              if (!r) {
                var n = [];
                (this._workspaceEdit.changes[t] = n),
                  (r = new $(n)),
                  (this._textEditChanges[t] = r);
              }
              return r;
            }
          }),
          (e.prototype.initDocumentChanges = function () {
            this._workspaceEdit.documentChanges === void 0 &&
              this._workspaceEdit.changes === void 0 &&
              ((this._changeAnnotations = new Le()),
              (this._workspaceEdit.documentChanges = []),
              (this._workspaceEdit.changeAnnotations =
                this._changeAnnotations.all()));
          }),
          (e.prototype.initChanges = function () {
            this._workspaceEdit.documentChanges === void 0 &&
              this._workspaceEdit.changes === void 0 &&
              (this._workspaceEdit.changes = Object.create(null));
          }),
          (e.prototype.createFile = function (t, i, r) {
            if (
              (this.initDocumentChanges(),
              this._workspaceEdit.documentChanges === void 0)
            )
              throw new Error(
                'Workspace edit is not configured for document changes.'
              );
            var n;
            W.is(i) || T.is(i) ? (n = i) : (r = i);
            var a, o;
            if (
              (n === void 0
                ? (a = H.create(t, r))
                : ((o = T.is(n) ? n : this._changeAnnotations.manage(n)),
                  (a = H.create(t, r, o))),
              this._workspaceEdit.documentChanges.push(a),
              o !== void 0)
            )
              return o;
          }),
          (e.prototype.renameFile = function (t, i, r, n) {
            if (
              (this.initDocumentChanges(),
              this._workspaceEdit.documentChanges === void 0)
            )
              throw new Error(
                'Workspace edit is not configured for document changes.'
              );
            var a;
            W.is(r) || T.is(r) ? (a = r) : (n = r);
            var o, u;
            if (
              (a === void 0
                ? (o = J.create(t, i, n))
                : ((u = T.is(a) ? a : this._changeAnnotations.manage(a)),
                  (o = J.create(t, i, n, u))),
              this._workspaceEdit.documentChanges.push(o),
              u !== void 0)
            )
              return u;
          }),
          (e.prototype.deleteFile = function (t, i, r) {
            if (
              (this.initDocumentChanges(),
              this._workspaceEdit.documentChanges === void 0)
            )
              throw new Error(
                'Workspace edit is not configured for document changes.'
              );
            var n;
            W.is(i) || T.is(i) ? (n = i) : (r = i);
            var a, o;
            if (
              (n === void 0
                ? (a = B.create(t, r))
                : ((o = T.is(n) ? n : this._changeAnnotations.manage(n)),
                  (a = B.create(t, r, o))),
              this._workspaceEdit.documentChanges.push(a),
              o !== void 0)
            )
              return o;
          }),
          e
        );
      })();
    var Oe;
    (function (e) {
      function t(r) {
        return {
          uri: r
        };
      }
      e.create = t;
      function i(r) {
        var n = r;
        return s.defined(n) && s.string(n.uri);
      }
      e.is = i;
    })(Oe || (Oe = {}));
    var Re;
    (function (e) {
      function t(r, n) {
        return {
          uri: r,
          version: n
        };
      }
      e.create = t;
      function i(r) {
        var n = r;
        return s.defined(n) && s.string(n.uri) && s.integer(n.version);
      }
      e.is = i;
    })(Re || (Re = {}));
    var ee;
    (function (e) {
      function t(r, n) {
        return {
          uri: r,
          version: n
        };
      }
      e.create = t;
      function i(r) {
        var n = r;
        return (
          s.defined(n) &&
          s.string(n.uri) &&
          (n.version === null || s.integer(n.version))
        );
      }
      e.is = i;
    })(ee || (ee = {}));
    var We;
    (function (e) {
      function t(r, n, a, o) {
        return {
          uri: r,
          languageId: n,
          version: a,
          text: o
        };
      }
      e.create = t;
      function i(r) {
        var n = r;
        return (
          s.defined(n) &&
          s.string(n.uri) &&
          s.string(n.languageId) &&
          s.integer(n.version) &&
          s.string(n.text)
        );
      }
      e.is = i;
    })(We || (We = {}));
    var z;
    (function (e) {
      (e.PlainText = 'plaintext'), (e.Markdown = 'markdown');
    })(z || (z = {}));
    (function (e) {
      function t(i) {
        var r = i;
        return r === e.PlainText || r === e.Markdown;
      }
      e.is = t;
    })(z || (z = {}));
    var ve;
    (function (e) {
      function t(i) {
        var r = i;
        return s.objectLiteral(i) && z.is(r.kind) && s.string(r.value);
      }
      e.is = t;
    })(ve || (ve = {}));
    var m;
    (function (e) {
      (e.Text = 1),
        (e.Method = 2),
        (e.Function = 3),
        (e.Constructor = 4),
        (e.Field = 5),
        (e.Variable = 6),
        (e.Class = 7),
        (e.Interface = 8),
        (e.Module = 9),
        (e.Property = 10),
        (e.Unit = 11),
        (e.Value = 12),
        (e.Enum = 13),
        (e.Keyword = 14),
        (e.Snippet = 15),
        (e.Color = 16),
        (e.File = 17),
        (e.Reference = 18),
        (e.Folder = 19),
        (e.EnumMember = 20),
        (e.Constant = 21),
        (e.Struct = 22),
        (e.Event = 23),
        (e.Operator = 24),
        (e.TypeParameter = 25);
    })(m || (m = {}));
    var ne;
    (function (e) {
      (e.PlainText = 1), (e.Snippet = 2);
    })(ne || (ne = {}));
    var De;
    (function (e) {
      e.Deprecated = 1;
    })(De || (De = {}));
    var Ne;
    (function (e) {
      function t(r, n, a) {
        return {
          newText: r,
          insert: n,
          replace: a
        };
      }
      e.create = t;
      function i(r) {
        var n = r;
        return n && s.string(n.newText) && k.is(n.insert) && k.is(n.replace);
      }
      e.is = i;
    })(Ne || (Ne = {}));
    var Me;
    (function (e) {
      (e.asIs = 1), (e.adjustIndentation = 2);
    })(Me || (Me = {}));
    var Fe;
    (function (e) {
      function t(i) {
        return {
          label: i
        };
      }
      e.create = t;
    })(Fe || (Fe = {}));
    var je;
    (function (e) {
      function t(i, r) {
        return {
          items: i || [],
          isIncomplete: !!r
        };
      }
      e.create = t;
    })(je || (je = {}));
    var re;
    (function (e) {
      function t(r) {
        return r.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&');
      }
      e.fromPlainText = t;
      function i(r) {
        var n = r;
        return (
          s.string(n) ||
          (s.objectLiteral(n) && s.string(n.language) && s.string(n.value))
        );
      }
      e.is = i;
    })(re || (re = {}));
    var Ue;
    (function (e) {
      function t(i) {
        var r = i;
        return (
          !!r &&
          s.objectLiteral(r) &&
          (ve.is(r.contents) ||
            re.is(r.contents) ||
            s.typedArray(r.contents, re.is)) &&
          (i.range === void 0 || k.is(i.range))
        );
      }
      e.is = t;
    })(Ue || (Ue = {}));
    var Ve;
    (function (e) {
      function t(i, r) {
        return r
          ? {
              label: i,
              documentation: r
            }
          : {
              label: i
            };
      }
      e.create = t;
    })(Ve || (Ve = {}));
    var Ke;
    (function (e) {
      function t(i, r) {
        for (var n = [], a = 2; a < arguments.length; a++)
          n[a - 2] = arguments[a];
        var o = {
          label: i
        };
        return (
          s.defined(r) && (o.documentation = r),
          s.defined(n) ? (o.parameters = n) : (o.parameters = []),
          o
        );
      }
      e.create = t;
    })(Ke || (Ke = {}));
    var N;
    (function (e) {
      (e.Text = 1), (e.Read = 2), (e.Write = 3);
    })(N || (N = {}));
    var He;
    (function (e) {
      function t(i, r) {
        var n = {
          range: i
        };
        return s.number(r) && (n.kind = r), n;
      }
      e.create = t;
    })(He || (He = {}));
    var v;
    (function (e) {
      (e.File = 1),
        (e.Module = 2),
        (e.Namespace = 3),
        (e.Package = 4),
        (e.Class = 5),
        (e.Method = 6),
        (e.Property = 7),
        (e.Field = 8),
        (e.Constructor = 9),
        (e.Enum = 10),
        (e.Interface = 11),
        (e.Function = 12),
        (e.Variable = 13),
        (e.Constant = 14),
        (e.String = 15),
        (e.Number = 16),
        (e.Boolean = 17),
        (e.Array = 18),
        (e.Object = 19),
        (e.Key = 20),
        (e.Null = 21),
        (e.EnumMember = 22),
        (e.Struct = 23),
        (e.Event = 24),
        (e.Operator = 25),
        (e.TypeParameter = 26);
    })(v || (v = {}));
    var Je;
    (function (e) {
      e.Deprecated = 1;
    })(Je || (Je = {}));
    var Be;
    (function (e) {
      function t(i, r, n, a, o) {
        var u = {
          name: i,
          kind: r,
          location: {
            uri: a,
            range: n
          }
        };
        return o && (u.containerName = o), u;
      }
      e.create = t;
    })(Be || (Be = {}));
    var ze;
    (function (e) {
      function t(r, n, a, o, u, c) {
        var h = {
          name: r,
          detail: n,
          kind: a,
          range: o,
          selectionRange: u
        };
        return c !== void 0 && (h.children = c), h;
      }
      e.create = t;
      function i(r) {
        var n = r;
        return (
          n &&
          s.string(n.name) &&
          s.number(n.kind) &&
          k.is(n.range) &&
          k.is(n.selectionRange) &&
          (n.detail === void 0 || s.string(n.detail)) &&
          (n.deprecated === void 0 || s.boolean(n.deprecated)) &&
          (n.children === void 0 || Array.isArray(n.children)) &&
          (n.tags === void 0 || Array.isArray(n.tags))
        );
      }
      e.is = i;
    })(ze || (ze = {}));
    var qe;
    (function (e) {
      (e.Empty = ''),
        (e.QuickFix = 'quickfix'),
        (e.Refactor = 'refactor'),
        (e.RefactorExtract = 'refactor.extract'),
        (e.RefactorInline = 'refactor.inline'),
        (e.RefactorRewrite = 'refactor.rewrite'),
        (e.Source = 'source'),
        (e.SourceOrganizeImports = 'source.organizeImports'),
        (e.SourceFixAll = 'source.fixAll');
    })(qe || (qe = {}));
    var Xe;
    (function (e) {
      function t(r, n) {
        var a = {
          diagnostics: r
        };
        return n != null && (a.only = n), a;
      }
      e.create = t;
      function i(r) {
        var n = r;
        return (
          s.defined(n) &&
          s.typedArray(n.diagnostics, Q.is) &&
          (n.only === void 0 || s.typedArray(n.only, s.string))
        );
      }
      e.is = i;
    })(Xe || (Xe = {}));
    var Ye;
    (function (e) {
      function t(r, n, a) {
        var o = {
            title: r
          },
          u = !0;
        return (
          typeof n == 'string'
            ? ((u = !1), (o.kind = n))
            : K.is(n)
            ? (o.command = n)
            : (o.edit = n),
          u && a !== void 0 && (o.kind = a),
          o
        );
      }
      e.create = t;
      function i(r) {
        var n = r;
        return (
          n &&
          s.string(n.title) &&
          (n.diagnostics === void 0 || s.typedArray(n.diagnostics, Q.is)) &&
          (n.kind === void 0 || s.string(n.kind)) &&
          (n.edit !== void 0 || n.command !== void 0) &&
          (n.command === void 0 || K.is(n.command)) &&
          (n.isPreferred === void 0 || s.boolean(n.isPreferred)) &&
          (n.edit === void 0 || me.is(n.edit))
        );
      }
      e.is = i;
    })(Ye || (Ye = {}));
    var $e;
    (function (e) {
      function t(r, n) {
        var a = {
          range: r
        };
        return s.defined(n) && (a.data = n), a;
      }
      e.create = t;
      function i(r) {
        var n = r;
        return (
          s.defined(n) &&
          k.is(n.range) &&
          (s.undefined(n.command) || K.is(n.command))
        );
      }
      e.is = i;
    })($e || ($e = {}));
    var Ge;
    (function (e) {
      function t(r, n) {
        return {
          tabSize: r,
          insertSpaces: n
        };
      }
      e.create = t;
      function i(r) {
        var n = r;
        return (
          s.defined(n) && s.uinteger(n.tabSize) && s.boolean(n.insertSpaces)
        );
      }
      e.is = i;
    })(Ge || (Ge = {}));
    var Qe;
    (function (e) {
      function t(r, n, a) {
        return {
          range: r,
          target: n,
          data: a
        };
      }
      e.create = t;
      function i(r) {
        var n = r;
        return (
          s.defined(n) &&
          k.is(n.range) &&
          (s.undefined(n.target) || s.string(n.target))
        );
      }
      e.is = i;
    })(Qe || (Qe = {}));
    var Ze;
    (function (e) {
      function t(r, n) {
        return {
          range: r,
          parent: n
        };
      }
      e.create = t;
      function i(r) {
        var n = r;
        return (
          n !== void 0 &&
          k.is(n.range) &&
          (n.parent === void 0 || e.is(n.parent))
        );
      }
      e.is = i;
    })(Ze || (Ze = {}));
    var en;
    (function (e) {
      function t(a, o, u, c) {
        return new Ln(a, o, u, c);
      }
      e.create = t;
      function i(a) {
        var o = a;
        return !!(
          s.defined(o) &&
          s.string(o.uri) &&
          (s.undefined(o.languageId) || s.string(o.languageId)) &&
          s.uinteger(o.lineCount) &&
          s.func(o.getText) &&
          s.func(o.positionAt) &&
          s.func(o.offsetAt)
        );
      }
      e.is = i;
      function r(a, o) {
        for (
          var u = a.getText(),
            c = n(o, function (E, R) {
              var U = E.range.start.line - R.range.start.line;
              return U === 0
                ? E.range.start.character - R.range.start.character
                : U;
            }),
            h = u.length,
            p = c.length - 1;
          p >= 0;
          p--
        ) {
          var d = c[p],
            b = a.offsetAt(d.range.start),
            g = a.offsetAt(d.range.end);
          if (g <= h)
            u = u.substring(0, b) + d.newText + u.substring(g, u.length);
          else throw new Error('Overlapping edit');
          h = b;
        }
        return u;
      }
      e.applyEdits = r;
      function n(a, o) {
        if (a.length <= 1) return a;
        var u = (a.length / 2) | 0,
          c = a.slice(0, u),
          h = a.slice(u);
        n(c, o), n(h, o);
        for (var p = 0, d = 0, b = 0; p < c.length && d < h.length; ) {
          var g = o(c[p], h[d]);
          g <= 0 ? (a[b++] = c[p++]) : (a[b++] = h[d++]);
        }
        for (; p < c.length; ) a[b++] = c[p++];
        for (; d < h.length; ) a[b++] = h[d++];
        return a;
      }
    })(en || (en = {}));
    var Ln = (function () {
        function e(t, i, r, n) {
          (this._uri = t),
            (this._languageId = i),
            (this._version = r),
            (this._content = n),
            (this._lineOffsets = void 0);
        }
        return (
          Object.defineProperty(e.prototype, 'uri', {
            get: function () {
              return this._uri;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'languageId', {
            get: function () {
              return this._languageId;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'version', {
            get: function () {
              return this._version;
            },
            enumerable: !1,
            configurable: !0
          }),
          (e.prototype.getText = function (t) {
            if (t) {
              var i = this.offsetAt(t.start),
                r = this.offsetAt(t.end);
              return this._content.substring(i, r);
            }
            return this._content;
          }),
          (e.prototype.update = function (t, i) {
            (this._content = t.text),
              (this._version = i),
              (this._lineOffsets = void 0);
          }),
          (e.prototype.getLineOffsets = function () {
            if (this._lineOffsets === void 0) {
              for (
                var t = [], i = this._content, r = !0, n = 0;
                n < i.length;
                n++
              ) {
                r && (t.push(n), (r = !1));
                var a = i.charAt(n);
                (r =
                  a === '\r' ||
                  a ===
                    `
`),
                  a === '\r' &&
                    n + 1 < i.length &&
                    i.charAt(n + 1) ===
                      `
` &&
                    n++;
              }
              r && i.length > 0 && t.push(i.length), (this._lineOffsets = t);
            }
            return this._lineOffsets;
          }),
          (e.prototype.positionAt = function (t) {
            t = Math.max(Math.min(t, this._content.length), 0);
            var i = this.getLineOffsets(),
              r = 0,
              n = i.length;
            if (n === 0) return _.create(0, t);
            for (; r < n; ) {
              var a = Math.floor((r + n) / 2);
              i[a] > t ? (n = a) : (r = a + 1);
            }
            var o = r - 1;
            return _.create(o, t - i[o]);
          }),
          (e.prototype.offsetAt = function (t) {
            var i = this.getLineOffsets();
            if (t.line >= i.length) return this._content.length;
            if (t.line < 0) return 0;
            var r = i[t.line],
              n = t.line + 1 < i.length ? i[t.line + 1] : this._content.length;
            return Math.max(Math.min(r + t.character, n), r);
          }),
          Object.defineProperty(e.prototype, 'lineCount', {
            get: function () {
              return this.getLineOffsets().length;
            },
            enumerable: !1,
            configurable: !0
          }),
          e
        );
      })(),
      s;
    (function (e) {
      var t = Object.prototype.toString;
      function i(g) {
        return typeof g < 'u';
      }
      e.defined = i;
      function r(g) {
        return typeof g > 'u';
      }
      e.undefined = r;
      function n(g) {
        return g === !0 || g === !1;
      }
      e.boolean = n;
      function a(g) {
        return t.call(g) === '[object String]';
      }
      e.string = a;
      function o(g) {
        return t.call(g) === '[object Number]';
      }
      e.number = o;
      function u(g, E, R) {
        return t.call(g) === '[object Number]' && E <= g && g <= R;
      }
      e.numberRange = u;
      function c(g) {
        return (
          t.call(g) === '[object Number]' && -2147483648 <= g && g <= 2147483647
        );
      }
      e.integer = c;
      function h(g) {
        return t.call(g) === '[object Number]' && 0 <= g && g <= 2147483647;
      }
      e.uinteger = h;
      function p(g) {
        return t.call(g) === '[object Function]';
      }
      e.func = p;
      function d(g) {
        return g !== null && typeof g == 'object';
      }
      e.objectLiteral = d;
      function b(g, E) {
        return Array.isArray(g) && g.every(E);
      }
      e.typedArray = b;
    })(s || (s = {}));
    var te = class {
      constructor(t, i, r) {
        this._languageId = t;
        this._worker = i;
        let n = (o) => {
            let u = o.getLanguageId();
            if (u !== this._languageId) return;
            let c;
            (this._listener[o.uri.toString()] = o.onDidChangeContent(() => {
              window.clearTimeout(c),
                (c = window.setTimeout(() => this._doValidate(o.uri, u), 500));
            })),
              this._doValidate(o.uri, u);
          },
          a = (o) => {
            l.editor.setModelMarkers(o, this._languageId, []);
            let u = o.uri.toString(),
              c = this._listener[u];
            c && (c.dispose(), delete this._listener[u]);
          };
        this._disposables.push(l.editor.onDidCreateModel(n)),
          this._disposables.push(l.editor.onWillDisposeModel(a)),
          this._disposables.push(
            l.editor.onDidChangeModelLanguage((o) => {
              a(o.model), n(o.model);
            })
          ),
          this._disposables.push(
            r((o) => {
              l.editor.getModels().forEach((u) => {
                u.getLanguageId() === this._languageId && (a(u), n(u));
              });
            })
          ),
          this._disposables.push({
            dispose: () => {
              l.editor.getModels().forEach(a);
              for (let o in this._listener) this._listener[o].dispose();
            }
          }),
          l.editor.getModels().forEach(n);
      }
      _disposables = [];
      _listener = Object.create(null);
      dispose() {
        this._disposables.forEach((t) => t && t.dispose()),
          (this._disposables.length = 0);
      }
      _doValidate(t, i) {
        this._worker(t)
          .then((r) => r.doValidation(t.toString()))
          .then((r) => {
            let n = r.map((o) => Wn(t, o)),
              a = l.editor.getModel(t);
            a && a.getLanguageId() === i && l.editor.setModelMarkers(a, i, n);
          })
          .then(void 0, (r) => {
            console.error(r);
          });
      }
    };
    function Rn(e) {
      switch (e) {
        case O.Error:
          return l.MarkerSeverity.Error;
        case O.Warning:
          return l.MarkerSeverity.Warning;
        case O.Information:
          return l.MarkerSeverity.Info;
        case O.Hint:
          return l.MarkerSeverity.Hint;
        default:
          return l.MarkerSeverity.Info;
      }
    }
    function Wn(e, t) {
      let i = typeof t.code == 'number' ? String(t.code) : t.code;
      return {
        severity: Rn(t.severity),
        startLineNumber: t.range.start.line + 1,
        startColumn: t.range.start.character + 1,
        endLineNumber: t.range.end.line + 1,
        endColumn: t.range.end.character + 1,
        message: t.message,
        code: i,
        source: t.source
      };
    }
    var ie = class {
      constructor(t, i) {
        this._worker = t;
        this._triggerCharacters = i;
      }
      get triggerCharacters() {
        return this._triggerCharacters;
      }
      provideCompletionItems(t, i, r, n) {
        let a = t.uri;
        return this._worker(a)
          .then((o) => o.doComplete(a.toString(), S(i)))
          .then((o) => {
            if (!o) return;
            let u = t.getWordUntilPosition(i),
              c = new l.Range(
                i.lineNumber,
                u.startColumn,
                i.lineNumber,
                u.endColumn
              ),
              h = o.items.map((p) => {
                let d = {
                  label: p.label,
                  insertText: p.insertText || p.label,
                  sortText: p.sortText,
                  filterText: p.filterText,
                  documentation: p.documentation,
                  detail: p.detail,
                  command: Mn(p.command),
                  range: c,
                  kind: Nn(p.kind)
                };
                return (
                  p.textEdit &&
                    (Dn(p.textEdit)
                      ? (d.range = {
                          insert: C(p.textEdit.insert),
                          replace: C(p.textEdit.replace)
                        })
                      : (d.range = C(p.textEdit.range)),
                    (d.insertText = p.textEdit.newText)),
                  p.additionalTextEdits &&
                    (d.additionalTextEdits = p.additionalTextEdits.map(M)),
                  p.insertTextFormat === ne.Snippet &&
                    (d.insertTextRules =
                      l.languages.CompletionItemInsertTextRule.InsertAsSnippet),
                  d
                );
              });
            return {
              isIncomplete: o.isIncomplete,
              suggestions: h
            };
          });
      }
    };
    function S(e) {
      if (!!e)
        return {
          character: e.column - 1,
          line: e.lineNumber - 1
        };
    }
    function ke(e) {
      if (!!e)
        return {
          start: {
            line: e.startLineNumber - 1,
            character: e.startColumn - 1
          },
          end: {
            line: e.endLineNumber - 1,
            character: e.endColumn - 1
          }
        };
    }
    function C(e) {
      if (!!e)
        return new l.Range(
          e.start.line + 1,
          e.start.character + 1,
          e.end.line + 1,
          e.end.character + 1
        );
    }
    function Dn(e) {
      return typeof e.insert < 'u' && typeof e.replace < 'u';
    }
    function Nn(e) {
      let t = l.languages.CompletionItemKind;
      switch (e) {
        case m.Text:
          return t.Text;
        case m.Method:
          return t.Method;
        case m.Function:
          return t.Function;
        case m.Constructor:
          return t.Constructor;
        case m.Field:
          return t.Field;
        case m.Variable:
          return t.Variable;
        case m.Class:
          return t.Class;
        case m.Interface:
          return t.Interface;
        case m.Module:
          return t.Module;
        case m.Property:
          return t.Property;
        case m.Unit:
          return t.Unit;
        case m.Value:
          return t.Value;
        case m.Enum:
          return t.Enum;
        case m.Keyword:
          return t.Keyword;
        case m.Snippet:
          return t.Snippet;
        case m.Color:
          return t.Color;
        case m.File:
          return t.File;
        case m.Reference:
          return t.Reference;
      }
      return t.Property;
    }
    function M(e) {
      if (!!e)
        return {
          range: C(e.range),
          text: e.newText
        };
    }
    function Mn(e) {
      return e && e.command === 'editor.action.triggerSuggest'
        ? {
            id: e.command,
            title: e.title,
            arguments: e.arguments
          }
        : void 0;
    }
    var ae = class {
      constructor(t) {
        this._worker = t;
      }
      provideHover(t, i, r) {
        let n = t.uri;
        return this._worker(n)
          .then((a) => a.doHover(n.toString(), S(i)))
          .then((a) => {
            if (!!a)
              return {
                range: C(a.range),
                contents: jn(a.contents)
              };
          });
      }
    };
    function Fn(e) {
      return e && typeof e == 'object' && typeof e.kind == 'string';
    }
    function nn(e) {
      return typeof e == 'string'
        ? {
            value: e
          }
        : Fn(e)
        ? e.kind === 'plaintext'
          ? {
              value: e.value.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&')
            }
          : {
              value: e.value
            }
        : {
            value:
              '```' +
              e.language +
              `
` +
              e.value +
              '\n```\n'
          };
    }
    function jn(e) {
      if (!!e) return Array.isArray(e) ? e.map(nn) : [nn(e)];
    }
    var rn = class {
      constructor(t) {
        this._worker = t;
      }
      provideDocumentHighlights(t, i, r) {
        let n = t.uri;
        return this._worker(n)
          .then((a) => a.findDocumentHighlights(n.toString(), S(i)))
          .then((a) => {
            if (!!a)
              return a.map((o) => ({
                range: C(o.range),
                kind: Un(o.kind)
              }));
          });
      }
    };
    function Un(e) {
      switch (e) {
        case N.Read:
          return l.languages.DocumentHighlightKind.Read;
        case N.Write:
          return l.languages.DocumentHighlightKind.Write;
        case N.Text:
          return l.languages.DocumentHighlightKind.Text;
      }
      return l.languages.DocumentHighlightKind.Text;
    }
    var tn = class {
      constructor(t) {
        this._worker = t;
      }
      provideDefinition(t, i, r) {
        let n = t.uri;
        return this._worker(n)
          .then((a) => a.findDefinition(n.toString(), S(i)))
          .then((a) => {
            if (!!a) return [an(a)];
          });
      }
    };
    function an(e) {
      return {
        uri: l.Uri.parse(e.uri),
        range: C(e.range)
      };
    }
    var on = class {
        constructor(t) {
          this._worker = t;
        }
        provideReferences(t, i, r, n) {
          let a = t.uri;
          return this._worker(a)
            .then((o) => o.findReferences(a.toString(), S(i)))
            .then((o) => {
              if (!!o) return o.map(an);
            });
        }
      },
      sn = class {
        constructor(t) {
          this._worker = t;
        }
        provideRenameEdits(t, i, r, n) {
          let a = t.uri;
          return this._worker(a)
            .then((o) => o.doRename(a.toString(), S(i), r))
            .then((o) => Vn(o));
        }
      };
    function Vn(e) {
      if (!e || !e.changes) return;
      let t = [];
      for (let i in e.changes) {
        let r = l.Uri.parse(i);
        for (let n of e.changes[i])
          t.push({
            resource: r,
            edit: {
              range: C(n.range),
              text: n.newText
            }
          });
      }
      return {
        edits: t
      };
    }
    var oe = class {
      constructor(t) {
        this._worker = t;
      }
      provideDocumentSymbols(t, i) {
        let r = t.uri;
        return this._worker(r)
          .then((n) => n.findDocumentSymbols(r.toString()))
          .then((n) => {
            if (!!n)
              return n.map((a) => ({
                name: a.name,
                detail: '',
                containerName: a.containerName,
                kind: Kn(a.kind),
                range: C(a.location.range),
                selectionRange: C(a.location.range),
                tags: []
              }));
          });
      }
    };
    function Kn(e) {
      let t = l.languages.SymbolKind;
      switch (e) {
        case v.File:
          return t.Array;
        case v.Module:
          return t.Module;
        case v.Namespace:
          return t.Namespace;
        case v.Package:
          return t.Package;
        case v.Class:
          return t.Class;
        case v.Method:
          return t.Method;
        case v.Property:
          return t.Property;
        case v.Field:
          return t.Field;
        case v.Constructor:
          return t.Constructor;
        case v.Enum:
          return t.Enum;
        case v.Interface:
          return t.Interface;
        case v.Function:
          return t.Function;
        case v.Variable:
          return t.Variable;
        case v.Constant:
          return t.Constant;
        case v.String:
          return t.String;
        case v.Number:
          return t.Number;
        case v.Boolean:
          return t.Boolean;
        case v.Array:
          return t.Array;
      }
      return t.Function;
    }
    var un = class {
        constructor(t) {
          this._worker = t;
        }
        provideLinks(t, i) {
          let r = t.uri;
          return this._worker(r)
            .then((n) => n.findDocumentLinks(r.toString()))
            .then((n) => {
              if (!!n)
                return {
                  links: n.map((a) => ({
                    range: C(a.range),
                    url: a.target
                  }))
                };
            });
        }
      },
      se = class {
        constructor(t) {
          this._worker = t;
        }
        provideDocumentFormattingEdits(t, i, r) {
          let n = t.uri;
          return this._worker(n).then((a) =>
            a.format(n.toString(), null, cn(i)).then((o) => {
              if (!(!o || o.length === 0)) return o.map(M);
            })
          );
        }
      },
      ue = class {
        constructor(t) {
          this._worker = t;
        }
        provideDocumentRangeFormattingEdits(t, i, r, n) {
          let a = t.uri;
          return this._worker(a).then((o) =>
            o.format(a.toString(), ke(i), cn(r)).then((u) => {
              if (!(!u || u.length === 0)) return u.map(M);
            })
          );
        }
      };
    function cn(e) {
      return {
        tabSize: e.tabSize,
        insertSpaces: e.insertSpaces
      };
    }
    var ce = class {
        constructor(t) {
          this._worker = t;
        }
        provideDocumentColors(t, i) {
          let r = t.uri;
          return this._worker(r)
            .then((n) => n.findDocumentColors(r.toString()))
            .then((n) => {
              if (!!n)
                return n.map((a) => ({
                  color: a.color,
                  range: C(a.range)
                }));
            });
        }
        provideColorPresentations(t, i, r) {
          let n = t.uri;
          return this._worker(n)
            .then((a) =>
              a.getColorPresentations(n.toString(), i.color, ke(i.range))
            )
            .then((a) => {
              if (!!a)
                return a.map((o) => {
                  let u = {
                    label: o.label
                  };
                  return (
                    o.textEdit && (u.textEdit = M(o.textEdit)),
                    o.additionalTextEdits &&
                      (u.additionalTextEdits = o.additionalTextEdits.map(M)),
                    u
                  );
                });
            });
        }
      },
      le = class {
        constructor(t) {
          this._worker = t;
        }
        provideFoldingRanges(t, i, r) {
          let n = t.uri;
          return this._worker(n)
            .then((a) => a.getFoldingRanges(n.toString(), i))
            .then((a) => {
              if (!!a)
                return a.map((o) => {
                  let u = {
                    start: o.startLine + 1,
                    end: o.endLine + 1
                  };
                  return typeof o.kind < 'u' && (u.kind = Hn(o.kind)), u;
                });
            });
        }
      };
    function Hn(e) {
      switch (e) {
        case D.Comment:
          return l.languages.FoldingRangeKind.Comment;
        case D.Imports:
          return l.languages.FoldingRangeKind.Imports;
        case D.Region:
          return l.languages.FoldingRangeKind.Region;
      }
    }
    var de = class {
      constructor(t) {
        this._worker = t;
      }
      provideSelectionRanges(t, i, r) {
        let n = t.uri;
        return this._worker(n)
          .then((a) => a.getSelectionRanges(n.toString(), i.map(S)))
          .then((a) => {
            if (!!a)
              return a.map((o) => {
                let u = [];
                for (; o; )
                  u.push({
                    range: C(o.range)
                  }),
                    (o = o.parent);
                return u;
              });
          });
      }
    };
    function fe(e, t) {
      t === void 0 && (t = !1);
      var i = e.length,
        r = 0,
        n = '',
        a = 0,
        o = 16,
        u = 0,
        c = 0,
        h = 0,
        p = 0,
        d = 0;
      function b(f, w) {
        for (var x = 0, I = 0; x < f || !w; ) {
          var y = e.charCodeAt(r);
          if (y >= 48 && y <= 57) I = I * 16 + y - 48;
          else if (y >= 65 && y <= 70) I = I * 16 + y - 65 + 10;
          else if (y >= 97 && y <= 102) I = I * 16 + y - 97 + 10;
          else break;
          r++, x++;
        }
        return x < f && (I = -1), I;
      }
      function g(f) {
        (r = f), (n = ''), (a = 0), (o = 16), (d = 0);
      }
      function E() {
        var f = r;
        if (e.charCodeAt(r) === 48) r++;
        else for (r++; r < e.length && F(e.charCodeAt(r)); ) r++;
        if (r < e.length && e.charCodeAt(r) === 46)
          if ((r++, r < e.length && F(e.charCodeAt(r))))
            for (r++; r < e.length && F(e.charCodeAt(r)); ) r++;
          else return (d = 3), e.substring(f, r);
        var w = r;
        if (r < e.length && (e.charCodeAt(r) === 69 || e.charCodeAt(r) === 101))
          if (
            (r++,
            ((r < e.length && e.charCodeAt(r) === 43) ||
              e.charCodeAt(r) === 45) &&
              r++,
            r < e.length && F(e.charCodeAt(r)))
          ) {
            for (r++; r < e.length && F(e.charCodeAt(r)); ) r++;
            w = r;
          } else d = 3;
        return e.substring(f, w);
      }
      function R() {
        for (var f = '', w = r; ; ) {
          if (r >= i) {
            (f += e.substring(w, r)), (d = 2);
            break;
          }
          var x = e.charCodeAt(r);
          if (x === 34) {
            (f += e.substring(w, r)), r++;
            break;
          }
          if (x === 92) {
            if (((f += e.substring(w, r)), r++, r >= i)) {
              d = 2;
              break;
            }
            var I = e.charCodeAt(r++);
            switch (I) {
              case 34:
                f += '"';
                break;
              case 92:
                f += '\\';
                break;
              case 47:
                f += '/';
                break;
              case 98:
                f += '\b';
                break;
              case 102:
                f += '\f';
                break;
              case 110:
                f += `
`;
                break;
              case 114:
                f += '\r';
                break;
              case 116:
                f += '	';
                break;
              case 117:
                var y = b(4, !0);
                y >= 0 ? (f += String.fromCharCode(y)) : (d = 4);
                break;
              default:
                d = 5;
            }
            w = r;
            continue;
          }
          if (x >= 0 && x <= 31)
            if (q(x)) {
              (f += e.substring(w, r)), (d = 2);
              break;
            } else d = 6;
          r++;
        }
        return f;
      }
      function U() {
        if (((n = ''), (d = 0), (a = r), (c = u), (p = h), r >= i))
          return (a = i), (o = 17);
        var f = e.charCodeAt(r);
        if (ye(f)) {
          do r++, (n += String.fromCharCode(f)), (f = e.charCodeAt(r));
          while (ye(f));
          return (o = 15);
        }
        if (q(f))
          return (
            r++,
            (n += String.fromCharCode(f)),
            f === 13 &&
              e.charCodeAt(r) === 10 &&
              (r++,
              (n += `
`)),
            u++,
            (h = r),
            (o = 14)
          );
        switch (f) {
          case 123:
            return r++, (o = 1);
          case 125:
            return r++, (o = 2);
          case 91:
            return r++, (o = 3);
          case 93:
            return r++, (o = 4);
          case 58:
            return r++, (o = 6);
          case 44:
            return r++, (o = 5);
          case 34:
            return r++, (n = R()), (o = 10);
          case 47:
            var w = r - 1;
            if (e.charCodeAt(r + 1) === 47) {
              for (r += 2; r < i && !q(e.charCodeAt(r)); ) r++;
              return (n = e.substring(w, r)), (o = 12);
            }
            if (e.charCodeAt(r + 1) === 42) {
              r += 2;
              for (var x = i - 1, I = !1; r < x; ) {
                var y = e.charCodeAt(r);
                if (y === 42 && e.charCodeAt(r + 1) === 47) {
                  (r += 2), (I = !0);
                  break;
                }
                r++,
                  q(y) &&
                    (y === 13 && e.charCodeAt(r) === 10 && r++, u++, (h = r));
              }
              return I || (r++, (d = 1)), (n = e.substring(w, r)), (o = 13);
            }
            return (n += String.fromCharCode(f)), r++, (o = 16);
          case 45:
            if (
              ((n += String.fromCharCode(f)),
              r++,
              r === i || !F(e.charCodeAt(r)))
            )
              return (o = 16);
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return (n += E()), (o = 11);
          default:
            for (; r < i && kn(f); ) r++, (f = e.charCodeAt(r));
            if (a !== r) {
              switch (((n = e.substring(a, r)), n)) {
                case 'true':
                  return (o = 8);
                case 'false':
                  return (o = 9);
                case 'null':
                  return (o = 7);
              }
              return (o = 16);
            }
            return (n += String.fromCharCode(f)), r++, (o = 16);
        }
      }
      function kn(f) {
        if (ye(f) || q(f)) return !1;
        switch (f) {
          case 125:
          case 93:
          case 123:
          case 91:
          case 34:
          case 58:
          case 44:
          case 47:
            return !1;
        }
        return !0;
      }
      function yn() {
        var f;
        do f = U();
        while (f >= 12 && f <= 15);
        return f;
      }
      return {
        setPosition: g,
        getPosition: function () {
          return r;
        },
        scan: t ? yn : U,
        getToken: function () {
          return o;
        },
        getTokenValue: function () {
          return n;
        },
        getTokenOffset: function () {
          return a;
        },
        getTokenLength: function () {
          return r - a;
        },
        getTokenStartLine: function () {
          return c;
        },
        getTokenStartCharacter: function () {
          return a - p;
        },
        getTokenError: function () {
          return d;
        }
      };
    }
    function ye(e) {
      return (
        e === 32 ||
        e === 9 ||
        e === 11 ||
        e === 12 ||
        e === 160 ||
        e === 5760 ||
        (e >= 8192 && e <= 8203) ||
        e === 8239 ||
        e === 8287 ||
        e === 12288 ||
        e === 65279
      );
    }
    function q(e) {
      return e === 10 || e === 13 || e === 8232 || e === 8233;
    }
    function F(e) {
      return e >= 48 && e <= 57;
    }
    var ln;
    (function (e) {
      e.DEFAULT = {
        allowTrailingComma: !1
      };
    })(ln || (ln = {}));
    var dn = fe;
    function pn(e) {
      return {
        getInitialState: () => new j(null, null, !1, null),
        tokenize: (t, i) => ur(e, t, i)
      };
    }
    var fn = 'delimiter.bracket.json',
      gn = 'delimiter.array.json',
      Zn = 'delimiter.colon.json',
      er = 'delimiter.comma.json',
      nr = 'keyword.json',
      rr = 'keyword.json',
      tr = 'string.value.json',
      ir = 'number.json',
      ar = 'string.key.json',
      or = 'comment.block.json',
      sr = 'comment.line.json';
    var L = class {
        constructor(t, i) {
          this.parent = t;
          this.type = i;
        }
        static pop(t) {
          return t ? t.parent : null;
        }
        static push(t, i) {
          return new L(t, i);
        }
        static equals(t, i) {
          if (!t && !i) return !0;
          if (!t || !i) return !1;
          for (; t && i; ) {
            if (t === i) return !0;
            if (t.type !== i.type) return !1;
            (t = t.parent), (i = i.parent);
          }
          return !0;
        }
      },
      j = class {
        _state;
        scanError;
        lastWasColon;
        parents;
        constructor(t, i, r, n) {
          (this._state = t),
            (this.scanError = i),
            (this.lastWasColon = r),
            (this.parents = n);
        }
        clone() {
          return new j(
            this._state,
            this.scanError,
            this.lastWasColon,
            this.parents
          );
        }
        equals(t) {
          return t === this
            ? !0
            : !t || !(t instanceof j)
            ? !1
            : this.scanError === t.scanError &&
              this.lastWasColon === t.lastWasColon &&
              L.equals(this.parents, t.parents);
        }
        getStateData() {
          return this._state;
        }
        setStateData(t) {
          this._state = t;
        }
      };
    function ur(e, t, i, r = 0) {
      let n = 0,
        a = !1;
      switch (i.scanError) {
        case 2:
          (t = '"' + t), (n = 1);
          break;
        case 1:
          (t = '/*' + t), (n = 2);
          break;
      }
      let o = dn(t),
        u = i.lastWasColon,
        c = i.parents,
        h = {
          tokens: [],
          endState: i.clone()
        };
      for (;;) {
        let p = r + o.getPosition(),
          d = '',
          b = o.scan();
        if (b === 17) break;
        if (p === r + o.getPosition())
          throw new Error(
            'Scanner did not advance, next 3 characters are: ' +
              t.substr(o.getPosition(), 3)
          );
        switch ((a && (p -= n), (a = n > 0), b)) {
          case 1:
            (c = L.push(c, 0)), (d = fn), (u = !1);
            break;
          case 2:
            (c = L.pop(c)), (d = fn), (u = !1);
            break;
          case 3:
            (c = L.push(c, 1)), (d = gn), (u = !1);
            break;
          case 4:
            (c = L.pop(c)), (d = gn), (u = !1);
            break;
          case 6:
            (d = Zn), (u = !0);
            break;
          case 5:
            (d = er), (u = !1);
            break;
          case 8:
          case 9:
            (d = nr), (u = !1);
            break;
          case 7:
            (d = rr), (u = !1);
            break;
          case 10:
            let E = (c ? c.type : 0) === 1;
            (d = u || E ? tr : ar), (u = !1);
            break;
          case 11:
            (d = ir), (u = !1);
            break;
        }
        if (e)
          switch (b) {
            case 12:
              d = sr;
              break;
            case 13:
              d = or;
              break;
          }
        (h.endState = new j(i.getStateData(), o.getTokenError(), u, c)),
          h.tokens.push({
            startIndex: p,
            scopes: d
          });
      }
      return h;
    }
    var mn = class extends te {
      constructor(t, i, r) {
        super(t, i, r.onDidChange);
        this._disposables.push(
          l.editor.onWillDisposeModel((n) => {
            this._resetSchema(n.uri);
          })
        ),
          this._disposables.push(
            l.editor.onDidChangeModelLanguage((n) => {
              this._resetSchema(n.model.uri);
            })
          );
      }
      _resetSchema(t) {
        this._worker().then((i) => {
          i.resetSchema(t.toString());
        });
      }
    };
    function cr(e) {
      let t = [],
        i = [],
        r = new V(e);
      t.push(r);
      let n = (...u) => r.getLanguageServiceWorker(...u);
      function a() {
        let { languageId: u, modeConfiguration: c } = e;
        vn(i),
          c.documentFormattingEdits &&
            i.push(
              l.languages.registerDocumentFormattingEditProvider(u, new se(n))
            ),
          c.documentRangeFormattingEdits &&
            i.push(
              l.languages.registerDocumentRangeFormattingEditProvider(
                u,
                new ue(n)
              )
            ),
          c.completionItems &&
            i.push(
              l.languages.registerCompletionItemProvider(
                u,
                new ie(n, [' ', ':', '"'])
              )
            ),
          c.hovers && i.push(l.languages.registerHoverProvider(u, new ae(n))),
          c.documentSymbols &&
            i.push(l.languages.registerDocumentSymbolProvider(u, new oe(n))),
          c.tokens && i.push(l.languages.setTokensProvider(u, pn(!0))),
          c.colors && i.push(l.languages.registerColorProvider(u, new ce(n))),
          c.foldingRanges &&
            i.push(l.languages.registerFoldingRangeProvider(u, new le(n))),
          c.diagnostics && i.push(new mn(u, n, e)),
          c.selectionRanges &&
            i.push(l.languages.registerSelectionRangeProvider(u, new de(n)));
      }
      a(), t.push(l.languages.setLanguageConfiguration(e.languageId, lr));
      let o = e.modeConfiguration;
      return (
        e.onDidChange((u) => {
          u.modeConfiguration !== o && ((o = u.modeConfiguration), a());
        }),
        t.push(hn(i)),
        hn(t)
      );
    }
    function hn(e) {
      return {
        dispose: () => vn(e)
      };
    }
    function vn(e) {
      for (; e.length; ) e.pop().dispose();
    }
    var lr = {
      wordPattern: /(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,
      comments: {
        lineComment: '//',
        blockComment: ['/*', '*/']
      },
      brackets: [
        ['{', '}'],
        ['[', ']']
      ],
      autoClosingPairs: [
        {
          open: '{',
          close: '}',
          notIn: ['string']
        },
        {
          open: '[',
          close: ']',
          notIn: ['string']
        },
        {
          open: '"',
          close: '"',
          notIn: ['string']
        }
      ]
    };
    return An(dr);
  })();
  return moduleExports;
});
