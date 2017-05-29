
          window.__NEXT_REGISTER_PAGE('/story', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(72);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _superagent = __webpack_require__(790);

var superagent = _interopRequireWildcard(_superagent);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\user\\Desktop\\w3c\\Projects\\Jalada\\pages\\story.js?entry';

var ObjectId = __webpack_require__(760).ObjectId;
// install superagent and check what it does, install url-parse to get host and then append host to superagent to see if it still works.
//add superagent route which receives id and then fetches that according to mongdb

var _class = function (_React$Component) {
	(0, _inherits3.default)(_class, _React$Component);

	(0, _createClass3.default)(_class, null, [{
		key: 'getInitialProps',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
				var req = _ref.req,
				    query = _ref.query;

				var db, id, story, _ref3, _story;

				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!req) {
									_context.next = 9;
									break;
								}

								db = req.db;
								id = query.id;
								_context.next = 5;
								return db.collection('posts').find({ "_id": ObjectId(id) }).toArray();

							case 5:
								story = _context.sent;
								return _context.abrupt('return', { story: story });

							case 9:
								_context.next = 11;
								return superagent.post('http://localhost:3000/api/story', query.id).then(function (res) {
									console.log("this is the body", res.body);
									return res.body;
								});

							case 11:
								_ref3 = _context.sent;
								_story = _ref3.story;
								return _context.abrupt('return', { story: _story });

							case 14:
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

	function _class(props) {
		(0, _classCallCheck3.default)(this, _class);

		return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));
	}

	(0, _createClass3.default)(_class, [{
		key: 'render',
		value: function render() {
			var story = this.props.story;
			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 29
				}
			}, _react2.default.createElement('h1', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 30
				}
			}, 'This is the story'), story && _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}, _react2.default.createElement('h1', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, story.title), _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, story.story)));
		}
	}]);

	return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\user\\Desktop\\w3c\\Projects\\Jalada\\pages\\story.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\user\\Desktop\\w3c\\Projects\\Jalada\\pages\\story.js"); } } })();
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
    })(module.exports.default || module.exports, "/story")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 799:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 800:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 801:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 802:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(695);


/***/ })

},[803]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXHN0b3J5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvc3RvcnkuanM/NDUxNDZiZiIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKT9jNTg5MTdjIiwid2VicGFjazovLy92ZXJ0eCAoaWdub3JlZCk/YzU4OTE3YyIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/ZDY2MyIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/YzU4OTE3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIHN1cGVyYWdlbnQgZnJvbSAnc3VwZXJhZ2VudCdcclxudmFyIE9iamVjdElkID0gcmVxdWlyZSgnbW9uZ29kYicpLk9iamVjdElkO1xyXG4vLyBpbnN0YWxsIHN1cGVyYWdlbnQgYW5kIGNoZWNrIHdoYXQgaXQgZG9lcywgaW5zdGFsbCB1cmwtcGFyc2UgdG8gZ2V0IGhvc3QgYW5kIHRoZW4gYXBwZW5kIGhvc3QgdG8gc3VwZXJhZ2VudCB0byBzZWUgaWYgaXQgc3RpbGwgd29ya3MuXHJcbi8vYWRkIHN1cGVyYWdlbnQgcm91dGUgd2hpY2ggcmVjZWl2ZXMgaWQgYW5kIHRoZW4gZmV0Y2hlcyB0aGF0IGFjY29yZGluZyB0byBtb25nZGJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe3JlcSxxdWVyeX0pe1xyXG5cdFx0aWYocmVxKXtcclxuXHRcdFx0Y29uc3QgeyBkYiB9ID0gcmVxXHJcblx0XHRcdGNvbnN0IGlkID0gcXVlcnkuaWRcclxuXHRcdFx0Y29uc3Qgc3RvcnkgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLmZpbmQoe1wiX2lkXCI6T2JqZWN0SWQoaWQpfSkudG9BcnJheSgpO1xyXG5cdFx0XHRyZXR1cm4ge3N0b3J5fVxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGNvbnN0IHtzdG9yeX0gPSBhd2FpdCBzdXBlcmFnZW50LnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc3RvcnknLCBxdWVyeS5pZClcclxuXHRcdFx0XHQudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGJvZHlcIixyZXMuYm9keSlcclxuXHRcdFx0XHRcdHJldHVybiByZXMuYm9keVx0XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0cmV0dXJuIHtzdG9yeX1cclxuXHRcdH1cclxuXHRcdH1cclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdCAgc3VwZXIocHJvcHMpO1xyXG5cdH1cclxuXHRyZW5kZXIoKXtcclxuXHRcdGNvbnN0IHN0b3J5ID0gdGhpcy5wcm9wcy5zdG9yeVxyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxoMT5UaGlzIGlzIHRoZSBzdG9yeTwvaDE+XHJcblx0XHRcdFx0e3N0b3J5ICYmIFxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGgxPntzdG9yeS50aXRsZX08L2gxPlxyXG5cdFx0XHRcdFx0XHQ8cD57c3Rvcnkuc3Rvcnl9PC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9zdG9yeS5qcz9lbnRyeSIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGNyeXB0byAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDc5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIvKiAoaWdub3JlZCkgKi9cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyB2ZXJ0eCAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDgwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIvKiAoaWdub3JlZCkgKi9cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyB1dGlsIChpZ25vcmVkKVxuLy8gbW9kdWxlIGlkID0gODAxXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIHV0aWwgKGlnbm9yZWQpXG4vLyBtb2R1bGUgaWQgPSA4MDJcbi8vIG1vZHVsZSBjaHVua3MgPSA2Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBREE7QUFDQTs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUVBO0FBQUE7QUFDQTs7Ozs7OztBQUFBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFDQTtBQUNBO0FBREE7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFDQTs7QUFEQTtBQUFBO0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7OztBQTNCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7Ozs7Ozs7QUNDQTs7Ozs7OztBQ0NBOzs7Ozs7O0FDQ0E7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        