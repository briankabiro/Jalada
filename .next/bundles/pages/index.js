
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stories = __webpack_require__(562);

var _stories2 = _interopRequireDefault(_stories);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _stories2.default;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\user\\Desktop\\w3c\\Projects\\Jalada\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\user\\Desktop\\w3c\\Projects\\Jalada\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(82)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(72);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(563);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(561);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\user\\Desktop\\w3c\\Projects\\Jalada\\components\\stories.js';


var Stories = function (_Component) {
	(0, _inherits3.default)(Stories, _Component);

	function Stories() {
		(0, _classCallCheck3.default)(this, Stories);

		return (0, _possibleConstructorReturn3.default)(this, (Stories.__proto__ || (0, _getPrototypeOf2.default)(Stories)).apply(this, arguments));
	}

	(0, _createClass3.default)(Stories, [{
		key: 'render',
		value: function render() {
			var list = this.props.list;
			return _react2.default.createElement('div', { className: 'container', 'data-jsx': 565090263,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			}, _react2.default.createElement('h1', {
				'data-jsx': 565090263,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 19
				}
			}, 'Stories'), _react2.default.createElement('div', { id: 'stories-list', 'data-jsx': 565090263,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 20
				}
			}, _react2.default.createElement('ul', {
				'data-jsx': 565090263,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 21
				}
			}, list.map(function (story) {
				return _react2.default.createElement(_link2.default, { prefetch: true, href: { pathname: 'story', query: { id: story._id } }, __source: {
						fileName: _jsxFileName,
						lineNumber: 24
					}
				}, _react2.default.createElement('div', { className: 'story', key: story._id, 'data-jsx': 565090263,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 25
					}
				}, _react2.default.createElement('h2', {
					'data-jsx': 565090263,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 26
					}
				}, story.title), _react2.default.createElement('p', {
					'data-jsx': 565090263,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 27
					}
				}, story.story), _react2.default.createElement('div', { className: 'details-div', 'data-jsx': 565090263,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 28
					}
				}, _react2.default.createElement('div', { id: 'picture-div', 'data-jsx': 565090263,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 29
					}
				}), _react2.default.createElement('div', { id: 'name-and-time-div', 'data-jsx': 565090263,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 30
					}
				}, _react2.default.createElement('span', {
					'data-jsx': 565090263,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 31
					}
				}, story.author), _react2.default.createElement('span', {
					'data-jsx': 565090263,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 32
					}
				}, story.time, 'h ago // ', story.time, ' min read')))));
			}))), _react2.default.createElement(_style2.default, {
				styleId: 565090263,
				css: '.container[data-jsx="565090263"]{width:70%;}.story[data-jsx="565090263"]{border-bottom: 1px solid grey;padding-bottom:1em;}.details-div[data-jsx="565090263"]{display:-webkit-flex; display:flex;-webkit-flex-flow:row;-moz-flex-flow:row;flex-flow:row;}#picture-div[data-jsx="565090263"]{width:3em;height:3em;background-color:indigo;border-radius:100%;margin-right:0.5em;}#name-and-time-div[data-jsx="565090263"]{display:-webkit-flex; display:flex;-webkit-flex-direction:column;-moz-flex-direction:column;flex-direction:column;justify-content:space-around;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHN0b3JpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NnQixBQUNBLGlDQUNBLFVBQ1YsQ0FDTSw2QkFDd0IsOEJBQ1gsbUJBQ25CLENBQ1ksbUNBQ0MsbUNBQ0MsdURBQ2QsQ0FDWSxtQ0FDRixVQUNDLFdBQ2Esd0JBQ0wsbUJBQ0EsbUJBQ25CLENBQ2tCLHlDQUNMLG1DQUNTLCtFQUNPLDZCQUM3QiIsImZpbGUiOiJjb21wb25lbnRzXFxzdG9yaWVzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3VzZXIvRGVza3RvcC93M2MvUHJvamVjdHMvSmFsYWRhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JpZXMgZXh0ZW5kcyBDb21wb25lbnR7XHJcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoe3JlcX0pe1xyXG5cdFx0aWYocmVxKXtcclxuXHRcdFx0Y29uc3Qge2RifSA9IHJlcVxyXG5cdFx0XHRjb25zdCBsaXN0ID0gYXdhaXQgZGIuY29sbGVjdGlvbigncG9zdHMnKS5maW5kKCkuc29ydCh7IGNyZWF0ZWRBdDogLTF9KS50b0FycmF5KCk7XHJcblx0XHRcdHJldHVybiB7bGlzdH1cdFx0XHRcclxuXHRcdH1cclxuXHRcdCBjb25zdCB7IGxpc3QgfSA9IGF3YWl0IHN1cGVyYWdlbnQuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpJylcclxuICAgICBcdFx0IC50aGVuKHJlcyA9PiByZXMuYm9keSlcclxuICAgIFx0cmV0dXJuIHsgbGlzdCB9XHJcblx0fVxyXG5cdHJlbmRlcigpe1xyXG5cdFx0Y29uc3QgbGlzdCA9IHRoaXMucHJvcHMubGlzdFxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHQ8aDE+U3RvcmllczwvaDE+XHJcblx0XHRcdFx0PGRpdiBpZD1cInN0b3JpZXMtbGlzdFwiPlxyXG5cdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0bGlzdC5tYXAoc3RvcnkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgcHJlZmV0Y2ggaHJlZj17e3BhdGhuYW1lOidzdG9yeScsIHF1ZXJ5OntpZDpzdG9yeS5faWR9fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJzdG9yeVwiIGtleT17c3RvcnkuX2lkfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDI+e3N0b3J5LnRpdGxlfTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+e3N0b3J5LnN0b3J5fTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZGV0YWlscy1kaXZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJwaWN0dXJlLWRpdlwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBpZD1cIm5hbWUtYW5kLXRpbWUtZGl2XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntzdG9yeS5hdXRob3J9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57c3RvcnkudGltZX1oIGFnbyAvLyB7c3RvcnkudGltZX0gbWluIHJlYWQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdCkpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdFx0LmNvbnRhaW5lcntcclxuXHRcdFx0XHRcdFx0d2lkdGg6NzAlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnN0b3J5e1xyXG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206MWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmRldGFpbHMtZGl2e1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRcdGZsZXgtZmxvdzpyb3c7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQjcGljdHVyZS1kaXZ7XHJcblx0XHRcdFx0XHRcdHdpZHRoOjNlbTtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OjNlbTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjppbmRpZ287XHJcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6MTAwJTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjAuNWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0I25hbWUtYW5kLXRpbWUtZGl2e1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfVxyXG5cdFx0XHRcdDwvc3R5bGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufSJdfQ== */\n/*@ sourceURL=components\\stories.js */'
			}));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
				var req = _ref.req;

				var db, _list, _ref3, list;

				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!req) {
									_context.next = 6;
									break;
								}

								db = req.db;
								_context.next = 4;
								return db.collection('posts').find().sort({ createdAt: -1 }).toArray();

							case 4:
								_list = _context.sent;
								return _context.abrupt('return', { list: _list });

							case 6:
								_context.next = 8;
								return superagent.get('http://localhost:3000/api').then(function (res) {
									return res.body;
								});

							case 8:
								_ref3 = _context.sent;
								list = _ref3.list;
								return _context.abrupt('return', { list: list });

							case 11:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref2.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return Stories;
}(_react.Component);

exports.default = Stories;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\user\\Desktop\\w3c\\Projects\\Jalada\\components\\stories.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\user\\Desktop\\w3c\\Projects\\Jalada\\components\\stories.js"); } } })();

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(558);


/***/ })

},[564]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NTAzYzAwYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0b3JpZXMuanM/NTAzYzAwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvc3RvcmllcydcclxuZXhwb3J0IGRlZmF1bHQgQXBwXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yaWVzIGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHtyZXF9KXtcclxuXHRcdGlmKHJlcSl7XHJcblx0XHRcdGNvbnN0IHtkYn0gPSByZXFcclxuXHRcdFx0Y29uc3QgbGlzdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJykuZmluZCgpLnNvcnQoeyBjcmVhdGVkQXQ6IC0xfSkudG9BcnJheSgpO1xyXG5cdFx0XHRyZXR1cm4ge2xpc3R9XHRcdFx0XHJcblx0XHR9XHJcblx0XHQgY29uc3QgeyBsaXN0IH0gPSBhd2FpdCBzdXBlcmFnZW50LmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaScpXHJcbiAgICAgXHRcdCAudGhlbihyZXMgPT4gcmVzLmJvZHkpXHJcbiAgICBcdHJldHVybiB7IGxpc3QgfVxyXG5cdH1cclxuXHRyZW5kZXIoKXtcclxuXHRcdGNvbnN0IGxpc3QgPSB0aGlzLnByb3BzLmxpc3RcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0PGgxPlN0b3JpZXM8L2gxPlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJzdG9yaWVzLWxpc3RcIj5cclxuXHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGxpc3QubWFwKHN0b3J5ID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIHByZWZldGNoIGhyZWY9e3twYXRobmFtZTonc3RvcnknLCBxdWVyeTp7aWQ6c3RvcnkuX2lkfX19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwic3RvcnlcIiBrZXk9e3N0b3J5Ll9pZH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGgyPntzdG9yeS50aXRsZX08L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPntzdG9yeS5zdG9yeX08L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImRldGFpbHMtZGl2XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGlkPVwicGljdHVyZS1kaXZcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJuYW1lLWFuZC10aW1lLWRpdlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57c3RvcnkuYXV0aG9yfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e3N0b3J5LnRpbWV9aCBhZ28gLy8ge3N0b3J5LnRpbWV9IG1pbiByZWFkPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQpKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHRcdC5jb250YWluZXJ7XHJcblx0XHRcdFx0XHRcdHdpZHRoOjcwJTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5zdG9yeXtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOjFlbTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5kZXRhaWxzLWRpdntcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0XHRmbGV4LWZsb3c6cm93O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0I3BpY3R1cmUtZGl2e1xyXG5cdFx0XHRcdFx0XHR3aWR0aDozZW07XHJcblx0XHRcdFx0XHRcdGhlaWdodDozZW07XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6aW5kaWdvO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOjEwMCU7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDowLjVlbTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCNuYW1lLWFuZC10aW1lLWRpdntcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YH1cclxuXHRcdFx0XHQ8L3N0eWxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3N0b3JpZXMuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQVlBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUQTtBQUxBO0FBbURBO0FBbkRBOzs7Ozs7QUFiQTtBQUNBOzs7Ozs7O0FBQUE7OztBQUNBO0FBQ0E7QUFEQTs7QUFDQTtBQUNBO0FBREE7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBREE7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVZBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        