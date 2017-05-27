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
				css: '.container[data-jsx="565090263"]{width:70%;}.story[data-jsx="565090263"]{border-bottom: 1px solid grey;padding-bottom:1em;}.details-div[data-jsx="565090263"]{display:-webkit-flex; display:flex;-webkit-flex-flow:row;-moz-flex-flow:row;flex-flow:row;}#picture-div[data-jsx="565090263"]{width:3em;height:3em;background-color:indigo;border-radius:100%;margin-right:0.5em;}#name-and-time-div[data-jsx="565090263"]{display:-webkit-flex; display:flex;-webkit-flex-direction:column;-moz-flex-direction:column;flex-direction:column;justify-content:space-around;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHN0b3JpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNnQixBQUNBLGlDQUNBLFVBQ1YsQ0FDTSw2QkFDd0IsOEJBQ1gsbUJBQ25CLENBQ1ksbUNBQ0MsbUNBQ0MsdURBQ2QsQ0FDWSxtQ0FDRixVQUNDLFdBQ2Esd0JBQ0wsbUJBQ0EsbUJBQ25CLENBQ2tCLHlDQUNMLG1DQUNTLCtFQUNPLDZCQUM3QiIsImZpbGUiOiJjb21wb25lbnRzXFxzdG9yaWVzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3VzZXIvRGVza3RvcC93M2MvUHJvamVjdHMvSmFsYWRhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JpZXMgZXh0ZW5kcyBDb21wb25lbnR7XHJcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoe3JlcX0pe1xyXG5cdFx0Y29uc3Qge2RifSA9IHJlcVxyXG5cdFx0Y29uc3QgbGlzdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJykuZmluZCgpLnNvcnQoeyBjcmVhdGVkQXQ6IC0xfSkudG9BcnJheSgpO1xyXG5cdFx0cmV0dXJuIHtsaXN0fVxyXG5cdH1cclxuXHRyZW5kZXIoKXtcclxuXHRcdGNvbnN0IGxpc3QgPSB0aGlzLnByb3BzLmxpc3RcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0PGgxPlN0b3JpZXM8L2gxPlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJzdG9yaWVzLWxpc3RcIj5cclxuXHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGxpc3QubWFwKHN0b3J5ID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIHByZWZldGNoIGhyZWY9e3twYXRobmFtZTonc3RvcnknLCBxdWVyeTp7aWQ6c3RvcnkuX2lkfX19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwic3RvcnlcIiBrZXk9e3N0b3J5Ll9pZH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGgyPntzdG9yeS50aXRsZX08L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPntzdG9yeS5zdG9yeX08L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImRldGFpbHMtZGl2XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGlkPVwicGljdHVyZS1kaXZcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJuYW1lLWFuZC10aW1lLWRpdlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57c3RvcnkuYXV0aG9yfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e3N0b3J5LnRpbWV9aCBhZ28gLy8ge3N0b3J5LnRpbWV9IG1pbiByZWFkPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQpKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHRcdC5jb250YWluZXJ7XHJcblx0XHRcdFx0XHRcdHdpZHRoOjcwJTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5zdG9yeXtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOjFlbTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5kZXRhaWxzLWRpdntcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0XHRmbGV4LWZsb3c6cm93O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0I3BpY3R1cmUtZGl2e1xyXG5cdFx0XHRcdFx0XHR3aWR0aDozZW07XHJcblx0XHRcdFx0XHRcdGhlaWdodDozZW07XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6aW5kaWdvO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOjEwMCU7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDowLjVlbTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCNuYW1lLWFuZC10aW1lLWRpdntcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YH1cclxuXHRcdFx0XHQ8L3N0eWxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn0iXX0= */\n/*@ sourceURL=components\\stories.js */'
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