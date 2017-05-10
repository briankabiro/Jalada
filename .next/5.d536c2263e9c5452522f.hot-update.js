webpackHotUpdate(5,{

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _style = __webpack_require__(555);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(559);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
			return _react2.default.createElement('div', { className: 'container', 'data-jsx': 565090263
			}, _react2.default.createElement('h1', {
				'data-jsx': 565090263
			}, 'Stories'), _react2.default.createElement('div', { id: 'stories-list', 'data-jsx': 565090263
			}, _react2.default.createElement('ul', {
				'data-jsx': 565090263
			}, list.map(function (story) {
				return _react2.default.createElement(_link2.default, { href: '/story' }, _react2.default.createElement('div', { className: 'story', key: story._id, 'data-jsx': 565090263
				}, _react2.default.createElement('h2', {
					'data-jsx': 565090263
				}, story.title), _react2.default.createElement('p', {
					'data-jsx': 565090263
				}, story.story), _react2.default.createElement('div', { className: 'details-div', 'data-jsx': 565090263
				}, _react2.default.createElement('div', { id: 'picture-div', 'data-jsx': 565090263
				}), _react2.default.createElement('div', { id: 'name-and-time-div', 'data-jsx': 565090263
				}, _react2.default.createElement('span', {
					'data-jsx': 565090263
				}, story.author), _react2.default.createElement('span', {
					'data-jsx': 565090263
				}, story.time, 'h ago // ', story.time, ' min read')))));
			}))), _react2.default.createElement(_style2.default, {
				styleId: 565090263,
				css: '.container[data-jsx="565090263"]{width:70%;}.story[data-jsx="565090263"]{border-bottom: 1px solid grey;padding-bottom:1em;}.details-div[data-jsx="565090263"]{display:-webkit-flex; display:flex;-webkit-flex-flow:row;-moz-flex-flow:row;flex-flow:row;}#picture-div[data-jsx="565090263"]{width:3em;height:3em;background-color:indigo;border-radius:100%;margin-right:0.5em;}#name-and-time-div[data-jsx="565090263"]{display:-webkit-flex; display:flex;-webkit-flex-direction:column;-moz-flex-direction:column;flex-direction:column;justify-content:space-around;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHN0b3JpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNnQixBQUNBLGlDQUNBLFVBQ1YsQ0FDTSw2QkFDd0IsOEJBQ1gsbUJBQ25CLENBQ1ksbUNBQ0MsbUNBQ0MsdURBQ2QsQ0FDWSxtQ0FDRixVQUNDLFdBQ2Esd0JBQ0wsbUJBQ0EsbUJBQ25CLENBQ2tCLHlDQUNMLG1DQUNTLCtFQUNPLDZCQUM3QiIsImZpbGUiOiJjb21wb25lbnRzXFxzdG9yaWVzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3VzZXIvRGVza3RvcC93M2MvUHJvamVjdHMvSmFsYWRhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JpZXMgZXh0ZW5kcyBDb21wb25lbnR7XHJcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoe3JlcX0pe1xyXG5cdFx0Y29uc3Qge2RifSA9IHJlcVxyXG5cdFx0Y29uc3QgbGlzdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJykuZmluZCgpLnNvcnQoeyBjcmVhdGVkQXQ6IC0xfSkudG9BcnJheSgpO1xyXG5cdFx0cmV0dXJuIHtsaXN0fVxyXG5cdH1cclxuXHRyZW5kZXIoKXtcclxuXHRcdGNvbnN0IGxpc3QgPSB0aGlzLnByb3BzLmxpc3RcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0PGgxPlN0b3JpZXM8L2gxPlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJzdG9yaWVzLWxpc3RcIj5cclxuXHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGxpc3QubWFwKHN0b3J5ID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvc3RvcnlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcInN0b3J5XCIga2V5PXtzdG9yeS5faWR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoMj57c3RvcnkudGl0bGV9PC9oMj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57c3Rvcnkuc3Rvcnl9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJkZXRhaWxzLWRpdlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBpZD1cInBpY3R1cmUtZGl2XCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGlkPVwibmFtZS1hbmQtdGltZS1kaXZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e3N0b3J5LmF1dGhvcn08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntzdG9yeS50aW1lfWggYWdvIC8vIHtzdG9yeS50aW1lfSBtaW4gcmVhZDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2Plx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0KSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0XHQuY29udGFpbmVye1xyXG5cdFx0XHRcdFx0XHR3aWR0aDo3MCU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuc3Rvcnl7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbToxZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuZGV0YWlscy1kaXZ7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcclxuXHRcdFx0XHRcdFx0ZmxleC1mbG93OnJvdztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCNwaWN0dXJlLWRpdntcclxuXHRcdFx0XHRcdFx0d2lkdGg6M2VtO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6M2VtO1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOmluZGlnbztcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czoxMDAlO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6MC41ZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQjbmFtZS1hbmQtdGltZS1kaXZ7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcclxuXHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9XHJcblx0XHRcdFx0PC9zdHlsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59Il19 */\n/*@ sourceURL=components\\stories.js */'
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

	return Stories;
}(_react.Component);

exports.default = Stories;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\user\\Desktop\\w3c\\Projects\\Jalada\\components\\stories.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\user\\Desktop\\w3c\\Projects\\Jalada\\components\\stories.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0b3JpZXMuanM/MjMyYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlOzs7O0FBQ1I7Ozs7OztJQUVjOzs7Ozs7Ozs7OzsyQkFPbkI7T0FBTSxPQUFPLEtBQUssTUFDbEI7MEJBQ0MsdUJBQUssV0FBVSx5QkFDZDtJQURELGtCQUNDO2dCQUFBO0FBQUEsTUFDQSxtREFBSyxJQUFHLDRCQUNQO3NCQUFBO2dCQUVFO0FBRkYsV0FFTyxJQUFJO1dBQ1IsZ0JBQUMsZ0NBQUssTUFDTCxtREFBSyxXQUFZLFNBQVEsS0FBSyxNQUFNLGlCQUNuQzt1QkFBQTtpQkFBSztBQUFMLGFBQ0E7aUJBQUk7QUFBSixhQUNBLCtDQUFLLFdBQVksMkJBQ2hCOzhDQUFLLElBQUcsMkJBQ1I7d0JBQUEsdUJBQUssSUFBRyxpQ0FDUDt1QkFBQTtpQkFBTztBQUFQLGFBQ0E7aUJBQU87QUFBUCxhQUFhLE1BQWUsbUJBQU0sTUFBbEM7QUFUTDthQUxKO1NBbUREO0FBbkRDOzs7Ozs7UUFSNkI7Ozs7O1lBQ3ZCO2FBQU0sSUFBTjs7ZUFDWSxHQUFHLFdBQVcsU0FBUyxPQUFPLEtBQUssRUFBRSxXQUFXLENBQUMsS0FBSTs7WUFBbEU7O3lDQUNDLEVBQUMsTUFBRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUo0Qjs7a0JBQWhCLFEiLCJmaWxlIjoiNS5kNTM2YzIyNjNlOWM1NDUyNTIyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JpZXMgZXh0ZW5kcyBDb21wb25lbnR7XHJcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoe3JlcX0pe1xyXG5cdFx0Y29uc3Qge2RifSA9IHJlcVxyXG5cdFx0Y29uc3QgbGlzdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJykuZmluZCgpLnNvcnQoeyBjcmVhdGVkQXQ6IC0xfSkudG9BcnJheSgpO1xyXG5cdFx0cmV0dXJuIHtsaXN0fVxyXG5cdH1cclxuXHRyZW5kZXIoKXtcclxuXHRcdGNvbnN0IGxpc3QgPSB0aGlzLnByb3BzLmxpc3RcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0PGgxPlN0b3JpZXM8L2gxPlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJzdG9yaWVzLWxpc3RcIj5cclxuXHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGxpc3QubWFwKHN0b3J5ID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvc3RvcnlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcInN0b3J5XCIga2V5PXtzdG9yeS5faWR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoMj57c3RvcnkudGl0bGV9PC9oMj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57c3Rvcnkuc3Rvcnl9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJkZXRhaWxzLWRpdlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBpZD1cInBpY3R1cmUtZGl2XCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGlkPVwibmFtZS1hbmQtdGltZS1kaXZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e3N0b3J5LmF1dGhvcn08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntzdG9yeS50aW1lfWggYWdvIC8vIHtzdG9yeS50aW1lfSBtaW4gcmVhZDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2Plx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0KSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0XHQuY29udGFpbmVye1xyXG5cdFx0XHRcdFx0XHR3aWR0aDo3MCU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuc3Rvcnl7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbToxZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuZGV0YWlscy1kaXZ7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcclxuXHRcdFx0XHRcdFx0ZmxleC1mbG93OnJvdztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCNwaWN0dXJlLWRpdntcclxuXHRcdFx0XHRcdFx0d2lkdGg6M2VtO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6M2VtO1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOmluZGlnbztcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czoxMDAlO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6MC41ZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQjbmFtZS1hbmQtdGltZS1kaXZ7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcclxuXHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9XHJcblx0XHRcdFx0PC9zdHlsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zdG9yaWVzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==