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

var _header = require('../components/header');

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