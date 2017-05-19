webpackHotUpdate(6,{

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(72);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(22);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(23);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// install superagent and check what it does, install url-parse to get host and then append host to superagent to see if it still works.

var _class = function (_React$Component) {
	(0, _inherits3.default)(_class, _React$Component);

	(0, _createClass3.default)(_class, null, [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
				var req = _ref2.req,
				    id = _ref2.query.id;

				var db, _story, _ref3, story;

				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!req) {
									_context.next = 7;
									break;
								}

								db = req.db;
								_context.next = 4;
								return db.collection('posts').find({ "_id": id }).toArray();

							case 4:
								_story = _context.sent;

								console.log(_story);
								return _context.abrupt('return', _story);

							case 7:
								_context.next = 9;
								return superagent.get('http://localhost:3000/api').then(function (res) {
									return res.body;
								});

							case 9:
								_ref3 = _context.sent;
								story = _ref3.story;
								return _context.abrupt('return', { list: list });

							case 12:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
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
			var req = this.props.req;
			return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, 'Hey'), _react2.default.createElement('p', null, 'These are the props', _react2.default.createElement('i', null, req)));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdG9yeS5qcz8wYjY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTzs7Ozs7O0FBQ1A7Ozs7Ozs7OztRQUcrQjtRQUFZLFdBQVAsTUFBTzs7Ozs7Ozs7YUFDdEM7OztBQUNLOzthQUFNLElBQU47O2VBQ2EsR0FBRyxXQUFXLFNBQVMsS0FBSyxFQUFDLE9BQU0sTUFBSzs7WUFBdEQ7MEJBQ047O2dCQUFRLElBQUk7eUNBQ0w7Ozs7MEJBRXlCLElBQUksNkJBQ25DLEtBQUs7Z0JBQU8sSUFBSTtBQURJOzs7eUJBQWY7c0JBQUE7eUNBRUEsRUFBQyxNQUFEOzs7Ozs7Ozs7Ozs7Ozs7QUFFUjs7O2lCQUFZLE9BQU87c0NBQUE7OytIQUVsQjs7Ozs7MkJBRUE7T0FBTSxNQUFNLEtBQUssTUFDakI7VUFDQyxxQ0FDQyxnREFDQSxpREFBc0IsMERBQUksTUFHNUI7Ozs7O0VBeEIyQixnQkFBTSIsImZpbGUiOiI2LjliNGVjZmQ2NGE1OWQ1MmI1MmI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vIGluc3RhbGwgc3VwZXJhZ2VudCBhbmQgY2hlY2sgd2hhdCBpdCBkb2VzLCBpbnN0YWxsIHVybC1wYXJzZSB0byBnZXQgaG9zdCBhbmQgdGhlbiBhcHBlbmQgaG9zdCB0byBzdXBlcmFnZW50IHRvIHNlZSBpZiBpdCBzdGlsbCB3b3Jrcy5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe3JlcSwgcXVlcnk6e2lkfX0pe1xyXG5cdFx0aWYocmVxKXtcclxuXHRcdFx0Y29uc3Qge2RifSA9IHJlcVxyXG5cdFx0XHRjb25zdCBzdG9yeSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJykuZmluZCh7XCJfaWRcIjppZH0pLnRvQXJyYXkoKTtcclxuXHRcdFx0Y29uc29sZS5sb2coc3RvcnkpXHJcblx0XHRcdHJldHVybiBzdG9yeVx0XHRcdFx0XHJcblx0XHR9XHJcblx0XHRjb25zdCB7c3Rvcnl9ID0gYXdhaXQgc3VwZXJhZ2VudC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGknKVxyXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmJvZHkpXHJcblx0XHRyZXR1cm4ge2xpc3R9XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0ICBzdXBlcihwcm9wcyk7XHJcblx0fVxyXG5cdHJlbmRlcigpe1xyXG5cdFx0Y29uc3QgcmVxID0gdGhpcy5wcm9wcy5yZXFcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8aDE+SGV5PC9oMT5cclxuXHRcdFx0XHQ8cD5UaGVzZSBhcmUgdGhlIHByb3BzPGk+e3JlcX08L2k+PC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9zdG9yeS5qcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=