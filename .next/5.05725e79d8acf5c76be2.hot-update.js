webpackHotUpdate(5,{

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(72);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(22);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(23);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(558);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(562);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//collection test 2, title, author, content

var Test = function (_Component) {
	(0, _inherits3.default)(Test, _Component);

	function Test() {
		(0, _classCallCheck3.default)(this, Test);

		return (0, _possibleConstructorReturn3.default)(this, (Test.__proto__ || (0, _getPrototypeOf2.default)(Test)).apply(this, arguments));
	}

	(0, _createClass3.default)(Test, [{
		key: 'render',
		value: function render() {
			var list = this.props.list;
			return _react2.default.createElement('div', {
				'data-jsx': 397946821
			}, _react2.default.createElement(_header2.default, null), _react2.default.createElement('h1', {
				'data-jsx': 397946821
			}, 'Hi there, my people'), _react2.default.createElement('div', { id: 'stories-list', 'data-jsx': 397946821
			}, _react2.default.createElement('ul', {
				'data-jsx': 397946821
			}, list.map(function (story) {
				return _react2.default.createElement('div', { key: story._id, 'data-jsx': 397946821
				}, _react2.default.createElement('div', {
					'data-jsx': 397946821
				}), _react2.default.createElement('i', {
					'data-jsx': 397946821
				}, story.title), ' by ', story.author, _react2.default.createElement('p', {
					'data-jsx': 397946821
				}, story.story));
			}))), _react2.default.createElement(_style2.default, {
				styleId: 397946821,
				css: '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx0cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJnQiIsImZpbGUiOiJwYWdlc1xcdHJ5LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3VzZXIvRGVza3RvcC93M2MvUHJvamVjdHMvSmFsYWRhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXHJcbi8vY29sbGVjdGlvbiB0ZXN0IDIsIHRpdGxlLCBhdXRob3IsIGNvbnRlbnRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdCBleHRlbmRzIENvbXBvbmVudHtcclxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7cmVxfSl7XHJcblx0XHRjb25zdCB7ZGJ9ID0gcmVxXHJcblx0XHRjb25zdCBsaXN0ID0gYXdhaXQgZGIuY29sbGVjdGlvbigncG9zdHMnKS5maW5kKCkuc29ydCh7IGNyZWF0ZWRBdDogLTF9KS50b0FycmF5KCk7XHJcblx0XHRyZXR1cm4ge2xpc3R9XHJcblx0fVxyXG5cdHJlbmRlcigpe1xyXG5cdFx0Y29uc3QgbGlzdCA9IHRoaXMucHJvcHMubGlzdFxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0PEhlYWRlciAvPlxyXG5cdFx0XHRcdDxoMT5IaSB0aGVyZSwgbXkgcGVvcGxlPC9oMT5cclxuXHRcdFx0XHQ8ZGl2IGlkPVwic3Rvcmllcy1saXN0XCI+XHJcblx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRsaXN0Lm1hcChzdG9yeSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17c3RvcnkuX2lkfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGk+e3N0b3J5LnRpdGxlfTwvaT4gYnkge3N0b3J5LmF1dGhvcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+e3N0b3J5LnN0b3J5fTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdCkpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cclxuXHRcdFx0XHRgfVxyXG5cdFx0XHRcdDwvc3R5bGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufSJdfQ== */\n/*@ sourceURL=pages\\try.js */'
			}));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
				var req = _ref2.req;
				var db, list;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								db = req.db;
								_context.next = 3;
								return db.collection('posts').find().sort({ createdAt: -1 }).toArray();

							case 3:
								list = _context.sent;
								return _context.abrupt('return', { list: list });

							case 5:
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

	return Test;
}(_react.Component);

exports.default = Test;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\user\\Desktop\\w3c\\Projects\\Jalada\\pages\\try.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\user\\Desktop\\w3c\\Projects\\Jalada\\pages\\try.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

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
    })(module.exports.default || module.exports, "/try")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90cnkuanM/OTNiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlOzs7O0FBQ1I7Ozs7OztBQUNQOztJQUNxQjs7Ozs7Ozs7Ozs7MkJBT25CO09BQU0sT0FBTyxLQUFLLE1BQ2xCOzBCQUNDO2dCQUNBO0FBREEsc0JBQ0MsZ0NBQ0E7Z0JBQUE7QUFBQSxNQUNBLCtEQUFLLElBQUcsNEJBQ1A7c0JBQUE7Z0JBRUU7QUFGRixXQUVPLElBQUk7MkJBQ1IsdUJBQUssS0FBSyxNQUFNLGlCQUNmO0tBREQ7aUJBRUM7QUFEQSx3QkFDQTtpQkFBSTtBQUFKLGFBQVUsUUFBZSxjQUN6QjtpQkFBSTtBQUFKLGFBQVU7QUFKWjthQU5KO1NBc0JEO0FBdEJDOzs7Ozs7UUFSNkI7Ozs7O1lBQ3ZCO2FBQU0sSUFBTjs7ZUFDWSxHQUFHLFdBQVcsU0FBUyxPQUFPLEtBQUssRUFBRSxXQUFXLENBQUMsS0FBSTs7WUFBbEU7O3lDQUNDLEVBQUMsTUFBRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUp5Qjs7a0JBQWIsSyIsImZpbGUiOiI1LjA1NzI1ZTc5ZDhhY2Y1Yzc2YmUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcclxuLy9jb2xsZWN0aW9uIHRlc3QgMiwgdGl0bGUsIGF1dGhvciwgY29udGVudFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHtyZXF9KXtcclxuXHRcdGNvbnN0IHtkYn0gPSByZXFcclxuXHRcdGNvbnN0IGxpc3QgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLmZpbmQoKS5zb3J0KHsgY3JlYXRlZEF0OiAtMX0pLnRvQXJyYXkoKTtcclxuXHRcdHJldHVybiB7bGlzdH1cclxuXHR9XHJcblx0cmVuZGVyKCl7XHJcblx0XHRjb25zdCBsaXN0ID0gdGhpcy5wcm9wcy5saXN0XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHQ8SGVhZGVyIC8+XHJcblx0XHRcdFx0PGgxPkhpIHRoZXJlLCBteSBwZW9wbGU8L2gxPlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJzdG9yaWVzLWxpc3RcIj5cclxuXHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGxpc3QubWFwKHN0b3J5ID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYga2V5PXtzdG9yeS5faWR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aT57c3RvcnkudGl0bGV9PC9pPiBieSB7c3RvcnkuYXV0aG9yfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD57c3Rvcnkuc3Rvcnl9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0KSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8c3R5bGUganN4PntgXHJcblxyXG5cdFx0XHRcdGB9XHJcblx0XHRcdFx0PC9zdHlsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvdHJ5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==