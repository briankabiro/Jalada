'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

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
				return _react2.default.createElement(_link2.default, { prefetch: true, href: { pathname: 'story', query: { id: story._id } } }, _react2.default.createElement('div', { className: 'story', key: story._id, 'data-jsx': 565090263
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
				css: '.container[data-jsx="565090263"]{width:70%;}.story[data-jsx="565090263"]{border-bottom: 1px solid grey;padding-bottom:1em;}.details-div[data-jsx="565090263"]{display:-webkit-flex; display:flex;-webkit-flex-flow:row;-moz-flex-flow:row;flex-flow:row;}#picture-div[data-jsx="565090263"]{width:3em;height:3em;background-color:indigo;border-radius:100%;margin-right:0.5em;}#name-and-time-div[data-jsx="565090263"]{display:-webkit-flex; display:flex;-webkit-flex-direction:column;-moz-flex-direction:column;flex-direction:column;justify-content:space-around;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHN0b3JpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NnQixBQUNBLGlDQUNBLFVBQ1YsQ0FDTSw2QkFDd0IsOEJBQ1gsbUJBQ25CLENBQ1ksbUNBQ0MsbUNBQ0MsdURBQ2QsQ0FDWSxtQ0FDRixVQUNDLFdBQ2Esd0JBQ0wsbUJBQ0EsbUJBQ25CLENBQ2tCLHlDQUNMLG1DQUNTLCtFQUNPLDZCQUM3QiIsImZpbGUiOiJjb21wb25lbnRzXFxzdG9yaWVzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3VzZXIvRGVza3RvcC93M2MvUHJvamVjdHMvSmFsYWRhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JpZXMgZXh0ZW5kcyBDb21wb25lbnR7XHJcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoe3JlcX0pe1xyXG5cdFx0aWYocmVxKXtcclxuXHRcdFx0Y29uc3Qge2RifSA9IHJlcVxyXG5cdFx0XHRjb25zdCBsaXN0ID0gYXdhaXQgZGIuY29sbGVjdGlvbigncG9zdHMnKS5maW5kKCkuc29ydCh7IGNyZWF0ZWRBdDogLTF9KS50b0FycmF5KCk7XHJcblx0XHRcdHJldHVybiB7bGlzdH1cdFx0XHRcclxuXHRcdH1cclxuXHRcdCBjb25zdCB7IGxpc3QgfSA9IGF3YWl0IHN1cGVyYWdlbnQuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpJylcclxuICAgICBcdFx0IC50aGVuKHJlcyA9PiByZXMuYm9keSlcclxuICAgIFx0cmV0dXJuIHsgbGlzdCB9XHJcblx0fVxyXG5cdHJlbmRlcigpe1xyXG5cdFx0Y29uc3QgbGlzdCA9IHRoaXMucHJvcHMubGlzdFxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHQ8aDE+U3RvcmllczwvaDE+XHJcblx0XHRcdFx0PGRpdiBpZD1cInN0b3JpZXMtbGlzdFwiPlxyXG5cdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0bGlzdC5tYXAoc3RvcnkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgcHJlZmV0Y2ggaHJlZj17e3BhdGhuYW1lOidzdG9yeScsIHF1ZXJ5OntpZDpzdG9yeS5faWR9fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJzdG9yeVwiIGtleT17c3RvcnkuX2lkfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDI+e3N0b3J5LnRpdGxlfTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+e3N0b3J5LnN0b3J5fTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZGV0YWlscy1kaXZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJwaWN0dXJlLWRpdlwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBpZD1cIm5hbWUtYW5kLXRpbWUtZGl2XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntzdG9yeS5hdXRob3J9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57c3RvcnkudGltZX1oIGFnbyAvLyB7c3RvcnkudGltZX0gbWluIHJlYWQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdCkpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdFx0LmNvbnRhaW5lcntcclxuXHRcdFx0XHRcdFx0d2lkdGg6NzAlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnN0b3J5e1xyXG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206MWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmRldGFpbHMtZGl2e1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRcdGZsZXgtZmxvdzpyb3c7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQjcGljdHVyZS1kaXZ7XHJcblx0XHRcdFx0XHRcdHdpZHRoOjNlbTtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OjNlbTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjppbmRpZ287XHJcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6MTAwJTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjAuNWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0I25hbWUtYW5kLXRpbWUtZGl2e1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfVxyXG5cdFx0XHRcdDwvc3R5bGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufSJdfQ== */\n/*@ sourceURL=components\\stories.js */'
			}));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
				var req = _ref2.req;

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
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return Stories;
}(_react.Component);

exports.default = Stories;